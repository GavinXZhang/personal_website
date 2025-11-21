"use client";

import { useRef } from "react";
import { motion, useInView, type Variant } from "framer-motion";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: number;
  blur?: string;
  once?: boolean;
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = -50,
  blur = "6px",
  once = true,
}: BlurFadeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: `${inViewMargin}px`,
  });
  const defaultVariants: {
    hidden: Variant;
    visible: Variant;
  } = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? (isInView ? "visible" : "hidden") : "visible"}
      variants={combinedVariants}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
