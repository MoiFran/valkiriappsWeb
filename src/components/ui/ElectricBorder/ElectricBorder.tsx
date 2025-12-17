"use client";

/* eslint-disable react-hooks/exhaustive-deps */

import React, {
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
} from "react";

/**
 * Props para el componente ElectricBorder
 */
export interface ElectricBorderProps extends PropsWithChildren {
  /** Color del borde en formato hexadecimal (default: #5227FF) */
  color?: string;
  /** Velocidad de la animación (default: 1) */
  speed?: number;
  /** Nivel de caos/turbulencia (default: 1) */
  chaos?: number;
  /** Grosor del borde en píxeles (default: 2) */
  thickness?: number;
  /** Clases CSS adicionales */
  className?: string;
  /** Estilos CSS inline */
  style?: CSSProperties;
}

/**
 * Convierte un color hexadecimal a formato rgba
 */
function hexToRgba(hex: string, alpha = 1): string {
  if (!hex) return `rgba(0,0,0,${alpha})`;

  let h = hex.replace("#", "");

  // Expandir formato corto (#fff -> #ffffff)
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const int = parseInt(h, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * ElectricBorder - Componente de borde animado con efecto eléctrico
 *
 * Crea un borde animado con efectos de turbulencia SVG que simula electricidad.
 * El efecto es responsive y se adapta automáticamente al tamaño del contenedor.
 *
 * @example
 * ```tsx
 * <ElectricBorder color="#00BFFF" speed={1.5} chaos={2} thickness={3}>
 *   <div>Contenido aquí</div>
 * </ElectricBorder>
 * ```
 */
const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  color = "#5227FF",
  speed = 1,
  chaos = 1,
  thickness = 2,
  className = "",
  style,
}) => {
  // Generar ID único para el filtro SVG
  const rawId = useId().replace(/[:]/g, "");
  const filterId = `turbulent-displace-${rawId}`;

  // Referencias para manipular el DOM
  const svgRef = useRef<SVGSVGElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const strokeRef = useRef<HTMLDivElement | null>(null);

  /**
   * Actualiza la animación basándose en las dimensiones del contenedor
   */
  const updateAnim = () => {
    const svg = svgRef.current;
    const host = rootRef.current;
    if (!svg || !host) return;

    // Aplicar filtro al borde
    if (strokeRef.current) {
      strokeRef.current.style.filter = `url(#${filterId})`;
    }

    // Obtener dimensiones del contenedor
    const width = Math.max(
      1,
      Math.round(host.clientWidth || host.getBoundingClientRect().width || 0)
    );
    const height = Math.max(
      1,
      Math.round(host.clientHeight || host.getBoundingClientRect().height || 0)
    );

    // Actualizar animaciones verticales (dy)
    const dyAnims = Array.from(
      svg.querySelectorAll<SVGAnimateElement>('feOffset > animate[attributeName="dy"]')
    );
    if (dyAnims.length >= 2) {
      dyAnims[0].setAttribute("values", `${height}; 0`);
      dyAnims[1].setAttribute("values", `0; -${height}`);
    }

    // Actualizar animaciones horizontales (dx)
    const dxAnims = Array.from(
      svg.querySelectorAll<SVGAnimateElement>('feOffset > animate[attributeName="dx"]')
    );
    if (dxAnims.length >= 2) {
      dxAnims[0].setAttribute("values", `${width}; 0`);
      dxAnims[1].setAttribute("values", `0; -${width}`);
    }

    // Calcular duración basada en velocidad
    const baseDur = 6;
    const dur = Math.max(0.001, baseDur / (speed || 1));
    [...dyAnims, ...dxAnims].forEach((a) => a.setAttribute("dur", `${dur}s`));

    // Configurar escala de desplazamiento (caos)
    const disp = svg.querySelector("feDisplacementMap");
    if (disp) disp.setAttribute("scale", String(30 * (chaos || 1)));

    // Configurar área del filtro
    const filterEl = svg.querySelector<SVGFilterElement>(`#${CSS.escape(filterId)}`);
    if (filterEl) {
      filterEl.setAttribute("x", "-200%");
      filterEl.setAttribute("y", "-200%");
      filterEl.setAttribute("width", "500%");
      filterEl.setAttribute("height", "500%");
    }

    // Iniciar animaciones
    requestAnimationFrame(() => {
      [...dyAnims, ...dxAnims].forEach((a: SVGAnimateElement) => {
        if (typeof a.beginElement === "function") {
          try {
            a.beginElement();
          } catch {
            // Ignorar errores de beginElement
          }
        }
      });
    });
  };

  // Actualizar cuando cambien speed o chaos
  useEffect(() => {
    updateAnim();
  }, [speed, chaos]);

  // Observar cambios de tamaño
  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ro = new ResizeObserver(() => updateAnim());
    ro.observe(rootRef.current);
    updateAnim();

    return () => ro.disconnect();
  }, []);

  // Estilos calculados
  const inheritRadius: CSSProperties = {
    borderRadius: style?.borderRadius ?? "inherit",
  };

  const strokeStyle: CSSProperties = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: "solid",
    borderColor: color,
  };

  const glow1Style: CSSProperties = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: "solid",
    borderColor: hexToRgba(color, 0.6),
    filter: `blur(${0.5 + thickness * 0.25}px)`,
    opacity: 0.5,
  };

  const glow2Style: CSSProperties = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: "solid",
    borderColor: color,
    filter: `blur(${2 + thickness * 0.5}px)`,
    opacity: 0.5,
  };

  const bgGlowStyle: CSSProperties = {
    ...inheritRadius,
    transform: "scale(1.08)",
    filter: "blur(32px)",
    opacity: 0.3,
    zIndex: -1,
    background: `linear-gradient(-30deg, ${hexToRgba(color, 0.8)}, transparent, ${color})`,
  };

  return (
    <div ref={rootRef} className={`relative isolate ${className}`} style={style}>
      {/* SVG con filtros de turbulencia - oculto visualmente pero activo */}
      <svg
        ref={svgRef}
        className="fixed -left-[10000px] -top-[10000px] w-[10px] h-[10px] opacity-[0.001] pointer-events-none"
        aria-hidden
        focusable="false"
      >
        <defs>
          <filter
            id={filterId}
            colorInterpolationFilters="sRGB"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            {/* Turbulencia vertical 1 */}
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise1"
              seed="1"
            />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate
                attributeName="dy"
                values="700; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            {/* Turbulencia vertical 2 */}
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise2"
              seed="1"
            />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate
                attributeName="dy"
                values="0; -700"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            {/* Turbulencia horizontal 1 */}
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise3"
              seed="2"
            />
            <feOffset in="noise3" dx="0" dy="0" result="offsetNoise3">
              <animate
                attributeName="dx"
                values="490; 0"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            {/* Turbulencia horizontal 2 */}
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="10"
              result="noise4"
              seed="2"
            />
            <feOffset in="noise4" dx="0" dy="0" result="offsetNoise4">
              <animate
                attributeName="dx"
                values="0; -490"
                dur="6s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>

            {/* Combinar turbulencias */}
            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />

            {/* Aplicar desplazamiento */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="combinedNoise"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      {/* Capas de efectos visuales */}
      <div className="absolute inset-0 pointer-events-none" style={inheritRadius}>
        <div ref={strokeRef} className="absolute inset-0 box-border" style={strokeStyle} />
        <div className="absolute inset-0 box-border" style={glow1Style} />
        <div className="absolute inset-0 box-border" style={glow2Style} />
        <div className="absolute inset-0" style={bgGlowStyle} />
      </div>

      {/* Contenido */}
      <div className="relative" style={inheritRadius}>
        {children}
      </div>
    </div>
  );
};

export default ElectricBorder;
