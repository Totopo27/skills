---
name: naming-filter
description: "Trigger: naming filter, lista corta naming, shortlist naming, aislar nombres naming. Destila la lista larga a 10-15 nombres mediante pruebas de aislamiento."
license: Apache-2.0
metadata:
  author: "Totopo27"
  version: "1.1"
---

# Skill: naming-filter

## Activation Contract

Activa tras completar la lista larga (`naming_longlist.md`) para realizar la selección curada de 10 a 15 nombres finalistas (*Shortlist*) antes del chequeo legal.

## Hard Rules

- Reducción estricta: De ~70 candidatos a exactamente entre 10 y 15 finalistas.
- No evaluar nombres en bloque dentro de una lista densa: simular la prueba de aislamiento visual "Ficha A5" (cada nombre debe sostenerse individualmente en negro sobre blanco sin apoyo gráfico).
- Diversidad tipológica obligatoria: La shortlist debe contener representación de al menos 3 categorías distintas (descriptivos, evocativos/metafóricos, neologismos, etimológicos o abstractos).
- El criterio rector es la adecuación al usuario final definido en el brief, no el gusto subjetivo personal del consultor.

## Decision Gates

| Prueba de Aislamiento | Criterio de Pase / Descarte |
| :--- | :--- |
| **Legibilidad visual pura** | Si necesita un isotipo o color para entenderse o verse creíble, descártalo. El nombre debe funcionar negro sobre blanco. |
| **Prueba de pronunciación (Test del teléfono)** | Si requiere deletreo engorroso o genera confusión fonética inmediata en el idioma del usuario, descártalo. |
| **Riqueza semántica** | Prefiere nombres con capas de significado y narrativa de marca (historia detrás) sobre ocurrencias vacías. |

## Execution Steps

1. Leer `naming_longlist.md` y confrontar cada candidato con los requisitos de `NAMING_BRIEF.md`.
2. Ejecutar la primera pasada intuitiva de marcado (los nombres con mayor tracción conceptual y conexión con la propuesta de valor).
3. Evaluar cada preseleccionado bajo la prueba de aislamiento: Ficha A5 monocrómica.
4. Categorizar la selección para asegurar balance entre opciones seguras y opciones audaces/disruptivas.
5. Seleccionar exactamente entre 10 y 15 candidatos para la shortlist.

## Output Contract

Generar `naming_shortlist.md` conteniendo:
- Tabla con los 10 a 15 nombres finalistas.
- Columnas: `Nombre`, `Tipología Morfológica`, `Narrativa / Significado`, `Alineación con el Usuario`.
- Lista de descartes notables y motivo de descarte.

## References

- `references/isolation-test.md` — Protocolo de evaluación individual (Ficha A5) y tipologías de nombres.
- `assets/ficha-a5-template.md` — Plantilla ejecutable de renderizado de Ficha A5 monocrómica.
