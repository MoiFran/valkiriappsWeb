# GradientText

Componente de texto con gradiente de colores animado que se mueve horizontalmente.

## Características

- Texto con gradiente animado customizable
- Múltiples colores en el gradiente
- Velocidad de animación ajustable
- Borde animado opcional con el mismo gradiente
- Soporte para diferentes tags HTML (h1-h6, p, span, div)
- CSS Modules (no requiere Tailwind)
- TypeScript completo
- Hardware accelerated animations

## Uso Básico

```tsx
import { GradientText } from "@/components/ui";

export default function MyComponent() {
  return (
    <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa"]}>Add a splash of color!</GradientText>
  );
}
```

## Props

| Prop             | Tipo                                                                     | Default                             | Descripción                            |
| ---------------- | ------------------------------------------------------------------------ | ----------------------------------- | -------------------------------------- |
| `children`       | `ReactNode`                                                              | -                                   | Contenido del texto (required)         |
| `className`      | `string`                                                                 | `""`                                | Clases CSS adicionales                 |
| `colors`         | `string[]`                                                               | `["#ffaa40", "#9c40ff", "#ffaa40"]` | Array de colores hex para el gradiente |
| `animationSpeed` | `number`                                                                 | `8`                                 | Velocidad de animación en segundos     |
| `showBorder`     | `boolean`                                                                | `false`                             | Mostrar borde animado                  |
| `tag`            | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "p" \| "span" \| "div"` | `"span"`                            | Tag HTML                               |

## Ejemplos

### Colores Personalizados

```tsx
// Gradiente cyan a purple
<GradientText colors={["#40ffaa", "#4079ff", "#40ffaa"]}>
  Cyan to Purple
</GradientText>

// Gradiente rainbow
<GradientText colors={["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"]}>
  Rainbow Text
</GradientText>

// Gradiente fire
<GradientText colors={["#ff0000", "#ff7f00", "#ffff00", "#ff0000"]}>
  Fire Effect
</GradientText>
```

### Velocidad de Animación

```tsx
// Muy lento
<GradientText animationSpeed={15}>
  Slow Animation
</GradientText>

// Rápido
<GradientText animationSpeed={3}>
  Fast Animation
</GradientText>

// Sin animación (muy lento)
<GradientText animationSpeed={999}>
  Almost Static
</GradientText>
```

### Con Borde Animado

```tsx
<GradientText colors={["#40ffaa", "#4079ff", "#40ffaa"]} showBorder={true}>
  Text with animated border
</GradientText>
```

### Diferentes Tags HTML

```tsx
// Título H1
<GradientText tag="h1" colors={["#ff6b6b", "#4ecdc4"]}>
  Main Title
</GradientText>

// Subtítulo H2
<GradientText tag="h2" colors={["#a8e6cf", "#dcedc1"]}>
  Subtitle
</GradientText>

// Párrafo
<GradientText tag="p" colors={["#ffd3b6", "#ffaaa5"]}>
  This is a paragraph with gradient
</GradientText>

// Span inline
<GradientText tag="span" colors={["#ff8b94", "#ffaaa5"]}>
  Inline gradient text
</GradientText>
```

### Hero Section

```tsx
export default function Hero() {
  return (
    <section className="hero">
      <GradientText
        tag="h1"
        colors={["#00BFFF", "#4FC2D1", "#7df9ff", "#4FC2D1", "#00BFFF"]}
        animationSpeed={5}
        className="text-7xl font-bold"
      >
        ValkiriApps
      </GradientText>

      <GradientText
        tag="h2"
        colors={["#BD93F9", "#FF79C6", "#BD93F9"]}
        animationSpeed={6}
        className="text-2xl"
      >
        Soluciones digitales innovadoras
      </GradientText>
    </section>
  );
}
```

### Call to Action

```tsx
<GradientText colors={["#FFB86C", "#FF79C6", "#FFB86C"]} animationSpeed={4} showBorder={true}>
  Get Started Today!
</GradientText>
```

### Feature Highlights

```tsx
<div className="features">
  <GradientText colors={["#50FA7B", "#8BE9FD"]}>Fast Performance</GradientText>

  <GradientText colors={["#FFB86C", "#FF79C6"]}>Easy to Use</GradientText>

  <GradientText colors={["#BD93F9", "#FF79C6"]}>Modern Design</GradientText>
</div>
```

### Logo Text

```tsx
<GradientText
  tag="h1"
  colors={["#FF6B6B", "#4ECDC4", "#45B7D1", "#F7DC6F", "#FF6B6B"]}
  animationSpeed={8}
  showBorder={true}
  className="logo-text"
>
  YourBrand
</GradientText>
```

### Pricing Section

```tsx
<GradientText tag="h2" colors={["#FFD700", "#FFA500", "#FFD700"]} showBorder={true}>
  Premium Plan
</GradientText>
```

### Status Badge

```tsx
<GradientText colors={["#50FA7B", "#8BE9FD", "#50FA7B"]} animationSpeed={3}>
  ✓ Active
</GradientText>
```

## Paletas de Colores Predefinidas

### ValkiriApps Theme

```tsx
// Electric Blue
const electricBlue = ["#00BFFF", "#4FC2D1", "#7df9ff", "#4FC2D1", "#00BFFF"];

// Purple Pink
const purplePink = ["#BD93F9", "#FF79C6", "#BD93F9"];

// Orange Pink
const orangePink = ["#FFB86C", "#FF79C6", "#FFB86C"];

// Cyan Green
const cyanGreen = ["#50FA7B", "#8BE9FD", "#50FA7B"];

<GradientText colors={electricBlue}>Electric Blue Theme</GradientText>;
```

### Sunset Theme

```tsx
const sunset = ["#FF6B6B", "#FFD93D", "#6BCF7F"];

<GradientText colors={sunset} animationSpeed={6}>
  Sunset Gradient
</GradientText>;
```

### Ocean Theme

```tsx
const ocean = ["#0077BE", "#00A8E8", "#00D9FF"];

<GradientText colors={ocean} animationSpeed={7}>
  Ocean Gradient
</GradientText>;
```

### Fire Theme

```tsx
const fire = ["#FF0000", "#FF7F00", "#FFFF00", "#FF0000"];

<GradientText colors={fire} animationSpeed={4}>
  Fire Gradient
</GradientText>;
```

### Forest Theme

```tsx
const forest = ["#228B22", "#32CD32", "#90EE90", "#32CD32", "#228B22"];

<GradientText colors={forest} animationSpeed={5}>
  Forest Gradient
</GradientText>;
```

## Con Clases CSS Personalizadas

```tsx
<GradientText colors={["#40ffaa", "#4079ff"]} className="my-custom-class text-5xl font-black">
  Custom Styled Text
</GradientText>
```

## Casos de Uso

- **Hero Titles**: Títulos principales con impacto visual
- **CTAs**: Call-to-actions destacados
- **Logos**: Texto de logo con estilo moderno
- **Feature Highlights**: Resaltar características
- **Badges**: Status o etiquetas especiales
- **Pricing Plans**: Destacar planes premium
- **Section Headers**: Encabezados de secciones
- **Navigation Items**: Items de menú especiales
- **Testimonials**: Nombres de clientes destacados

## Personalización Avanzada

### Agregar Padding y Margin

```tsx
<GradientText colors={["#40ffaa", "#4079ff"]} className="px-6 py-3 my-4">
  Text with spacing
</GradientText>
```

### Cambiar Font

```tsx
<style jsx>{`
  .custom-font {
    font-family: 'Your Custom Font', sans-serif;
    font-weight: 900;
    font-size: 4rem;
  }
`}</style>

<GradientText
  colors={["#40ffaa", "#4079ff"]}
  className="custom-font"
>
  Custom Font
</GradientText>
```

### Responsive Sizes

```tsx
<GradientText colors={["#40ffaa", "#4079ff"]} className="text-2xl md:text-4xl lg:text-6xl">
  Responsive Text
</GradientText>
```

## Performance Tips

1. **Pocos Colores**: Usa 2-4 colores para mejor performance
2. **Animación Suave**: Velocidades de 5-10 segundos son más suaves
3. **Evita Muchos Gradientes**: No uses demasiados GradientText en la misma vista
4. **Hardware Acceleration**: El componente ya usa `transform` para GPU acceleration

## CSS Customization

Puedes sobrescribir los estilos usando CSS modules:

```css
/* MyComponent.module.css */
.myGradientText :global(.container) {
  border-radius: 0.5rem;
}

.myGradientText :global(.gradientText) {
  font-weight: 900;
  letter-spacing: 0.05em;
}
```

```tsx
<GradientText className={styles.myGradientText}>Custom Styled</GradientText>
```

## Animación Customizada

Si quieres modificar la animación, puedes crear tu propio CSS:

```css
@keyframes myCustomGradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 100%;
  }
}
```

## Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Opera: ✅

Requiere soporte para:

- CSS animations
- background-clip: text
- -webkit-background-clip (Safari)

## Troubleshooting

### El gradiente no se ve

1. Verifica que los colores sean válidos (formato hex)
2. Asegúrate de que `children` contenga texto
3. Comprueba que no haya `color` CSS sobrescribiendo

### La animación no funciona

1. Verifica que `animationSpeed` sea mayor a 0
2. Comprueba que no haya `animation: none` en CSS
3. Asegúrate de que el componente esté montado

### El borde se ve raro

- Ajusta el `borderRadius` en el CSS si es necesario
- Verifica que `showBorder={true}` esté establecido
- El borde funciona mejor con padding

### El texto es difícil de leer

```tsx
// Usa un fondo oscuro detrás del texto
<div style={{ background: "#000", padding: "1rem" }}>
  <GradientText colors={["#40ffaa", "#4079ff"]}>Readable Text</GradientText>
</div>
```

## Accesibilidad

- El texto mantiene su contenido semántico
- Compatible con lectores de pantalla
- Mantén buen contraste entre colores del gradiente
- Usa tags HTML apropiados (h1-h6 para títulos)

## Ejemplos Completos

### Hero Completo

```tsx
export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        padding: "2rem",
      }}
    >
      <GradientText
        tag="h1"
        colors={["#00BFFF", "#4FC2D1", "#7df9ff"]}
        animationSpeed={5}
        showBorder={true}
      >
        Welcome to ValkiriApps
      </GradientText>

      <GradientText tag="p" colors={["#FFB86C", "#FF79C6"]} animationSpeed={6}>
        Soluciones digitales innovadoras
      </GradientText>
    </section>
  );
}
```

### Card con Título Gradient

```tsx
<div className="card">
  <GradientText tag="h3" colors={["#BD93F9", "#FF79C6"]} showBorder={false}>
    Premium Feature
  </GradientText>

  <p>Regular description text</p>

  <button>Learn More</button>
</div>
```

## Licencia

MIT - ValkiriApps
