"use client";
import { useState, useRef } from "react";
import HumanBody from "../components/HumanBody";

type HoverData = {
  id: string;
  x: number;
  y: number;
};

export default function InteractiveMuscleMap() {
  const [hovered, setHovered] = useState<HoverData | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  const handleHoverStart = (id: string, evt: React.MouseEvent<SVGPathElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = evt.clientX - rect.left;
    const y = evt.clientY - rect.top;

    // Start a short timer before showing the panel
    hoverTimer.current = setTimeout(() => {
      setHovered({ id, x, y });
    }, 400);
  };

  const handleHoverEnd = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setHovered(null);
  };

  return (
    <section className="relative w-full py-28 bg-white flex flex-col items-center text-black overflow-hidden">
      <div className="relative w-full flex justify-center" ref={containerRef}>
        <HumanBody
          className="w-[550px] cursor-pointer"
          onRegionHoverStart={(id, e) => handleHoverStart(id, e)}
          onRegionHoverEnd={handleHoverEnd}
        />

        {/* Floating Info Panel */}
        {hovered && (
          <div
            className="absolute bg-white/80 backdrop-blur-xl border border-[#43A047]/40 rounded-xl shadow-[0_0_40px_rgba(67,160,71,0.3)] px-5 py-3 opacity-0 animate-[fadeIn_0.3s_ease_forwards]"
            style={{
              top: hovered.y - 60,
              left: hovered.x + 20,
              transform: "translate(-50%, -50%)",
              minWidth: "180px",
              zIndex: 50,
            }}
          >
            <h3 className="text-lg font-semibold text-[#43A047] capitalize drop-shadow-[0_0_6px_rgba(67,160,71,0.5)]">
              {hovered.id.replace(/[-_]/g, " ")}
            </h3>
          </div>
        )}
      </div>
    </section>
  );
}
