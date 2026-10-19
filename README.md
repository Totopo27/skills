# Skills Repository

Repositorio centralizado de skills y frameworks metodológicos para asistentes y agentes de inteligencia artificial (OpenCode, Claude Code, etc.), optimizados bajo arquitectura **LLM-first** con compuertas de decisión medibles (*Decision Gates*).

## 📂 Contenido del Repositorio

El catálogo de skills se encuentra dentro del directorio [`skills/`](./skills/):

### ✍️ Redacción & Estilo
* **[`escribe-humano`](./skills/escribe-humano/)**: Aplica reglas estructurales anti-IA de StoryScope para eliminar el aroma corporativo genérico y producir redacción directa, humana y anclada en hechos concretos.

### 🏷️ Framework de Ingeniería de Naming Estratégico
Pipeline metodológico modular de 6 fases para generación, evaluación, blindaje registral y pitch de marcas comerciales:
* **[`naming-research-fondo`](./skills/naming-research-fondo/)** (Fase 0 - Fondo): Investigación estratégica de visión a 5 años, arquetipo y propuesta de valor Ohmae.
* **[`naming-research-forma`](./skills/naming-research-forma/)** (Fase 0 - Forma): Minería léxica profunda (etimologías grecolatinas, glosarios especializados, slang urbano).
* **[`naming-brief`](./skills/naming-brief/)** (Fase 1): Formalización del brief maestro y compuerta binaria de validación estratégica.
* **[`naming-divergence`](./skills/naming-divergence/)** (Fase 2): Divergencia cuantitativa estructurada a través de 6 motores de generación (~70 candidatos).
* **[`naming-filter`](./skills/naming-filter/)** (Fase 3): Prueba visual en aislamiento monocrómico A5 y destilación a shortlist balanceada (10-15 opciones).
* **[`naming-clearing`](./skills/naming-clearing/)** (Fase 4): Clearing registral (Clases de Niza, Google pág. 1, bases de marcas y filtro lingüístico).
* **[`naming-pitch`](./skills/naming-pitch/)** (Fase 5): Dossier ejecutivo de defensa y desmonte de objeciones subjetivas del cliente.

> 📖 Consultá [`docs/NAMING_WORKFLOW.md`](./docs/NAMING_WORKFLOW.md) para ver el flujo completo y la matriz de compuertas del framework de naming.

---

## 🛠️ Estructura de Cada Skill

Cada skill cumple con el estándar de especificación:

```text
skills/{skill-name}/
├── SKILL.md              # Contrato principal con frontmatter YAML, Hard Rules y Decision Gates
├── assets/               # Plantillas, esquemas o ejemplos (opcional)
└── references/           # Documentación de soporte y marcos teóricos locales (opcional)
```
