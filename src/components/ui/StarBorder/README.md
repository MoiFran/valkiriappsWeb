# StarBorder

Componente polimórfico que envuelve contenido con un borde animado tipo "estrella". Usa animaciones CSS con radial gradients para crear un efecto de luz que se mueve alrededor del contenido.

## Características

- Componente polimórfico (puede ser button, div, a, etc.)
- Borde animado con efecto de luz "estrella"
- 2 animaciones independientes (top y bottom)
- Radial gradients para efecto de brillo
- Totalmente customizable (color, velocidad, grosor)
- CSS Modules para estilos
- TypeScript completo con tipos genéricos
- Compatible con todos los props nativos del elemento

## Clasificación

**Tipo**: Componente UI (`ui/`)

Este componente se clasifica como UI porque:

- Acepta children (envuelve contenido)
- Es un wrapper reutilizable y genérico
- Componente polimórfico con prop `as`
- UI enhancer (añade efectos visuales a contenido)
- No es background/decorativo (es funcional)
- Similar a ElectricBorder en patrón de uso
- Altamente configurable para diferentes casos de uso

## Uso Básico

```tsx
import { StarBorder } from "@/components/ui";

export default function MyComponent() {
  return <StarBorder>Click Me</StarBorder>;
}
```

## Props

| Prop        | Tipo                | Default    | Descripción                |
| ----------- | ------------------- | ---------- | -------------------------- |
| `as`        | `React.ElementType` | `"button"` | Elemento HTML a renderizar |
| `className` | `string`            | `""`       | Clases CSS adicionales     |
| `children`  | `ReactNode`         | -          | Contenido hijo (required)  |
| `color`     | `string`            | `"white"`  | Color del efecto estrella  |
| `speed`     | `string`            | `"6s"`     | Velocidad de la animación  |
| `thickness` | `number`            | `1`        | Grosor del padding         |
| `...rest`   | -                   | -          | Props nativos del elemento |

## Ejemplos

### Button (Default)

```tsx
<StarBorder>Click Me</StarBorder>
```

### Custom Color

```tsx
<StarBorder color="#00BFFF">
  Electric Blue
</StarBorder>

<StarBorder color="#FF79C6">
  Hot Pink
</StarBorder>

<StarBorder color="#50FA7B">
  Green
</StarBorder>
```

### Custom Speed

```tsx
// Rápido
<StarBorder speed="3s">
  Fast Animation
</StarBorder>

// Lento
<StarBorder speed="10s">
  Slow Animation
</StarBorder>

// Muy rápido
<StarBorder speed="1s">
  Super Fast
</StarBorder>
```

### Como Link (Anchor)

```tsx
<StarBorder as="a" href="/about" color="#4FC2D1">
  Learn More
</StarBorder>
```

### Como Div

```tsx
<StarBorder as="div" color="#FFB86C">
  <h3>Featured Content</h3>
  <p>Some description</p>
</StarBorder>
```

### Con onClick Handler

```tsx
<StarBorder onClick={() => console.log("Clicked!")} color="#BD93F9">
  Interactive Button
</StarBorder>
```

### Custom Thickness

```tsx
<StarBorder thickness={2}>
  Thicker Padding
</StarBorder>

<StarBorder thickness={0}>
  No Extra Padding
</StarBorder>
```

### Con Custom className

```tsx
<StarBorder className="my-custom-class" color="#FF5555">
  Custom Styled
</StarBorder>
```

### ValkiriApps Theme

```tsx
<StarBorder color="#00BFFF" speed="5s">
  ValkiriApps Style
</StarBorder>
```

### CTA Button

```tsx
<StarBorder color="#00FF41" speed="4s" onClick={handleSubmit}>
  Get Started Now
</StarBorder>
```

### Premium Feature

```tsx
<StarBorder as="div" color="#FFD700" speed="7s">
  <div style={{ padding: "2rem" }}>
    <h3>Premium Plan</h3>
    <p>$99/month</p>
    <button>Subscribe</button>
  </div>
</StarBorder>
```

### Navigation Link

```tsx
<StarBorder as="a" href="/premium" color="#FF6B6B" speed="5s">
  Upgrade to Pro
</StarBorder>
```

### Disabled State

```tsx
<StarBorder disabled color="#666666" style={{ opacity: 0.5, cursor: "not-allowed" }}>
  Disabled Button
</StarBorder>
```

### Con Icon

```tsx
<StarBorder color="#8BE9FD">
  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
    <StarIcon />
    <span>Featured</span>
  </div>
</StarBorder>
```

### Full Width

```tsx
<StarBorder style={{ width: "100%", display: "block" }} color="#50FA7B">
  Full Width Button
</StarBorder>
```

### Small Size

```tsx
<StarBorder color="#F1FA8C">
  <div style={{ fontSize: "0.875rem", padding: "8px 16px" }}>Small</div>
</StarBorder>
```

### Large Size

```tsx
<StarBorder color="#FFB86C">
  <div style={{ fontSize: "1.25rem", padding: "24px 40px" }}>Large Button</div>
</StarBorder>
```

## Casos de Uso

- **CTA Buttons**: Call-to-actions principales
- **Premium Features**: Destacar características premium
- **Navigation Links**: Links importantes en navegación
- **Product Cards**: Cards de productos destacados
- **Pricing Tables**: Planes recomendados
- **Hero Buttons**: Botones en hero sections
- **Feature Highlights**: Resaltar características especiales
- **Interactive Elements**: Cualquier elemento interactivo importante

## Polimorfismo

El componente es polimórfico gracias al prop `as`, lo que significa que puede ser cualquier elemento HTML:

```tsx
// Button (default)
<StarBorder>Button</StarBorder>

// Link
<StarBorder as="a" href="/path">Link</StarBorder>

// Div
<StarBorder as="div">Div</StarBorder>

// Section
<StarBorder as="section">Section</StarBorder>

// Article
<StarBorder as="article">Article</StarBorder>
```

### TypeScript Support

El componente mantiene los tipos correctos para cada elemento:

```tsx
// Tiene props de button
<StarBorder
  onClick={(e) => console.log(e)}  // ✅ Válido
  type="submit"                     // ✅ Válido
>
  Button
</StarBorder>

// Tiene props de anchor
<StarBorder
  as="a"
  href="/path"      // ✅ Válido
  target="_blank"   // ✅ Válido
>
  Link
</StarBorder>

// Tiene props de div
<StarBorder
  as="div"
  contentEditable   // ✅ Válido
>
  Div
</StarBorder>
```

## Animación

### Cómo Funciona

El componente usa 2 elementos animados:

1. **Star Bottom**: Se mueve de derecha a izquierda por la parte inferior
2. **Star Top**: Se mueve de izquierda a derecha por la parte superior

Ambos usan `radial-gradient` para crear el efecto de luz.

### Keyframes

```css
@keyframes starMovementBottom {
  0% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
  100% {
    transform: translate(-100%, 0%);
    opacity: 0;
  }
}

@keyframes starMovementTop {
  0% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
  100% {
    transform: translate(100%, 0%);
    opacity: 0;
  }
}
```

### Ajustar Animación

```tsx
// Cambiar velocidad
<StarBorder speed="3s">Fast</StarBorder>
<StarBorder speed="10s">Slow</StarBorder>

// Cambiar color
<StarBorder color="#FF0000">Red</StarBorder>
<StarBorder color="rgba(255, 0, 0, 0.5)">Red Transparent</StarBorder>
```

## Estilos Custom

### Modificar Content

```tsx
<StarBorder>
  <div
    style={{
      background: "linear-gradient(to right, #667eea, #764ba2)",
      border: "none",
      padding: "20px 30px",
    }}
  >
    Custom Content Style
  </div>
</StarBorder>
```

### Cambiar Border Radius

```tsx
<StarBorder style={{ borderRadius: "10px" }}>
  Rounded Less
</StarBorder>

<StarBorder style={{ borderRadius: "50px" }}>
  Rounded More
</StarBorder>
```

### Custom Background

Para cambiar el background del contenido, puedes usar CSS Modules:

```css
/* MyComponent.module.css */
.customContent {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 2px solid #667eea;
}
```

```tsx
import styles from "./MyComponent.module.css";

<StarBorder>
  <div className={styles.customContent}>Custom Background</div>
</StarBorder>;
```

## Integración con Otros Componentes

### Con ElectricBorder (Doble efecto)

```tsx
<ElectricBorder color="#00BFFF">
  <StarBorder color="#FF79C6">Double Effect</StarBorder>
</ElectricBorder>
```

### Con GradientText

```tsx
<StarBorder color="#4FC2D1">
  <GradientText colors={["#00BFFF", "#4FC2D1"]} showBorder={false}>
    Gradient Star
  </GradientText>
</StarBorder>
```

### En Card

```tsx
<div
  style={{
    background: "#1a1a1a",
    padding: "2rem",
    borderRadius: "12px",
  }}
>
  <h3>Premium Plan</h3>
  <p>$99/month</p>

  <StarBorder color="#FFD700" style={{ marginTop: "1rem" }}>
    Subscribe Now
  </StarBorder>
</div>
```

### En Hero Section

```tsx
<section
  style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000",
  }}
>
  <div style={{ textAlign: "center" }}>
    <h1>Welcome to ValkiriApps</h1>
    <p>Digital Solutions</p>

    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <StarBorder color="#00BFFF" speed="5s">
        Get Started
      </StarBorder>

      <StarBorder as="a" href="/about" color="#4FC2D1" speed="6s">
        Learn More
      </StarBorder>
    </div>
  </div>
</section>
```

## Performance

### Optimizaciones

- Usa CSS animations (GPU-accelerated)
- No JavaScript en runtime (solo render)
- Animaciones con `transform` y `opacity`
- No re-renders innecesarios

### Tips

```tsx
// ✅ Bueno - Velocidades razonables
<StarBorder speed="3s">Fast</StarBorder>

// ⚠️ Cuidado - Muy rápido puede ser molesto
<StarBorder speed="0.5s">Too Fast</StarBorder>

// ✅ Bueno - Lento para efecto sutil
<StarBorder speed="10s">Subtle</StarBorder>
```

## Accesibilidad

- Mantiene todos los props nativos del elemento
- Funciona con navegación por teclado
- Compatible con screen readers
- Focus states funcionan normalmente

```tsx
// ✅ Accesible
<StarBorder
  aria-label="Subscribe to premium"
  onClick={handleSubscribe}
>
  Subscribe
</StarBorder>

// ✅ Accesible link
<StarBorder
  as="a"
  href="/premium"
  aria-describedby="premium-description"
>
  Learn More
</StarBorder>
```

## Browser Support

- **Chrome/Edge**: ✅ Excelente
- **Firefox**: ✅ Excelente
- **Safari**: ✅ Excelente
- **Opera**: ✅ Excelente
- **Mobile**: ✅ Excelente

**Requisitos**:

- CSS animations support
- CSS gradients support
- ES6+ JavaScript

## Troubleshooting

### La animación no se ve

1. Verifica que el color no sea igual al background
2. Asegúrate de que `speed` sea un valor válido CSS
3. Comprueba que no haya `overflow: hidden` en parents

```tsx
// ✅ Correcto
<StarBorder color="#00BFFF" speed="5s">
  Content
</StarBorder>

// ❌ Incorrecto - color igual al background
<StarBorder color="#000000">
  Content
</StarBorder>
```

### La animación es muy rápida/lenta

```tsx
// Ajusta speed:
<StarBorder speed="3s">Faster</StarBorder>
<StarBorder speed="8s">Slower</StarBorder>
```

### El contenido no se ve bien

El componente viene con estilos predeterminados. Para personalizar:

```tsx
<StarBorder>
  <div
    style={{
      background: "your-color",
      padding: "your-padding",
      // ... otros estilos
    }}
  >
    Custom Content
  </div>
</StarBorder>
```

## Ejemplo Completo - Pricing Card

```tsx
export default function PricingCard() {
  const handleSubscribe = () => {
    console.log("Subscribe clicked");
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        borderRadius: "20px",
        padding: "3rem 2rem",
        textAlign: "center",
        maxWidth: "400px",
        border: "1px solid #333",
      }}
    >
      <div
        style={{
          display: "inline-block",
          background: "#FFD700",
          color: "#000",
          padding: "0.25rem 0.75rem",
          borderRadius: "20px",
          fontSize: "0.75rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        MOST POPULAR
      </div>

      <h3
        style={{
          fontSize: "2rem",
          marginBottom: "0.5rem",
          color: "#fff",
        }}
      >
        Premium
      </h3>

      <div
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          color: "#00BFFF",
        }}
      >
        $99
        <span style={{ fontSize: "1rem", color: "#999" }}>/month</span>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginBottom: "2rem",
          color: "#ccc",
        }}
      >
        <li style={{ marginBottom: "0.75rem" }}>✓ Unlimited projects</li>
        <li style={{ marginBottom: "0.75rem" }}>✓ Priority support</li>
        <li style={{ marginBottom: "0.75rem" }}>✓ Advanced analytics</li>
        <li style={{ marginBottom: "0.75rem" }}>✓ Custom integrations</li>
      </ul>

      <StarBorder color="#FFD700" speed="5s" onClick={handleSubscribe} style={{ width: "100%" }}>
        Subscribe Now
      </StarBorder>

      <p
        style={{
          marginTop: "1rem",
          fontSize: "0.875rem",
          color: "#666",
        }}
      >
        Cancel anytime
      </p>
    </div>
  );
}
```

## Color Palettes

### ValkiriApps Official

```tsx
<StarBorder color="#00BFFF">Electric Blue</StarBorder>
<StarBorder color="#4FC2D1">Cyan</StarBorder>
```

### Vibrant

```tsx
<StarBorder color="#FF0080">Hot Pink</StarBorder>
<StarBorder color="#00FF41">Matrix Green</StarBorder>
<StarBorder color="#FFD700">Gold</StarBorder>
```

### Pastel

```tsx
<StarBorder color="#FF6B6B">Coral</StarBorder>
<StarBorder color="#4ECDC4">Turquoise</StarBorder>
<StarBorder color="#95E1D3">Mint</StarBorder>
```

### Dark Mode

```tsx
<StarBorder color="#BB86FC">Purple</StarBorder>
<StarBorder color="#03DAC6">Teal</StarBorder>
<StarBorder color="#CF6679">Pink</StarBorder>
```

## Licencia

MIT - ValkiriApps
