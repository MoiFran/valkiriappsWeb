# SplitText

Componente para animar texto dividiéndolo en caracteres, palabras o líneas usando GSAP SplitText.

## Características

- Animación de texto con split por caracteres, palabras o líneas
- Activación automática al entrar en viewport (ScrollTrigger)
- Totalmente customizable: delays, duración, easing
- Espera a que las fuentes carguen antes de animar
- TypeScript con tipos completos
- Hardware accelerated animations
- Callback al completar la animación

## Instalación

El componente requiere GSAP y plugins. Ya están instalados en el proyecto:

```bash
npm install gsap @gsap/react gsap-trial
```

**Nota**: `gsap-trial` incluye plugins premium como SplitText para desarrollo. Para producción necesitas licencia GSAP Club GreenSock.

## Uso Básico

```tsx
import { SplitText } from "@/components/ui";

export default function MyComponent() {
  return (
    <SplitText
      text="Hello, World!"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
    />
  );
}
```

## Props

| Prop                        | Tipo                                                            | Default                 | Descripción                           |
| --------------------------- | --------------------------------------------------------------- | ----------------------- | ------------------------------------- |
| `text`                      | `string`                                                        | -                       | Texto a animar (required)             |
| `className`                 | `string`                                                        | `""`                    | Clases CSS adicionales                |
| `delay`                     | `number`                                                        | `100`                   | Delay entre elementos en ms           |
| `duration`                  | `number`                                                        | `0.6`                   | Duración de animación en segundos     |
| `ease`                      | `string \| function`                                            | `"power3.out"`          | Easing de GSAP                        |
| `splitType`                 | `"chars" \| "words" \| "lines" \| "words, chars"`               | `"chars"`               | Tipo de división                      |
| `from`                      | `gsap.TweenVars`                                                | `{ opacity: 0, y: 40 }` | Estado inicial                        |
| `to`                        | `gsap.TweenVars`                                                | `{ opacity: 1, y: 0 }`  | Estado final                          |
| `threshold`                 | `number`                                                        | `0.1`                   | Umbral del IntersectionObserver (0-1) |
| `rootMargin`                | `string`                                                        | `"-100px"`              | Margen del trigger                    |
| `tag`                       | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "p" \| "span"` | `"p"`                   | Tag HTML                              |
| `textAlign`                 | `CSSProperties["textAlign"]`                                    | `"center"`              | Alineación del texto                  |
| `onLetterAnimationComplete` | `() => void`                                                    | -                       | Callback al completar                 |

## Ejemplos

### Títulos Hero

```tsx
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
```

### Animación por Palabras

```tsx
<SplitText
  text="Each word appears one by one"
  splitType="words"
  delay={200}
  duration={0.5}
  from={{ opacity: 0, x: -50 }}
  to={{ opacity: 1, x: 0 }}
/>
```

### Animación por Líneas

```tsx
<SplitText
  text="This is a long text that will be split into multiple lines for animation"
  splitType="lines"
  delay={150}
  from={{ opacity: 0, y: 50 }}
  to={{ opacity: 1, y: 0 }}
/>
```

### Fade In desde Abajo

```tsx
<SplitText
  text="Fade in from below"
  splitType="chars"
  delay={30}
  duration={0.8}
  ease="power4.out"
  from={{ opacity: 0, y: 100 }}
  to={{ opacity: 1, y: 0 }}
/>
```

### Efecto Blur + Scale

```tsx
<SplitText
  text="Blur and Scale"
  splitType="chars"
  delay={40}
  from={{ opacity: 0, scale: 0, filter: "blur(10px)" }}
  to={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
/>
```

### Rotación 3D

```tsx
<SplitText
  text="3D Rotation Effect"
  splitType="chars"
  delay={50}
  duration={1}
  from={{
    opacity: 0,
    rotateY: 90,
    transformOrigin: "center center",
  }}
  to={{
    opacity: 1,
    rotateY: 0,
    transformOrigin: "center center",
  }}
/>
```

### Animación Elástica

```tsx
<SplitText
  text="Bouncy Text!"
  splitType="chars"
  delay={60}
  duration={1.2}
  ease="elastic.out(1, 0.5)"
  from={{ opacity: 0, y: -100 }}
  to={{ opacity: 1, y: 0 }}
/>
```

### Con Callback

```tsx
"use client";
import { SplitText } from "@/components/ui";

export default function MyComponent() {
  const handleComplete = () => {
    console.log("Animation complete!");
    // Ejecutar siguiente acción
  };

  return <SplitText text="Watch the console" onLetterAnimationComplete={handleComplete} />;
}
```

### Diferentes Tags HTML

```tsx
// Título H1
<SplitText
  text="Main Title"
  tag="h1"
  className="text-5xl font-bold"
/>

// Subtítulo H2
<SplitText
  text="Subtitle"
  tag="h2"
  className="text-3xl"
/>

// Párrafo
<SplitText
  text="This is a paragraph"
  tag="p"
  className="text-lg"
/>

// Span inline
<SplitText
  text="Inline text"
  tag="span"
  className="text-sm"
/>
```

### Combinado con Tailwind

```tsx
<SplitText
  text="Styled with Tailwind"
  className="text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent"
  splitType="chars"
  delay={40}
/>
```

### Hero Section Completo

```tsx
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <SplitText
        text="ValkiriApps"
        tag="h1"
        className="text-7xl font-black mb-4"
        splitType="chars"
        delay={50}
        duration={0.8}
        from={{ opacity: 0, y: 100, rotateX: -90 }}
        to={{ opacity: 1, y: 0, rotateX: 0 }}
      />

      <SplitText
        text="Soluciones digitales innovadoras"
        tag="h2"
        className="text-2xl text-gray-400"
        splitType="words"
        delay={100}
        duration={0.6}
        from={{ opacity: 0, y: 50 }}
        to={{ opacity: 1, y: 0 }}
      />
    </section>
  );
}
```

## Scroll Trigger Customization

### Ajustar cuándo se activa

```tsx
// Se activa antes (más arriba en la página)
<SplitText
  text="Triggers early"
  threshold={0.5}
  rootMargin="0px"
/>

// Se activa después (más abajo)
<SplitText
  text="Triggers late"
  threshold={0.1}
  rootMargin="-200px"
/>
```

## Easing Options

```tsx
// Linear
ease="none"

// Power (1-4)
ease="power1.out"
ease="power2.inOut"
ease="power3.in"
ease="power4.out"

// Back
ease="back.out(1.7)"

// Elastic
ease="elastic.out(1, 0.3)"

// Bounce
ease="bounce.out"

// Custom
ease={(t) => t * t * t}
```

## Performance Tips

1. **Usa `chars` solo cuando sea necesario**: Dividir en caracteres es más pesado que palabras/líneas
2. **Reduce delay en textos largos**: Usa delays más pequeños (20-50ms) para textos con muchos caracteres
3. **Evita animaciones complejas en móvil**: Considera reducir efectos en dispositivos móviles

```tsx
"use client";
import { useState, useEffect } from "react";
import { SplitText } from "@/components/ui";

export default function ResponsiveText() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <SplitText
      text="Responsive Animation"
      delay={isMobile ? 20 : 50}
      duration={isMobile ? 0.4 : 0.8}
      from={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, y: 40, rotateX: -90 }}
    />
  );
}
```

## Casos de Uso

- **Hero Sections**: Títulos principales con impacto
- **Page Transitions**: Revelar contenido al cambiar de página
- **Loading States**: Mostrar texto mientras carga contenido
- **Feature Highlights**: Resaltar características importantes
- **Testimonials**: Animar quotes de clientes
- **CTAs**: Call-to-actions con énfasis
- **Storytelling**: Revelar narrativa progresivamente

## Notas Técnicas

### GSAP SplitText Plugin

- Es un plugin premium de GSAP (requiere licencia para producción)
- `gsap-trial` incluye SplitText para desarrollo/testing
- Para producción: [GSAP Club GreenSock](https://greensock.com/club/)

### Font Loading

El componente espera automáticamente a que las fuentes se carguen antes de animar para evitar reflows y animaciones incorrectas.

### Memory Management

- Limpia automáticamente ScrollTriggers al desmontar
- Revierte splits cuando el componente se actualiza
- Usa `force3D: true` para hardware acceleration

### Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Opera: ✅

Requiere soporte para IntersectionObserver (todos los navegadores modernos).

## Troubleshooting

### El texto no se anima

1. Verifica que las dependencias estén instaladas
2. Asegúrate de usar `"use client"` en Next.js
3. Comprueba que el texto sea visible en viewport
4. Revisa la consola por errores de GSAP

### Las fuentes se ven raras

- El componente espera a que las fuentes carguen
- Asegúrate de que las fuentes estén correctamente importadas
- Usa `font-display: swap` en tu CSS

### Animación se ve cortada

- Aumenta el padding del contenedor padre
- Ajusta `rootMargin` y `threshold`
- Verifica que no haya `overflow: hidden` limitando la vista

### Performance en textos largos

```tsx
// Para textos muy largos, usa palabras en lugar de caracteres
<SplitText
  text="Very long text with many characters..."
  splitType="words" // Más performante que "chars"
  delay={80}
/>
```

## Licencia

Requiere licencia GSAP Club GreenSock para uso en producción.

## Recursos

- [GSAP SplitText Docs](https://greensock.com/docs/v3/Plugins/SplitText)
- [GSAP ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP Easing](https://greensock.com/docs/v3/Eases)
- [useGSAP Hook](https://greensock.com/react/)
