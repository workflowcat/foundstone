"use client";

import { motion } from "framer-motion";

export function GeometricHero() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Geological strata — cool stone tones */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Deep strata layers — subtle, cool-toned */}
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
          d="M700 100 L900 300 L900 700 L700 900"
          stroke="rgba(196,154,108,0.05)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M700 100 L500 300 L500 700 L700 900"
          stroke="rgba(196,154,108,0.05)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Horizontal strata lines — like geological cross-section */}
        {[250, 350, 450, 550, 650, 750].map((y, i) => (
          <motion.line
            key={y}
            x1="200"
            y1={y}
            x2="1200"
            y2={y + (i % 2 === 0 ? 5 : -3)}
            stroke="rgba(232,230,227,0.015)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              delay: 0.5 + i * 0.15,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Corner accents */}
        <motion.path
          d="M100 100 L200 100 L200 200"
          stroke="rgba(196,154,108,0.07)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        <motion.path
          d="M1300 800 L1200 800 L1200 700"
          stroke="rgba(196,154,108,0.07)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />
      </svg>

      {/* Ambient glow — slightly cooler */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(196,154,108,0.03) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

/* Strata divider — used between sections */
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
          {/* Geological layer lines */}
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
