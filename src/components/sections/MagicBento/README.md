# MagicBento

Sección de grid tipo bento con múltiples efectos interactivos. Incluye spotlight global, partículas animadas con GSAP, tilt effect, magnetismo, click ripple y border glow dinámico.

## Características

- **Bento Grid Layout**: 6 cards con posicionamiento específico responsive
- **Global Spotlight**: Efecto de luz que sigue el mouse
- **Particle Stars**: Part

ículas animadas con GSAP en hover

- **Tilt Effect**: Rotación 3D en hover (opcional)
- **Magnetism**: Cards siguen el cursor sutilmente (opcional)
- **Click Ripple**: Ondas expansivas en click (opcional)
- **Border Glow**: Brillo dinámico en bordes
- **Mobile Responsive**: Grid adaptativo con detección automática
- **GSAP Animations**: Animaciones fluidas y performantes
- **Configurable**: 11+ props para personalización completa

## Clasificación

**Tipo**: Sección (`sections/`)

Este componente se clasifica como sección porque:

- Grid completo con layout específico
- Datos hardcodeados (6 cards predefinidas)
- Layout responsive específico (nth-child positioning)
- No es un componente UI genérico reutilizable
- Es una implementación completa de una sección
- Similar a otras secciones como Hero, Features

## Uso Básico

```tsx
import { MagicBento } from "@/components/sections";

export default function FeaturesPage() {
  return (
    <section>
      <MagicBento />
    </section>
  );
}
```

## Props

| Prop                | Tipo      | Default         | Descripción                      |
| ------------------- | --------- | --------------- | -------------------------------- |
| `textAutoHide`      | `boolean` | `true`          | Auto-hide text con ellipsis      |
| `enableStars`       | `boolean` | `true`          | Activar partículas animadas      |
| `enableSpotlight`   | `boolean` | `true`          | Activar spotlight global         |
| `enableBorderGlow`  | `boolean` | `true`          | Activar glow en bordes           |
| `disableAnimations` | `boolean` | `false`         | Desactivar todas las animaciones |
| `spotlightRadius`   | `number`  | `300`           | Radio del spotlight en px        |
| `particleCount`     | `number`  | `12`            | Número de partículas por card    |
| `enableTilt`        | `boolean` | `false`         | Activar efecto tilt 3D           |
| `glowColor`         | `string`  | `"132, 0, 255"` | Color RGB sin rgba()             |
| `clickEffect`       | `boolean` | `true`          | Activar efecto ripple en click   |
| `enableMagnetism`   | `boolean` | `true`          | Activar magnetismo en hover      |

## Ejemplos

### Default (Todos los efectos)

```tsx
<MagicBento />
```

### Solo Spotlight y Border Glow

```tsx
<MagicBento
  enableStars={false}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={false}
  enableMagnetism={false}
/>
```

### Con Tilt y Magnetismo

```tsx
<MagicBento enableTilt={true} enableMagnetism={true} clickEffect={true} />
```

### Performance Mode (Mobile)

```tsx
<MagicBento disableAnimations={true} enableStars={false} enableSpotlight={false} />
```

### Custom Colors

```tsx
// ValkiriApps Blue
<MagicBento glowColor="0, 191, 255" />

// Hot Pink
<MagicBento glowColor="255, 121, 198" />

// Green
<MagicBento glowColor="80, 250, 123" />
```

### Más Partículas

```tsx
<MagicBento particleCount={20} spotlightRadius={400} />
```

### Spotlight Grande

```tsx
<MagicBento spotlightRadius={500} enableBorderGlow={true} />
```

## Efectos Detallados

### 1. Global Spotlight

- Sigue el cursor por toda la página
- Solo visible cerca de las cards
- Fade in/out basado en distancia
- Radial gradient con múltiples stops
- Z-index: 200

### 2. Particle Stars

- 12 partículas por defecto por card
- Animación con GSAP
- Movimiento aleatorio continuo
- Fade in/out pulsante
- Solo activas en hover

### 3. Tilt Effect (opcional)

- Rotación 3D basada en posición del mouse
- RotateX y RotateY dinámicos
- Transform perspective: 1000
- Smooth con GSAP

### 4. Magnetism (opcional)

- Cards se mueven sutilmente hacia el cursor
- Multiplicador: 0.05
- Smooth transition con GSAP
- Reset al salir

### 5. Click Ripple (opcional)

- Ondas expansivas desde el punto de click
- Radial gradient con fade
- Scale 0 a 1
- Auto-remove después de animación

### 6. Border Glow

- Brillo dinámico basado en posición del mouse
- Radial gradient en pseudo-elemento ::after
- Intensidad basada en proximidad
- Mask composite para efecto de borde

## Grid Layout

### Desktop (>1024px)

```
┌─────┬─────┬─────────┬─────┐
│  1  │  2  │         │  5  │
├─────┴─────┤    3    ├─────┤
│     4     │         │  6  │
│           ├─────────┴─────┘
│           │
└───────────┘
```

### Tablet (600px-1023px)

```
┌─────┬─────┐
│  1  │  2  │
├─────┼─────┤
│  3  │  4  │
├─────┼─────┤
│  5  │  6  │
└─────┴─────┘
```

### Mobile (<600px)

```
┌───────────┐
│     1     │
├───────────┤
│     2     │
├───────────┤
│     3     │
├───────────┤
│     4     │
├───────────┤
│     5     │
├───────────┤
│     6     │
└───────────┘
```

## Performance

### Optimizaciones Incluidas

1. **Mobile Detection**: Auto-disable animations en mobile (<768px)
2. **Memoized Particles**: Partículas pre-calculadas y reutilizadas
3. **GSAP**: Hardware-accelerated animations
4. **Request cleanup**: Limpieza de timeouts y animations en unmount
5. **Conditional rendering**: Solo renderiza efectos activos

### Tips de Performance

```tsx
// Mejor performance en mobile
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

<MagicBento
  disableAnimations={isMobile}
  particleCount={isMobile ? 0 : 12}
  enableStars={!isMobile}
/>

// O simplemente confía en la detección automática
<MagicBento />
```

## Customización Avanzada

### Modificar Card Data

El componente tiene datos hardcodeados. Para customizar, modifica directamente:

```typescript
// En MagicBento.tsx
const cardData: BentoCardProps[] = [
  {
    color: "#060010",
    title: "Tu Título",
    description: "Tu descripción",
    label: "Tu Label",
  },
  // ... más cards
];
```

### Cambiar Grid Layout

Modifica el CSS en `MagicBento.module.css`:

```css
@media (min-width: 1024px) {
  .cardResponsive .card:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }
  /* ... personaliza posiciones */
}
```

## Casos de Uso

- **Features Section**: Mostrar características del producto
- **Services Section**: Servicios ofrecidos
- **Portfolio Grid**: Proyectos destacados
- **Pricing Tiers**: Planes de precios (con modificaciones)
- **Team Section**: Miembros del equipo
- **Technology Stack**: Tecnologías utilizadas

## Browser Support

- **Chrome/Edge**: ✅ Excelente
- **Firefox**: ✅ Muy bueno
- **Safari**: ✅ Bueno (con auto-disable en mobile)
- **Opera**: ✅ Muy bueno
- **Mobile**: ✅ Con optimizaciones automáticas

**Requisitos**:

- GSAP library
- ES6+ JavaScript
- CSS Grid support
- CSS Custom Properties support

## Troubleshooting

### Las animaciones son lentas

```tsx
<MagicBento
  disableAnimations={true}
  // o
  particleCount={6}
  enableTilt={false}
  enableMagnetism={false}
/>
```

### El spotlight no se ve

1. Verifica que `enableSpotlight={true}`
2. Asegúrate de que el mouse esté sobre la sección
3. Comprueba que `glowColor` tenga formato correcto: "r, g, b"

### Las partículas no aparecen

1. Verifica que `enableStars={true}`
2. Asegúrate de hacer hover sobre las cards
3. Comprueba que GSAP esté instalado

### El grid no se adapta bien en mobile

El componente tiene detección automática. Si hay problemas:

```tsx
<MagicBento disableAnimations={true} />
```

## Integración con Otros Componentes

### En Landing Page

```tsx
export default function LandingPage() {
  return (
    <main>
      <HeroSection />

      <section style={{ padding: "4rem 0", background: "#000" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Our Features</h2>
        <MagicBento glowColor="0, 191, 255" enableTilt={true} />
      </section>

      <Footer />
    </main>
  );
}
```

### Con ScrollFloat

```tsx
<section style={{ padding: "4rem 0" }}>
  <ScrollFloat tag="h2">Discover Our Services</ScrollFloat>

  <MagicBento />
</section>
```

## Accesibilidad

- Las animaciones se desactivan automáticamente en mobile
- El contenido es accesible para screen readers
- Las cards mantienen su funcionalidad sin JavaScript
- Los textos tienen contraste adecuado

### Respetar prefers-reduced-motion

```tsx
"use client";
import { useEffect, useState } from "react";

export default function AccessibleBento() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);
  }, []);

  return (
    <MagicBento disableAnimations={reduceMotion} enableStars={!reduceMotion} enableTilt={false} />
  );
}
```

## Ejemplo Completo - Features Section

```tsx
"use client";
import { MagicBento } from "@/components/sections";
import { ScrollFloat } from "@/components/effects";

export default function FeaturesSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #000 0%, #0a0a0a 100%)",
        padding: "6rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ScrollFloat tag="h2" style={{ marginBottom: "3rem" }}>
        Our Magic Features
      </ScrollFloat>

      <MagicBento
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        glowColor="0, 191, 255"
        spotlightRadius={350}
        particleCount={15}
      />

      <p
        style={{
          marginTop: "3rem",
          textAlign: "center",
          color: "#888",
          maxWidth: "600px",
        }}
      >
        Hover over the cards to see the magic happen
      </p>
    </section>
  );
}
```

## Licencia

MIT - ValkiriApps
