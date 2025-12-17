# ElectricBorder

Componente de borde animado con efecto eléctrico usando filtros SVG de turbulencia.

## Características

- Animación de borde con efecto eléctrico/turbulento
- Múltiples capas de glow para profundidad visual
- Totalmente responsive y adaptable
- Customizable: color, velocidad, caos, grosor
- TypeScript con tipos completos
- Performance optimizado con ResizeObserver

## Instalación

El componente ya está incluido en el proyecto. Solo importa:

```tsx
import ElectricBorder from "@/components/ui/ElectricBorder";
// o
import { ElectricBorder } from "@/components/ui";
```

## Uso Básico

```tsx
import ElectricBorder from "@/components/ui/ElectricBorder";

export default function MyComponent() {
  return (
    <ElectricBorder>
      <div className="p-8">
        <h2>Contenido con borde eléctrico</h2>
        <p>Este contenido tendrá un borde animado</p>
      </div>
    </ElectricBorder>
  );
}
```

## Props

| Prop        | Tipo            | Default     | Descripción                                 |
| ----------- | --------------- | ----------- | ------------------------------------------- |
| `children`  | `ReactNode`     | -           | Contenido a envolver (required)             |
| `color`     | `string`        | `"#5227FF"` | Color del borde en formato hex              |
| `speed`     | `number`        | `1`         | Velocidad de animación (mayor = más rápido) |
| `chaos`     | `number`        | `1`         | Nivel de turbulencia (mayor = más caótico)  |
| `thickness` | `number`        | `2`         | Grosor del borde en píxeles                 |
| `className` | `string`        | `""`        | Clases CSS adicionales                      |
| `style`     | `CSSProperties` | -           | Estilos inline                              |

## Ejemplos

### Color Personalizado

```tsx
<ElectricBorder color="#00BFFF">
  <div className="p-6">Electric Blue Border</div>
</ElectricBorder>

<ElectricBorder color="#FF79C6">
  <div className="p-6">Pink Electric Border</div>
</ElectricBorder>
```

### Velocidad y Caos

```tsx
// Lento y suave
<ElectricBorder speed={0.5} chaos={0.5}>
  <div className="p-6">Animación lenta y suave</div>
</ElectricBorder>

// Rápido y caótico
<ElectricBorder speed={2} chaos={3}>
  <div className="p-6">Animación rápida y caótica</div>
</ElectricBorder>
```

### Grosor del Borde

```tsx
<ElectricBorder thickness={1}>
  <div className="p-6">Borde fino</div>
</ElectricBorder>

<ElectricBorder thickness={5}>
  <div className="p-6">Borde grueso</div>
</ElectricBorder>
```

### Con Border Radius

```tsx
<ElectricBorder color="#4FC2D1" style={{ borderRadius: "16px" }}>
  <div className="p-8">Contenido con bordes redondeados</div>
</ElectricBorder>
```

### Card con Electric Border

```tsx
<ElectricBorder
  color="#BD93F9"
  speed={1.2}
  chaos={1.5}
  thickness={2}
  className="max-w-md mx-auto"
  style={{ borderRadius: "12px" }}
>
  <div className="p-6 bg-gray-900">
    <h3 className="text-xl font-bold mb-2">Premium Feature</h3>
    <p className="text-gray-400">This card has an electric border effect</p>
    <button className="mt-4 px-4 py-2 bg-purple-600 rounded">Learn More</button>
  </div>
</ElectricBorder>
```

### Grid de Cards

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <ElectricBorder color="#FF5555" chaos={2}>
    <div className="p-6 bg-red-950/50">
      <h4>Feature 1</h4>
    </div>
  </ElectricBorder>

  <ElectricBorder color="#50FA7B" chaos={2}>
    <div className="p-6 bg-green-950/50">
      <h4>Feature 2</h4>
    </div>
  </ElectricBorder>

  <ElectricBorder color="#8BE9FD" chaos={2}>
    <div className="p-6 bg-cyan-950/50">
      <h4>Feature 3</h4>
    </div>
  </ElectricBorder>
</div>
```

### Button con Electric Border

```tsx
<ElectricBorder
  color="#FFB86C"
  speed={1.5}
  thickness={2}
  style={{ borderRadius: "9999px", display: "inline-block" }}
>
  <button className="px-8 py-3 bg-orange-950/50 font-semibold">CTA Button</button>
</ElectricBorder>
```

## Casos de Uso

- **Hero Sections**: Destacar elementos importantes
- **Cards Premium**: Indicar contenido especial o premium
- **Call-to-Actions**: Hacer botones más llamativos
- **Modals**: Bordes de diálogos importantes
- **Pricing Tables**: Resaltar plan recomendado
- **Feature Highlights**: Destacar características clave

## Performance

El componente usa:

- `ResizeObserver` para detectar cambios de tamaño
- `requestAnimationFrame` para animaciones suaves
- Filtros SVG hardware-accelerated
- Limpieza automática de observers en unmount

## Notas Técnicas

- El SVG con filtros se posiciona fuera de la pantalla pero permanece activo
- Los filtros se aplican vía CSS `filter: url(#id)`
- Las animaciones son CSS/SVG nativas, no JavaScript
- Compatible con SSR (Next.js) usando "use client"

## Accesibilidad

- El SVG tiene `aria-hidden="true"` y `focusable="false"`
- No interfiere con la navegación por teclado
- El contenido interno mantiene su accesibilidad

## Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Opera: ✅

Nota: Requiere soporte para SVG filters y ResizeObserver (todos los navegadores modernos).

## Troubleshooting

### El efecto no se ve

1. Verifica que el contenedor tenga dimensiones definidas
2. Asegúrate de que no hay `overflow: hidden` en padres
3. Comprueba que el color no sea igual al fondo

### La animación está cortada

- Aumenta el padding del contenedor padre
- El componente aplica `isolate` para crear un nuevo contexto de apilamiento

### Performance en móviles

- Reduce `chaos` para menos turbulencia
- Reduce `thickness` para menos blur
- Considera deshabilitar en móviles si es necesario

## Ejemplos Avanzados

### Hover Effect

```tsx
"use client";
import { useState } from "react";
import ElectricBorder from "@/components/ui/ElectricBorder";

export default function HoverCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <ElectricBorder
        color={isHovered ? "#FF79C6" : "#5227FF"}
        speed={isHovered ? 2 : 1}
        chaos={isHovered ? 3 : 1}
      >
        <div className="p-6">Hover me!</div>
      </ElectricBorder>
    </div>
  );
}
```

### Con Framer Motion

```tsx
import { motion } from "framer-motion";
import ElectricBorder from "@/components/ui/ElectricBorder";

export default function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ElectricBorder color="#4FC2D1">
        <div className="p-6">Animated Card</div>
      </ElectricBorder>
    </motion.div>
  );
}
```

## Licencia

MIT - ValkiriApps
