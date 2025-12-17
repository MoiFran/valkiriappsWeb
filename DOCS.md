# Documentación de Componentes - ValkiriApps

## Tabla de Contenidos

- [Componentes UI Reutilizables](#componentes-ui-reutilizables)
- [Componentes de Layout](#componentes-de-layout)
- [Componentes de Sección](#componentes-de-sección)
- [Efectos Visuales](#efectos-visuales)
- [Hooks Personalizados](#hooks-personalizados)
- [Utilidades](#utilidades)

---

## Componentes UI Reutilizables

### ElectricBorder

**Ubicación**: `src/components/ui/ElectricBorder/ElectricBorder.tsx`

Componente de borde animado con efecto eléctrico usando filtros SVG de turbulencia.

**Props**:

```typescript
interface ElectricBorderProps {
  children: React.ReactNode;
  color?: string; // Color hex (default: "#5227FF")
  speed?: number; // Velocidad (default: 1)
  chaos?: number; // Nivel de caos (default: 1)
  thickness?: number; // Grosor en px (default: 2)
  className?: string;
  style?: CSSProperties;
}
```

**Características**:

- Animación de borde con turbulencia SVG
- Múltiples capas de glow
- Totalmente responsive
- Hardware accelerated
- Customizable (color, velocidad, caos)

**Uso Básico**:

```tsx
import { ElectricBorder } from "@/components/ui";

<ElectricBorder color="#00BFFF" speed={1.5} chaos={2}>
  <div className="p-6">Contenido con borde eléctrico</div>
</ElectricBorder>;
```

**Ejemplos Avanzados**:

```tsx
// Card Premium
<ElectricBorder
  color="#BD93F9"
  thickness={3}
  style={{ borderRadius: "12px" }}
>
  <div className="p-8 bg-gray-900">
    <h3>Premium Feature</h3>
    <p>Contenido especial</p>
  </div>
</ElectricBorder>

// Button CTA
<ElectricBorder
  color="#FFB86C"
  speed={1.5}
  style={{ borderRadius: "9999px", display: "inline-block" }}
>
  <button className="px-8 py-3">
    Click Me
  </button>
</ElectricBorder>
```

**Casos de Uso**:

- Hero sections
- Cards premium
- Call-to-actions
- Pricing tables (plan recomendado)
- Feature highlights
- Modals importantes

**Ver documentación completa**: `src/components/ui/ElectricBorder/README.md`

---

### SplitText

**Ubicación**: `src/components/ui/SplitText/SplitText.tsx`

Componente para animar texto dividiéndolo en caracteres, palabras o líneas con GSAP SplitText.

**Props**:

```typescript
interface SplitTextProps {
  text: string; // Texto a animar (required)
  className?: string;
  delay?: number; // Delay entre elementos en ms (default: 100)
  duration?: number; // Duración en segundos (default: 0.6)
  ease?: string | function; // Easing (default: "power3.out")
  splitType?: "chars" | "words" | "lines" | "words, chars"; // (default: "chars")
  from?: gsap.TweenVars; // Estado inicial (default: { opacity: 0, y: 40 })
  to?: gsap.TweenVars; // Estado final (default: { opacity: 1, y: 0 })
  threshold?: number; // IntersectionObserver threshold (default: 0.1)
  rootMargin?: string; // Margen del trigger (default: "-100px")
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"; // (default: "p")
  textAlign?: CSSProperties["textAlign"]; // (default: "center")
  onLetterAnimationComplete?: () => void;
}
```

**Características**:

- Split por caracteres, palabras o líneas
- Animación al entrar en viewport (ScrollTrigger)
- Espera carga de fuentes automáticamente
- Hardware accelerated
- Totalmente customizable
- Callback al completar

**Uso Básico**:

```tsx
import { SplitText } from "@/components/ui";

<SplitText
  text="Hello, World!"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
/>;
```

**Ejemplos Avanzados**:

```tsx
// Título Hero
<SplitText
  text="Welcome to ValkiriApps"
  tag="h1"
  className="text-6xl font-bold"
  splitType="chars"
  delay={50}
  duration={0.8}
  from={{ opacity: 0, y: 100, rotateX: -90 }}
  to={{ opacity: 1, y: 0, rotateX: 0 }}
/>

// Animación por palabras
<SplitText
  text="Each word appears one by one"
  splitType="words"
  delay={200}
  from={{ opacity: 0, x: -50 }}
  to={{ opacity: 1, x: 0 }}
/>

// Efecto Blur + Scale
<SplitText
  text="Blur and Scale"
  splitType="chars"
  from={{ opacity: 0, scale: 0, filter: "blur(10px)" }}
  to={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
/>
```

**Casos de Uso**:

- Títulos hero impactantes
- Revelar texto al hacer scroll
- Efectos de loading
- Transiciones de página
- Destacar features importantes
- Testimonials animados

**Nota**: Requiere licencia GSAP Club GreenSock para producción (SplitText es plugin premium).

**Ver documentación completa**: `src/components/ui/SplitText/README.md`

---

### GradientText

**Ubicación**: `src/components/ui/GradientText/GradientText.tsx`

Componente de texto con gradiente de colores animado que se mueve horizontalmente.

**Props**:

```typescript
interface GradientTextProps {
  children: ReactNode; // Contenido (required)
  className?: string;
  colors?: string[]; // Array de colores hex (default: ["#ffaa40", "#9c40ff", "#ffaa40"])
  animationSpeed?: number; // Velocidad en segundos (default: 8)
  showBorder?: boolean; // Borde animado (default: false)
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"; // (default: "span")
}
```

**Características**:

- Gradiente animado con múltiples colores
- Velocidad customizable
- Borde animado opcional
- CSS Modules (no requiere Tailwind)
- Hardware accelerated
- Múltiples tags HTML

**Uso Básico**:

```tsx
import { GradientText } from "@/components/ui";

<GradientText colors={["#40ffaa", "#4079ff", "#40ffaa"]}>Add a splash of color!</GradientText>;
```

**Ejemplos Avanzados**:

```tsx
// Hero Title
<GradientText
  tag="h1"
  colors={["#00BFFF", "#4FC2D1", "#7df9ff"]}
  animationSpeed={5}
  showBorder={true}
>
  ValkiriApps
</GradientText>

// Rainbow Text
<GradientText
  colors={["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff"]}
  animationSpeed={6}
>
  Rainbow Gradient
</GradientText>

// Con Borde
<GradientText
  colors={["#FFB86C", "#FF79C6", "#FFB86C"]}
  showBorder={true}
>
  Premium Feature
</GradientText>
```

**Paletas Predefinidas**:

```tsx
// ValkiriApps Theme
const electricBlue = ["#00BFFF", "#4FC2D1", "#7df9ff"];
const purplePink = ["#BD93F9", "#FF79C6", "#BD93F9"];
const orangePink = ["#FFB86C", "#FF79C6", "#FFB86C"];
const cyanGreen = ["#50FA7B", "#8BE9FD", "#50FA7B"];
```

**Casos de Uso**:

- Títulos hero impactantes
- CTAs destacados
- Logos con estilo moderno
- Badges y etiquetas
- Pricing plans premium
- Section headers
- Feature highlights

**Ver documentación completa**: `src/components/ui/GradientText/README.md`

---

### TrueFocus

**Ubicación**: `src/components/ui/TrueFocus/TrueFocus.tsx`

Componente de texto con efecto de enfoque animado. Cada palabra se enfoca secuencialmente aplicando blur a las demás, con bordes animados que siguen la palabra activa.

**Props**:

```typescript
interface TrueFocusProps {
  sentence?: string; // Texto a mostrar (default: "True Focus")
  manualMode?: boolean; // Hover o automático (default: false)
  blurAmount?: number; // Blur en px (default: 5)
  borderColor?: string; // Color del borde (default: "green")
  glowColor?: string; // Color del glow (default: "rgba(0, 255, 0, 0.6)")
  animationDuration?: number; // Duración en segundos (default: 0.5)
  pauseBetweenAnimations?: number; // Pausa en segundos (default: 1)
  className?: string;
  fontSize?: number; // Tamaño en rem (default: 3)
}
```

**Características**:

- Enfoque secuencial con blur
- Bordes animados con Framer Motion
- Modo automático o manual (hover)
- Colores customizables
- CSS Modules (no requiere Tailwind)
- Responsive

**Uso Básico**:

```tsx
import { TrueFocus } from "@/components/ui";

<TrueFocus sentence="True Focus Effect" borderColor="cyan" blurAmount={5} />;
```

**Ejemplos Avanzados**:

```tsx
// Modo Automático
<TrueFocus
  sentence="Automatic Focus Effect"
  borderColor="#00BFFF"
  animationDuration={0.8}
  pauseBetweenAnimations={1.5}
/>

// Modo Manual (Hover)
<TrueFocus
  sentence="Hover Over Words"
  manualMode={true}
  borderColor="#FF79C6"
  blurAmount={8}
/>

// Hero Title
<TrueFocus
  sentence="Welcome To ValkiriApps"
  borderColor="#00BFFF"
  fontSize={5}
  blurAmount={8}
/>
```

**Modos**:

- **Automático**: Ciclo entre palabras con pausa configurable
- **Manual**: Activado por hover del mouse

**Casos de Uso**:

- Hero sections impactantes
- Feature highlights interactivos
- CTAs con enfoque secuencial
- Presentaciones visuales
- Storytelling paso a paso
- Headers interactivos

**Ver documentación completa**: `src/components/ui/TrueFocus/README.md`

---

### StarBorder

**Ubicación**: `src/components/ui/StarBorder/StarBorder.tsx`

Componente polimórfico que envuelve contenido con un borde animado tipo "estrella". Usa animaciones CSS con radial gradients para crear un efecto de luz que se mueve.

**Props**:

```typescript
type StarBorderProps<T extends React.ElementType> = {
  as?: T;                      // Elemento HTML (default: "button")
  className?: string;
  children?: ReactNode;
  color?: string;              // default: "white"
  speed?: string;              // default: "6s"
  thickness?: number;          // default: 1
  ...rest                      // Props nativos del elemento
};
```

**Características**:

- Componente polimórfico (button, a, div, etc.)
- Borde animado con efecto "estrella"
- 2 animaciones independientes (top y bottom)
- Radial gradients para efecto de brillo
- CSS animations (GPU-accelerated)
- TypeScript con tipos genéricos
- Compatible con todos los props nativos

**Uso Básico**:

```tsx
import { StarBorder } from "@/components/ui";

<StarBorder>Click Me</StarBorder>;
```

**Ejemplos Avanzados**:

```tsx
// Custom Color
<StarBorder color="#00BFFF">
  Electric Blue
</StarBorder>

// Custom Speed
<StarBorder speed="3s" color="#FF79C6">
  Fast Animation
</StarBorder>

// Como Link
<StarBorder
  as="a"
  href="/about"
  color="#4FC2D1"
>
  Learn More
</StarBorder>

// Como Div
<StarBorder
  as="div"
  color="#FFB86C"
>
  <h3>Featured Content</h3>
  <p>Description</p>
</StarBorder>

// CTA Button
<StarBorder
  color="#00FF41"
  speed="4s"
  onClick={handleClick}
>
  Get Started Now
</StarBorder>
```

**Polimorfismo**:
El componente mantiene los tipos correctos según el prop `as`:

```tsx
// Button props
<StarBorder onClick={(e) => {}} type="submit">
  Button
</StarBorder>

// Anchor props
<StarBorder as="a" href="/path" target="_blank">
  Link
</StarBorder>
```

**Casos de Uso**:

- CTA buttons principales
- Premium features destacadas
- Navigation links importantes
- Product cards destacados
- Pricing tables (planes recomendados)
- Hero buttons
- Feature highlights
- Elementos interactivos importantes

**Ver documentación completa**: `src/components/ui/StarBorder/README.md`

---

## Componentes de Layout

### NavBar

**Ubicación**: `src/components/layout/Navbar/NavBar.tsx`

Barra de navegación principal con animación gooey y efectos de partículas.

**Props**: Ninguna (usa constantes de `NAVIGATION_ITEMS`)

**Características**:

- Navegación con efecto "gooey" (líquido)
- Efectos de partículas WebGL
- Animaciones suaves con GSAP
- Responsive

**Uso**:

```tsx
import NavBar from "@/components/layout/Navbar";

<NavBar />;
```

---

### GooeyNav

**Ubicación**: `src/components/layout/Navbar/GooeyNav.tsx`

Componente de navegación con efecto líquido usando WebGL/OGL.

**Props**:

```typescript
interface GooeyNavProps {
  items: NavigationItem[];
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  initialActiveIndex?: number;
  animationTime?: number;
  timeVariance?: number;
  colors?: number[];
}
```

**Parámetros**:

- `items` (required): Array de items de navegación
- `particleCount`: Cantidad de partículas (default: 12)
- `particleDistances`: Rango de distancias [min, max]
- `particleR`: Radio de partículas
- `initialActiveIndex`: Índice activo inicial
- `animationTime`: Duración de animación (ms)
- `timeVariance`: Variación de tiempo
- `colors`: Array de colores en formato hex

---

### ClientSmoothScroll

**Ubicación**: `src/components/layout/ClientSmoothScroll.tsx`

Cliente wrapper para Lenis smooth scroll.

**Props**: `children: React.ReactNode`

**Características**:

- Scroll suave con física de inercia
- Integración con Lenis
- Client-side rendering

**Uso**:

```tsx
import ClientSmoothScroll from "@/components/layout/ClientSmoothScroll";

<ClientSmoothScroll>{children}</ClientSmoothScroll>;
```

---

## Componentes de Sección

### Hero

**Ubicación**: `src/components/sections/Hero/Hero.tsx`

Sección hero con efectos WebGL y animaciones.

**Props**: Ninguna

**Características**:

- Fondo con threads animados (WebGL)
- Animaciones de texto con GSAP
- Efectos de borde eléctrico
- Responsive

**Estructura**:

```tsx
<section className={styles.hero}>
  <Threads /> {/* Fondo WebGL */}
  <div className={styles.content}>
    <h1>ValkiriApps</h1>
    <p>Tagline</p>
  </div>
  <ElectricBorder />
</section>
```

---

### Threads

**Ubicación**: `src/components/sections/Hero/Threads.tsx`

Fondo animado con hilos ondulantes usando WebGL.

**Props**:

```typescript
interface ThreadsProps {
  color?: [number, number, number]; // RGB 0-1
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
}
```

**Valores por defecto**:

- `color`: [0.31, 0.76, 0.82] (electric blue)
- `amplitude`: 0.3
- `distance`: 1.2
- `enableMouseInteraction`: true

---

### Mision

**Ubicación**: `src/components/sections/Mision/Mision.tsx`

Sección que muestra la misión y valores de la empresa.

**Props**: Ninguna (usa `COMPANY_INFO` y `CORE_VALUES`)

**Características**:

- Grid de valores con animaciones
- Scroll reveal effects
- Componentes flotantes
- Responsive

**Estructura**:

```tsx
<section className={styles.mision}>
  <ScrollFloat />
  <h2>{COMPANY_INFO.mission}</h2>
  <div className={styles.values}>
    {CORE_VALUES.map(value => (...))}
  </div>
</section>
```

---

### ScrollFloat

**Ubicación**: `src/components/sections/Mision/ScrollFloat.tsx`

Componentes flotantes que reaccionan al scroll.

**Props**: Ninguna

**Características**:

- Animación basada en scroll
- Efectos de paralaje
- Figuras geométricas animadas

---

### Services

**Ubicación**: `src/components/sections/Services/Services.tsx`

Sección que muestra los servicios ofrecidos.

**Props**: Ninguna (usa `SERVICES` constant)

**Características**:

- Grid responsive de servicios
- Cards con hover effects
- LaserFlow effects en hover
- Lista de características por servicio

**Estructura**:

```tsx
<section className={styles.services}>
  <h2>Nuestros Servicios</h2>
  <div className={styles.grid}>
    {SERVICES.map(service => (
      <div className={styles.card}>
        <LaserFlow />
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <ul>
          {service.features.map(feature => (...))}
        </ul>
      </div>
    ))}
  </div>
</section>
```

---

### MagicBento

**Ubicación**: `src/components/sections/MagicBento/MagicBento.tsx`

Sección de grid tipo bento con múltiples efectos interactivos. Incluye spotlight global, partículas animadas, tilt effect, magnetismo y más.

**Props**:

```typescript
interface BentoProps {
  textAutoHide?: boolean; // default: true
  enableStars?: boolean; // default: true
  enableSpotlight?: boolean; // default: true
  enableBorderGlow?: boolean; // default: true
  disableAnimations?: boolean; // default: false
  spotlightRadius?: number; // default: 300
  particleCount?: number; // default: 12
  enableTilt?: boolean; // default: false
  glowColor?: string; // default: "132, 0, 255" (RGB)
  clickEffect?: boolean; // default: true
  enableMagnetism?: boolean; // default: true
}
```

**Características**:

- Bento grid layout responsive (6 cards)
- Global spotlight que sigue el mouse
- Partículas animadas con GSAP en hover
- Efecto tilt 3D opcional
- Magnetismo en hover opcional
- Click ripple effect
- Border glow dinámico
- Auto-disable animations en mobile
- GSAP para animaciones fluidas

**Uso Básico**:

```tsx
import { MagicBento } from "@/components/sections";

<MagicBento />;
```

**Ejemplos Avanzados**:

```tsx
// Todos los efectos
<MagicBento
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  glowColor="0, 191, 255"
/>

// Solo spotlight y border
<MagicBento
  enableStars={false}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={false}
/>

// Performance mode
<MagicBento
  disableAnimations={true}
  enableStars={false}
/>
```

**Grid Layout**:

- Desktop (>1024px): Layout específico con nth-child positioning
- Tablet (600-1023px): Grid 2x3
- Mobile (<600px): Grid 1 columna

**Efectos Incluidos**:

1. **Global Spotlight**: Luz que sigue el cursor (z-index: 200)
2. **Particle Stars**: Partículas animadas con GSAP
3. **Tilt Effect**: Rotación 3D en hover
4. **Magnetism**: Cards siguen el cursor
5. **Click Ripple**: Ondas expansivas en click
6. **Border Glow**: Brillo dinámico en bordes

**Performance**:

- Mobile detection automática (<768px)
- Cleanup de animations en unmount
- Memoized particles
- GPU-accelerated animations

**Ver documentación completa**: `src/components/sections/MagicBento/README.md`

---

## Efectos Visuales

### Ballpit

**Ubicación**: `src/components/effects/Ballpit/Ballpit.tsx`

Interactive 3D physics simulation of bouncing spheres using Three.js con full collision detection, gravity simulation, y cursor interaction. Inspirado en el trabajo de Kevin Levron.

**Props**:

```typescript
interface BallpitProps {
  count?: number; // default: 200
  gravity?: number; // default: 0.5
  friction?: number; // default: 0.9975 (0-1)
  wallBounce?: number; // default: 0.95 (0-1)
  followCursor?: boolean; // default: true
  colors?: number[]; // Array de hex colors
  minSize?: number; // default: 0.5
  maxSize?: number; // default: 1
  materialParams?: {
    metalness?: number; // default: 0.5
    roughness?: number; // default: 0.5
    clearcoat?: number; // default: 1
    clearcoatRoughness?: number; // default: 0.15
  };
  className?: string;
}
```

**Características**:

- Three.js 3D rendering con PerspectiveCamera
- Physics simulation completa (gravity, friction, collisions, wall bouncing)
- 200 esferas animadas por defecto con instanced rendering
- Cursor/touch following con raycasting 3D
- Sphere-to-sphere collision detection
- Custom MeshPhysicalMaterial con subsurface scattering
- ACES Filmic tone mapping
- Environment mapping con RoomEnvironment
- Auto pause cuando está off-screen
- Touch support completo para mobile
- 10+ props customizables

**Uso Básico**:

```tsx
import { Ballpit } from "@/components/effects";

<div
  style={{
    position: "relative",
    overflow: "hidden",
    minHeight: "500px",
    width: "100%",
  }}
>
  <Ballpit />
</div>;
```

**Ejemplos Avanzados**:

```tsx
// Rainbow colors
<Ballpit
  colors={[0xff0000, 0xff7f00, 0xffff00, 0x00ff00, 0x0000ff, 0x4b0082, 0x9400d3]}
/>

// Cyan to Pink gradient
<Ballpit colors={[0x00bfff, 0xff79c6]} />

// Zero gravity (float mode)
<Ballpit gravity={0} />

// High gravity with more spheres
<Ballpit count={400} gravity={2} />

// Metallic look
<Ballpit
  materialParams={{
    metalness: 1,
    roughness: 0.2,
    clearcoat: 1,
    clearcoatRoughness: 0.1
  }}
/>

// Combined
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

**Arquitectura**:

- **X Class**: Three.js manager (scene, camera, renderer, animation loop)
- **W Class**: Physics engine (gravity, collisions, bouncing)
- **Y Class**: Custom material (MeshPhysicalMaterial + subsurface scattering)
- **Z Class**: Instanced mesh (efficient rendering de 200+ spheres)

**Casos de Uso**:

- Hero section interactive backgrounds
- Product showcase overlays
- Gaming/tech website effects
- Portfolio unique elements
- Loading screens con physics
- Event/conference pages interactivas

**Performance**:

- Instanced rendering (1 draw call para todas las esferas)
- Auto-pause cuando off-screen (IntersectionObserver)
- Visibility API para pause en tabs ocultos
- Hardware-accelerated con WebGL/GPU
- Optimized collision detection

**Credits**: Inspired by Kevin Levron (https://x.com/soju22/status/1858925191671271801)

**Ver documentación completa**: `src/components/effects/Ballpit/README.md`

---

### LaserFlow

**Ubicación**: `src/components/effects/LaserFlow/LaserFlow.tsx`

Efecto visual de haz láser volumétrico con niebla, wisps animados y shaders GLSL personalizados usando Three.js y WebGL.

**Props**:

```typescript
interface LaserFlowProps {
  className?: string;
  style?: CSSProperties;
  wispDensity?: number; // default: 1 (0-2)
  dpr?: number; // default: devicePixelRatio
  mouseSmoothTime?: number; // default: 0.0
  mouseTiltStrength?: number; // default: 0.01
  horizontalBeamOffset?: number; // default: 0.1
  verticalBeamOffset?: number; // default: 0.0
  flowSpeed?: number; // default: 0.35
  verticalSizing?: number; // default: 2.0
  horizontalSizing?: number; // default: 0.5
  fogIntensity?: number; // default: 0.45
  fogScale?: number; // default: 0.3
  wispSpeed?: number; // default: 15.0
  wispIntensity?: number; // default: 5.0
  flowStrength?: number; // default: 0.25
  decay?: number; // default: 1.1
  falloffStart?: number; // default: 1.2
  fogFallSpeed?: number; // default: 0.6
  color?: string; // default: "#FF79C6"
}
```

**Características**:

- Renderizado WebGL con Three.js
- Shaders GLSL personalizados (vertex + fragment)
- Haz láser con forma de arco animado
- Niebla volumétrica con ruido FBM (Fractional Brownian Motion)
- Wisps animados que viajan a lo largo del haz
- Mouse tracking con tilt effect
- Performance adaptativa (ajuste automático de DPR)
- Intersection Observer para pausar cuando no es visible
- Soporte para WebGL context loss/restore
- Fade-in suave al montarse
- 20+ props customizables

**Uso Básico**:

```tsx
import { LaserFlow } from "@/components/effects";

// Hero section con background
<div style={{ position: "relative", height: "100vh" }}>
  <LaserFlow />
  <div style={{ position: "absolute", inset: 0, zIndex: 10 }}>{/* Tu contenido aquí */}</div>
</div>;
```

**Ejemplos Avanzados**:

```tsx
// ValkiriApps Theme - Electric Blue
<LaserFlow
  color="#00BFFF"
  fogIntensity={0.5}
  wispDensity={1.2}
  verticalSizing={2.5}
/>

// Cyberpunk Style - Hot Pink
<LaserFlow
  color="#FF0080"
  fogIntensity={0.7}
  wispDensity={2.0}
  wispSpeed={25.0}
  flowStrength={0.5}
/>

// Subtle Background
<LaserFlow
  color="#4FC2D1"
  fogIntensity={0.3}
  wispDensity={0.5}
  wispIntensity={3.0}
/>

// Performance Optimized
<LaserFlow
  color="#00FFFF"
  dpr={1}
  wispDensity={0.5}
  fogIntensity={0.3}
/>

// Mouse Interactive
<LaserFlow
  color="#06FFA5"
  mouseSmoothTime={0.3}
  mouseTiltStrength={0.05}
/>
```

**Casos de Uso**:

- Hero sections con background dramático
- Landing pages con impacto visual
- Gaming websites (estética cyberpunk/futurista)
- Tech companies (demostración técnica)
- Event pages con background dinámico
- Product showcases tecnológicos
- Portfolio único y memorable

**Performance**:

- Adaptive DPR: Ajusta resolución según FPS automáticamente
- Intersection Observer: Pausa cuando no es visible
- Visibility API: Pausa en pestañas ocultas
- Context Recovery: Maneja WebGL context loss
- Optimizado para 60 FPS en GPUs modernas

**Ver documentación completa**: `src/components/effects/LaserFlow/README.md`

---

### Lightning

**Ubicación**: `src/components/effects/Lightning/Lightning.tsx`

Efecto de relámpago animado proceduralmente generado con WebGL y shaders GLSL. Implementa Fractal Brownian Motion (FBM) para crear patrones orgánicos de electricidad.

**Props**:

```typescript
interface LightningProps {
  hue?: number; // default: 230 (0-360)
  xOffset?: number; // default: 0
  speed?: number; // default: 1
  intensity?: number; // default: 1
  size?: number; // default: 1
  className?: string;
}
```

**Características**:

- WebGL rendering con shaders GLSL personalizados
- Generación procedural con Fractal Brownian Motion (FBM)
- Control HSV de color (matiz 0-360)
- 10 octavas de ruido para patrones orgánicos
- Animación hardware-accelerated
- Totalmente responsive
- Auto cleanup de recursos
- 5 props customizables

**Uso Básico**:

```tsx
import { Lightning } from "@/components/effects";

<div style={{ width: "100%", height: "600px", position: "relative" }}>
  <Lightning />
</div>;
```

**Ejemplos Avanzados**:

```tsx
// Purple Lightning
<Lightning hue={280} />

// Red High Intensity
<Lightning hue={0} intensity={1.5} />

// ValkiriApps Cyan
<Lightning hue={190} intensity={1.2} />

// Fast Animation
<Lightning speed={2} />

// Large Scale
<Lightning size={2} />

// Combined
<Lightning
  hue={280}
  speed={1.5}
  intensity={1.3}
  size={1.2}
  xOffset={0}
/>
```

**Color Guide** (valores de hue):

- Rojo: `0`
- Naranja: `30`
- Amarillo: `60`
- Verde: `120`
- Cyan: `180`
- Azul: `230` (default)
- Púrpura: `280`
- Magenta: `320`

**Casos de Uso**:

- Hero section backgrounds con efecto dramático
- Card accents para destacar contenido
- Loading states con efecto visual
- Section dividers animados
- Button hover effects
- Overlays decorativos
- Tech/gaming websites

**Performance**:

- Hardware-accelerated con WebGL
- Shaders optimizados para GPU
- RequestAnimationFrame para animación fluida
- Auto-resize con ResizeObserver
- Proper cleanup en unmount

**Algoritmo FBM**: Combina 10 octavas de ruido Perlin con rotación y escalado progresivo para crear patrones orgánicos realistas de electricidad.

**Ver documentación completa**: `src/components/effects/Lightning/README.md`

---

### Threads

**Ubicación**: `src/components/effects/Threads/Threads.tsx`

Efecto visual de hilos animados con WebGL/OGL y shaders GLSL personalizados. Implementa ruido Perlin 2D para crear patrones orgánicos de líneas onduladas con soporte para interacción del mouse.

**Props**:

```typescript
interface ThreadsProps {
  color?: [number, number, number]; // default: [1, 1, 1] (RGB 0-1)
  amplitude?: number; // default: 1
  distance?: number; // default: 0
  enableMouseInteraction?: boolean; // default: false
  className?: string;
}
```

**Características**:

- WebGL/OGL rendering (similar a Three.js, más ligero)
- 40 líneas animadas con Perlin noise
- Blur y fade progresivo
- Mouse interaction con smoothing
- Transparent background (alpha blending)
- Totalmente customizable (color, amplitud, distancia)
- Hardware-accelerated
- Auto cleanup de recursos

**Uso Básico**:

```tsx
import { Threads } from "@/components/effects";

<div style={{ width: "100%", height: "600px", position: "relative" }}>
  <Threads />
</div>;
```

**Ejemplos Avanzados**:

```tsx
// Blue Threads
<Threads color={[0, 0.749, 1]} />

// Purple with Mouse Interaction
<Threads
  color={[0.518, 0.153, 1]}
  enableMouseInteraction={true}
/>

// High Amplitude
<Threads amplitude={2} />

// Spread Apart
<Threads distance={0.3} />

// Combined
<Threads
  color={[0, 0.749, 1]}
  amplitude={1.5}
  distance={0.1}
  enableMouseInteraction={true}
/>
```

**Color Guide** (RGB 0-1):

- White: `[1, 1, 1]` (default)
- Cyan: `[0, 0.749, 1]`
- Purple: `[0.518, 0.153, 1]`
- Pink: `[1, 0.475, 0.776]`
- Green: `[0.314, 0.980, 0.482]`

**Casos de Uso**:

- Hero section backgrounds con efecto orgánico
- Card overlays decorativos
- Section dividers animados
- Loading states con estilo único
- Interactive demos que responden al mouse
- Tech/futuristic websites

**Performance**:

- Hardware-accelerated con WebGL/OGL
- Perlin noise eficiente en GPU
- Mouse smoothing con interpolación
- RequestAnimationFrame sincronizado
- Proper WebGL context cleanup

**Algoritmo**: Usa Perlin 2D noise con 40 líneas iterativas. Cada línea tiene blur progresivo y amplitude controlado por mouse y props. El smoothstep crea transiciones suaves entre estados.

**Ver documentación completa**: `src/components/effects/Threads/README.md`

---

### ScrollFloat

**Ubicación**: `src/components/effects/ScrollFloat/ScrollFloat.tsx`

Efecto de texto flotante basado en scroll. Anima cada carácter con transformaciones mientras el usuario hace scroll.

**Props**:

```typescript
interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number; // default: 1
  ease?: string; // default: "back.inOut(2)"
  scrollStart?: string; // default: "center bottom+=50%"
  scrollEnd?: string; // default: "bottom bottom-=40%"
  stagger?: number; // default: 0.03
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div"; // default: "h2"
}
```

**Características**:

- Animación basada en scroll (ScrollTrigger)
- Split automático en caracteres
- Transformaciones de escala y posición
- Scrub animation sincronizado
- Stagger customizable
- Responsive con clamp()

**Uso Básico**:

```tsx
import { ScrollFloat } from "@/components/effects";

<ScrollFloat tag="h1" animationDuration={1.2}>
  Welcome to ValkiriApps
</ScrollFloat>;
```

**Ejemplos Avanzados**:

```tsx
// Custom easing
<ScrollFloat ease="elastic.out(1, 0.5)">
  Elastic Text
</ScrollFloat>

// Custom trigger
<ScrollFloat
  scrollStart="top center"
  scrollEnd="center top"
>
  Custom Trigger
</ScrollFloat>

// Fast stagger
<ScrollFloat stagger={0.01}>
  Quick Animation
</ScrollFloat>
```

**Casos de Uso**:

- Hero titles con entrada dramática
- Section headers
- Feature highlights
- Storytelling progresivo
- Landing pages con scroll effects

**Ver documentación completa**: `src/components/effects/ScrollFloat/README.md`

---

### SplashCursor

**Ubicación**: `src/components/effects/SplashCursor/SplashCursor.tsx`

Efecto de cursor con simulación de fluidos usando WebGL y shaders GLSL. Implementa las ecuaciones de Navier-Stokes para simulación física realista.

**Props**:

```typescript
interface SplashCursorProps {
  SIM_RESOLUTION?: number; // default: 128
  DYE_RESOLUTION?: number; // default: 1440
  CAPTURE_RESOLUTION?: number; // default: 512
  DENSITY_DISSIPATION?: number; // default: 3.5
  VELOCITY_DISSIPATION?: number; // default: 2
  PRESSURE?: number; // default: 0.1
  PRESSURE_ITERATIONS?: number; // default: 20
  CURL?: number; // default: 3
  SPLAT_RADIUS?: number; // default: 0.2
  SPLAT_FORCE?: number; // default: 6000
  SHADING?: boolean; // default: true
  COLOR_UPDATE_SPEED?: number; // default: 10
  BACK_COLOR?: ColorRGB; // default: {r:0.5, g:0, b:0}
  TRANSPARENT?: boolean; // default: true
}
```

**Características**:

- Simulación de fluidos basada en Navier-Stokes
- 7+ shaders GLSL personalizados
- Responde al movimiento del mouse y touch
- Colores aleatorios generados con HSV
- Double buffering con FBOs
- Soporte WebGL 1.0 y 2.0
- Splat en click con explosión de color
- Fixed overlay fullscreen con pointer-events-none
- 14+ props configurables

**Uso Básico**:

```tsx
import { SplashCursor } from "@/components/effects";

export default function App() {
  return (
    <div>
      <SplashCursor />
      {/* Tu aplicación */}
    </div>
  );
}
```

**Ejemplos Avanzados**:

```tsx
// Splash Suave
<SplashCursor
  DENSITY_DISSIPATION={5}
  VELOCITY_DISSIPATION={3}
  SPLAT_RADIUS={0.15}
  SPLAT_FORCE={4000}
/>

// Splash Intenso
<SplashCursor
  DENSITY_DISSIPATION={1.5}
  VELOCITY_DISSIPATION={1}
  SPLAT_RADIUS={0.3}
  SPLAT_FORCE={9000}
  CURL={5}
/>

// High Quality
<SplashCursor
  SIM_RESOLUTION={256}
  DYE_RESOLUTION={2048}
  PRESSURE_ITERATIONS={30}
  SHADING={true}
/>

// Performance Mode (Mobile)
<SplashCursor
  SIM_RESOLUTION={64}
  DYE_RESOLUTION={512}
  PRESSURE_ITERATIONS={10}
  SHADING={false}
/>

// Colores Rápidos
<SplashCursor
  COLOR_UPDATE_SPEED={20}
  SPLAT_FORCE={7000}
/>
```

**Casos de Uso**:

- Landing pages con background interactivo
- Portfolio para demostrar habilidades técnicas
- Arte generativo e instalaciones digitales
- Gaming websites con estética interactiva
- Product launches con experiencia memorable
- Hero sections con background dinámico

**Física**:
Implementa ecuaciones de Navier-Stokes con:

- Advection (transporte del fluido)
- Divergence calculation
- Pressure solve (Jacobi method)
- Gradient subtraction (proyección)
- Vorticity confinement (vórtices realistas)

**Performance**:

- Adaptive resolution support
- Double buffering con FBOs
- WebGL 1.0 y 2.0 fallbacks
- Configurable quality/performance trade-off

**Ver documentación completa**: `src/components/effects/SplashCursor/README.md`

---

## Hooks Personalizados

### useSmoothScroll

**Ubicación**: `src/hooks/useSmoothScroll.ts`

Hook para integrar Lenis smooth scroll.

**Tipo**:

```typescript
function useSmoothScroll(): void;
```

**Uso**:

```tsx
import { useSmoothScroll } from "@/hooks";

function MyComponent() {
  useSmoothScroll();
  return <div>...</div>;
}
```

**Características**:

- Inicializa Lenis
- Configura RAF loop
- Limpia recursos en unmount

---

### useWindowSize

**Ubicación**: `src/hooks/useWindowSize.ts`

Hook para obtener dimensiones de ventana.

**Tipo**:

```typescript
interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

function useWindowSize(): WindowSize;
```

**Uso**:

```tsx
import { useWindowSize } from "@/hooks";

function MyComponent() {
  const { width, height } = useWindowSize();

  if (!width || !height) return null;

  return (
    <div>
      Window: {width}x{height}
    </div>
  );
}
```

---

## Utilidades

### cn (classNames)

**Ubicación**: `src/utils/cn.ts`

Utilidad para combinar classNames condicionales.

**Tipo**:

```typescript
function cn(...classes: (string | undefined | null | false)[]): string;
```

**Uso**:

```tsx
import { cn } from "@/utils";

<div className={cn(styles.base, isActive && styles.active, isDisabled && styles.disabled)}>
  Content
</div>;
```

---

### animation

**Ubicación**: `src/utils/animation.ts`

Utilidades para animaciones GSAP.

**Funciones**:

#### `fadeIn`

```typescript
function fadeIn(element: Element, options?: GSAPTweenVars): GSAPTween;
```

#### `fadeOut`

```typescript
function fadeOut(element: Element, options?: GSAPTweenVars): GSAPTween;
```

#### `slideInUp`

```typescript
function slideInUp(element: Element, options?: GSAPTweenVars): GSAPTween;
```

#### `scrollReveal`

```typescript
function scrollReveal(elements: string | Element, options?: ScrollTriggerVars): void;
```

**Uso**:

```tsx
import { fadeIn, scrollReveal } from "@/utils/animation";

useEffect(() => {
  fadeIn(elementRef.current);
  scrollReveal(".animate-on-scroll", {
    start: "top 80%",
    end: "bottom 20%",
  });
}, []);
```

---

## Constantes

### COMPANY_INFO

**Ubicación**: `src/constants/company.ts`

Información de la empresa.

```typescript
export const COMPANY_INFO = {
  name: string;
  tagline: string;
  description: string;
  mission: string;
}
```

---

### CORE_VALUES

**Ubicación**: `src/constants/company.ts`

Valores centrales de la empresa.

```typescript
export const CORE_VALUES: CoreValue[] = [
  {
    id: string;
    title: string;
    description: string;
  },
  // ...
]
```

---

### SERVICES

**Ubicación**: `src/constants/company.ts`

Servicios ofrecidos.

```typescript
export const SERVICES: Service[] = [
  {
    id: string;
    title: string;
    description: string;
    features: readonly string[];
    color: string; // hex
  },
  // ...
]
```

---

### NAVIGATION_ITEMS

**Ubicación**: `src/constants/navigation.ts`

Items de navegación.

```typescript
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: string;
    href: string;
  },
  // ...
]
```

---

### COLORS

**Ubicación**: `src/constants/theme.ts`

Paleta de colores del tema.

```typescript
export const COLORS = {
  primary: string;
  secondary: string;
  accent: string;
  // ...
}
```

---

## Tipos TypeScript

Todos los tipos están definidos en `src/types/index.ts`:

- `NavigationItem`
- `GooeyNavProps`
- `ThreadsProps`
- `CoreValue`
- `CompanyInfo`
- `Service`

---

## Mejores Prácticas

1. **Importaciones**: Usar alias `@/` para imports
2. **Tipos**: Siempre tipar props e interfaces
3. **CSS Modules**: Usar para estilos de componentes
4. **Barrel Exports**: Usar index.ts para exportaciones
5. **Hooks**: Extraer lógica reutilizable a hooks
6. **Constantes**: Centralizar en carpeta constants/
7. **Animaciones**: Preferir Framer Motion para React, GSAP para complejas

---

## Performance

- **Code Splitting**: Next.js lo hace automáticamente
- **Lazy Loading**: Usar `dynamic()` para componentes pesados
- **Memoization**: Usar `React.memo()` y `useMemo()` cuando sea necesario
- **Image Optimization**: Usar `next/image`
- **WebGL**: Limpiar recursos en unmount

---

## Accessibility

- Usar elementos semánticos HTML
- Añadir ARIA labels cuando sea necesario
- Soportar navegación por teclado
- Proporcionar texto alternativo
- Mantener contraste de colores adecuado
