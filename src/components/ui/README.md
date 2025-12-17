# UI Components - Componentes Reutilizables

Esta carpeta contiene componentes UI reutilizables que pueden ser usados en cualquier parte de la aplicación.

## Estructura

```
ui/
├── ElectricBorder/       # Componente de borde eléctrico animado
│   ├── ElectricBorder.tsx
│   ├── README.md
│   └── index.ts
├── index.ts              # Barrel export de todos los componentes
└── README.md             # Este archivo
```

## Componentes Disponibles

### ElectricBorder

Borde animado con efecto eléctrico usando filtros SVG.

```tsx
import { ElectricBorder } from "@/components/ui";

<ElectricBorder color="#00BFFF" speed={1.5} chaos={2}>
  <div>Contenido</div>
</ElectricBorder>;
```

Ver documentación completa: [ElectricBorder/README.md](./ElectricBorder/README.md)

### SplitText

Animación de texto con split por caracteres, palabras o líneas usando GSAP.

```tsx
import { SplitText } from "@/components/ui";

<SplitText
  text="Hello World!"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
/>;
```

Ver documentación completa: [SplitText/README.md](./SplitText/README.md)

### GradientText

Texto con gradiente de colores animado.

```tsx
import { GradientText } from "@/components/ui";

<GradientText colors={["#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3} showBorder={false}>
  Add a splash of color!
</GradientText>;
```

Ver documentación completa: [GradientText/README.md](./GradientText/README.md)

### TrueFocus

Efecto de enfoque animado en texto con blur y bordes animados.

```tsx
import { TrueFocus } from "@/components/ui";

<TrueFocus sentence="True Focus Effect" borderColor="cyan" blurAmount={5} />;
```

Ver documentación completa: [TrueFocus/README.md](./TrueFocus/README.md)

## Agregar Nuevos Componentes

### 1. Crear carpeta del componente

```
ui/
└── MiComponente/
    ├── MiComponente.tsx
    ├── MiComponente.module.css (opcional)
    ├── README.md
    └── index.ts
```

### 2. Estructura del componente

````tsx
// MiComponente.tsx
"use client"; // Solo si usa hooks de React

import React from "react";
import styles from "./MiComponente.module.css";

export interface MiComponenteProps {
  // Props aquí
}

/**
 * MiComponente - Descripción breve
 *
 * Descripción detallada del componente.
 *
 * @example
 * ```tsx
 * <MiComponente prop="value">
 *   Contenido
 * </MiComponente>
 * ```
 */
const MiComponente: React.FC<MiComponenteProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MiComponente;
````

### 3. Crear index.ts

```tsx
// index.ts
export { default } from "./MiComponente";
export { default as MiComponente } from "./MiComponente";
export type { MiComponenteProps } from "./MiComponente";
```

### 4. Agregar a ui/index.ts

```tsx
// ui/index.ts
export { default as MiComponente } from "./MiComponente";
export type { MiComponenteProps } from "./MiComponente";
```

### 5. Crear README.md

Documenta:

- Características
- Props
- Ejemplos de uso
- Casos de uso
- Notas técnicas

## Mejores Prácticas

### TypeScript

- Define interfaces para todas las props
- Exporta los tipos
- Usa tipos específicos, evita `any`

```tsx
export interface MyComponentProps {
  title: string;
  count: number;
  onAction?: () => void;
  children?: React.ReactNode;
}
```

### Documentación

- JSDoc para el componente
- README.md detallado
- Ejemplos de código
- Props table

### Estilos

- CSS Modules para estilos específicos
- Tailwind para utilidades
- Props para customización

```tsx
<div className={`${styles.base} ${className}`}>
```

### Accesibilidad

- ARIA labels cuando sea necesario
- Soporte de teclado
- Elementos semánticos
- Contraste adecuado

### Performance

- React.memo() si es necesario
- useMemo/useCallback para valores caros
- Lazy loading si el componente es pesado

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <div>Loading...</div>,
});
```

## Convenciones de Nomenclatura

- **Componente**: PascalCase (e.g., `ElectricBorder`)
- **Archivos**: PascalCase para .tsx (e.g., `ElectricBorder.tsx`)
- **Props Interface**: ComponentNameProps (e.g., `ElectricBorderProps`)
- **CSS Modules**: camelCase (e.g., `styles.container`)

## Testing

Estructura de tests (próximamente):

```
ui/
└── MiComponente/
    ├── MiComponente.tsx
    ├── MiComponente.test.tsx
    └── index.ts
```

## Ejemplos de Importación

```tsx
// Import específico
import ElectricBorder from "@/components/ui/ElectricBorder";
import { ElectricBorderProps } from "@/components/ui/ElectricBorder";

// Import desde barrel
import { ElectricBorder } from "@/components/ui";

// Import de tipo
import type { ElectricBorderProps } from "@/components/ui";
```

## Componentes Próximos

- [ ] Button variants
- [ ] Card components
- [ ] Modal/Dialog
- [ ] Tooltip
- [ ] Badge
- [ ] Input fields
- [ ] Select dropdown
- [ ] Tabs
- [ ] Accordion
- [ ] Progress bar
- [ ] Skeleton loader
- [ ] Toast notifications

## Recursos

- [React Best Practices](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
