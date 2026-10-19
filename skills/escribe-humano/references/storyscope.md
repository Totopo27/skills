# StoryScope: Evidencia Empírica y Taxonomía Anti-IA

Referencia de respaldo para la skill `escribe-humano`. Datos empíricos extraídos del estudio **StoryScope** (*arXiv:2604.03136*, UMD & Google DeepMind).

- **Corpus analizado**: 61.608 relatos evaluados con 304 rasgos narrativos computables.
- **Hallazgo central**: Los clasificadores discriminan texto generado por IA con un **93.2% macro-F1** basándose únicamente en decisiones estructurales y de discurso, incluso tras despojar al texto de léxico superficial obvio (*tapestry*, *delve*, etc.).

---

## Métricas y Deltas Empíricos

### 1. Sobredeterminación Temática y Discurso Filosófico (SIT / PLT)
- **Comentarios temáticos del narrador**: 77% en IA vs. 52% en humanos (+25 gap). La IA tiende compulsivamente a subrayar el sentido o moraleja de los sucesos.
- **Debates filosóficos en diálogos**: 59% en IA vs. 34% en humanos (+25 gap). La IA convierte conversaciones cotidianas en ensayos de sobremesa.

### 2. Somatización Cliché y Falacia Patética (SET / AGENT)
- **Metáforas viscerales y corporales**: 81% en IA vs. 38% en humanos (+43 gap). Saturación de opresión en el pecho, nudos en la garganta y nudillos blancos como sustituto de caracterización.
- **Énfasis olfativo**: 82% en IA vs. 57% en humanos (+25 gap).
- **Falacia patética (entorno como espejo anímico)**: Correlación +0.49 mayor en IA.

### 3. Causalidad Lineal vs. Anacronía (EVT / TMP / REV)
- **Tramas monocanal sin subtramas**: 79% en IA vs. 57% en humanos. La IA genera cadenas estrictamente secuenciales A -> B -> C sin desvíos ni cabos sueltos.
- **Ruptura temporal**: Los humanos emplean analepsis, elipsis y prolepsis para desarmar la expectativa temporal.

### 4. Resolución y Moralidad (PLT / EVT)
- **Resolución por aceptación interna/epifanía**: 69% en IA vs. 46% en humanos.
- **Aceptación interna explícita**: 47% en IA vs. 27% en humanos.
- **Ambivalencia moral del protagonista**: Presente en 59% de los textos humanos vs. solo 38% en IA.

### 5. Anclaje Expresivo e Intertextualidad (SIT / PER)
- **Referencias específicas nombradas (entidades reales)**: 47% en humanos vs. 24% en IA.
- **Alusiones vagas o tímidas ("un viejo libro")**: 72% en IA vs. 50% en humanos.
- **Reconocimiento del lector / distancia narrativa**: 67% en humanos vs. 39% en IA.

---

## Huellas Típicas por Familia de Modelos (Tabla 16)

- **Claude**: Escalada plana de tensión; contención homogénea permanente; cierres flemáticos y reflexiones distantes.
- **GPT**: Dependencia del rumor/chisme como detonante automático; marcos retrospectivos reiterativos (*"Años después..."*); abuso de secuencias oníricas/visiones.
- **Gemini**: Introducción de personajes mediante inventario visual externo (ropa, complexión, mirada); esquemas de calvario sistemático predecibles.
- **DeepSeek**: Descarga masiva de contexto en los primeros párrafos; resistencia a dejar huecos de información deliberados.

---

## Enlaces Originales
- Paper: [arXiv:2604.03136](https://arxiv.org/abs/2604.03136)
- Repositorio y datos taxonómicos: [jenna-russell/storyscope](https://github.com/jenna-russell/storyscope)
