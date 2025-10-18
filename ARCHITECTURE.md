# Arquitectura del Proyecto ValkiriApps Web

## 📐 Principios de Diseño

Este proyecto sigue los siguientes principios arquitectónicos:

1. **Separación de Responsabilidades**: Componentes, lógica, estilos y configuración están claramente separados
2. **DRY (Don't Repeat Yourself)**: Constantes, hooks y utilidades reutilizables
3. **Composición sobre Herencia**: Componentes componibles y reutilizables
4. **Type Safety**: TypeScript en todo el proyecto
5. **Performance First**: Optimizaciones de carga, lazy loading, y code splitting

## 🏗️ Estructura de Carpetas

### `/src/app`
Directorio principal de Next.js 15 App Router.

- `layout.tsx`: Root layout con configuración de fuentes y SmoothScroll
- `page.tsx`: Página principal (Home)
- `favicon.ico`: Icono de la aplicación

### `/src/components`
Todos los componentes React organizados por dominio.

#### `/components/layout`
Componentes estructurales que definen el layout de la aplicación:
- `ClientSmoothScroll.tsx`: Wrapper para smooth scrolling global
- `Navbar/`: Sistema de navegación con efectos "gooey"

#### `/components/sections`
Secciones principales de las páginas:
- `Hero/`: Hero section con WebGL background (Threads)
- `Mision/`: Sección de misión y valores core

#### `/components/animations`
Componentes específicos de animación (futuro uso):
- Componentes reutilizables de animación
- Wrappers de animación genéricos

#### `/components/ui`
Componentes de UI reutilizables (futuro uso):
- Botones
- Cards
- Modals
- Forms

### `/src/hooks`
Custom React Hooks para lógica reutilizable.

- `useSmoothScroll.ts`: Hook para configurar Lenis + GSAP ScrollTrigger
- `useWindowSize.ts`: Hook para obtener dimensiones de la ventana
- `index.ts`: Barrel export de todos los hooks

### `/src/utils`
Funciones utilitarias puras.

- `animation.ts`: Funciones de animación (lerp, clamp, easings, etc.)
- `cn.ts`: Utility para merge de classNames
- `index.ts`: Barrel export de utilidades

### `/src/types`
Definiciones de tipos TypeScript compartidos.

- `index.ts`: Interfaces y tipos del proyecto
  - `NavigationItem`
  - `GooeyNavProps`
  - `ThreadsProps`
  - `CoreValue`
  - `CompanyInfo`

### `/src/constants`
Constantes de configuración centralizadas.

- `company.ts`: Información de la empresa
- `navigation.ts`: Items de navegación y configuración de GooeyNav
- `theme.ts`: Colores, breakpoints, configuraciones de animación
- `index.ts`: Barrel export de constantes

### `/src/styles`
Estilos globales y arquitectura CSS.

- `globals.css`: Reset, estilos base, fuentes
- `variables.css`: CSS Custom Properties (colores, spacing, tipografía)
- `mixins.css`: Clases utilitarias reutilizables

### `/src/lib`
Configuraciones de librerías externas (futuro uso).

- Configuración de clientes API
- Wrappers de librerías de terceros
- Inicializaciones de servicios

### `/public`
Assets estáticos servidos directamente.

#### `/public/images`
- `/logos`: Logos de ValkiriApps en diferentes formatos
- `/screenshots`: Capturas de pantalla y mockups

#### `/public/fonts`
Fuentes personalizadas (si las hay)

## 🔄 Flujo de Datos

### 1. Carga Inicial
```
Usuario accede → app/layout.tsx
                 ├─ Carga fuentes (Geist Sans/Mono)
                 ├─ Aplica estilos globales
                 └─ Envuelve con ClientSmoothScroll
                    └─ Inicializa Lenis + GSAP
                       └─ Renderiza children (app/page.tsx)
```

### 2. Renderizado de Página
```
app/page.tsx
├─ NavBar (layout/Navbar)
│  └─ GooeyNav con items de constants/navigation
├─ Hero (sections/Hero)
│  ├─ Threads (WebGL background)
│  └─ Logo + texto usando constants/company
└─ Mision (sections/Mision)
   ├─ ScrollFloat (animación de texto)
   └─ Valores core usando constants/company
```

### 3. Animaciones
```
Scroll del usuario
├─ Lenis captura evento
├─ GSAP ScrollTrigger sincronizado
└─ Componentes reaccionan
   ├─ ScrollFloat anima texto
   ├─ Mision cards entran con Framer Motion
   └─ Threads actualiza shaders WebGL
```

## 🎨 Sistema de Estilos

### Jerarquía de Estilos

1. **CSS Variables** (`styles/variables.css`)
   - Definición de tokens de diseño
   - Theming con CSS Custom Properties
   - Media queries para dark mode

2. **Global Styles** (`styles/globals.css`)
   - Reset CSS
   - Estilos base de HTML/body
   - Fuentes globales

3. **Utility Classes** (`styles/mixins.css`)
   - Clases helper reutilizables
   - Animaciones comunes

4. **Component Styles** (`.module.css`)
   - Estilos con scope por componente
   - Previene colisiones de nombres

### Naming Convention

- **CSS Modules**: camelCase (ej: `.heroSection`, `.logoWrapper`)
- **CSS Variables**: kebab-case con prefijo `--` (ej: `--color-primary`)
- **Utility Classes**: kebab-case (ej: `.flex-center`)

## 🔧 Patrones de Desarrollo

### Componentes

```typescript
// Estructura recomendada para componentes

// 1. Imports
import React from "react";
import { tipo } from "@/types";
import { CONSTANTE } from "@/constants";
import styles from "./Componente.module.css";

// 2. Props interface
interface ComponenteProps {
  prop1: string;
  prop2?: number;
}

// 3. Componente
export default function Componente({ prop1, prop2 = 0 }: ComponenteProps) {
  // 4. Hooks
  const [state, setState] = useState();

  // 5. Effects
  useEffect(() => {
    // ...
  }, []);

  // 6. Handlers
  const handleClick = () => {
    // ...
  };

  // 7. Render
  return (
    <div className={styles.container}>
      {/* JSX */}
    </div>
  );
}
```

### Custom Hooks

```typescript
// Estructura recomendada para hooks

import { useState, useEffect } from "react";

export function useMiHook(param: string) {
  const [state, setState] = useState();

  useEffect(() => {
    // Lógica del hook
  }, [param]);

  return { state };
}
```

### Utilidades

```typescript
// Funciones puras sin efectos secundarios

export function miUtilidad(input: number): number {
  // Lógica
  return output;
}
```

## 🚀 Optimizaciones de Performance

### 1. Code Splitting
- Next.js automáticamente divide el código por rutas
- Lazy loading de componentes pesados con `dynamic()`

### 2. Image Optimization
- Uso de `next/image` para optimización automática
- Responsive images con `sizes` attribute
- Priority loading para imágenes above-the-fold

### 3. CSS Modules
- CSS con scope local reduce colisiones
- Dead code elimination automática

### 4. Animation Performance
- RequestAnimationFrame para animaciones fluidas
- GSAP para animaciones optimizadas
- WebGL para efectos complejos sin bloquear main thread

### 5. Bundle Optimization
- Tree shaking automático
- Barrel exports (`index.ts`) para imports limpios
- Minificación en producción

## 📦 Gestión de Dependencias

### Core Dependencies
Librerías esenciales para el funcionamiento:
- next, react, react-dom

### Animation Dependencies
Librerías para efectos visuales:
- gsap, @studio-freight/lenis, framer-motion
- three, @react-three/fiber, @react-three/drei, ogl

### Development Dependencies
Herramientas de desarrollo:
- typescript, eslint, @types/*

## 🔐 Seguridad

### Variables de Entorno
- Usar `.env.local` para secrets (nunca commitear)
- Prefijo `NEXT_PUBLIC_` para variables expuestas al cliente
- `.env.example` para documentar variables necesarias

### Content Security
- Sanitización de inputs (futuro)
- CORS configurado apropiadamente
- Headers de seguridad en next.config.ts

## 🧪 Testing (Futuro)

### Estructura Recomendada
```
src/
├─ components/
│  └─ Hero/
│     ├─ Hero.tsx
│     ├─ Hero.module.css
│     └─ Hero.test.tsx  ← Tests unitarios
├─ hooks/
│  ├─ useSmoothScroll.ts
│  └─ useSmoothScroll.test.ts
└─ utils/
   ├─ animation.ts
   └─ animation.test.ts
```

### Herramientas Sugeridas
- Jest + React Testing Library
- Playwright o Cypress para E2E

## 📈 Escalabilidad

### Agregar Nuevas Páginas
1. Crear carpeta en `src/app/[ruta]/`
2. Agregar `page.tsx` y `layout.tsx` si es necesario
3. Reutilizar componentes de `/src/components`

### Agregar Nuevas Features
1. Crear componentes en `/components/sections` o `/components/ui`
2. Extraer lógica a hooks en `/hooks`
3. Agregar constantes en `/constants`
4. Definir tipos en `/types`

### Internacionalización (i18n)
Para agregar soporte multi-idioma:
1. Instalar `next-intl` o similar
2. Crear `/src/i18n/` con traducciones
3. Actualizar constantes para usar traducciones
4. Configurar middleware en Next.js

## 🎯 Mejores Prácticas

### 1. Imports
```typescript
// ✅ Bueno: Usar alias @
import { Component } from "@/components/sections/Hero";
import { COLORS } from "@/constants";

// ❌ Malo: Imports relativos profundos
import { Component } from "../../../components/sections/Hero";
```

### 2. Constantes
```typescript
// ✅ Bueno: Centralizar constantes
import { COMPANY_INFO } from "@/constants";

// ❌ Malo: Hardcodear valores
const name = "ValkiriApps";
```

### 3. Tipos
```typescript
// ✅ Bueno: Definir interfaces
interface Props {
  title: string;
}

// ❌ Malo: any
function Component(props: any) { }
```

### 4. Componentes
```typescript
// ✅ Bueno: Componentes pequeños y enfocados
function Button() { }
function Card() { }

// ❌ Malo: Componentes gigantes multipropósito
function EverythingComponent() { }
```

## 📚 Recursos Adicionales

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [GSAP Documentation](https://greensock.com/docs/)
- [Three.js Documentation](https://threejs.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Última actualización**: 2025
**Versión**: 1.0.0
