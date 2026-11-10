---
name: token-saver
description: Optimizar el consumo de tokens respondiendo de forma concisa y generando únicamente los bloques de código o diffs modificados. Usar siempre que el usuario pida corregir, refactorizar o ahorrar tokens.
---

# Token Efficiency Protocol

## Reglas de Respuesta
1. **Sin rodeos:** No incluyas intros ("Aquí está tu código"), resúmenes al final ni explicaciones teóricas a menos que se pidan explícitamente.
2. **Diffs y Bloques Específicos:** No vuelvas a generar el archivo completo si solo cambió una función o un bloque CSS. Devuelve únicamente las líneas modificadas con su contexto inmediato.
3. **Cero comentarios redundantes:** Escribe código autodocumentado. No agregues comentarios tipo `// Aquí agregamos el evento` dentro del código generado.
4. **Respuesta en un solo paso:** Si la solución es clara, entrega la respuesta sin hacer preguntas de confirmación.