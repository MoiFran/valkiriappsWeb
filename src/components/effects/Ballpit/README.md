# Ballpit

Interactive 3D physics simulation of bouncing spheres using Three.js with full collision detection, gravity simulation, and cursor interaction. Inspired by Kevin Levron's work.

## Características

- **Three.js 3D Rendering**: Full 3D scene with PerspectiveCamera
- **Physics Simulation**: Gravity, friction, collision detection, wall bouncing
- **200 Animated Spheres** (default): Instanced rendering for performance
- **Cursor Following**: Interactive sphere that follows mouse/touch
- **Collision Detection**: Sphere-to-sphere and sphere-to-wall collisions
- **Custom Material**: MeshPhysicalMaterial with subsurface scattering
- **ACES Filmic Tone Mapping**: Professional color grading
- **Environment Mapping**: RoomEnvironment with PMREM
- **Touch Support**: Full mobile touch interaction
- **Auto Pause**: Pauses when off-screen or tab hidden
- **Fully Customizable**: 10+ props for complete control

## Clasificación

**Tipo**: Efecto (`effects/`)

Este componente se clasifica como efecto porque:

- Three.js 3D rendering con física compleja
- No acepta children (genera contenido 3D propio)
- Propósito decorativo/interactivo
- Canvas 3D con simulación física
- Similar a otros efectos WebGL pero usa Three.js
- Background/overlay effect para secciones

## Uso Básico

```tsx
import { Ballpit } from "@/components/effects";

export default function HeroSection() {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "500px",
        maxHeight: "500px",
        width: "100%",
      }}
    >
      <Ballpit />
    </div>
  );
}
```

## Props

| Prop             | Tipo       | Default     | Descripción                         |
| ---------------- | ---------- | ----------- | ----------------------------------- |
| `count`          | `number`   | `200`       | Número de esferas                   |
| `gravity`        | `number`   | `0.5`       | Fuerza de gravedad                  |
| `friction`       | `number`   | `0.9975`    | Coeficiente de fricción (0-1)       |
| `wallBounce`     | `number`   | `0.95`      | Rebote en paredes (0-1)             |
| `followCursor`   | `boolean`  | `true`      | Esfera sigue el cursor              |
| `colors`         | `number[]` | `[0, 0, 0]` | Array de colores hex para gradiente |
| `minSize`        | `number`   | `0.5`       | Tamaño mínimo de esferas            |
| `maxSize`        | `number`   | `1`         | Tamaño máximo de esferas            |
| `materialParams` | `object`   | Ver abajo   | Parámetros de material              |
| `className`      | `string`   | `""`        | Clase CSS adicional                 |

### Material Params

```typescript
{
  metalness: 0.5,
  roughness: 0.5,
  clearcoat: 1,
  clearcoatRoughness: 0.15
}
```

## Ejemplos

### Default (Monochrome)

```tsx
<Ballpit />
```

### Rainbow Colors

```tsx
<Ballpit colors={[0xff0000, 0xff7f00, 0xffff00, 0x00ff00, 0x0000ff, 0x4b0082, 0x9400d3]} />
```

### Blue to Purple Gradient

```tsx
<Ballpit colors={[0x0000ff, 0x8b00ff, 0xff00ff]} />
```

### Cyan to Pink (ValkiriApps)

```tsx
<Ballpit colors={[0x00bfff, 0xff79c6]} />
```

### No Gravity (Float Mode)

```tsx
<Ballpit gravity={0} />
```

### High Gravity

```tsx
<Ballpit gravity={2} />
```

### Low Friction (Slippery)

```tsx
<Ballpit friction={0.99} />
```

### High Friction (Sticky)

```tsx
<Ballpit friction={0.85} />
```

### Bouncy Walls

```tsx
<Ballpit wallBounce={1.2} />
```

### Damped Walls

```tsx
<Ballpit wallBounce={0.5} />
```

### More Spheres

```tsx
<Ballpit count={400} />
```

### Fewer Spheres

```tsx
<Ballpit count={50} />
```

### Large Spheres

```tsx
<Ballpit minSize={1} maxSize={2} />
```

### Small Spheres

```tsx
<Ballpit minSize={0.2} maxSize={0.5} />
```

### Metallic Look

```tsx
<Ballpit
  materialParams={{
    metalness: 1,
    roughness: 0.2,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  }}
/>
```

### Matte Look

```tsx
<Ballpit
  materialParams={{
    metalness: 0,
    roughness: 0.9,
    clearcoat: 0,
    clearcoatRoughness: 0.5,
  }}
/>
```

### No Cursor Following

```tsx
<Ballpit followCursor={false} />
```

### Combined Customization

```tsx
<Ballpit
  count={300}
  gravity={1}
  friction={0.995}
  wallBounce={0.9}
  colors={[0x00bfff, 0x8b00ff, 0xff00ff]}
  minSize={0.3}
  maxSize={1.5}
  followCursor={true}
/>
```

### Hero Background

```tsx
export default function Hero() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Ballpit background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.7,
          filter: "blur(1px)",
        }}
      >
        <Ballpit colors={[0x0000ff, 0x00ffff, 0xff00ff]} count={250} gravity={0.7} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, padding: "4rem" }}>
        <h1>Interactive Experience</h1>
        <p>Move your cursor to interact</p>
      </div>
    </div>
  );
}
```

### Section Overlay

```tsx
<section
  style={{
    position: "relative",
    minHeight: "600px",
    overflow: "hidden",
    background: "#000",
  }}
>
  <div style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
    <Ballpit colors={[0xff0080, 0x00ffff]} count={150} />
  </div>

  <div style={{ position: "relative", zIndex: 10, padding: "4rem" }}>
    <h2>Features Section</h2>
  </div>
</section>
```

### Fullscreen Interactive

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
  <Ballpit colors={[0x00bfff, 0xff79c6, 0x06ffa5]} count={300} gravity={0.5} followCursor={true} />
</div>
```

### Card Background

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
  <div style={{ position: "absolute", inset: 0, opacity: 0.6 }}>
    <Ballpit count={100} colors={[0x8b00ff, 0xff00ff]} minSize={0.3} maxSize={0.8} />
  </div>
  <div style={{ position: "relative", zIndex: 10, padding: "2rem" }}>
    <h3>Interactive Card</h3>
  </div>
</div>
```

### Fixed Container

```tsx
<div
  style={{
    width: "100%",
    height: "500px",
    position: "relative",
    overflow: "hidden",
  }}
>
  <Ballpit count={200} gravity={0.7} friction={0.98} wallBounce={0.95} />
</div>
```

## Como Funciona

### Architecture

El componente Ballpit tiene una arquitectura compleja con 4 clases principales:

#### 1. X Class - Three.js Manager

Maneja todo el ciclo de vida de Three.js:

- Scene, Camera, Renderer setup
- Animation loop con requestAnimationFrame
- Resize observer para responsive behavior
- Intersection observer para auto-pause
- Visibility API para pause en tab hidden

```typescript
const three = new X({
  canvas: canvasElement,
  size: "parent",
  rendererOptions: { antialias: true, alpha: true },
});
```

#### 2. W Class - Physics Engine

Simula física completa:

- **Gravity**: Fuerza gravitacional aplicada cada frame
- **Friction**: Reducción de velocidad por fricción del aire
- **Collisions**: Detección y resolución de colisiones esfera-esfera
- **Wall Bouncing**: Rebote en los límites del contenedor
- **Velocity Clamping**: Límite máximo de velocidad

```typescript
const physics = new W({
  count: 200,
  gravity: 0.5,
  friction: 0.9975,
  wallBounce: 0.95,
  maxVelocity: 0.15,
});
```

#### 3. Y Class - Custom Material

Material físico personalizado con subsurface scattering:

- Extiende `MeshPhysicalMaterial` de Three.js
- Agrega uniforms personalizados para thickness
- Modifica fragment shader para simular luz a través de superficie
- Clearcoat para reflejo brillante

```typescript
const material = new Y({
  envMap: environmentTexture,
  metalness: 0.5,
  roughness: 0.5,
  clearcoat: 1,
  clearcoatRoughness: 0.15,
});
```

#### 4. Z Class - Instanced Mesh

Renderiza eficientemente 200+ esferas:

- Usa `InstancedMesh` de Three.js
- Una geometría, un material, múltiples instancias
- Actualiza matrix de cada instancia cada frame
- Gradient de colores entre esferas
- AmbientLight y PointLight integrados

### Physics Loop

Cada frame ejecuta:

1. **Apply Forces**: Gravedad aplicada a velocidad
2. **Apply Friction**: Velocidad \* friction coefficient
3. **Update Positions**: Posición += velocidad
4. **Collision Detection**: Detecta overlap entre esferas
5. **Collision Resolution**: Separa esferas y ajusta velocidades
6. **Wall Bouncing**: Detecta límites y invierte velocidad
7. **Cursor Follow**: Primera esfera sigue intersección con plano 3D

### Collision Detection Algorithm

```typescript
for (sphere A in all spheres) {
  for (sphere B in remaining spheres) {
    distance = |posA - posB|
    if (distance < radiusA + radiusB) {
      // Collision detected
      overlap = (radiusA + radiusB) - distance
      correction = normalize(posB - posA) * overlap * 0.5

      // Separate spheres
      posA -= correction
      posB += correction

      // Adjust velocities
      velA -= correction * max(|velA|, 1)
      velB += correction * max(|velB|, 1)
    }
  }
}
```

### Raycasting for Cursor

```typescript
raycaster.setFromCamera(mouseNormalizedPosition, camera);
plane = new Plane(cameraDirection, 0);
intersectionPoint = raycaster.ray.intersectPlane(plane);
firstSphere.position.lerp(intersectionPoint, 0.1);
```

## Performance

### Optimizaciones Incluidas

1. **Instanced Rendering**: Una draw call para 200+ esferas
2. **Auto Pause**: Se detiene cuando no está visible
3. **IntersectionObserver**: Detecta visibilidad automáticamente
4. **Visibility API**: Pausa en tabs ocultos
5. **Hardware Acceleration**: Three.js usa WebGL/GPU
6. **Efficient Physics**: Optimized collision detection loop
7. **PMREM Environment**: Pre-filtered environment map
8. **Proper Cleanup**: Dispose de geometrías, materiales, texturas

### Performance Tips

```tsx
// Menos esferas para mejor performance
<Ballpit count={100} />

// Desactivar cursor following
<Ballpit followCursor={false} />

// Menor calidad de materiales
<Ballpit
  materialParams={{
    metalness: 0,
    roughness: 1,
    clearcoat: 0
  }}
/>
```

### Mobile Optimization

```tsx
"use client";
import { Ballpit } from "@/components/effects";
import { useEffect, useState } from "react";

export default function ResponsiveBallpit() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Ballpit count={isMobile ? 80 : 200} followCursor={!isMobile} />
    </div>
  );
}
```

## Casos de Uso

### 1. Hero Section Interactive Background

### 2. Product Showcase Overlay

### 3. Gaming Website Effect

### 4. Tech Demo Page

### 5. Loading Screen with Physics

### 6. Portfolio Unique Element

### 7. Event/Conference Page

### 8. Interactive Art Installation

## Browser Support

- **Chrome/Edge**: ✅ Excelente (WebGL 2.0)
- **Firefox**: ✅ Excelente (WebGL 2.0)
- **Safari**: ✅ Muy bueno (WebGL 2.0)
- **Opera**: ✅ Excelente (WebGL 2.0)
- **Mobile**: ⚠️ Performance variable (considerar menos esferas)

**Requisitos**:

- WebGL 2.0 support
- Three.js r150+
- GSAP 3+
- ES6+ JavaScript

## Troubleshooting

### Performance lento

```tsx
// Reduce sphere count
<Ballpit count={80} />

// Simplify material
<Ballpit
  materialParams={{
    metalness: 0,
    roughness: 1,
    clearcoat: 0
  }}
/>
```

### Las esferas atraviesan paredes

Esto puede ocurrir si:

- La velocidad es muy alta
- El deltaTime es muy grande (lag)
- El contenedor se redimensionó

```tsx
// Reduce velocity
<Ballpit wallBounce={0.5} friction={0.95} />
```

### El canvas no aparece

```tsx
// Asegúrate de que el contenedor tenga dimensiones
<div style={{ width: "100%", height: "500px", position: "relative" }}>
  <Ballpit />
</div>
```

### Touch no funciona en mobile

El componente ya incluye soporte touch. Si no funciona:

- Verifica que no haya `pointer-events: none` en el contenedor
- Asegúrate de que `followCursor={true}`

## Credits

Component inspired by Kevin Levron:
https://x.com/soju22/status/1858925191671271801

## Licencia

MIT - ValkiriApps
