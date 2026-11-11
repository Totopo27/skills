# Limpieza mecánica

Usa `scripts/humanize.mjs` únicamente al editar un borrador existente o cuando el usuario pida limpiar huellas mecánicas. La herramienta reduce artefactos triviales; no determina autoría ni garantiza resultados frente a detectores.

## Uso

```bash
node scripts/humanize.mjs borrador.txt --report
node scripts/humanize.mjs borrador.txt -o limpio.txt --report
node scripts/humanize.mjs borrador.txt -o limpio.txt --report --apply-lexicon
```

Sin `--apply-lexicon`, el script elimina caracteres invisibles seleccionados, normaliza espacios Unicode y solo informa coincidencias del léxico. Con la opción activa, reemplaza además las entradas explícitamente marcadas como seguras; las demás continúan como observaciones editoriales.

## Límites de seguridad

- Protege URLs, código en línea y bloques cercados de todos los pases.
- Conserva el zero-width joiner para no romper secuencias emoji ni escrituras que lo necesiten.
- Conserva rayas, comillas curvas, elipsis y viñetas: su uso no prueba generación automática.
- No modifica el archivo original sin `-o`; por defecto escribe el resultado en stdout.
- Revisa siempre el informe y el resultado. Una coincidencia léxica es contexto para decidir, no una orden de sustitución.
