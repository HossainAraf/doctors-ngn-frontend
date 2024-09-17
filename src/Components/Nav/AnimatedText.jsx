import React from 'react';

function AnimatedText() {
  return (
    <div className="flex justify-center items-center h-auto bg-transparent">
      <svg viewBox="0 0 1200 200" className="w-full">
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          className="text-copy font-bold text-7xl fill-none stroke-white stroke-5 stroke-dasharray animate-stroke"
        >
          <tspan className="text-copy1">U</tspan>
          <tspan className="text-copy2">Te</tspan>
          <tspan className="text-copy3">ch</tspan>
          <tspan className="text-copy4">Dyna</tspan>
          <tspan className="text-copy5">mics</tspan>
        </text>
      </svg>
    </div>
  );
}

export default AnimatedText;
