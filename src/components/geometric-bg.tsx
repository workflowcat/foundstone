"use client";

import { motion } from "framer-motion";

export function GeometricHero() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(250,250,248,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(250,250,248,1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Architectural lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Main structural form */}
        <motion.path
          d="M700 100 L900 300 L900 700 L700 900"
          stroke="rgba(201,151,91,0.06)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M700 100 L500 300 L500 700 L700 900"
          stroke="rgba(201,151,91,0.06)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Horizontal strata lines */}
        {[250, 350, 450, 550, 650, 750].map((y, i) => (
          <motion.line
            key={y}
            x1="300"
            y1={y}
            x2="1100"
            y2={y}
            stroke="rgba(250,250,248,0.02)"
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
          stroke="rgba(201,151,91,0.08)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        <motion.path
          d="M1300 800 L1200 800 L1200 700"
          stroke="rgba(201,151,91,0.08)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />
      </svg>

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,151,91,0.04) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

export function GeometricSection({ variant = "lines" }: { variant?: "lines" | "grid" | "diamond" }) {
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
            stroke="rgba(201,151,91,1)"
            strokeWidth="1"
          />
          <path
            d="M700 100 L1000 300 L700 500 L400 300 Z"
            stroke="rgba(250,250,248,1)"
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
            stroke="rgba(250,250,248,1)"
            strokeWidth="0.5"
          />
        ))}
      </svg>
    </div>
  );
}
