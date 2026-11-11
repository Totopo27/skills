#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const DEFAULT_LEXICON = new URL(
  "../references/spanish-lexicon.json",
  import.meta.url,
);

const INVISIBLE_PATTERN = /[\u00AD\u034F\u061C\u180E\u200B\u200C\u2060\u2061\u2062\u2063\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB\u{E0000}-\u{E007F}]/gu;
const SPECIAL_SPACE_PATTERN = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/gu;

export async function loadLexicon(source = DEFAULT_LEXICON) {
  const contents = await readFile(source, "utf8");
  return JSON.parse(contents);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function phrasePattern(phrase) {
  return new RegExp(
    `(?<![\\p{L}\\p{N}])${escapeRegExp(phrase)}(?![\\p{L}\\p{N}])`,
    "giu",
  );
}

function preserveCapitalization(match, replacement) {
  if (!replacement) return replacement;
  if (match[0] === match[0].toLocaleUpperCase("es")) {
    return replacement[0].toLocaleUpperCase("es") + replacement.slice(1);
  }
  return replacement;
}

function protectSegments(text) {
  const protectedSegments = [];
  let value = text;
  const patterns = [
    /```[\s\S]*?```/g,
    /`[^`\r\n]+`/g,
    /(?:https?:\/\/|www\.)[^\s<>()]+/giu,
  ];

  for (const pattern of patterns) {
    value = value.replace(pattern, (segment) => {
      const token = `\uE000ESCRIBEHUMANO${protectedSegments.length}\uE001`;
      protectedSegments.push(segment);
      return token;
    });
  }

  return {
    text: value,
    restore(valueToRestore) {
      return valueToRestore.replace(
        /\uE000ESCRIBEHUMANO(\d+)\uE001/g,
        (_, index) => protectedSegments[Number(index)],
      );
    },
  };
}

export function cleanText(text, lexicon, options = {}) {
  const { applyLexicon = false } = options;
  const protectedText = protectSegments(text);
  const report = {
    invisibleCharacters: 0,
    normalizedSpaces: 0,
    lexiconReplacements: 0,
    lexiconMatches: [],
  };

  let cleaned = protectedText.text.replace(INVISIBLE_PATTERN, () => {
    report.invisibleCharacters += 1;
    return "";
  });

  cleaned = cleaned.replace(SPECIAL_SPACE_PATTERN, () => {
    report.normalizedSpaces += 1;
    return " ";
  });

  for (const entry of lexicon.entries ?? []) {
    const pattern = phrasePattern(entry.phrase);
    const matches = [...cleaned.matchAll(pattern)];
    if (matches.length === 0) continue;

    if (applyLexicon && entry.action === "replace" && entry.replacement) {
      cleaned = cleaned.replace(pattern, (match) => {
        report.lexiconReplacements += 1;
        return preserveCapitalization(match, entry.replacement);
      });
      continue;
    }

    report.lexiconMatches.push({
      phrase: entry.phrase,
      category: entry.category,
      count: matches.length,
      suggestion: entry.replacement ?? null,
    });
  }

  return { text: protectedText.restore(cleaned), report };
}

function parseArguments(argumentsList) {
  const options = {
    applyLexicon: false,
    input: null,
    output: null,
    report: false,
  };

  for (let index = 0; index < argumentsList.length; index += 1) {
    const argument = argumentsList[index];
    if (argument === "--apply-lexicon") options.applyLexicon = true;
    else if (argument === "--report") options.report = true;
    else if (argument === "--output" || argument === "-o") {
      const output = argumentsList[index + 1];
      if (!output || output.startsWith("-")) {
        throw new Error(`${argument} requires an output path`);
      }
      options.output = output;
      index += 1;
    } else if (!options.input) options.input = argument;
    else throw new Error(`Unexpected argument: ${argument}`);
  }

  if (!options.input) {
    throw new Error(
      "Usage: node scripts/humanize.mjs <input> [-o output] [--report] [--apply-lexicon]",
    );
  }
  return options;
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  const [text, lexicon] = await Promise.all([
    readFile(options.input, "utf8"),
    loadLexicon(),
  ]);
  const result = cleanText(text, lexicon, options);

  if (options.output) await writeFile(options.output, result.text, "utf8");
  else process.stdout.write(result.text);

  if (options.report) {
    process.stderr.write(`\n${JSON.stringify(result.report, null, 2)}\n`);
  }
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  main().catch((error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}
