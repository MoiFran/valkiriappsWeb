// src/app/components/Mision/ScrollFloat.tsx
import React, { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollFloat.css";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: string;                   // forzamos string
  scrollContainerRef?: React.RefObject<unknown>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "top bottom-=100px",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.05,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  // Spliteamos palabra a palabra en lugar de caracter a caracter
  const splitText = useMemo(() => {
    return children.split(" ").map((word, wi) => (
      <span className="word" key={wi}>
        {word.split("").map((char, i) => (
          <span className="char" key={i}>
            {char}
          </span>
        ))}
        {wi < children.split(" ").length - 1 && <span> </span>}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current instanceof HTMLElement ? scrollContainerRef.current : window;
    const chars = el.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%",
      },
      {
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        duration: animationDuration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: 1,          // <- suaviza el scrub con 1s de “inercia”
        },
      }
    );
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger, scrollContainerRef]);

  return (
    <h2
      ref={containerRef}
      className={`scroll-float ${containerClassName}`}
    >
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
