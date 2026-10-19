---
name: escribe-humano
description: "Trigger: escribe-humano, redacción humana, texto sin aroma a IA, narrativa humana. Aplica reglas estructurales anti-IA de StoryScope."
license: Apache-2.0
metadata:
  author: "Gustavo"
  version: "1.1"
---

# Escribe Humano

Contrato de runtime para generación y edición de texto humanizado sin marcas estructurales de IA.

## Activation Contract

Cargar esta skill cuando:
- El usuario invoque `escribe-humano`, `redacción humana`, `narrativa humana` o pida eliminar aroma a IA.
- Se redacten textos narrativos, ensayísticos, periodísticos o creativos.
- Se refactorice documentación o copy para remover clichés sintácticos de modelos de lenguaje.

## Hard Rules

1. **Sin moralismo ni síntesis temática**: Prohibido que el narrador o el cierre expliquen la lección aprendida o moraleja. El sentido lo deduce el lector.
2. **Sin debates filosóficos en diálogo**: Los personajes conversan desde necesidades, mezquindades o tareas inmediatas, no como ensayistas.
3. **Sin somatización cliché**: Prohibido recurrir a atajos físicos para tensión o emoción (nudo en la garganta, pecho oprimido, sudor frío, tragar saliva, nudillos blancos). Usar acciones objetivas o nombrar la emoción directamente.
4. **Entorno desacoplado del ánimo**: El clima y los espacios no deben ser espejos psicológicos del personaje (evitar falacia patética).
5. **Ruptura de causalidad lineal**: Obligatorio incluir anacronías (elipsis, saltos temporales, comienzos in media res) y subtramas o cabos sueltos.
6. **Desenlaces abiertos y ambivalencia moral**: Prohibido resolver conflictos mediante epifanías súbitas de perdón o aceptación perfecta. Mantener costo ético real.
7. **Anclaje concreto e intertextual**: Usar nombres propios, lugares, marcas y entidades específicas en lugar de alusiones genéricas ("un viejo libro").
8. **Erradicación de sesgos por modelo**:
   - **Anti-Claude**: Evitar escalada plana y cierres flemáticos o reflexivos homogéneos.
   - **Anti-GPT**: Prohibido usar chismes como detonante automático, marcos retrospectivos ("Años después...") y secuencias de sueños.
   - **Anti-Gemini**: Prohibido iniciar personajes con descripciones físicas de catálogo; entrar directo en acción o diálogo.
   - **Anti-DeepSeek**: Prohibido volcar toda la exposición contextual en el primer párrafo; dosificar la información.

## Decision Gates

| Intención | Prohibido (Sesgo IA) | Obligatorio (Técnica Humana) |
|---|---|---|
| **Tristeza / Duelo** | Opresión en el pecho, lágrimas silenciosas, lluvia. | Acción mundana desconectada, diálogo áspero o nombrar la emoción directa. |
| **Introducción** | Párrafo describiendo ropa, estatura y mirada. | Entrar in media res, en acción, error o reacción de terceros. |
| **Misterio** | Resolución simétrica explicada punto por punto. | Revelar piezas parciales; admitir cabos sueltos e interpretación. |
| **Conflicto moral** | Epifanía, comprensión mutua y redención limpia. | Transigencia, contradicción o costo ético sostenido. |

## Execution Steps

1. **Fijar premisa**: Definir conflicto sin moraleja preestablecida y planificar anacronía o elipsis.
2. **Redacción primaria**: Alternar diálogo vivo con acción, usando nombres propios concretos y evitando descripciones de inventario.
3. **Auditoría de sesgos**:
   - [ ] ¿Hay moraleja o reflexión trascendental al final? -> Eliminar.
   - [ ] ¿Hay somatizaciones cliché (gargantas secas, pechos oprimidos)? -> Sustituir por acción o etiqueta directa.
   - [ ] ¿La trama es lineal y monocanal? -> Añadir desvío mundano o subtrama.
   - [ ] ¿El protagonista se redime limpiamente? -> Introducir ambivalencia moral.
   - [ ] ¿Hay referencias genéricas? -> Sustituir por nombres y entidades concretas.
4. **Entrega**: Emitir únicamente el texto final limpio.

## Output Contract

- Devolver el texto final aplicando rigurosamente las reglas sin metadiscurso ni justificaciones introductorias.
- Incluir autoevaluación de sesgos mitigados únicamente si el usuario la solicita de forma explícita.

## References

- [StoryScope Evidence and Taxonomy](references/storyscope.md): Datos empíricos, métricas y taxonomía del estudio arXiv:2604.03136.
