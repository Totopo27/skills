---
name: naming-research-forma
description: "Trigger: research forma naming, investigacion lexica naming, etimologias naming. Rastrea etimologias, glosarios tecnicos, Wikipedia y slang."
license: Apache-2.0
metadata:
  author: "Totopo27"
  version: "1.1"
---

# Skill: naming-research-forma

## Activation Contract

Activa cuando se requiera recolectar combustible léxico y lingüístico sobre un tema específico antes o durante la fase de divergencia de naming.

## Hard Rules

- El naming es una actividad de documentación exhaustiva, no de inspiración aislada.
- No juzgar si una palabra sirve como marca final durante la recolección; registrar sin censura.
- Obligatorio explorar un mínimo de 4 fuentes: enciclopedias (conceptos clave), etimologías grecolatinas/locales, glosarios gremiales/técnicos, y jerga/slang urbano.
- Extraer raíces morfológicas vivas, sufijos, prefijos y términos de uso interno de la industria.
- **Runtime Agnostic Tooling**: Usar las herramientas de búsqueda web (`websearch`), recuperación HTTP (`webfetch`) o inspección local disponibles en el host. Si no hay conexión de red activa, consultar archivos locales y aplicar diccionarios morfológicos fuera de línea.

## Decision Gates

| Condición del Entorno | Modo de Investigación |
| :--- | :--- |
| **Herramientas de red disponibles** | Ejecutar búsqueda activa en fuentes etimológicas (`etymonline`, RAE, toponimia) y glosarios online. |
| **Entorno sin red / Air-gapped** | Consultar documentación provista en el workspace, bibliotecas locales y descomposición morfológica manual. |

| Tipo de Industria / Producto | Fuentes Primarias de Forma |
| :--- | :--- |
| Técnico, industrial o B2B especializado | Glosarios profesionales y jerga operativa de taller (ej. terminología interna de sistemas). |
| Estilo de vida, noche, ocio, subcultura | Slang urbano local por ciudades clave (Londres, NY, Madrid, Santiago) y cultura popular. |
| Bienestar, descanso, medicina, ciencia | Etimologías latinas y griegas clásicas (ej. raíces arcaicas con resonancia fonética limpia). |
| Identidad territorial o productos de origen | Toponimia histórica, mapas antiguos, términos romanos/locales de accidentes geográficos. |

## Execution Steps

1. **Inmersión Temática**: Analizar el mapa conceptual del sector mediante artículos y referencias documentales de los conceptos clave.
2. **Minería Etimológica**: Extraer raíces en fuentes especializadas (`etymonline`, diccionarios etimológicos históricos, RAE) para palabras asociadas al núcleo de valor.
3. **Extracción de Glosarios**: Buscar vocabularios gremiales de términos técnicos, jergas profesionales y acrónimos del sector.
4. **Rastreo de Slang y Lenguaje Vernáculo**: Mapear términos informales, expresiones orales y modismos del público objetivo.
5. **Consolidar Territorios**: Agrupar los hallazgos en al menos 6 a 8 clusters conceptuales diferenciados.

## Output Contract

Generar o actualizar `banco_lexico.md` con:
- `Context_Concepts`: Lista de 15+ términos de contexto y ramas temáticas.
- `Etymologies_Roots`: 10+ raíces clásicas y latinas con significado original.
- `Industry_Glossary`: 10+ términos técnicos/operativos del gremio.
- `Slang_and_Vernacular`: 10+ términos de jerga urbana o cultura callejera.
- `Conceptual_Territories`: 6 a 8 ejes temáticos listos para divergencia.

## References

- `references/sources-guide.md` — Directorio de fuentes documentales recomendadas para naming.
