import React from 'react';

function AnimatedText() {
  return (
    <div className="flex justify-center items-center h-auto bg-transparent">
      <svg viewBox="0 0 1200 200" className="w-full">
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          className="text-copy font-bold text-6xl fill-none stroke-white stroke-5 stroke-dasharray animate-stroke"
        >
          <tspan className="text-copy1">*</tspan>
          <tspan className="text-copy2">U</tspan>
          <tspan className="text-copy3">Tech</tspan>
          <tspan className="text-copy4">Dynamics</tspan>
          <tspan className="text-copy5">*</tspan>
        </text>
      </svg>
    </div>
  );
}

export default AnimatedText;
