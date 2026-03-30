"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

/* ─── Line data ─── */

const STRATA_LINES = [
  { y: 250, offset: 5 },
  { y: 350, offset: -3 },
  { y: 450, offset: 5 },
  { y: 550, offset: -3 },
  { y: 650, offset: 5 },
  { y: 750, offset: -3 },
];

const DIAMOND_SEGMENTS = [
  { cx: 800, cy: 400 },
  { cx: 600, cy: 400 },
];

/* ─── Inscription zones: hidden text + cracks revealed on dwell ─── */

// Words from languages that shaped commerce, governance, and building
// Each zone has: position, crack paths, inscription text, and a kintsugi repair line
const INSCRIPTION_ZONES = [
  {
    cx: 320, cy: 240, radius: 200,
    text: "fundamentum",
    textX: 280, textY: 248,
    cracks: ["M290 225 L298 238 L305 248", "M308 232 L302 244"],
    repair: "M298 238 L305 248",
  },
  {
    cx: 1050, cy: 350, radius: 190,
    text: "pietra angolare",
    textX: 995, textY: 358,
    cracks: ["M1030 335 L1038 348 L1045 355", "M1048 340 L1040 352"],
    repair: "M1038 348 L1045 355",
  },
  {
    cx: 400, cy: 550, radius: 180,
    text: "θεμέλιος",
    textX: 368, textY: 558,
    cracks: ["M382 538 L389 550 L396 558", "M398 542 L392 554"],
    repair: "M389 550 L396 558",
  },
  {
    cx: 700, cy: 450, radius: 190,
    text: "grondslag",
    textX: 666, textY: 458,
    cracks: ["M680 435 L688 448 L696 455", "M698 440 L690 452"],
    repair: "M688 448 L696 455",
  },
  {
    cx: 1100, cy: 180, radius: 180,
    text: "أساس",
    textX: 1082, textY: 188,
    cracks: ["M1088 168 L1094 178 L1100 185", "M1096 172 L1090 182"],
    repair: "M1094 178 L1100 185",
  },
  {
    cx: 800, cy: 680, radius: 180,
    text: "礎石",
    textX: 786, textY: 688,
    cracks: ["M790 668 L796 678 L802 685", "M800 672 L794 682"],
    repair: "M796 678 L802 685",
  },
];

/* ─── Component ─── */

export function GeometricHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const cornerRefs = useRef<(SVGPathElement | null)[]>([]);
  const zoneGroupRefs = useRef<(SVGGElement | null)[]>([]);
  const rafId = useRef<number>(0);

  // Dwell tracking
  const dwellPos = useRef({ x: 0, y: 0 });
  const dwellStart = useRef(0);
  const dwellTimerId = useRef<ReturnType<typeof setInterval>>(0 as unknown as ReturnType<typeof setInterval>);
  const activeZones = useRef<Set<number>>(new Set());
  const DWELL_RADIUS = 120;
  const DWELL_TIME = 600; // cracks start fast, text follows

  /* ── Dwell checker: runs on interval while cursor is in hero ── */
  const checkDwell = useCallback(() => {
    const now = Date.now();
    const elapsed = now - dwellStart.current;
    if (elapsed < DWELL_TIME) return;

    // Progressive reveal — ramp up faster
    const dwellStrength = Math.min(1, (elapsed - DWELL_TIME) / 1200);

    INSCRIPTION_ZONES.forEach((zone, i) => {
      const dx = dwellPos.current.x - zone.cx;
      const dy = dwellPos.current.y - zone.cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const g = zoneGroupRefs.current[i];
      if (!g) return;

      if (dist < zone.radius) {
        // Within range — reveal
        if (!activeZones.current.has(i)) {
          activeZones.current.add(i);
        }
        const zoneStrength = Math.min(1, dwellStrength * (1 - dist / zone.radius) * 2);
        g.style.opacity = String(zoneStrength);

        // Stagger: cracks appear early + subtle, text fades in after, repair last
        const children = g.children;
        for (let c = 0; c < children.length; c++) {
          const child = children[c] as SVGElement;
          const role = child.getAttribute("data-role");
          if (role === "crack") {
            // Early, subtle — max out at ~0.6 so they stay hairline
            child.style.opacity = String(Math.min(0.6, zoneStrength * 3));
          } else if (role === "text") {
            // Delayed but high contrast when it lands
            child.style.opacity = String(Math.min(1, Math.max(0, zoneStrength - 0.3) * 2.5));
          } else if (role === "repair") {
            child.style.opacity = String(Math.min(1, Math.max(0, zoneStrength - 0.5) * 3));
          }
        }
      } else if (activeZones.current.has(i)) {
        // Out of range — fade out slowly
        const current = parseFloat(g.style.opacity || "0");
        const next = current * 0.92;
        if (next < 0.01) {
          g.style.opacity = "0";
          activeZones.current.delete(i);
        } else {
          g.style.opacity = String(next);
        }
      }
    });
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;
      const svgX = nx * 1400;
      const svgY = ny * 900;

      // Check if cursor drifted too far — reset dwell timer
      const dx = svgX - dwellPos.current.x;
      const dy = svgY - dwellPos.current.y;
      if (Math.sqrt(dx * dx + dy * dy) > DWELL_RADIUS) {
        dwellPos.current = { x: svgX, y: svgY };
        dwellStart.current = Date.now();
      }

      // Cursor glow
      if (glowRef.current) {
        glowRef.current.style.left = `${nx * 100}%`;
        glowRef.current.style.top = `${ny * 100}%`;
        glowRef.current.style.opacity = "1";
      }

      // Strata lines
      lineRefs.current.forEach((line, i) => {
        if (!line) return;
        const lineY = STRATA_LINES[i].y;
        const dist = Math.abs(svgY - lineY);
        const proximity = Math.max(0, 1 - dist / 200);
        const opacity = 0.015 + proximity * proximity * 0.105;
        line.setAttribute("stroke", `rgba(196,154,108,${opacity})`);
        line.setAttribute("stroke-width", String(1 + proximity * 1.5));
      });

      // Diamond paths
      pathRefs.current.forEach((path, i) => {
        if (!path) return;
        const seg = DIAMOND_SEGMENTS[i];
        const d = Math.sqrt((svgX - seg.cx) ** 2 + (svgY - seg.cy) ** 2);
        const p = Math.max(0, 1 - d / 500);
        path.setAttribute("stroke", `rgba(196,154,108,${0.05 + p * p * 0.1})`);
      });

      // Corner accents
      cornerRefs.current.forEach((path, i) => {
        if (!path) return;
        const cx = i === 0 ? 150 : 1250;
        const cy = i === 0 ? 150 : 750;
        const d = Math.sqrt((svgX - cx) ** 2 + (svgY - cy) ** 2);
        const p = Math.max(0, 1 - d / 400);
        path.setAttribute("stroke", `rgba(196,154,108,${0.07 + p * p * 0.2})`);
        path.setAttribute("stroke-width", String(1 + p * 0.5));
      });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    dwellStart.current = Date.now() + 99999; // disable dwell

    if (glowRef.current) glowRef.current.style.opacity = "0";

    lineRefs.current.forEach((l) => {
      if (!l) return;
      l.setAttribute("stroke", "rgba(232,230,227,0.015)");
      l.setAttribute("stroke-width", "1");
    });
    pathRefs.current.forEach((p) => {
      if (!p) return;
      p.setAttribute("stroke", "rgba(196,154,108,0.05)");
    });
    cornerRefs.current.forEach((p) => {
      if (!p) return;
      p.setAttribute("stroke", "rgba(196,154,108,0.07)");
      p.setAttribute("stroke-width", "1");
    });

    // Fade out all inscription zones
    zoneGroupRefs.current.forEach((g) => {
      if (g) g.style.opacity = "0";
    });
    activeZones.current.clear();
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    // Dwell check interval — 60fps-ish
    dwellTimerId.current = setInterval(checkDwell, 50);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId.current);
      clearInterval(dwellTimerId.current);
    };
  }, [handleMouseMove, handleMouseLeave, checkDwell]);

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
        {/* Deep strata layers */}
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

        {/* Architectural structural lines */}
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

        {/* Horizontal strata lines */}
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

        {/* Corner accents */}
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

        {/* ═══ Inscription zones — revealed on dwell ═══ */}
        {INSCRIPTION_ZONES.map((zone, i) => (
          <g
            key={i}
            ref={(el) => { zoneGroupRefs.current[i] = el; }}
            style={{ opacity: 0, transition: "opacity 0.4s ease-out" }}
          >
            {/* Hairline cracks — small, subtle */}
            {zone.cracks.map((d, j) => (
              <path
                key={`crack-${j}`}
                d={d}
                stroke="rgba(232,230,227,0.12)"
                strokeWidth="0.5"
                strokeLinecap="round"
                data-role="crack"
                style={{ opacity: 0, transition: "opacity 0.4s ease-out" }}
              />
            ))}

            {/* Gold repair */}
            <path
              d={zone.repair}
              stroke="rgba(196,154,108,0.55)"
              strokeWidth="1"
              strokeLinecap="round"
              data-role="repair"
              style={{ opacity: 0, transition: "opacity 0.8s ease-out" }}
            />

            {/* Inscription — high contrast */}
            <text
              x={zone.textX}
              y={zone.textY}
              fill="rgba(232,230,227,0.85)"
              fontSize="17"
              fontFamily="var(--font-humanist), Georgia, serif"
              fontStyle="italic"
              data-role="text"
              style={{ opacity: 0, transition: "opacity 0.6s ease-out" }}
            >
              {zone.text}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ─── Strata divider ─── */
export function StrataDivider() {
  return (
    <div className="relative h-24 md:h-32 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M0 80 C360 70 720 90 1080 75 S1440 85 1440 85 L1440 120 L0 120Z" fill="rgba(40,40,50,0.15)" />
        <path d="M0 60 C240 55 600 70 960 58 S1200 65 1440 60 L1440 120 L0 120Z" fill="rgba(26,26,33,0.1)" />
        <path d="M0 95 C480 88 840 100 1200 92 S1440 98 1440 98 L1440 120 L0 120Z" fill="rgba(17,17,22,0.2)" />
      </svg>
    </div>
  );
}

/* ─── Section backgrounds ─── */
export function GeometricSection({
  variant = "lines",
}: {
  variant?: "lines" | "grid" | "diamond" | "strata";
}) {
  if (variant === "strata") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice" fill="none">
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
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice" fill="none">
          <path d="M700 50 L1050 300 L700 550 L350 300 Z" stroke="rgba(196,154,108,1)" strokeWidth="1" />
          <path d="M700 100 L1000 300 L700 500 L400 300 Z" stroke="rgba(232,230,227,1)" strokeWidth="0.5" />
        </svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice" fill="none">
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1="0" y1={120 * i + 60} x2="1400" y2={120 * i + 60} stroke="rgba(232,230,227,1)" strokeWidth="0.5" />
        ))}
      </svg>
    </div>
  );
}
