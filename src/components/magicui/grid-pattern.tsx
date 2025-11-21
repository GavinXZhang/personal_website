"use client";

import React from "react";
import { cn } from "../../lib/utils";

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: Array<[number, number]>;
  className?: string;
}

export function GridPattern({
  width = 40,
  height = 40,
  x = 0,
  y = 0,
  squares = [],
  className,
  ...props
}: GridPatternProps) {
  const patternId = React.useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray="0"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      {squares.map(([x, y], index) => (
        <rect
          key={`${x}-${y}-${index}`}
          width={width - 1}
          height={height - 1}
          x={x * width + 1}
          y={y * height + 1}
          strokeWidth="0"
        />
      ))}
    </svg>
  );
}
