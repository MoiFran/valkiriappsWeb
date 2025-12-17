# SplashCursor

Efecto de cursor con simulación de fluidos usando WebGL y shaders GLSL. Implementa las ecuaciones de Navier-Stokes para una simulación física realista que responde al movimiento del mouse/touch.

## Características

- Simulación de fluidos WebGL basada en Navier-Stokes
- 7+ shaders GLSL personalizados (advection, divergence, curl, pressure, etc.)
- Responde al movimiento del mouse y touch
- Colores aleatorios generados con HSV
- Double buffering con FBOs para performance óptima
- Soporte para WebGL 1.0 y 2.0
- Splat en click con explosión de color
- Completamente configurable (14+ props)
- Fixed overlay fullscreen con pointer-events-none
- Adaptive resolution support

## Clasificación

**Tipo**: Efecto Visual (`effects/`)

Este componente se clasifica como efecto porque:

- Es un efecto visual puro de simulación de fluidos
- No acepta children (es decorativo/overlay)
- Usa WebGL con múltiples shaders GLSL complejos
- Cubre toda la pantalla como overlay global
- Implementa física de fluidos (Navier-Stokes)
- No es reutilizable como componente UI genérico
- Similar a LaserFlow en complejidad

## Uso Básico

```tsx
import { SplashCursor } from "@/components/effects";

export default function App() {
  return (
    <div>
      <SplashCursor />
      {/* Tu aplicación aquí */}
    </div>
  );
}
```

## Props

| Prop                   | Tipo       | Default             | Descripción                          |
| ---------------------- | ---------- | ------------------- | ------------------------------------ |
| `SIM_RESOLUTION`       | `number`   | `128`               | Resolución de la simulación          |
| `DYE_RESOLUTION`       | `number`   | `1440`              | Resolución del color/dye             |
| `CAPTURE_RESOLUTION`   | `number`   | `512`               | Resolución de captura                |
| `DENSITY_DISSIPATION`  | `number`   | `3.5`               | Velocidad de disipación de densidad  |
| `VELOCITY_DISSIPATION` | `number`   | `2`                 | Velocidad de disipación de velocidad |
| `PRESSURE`             | `number`   | `0.1`               | Presión inicial                      |
| `PRESSURE_ITERATIONS`  | `number`   | `20`                | Iteraciones del solver de presión    |
| `CURL`                 | `number`   | `3`                 | Fuerza del curl/vorticity            |
| `SPLAT_RADIUS`         | `number`   | `0.2`               | Radio del splat (0-1)                |
| `SPLAT_FORCE`          | `number`   | `6000`              | Fuerza del splat                     |
| `SHADING`              | `boolean`  | `true`              | Activar/desactivar shading           |
| `COLOR_UPDATE_SPEED`   | `number`   | `10`                | Velocidad de cambio de color         |
| `BACK_COLOR`           | `ColorRGB` | `{r:0.5, g:0, b:0}` | Color de fondo                       |
| `TRANSPARENT`          | `boolean`  | `true`              | Transparencia del canvas             |

## Ejemplos

### Default (Básico)

```tsx
<SplashCursor />
```

### Splash Suave

```tsx
<SplashCursor
  DENSITY_DISSIPATION={5}
  VELOCITY_DISSIPATION={3}
  SPLAT_RADIUS={0.15}
  SPLAT_FORCE={4000}
/>
```

### Splash Intenso

```tsx
<SplashCursor
  DENSITY_DISSIPATION={1.5}
  VELOCITY_DISSIPATION={1}
  SPLAT_RADIUS={0.3}
  SPLAT_FORCE={9000}
  CURL={5}
/>
```

### Colores Rápidos

```tsx
<SplashCursor COLOR_UPDATE_SPEED={20} SPLAT_FORCE={7000} />
```

### Colores Lentos

```tsx
<SplashCursor COLOR_UPDATE_SPEED={5} DENSITY_DISSIPATION={2} />
```

### High Quality

```tsx
<SplashCursor SIM_RESOLUTION={256} DYE_RESOLUTION={2048} PRESSURE_ITERATIONS={30} SHADING={true} />
```

### Performance Mode

```tsx
<SplashCursor SIM_RESOLUTION={64} DYE_RESOLUTION={512} PRESSURE_ITERATIONS={10} SHADING={false} />
```

### Vorticity Fuerte

```tsx
<SplashCursor CURL={8} VELOCITY_DISSIPATION={1} SPLAT_FORCE={8000} />
```

### Splash Grande

```tsx
<SplashCursor SPLAT_RADIUS={0.5} SPLAT_FORCE={10000} DENSITY_DISSIPATION={2} />
```

### Splash Pequeño y Preciso

```tsx
<SplashCursor SPLAT_RADIUS={0.1} SPLAT_FORCE={3000} CURL={4} />
```

### Fluido Denso (Viscoso)

```tsx
<SplashCursor DENSITY_DISSIPATION={1} VELOCITY_DISSIPATION={0.5} PRESSURE={0.2} />
```

### Fluido Ligero (Gas)

```tsx
<SplashCursor DENSITY_DISSIPATION={8} VELOCITY_DISSIPATION={5} PRESSURE={0.05} />
```

### Sin Shading (Más Performance)

```tsx
<SplashCursor SHADING={false} SIM_RESOLUTION={96} />
```

### Explosiones en Click

```tsx
// El componente ya tiene splat en click por defecto
// Ajusta la fuerza:
<SplashCursor SPLAT_FORCE={15000} SPLAT_RADIUS={0.4} />
```

### Trailing Effect (Estela larga)

```tsx
<SplashCursor DENSITY_DISSIPATION={1} VELOCITY_DISSIPATION={0.3} CURL={6} />
```

### Trailing Effect (Estela corta)

```tsx
<SplashCursor DENSITY_DISSIPATION={10} VELOCITY_DISSIPATION={8} />
```

## Casos de Uso

- **Landing Pages**: Background interactivo único
- **Portfolio**: Demostrar habilidades técnicas
- **Arte Generativo**: Exploración creativa
- **Gaming Websites**: Estética interactiva
- **Tech Companies**: Showcase de capacidad técnica
- **Product Launches**: Experiencia memorable
- **Interactive Installations**: Instalaciones digitales
- **Hero Sections**: Background dinámico

## Física de Fluidos

### Navier-Stokes Implementation

El componente implementa las ecuaciones de Navier-Stokes simplificadas:

1. **Advection**: Transporte del fluido y color por el campo de velocidad
2. **Divergence**: Cálculo de la divergencia del campo de velocidad
3. **Pressure**: Solver iterativo de presión (Jacobi method)
4. **Gradient Subtraction**: Proyección del campo de velocidad
5. **Vorticity Confinement**: Añade curl/vorticity para vórtices realistas

### Shaders GLSL

#### 1. Base Vertex Shader

- Setup de coordenadas UV
- Cálculo de coordenadas vecinas (L, R, T, B)

#### 2. Advection Shader

- Semi-Lagrangian advection
- Bilinear interpolation (si no hay soporte linear)
- Dissipation de velocidad y densidad

#### 3. Divergence Shader

- Calcula divergencia del campo de velocidad
- Boundary conditions

#### 4. Curl Shader

- Calcula vorticity del fluido

#### 5. Vorticity Shader

- Vorticity confinement
- Añade fuerzas para mantener vórtices

#### 6. Pressure Shader

- Solver de Poisson iterativo
- Jacobi iterations

#### 7. Gradient Subtract Shader

- Proyección del campo de velocidad
- Hace el campo incompressible

#### 8. Splat Shader

- Añade color y velocidad en posición del cursor
- Gaussian splat con radio configurable

#### 9. Display Shader

- Rendering final con opcional shading
- Normal mapping para efectos 3D

## Double Buffering (FBOs)

El componente usa double buffering para todas las texturas:

```typescript
interface DoubleFBO {
  read: FBO; // Textura de lectura
  write: FBO; // Textura de escritura
  swap(); // Intercambia read/write
}
```

### FBOs utilizados:

- `dye`: Color del fluido (RGBA)
- `velocity`: Campo de velocidad (RG)
- `pressure`: Campo de presión (R)
- `divergence`: Divergencia del campo (R)
- `curl`: Vorticity (R)

## Performance

### Optimizaciones

1. **Resolution Scaling**: Ajusta SIM_RESOLUTION y DYE_RESOLUTION
2. **Pressure Iterations**: Menos iteraciones = más rápido
3. **Shading**: Desactivar para mejor performance
4. **Device Pixel Ratio**: Scaling automático por DPR

### Configuración Recomendada por Device

```tsx
// Desktop High-End
<SplashCursor
  SIM_RESOLUTION={256}
  DYE_RESOLUTION={2048}
  PRESSURE_ITERATIONS={30}
/>

// Desktop Mid-Range
<SplashCursor
  SIM_RESOLUTION={128}
  DYE_RESOLUTION={1440}
  PRESSURE_ITERATIONS={20}
/>

// Mobile
<SplashCursor
  SIM_RESOLUTION={64}
  DYE_RESOLUTION={512}
  PRESSURE_ITERATIONS={10}
  SHADING={false}
/>
```

### Performance Tips

```tsx
// Más rápido:
- Reduce SIM_RESOLUTION (64, 96)
- Reduce DYE_RESOLUTION (512, 768)
- Reduce PRESSURE_ITERATIONS (10, 15)
- Desactiva SHADING

// Mejor calidad:
- Aumenta SIM_RESOLUTION (256, 512)
- Aumenta DYE_RESOLUTION (2048, 4096)
- Aumenta PRESSURE_ITERATIONS (30, 50)
- Activa SHADING
```

## Color System

Los colores se generan con HSV y se convierten a RGB:

```typescript
function generateColor(): ColorRGB {
  const c = HSVtoRGB(Math.random(), 1.0, 1.0);
  c.r *= 0.15; // Ajusta intensidad
  c.g *= 0.15;
  c.b *= 0.15;
  return c;
}
```

### Modificar Sistema de Color

Para colores específicos, puedes modificar `generateColor()`:

```tsx
// Ejemplo: Solo tonos azules/cyans
function generateColor(): ColorRGB {
  const h = 0.5 + Math.random() * 0.2; // 0.5-0.7 = cyan-blue range
  const c = HSVtoRGB(h, 1.0, 1.0);
  c.r *= 0.15;
  c.g *= 0.15;
  c.b *= 0.15;
  return c;
}
```

## Browser Support

- **Chrome/Edge**: ✅ Excelente (WebGL 2.0)
- **Firefox**: ✅ Muy bueno (WebGL 2.0)
- **Safari**: ✅ Bueno (WebGL 1.0 con fallbacks)
- **Opera**: ✅ Muy bueno (WebGL 2.0)
- **Mobile Chrome**: ✅ Bueno (con ajustes de performance)
- **Mobile Safari**: ✅ Aceptable (WebGL 1.0)

**Requisitos**:

- WebGL 1.0 (mínimo)
- WebGL 2.0 (recomendado)
- Half-float texture support
- ES6+ JavaScript

## Troubleshooting

### El efecto no se ve

1. Verifica que WebGL esté habilitado
2. Comprueba la consola por errores de WebGL
3. Prueba con resoluciones más bajas
4. Verifica soporte de half-float textures

```tsx
// Prueba con configuración conservadora:
<SplashCursor SIM_RESOLUTION={64} DYE_RESOLUTION={512} SHADING={false} />
```

### Performance bajo (lag)

```tsx
// Reduce todas las resoluciones:
<SplashCursor SIM_RESOLUTION={64} DYE_RESOLUTION={512} PRESSURE_ITERATIONS={10} SHADING={false} />
```

### Colores muy brillantes/oscuros

Los colores se generan con intensidad 0.15 por defecto. Para ajustar, modifica el componente o los valores de:

```tsx
<SplashCursor
  DENSITY_DISSIPATION={2} // Más alto = colores se desvanecen más rápido
/>
```

### El fluido se mueve muy rápido

```tsx
<SplashCursor
  VELOCITY_DISSIPATION={5} // Más alto = movimiento más lento
  SPLAT_FORCE={3000} // Reduce la fuerza
/>
```

### El fluido se mueve muy lento

```tsx
<SplashCursor
  VELOCITY_DISSIPATION={0.5} // Más bajo = movimiento más rápido
  SPLAT_FORCE={10000} // Aumenta la fuerza
/>
```

## Integración con Otros Componentes

### Con Landing Page

```tsx
export default function LandingPage() {
  return (
    <>
      <SplashCursor />
      <main style={{ position: "relative", zIndex: 1 }}>
        <section>
          <h1>Welcome</h1>
        </section>
      </main>
    </>
  );
}
```

### Con LaserFlow (Múltiples efectos)

```tsx
export default function HomePage() {
  return (
    <div style={{ position: "relative" }}>
      {/* Background laser */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <LaserFlow color="#00BFFF" fogIntensity={0.3} />
      </div>

      {/* Cursor splash overlay */}
      <SplashCursor />

      {/* Content */}
      <main style={{ position: "relative", zIndex: 1 }}>{/* Tu contenido */}</main>
    </div>
  );
}
```

### Con ScrollFloat

```tsx
<div>
  <SplashCursor DENSITY_DISSIPATION={4} />

  <section style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
    <ScrollFloat tag="h1">Interactive Experience</ScrollFloat>
  </section>
</div>
```

### Con ElectricBorder

```tsx
<div style={{ position: "relative", zIndex: 1, padding: "4rem" }}>
  <SplashCursor />

  <ElectricBorder color="#00BFFF">
    <div style={{ padding: "2rem" }}>
      <h2>Premium Feature</h2>
      <p>Hover around for fluid effects!</p>
    </div>
  </ElectricBorder>
</div>
```

## Z-Index Management

**Importante**: SplashCursor tiene `z-index: 50` y `pointer-events: none`.

```tsx
// Estructura de capas recomendada:
z-index: 0   -> Background effects (LaserFlow, etc.)
z-index: 1-49 -> Tu contenido
z-index: 50  -> SplashCursor (overlay)
z-index: 51+ -> Modals, tooltips, etc.
```

## Accesibilidad

- El efecto es puramente decorativo
- `pointer-events: none` no interfiere con interacciones
- Compatible con navegación por teclado
- No afecta a screen readers
- Considerar reducir efectos para `prefers-reduced-motion`

### Respetando prefers-reduced-motion

```tsx
"use client";
import { useState, useEffect } from "react";
import { SplashCursor } from "@/components/effects";

export default function AccessibleSplash() {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setShouldRender(!mediaQuery.matches);
  }, []);

  if (!shouldRender) return null;

  return <SplashCursor />;
}
```

## Technical Deep Dive

### WebGL Context Setup

```typescript
const params = {
  alpha: true, // Transparencia
  depth: false, // No depth buffer (2D)
  stencil: false, // No stencil buffer
  antialias: false, // Mejor performance
  preserveDrawingBuffer: false,
};
```

### Texture Formats

- **WebGL 2.0**: RGBA16F, RG16F, R16F
- **WebGL 1.0**: RGBA (con half-float extension)
- Fallback automático si no hay soporte

### Frame Loop

```typescript
1. calcDeltaTime()
2. resizeCanvas() si cambió tamaño
3. updateColors() - cambio gradual de color
4. applyInputs() - procesa movimiento del mouse
5. step(dt) - simulación de fluidos
   - curl calculation
   - vorticity confinement
   - divergence calculation
   - pressure solve (iterativo)
   - gradient subtraction
   - advection (velocity + dye)
6. render() - dibuja resultado final
7. requestAnimationFrame() - siguiente frame
```

## Ejemplo Completo - Portfolio

```tsx
"use client";
import { SplashCursor } from "@/components/effects";
import { ScrollFloat } from "@/components/effects";

export default function Portfolio() {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      {/* Fluid cursor effect */}
      <SplashCursor
        DENSITY_DISSIPATION={3}
        VELOCITY_DISSIPATION={2}
        SPLAT_RADIUS={0.25}
        SPLAT_FORCE={7000}
        COLOR_UPDATE_SPEED={12}
      />

      {/* Content */}
      <main style={{ position: "relative", zIndex: 1 }}>
        {/* Hero */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              Creative Developer
            </h1>
            <p
              style={{
                fontSize: "1.5rem",
                color: "#4FC2D1",
              }}
            >
              Move your cursor to interact
            </p>
          </div>
        </section>

        {/* Projects */}
        <section
          style={{
            minHeight: "100vh",
            padding: "4rem 2rem",
          }}
        >
          <ScrollFloat tag="h2">Featured Projects</ScrollFloat>
          {/* Your projects */}
        </section>
      </main>
    </div>
  );
}
```

## Configuraciones Preset

### Preset: Subtle

```tsx
<SplashCursor
  DENSITY_DISSIPATION={5}
  VELOCITY_DISSIPATION={4}
  SPLAT_RADIUS={0.15}
  SPLAT_FORCE={4000}
  CURL={2}
/>
```

### Preset: Intense

```tsx
<SplashCursor
  DENSITY_DISSIPATION={1.5}
  VELOCITY_DISSIPATION={0.8}
  SPLAT_RADIUS={0.35}
  SPLAT_FORCE={10000}
  CURL={6}
/>
```

### Preset: Ethereal

```tsx
<SplashCursor
  DENSITY_DISSIPATION={8}
  VELOCITY_DISSIPATION={6}
  SPLAT_RADIUS={0.4}
  SPLAT_FORCE={5000}
  COLOR_UPDATE_SPEED={5}
/>
```

### Preset: Explosive

```tsx
<SplashCursor
  DENSITY_DISSIPATION={2}
  VELOCITY_DISSIPATION={1}
  SPLAT_RADIUS={0.5}
  SPLAT_FORCE={15000}
  CURL={8}
  PRESSURE={0.15}
/>
```

## Licencia

MIT - ValkiriApps
