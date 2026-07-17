"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export type MascotExpression = "neutral" | "happy" | "confused" | "sleeping" | "waving";

interface MascotProps {
  expression?: MascotExpression;
  className?: string;
  interactive?: boolean;
}

export function Mascot({ expression = "neutral", className, interactive = true }: MascotProps) {
  const [isBlinking, setIsBlinking] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Blinking logic
  useEffect(() => {
    if (expression === "sleeping") return;

    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150); // Blink duration
    }, 4000 + Math.random() * 2000); // Random interval between 4s and 6s

    return () => clearInterval(blinkInterval);
  }, [expression]);

  // Mouse tracking for parallax
  useEffect(() => {
    if (!interactive || expression === "sleeping") return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [interactive, expression]);

  // Handle click wobble
  const handleClick = () => {
    if (!interactive) return;
    // Just triggereing a re-render or state might be enough if we use framer-motion variants
    // For simplicity, we'll rely on the whileTap prop of motion.div
  };

  const eyeParallaxX = mousePos.x * 3;
  const eyeParallaxY = mousePos.y * 3;

  return (
    <motion.div
      className={cn("relative inline-block", className)}
      whileTap={interactive ? { scale: 0.9, rotate: [0, -5, 5, -5, 0], transition: { duration: 0.3 } } : undefined}
      onClick={handleClick}
      initial={expression === "waving" ? { y: 20, opacity: 0 } : false}
      animate={
        expression === "waving"
          ? { y: 0, opacity: 1, rotate: [0, -10, 10, -10, 0], transition: { duration: 0.8, ease: "easeOut" } }
          : expression === "confused"
          ? { rotate: [0, -5, 0], transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } }
          : { y: [0, -2, 0], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } }
      }
    >
      <svg
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
        style={{
          filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.1))",
        }}
      >
        {/* Egg Body (Terracotta/Warm hue) */}
        <path
          d="M50 110C75 110 85 85 85 60C85 30 65 10 50 10C35 10 15 30 15 60C15 85 25 110 50 110Z"
          fill="var(--color-brand-primary)"
          stroke="var(--color-brand-text)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-300"
        />

        {/* Hand-drawn texture lines */}
        <path d="M25 60C25 60 30 50 35 55" stroke="var(--color-brand-text)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <path d="M75 65C75 65 70 75 65 70" stroke="var(--color-brand-text)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

        {/* Dark Mask */}
        <motion.path
          d={
            expression === "happy"
              ? "M20 50C30 40 40 50 50 50C60 50 70 40 80 50C85 65 75 80 50 80C25 80 15 65 20 50Z"
              : expression === "confused"
              ? "M20 45C30 55 40 45 50 50C60 55 70 40 80 55C85 70 75 80 50 80C25 80 15 60 20 45Z"
              : "M20 50C30 40 40 50 50 50C60 50 70 40 80 50C85 70 75 80 50 80C25 80 15 70 20 50Z"
          }
          fill="var(--color-brand-bg-dark)"
          stroke="var(--color-brand-text)"
          strokeWidth="3"
          strokeLinejoin="round"
          animate={{ d: expression === "happy" ? "M20 50C30 40 40 50 50 50C60 50 70 40 80 50C85 65 75 80 50 80C25 80 15 65 20 50Z" : expression === "confused" ? "M20 45C30 55 40 45 50 50C60 55 70 40 80 55C85 70 75 80 50 80C25 80 15 60 20 45Z" : "M20 50C30 40 40 50 50 50C60 50 70 40 80 50C85 70 75 80 50 80C25 80 15 70 20 50Z" }}
          transition={{ duration: 0.3 }}
        />

        {/* Eyes Group (Amber) */}
        <motion.g
          animate={{
            x: expression !== "sleeping" && interactive ? eyeParallaxX : 0,
            y: expression !== "sleeping" && interactive ? eyeParallaxY : 0,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {expression === "sleeping" || isBlinking ? (
            <>
              {/* Sleeping/Blinking Eyes (straight or slightly curved lines) */}
              <path d="M30 60 L40 60" stroke="var(--color-brand-accent)" strokeWidth="4" strokeLinecap="round" />
              <path d="M60 60 L70 60" stroke="var(--color-brand-accent)" strokeWidth="4" strokeLinecap="round" />
            </>
          ) : expression === "happy" ? (
            <>
              {/* Happy Eyes (semicircles) */}
              <path d="M30 62 Q35 55 40 62" stroke="var(--color-brand-accent)" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M60 62 Q65 55 70 62" stroke="var(--color-brand-accent)" strokeWidth="4" strokeLinecap="round" fill="none" />
            </>
          ) : expression === "confused" ? (
            <>
              {/* Confused Eyes (one big, one small) */}
              <circle cx="35" cy="60" r="5" fill="var(--color-brand-accent)" />
              <circle cx="65" cy="58" r="3" fill="var(--color-brand-accent)" />
            </>
          ) : (
            <>
              {/* Neutral/Default Eyes (open circles) */}
              <circle cx="35" cy="60" r="4" fill="var(--color-brand-accent)" />
              <circle cx="65" cy="60" r="4" fill="var(--color-brand-accent)" />
            </>
          )}
        </motion.g>

        {/* Horns (Small stubs on top) */}
        <path d="M35 15C32 5 25 0 25 0C30 10 38 12 38 12" fill="var(--color-brand-dark)" stroke="var(--color-brand-text)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M65 15C68 5 75 0 75 0C70 10 62 12 62 12" fill="var(--color-brand-dark)" stroke="var(--color-brand-text)" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    </motion.div>
  );
}
