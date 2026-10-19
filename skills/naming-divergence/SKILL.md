---
name: naming-divergence
description: "Trigger: naming divergence, lista larga naming, divergencia naming. Genera lista larga de ~70 nombres usando 6 motores morfosemanticos sin censura."
license: Apache-2.0
metadata:
  author: "Totopo27"
  version: "1.1"
---

# Skill: naming-divergence

## Activation Contract

Activa cuando el briefing maestro (`NAMING_BRIEF.md`) esté aprobado y se proceda a la fase de divergencia léxica para crear la lista larga (*Longlist*).

## Hard Rules

- **Principio Fundamental**: *"No se busca el nombre definitivo; se generan sistemáticamente nombres en relación a un territorio conceptual"*.
- Queda terminantemente prohibido juzgar, descartar o filtrar nombres durante la divergencia. Cero autocensura.
- La meta numérica no negociable es una lista larga de **aproximadamente 70 nombres** (mínimo 60, recomendado 70-80).
- Cada candidato debe originarse obligatoriamente en uno de los 6 motores de generación morfosemántica.

## Decision Gates

| Motor de Generación | Técnica Aplicada |
| :--- | :--- |
| **1. Etimologías** | Raíces grecolatinas, arcaísmos y términos madre (ej. *Cauma* por Calma). |
| **2. Glosarios de Industria** | Vocabulario técnico, acrónimos operativos y jerga de gremio (ej. *RAG* en call center). |
| **3. Slang y Cultura Oral** | Expresiones de calle por ciudad, onomatopeyas y apodos (ej. *Alexander* por teléfono). |
| **4. Morfología y Scrabble** | Palabras derivadas, terminaciones métricas, sufijos y duplicaciones rítmicas (ej. *Alimentta* con doble T). |
| **5. Neologismos y Cruces** | Acrónimos cruzados y contracciones conceptuales (ej. *Alicia* = Alimentación + Ciencia). |
| **6. Metáforas y Evocación** | Nombres descriptivos indirectos, analogías y toponimia simbólica (ej. *La Fou*, *Domo A*). |

## Execution Steps

1. Leer `NAMING_BRIEF.md` y `banco_lexico.md`.
2. Asignar cuotas de divergencia: producir ~12 a 15 nombres por cada uno de los 6 motores.
3. Volcar ideas espontáneas y palabras tópicas sin evaluarlas (todas suman a la lista larga).
4. Registrar cada nombre junto con su motor de origen y una brevísima nota etimológica o conceptual.
5. Continuar hasta alcanzar el umbral de los 70 nombres.

## Output Contract

Generar `naming_longlist.md` conteniendo:
- Tabla numerada del 01 al 70+ con columnas: `N°`, `Nombre Candidato`, `Motor Utilizado`, `Raíz / Justificación de Origen`.
- Verificación métrica binaria: ¿Se alcanzaron 70 nombres? (Sí/No).

## References

- `references/divergence-motors.md` — Detalle y aplicaciones de los 6 motores morfosemánticos.
