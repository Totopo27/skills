---
name: naming-research-fondo
description: "Trigger: research fondo naming, auditar negocio naming, propuesta ohmae naming. Investiga vision, usuario real y valor estructural."
license: Apache-2.0
metadata:
  author: "Totopo27"
  version: "1.1"
---

# Skill: naming-research-fondo

## Activation Contract

Activa cuando se inicie un encargo de naming y se deba desentrañar el ADN de negocio antes de generar palabras.
Aplica para startups, productos, marcas corporativas o reposicionamientos.

## Hard Rules

- Nunca generar propuestas de nombres en esta fase. Solo extraer hechos de fondo.
- El naming es estructural, no coyuntural: proyectar siempre a horizonte mínimo de 5 años.
- La propuesta de valor sigue el modelo Kenichi Ohmae: define el valor real creado al usuario (ej. Michelin = ayudar a viajar, Gaes = vida auditiva), nunca adjetivos genéricos ("joven", "ágil").
- El usuario manda: perfilar quién usará el nombre en la vida real, no solo quién paga la factura.

## Decision Gates

| Hallazgo en Negocio | Enfoque de Fondo |
| :--- | :--- |
| Visión local vs global | Si proyecta expansión internacional, fijar inglés universal o raíces neutras en el brief. |
| Propuesta difusa o adjetivada | Ejecutar indagación Ohmae: auditar fortalezas y definir qué transformación real recibe el usuario. |
| B2B corporativo vs B2C pasional | En B2C mapear códigos emocionales y rituales; en B2B mapear credibilidad y tracción en facturación. |

## Execution Steps

1. **Entrevistar o inspeccionar documentación**: Extraer visión a 5 años, alcance geográfico proyectado y modelo de monetización.
2. **Definir Propuesta de Valor Ohmae**: Responder "¿Qué capacidad o valor profundo habilita en la vida del usuario?".
3. **Mapear el Arquetipo de Usuario**: Detallar contexto de uso, lenguaje cotidiano, entornos donde pronunciará el nombre y fricciones.
4. **Auditar Competencia Directa**: Identificar nombres existentes en el sector para detectar saturaciones y territorios vacíos.

## Output Contract

Generar o actualizar `brief_fondo.md` redactado bajo las reglas anti-IA de `escribe-humano` con:
- `Vision_5_Years`: Horizonte y territorialidad concreta.
- `Ohmae_Value_Proposition`: Núcleo de valor funcional y simbólico (sin adjetivos corporativos inflados).
- `User_Archetype`: Contexto real de uso, fricciones y lenguaje cotidiano directo.
- `Competitive_Landscape`: Territorios conceptuales ya ocupados por rivales.

## References

- `references/ohmae-framework.md` — Guía de aplicación de la propuesta de valor según Kenichi Ohmae.
