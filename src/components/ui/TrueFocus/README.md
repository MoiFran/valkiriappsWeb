# TrueFocus

Componente de texto con efecto de enfoque animado. Cada palabra se enfoca secuencialmente aplicando blur a las demás, con bordes animados que siguen la palabra activa.

## Características

- Efecto de enfoque con blur dinámico
- Bordes animados que se mueven con Framer Motion
- Modo automático o manual (hover)
- Colores de borde y glow customizables
- Velocidad de animación ajustable
- Responsive y adaptable
- CSS Modules (no requiere Tailwind)
- TypeScript completo

## Uso Básico

```tsx
import { TrueFocus } from "@/components/ui";

export default function MyComponent() {
  return <TrueFocus sentence="True Focus Effect" />;
}
```

## Props

| Prop                     | Tipo      | Default                  | Descripción                           |
| ------------------------ | --------- | ------------------------ | ------------------------------------- |
| `sentence`               | `string`  | `"True Focus"`           | Texto a mostrar con efecto            |
| `manualMode`             | `boolean` | `false`                  | Modo manual (hover) o automático      |
| `blurAmount`             | `number`  | `5`                      | Cantidad de blur en px                |
| `borderColor`            | `string`  | `"green"`                | Color del borde (cualquier color CSS) |
| `glowColor`              | `string`  | `"rgba(0, 255, 0, 0.6)"` | Color del resplandor                  |
| `animationDuration`      | `number`  | `0.5`                    | Duración de animación en segundos     |
| `pauseBetweenAnimations` | `number`  | `1`                      | Pausa entre animaciones (modo auto)   |
| `className`              | `string`  | `""`                     | Clases CSS adicionales                |
| `fontSize`               | `number`  | `3`                      | Tamaño de fuente en rem               |

## Ejemplos

### Modo Automático (Default)

```tsx
<TrueFocus sentence="Automatic Focus Effect" borderColor="cyan" blurAmount={5} />
```

### Modo Manual (Hover)

```tsx
<TrueFocus sentence="Hover Over Words" manualMode={true} borderColor="magenta" blurAmount={8} />
```

### Colores Personalizados

```tsx
// Verde (default)
<TrueFocus
  sentence="Green Theme"
  borderColor="green"
  glowColor="rgba(0, 255, 0, 0.6)"
/>

// Cyan
<TrueFocus
  sentence="Cyan Theme"
  borderColor="#00BFFF"
  glowColor="rgba(0, 191, 255, 0.6)"
/>

// Magenta
<TrueFocus
  sentence="Magenta Theme"
  borderColor="#FF00FF"
  glowColor="rgba(255, 0, 255, 0.6)"
/>

// Rojo
<TrueFocus
  sentence="Red Alert"
  borderColor="#FF0000"
  glowColor="rgba(255, 0, 0, 0.6)"
/>

// Dorado
<TrueFocus
  sentence="Gold Edition"
  borderColor="#FFD700"
  glowColor="rgba(255, 215, 0, 0.6)"
/>
```

### ValkiriApps Theme

```tsx
// Electric Blue
<TrueFocus
  sentence="ValkiriApps Solutions"
  borderColor="#00BFFF"
  glowColor="rgba(0, 191, 255, 0.8)"
  blurAmount={6}
/>

// Purple Pink
<TrueFocus
  sentence="Innovation Technology"
  borderColor="#BD93F9"
  glowColor="rgba(189, 147, 249, 0.8)"
/>

// Orange
<TrueFocus
  sentence="Modern Web Apps"
  borderColor="#FFB86C"
  glowColor="rgba(255, 184, 108, 0.8)"
/>
```

### Velocidad de Animación

```tsx
// Lenta
<TrueFocus
  sentence="Slow Motion"
  animationDuration={1}
  pauseBetweenAnimations={2}
/>

// Rápida
<TrueFocus
  sentence="Fast Pace"
  animationDuration={0.3}
  pauseBetweenAnimations={0.5}
/>

// Muy lenta (dramática)
<TrueFocus
  sentence="Dramatic Effect"
  animationDuration={2}
  pauseBetweenAnimations={3}
/>
```

### Blur Amount

```tsx
// Blur sutil
<TrueFocus
  sentence="Subtle Blur"
  blurAmount={3}
/>

// Blur fuerte
<TrueFocus
  sentence="Strong Blur"
  blurAmount={10}
/>

// Sin blur (solo bordes)
<TrueFocus
  sentence="No Blur"
  blurAmount={0}
/>
```

### Tamaños de Fuente

```tsx
// Pequeño
<TrueFocus
  sentence="Small Text"
  fontSize={1.5}
/>

// Normal (default)
<TrueFocus
  sentence="Normal Text"
  fontSize={3}
/>

// Grande
<TrueFocus
  sentence="Large Text"
  fontSize={5}
/>

// Extra grande (hero)
<TrueFocus
  sentence="Hero Text"
  fontSize={7}
/>
```

### Hero Section

```tsx
export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
      }}
    >
      <TrueFocus
        sentence="Welcome To ValkiriApps"
        borderColor="#00BFFF"
        glowColor="rgba(0, 191, 255, 0.8)"
        fontSize={5}
        blurAmount={8}
        animationDuration={0.8}
        pauseBetweenAnimations={1.5}
      />
    </section>
  );
}
```

### Feature Highlights

```tsx
<div className="features">
  <TrueFocus
    sentence="Fast Performance Guaranteed"
    borderColor="#50FA7B"
    fontSize={2}
    manualMode={true}
  />

  <TrueFocus
    sentence="Easy To Use Interface"
    borderColor="#FFB86C"
    fontSize={2}
    manualMode={true}
  />

  <TrueFocus
    sentence="Modern Design Principles"
    borderColor="#BD93F9"
    fontSize={2}
    manualMode={true}
  />
</div>
```

### Call to Action

```tsx
<TrueFocus
  sentence="Get Started Today"
  borderColor="#FF79C6"
  glowColor="rgba(255, 121, 198, 0.8)"
  fontSize={4}
  blurAmount={6}
/>
```

### Modo Manual Interactivo

```tsx
<div>
  <h3>Hover over the words:</h3>
  <TrueFocus
    sentence="Interactive Hover Focus Effect"
    manualMode={true}
    borderColor="#4FC2D1"
    blurAmount={7}
    fontSize={3}
  />
</div>
```

### Con Fondo

```tsx
<div
  style={{
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "4rem",
    borderRadius: "1rem",
  }}
>
  <TrueFocus sentence="Gradient Background" borderColor="#FFD700" fontSize={4} />
</div>
```

### Responsive

```tsx
<div className="responsive-container">
  <TrueFocus
    sentence="Responsive Design"
    fontSize={window.innerWidth < 768 ? 2 : 4}
    blurAmount={window.innerWidth < 768 ? 3 : 6}
  />
</div>
```

## Casos de Uso

- **Hero Sections**: Títulos principales con impacto visual
- **Feature Highlights**: Resaltar características clave
- **CTAs**: Call-to-actions con efecto llamativo
- **Loading States**: Indicar progreso de manera visual
- **Presentaciones**: Enfoque secuencial en conceptos
- **Storytelling**: Narración visual paso a paso
- **Testimonials**: Destacar palabras clave en quotes
- **Interactive Headers**: Headers con interacción hover

## Modos de Uso

### Modo Automático

- Ciclo automático entre palabras
- Configurable con `animationDuration` y `pauseBetweenAnimations`
- Ideal para hero sections y presentaciones

```tsx
<TrueFocus sentence="Automatic Focus Mode" animationDuration={0.5} pauseBetweenAnimations={1} />
```

### Modo Manual

- Activado con `manualMode={true}`
- Responde a hover del mouse
- Ideal para interfaces interactivas

```tsx
<TrueFocus sentence="Hover To Focus" manualMode={true} />
```

## Personalización Avanzada

### Con Clases CSS

```tsx
<TrueFocus sentence="Custom Styled" className="my-custom-class" />
```

```css
.my-custom-class {
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
}

.my-custom-class .word {
  font-family: "Your Custom Font", sans-serif;
  letter-spacing: 0.1em;
}
```

### Colores de Esquema

```tsx
// Hacker Green
const hackerTheme = {
  borderColor: "#00FF41",
  glowColor: "rgba(0, 255, 65, 0.8)",
};

// Neon Cyan
const neonTheme = {
  borderColor: "#00FFFF",
  glowColor: "rgba(0, 255, 255, 0.9)",
};

// Fire
const fireTheme = {
  borderColor: "#FF4500",
  glowColor: "rgba(255, 69, 0, 0.8)",
};

<TrueFocus sentence="Themed Effect" {...hackerTheme} />;
```

## Performance Tips

1. **Blur Amount**: Valores más bajos (3-5px) son más performantes
2. **Animation Duration**: 0.3-0.8s es el sweet spot
3. **Frases Cortas**: 3-6 palabras funcionan mejor
4. **Evita Muchos Componentes**: No uses muchos TrueFocus en la misma vista

## CSS Customization

Puedes sobrescribir estilos usando CSS modules:

```css
/* MyComponent.module.css */
.myTrueFocus :global(.container) {
  gap: 2rem;
}

.myTrueFocus :global(.word) {
  font-weight: 700;
  text-transform: uppercase;
}
```

## Animación Técnica

El componente usa:

- **Framer Motion** para animar los bordes suavemente
- **CSS filter: blur()** para el efecto de desenfoque
- **getBoundingClientRect()** para posicionar los bordes
- **ResizeObserver** implícito para responsive

## Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Opera: ✅

Requiere:

- CSS backdrop-filter support
- Framer Motion support
- ES6+ JavaScript

## Troubleshooting

### Los bordes no se mueven

1. Verifica que Framer Motion esté instalado
2. Asegúrate de que el contenedor tenga dimensiones
3. Comprueba que las palabras sean visibles

### El blur no funciona

1. Verifica `blurAmount` > 0
2. Asegúrate de que el navegador soporte `filter: blur()`
3. Comprueba que no haya `filter` en CSS sobrescribiendo

### La animación es muy rápida/lenta

```tsx
// Ajusta estos valores:
<TrueFocus
  animationDuration={0.5} // Velocidad del movimiento
  pauseBetweenAnimations={1} // Tiempo entre palabras
/>
```

### Modo manual no funciona

1. Verifica `manualMode={true}`
2. Asegúrate de que el mouse hover funcione
3. Comprueba que no haya `pointer-events: none`

## Accesibilidad

- El texto mantiene su contenido semántico
- Compatible con lectores de pantalla
- No interfiere con la selección de texto (aunque esté deshabilitada visualmente)
- Los colores de borde deben tener buen contraste

## Ejemplos Completos

### Página de Landing

```tsx
export default function Landing() {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <TrueFocus
          sentence="Transform Your Digital Presence"
          borderColor="#00BFFF"
          fontSize={5}
          blurAmount={8}
        />
      </section>

      {/* Features */}
      <section style={{ padding: "4rem 2rem" }}>
        <TrueFocus
          sentence="Fast Reliable Secure Scalable"
          manualMode={true}
          borderColor="#50FA7B"
          fontSize={3}
        />
      </section>

      {/* CTA */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "4rem",
        }}
      >
        <TrueFocus sentence="Start Building Today" borderColor="#FF79C6" fontSize={4} />
      </section>
    </div>
  );
}
```

### Presentación Interactiva

```tsx
export default function Presentation() {
  return (
    <div className="presentation">
      <TrueFocus
        sentence="Innovation Creativity Excellence Performance"
        manualMode={true}
        borderColor="#FFD700"
        fontSize={4}
        blurAmount={6}
      />
      <p>Hover over each word to focus</p>
    </div>
  );
}
```

## Integración con Otros Componentes

### Con GradientText

```tsx
<div style={{ textAlign: "center" }}>
  <GradientText tag="h2" colors={["#00BFFF", "#4FC2D1"]}>
    Our Vision
  </GradientText>

  <TrueFocus sentence="Innovative Digital Solutions" borderColor="#00BFFF" fontSize={3} />
</div>
```

### Con ElectricBorder

```tsx
<ElectricBorder color="#00BFFF" chaos={2}>
  <div style={{ padding: "3rem" }}>
    <TrueFocus sentence="Premium Feature" borderColor="#00BFFF" />
  </div>
</ElectricBorder>
```

## Licencia

MIT - ValkiriApps
