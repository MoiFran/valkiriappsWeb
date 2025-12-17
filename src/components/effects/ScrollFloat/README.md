# ScrollFloat

Efecto de texto flotante basado en scroll. Anima cada carácter con transformaciones de escala y posición mientras el usuario hace scroll.

## Características

- Animación basada en scroll con GSAP ScrollTrigger
- Split automático de texto en caracteres
- Efecto de "float" con transformaciones
- Scrub animation (sincronizado con scroll)
- Stagger customizable entre caracteres
- Responsive con clamp()
- CSS Modules
- TypeScript completo

## Clasificación

**Tipo**: Efecto Visual (`effects/`)

Este componente se clasifica como efecto porque:

- Es específico para una animación visual concreta
- Usa GSAP ScrollTrigger para animar
- No es reutilizable como componente UI genérico
- Similar a otros efectos como LaserFlow

## Uso Básico

```tsx
import { ScrollFloat } from "@/components/effects";

export default function MyComponent() {
  return <ScrollFloat>React Bits</ScrollFloat>;
}
```

## Props

| Prop                 | Tipo                                                           | Default                | Descripción                          |
| -------------------- | -------------------------------------------------------------- | ---------------------- | ------------------------------------ |
| `children`           | `ReactNode`                                                    | -                      | Contenido a animar (required)        |
| `scrollContainerRef` | `RefObject<HTMLElement>`                                       | -                      | Ref del contenedor con scroll custom |
| `containerClassName` | `string`                                                       | `""`                   | Clases CSS para el contenedor        |
| `textClassName`      | `string`                                                       | `""`                   | Clases CSS para el texto             |
| `animationDuration`  | `number`                                                       | `1`                    | Duración en segundos                 |
| `ease`               | `string`                                                       | `"back.inOut(2)"`      | Easing de GSAP                       |
| `scrollStart`        | `string`                                                       | `"center bottom+=50%"` | Inicio del trigger                   |
| `scrollEnd`          | `string`                                                       | `"bottom bottom-=40%"` | Fin del trigger                      |
| `stagger`            | `number`                                                       | `0.03`                 | Delay entre caracteres               |
| `tag`                | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "p" \| "div"` | `"h2"`                 | Tag HTML                             |

## Ejemplos

### Título Hero

```tsx
<ScrollFloat tag="h1" animationDuration={1.2} ease="back.inOut(2)">
  Welcome to ValkiriApps
</ScrollFloat>
```

### Subtítulo con Stagger Rápido

```tsx
<ScrollFloat tag="h2" stagger={0.01} animationDuration={0.8}>
  Digital Solutions
</ScrollFloat>
```

### Trigger Customizado

```tsx
<ScrollFloat scrollStart="top center" scrollEnd="center top" animationDuration={1.5}>
  Scroll to Reveal
</ScrollFloat>
```

### Diferentes Easings

```tsx
// Elastic
<ScrollFloat ease="elastic.out(1, 0.5)">
  Elastic Effect
</ScrollFloat>

// Power
<ScrollFloat ease="power4.out">
  Power Easing
</ScrollFloat>

// Bounce
<ScrollFloat ease="bounce.out">
  Bouncy Text
</ScrollFloat>

// Back (default)
<ScrollFloat ease="back.inOut(2)">
  Back Easing
</ScrollFloat>
```

### Con Scroll Container Custom

```tsx
"use client";
import { useRef } from "react";
import { ScrollFloat } from "@/components/effects";

export default function CustomScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={scrollRef} style={{ height: "100vh", overflow: "auto" }}>
      <ScrollFloat scrollContainerRef={scrollRef}>Custom Scroll Container</ScrollFloat>
    </div>
  );
}
```

### Sección Completa

```tsx
export default function AboutSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4rem 2rem",
      }}
    >
      <ScrollFloat tag="h1" animationDuration={1.2}>
        About Us
      </ScrollFloat>

      <ScrollFloat tag="p" stagger={0.02} animationDuration={0.8}>
        We create amazing digital experiences
      </ScrollFloat>
    </section>
  );
}
```

### ValkiriApps Theme

```tsx
<div style={{ background: '#000', padding: '4rem' }}>
  <ScrollFloat
    tag="h1"
    animationDuration={1}
    containerClassName="valkiriapps-title"
    textClassName="electric-blue"
  >
    ValkiriApps
  </ScrollFloat>
</div>

<style jsx>{`
  .electric-blue {
    background: linear-gradient(90deg, #00BFFF, #4FC2D1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`}</style>
```

### Con Clases CSS Custom

```tsx
<ScrollFloat containerClassName="my-container" textClassName="my-text">
  Custom Styled
</ScrollFloat>
```

```css
/* MyComponent.module.css */
.my-container {
  text-align: center;
  padding: 2rem;
}

.my-text {
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
```

### Múltiples en Secuencia

```tsx
<div className="features">
  <ScrollFloat tag="h2">Innovation</ScrollFloat>

  <ScrollFloat tag="h2">Technology</ScrollFloat>

  <ScrollFloat tag="h2">Excellence</ScrollFloat>
</div>
```

### Scroll Trigger Positions

```tsx
// Empieza cuando el top del elemento llega al centro
<ScrollFloat scrollStart="top center" scrollEnd="center top">
  Early Start
</ScrollFloat>

// Empieza cuando el centro llega al bottom
<ScrollFloat scrollStart="center bottom" scrollEnd="bottom top">
  Late Start
</ScrollFloat>

// Custom con offsets
<ScrollFloat scrollStart="top bottom-=100px" scrollEnd="center top+=50px">
  Custom Offsets
</ScrollFloat>
```

## Casos de Uso

- **Hero Titles**: Títulos principales con entrada dramática
- **Section Headers**: Encabezados de secciones
- **Feature Highlights**: Resaltar características
- **Storytelling**: Revelar texto progresivamente
- **Landing Pages**: Efectos de scroll en landing
- **About Sections**: Presentación con impacto
- **CTAs**: Call-to-actions revelados al scroll

## GSAP ScrollTrigger

### Start/End Positions

Formato: `"[elemento] [viewport]"`

**Elemento**:

- `top`, `center`, `bottom`
- Con offset: `top+=100px`, `center-=50%`

**Viewport**:

- `top`, `center`, `bottom`
- Con offset: `bottom+=50%`, `top-=100px`

### Ejemplos de Positions

```tsx
// Clásicos
scrollStart = "top top"; // Elemento top toca viewport top
scrollStart = "center center"; // Elemento center en viewport center
scrollStart = "bottom bottom"; // Elemento bottom toca viewport bottom

// Con offsets
scrollStart = "top bottom-=100px"; // 100px antes del bottom
scrollStart = "center center+=20%"; // 20% después del center
```

## Easing Options

```tsx
// Power
ease = "power1.out"; // Suave
ease = "power2.inOut"; // Medio
ease = "power3.in"; // Fuerte
ease = "power4.out"; // Muy fuerte

// Back
ease = "back.out(1.7)"; // Overshoot
ease = "back.inOut(2)"; // Overshoot ambos lados

// Elastic
ease = "elastic.out(1, 0.3)"; // Elástico

// Bounce
ease = "bounce.out"; // Rebote

// Otros
ease = "sine.inOut";
ease = "expo.out";
ease = "circ.inOut";
```

## Performance Tips

1. **Stagger**: Valores pequeños (0.01-0.05) son más suaves
2. **Duration**: 0.8-1.5 segundos es óptimo
3. **Textos Cortos**: 10-30 caracteres funcionan mejor
4. **Scrub**: Ya está activado para smooth scrolling

## Personalización Avanzada

### Cambiar Transform Origin

```css
.my-text :global(.char) {
  transform-origin: 50% 100%; /* Bottom center */
}
```

### Custom Animation

Para crear tu propia variante, modifica los valores en `gsap.fromTo`:

```tsx
// Ejemplo: Fade in desde arriba sin scale
gsap.fromTo(
  charElements,
  {
    opacity: 0,
    yPercent: -100, // Desde arriba
  },
  {
    opacity: 1,
    yPercent: 0,
    stagger: 0.02,
    scrollTrigger: {
      /* ... */
    },
  }
);
```

## ScrollTrigger Debugging

Para ver los markers de ScrollTrigger:

```tsx
scrollTrigger: {
  trigger: el,
  start: scrollStart,
  end: scrollEnd,
  scrub: true,
  markers: true  // Añadir para debugging
}
```

## Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Opera: ✅

Requiere:

- GSAP 3.x
- ScrollTrigger plugin
- ES6+ JavaScript

## Troubleshooting

### La animación no se activa

1. Verifica que el elemento esté en el viewport
2. Ajusta `scrollStart` y `scrollEnd`
3. Comprueba que GSAP esté instalado
4. Revisa la consola por errores

### Los caracteres se ven raros

1. Verifica que `children` sea string
2. Asegúrate de que la fuente esté cargada
3. Comprueba que no haya `overflow` limitando

### La animación es muy rápida/lenta

```tsx
// Ajusta duration y stagger:
<ScrollFloat
  animationDuration={1.5} // Más lento
  stagger={0.05} // Más delay entre chars
/>
```

### Scrub no funciona

- Scrub está hardcoded a `true`
- Si quieres animación sin scrub, modifica el código del componente

## Integración con Otros Componentes

### Con GradientText

```tsx
<div>
  <ScrollFloat tag="h1">Welcome</ScrollFloat>

  <GradientText tag="h2" colors={["#00BFFF", "#4FC2D1"]}>
    To ValkiriApps
  </GradientText>
</div>
```

### Con TrueFocus

```tsx
<section>
  <ScrollFloat>Discover</ScrollFloat>

  <TrueFocus sentence="Amazing Digital Solutions" borderColor="#00BFFF" />
</section>
```

## Accesibilidad

- El texto mantiene su contenido semántico
- Compatible con lectores de pantalla
- No interfiere con la selección de texto
- Usa tags HTML apropiados

## Ejemplo Completo - Landing Page

```tsx
export default function Landing() {
  return (
    <div style={{ background: "#000" }}>
      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <ScrollFloat tag="h1" animationDuration={1.2} ease="back.inOut(2)">
          ValkiriApps
        </ScrollFloat>

        <ScrollFloat tag="h2" stagger={0.02} animationDuration={0.8}>
          Digital Solutions
        </ScrollFloat>
      </section>

      {/* Features */}
      <section style={{ padding: "4rem 2rem" }}>
        <ScrollFloat tag="h2">Innovation</ScrollFloat>

        <ScrollFloat tag="p">We create amazing experiences</ScrollFloat>
      </section>

      {/* CTA */}
      <section
        style={{
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScrollFloat tag="h2" animationDuration={1}>
          Get Started Today
        </ScrollFloat>
      </section>
    </div>
  );
}
```

## Licencia

MIT - ValkiriApps
