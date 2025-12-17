# LaserFlow

Efecto visual de haz láser volumétrico con niebla, wisps animados y shaders GLSL personalizados usando Three.js y WebGL.

## Características

- Renderizado WebGL con Three.js
- Shaders GLSL personalizados (vertex + fragment)
- Haz láser animado con forma de arco
- Niebla volumétrica con ruido FBM (Fractional Brownian Motion)
- Wisps animados que viajan a lo largo del haz
- Seguimiento del mouse con tilt effect
- Performance adaptativa (ajuste automático de DPR)
- Intersection Observer para pausar cuando no es visible
- Soporte para WebGL context loss/restore
- Fade-in suave al montarse
- Altamente personalizable (20+ props)

## Clasificación

**Tipo**: Efecto Visual (`effects/`)

Este componente se clasifica como efecto porque:

- Es un efecto visual puro usando WebGL/Three.js
- No acepta children (es decorativo/background)
- Implementación muy específica con shaders GLSL
- Similar a otros efectos como ScrollFloat
- No es reutilizable como componente UI genérico

## Uso Básico

```tsx
import { LaserFlow } from "@/components/effects";

export default function HeroSection() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <LaserFlow />
      <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>{/* Tu contenido aquí */}</div>
    </div>
  );
}
```

## Props

| Prop                   | Tipo            | Default            | Descripción                    |
| ---------------------- | --------------- | ------------------ | ------------------------------ |
| `className`            | `string`        | `""`               | Clases CSS adicionales         |
| `style`                | `CSSProperties` | `{}`               | Estilos inline                 |
| `wispDensity`          | `number`        | `1`                | Densidad de wisps (0-2)        |
| `dpr`                  | `number`        | `devicePixelRatio` | Device pixel ratio (max 2)     |
| `mouseSmoothTime`      | `number`        | `0.0`              | Suavizado del mouse (segundos) |
| `mouseTiltStrength`    | `number`        | `0.01`             | Intensidad del tilt con mouse  |
| `horizontalBeamOffset` | `number`        | `0.1`              | Offset horizontal del haz      |
| `verticalBeamOffset`   | `number`        | `0.0`              | Offset vertical del haz        |
| `flowSpeed`            | `number`        | `0.35`             | Velocidad del flow animation   |
| `verticalSizing`       | `number`        | `2.0`              | Escala vertical del haz        |
| `horizontalSizing`     | `number`        | `0.5`              | Escala horizontal del haz      |
| `fogIntensity`         | `number`        | `0.45`             | Intensidad de la niebla        |
| `fogScale`             | `number`        | `0.3`              | Escala del ruido de niebla     |
| `wispSpeed`            | `number`        | `15.0`             | Velocidad de los wisps         |
| `wispIntensity`        | `number`        | `5.0`              | Intensidad de los wisps        |
| `flowStrength`         | `number`        | `0.25`             | Fuerza de la animación de flow |
| `decay`                | `number`        | `1.1`              | Decay del haz                  |
| `falloffStart`         | `number`        | `1.2`              | Inicio del falloff             |
| `fogFallSpeed`         | `number`        | `0.6`              | Velocidad de caída de niebla   |
| `color`                | `string`        | `"#FF79C6"`        | Color del haz (hex)            |

## Ejemplos

### Hero Section - ValkiriApps Theme

```tsx
export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "#000",
        overflow: "hidden",
      }}
    >
      <LaserFlow color="#00BFFF" fogIntensity={0.5} wispDensity={1.2} verticalSizing={2.5} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <h1 style={{ color: "#fff", fontSize: "4rem" }}>ValkiriApps</h1>
      </div>
    </section>
  );
}
```

### Purple Laser (Default)

```tsx
<div style={{ position: "relative", height: "100vh" }}>
  <LaserFlow color="#FF79C6" />
</div>
```

### Cyan Electric Theme

```tsx
<LaserFlow color="#00BFFF" fogIntensity={0.6} wispIntensity={6.0} flowStrength={0.3} />
```

### Green Matrix Style

```tsx
<LaserFlow color="#00FF41" fogIntensity={0.4} wispDensity={0.8} flowSpeed={0.5} />
```

### Red Alert Theme

```tsx
<LaserFlow
  color="#FF0000"
  fogIntensity={0.7}
  wispDensity={1.5}
  flowStrength={0.4}
  wispSpeed={20.0}
/>
```

### Subtle Background

```tsx
<LaserFlow
  color="#4FC2D1"
  fogIntensity={0.3}
  wispDensity={0.5}
  wispIntensity={3.0}
  verticalSizing={1.5}
/>
```

### Intense Laser Beam

```tsx
<LaserFlow
  color="#FF00FF"
  fogIntensity={0.8}
  wispDensity={2.0}
  wispSpeed={25.0}
  flowStrength={0.5}
  verticalSizing={3.0}
/>
```

### Horizontal Offset

```tsx
<LaserFlow horizontalBeamOffset={0.3} verticalBeamOffset={0.1} color="#00D9FF" />
```

### Slow Dreamy Effect

```tsx
<LaserFlow
  color="#9D4EDD"
  flowSpeed={0.2}
  wispSpeed={8.0}
  fogFallSpeed={0.3}
  mouseSmoothTime={0.5}
/>
```

### Fast Dynamic Effect

```tsx
<LaserFlow color="#FF006E" flowSpeed={0.6} wispSpeed={30.0} fogFallSpeed={1.0} wispDensity={1.8} />
```

### Mouse Interactive

```tsx
<LaserFlow color="#06FFA5" mouseSmoothTime={0.3} mouseTiltStrength={0.05} fogIntensity={0.5} />
```

### Wide Beam

```tsx
<LaserFlow color="#FFD60A" horizontalSizing={1.0} verticalSizing={2.0} fogIntensity={0.6} />
```

### Narrow Focused Beam

```tsx
<LaserFlow color="#FF5400" horizontalSizing={0.3} verticalSizing={1.5} wispDensity={0.7} />
```

### Custom DPR (Performance)

```tsx
// Force lower resolution for better performance
<LaserFlow
  color="#00F5FF"
  dpr={1}
/>

// Force higher quality (if performance allows)
<LaserFlow
  color="#00F5FF"
  dpr={2}
/>
```

### Multiple Layers

```tsx
<div style={{ position: "relative", height: "100vh" }}>
  {/* Background layer */}
  <div style={{ position: "absolute", inset: 0, opacity: 0.3 }}>
    <LaserFlow color="#00BFFF" verticalSizing={3.0} />
  </div>

  {/* Foreground layer */}
  <div style={{ position: "absolute", inset: 0 }}>
    <LaserFlow color="#FF79C6" verticalSizing={1.5} horizontalBeamOffset={0.2} />
  </div>

  {/* Content */}
  <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>
    <h1>Layered Effects</h1>
  </div>
</div>
```

### With Gradient Overlay

```tsx
<div style={{ position: "relative", height: "100vh" }}>
  <LaserFlow color="#00BFFF" />

  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)",
      pointerEvents: "none",
    }}
  />

  <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>{/* Content */}</div>
</div>
```

## Casos de Uso

- **Hero Sections**: Background dramático para secciones principales
- **Landing Pages**: Efecto visual de impacto
- **Gaming Websites**: Estética futurista/cyberpunk
- **Tech Companies**: Demostración de capacidad técnica
- **Event Pages**: Background dinámico para eventos
- **Product Showcases**: Ambiente tecnológico
- **Portfolio**: Background único y memorable
- **Loading Screens**: Animación durante cargas

## Performance

### Optimizaciones Incluidas

1. **Adaptive DPR**: Ajusta automáticamente la resolución según el FPS
   - Si FPS < 50: reduce DPR gradualmente
   - Si FPS > 58: aumenta DPR hasta el máximo
   - Mínimo DPR: 0.6

2. **Intersection Observer**: Pausa cuando no es visible

3. **Visibility API**: Pausa cuando la pestaña está oculta

4. **WebGL Context Recovery**: Maneja context loss/restore

5. **RequestAnimationFrame**: Animación optimizada

6. **No Antialiasing**: Deshabilitado para mejor performance

7. **Minimal Geometry**: Solo 3 vértices (fullscreen triangle)

### Tips de Performance

```tsx
// Mejor performance
<LaserFlow
  dpr={1}
  wispDensity={0.5}
  fogIntensity={0.3}
/>

// Mejor calidad (requiere GPU potente)
<LaserFlow
  dpr={2}
  wispDensity={2.0}
  fogIntensity={0.8}
/>
```

## Shaders GLSL

El componente usa shaders personalizados:

### Vertex Shader

- Simple fullscreen triangle
- Sin transformaciones complejas

### Fragment Shader

- Beam principal con forma de arco
- Wisps animados (micro-streaks)
- Niebla volumétrica con FBM
- Mouse tracking con tilt
- Dithering para gradientes suaves
- Gamma correction (sRGB)

### Técnicas Usadas

1. **FBM (Fractional Brownian Motion)**: Ruido procedural para niebla
2. **Signed Distance Fields**: Para el haz láser
3. **Falloff Shaping**: Decay exponencial
4. **Hash Functions**: Ruido pseudo-aleatorio
5. **Smooth Interpolation**: Para transiciones suaves

## Browser Support

- **Chrome/Edge**: ✅ Excelente
- **Firefox**: ✅ Muy bueno
- **Safari**: ✅ Bueno (con ajustes automáticos)
- **Opera**: ✅ Muy bueno

**Requisitos**:

- WebGL 1.0
- Three.js
- ES6+ JavaScript

## Troubleshooting

### El efecto no se ve

1. Verifica que el contenedor tenga dimensiones definidas
2. Asegúrate de que WebGL esté habilitado en el navegador
3. Comprueba la consola por errores de WebGL
4. Verifica que Three.js esté instalado

```tsx
// ❌ No funcionará (sin altura)
<div>
  <LaserFlow />
</div>

// ✅ Correcto
<div style={{ height: "100vh" }}>
  <LaserFlow />
</div>
```

### Performance bajo

```tsx
// Reduce la carga:
<LaserFlow
  dpr={1} // Fuerza DPR bajo
  wispDensity={0.5} // Menos wisps
  fogIntensity={0.3} // Menos niebla
/>
```

### Color no se ve bien

```tsx
// Usa colores brillantes en formato hex:
<LaserFlow color="#00FFFF" />  // Cyan brillante
<LaserFlow color="#FF00FF" />  // Magenta brillante
```

### Mouse tracking no funciona

El mouse tracking solo funciona cuando el cursor está sobre el canvas. Asegúrate de que el canvas tenga `pointer-events` activos.

## Integración con Otros Componentes

### Con ScrollFloat

```tsx
<div style={{ position: "relative", minHeight: "100vh" }}>
  <LaserFlow color="#00BFFF" />

  <div style={{ position: "relative", zIndex: 10, padding: "4rem" }}>
    <ScrollFloat tag="h1">ValkiriApps</ScrollFloat>
  </div>
</div>
```

### Con GradientText

```tsx
<div style={{ position: "relative", height: "100vh", background: "#000" }}>
  <LaserFlow color="#4FC2D1" />

  <div
    style={{
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10,
    }}
  >
    <GradientText tag="h1" colors={["#00BFFF", "#4FC2D1"]}>
      Digital Innovation
    </GradientText>
  </div>
</div>
```

### Con TrueFocus

```tsx
<section style={{ position: "relative", minHeight: "100vh" }}>
  <LaserFlow color="#FF79C6" fogIntensity={0.4} />

  <div
    style={{
      position: "relative",
      zIndex: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
    }}
  >
    <TrueFocus
      sentence="Innovation Technology Excellence"
      borderColor="#FF79C6"
      glowColor="#FF79C6"
    />
  </div>
</section>
```

## Technical Details

### WebGL Configuration

```typescript
const renderer = new THREE.WebGLRenderer({
  antialias: false, // Mejor performance
  alpha: false, // No transparency
  depth: false, // No depth buffer
  stencil: false, // No stencil buffer
  powerPreference: "high-performance",
  premultipliedAlpha: false,
  preserveDrawingBuffer: false,
  failIfMajorPerformanceCaveat: false,
  logarithmicDepthBuffer: false,
});
```

### Adaptive DPR Logic

```typescript
// Check FPS cada 750ms
// Si FPS < 50: reduce DPR × 0.9
// Si FPS > 58: aumenta DPR × 1.05
// Clamp entre 0.6 y baseDpr
```

### Mouse Smoothing

```typescript
// Exponential smoothing
const alpha = 1 - Math.exp(-deltaTime / tau);
mouseSmooth.lerp(mouseTarget, alpha);
```

## Accesibilidad

- El efecto es puramente decorativo
- No interfiere con screen readers
- No afecta la navegación por teclado
- El contenido debe estar en capas superiores (z-index)
- Usa `aria-hidden="true"` si es necesario

```tsx
<div aria-hidden="true">
  <LaserFlow />
</div>
```

## Ejemplo Completo - Landing Page

```tsx
export default function LandingPage() {
  return (
    <main style={{ background: "#000" }}>
      {/* Hero con LaserFlow */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Effect */}
        <LaserFlow
          color="#00BFFF"
          fogIntensity={0.5}
          wispDensity={1.2}
          verticalSizing={2.5}
          flowSpeed={0.35}
        />

        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              color: "#fff",
              marginBottom: "1rem",
              fontWeight: 900,
            }}
          >
            ValkiriApps
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 3vw, 1.5rem)",
              color: "#4FC2D1",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Digital Solutions for the Future
          </p>
        </div>
      </section>

      {/* Más contenido */}
      <section
        style={{
          minHeight: "100vh",
          position: "relative",
          zIndex: 20,
          background: "#000",
          padding: "4rem 2rem",
        }}
      >
        {/* Tu contenido aquí */}
      </section>
    </main>
  );
}
```

## Color Palettes

### ValkiriApps Official

```tsx
<LaserFlow color="#00BFFF" />  // Electric Blue
<LaserFlow color="#4FC2D1" />  // Cyan
```

### Cyberpunk

```tsx
<LaserFlow color="#FF0080" />  // Hot Pink
<LaserFlow color="#00F5FF" />  // Electric Cyan
<LaserFlow color="#FFFF00" />  // Neon Yellow
```

### Sci-Fi

```tsx
<LaserFlow color="#00FF41" />  // Matrix Green
<LaserFlow color="#0088FF" />  // Tech Blue
<LaserFlow color="#FF0055" />  // Danger Red
```

### Gaming

```tsx
<LaserFlow color="#FF6B00" />  // Energy Orange
<LaserFlow color="#9D4EDD" />  // Purple Power
<LaserFlow color="#06FFA5" />  // Mint Energy
```

## Licencia

MIT - ValkiriApps
