---
title: "Conventional Commits"
date: 2023-05-08
excerpt: "Cómo organizar los commits de git de forma legible para el equipo. Un framework liviano para mantener un historial limpio y transparente."
category: "Ingeniería"
url: "/blog/conventional-commits"
---

Si alguna vez abriste el historial de commits de un proyecto y te encontraste con algo así:

![Commits sin convención](/ralph-commits.png)

...sabés exactamente de qué estoy hablando.

## El problema

El historial de git debería ser una bitácora. Tendría que poder responder preguntas como: ¿qué cambió?, ¿por qué?, ¿cuándo se rompió esto?

Pero en la mayoría de los proyectos termina siendo un cementerio de mensajes como `fix`, `arreglo`, `wip`, `cambios`, `ahora sí`. Útil para nada.

El problema no es la mala voluntad — es la falta de una convención compartida. Cuando no hay reglas, cada persona escribe lo que le parece en el momento. Y eso destruye el valor del historial.

## La solución: Conventional Commits

[Conventional Commits](https://www.conventionalcommits.org/) es una especificación liviana que define un formato simple para los mensajes de commit:

```
<tipo>[scope opcional]: <descripción>

[cuerpo opcional]

[footer(s) opcionales]
```

### Tipos principales

| Tipo | Cuándo usarlo |
|------|---------------|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de bug |
| `docs` | Cambios en documentación |
| `style` | Formato, espacios, punto y coma (sin cambio de lógica) |
| `refactor` | Refactor sin bug fix ni feature |
| `test` | Agregar o modificar tests |
| `chore` | Tareas de mantenimiento, build, CI |

### Ejemplos reales

```
feat(auth): add Google OAuth login
fix(api): handle null response from payment gateway
docs: update README with setup instructions
chore: bump dependencies to latest versions
refactor(cart): extract price calculation into service
```

![Estructura de un commit](/conventional-commits.png)

## Por qué vale la pena

### 1. El historial se vuelve legible

Cuando todos usan el mismo formato, podés recorrer el log y entender qué pasó sin necesidad de abrir cada commit. `git log --oneline` deja de ser ruido y empieza a ser información.

### 2. Generación automática de changelogs

Herramientas como [standard-version](https://github.com/conventional-changelog/standard-version) o [semantic-release](https://github.com/semantic-release/semantic-release) pueden leer tus commits y generar un `CHANGELOG.md` automáticamente. Los `feat` van a la sección de features, los `fix` a bug fixes, y los `BREAKING CHANGE` se resaltan.

### 3. Versionado semántico automatizable

Si los commits siguen la convención, podés automatizar la decisión de si la próxima versión es un patch, minor o major:

- `fix` → patch (1.0.**1**)
- `feat` → minor (1.**1**.0)
- `BREAKING CHANGE` → major (**2**.0.0)

### 4. Code review más limpio

Un commit bien nombrado le dice al reviewer exactamente qué está mirando antes de abrir el diff. Eso ahorra tiempo y reduce el contexto mental necesario para revisar.

![Buenas prácticas de commits](/commit-practices.png)

## Cómo adoptarlo en tu equipo

El mayor obstáculo no es técnico — es el hábito. Algunos pasos para que no quede en el olvido:

**Commitizen** es una herramienta CLI que te guía interactivamente para armar el commit según la convención. En vez de escribir el mensaje a mano, contestás preguntas.

```bash
npx cz
```

**commitlint** + **husky** permiten rechazar commits que no sigan el formato, directamente en el pre-commit hook. Si el mensaje no cumple, el commit no pasa.

```bash
npm install --save-dev @commitlint/config-conventional @commitlint/cli husky
```

```js
// commitlint.config.js
module.exports = { extends: ['@commitlint/config-conventional'] };
```

## Lo que no es

Conventional Commits no es una regla sobre el tamaño del commit, ni sobre cuándo hacer push. Es solo sobre el mensaje. Podés tener un commit enorme con un mensaje perfecto — aunque si el commit es enorme, ese es otro problema.

---

La convención no necesita ser perfecta al 100% desde el día uno. Lo importante es que el equipo acuerde algo y lo sostenga. Un historial que es 80% legible es infinitamente mejor que uno que no lo es en absoluto.
