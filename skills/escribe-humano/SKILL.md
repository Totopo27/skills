---
name: escribe-humano
description: "Trigger: escribe-humano, redacción humana, texto sin aroma a IA, narrativa humana. Preserva voz y elimina fórmulas y artefactos mecánicos."
license: Apache-2.0
metadata:
  author: "Gustavo"
  version: "2.0"
---

# Escribe Humano

Contrato de runtime para redactar y editar prosa con voz específica, estructura contextual e higiene mecánica.

## Activation Contract

Cargar esta skill cuando:
- El usuario invoque `escribe-humano`, `redacción humana`, `narrativa humana` o pida eliminar aroma a IA.
- Se redacten textos narrativos, ensayísticos, periodísticos o creativos.
- Se refactorice documentación o copy para remover clichés sintácticos de modelos de lenguaje.

## Hard Rules

1. **Voz antes que detector**: Conserva intención, registro e irregularidades deliberadas. No insertes errores, anécdotas, cifras ni opiniones falsas para aparentar humanidad.
2. **Concreción verificable**: Prefiere detalles relevantes y autorizados; no conviertas vaguedad en falsa precisión.
3. **Léxico contextual**: Trata `references/spanish-lexicon.json` como señales de revisión. Sustituye automáticamente solo entradas marcadas `replace` y solo si el sentido se conserva.
4. **Tipografía legítima**: No elimines rayas, comillas curvas, elipsis o viñetas por considerarlas huellas de IA. Corrige únicamente abuso, inconsistencia o petición explícita.
5. **Código y destinos intactos**: Preserva URLs, código, citas textuales, nombres propios y terminología técnica durante la limpieza.
6. **Afirmación honesta**: La limpieza reduce artefactos y fórmulas; nunca promete autoría humana, indetectabilidad ni un resultado en detectores externos.
7. **Reglas por modo**: Aplica StoryScope solo a narrativa. No impongas anacronías, subtramas, diálogo o finales abiertos a ensayo, periodismo, documentación o copy.

## Decision Gates

| Texto | Aplicar | Evitar |
|---|---|---|
| **Narrativa** | Cargar `references/storyscope.md`; usar conflicto, temporalidad y ambivalencia cuando sirvan a la obra. | Convertir rasgos estadísticos en obligaciones o fórmulas nuevas. |
| **Ensayo / periodismo** | Tesis o foco claros, evidencia atribuible y transiciones motivadas. | Moraleja redundante, conectores automáticos y fuentes inventadas. |
| **Documentación** | Precisión, secuencia verificable y terminología estable. | Anacronías, ambigüedad deliberada y variación que perjudique comprensión. |
| **Copy / redes** | Audiencia, canal, voz y llamada a la acción autorizada. | Engagement bait, grandilocuencia y experiencias personales fabricadas. |
| **Edición de borrador** | Cargar `references/mechanical-cleanup.md`; proteger contenido literal antes de limpiar. | Reescritura léxica indiscriminada. |

## Execution Steps

1. **Clasificar**: Determina el modo por propósito y formato; combina modos solo si el encargo realmente los mezcla.
2. **Fijar la voz**: Usa las instrucciones y muestras disponibles. Carga `references/voice-profile.md` cuando haya autor, audiencia o restricciones factuales relevantes.
3. **Redactar o editar**: Mantén significado, hechos y contenido literal. En narrativa, aplica StoryScope con criterio; en otros modos, sigue su compuerta específica.
4. **Limpiar**: Para borradores, ejecuta primero la higiene mecánica sin reemplazos; activa el léxico seguro solo cuando el usuario pida transformación y revisa cada cambio.
5. **Auditar**: Revisa voz, concreción, ritmo contextual, fórmulas, integridad factual y preservación de URLs/código. Reescribe señales estructurales con juicio, no por puntuación.
6. **Entregar**: Devuelve el texto limpio; añade diagnóstico o informe solo si fue solicitado.

## Output Contract

- Devolver el texto final aplicando rigurosamente las reglas sin metadiscurso ni justificaciones introductorias.
- Incluir autoevaluación de sesgos mitigados únicamente si el usuario la solicita de forma explícita.
- Si se solicita auditoría, separar hallazgos mecánicos, léxicos, estructurales y factuales; no presentar una puntuación como prueba de autoría.

## References

- [StoryScope Evidence and Taxonomy](references/storyscope.md): Datos empíricos, métricas y taxonomía del estudio arXiv:2604.03136.
- [Perfil de voz](references/voice-profile.md): Audiencia, registro, límites y evidencia autorizada.
- [Limpieza mecánica](references/mechanical-cleanup.md): Uso y límites del limpiador conservador.
- [Léxico español](references/spanish-lexicon.json): Señales contextuales y sustituciones seguras editables.
