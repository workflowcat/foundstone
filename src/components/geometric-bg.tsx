"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

/* ─── Interactive hero with cursor-reactive lines ─── */

// Line definitions for the strata cross-section
const STRATA_LINES = [
  { y: 250, offset: 5 },
  { y: 350, offset: -3 },
  { y: 450, offset: 5 },
  { y: 550, offset: -3 },
  { y: 650, offset: 5 },
  { y: 750, offset: -3 },
];

// Structural diamond paths — stored as center points for proximity calc
const DIAMOND_SEGMENTS = [
  { cx: 800, cy: 400, label: "right" },
  { cx: 600, cy: 400, label: "left" },
];

export function GeometricHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const cornerRefs = useRef<(SVGPathElement | null)[]>([]);
  const rafId = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      const container = containerRef.current;
      const svg = svgRef.current;
      if (!container || !svg) return;

      const rect = container.getBoundingClientRect();
      // Normalized 0-1 position within the container
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;

      // Map to SVG viewBox coordinates (1400x900)
      const svgX = nx * 1400;
      const svgY = ny * 900;

      // Move the ambient glow to follow cursor
      if (glowRef.current) {
        glowRef.current.style.left = `${nx * 100}%`;
        glowRef.current.style.top = `${ny * 100}%`;
        glowRef.current.style.opacity = "1";
      }

      // Strata lines — brighten based on vertical proximity
      lineRefs.current.forEach((line, i) => {
        if (!line) return;
        const lineY = STRATA_LINES[i].y;
        const dist = Math.abs(svgY - lineY);
        const proximity = Math.max(0, 1 - dist / 200); // 200 SVG units radius
        const baseOpacity = 0.015;
        const maxOpacity = 0.12;
        const opacity = baseOpacity + proximity * proximity * (maxOpacity - baseOpacity);
        const strokeWidth = 1 + proximity * 1.5;

        line.setAttribute("stroke", `rgba(196,154,108,${opacity})`);
        line.setAttribute("stroke-width", String(strokeWidth));
      });

      // Diamond structural paths — brighten based on distance to center
      pathRefs.current.forEach((path, i) => {
        if (!path) return;
        const seg = DIAMOND_SEGMENTS[i];
        const dx = svgX - seg.cx;
        const dy = svgY - seg.cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximity = Math.max(0, 1 - dist / 500);
        const opacity = 0.05 + proximity * proximity * 0.1;
        path.setAttribute("stroke", `rgba(196,154,108,${opacity})`);
      });

      // Corner accents — brighten when cursor is near corners
      cornerRefs.current.forEach((path, i) => {
        if (!path) return;
        // Corner 0: top-left (150, 150), Corner 1: bottom-right (1250, 750)
        const cx = i === 0 ? 150 : 1250;
        const cy = i === 0 ? 150 : 750;
        const dx = svgX - cx;
        const dy = svgY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximity = Math.max(0, 1 - dist / 400);
        const opacity = 0.07 + proximity * proximity * 0.2;
        path.setAttribute("stroke", `rgba(196,154,108,${opacity})`);
        path.setAttribute("stroke-width", String(1 + proximity * 0.5));
      });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    // Fade everything back to defaults
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
    lineRefs.current.forEach((line) => {
      if (!line) return;
      line.setAttribute("stroke", "rgba(232,230,227,0.015)");
      line.setAttribute("stroke-width", "1");
    });
    pathRefs.current.forEach((path) => {
      if (!path) return;
      path.setAttribute("stroke", "rgba(196,154,108,0.05)");
    });
    cornerRefs.current.forEach((path) => {
      if (!path) return;
      path.setAttribute("stroke", "rgba(196,154,108,0.07)");
      path.setAttribute("stroke-width", "1");
    });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ pointerEvents: "auto" }}
    >
      {/* Cursor-following ambient glow */}
      <div
        ref={glowRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(196,154,108,0.06) 0%, rgba(196,154,108,0.02) 40%, transparent 70%)",
          opacity: 0,
          transition: "opacity 0.6s ease-out",
        }}
      />

      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Deep strata layers — static geological fill */}
        <path
          d="M0 680 C280 660 560 690 840 670 S1120 685 1400 675 L1400 900 L0 900Z"
          fill="rgba(40,40,50,0.4)"
        />
        <path
          d="M0 730 C350 720 700 745 1050 725 S1400 740 1400 740 L1400 900 L0 900Z"
          fill="rgba(26,26,33,0.5)"
        />
        <path
          d="M0 790 C420 775 840 800 1260 785 S1400 795 1400 795 L1400 900 L0 900Z"
          fill="rgba(17,17,22,0.6)"
        />

        {/* Architectural structural lines — cursor-reactive */}
        <motion.path
          ref={(el) => { pathRefs.current[0] = el; }}
          d="M700 100 L900 300 L900 700 L700 900"
          stroke="rgba(196,154,108,0.05)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          style={{ transition: "stroke 0.3s ease-out" }}
        />
        <motion.path
          ref={(el) => { pathRefs.current[1] = el; }}
          d="M700 100 L500 300 L500 700 L700 900"
          stroke="rgba(196,154,108,0.05)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
          style={{ transition: "stroke 0.3s ease-out" }}
        />

        {/* Horizontal strata lines — cursor-reactive */}
        {STRATA_LINES.map((line, i) => (
          <motion.line
            key={line.y}
            ref={(el) => { lineRefs.current[i] = el; }}
            x1="200"
            y1={line.y}
            x2="1200"
            y2={line.y + line.offset}
            stroke="rgba(232,230,227,0.015)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              delay: 0.5 + i * 0.15,
              ease: "easeOut",
            }}
            style={{ transition: "stroke 0.25s ease-out, stroke-width 0.25s ease-out" }}
          />
        ))}

        {/* Corner accents — cursor-reactive */}
        <motion.path
          ref={(el) => { cornerRefs.current[0] = el; }}
          d="M100 100 L200 100 L200 200"
          stroke="rgba(196,154,108,0.07)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          style={{ transition: "stroke 0.3s ease-out, stroke-width 0.3s ease-out" }}
        />
        <motion.path
          ref={(el) => { cornerRefs.current[1] = el; }}
          d="M1300 800 L1200 800 L1200 700"
          stroke="rgba(196,154,108,0.07)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          style={{ transition: "stroke 0.3s ease-out, stroke-width 0.3s ease-out" }}
        />
      </svg>
    </div>
  );
}

/* ─── Strata divider between sections ─── */
export function StrataDivider() {
  return (
    <div className="relative h-24 md:h-32 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 80 C360 70 720 90 1080 75 S1440 85 1440 85 L1440 120 L0 120Z"
          fill="rgba(40,40,50,0.15)"
        />
        <path
          d="M0 60 C240 55 600 70 960 58 S1200 65 1440 60 L1440 120 L0 120Z"
          fill="rgba(26,26,33,0.1)"
        />
        <path
          d="M0 95 C480 88 840 100 1200 92 S1440 98 1440 98 L1440 120 L0 120Z"
          fill="rgba(17,17,22,0.2)"
        />
      </svg>
    </div>
  );
}

/* ─── Section background variants ─── */
export function GeometricSection({
  variant = "lines",
}: {
  variant?: "lines" | "grid" | "diamond" | "strata";
}) {
  if (variant === "strata") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1400 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {[100, 200, 300, 400, 500].map((y, i) => (
            <path
              key={y}
              d={`M0 ${y} C${350 + i * 20} ${y - 8 + i * 3} ${700 - i * 15} ${y + 5} ${1050 + i * 10} ${y - 3} S1400 ${y + 2} 1400 ${y + 2}`}
              stroke="rgba(232,230,227,0.02)"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === "diamond") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          viewBox="0 0 1400 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <path
            d="M700 50 L1050 300 L700 550 L350 300 Z"
            stroke="rgba(196,154,108,1)"
            strokeWidth="1"
          />
          <path
            d="M700 100 L1000 300 L700 500 L400 300 Z"
            stroke="rgba(232,230,227,1)"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        viewBox="0 0 1400 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="0"
            y1={120 * i + 60}
            x2="1400"
            y2={120 * i + 60}
            stroke="rgba(232,230,227,1)"
            strokeWidth="0.5"
          />
        ))}
      </svg>
    </div>
  );
}
