# Threads

Efecto visual de hilos animados con WebGL/OGL y shaders GLSL personalizados. Implementa ruido Perlin 2D para crear patrones orgánicos de líneas onduladas con soporte para interacción del mouse.

## Características

- **WebGL/OGL Rendering**: Usa la biblioteca OGL (similar a Three.js) para renderizado eficiente
- **40 Threads Animados**: Múltiples líneas con blur y fade progresivo
- **Perlin Noise**: Movimiento orgánico y natural de los hilos
- **Mouse Interaction**: Los hilos responden al movimiento del mouse (opcional)
- **Customizable**: Color RGB, amplitud, distancia, interacción
- **Transparent Background**: Alpha blending para composición
- **Performance Optimized**: Hardware-accelerated con WebGL
- **Auto Cleanup**: Limpieza automática de recursos en unmount

## Clasificación

**Tipo**: Efecto (`effects/`)

Este componente se clasifica como efecto porque:

- WebGL/OGL rendering con shaders personalizados
- No acepta children (contenido propio procedural)
- Propósito decorativo/background
- Canvas con GLSL shaders y Perlin noise
- Genera patrones visuales orgánicos
- Similar a LaserFlow y Lightning en arquitectura

## Uso Básico

```tsx
import { Threads } from "@/components/effects";

export default function HeroSection() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <Threads />
    </div>
  );
}
```

## Props

| Prop                     | Tipo                       | Default     | Descripción                   |
| ------------------------ | -------------------------- | ----------- | ----------------------------- |
| `color`                  | `[number, number, number]` | `[1, 1, 1]` | Color RGB en rango 0-1        |
| `amplitude`              | `number`                   | `1`         | Fuerza de la amplitud de onda |
| `distance`               | `number`                   | `0`         | Distancia entre hilos         |
| `enableMouseInteraction` | `boolean`                  | `false`     | Activar interacción con mouse |
| `className`              | `string`                   | `""`        | Clase CSS adicional           |

## Ejemplos

### Default (White Threads)

```tsx
<Threads />
```

### Blue Threads

```tsx
<Threads color={[0, 0.749, 1]} />
```

### Purple Threads

```tsx
<Threads color={[0.518, 0.153, 1]} />
```

### Cyan Threads (ValkiriApps)

```tsx
<Threads color={[0, 0.749, 1]} />
```

### Pink/Magenta Threads

```tsx
<Threads color={[1, 0.475, 0.776]} />
```

### Green Threads

```tsx
<Threads color={[0.314, 0.98, 0.482]} />
```

### High Amplitude

```tsx
<Threads amplitude={2} />
```

### Subtle Amplitude

```tsx
<Threads amplitude={0.5} />
```

### Spread Apart

```tsx
<Threads distance={0.3} />
```

### Close Together

```tsx
<Threads distance={-0.2} />
```

### With Mouse Interaction

```tsx
<Threads enableMouseInteraction={true} />
```

### Combined Customization

```tsx
<Threads color={[0, 0.749, 1]} amplitude={1.5} distance={0.1} enableMouseInteraction={true} />
```

### Hero Section Background

```tsx
export default function Hero() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#000" }}>
      {/* Threads background */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.6 }}>
        <Threads color={[0, 0.749, 1]} amplitude={1.2} enableMouseInteraction={true} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, padding: "4rem" }}>
        <h1>Threaded Future</h1>
        <p>Seamlessly connected experiences</p>
      </div>
    </div>
  );
}
```

### Card Overlay

```tsx
<div
  style={{
    position: "relative",
    width: "400px",
    height: "300px",
    overflow: "hidden",
    borderRadius: "12px",
    background: "#0a0a0a",
  }}
>
  <div style={{ position: "absolute", inset: 0, opacity: 0.4 }}>
    <Threads color={[0.518, 0.153, 1]} amplitude={0.8} />
  </div>
  <div style={{ position: "relative", zIndex: 10, padding: "2rem" }}>
    <h3>Threaded Card</h3>
    <p>Content with threads overlay</p>
  </div>
</div>
```

### Interactive Section

```tsx
<section
  style={{
    position: "relative",
    padding: "6rem 2rem",
    background: "#000",
  }}
>
  <div style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
    <Threads
      color={[1, 0.475, 0.776]}
      amplitude={1.5}
      distance={0.15}
      enableMouseInteraction={true}
    />
  </div>

  <div style={{ position: "relative", zIndex: 10 }}>
    <h2>Interactive Section</h2>
    <p>Hover to see threads respond</p>
  </div>
</section>
```

### Layered Effect

```tsx
<div style={{ position: "relative", width: "100%", height: "600px" }}>
  {/* Background layer - cyan */}
  <div style={{ position: "absolute", inset: 0, opacity: 0.3 }}>
    <Threads color={[0, 0.749, 1]} amplitude={2} distance={0.2} />
  </div>

  {/* Foreground layer - purple */}
  <div style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
    <Threads
      color={[0.518, 0.153, 1]}
      amplitude={1}
      distance={-0.1}
      enableMouseInteraction={true}
    />
  </div>
</div>
```

### Fullscreen Background

```tsx
<div
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
  }}
>
  <Threads color={[0, 0.749, 1]} amplitude={1} enableMouseInteraction={true} />
</div>
```

### With Gradient Overlay

```tsx
<div style={{ position: "relative", width: "100%", height: "600px" }}>
  <Threads color={[1, 1, 1]} amplitude={1.5} />
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)",
      pointerEvents: "none",
    }}
  />
</div>
```

### Responsive Container

```tsx
<div
  style={{
    width: "100%",
    height: "clamp(400px, 60vh, 800px)",
    position: "relative",
  }}
>
  <Threads color={[0.314, 0.98, 0.482]} amplitude={1.2} />
</div>
```

### Dynamic Color Change

```tsx
"use client";
import { Threads } from "@/components/effects";
import { useState, useEffect } from "react";

export default function DynamicThreads() {
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Convert HSL to RGB (simplified)
  const h = hue / 360;
  const s = 0.8;
  const l = 0.6;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h * 6) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;
  if (h < 1 / 6) {
    r = c;
    g = x;
  } else if (h < 2 / 6) {
    r = x;
    g = c;
  } else if (h < 3 / 6) {
    g = c;
    b = x;
  } else if (h < 4 / 6) {
    g = x;
    b = c;
  } else if (h < 5 / 6) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Threads color={[r + m, g + m, b + m]} />
    </div>
  );
}
```

### With Theme Context

```tsx
"use client";
import { Threads } from "@/components/effects";
import { useTheme } from "@/context/ThemeContext";

export default function ThemedThreads() {
  const { theme } = useTheme();

  const color: [number, number, number] =
    theme === "dark"
      ? [0, 0.749, 1] // Cyan
      : [0.518, 0.153, 1]; // Purple

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Threads color={color} amplitude={theme === "dark" ? 1.5 : 1} />
    </div>
  );
}
```

### Mobile Optimized

```tsx
"use client";
import { Threads } from "@/components/effects";
import { useEffect, useState } from "react";

export default function ResponsiveThreads() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Threads
        color={[0, 0.749, 1]}
        amplitude={isMobile ? 0.8 : 1.5}
        enableMouseInteraction={!isMobile}
      />
    </div>
  );
}
```

## Como Funciona

### OGL Library

Threads usa la biblioteca **OGL** (OpenGL abstraction layer), una alternativa ligera a Three.js:

```typescript
const renderer = new Renderer({ alpha: true });
const geometry = new Triangle(gl);
const program = new Program(gl, {
  vertex: vertexShaderSource,
  fragment: fragmentShaderSource,
  uniforms: { ... }
});
const mesh = new Mesh(gl, { geometry, program });
```

### Vertex Shader

Simple pass-through que posiciona un triángulo fullscreen:

```glsl
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
```

### Fragment Shader

Genera 40 líneas con Perlin noise y blur:

```glsl
// 40 líneas iterativas
for (int i = 0; i < 40; i++) {
    float p = float(i) / float(40);
    line_strength *= (1.0 - lineFn(...));
}
```

### Perlin Noise 2D

Algoritmo clásico de ruido Perlin para movimiento orgánico:

```glsl
float Perlin2D(vec2 P) {
    // Interpola gradientes en grid 2D
    // Usa smoothstep para transiciones suaves
    // Retorna valores entre -1 y 1
}
```

**Características**:

- Grid-based interpolation
- Gradientes aleatorios
- Smoothstep blending
- Resultados determinísticos

### Line Function

Cada línea se calcula con:

1. **Split Point**: Punto donde la línea comienza a animarse
2. **Amplitude**: Controlado por mouse y prop amplitude
3. **Perlin Noise**: Movimiento ondulatorio orgánico
4. **Blur**: Difuminado progresivo de líneas

### Mouse Interaction

Smoothing suave del mouse con interpolación:

```typescript
const smoothing = 0.05;
currentMouse[0] += smoothing * (targetMouse[0] - currentMouse[0]);
currentMouse[1] += smoothing * (targetMouse[1] - currentMouse[1]);
```

- **X axis**: Afecta el tiempo/velocidad de la animación
- **Y axis**: Afecta la amplitud de las ondas

## Uniforms

El shader recibe estos uniforms desde JavaScript:

| Uniform       | Tipo    | Descripción              |
| ------------- | ------- | ------------------------ |
| `iTime`       | `float` | Tiempo en segundos       |
| `iResolution` | `vec3`  | (width, height, aspect)  |
| `uColor`      | `vec3`  | Color RGB (0-1)          |
| `uAmplitude`  | `float` | Fuerza de amplitud       |
| `uDistance`   | `float` | Separación entre hilos   |
| `uMouse`      | `vec2`  | Posición del mouse (0-1) |

## Shader Constants

```glsl
const int u_line_count = 40;     // Número de líneas
const float u_line_width = 7.0;  // Ancho base de línea
const float u_line_blur = 10.0;  // Factor de blur
```

## Color Guide

### RGB Values (0-1 range)

```tsx
// White (default)
<Threads color={[1, 1, 1]} />

// Pure Red
<Threads color={[1, 0, 0]} />

// Pure Green
<Threads color={[0, 1, 0]} />

// Pure Blue
<Threads color={[0, 0, 1]} />

// Cyan
<Threads color={[0, 1, 1]} />

// Magenta
<Threads color={[1, 0, 1]} />

// Yellow
<Threads color={[1, 1, 0]} />
```

### ValkiriApps Palette

```tsx
// ValkiriApps Cyan
<Threads color={[0, 0.749, 1]} />

// ValkiriApps Purple
<Threads color={[0.518, 0.153, 1]} />

// ValkiriApps Pink
<Threads color={[1, 0.475, 0.776]} />
```

### Converting Hex to RGB

```tsx
// Helper function
function hexToRgb01(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255]
    : [1, 1, 1];
}

// Usage
<Threads color={hexToRgb01("#00BFFF")} />;
```

## Performance

### Optimizaciones Incluidas

1. **Hardware Acceleration**: WebGL usa GPU para renderizado
2. **Efficient Shaders**: Loop fijo con 40 iteraciones
3. **Alpha Blending**: Composición eficiente con transparencia
4. **RequestAnimationFrame**: Sincronizado con refresh rate
5. **Mouse Smoothing**: Interpolación suave sin jitter
6. **Proper Cleanup**: WebGL context loss en unmount

### Performance Tips

```tsx
// Menor amplitud = mejor performance
<Threads amplitude={0.5} />

// Sin interacción de mouse en mobile
<Threads enableMouseInteraction={false} />

// Menor opacidad puede ayudar
<div style={{ opacity: 0.6 }}>
  <Threads />
</div>
```

## Casos de Uso

### 1. Hero Section Background

```tsx
<section style={{ position: "relative", minHeight: "100vh" }}>
  <div style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
    <Threads color={[0, 0.749, 1]} enableMouseInteraction={true} />
  </div>
  <div style={{ position: "relative", zIndex: 10 }}>
    <h1>Hero Title</h1>
  </div>
</section>
```

### 2. Card Background

```tsx
<div style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
  <div style={{ position: "absolute", inset: 0, opacity: 0.3 }}>
    <Threads color={[0.518, 0.153, 1]} amplitude={0.8} />
  </div>
  <div style={{ position: "relative", zIndex: 10, padding: "2rem" }}>
    <h3>Card Content</h3>
  </div>
</div>
```

### 3. Section Divider

```tsx
<div style={{ width: "100%", height: "200px" }}>
  <Threads color={[1, 0.475, 0.776]} amplitude={1.5} distance={0.2} />
</div>
```

### 4. Loading Overlay

```tsx
<div
  style={{
    position: "fixed",
    inset: 0,
    background: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  }}
>
  <div style={{ width: "300px", height: "300px" }}>
    <Threads color={[0, 0.749, 1]} amplitude={2} />
  </div>
</div>
```

### 5. Interactive Demo Section

```tsx
<section style={{ position: "relative", padding: "4rem 0" }}>
  <div style={{ position: "absolute", inset: 0 }}>
    <Threads color={[0.314, 0.98, 0.482]} amplitude={1.5} enableMouseInteraction={true} />
  </div>
  <div style={{ position: "relative", zIndex: 10 }}>
    <h2>Hover to Interact</h2>
  </div>
</section>
```

## Browser Support

- **Chrome/Edge**: ✅ Excelente soporte WebGL
- **Firefox**: ✅ Excelente soporte WebGL
- **Safari**: ✅ Muy buen soporte WebGL
- **Opera**: ✅ Excelente soporte WebGL
- **Mobile**: ✅ WebGL soportado en navegadores modernos

**Requisitos**:

- WebGL 1.0 support
- ES6+ JavaScript
- OGL library
- RequestAnimationFrame API

## Troubleshooting

### El efecto no aparece

1. **Verifica soporte WebGL**:

```tsx
if (!canvas.getContext("webgl")) {
  console.error("WebGL not supported");
}
```

2. **Verifica dimensiones del contenedor**:

```tsx
<div style={{ width: "100%", height: "600px" }}>
  <Threads />
</div>
```

3. **Verifica la consola** para errores de shader

### Los hilos son difíciles de ver

```tsx
// Aumenta la opacidad
<div style={{ opacity: 1 }}>
  <Threads color={[1, 1, 1]} />
</div>

// Usa fondo oscuro
<div style={{ background: "#000" }}>
  <Threads color={[0, 0.749, 1]} />
</div>
```

### Performance lento

```tsx
// Reduce amplitud
<Threads amplitude={0.5} />

// Desactiva mouse interaction
<Threads enableMouseInteraction={false} />
```

### Mouse interaction no funciona

```tsx
// Asegúrate de activar la prop
<Threads enableMouseInteraction={true} />

// Verifica que el contenedor tenga dimensiones
<div style={{ width: "100%", height: "600px" }}>
  <Threads enableMouseInteraction={true} />
</div>
```

## Integración Avanzada

### Con ScrollFloat

```tsx
import { Threads } from "@/components/effects";
import { ScrollFloat } from "@/components/effects";

export default function AnimatedSection() {
  return (
    <section style={{ position: "relative", padding: "6rem 2rem" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.4 }}>
        <Threads color={[0, 0.749, 1]} />
      </div>

      <ScrollFloat tag="h2" style={{ position: "relative", zIndex: 10 }}>
        Threaded Connections
      </ScrollFloat>
    </section>
  );
}
```

### Con Framer Motion

```tsx
"use client";
import { Threads } from "@/components/effects";
import { motion } from "framer-motion";

export default function AnimatedThreads() {
  return (
    <motion.div
      style={{ width: "100%", height: "600px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Threads color={[0, 0.749, 1]} />
    </motion.div>
  );
}
```

### Con Lightning

```tsx
import { Threads } from "@/components/effects";
import { Lightning } from "@/components/effects";

export default function CombinedEffects() {
  return (
    <div style={{ position: "relative", width: "100%", height: "600px" }}>
      {/* Threads background */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.3 }}>
        <Threads color={[0, 0.749, 1]} amplitude={1} />
      </div>

      {/* Lightning foreground */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
        <Lightning hue={190} intensity={1.2} />
      </div>
    </div>
  );
}
```

## Accesibilidad

El componente incluye:

- `aria-label` descriptivo en el contenedor
- No interfiere con lectores de pantalla (puramente decorativo)
- No requiere interacción del usuario (mouse es opcional)

### Respetar prefers-reduced-motion

```tsx
"use client";
import { Threads } from "@/components/effects";
import { useEffect, useState } from "react";

export default function AccessibleThreads() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);
  }, []);

  if (reduceMotion) {
    return null; // No mostrar si el usuario prefiere menos movimiento
  }

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Threads color={[0, 0.749, 1]} />
    </div>
  );
}
```

## Ejemplo Completo - Hero Section

```tsx
"use client";
import { Threads } from "@/components/effects";
import { ScrollFloat } from "@/components/effects";

export default function ThreadsHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* Threads background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.6,
        }}
      >
        <Threads
          color={[0, 0.749, 1]}
          amplitude={1.5}
          distance={0.1}
          enableMouseInteraction={true}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "2rem",
          maxWidth: "800px",
        }}
      >
        <ScrollFloat
          tag="h1"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 700,
            marginBottom: "1.5rem",
            color: "#fff",
          }}
        >
          Woven Together
        </ScrollFloat>

        <ScrollFloat
          tag="p"
          style={{
            fontSize: "1.25rem",
            color: "#aaa",
            marginBottom: "2rem",
          }}
        >
          Seamlessly connected experiences
        </ScrollFloat>

        <button
          style={{
            padding: "1rem 2rem",
            fontSize: "1.125rem",
            fontWeight: 600,
            color: "#fff",
            background: "rgba(0, 191, 255, 0.2)",
            border: "2px solid rgba(0, 191, 255, 0.5)",
            borderRadius: "8px",
            cursor: "pointer",
            backdropFilter: "blur(10px)",
          }}
        >
          Explore
        </button>
      </div>

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
```

## Licencia

MIT - ValkiriApps
