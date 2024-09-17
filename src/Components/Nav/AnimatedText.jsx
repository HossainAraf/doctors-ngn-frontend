import React from 'react';

function AnimatedText() {
  return (
    <div className="flex justify-center items-center h-screen bg-transparent">
      <svg viewBox="0 0 1200 200" className="w-full">
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          className="text-copy font-bold text-6xl fill-none stroke-white stroke-5 stroke-dasharray animate-stroke"
        >
          <tspan className="text-copy1">Find your</tspan>
          <tspan className="text-copy2">Doctors/</tspan>
          <tspan className="text-copy3">Medical services</tspan>
          <tspan className="text-copy4">from</tspan>
          <tspan className="text-copy5">Naogaon</tspan>
        </text>
      </svg>
    </div>
  );
}

export default AnimatedText;
