---
name: naming-brief
description: "Trigger: naming brief, crear brief naming, estructurar brief naming. Consolida el briefing integral de fondo y forma para proyectos de naming."
license: Apache-2.0
metadata:
  author: "Totopo27"
  version: "1.1"
---

# Skill: naming-brief

## Activation Contract

Activa cuando se debe formalizar el documento de directrices de un proyecto de naming, integrando los hallazgos de fondo (visión, usuario, valor Ohmae) y de forma (idioma, geografía, territorios conceptuales).

## Hard Rules

- Todo brief de naming debe constar estrictamente de dos pilares: Fondo y Forma.
- Rechazar briefings superficiales que pidan solo "un nombre corto que empiece por A" sin antes definir al usuario real y la propuesta de valor.
- Establecer explícitamente el idioma operativo: lenguas locales, español neutro, inglés universal (vocabulario de ~800 términos accesibles) o latín.
- Fijar el alcance geográfico de protección (mercado local, nacional o internacional).

## Decision Gates

| Condición de Mercado | Definición en Brief |
| :--- | :--- |
| Producto digital / SaaS / Web | Idioma: Inglés universal o neologismo fonético global. Registro: Clase 9 / 42. Dominio: `.com` prioritario. |
| Servicio local o de proximidad (hostelería, clínica) | Idioma: Lengua vernácula o español contextual. Registro: Clase respectiva, protección nacional. |
| Marca de lujo / autor / packaging físico | Idioma: Evocativo o toponímico. Énfasis en sonoridad, métrica y significado profundo. |

## Execution Steps

1. Ingestar insumos de `naming-research-fondo` (`brief_fondo.md`) y `naming-research-forma` (`banco_lexico.md`).
2. Redactar el resumen de **Fondo**: Visión a 5 años, Arquetipo de Usuario y Propuesta de Valor Ohmae.
3. Redactar las restricciones de **Forma**: Idiomas permitidos, sonoridad deseada, longitud orientativa y territorios léxicos prioritarios.
4. Definir las clases tentativas de la **Clasificación de Niza** aplicables al producto/servicio.
5. Obtener validación explícita del cliente antes de habilitar la fase de divergencia.

## Output Contract

Generar el archivo maestro `NAMING_BRIEF.md` procesado bajo el estándar anti-clichés de `escribe-humano` con:
- `Project_Name_and_Scope`
- `Pillar_1_Fondo`: Visión (5 años), Usuario Final, Propuesta de Valor Ohmae.
- `Pillar_2_Forma`: Idiomas, fonética, territorios conceptuales aprobados.
- `Legal_Scope`: Territorio geográfico de registro y Clases de Niza estimadas.
- `Gate_Status`: Aprobado / Pendiente de confirmación.

## References

- `references/brief-template.md` — Estructura estándar del documento maestro de brief.
