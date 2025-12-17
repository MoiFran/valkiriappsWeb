# Lightning

Efecto de relámpago animado proceduralmente generado con WebGL y shaders GLSL. Implementa Fractal Brownian Motion (FBM) para crear patrones orgánicos de electricidad con personalización completa de color, velocidad, intensidad y escala.

## Características

- **WebGL Rendering**: Renderizado hardware-accelerated con shaders personalizados
- **Procedural Generation**: Relámpagos generados con algoritmos FBM
- **HSV Color Control**: Control preciso del color mediante valores HSV
- **Performance Optimized**: Animación fluida con requestAnimationFrame
- **Fully Responsive**: Se adapta automáticamente al tamaño del contenedor
- **Customizable**: 5 props para control total del efecto
- **Zero Dependencies**: Solo WebGL nativo
- **Auto Cleanup**: Limpieza automática de recursos en unmount

## Clasificación

**Tipo**: Efecto (`effects/`)

Este componente se clasifica como efecto porque:

- WebGL shader-based visual effect
- No acepta children (contenido propio procedural)
- Propósito decorativo/background
- Canvas con shaders GLSL personalizados
- Similar a SplashCursor en arquitectura
- Genera contenido visualmente, no estructura UI

## Uso Básico

```tsx
import { Lightning } from "@/components/effects";

export default function HeroSection() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <Lightning />
    </div>
  );
}
```

## Props

| Prop        | Tipo     | Default | Descripción                             |
| ----------- | -------- | ------- | --------------------------------------- |
| `hue`       | `number` | `230`   | Valor de matiz (0-360) para el color    |
| `xOffset`   | `number` | `0`     | Desplazamiento horizontal del efecto    |
| `speed`     | `number` | `1`     | Multiplicador de velocidad de animación |
| `intensity` | `number` | `1`     | Brillo/intensidad del relámpago         |
| `size`      | `number` | `1`     | Escala del efecto de relámpago          |
| `className` | `string` | `""`    | Clase CSS adicional                     |

## Ejemplos

### Default (Blue Lightning)

```tsx
<Lightning />
```

### Purple Lightning

```tsx
<Lightning hue={280} />
```

### Red Lightning

```tsx
<Lightning hue={0} intensity={1.5} />
```

### Green Lightning

```tsx
<Lightning hue={120} />
```

### Cyan Lightning (ValkiriApps Brand)

```tsx
<Lightning hue={190} intensity={1.2} />
```

### Fast Animation

```tsx
<Lightning speed={2} />
```

### Slow Animation

```tsx
<Lightning speed={0.5} />
```

### High Intensity

```tsx
<Lightning intensity={2} />
```

### Subtle Effect

```tsx
<Lightning intensity={0.5} />
```

### Large Scale

```tsx
<Lightning size={2} />
```

### Small/Detailed

```tsx
<Lightning size={0.5} />
```

### Offset Position

```tsx
<Lightning xOffset={0.5} />
```

### Combined Customization

```tsx
<Lightning hue={280} speed={1.5} intensity={1.3} size={1.2} xOffset={0} />
```

### Full Width Section

```tsx
<section style={{ position: "relative", width: "100%", height: "100vh" }}>
  <Lightning hue={220} />
  <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>
    <h1>Content over lightning</h1>
  </div>
</section>
```

### Hero Background

```tsx
export default function Hero() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Lightning background */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.6 }}>
        <Lightning hue={230} intensity={1.2} speed={0.8} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, padding: "4rem" }}>
        <h1>Welcome to the Future</h1>
        <p>Powered by lightning-fast technology</p>
      </div>
    </div>
  );
}
```

### Card Accent

```tsx
<div
  style={{
    position: "relative",
    width: "400px",
    height: "300px",
    overflow: "hidden",
    borderRadius: "12px",
  }}
>
  <Lightning hue={190} size={0.5} intensity={0.8} />
  <div style={{ position: "relative", zIndex: 10, padding: "2rem" }}>
    <h3>Lightning Card</h3>
    <p>Card content here</p>
  </div>
</div>
```

### Multiple Lightnings

```tsx
<div style={{ position: "relative", width: "100%", height: "600px" }}>
  {/* Left lightning */}
  <div style={{ position: "absolute", left: 0, width: "50%", height: "100%" }}>
    <Lightning hue={190} xOffset={-0.5} />
  </div>

  {/* Right lightning */}
  <div style={{ position: "absolute", right: 0, width: "50%", height: "100%" }}>
    <Lightning hue={280} xOffset={0.5} />
  </div>

  {/* Center content */}
  <div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
    <h1>Between the Lightning</h1>
  </div>
</div>
```

### Animated Hue Change

```tsx
"use client";
import { Lightning } from "@/components/effects";
import { useState, useEffect } from "react";

export default function AnimatedLightning() {
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Lightning hue={hue} />
    </div>
  );
}
```

### With Opacity Control

```tsx
<div
  style={{
    position: "relative",
    width: "100%",
    height: "600px",
    opacity: 0.7,
  }}
>
  <Lightning hue={220} intensity={1.5} />
</div>
```

### Layered Effect

```tsx
<div style={{ position: "relative", width: "100%", height: "600px" }}>
  {/* Base layer - slow and subtle */}
  <div style={{ position: "absolute", inset: 0, opacity: 0.3 }}>
    <Lightning hue={220} speed={0.5} intensity={0.8} size={2} />
  </div>

  {/* Top layer - fast and bright */}
  <div style={{ position: "absolute", inset: 0, opacity: 0.7 }}>
    <Lightning hue={230} speed={2} intensity={1.5} size={0.8} />
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
  <Lightning hue={220} intensity={0.8} />
</div>
```

### Responsive Container

```tsx
<div
  style={{
    width: "100%",
    height: "clamp(400px, 50vh, 800px)",
    position: "relative",
  }}
>
  <Lightning hue={190} />
</div>
```

## Como Funciona

### Shaders GLSL

El componente utiliza dos shaders:

1. **Vertex Shader**: Simple pass-through que posiciona un quad fullscreen
2. **Fragment Shader**: Genera el efecto de relámpago proceduralmente

### Fractal Brownian Motion (FBM)

El algoritmo FBM combina múltiples octavas de ruido Perlin para crear patrones orgánicos:

```glsl
float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < OCTAVE_COUNT; ++i) {
        value += amplitude * noise(p);
        p *= rotate2d(0.45);
        p *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}
```

- **10 octavas**: Múltiples capas de detalle
- **Rotación**: Cada octava se rota 0.45 radianes
- **Frecuencia doble**: Cada octava tiene el doble de frecuencia
- **Amplitud mitad**: Cada octava tiene la mitad de amplitud

### HSV to RGB Conversion

Conversión matemática de HSV a RGB en el shader:

```glsl
vec3 hsv2rgb(vec3 c) {
    vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0,4.0,2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
    return c.z * mix(vec3(1.0), rgb, c.y);
}
```

Permite control preciso del color mediante:

- **Hue** (0-360): Matiz del color
- **Saturation** (0.7 fixed): Saturación del color
- **Value** (0.8 fixed): Brillo del color

### Hash Functions

Funciones de hash para generar valores pseudoaleatorios:

```glsl
float hash11(float p) {
    p = fract(p * .1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
}
```

Usado para añadir variación temporal al efecto.

## Uniforms

El shader recibe estos uniforms desde JavaScript:

| Uniform       | Tipo    | Descripción                           |
| ------------- | ------- | ------------------------------------- |
| `iResolution` | `vec2`  | Resolución del canvas (width, height) |
| `iTime`       | `float` | Tiempo en segundos desde el inicio    |
| `uHue`        | `float` | Valor de matiz (0-360)                |
| `uXOffset`    | `float` | Desplazamiento horizontal             |
| `uSpeed`      | `float` | Multiplicador de velocidad            |
| `uIntensity`  | `float` | Multiplicador de intensidad           |
| `uSize`       | `float` | Escala del efecto                     |

## Color Guide

### Colores Comunes (Hue Values)

```tsx
// Red
<Lightning hue={0} />

// Orange
<Lightning hue={30} />

// Yellow
<Lightning hue={60} />

// Green
<Lightning hue={120} />

// Cyan
<Lightning hue={180} />

// Blue (default)
<Lightning hue={230} />

// Purple
<Lightning hue={280} />

// Magenta
<Lightning hue={320} />
```

### ValkiriApps Palette

```tsx
// ValkiriApps Cyan
<Lightning hue={190} intensity={1.2} />

// ValkiriApps Purple
<Lightning hue={270} intensity={1.1} />

// ValkiriApps Blue
<Lightning hue={220} intensity={1.0} />
```

## Performance

### Optimizaciones Incluidas

1. **Hardware Acceleration**: WebGL utiliza GPU para renderizado
2. **Efficient Shaders**: Shaders optimizados con operaciones mínimas
3. **RequestAnimationFrame**: Sincronización con refresh rate del display
4. **Proper Cleanup**: Cancelación de animationFrame en unmount
5. **Resize Observer**: Canvas se redimensiona eficientemente

### Tips de Performance

```tsx
// Mejor performance con menor size
<Lightning size={0.5} />

// Menor intensidad = mejor performance
<Lightning intensity={0.8} />

// Velocidad no afecta significativamente performance
<Lightning speed={2} />
```

### Mobile Considerations

```tsx
"use client";
import { Lightning } from "@/components/effects";
import { useEffect, useState } from "react";

export default function ResponsiveLightning() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Lightning intensity={isMobile ? 0.7 : 1.2} size={isMobile ? 0.8 : 1} />
    </div>
  );
}
```

## Casos de Uso

### 1. Hero Section Background

```tsx
<section style={{ position: "relative", minHeight: "100vh" }}>
  <div style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
    <Lightning hue={220} />
  </div>
  <div style={{ position: "relative", zIndex: 10 }}>
    <h1>Hero Title</h1>
  </div>
</section>
```

### 2. Feature Card Accent

```tsx
<div style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
  <div style={{ position: "absolute", inset: 0, opacity: 0.3 }}>
    <Lightning hue={190} size={0.5} />
  </div>
  <div style={{ position: "relative", zIndex: 10, padding: "2rem" }}>
    <h3>Feature Title</h3>
  </div>
</div>
```

### 3. Loading State

```tsx
<div style={{ width: "200px", height: "200px" }}>
  <Lightning hue={190} speed={2} />
</div>
```

### 4. Section Divider

```tsx
<div style={{ width: "100%", height: "200px" }}>
  <Lightning hue={280} intensity={0.8} />
</div>
```

### 5. Button Background (Hover Effect)

```tsx
"use client";
import { Lightning } from "@/components/effects";
import { useState } from "react";

export default function LightningButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        position: "relative",
        padding: "1rem 2rem",
        overflow: "hidden",
        border: "none",
        borderRadius: "8px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
          <Lightning hue={190} size={0.3} />
        </div>
      )}
      <span style={{ position: "relative", zIndex: 10 }}>Hover Me</span>
    </button>
  );
}
```

## Browser Support

- **Chrome/Edge**: ✅ Excelente soporte WebGL
- **Firefox**: ✅ Excelente soporte WebGL
- **Safari**: ✅ Muy buen soporte WebGL
- **Opera**: ✅ Excelente soporte WebGL
- **Mobile**: ✅ Soporte WebGL en navegadores modernos

**Requisitos**:

- WebGL 1.0 support
- ES6+ JavaScript
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
  <Lightning />
</div>
```

3. **Verifica la consola** para errores de compilación de shaders

### Performance lento

```tsx
// Reduce size
<Lightning size={0.5} />

// Reduce intensity
<Lightning intensity={0.8} />
```

### Color no se ve

```tsx
// Verifica que hue esté en rango 0-360
<Lightning hue={220} /> // ✅ Correcto
<Lightning hue={400} /> // ❌ Fuera de rango
```

### No se ve en mobile

```tsx
// Asegúrate de que el contenedor tenga altura
<div style={{ width: "100%", height: "100vh" }}>
  <Lightning />
</div>
```

## Integración Avanzada

### Con ScrollFloat

```tsx
import { Lightning } from "@/components/effects";
import { ScrollFloat } from "@/components/effects";

export default function AnimatedSection() {
  return (
    <section style={{ position: "relative", padding: "6rem 2rem" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.4 }}>
        <Lightning hue={220} />
      </div>

      <ScrollFloat tag="h2" style={{ position: "relative", zIndex: 10 }}>
        Lightning Fast Performance
      </ScrollFloat>
    </section>
  );
}
```

### Con Framer Motion

```tsx
"use client";
import { Lightning } from "@/components/effects";
import { motion } from "framer-motion";

export default function AnimatedLightning() {
  return (
    <motion.div
      style={{ width: "100%", height: "600px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Lightning hue={220} />
    </motion.div>
  );
}
```

### Con Theme Context

```tsx
"use client";
import { Lightning } from "@/components/effects";
import { useTheme } from "@/context/ThemeContext";

export default function ThemedLightning() {
  const { theme } = useTheme();

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <Lightning hue={theme === "dark" ? 220 : 190} intensity={theme === "dark" ? 1.2 : 0.8} />
    </div>
  );
}
```

## Accesibilidad

El componente incluye:

- `aria-label` descriptivo en el canvas
- No interfiere con lectores de pantalla (puramente decorativo)
- No requiere interacción del usuario

### Respetar prefers-reduced-motion

```tsx
"use client";
import { Lightning } from "@/components/effects";
import { useEffect, useState } from "react";

export default function AccessibleLightning() {
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
      <Lightning hue={220} />
    </div>
  );
}
```

## Ejemplo Completo - Hero Section

```tsx
"use client";
import { Lightning } from "@/components/effects";
import { ScrollFloat } from "@/components/effects";

export default function LightningHero() {
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
      {/* Lightning background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.6,
          filter: "blur(1px)",
        }}
      >
        <Lightning hue={220} intensity={1.2} speed={0.8} size={1} />
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
          Lightning Fast Performance
        </ScrollFloat>

        <ScrollFloat
          tag="p"
          style={{
            fontSize: "1.25rem",
            color: "#aaa",
            marginBottom: "2rem",
          }}
        >
          Experience the power of cutting-edge technology
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
          Get Started
        </button>
      </div>

      {/* Gradient overlay for better readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 100%)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
```

## Licencia

MIT - ValkiriApps
