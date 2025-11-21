"use client";

import { useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "../../lib/utils";

type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown";

interface TextAnimateProps {
  children: string;
  className?: string;
  animation?: AnimationVariant;
  by?: "character" | "word";
  once?: boolean;
}

const defaultVariants: Record<AnimationVariant, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  blurIn: {
    hidden: { filter: "blur(10px)", opacity: 0 },
    show: { filter: "blur(0px)", opacity: 1 },
  },
  blurInUp: {
    hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
    show: { filter: "blur(0px)", opacity: 1, y: 0 },
  },
  blurInDown: {
    hidden: { filter: "blur(10px)", opacity: 0, y: -20 },
    show: { filter: "blur(0px)", opacity: 1, y: 0 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  },
  scaleDown: {
    hidden: { opacity: 0, scale: 1.2 },
    show: { opacity: 1, scale: 1 },
  },
};

export function TextAnimate({
  children,
  className,
  animation = "blurInUp",
  by = "word",
  once = true,
}: TextAnimateProps) {
  const segments = useMemo(() => {
    return by === "character" ? children.split("") : children.split(" ");
  }, [children, by]);

  const variants = defaultVariants[animation];

  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once }}
      className={cn("inline-block", className)}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={index}
          variants={variants}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
          className="inline-block"
        >
          {segment}
          {by === "word" && index < segments.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  );
}
