import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { cleanText, loadLexicon } from "./humanize.mjs";

const lexicon = await loadLexicon(
  new URL("../references/spanish-lexicon.json", import.meta.url),
);

test("removes mechanical artifacts without breaking valid joiners", () => {
  const input = "Texto\u200Binvisible con\u00a0espacio y co\u00adpia. 👩‍💻";
  const { text, report } = cleanText(input, lexicon);

  assert.equal(text, "Textoinvisible con espacio y copia. 👩‍💻");
  assert.equal(report.invisibleCharacters, 2);
  assert.equal(report.normalizedSpaces, 1);
});

test("protects URLs and code from every cleanup pass", () => {
  const input = [
    "Hoy, con el objetivo de probar https://ejemplo.test/con\u200Bel-objetivo-de",
    "usa `con el objetivo de\u200B` y con el objetivo de medir.",
    "```txt",
    "en la actualidad\u200B",
    "```",
  ].join("\n");

  const { text } = cleanText(input, lexicon, { applyLexicon: true });

  assert.match(text, /https:\/\/ejemplo\.test\/con\u200Bel-objetivo-de/u);
  assert.match(text, /`con el objetivo de\u200B`/u);
  assert.match(text, /```txt\nen la actualidad\u200B\n```/u);
  assert.match(text, /para medir\./u);
});

test("reports lexicon matches without rewriting them by default", () => {
  const input = "En la actualidad trabajamos con el objetivo de mejorar.";
  const { text, report } = cleanText(input, lexicon);

  assert.equal(text, input);
  assert.deepEqual(
    report.lexiconMatches.map(({ phrase }) => phrase),
    ["en la actualidad", "con el objetivo de"],
  );
});

test("applies only entries explicitly marked safe", () => {
  const input = "En la actualidad conviene destacar que avanzamos con el fin de aprender.";
  const { text, report } = cleanText(input, lexicon, { applyLexicon: true });

  assert.equal(text, "Hoy conviene destacar que avanzamos para aprender.");
  assert.equal(report.lexiconReplacements, 2);
  assert.equal(report.lexiconMatches.length, 1);
  assert.equal(report.lexiconMatches[0].phrase, "conviene destacar que");
});

test("ships a valid, non-empty Spanish lexicon", async () => {
  const source = await readFile(
    new URL("../references/spanish-lexicon.json", import.meta.url),
    "utf8",
  );
  const parsed = JSON.parse(source);

  assert.ok(parsed.entries.length >= 12);
  assert.ok(parsed.entries.every((entry) => entry.phrase && entry.category));
});

for (const outputFlag of ["-o", "--output"]) {
  test(`rejects ${outputFlag} without an output path`, () => {
    const result = spawnSync(
      process.execPath,
      [fileURLToPath(new URL("./humanize.mjs", import.meta.url)), "draft.txt", outputFlag],
      { encoding: "utf8" },
    );

    assert.equal(result.status, 1);
    assert.match(result.stderr, /requires an output path/u);
  });
}
