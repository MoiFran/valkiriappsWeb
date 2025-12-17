# Guía de Contribución - ValkiriApps Web

Gracias por tu interés en contribuir a ValkiriApps Web. Este documento proporciona pautas para contribuir al proyecto.

## Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Configuración del Entorno](#configuración-del-entorno)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Estándares de Código](#estándares-de-código)
- [Convenciones de Commits](#convenciones-de-commits)
- [Pull Requests](#pull-requests)
- [Reporte de Bugs](#reporte-de-bugs)
- [Solicitud de Features](#solicitud-de-features)

## Código de Conducta

Al participar en este proyecto, te comprometes a mantener un ambiente respetuoso y colaborativo. Se espera que:

- Uses lenguaje inclusivo y respetuoso
- Aceptes críticas constructivas
- Te enfoques en lo mejor para la comunidad
- Muestres empatía hacia otros miembros

## Cómo Contribuir

### 1. Fork del Proyecto

```bash
# Haz fork del repositorio en GitHub
# Luego clona tu fork
git clone https://github.com/tu-usuario/valkiriapps-web.git
cd valkiriapps-web
```

### 2. Configura el Remote Upstream

```bash
git remote add upstream https://github.com/valkiriapps/valkiriapps-web.git
git fetch upstream
```

### 3. Mantén tu Fork Actualizado

```bash
git checkout main
git pull upstream main
git push origin main
```

## Configuración del Entorno

### Prerrequisitos

- Node.js 18+
- npm, yarn o pnpm
- Git

### Instalación

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local

# Ejecutar servidor de desarrollo
npm run dev
```

### Verificar Instalación

```bash
# Ejecutar todas las verificaciones
npm run check-all

# O individualmente:
npm run type-check    # Verificar tipos TypeScript
npm run lint          # Verificar ESLint
npm run format:check  # Verificar formato
```

## Proceso de Desarrollo

### 1. Crear una Rama

```bash
# Para nuevas features
git checkout -b feature/nombre-descriptivo

# Para bug fixes
git checkout -b fix/descripcion-del-bug

# Para documentación
git checkout -b docs/descripcion
```

### Convención de Nombres de Ramas

- `feature/` - Nuevas características
- `fix/` - Correcciones de bugs
- `docs/` - Cambios en documentación
- `refactor/` - Refactorización de código
- `style/` - Cambios de estilo (CSS, UI)
- `test/` - Añadir o modificar tests
- `chore/` - Tareas de mantenimiento

### 2. Hacer Cambios

- Escribe código limpio y legible
- Sigue las convenciones del proyecto
- Añade comentarios cuando sea necesario
- Actualiza la documentación si es relevante

### 3. Commit de Cambios

```bash
git add .
git commit -m "tipo: descripción breve"
```

Ver [Convenciones de Commits](#convenciones-de-commits) para más detalles.

### 4. Push y Pull Request

```bash
git push origin nombre-de-tu-rama
```

Luego abre un Pull Request en GitHub.

## Estándares de Código

### TypeScript

- Usa TypeScript para todo el código
- Evita `any`, usa tipos específicos
- Define interfaces para props y objetos complejos
- Usa tipos de retorno explícitos en funciones

```typescript
// ✅ Bueno
interface UserProps {
  name: string;
  age: number;
}

function greetUser(user: UserProps): string {
  return `Hello, ${user.name}`;
}

// ❌ Malo
function greetUser(user: any) {
  return `Hello, ${user.name}`;
}
```

### React

- Usa componentes funcionales con hooks
- Props destructuring en parámetros
- Tipado de props con interfaces
- Usa `React.memo()` para optimización cuando sea necesario

```typescript
// ✅ Bueno
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({ label, onClick, disabled = false }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

// ❌ Malo
export default function Button(props: any) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
```

### CSS

- Usa CSS Modules para componentes
- Nombres de clases en camelCase
- Variables CSS para valores reutilizables
- Mobile-first responsive design

```css
/* ✅ Bueno */
.button {
  padding: var(--spacing-md);
  background: var(--color-primary);
}

.buttonLarge {
  padding: var(--spacing-lg);
}

@media (min-width: 768px) {
  .button {
    padding: var(--spacing-lg);
  }
}
```

### Estructura de Archivos

```
ComponentName/
├── ComponentName.tsx         # Componente principal
├── ComponentName.module.css  # Estilos
├── ComponentName.test.tsx    # Tests (si aplica)
└── index.ts                  # Barrel export
```

### Imports

- Usa alias `@/` para imports
- Agrupa imports por tipo
- Ordena alfabéticamente

```typescript
// ✅ Bueno
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { formatDate } from "@/utils/date";
import styles from "./Component.module.css";

// ❌ Malo
import styles from "./Component.module.css";
import { formatDate } from "@/utils/date";
import React from "react";
import Button from "@/components/ui/Button";
```

## Convenciones de Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/).

### Formato

```
tipo(scope): descripción

[cuerpo opcional]

[footer opcional]
```

### Tipos

- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan funcionalidad)
- `refactor`: Refactorización de código
- `perf`: Mejoras de performance
- `test`: Añadir o modificar tests
- `chore`: Tareas de mantenimiento
- `ci`: Cambios en CI/CD

### Ejemplos

```bash
# Feature
feat(navbar): add mobile menu toggle

# Bug fix
fix(hero): correct alignment on mobile devices

# Documentation
docs(readme): update installation instructions

# Refactor
refactor(utils): simplify animation helper functions

# Style
style(button): adjust padding and colors

# Performance
perf(images): optimize image loading with lazy loading
```

### Reglas

- Usa imperativo ("add" no "added" o "adds")
- No capitalices la primera letra
- No uses punto al final
- Máximo 72 caracteres en la primera línea
- Referencias a issues si aplica: `fix(auth): resolve login bug #123`

## Pull Requests

### Antes de Crear un PR

- [ ] Código sigue los estándares del proyecto
- [ ] Tests pasan (si aplican)
- [ ] Documentación actualizada
- [ ] No hay conflictos con main
- [ ] Commits siguen convenciones
- [ ] Pre-commit hooks pasan

### Template de PR

```markdown
## Descripción

[Descripción clara de los cambios]

## Tipo de Cambio

- [ ] Bug fix
- [ ] Nueva feature
- [ ] Breaking change
- [ ] Documentación

## ¿Cómo se Probó?

[Describe cómo probaste los cambios]

## Checklist

- [ ] Mi código sigue los estándares del proyecto
- [ ] He revisado mi propio código
- [ ] He comentado código complejo
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan warnings
- [ ] No hay conflictos con main

## Screenshots (si aplica)

[Añade screenshots si hay cambios visuales]
```

### Proceso de Revisión

1. Crea el PR con descripción clara
2. Asigna reviewers si es necesario
3. Espera feedback
4. Realiza cambios solicitados
5. Obtén aprobación
6. Mergea (si tienes permisos) o espera a que lo hagan

## Reporte de Bugs

### Antes de Reportar

- Busca si el bug ya fue reportado
- Verifica que ocurra en la última versión
- Recopila información del bug

### Template de Bug Report

```markdown
**Descripción del Bug**
[Descripción clara y concisa]

**Pasos para Reproducir**

1. Ve a '...'
2. Haz click en '...'
3. Scroll hasta '...'
4. Observa el error

**Comportamiento Esperado**
[Qué esperabas que sucediera]

**Comportamiento Actual**
[Qué sucedió realmente]

**Screenshots**
[Si aplica, añade screenshots]

**Entorno**

- OS: [ej. Windows 11]
- Navegador: [ej. Chrome 120]
- Node: [ej. 18.17.0]
- npm: [ej. 9.6.7]

**Información Adicional**
[Contexto adicional sobre el problema]
```

## Solicitud de Features

### Template de Feature Request

```markdown
**¿El feature está relacionado con un problema?**
[Describe el problema]

**Describe la Solución que Deseas**
[Solución clara y concisa]

**Describe Alternativas Consideradas**
[Otras soluciones que consideraste]

**Contexto Adicional**
[Contexto, screenshots, etc.]

**¿Estarías Dispuesto a Implementarlo?**

- [ ] Sí, puedo trabajar en esto
- [ ] Sí, pero necesito ayuda
- [ ] No, solo lo estoy sugiriendo
```

## Recursos Útiles

### Documentación

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [GSAP Docs](https://greensock.com/docs)
- [Three.js Docs](https://threejs.org/docs)

### Herramientas

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
- [Lint-staged](https://github.com/okonet/lint-staged)

## Preguntas

Si tienes preguntas, puedes:

- Abrir un issue con la etiqueta `question`
- Contactar al equipo: contacto@valkiriapps.com

## Licencia

Al contribuir, aceptas que tus contribuciones serán licenciadas bajo la misma licencia del proyecto.

---

Gracias por contribuir a ValkiriApps Web!
