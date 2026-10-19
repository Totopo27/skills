# Skills para Agentes y LLMs

Instrucciones de ejecución directa, compuertas de control (*decision gates*) y documentación de soporte para asistentes y agentes de código (OpenCode, Claude Code, Pi, Codex).

Sin prosa de relleno ni manuales de autoayuda para modelos de lenguaje: cada carpeta contiene archivos `SKILL.md` con reglas duras y criterios de salida que el agente debe cumplir antes de responder.

---

## Skills Disponibles

### Redacción y Estilo

* [**`escribe-humano`**](skills/escribe-humano/): Contrato de runtime basado en la taxonomía empírica de StoryScope (arXiv:2604.03136). Erradica los vicios estructurales de los LLMs: moralejas al cierre, somatizaciones de manual (pechos oprimidos, nudos en la garganta), causalidad lineal estricta y adjetivación corporativa vacía.

---

### Framework de Naming para Marcas

Metodología de seis etapas consecutivas para crear nombres de producto o empresa, blindar su registro de marca y defenderlos frente a objeciones de clientes.

| Fase | Skill | Objetivo de Ejecución |
| :--- | :--- | :--- |
| **0. Fondo** | [**`naming-research-fondo`**](skills/naming-research-fondo/) | Extrae la visión del negocio a 5 años, el arquetipo de cliente y la propuesta de valor según el modelo de Kenichi Ohmae. |
| **0. Forma** | [**`naming-research-forma`**](skills/naming-research-forma/) | Rastrea raíces grecolatinas, jerga técnica sectorial y expresiones urbanas vivas. |
| **1. Brief** | [**`naming-brief`**](skills/naming-brief/) | Sintetiza fondo y forma en un documento base y exige confirmación explícita del usuario antes de crear nombres. |
| **2. Divergencia** | [**`naming-divergence`**](skills/naming-divergence/) | Genera una lista larga de 70 candidatos a través de seis motores morfológicos y semánticos, sin filtro inicial. |
| **3. Filtro** | [**`naming-filter`**](skills/naming-filter/) | Reduce la lista a un rango de 10 a 15 opciones evaluadas en aislamiento visual monocrómico sobre plantilla A5. |
| **4. Clearing** | [**`naming-clearing`**](skills/naming-clearing/) | Comprueba clases en la Clasificación de Niza, resultados limpios en la página 1 de Google, dominios web y colisiones lingüísticas. |
| **5. Pitch** | [**`naming-pitch`**](skills/naming-pitch/) | Arma el documento de presentación con argumentos de psicología cognitiva (simbolismo fonético, fluidez) y desactiva reparos del cliente usando la lista de 70 descartes como prueba de trabajo. |

*El diagrama de flujo completo y los criterios de corte de cada etapa están detallados en [docs/NAMING_WORKFLOW.md](docs/NAMING_WORKFLOW.md).*

---

## Anatomía de una Skill

Cada herramienta se aloja en su propio directorio dentro de `skills/`:

```text
skills/{nombre-de-la-skill}/
├── SKILL.md              # Contrato de runtime: YAML frontmatter, activación, reglas duras y salidas esperadas.
├── assets/               # Plantillas, esquemas o ejemplos de apoyo para el agente (opcional).
└── references/           # Archivos locales de consulta, papers o guías de referencia rápida (opcional).
```

---

## Cómo Usarlas

### En OpenCode
Las skills dentro de este repositorio quedan listas para ser consumidas si clonás o vinculás el repositorio en tu espacio de trabajo:

```bash
git clone https://github.com/Totopo27/skills.git
```

### En Claude Code o Runtimes Globales
Para disponer de estas instrucciones de forma global en tu máquina:

```bash
# Copia directa a la carpeta global de skills de tu agente
cp -r skills/* ~/.agents/skills/
# O en el caso específico de Claude Code:
cp -r skills/* ~/.claude/skills/
```
