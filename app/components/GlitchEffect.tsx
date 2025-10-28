"use client";
import React, { useEffect, useState } from "react";
import "@/styles/glitch.css";

interface GlitchEffectProps {
  children: React.ReactNode;
  stacks?: number;
}

const GlitchEffect: React.FC<GlitchEffectProps> = ({
  children,
  stacks = 3,
}) => {
  const [layers, setLayers] = useState<React.ReactNode>(null);

  useEffect(() => {
    const newLayers = Array.from({ length: stacks }, (_, i) => {
      const delay = (Math.random() * 0.1).toFixed(3);
      const duration = (1 + Math.random()).toFixed(3);
      return (
        <span
          key={i}
          style={
            {
              "--index": i,
              "--delay": `${delay}s`,
              "--duration": `${duration}s`,
            } as React.CSSProperties
          }
        >
          {children}
        </span>
      );
    });
    setLayers(newLayers);
  }, [children, stacks]);

  return (
    <span
      className="glitch-inline"
      style={{ "--stacks": stacks } as React.CSSProperties}
      suppressHydrationWarning
    >
      {layers || children}
    </span>
  );
};

export default GlitchEffect;
