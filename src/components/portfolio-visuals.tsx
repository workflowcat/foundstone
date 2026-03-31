"use client";

import { useState } from "react";

const S = "rgba(139,115,85,0.85)";
const SM = "rgba(139,115,85,0.55)";
const SL = "rgba(139,115,85,0.32)";
const SF = "rgba(139,115,85,0.14)";
const G = "rgba(196,154,108,0.6)";
const GL = "rgba(196,154,108,0.3)";

/* ═══ Group Structure Map ═══ */
export function GroupStructure({ className = "" }: { className?: string }) {
  const entities = [
    { x: 55, label: "Data APIs", sub: "Estonia" },
    { x: 155, label: "Geocoding", sub: "Estonia" },
    { x: 265, label: "SaaS", sub: "EST · CYP" },
    { x: 375, label: "Consulting", sub: "CYP · UKR" },
    { x: 485, label: "Hardware", sub: "Ukraine" },
  ];

  const sharedFunctions = [
    "Finance", "Compliance", "People", "Vendors", "Governance", "Reporting",
  ];

  return (
    <svg viewBox="0 0 540 320" className={className} fill="none">
      {/* Foundstone Capital — top */}
      <rect x="170" y="16" width="200" height="36" rx="2" stroke={S} strokeWidth="0.8" fill="rgba(17,17,22,0.4)" />
      <text x="270" y="30" fill={S} fontSize="8" fontFamily="var(--font-humanist), Georgia, serif" textAnchor="middle">Foundstone Capital</text>
      <text x="270" y="42" fill={SL} fontSize="6" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.08em">HE 483648 · CYPRUS</text>

      {/* Shared functions layer */}
      <rect x="30" y="80" width="480" height="50" rx="2" stroke={G} strokeWidth="0.7" fill="rgba(196,154,108,0.03)" />
      <text x="270" y="95" fill={GL} fontSize="6" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.12em">SHARED OPERATIONAL INFRASTRUCTURE</text>

      {/* Function labels inside the layer */}
      {sharedFunctions.map((fn, i) => (
        <text key={fn} x={60 + i * 78} y="116" fill={SL} fontSize="6.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">
          {fn}
        </text>
      ))}

      {/* Lines from Foundstone to shared layer */}
      <line x1="270" y1="52" x2="270" y2="80" stroke={SM} strokeWidth="0.6" />

      {/* Portfolio entities — bottom */}
      {entities.map((ent, i) => (
        <g key={i}>
          {/* Line from shared layer to entity */}
          <line x1={ent.x} y1="130" x2={ent.x} y2="170" stroke={SL} strokeWidth="0.5" />

          {/* Entity box */}
          <rect x={ent.x - 42} y="170" width="84" height="44" rx="2" stroke={SM} strokeWidth="0.6" fill="rgba(17,17,22,0.3)" />
          <text x={ent.x} y="190" fill={SM} fontSize="7.5" fontFamily="var(--font-humanist), Georgia, serif" textAnchor="middle">
            {ent.label}
          </text>
          <text x={ent.x} y="204" fill={SF} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.06em">
            {ent.sub}
          </text>
        </g>
      ))}

      {/* Operational profile dots beneath each entity */}
      {entities.map((ent, i) => {
        // Each entity gets a mini profile: margin sensitivity, regulatory, team size
        const profiles = [
          [3, 2, 4, 3], // Data APIs: high volume, moderate reg, larger team, high infra
          [4, 1, 2, 4], // Geocoding: very sensitive margins, low reg, small team, high infra
          [2, 1, 2, 1], // SaaS: moderate margin, low reg, small team, low infra
          [1, 2, 3, 1], // Consulting: low margin sensitivity, moderate reg, medium team, low infra
          [2, 4, 2, 3], // Hardware: moderate margin, high reg, small team, moderate infra
        ];
        const dims = ["margin", "regulatory", "team", "infrastructure"];
        const p = profiles[i];

        return (
          <g key={`profile-${i}`}>
            {p.map((val, j) => (
              <g key={j}>
                {/* Dot row */}
                {Array.from({ length: 4 }).map((_, k) => (
                  <circle
                    key={k}
                    cx={ent.x - 15 + k * 10}
                    cy={230 + j * 12}
                    r="2.5"
                    stroke={k < val ? G : SF}
                    strokeWidth="0.5"
                    fill={k < val ? GL : "transparent"}
                  />
                ))}
                {/* Dim label */}
                <text x={ent.x + 22} y={233 + j * 12} fill={SF} fontSize="4.5" fontFamily="var(--font-sans), system-ui">
                  {dims[j]}
                </text>
              </g>
            ))}
          </g>
        );
      })}

      {/* Construction lines */}
      <line x1="270" y1="5" x2="270" y2="315" stroke={SF} strokeWidth="0.2" strokeDasharray="4 6" />
    </svg>
  );
}

/* ═══ Duplication Calculator ═══ */
const FUNCTIONS = [
  { name: "Bank relationship", perEntity: 15, unit: "hrs/quarter" },
  { name: "Compliance documentation", perEntity: 40, unit: "hrs/year" },
  { name: "Payroll administration", perEntity: 8, unit: "hrs/month" },
  { name: "Vendor contracts", perEntity: 20, unit: "hrs/year" },
  { name: "Management reporting", perEntity: 12, unit: "hrs/month" },
  { name: "Corporate governance", perEntity: 10, unit: "hrs/quarter" },
];

export function DuplicationCalculator({ className = "" }: { className?: string }) {
  const [entities, setEntities] = useState(3);

  const totalDuplicated = FUNCTIONS.reduce((sum, fn) => sum + fn.perEntity * (entities - 1), 0);

  return (
    <div className={`border border-white/[0.06] bg-stone-900/30 p-6 md:p-8 ${className}`}>
      <p className="text-xs tracking-[0.2em] uppercase text-stone-600 mb-6">
        Duplication calculator
      </p>

      <div className="mb-8">
        <p className="text-stone-400 text-sm mb-3">
          How many legal entities do you operate?
        </p>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="1"
            max="8"
            value={entities}
            onChange={(e) => setEntities(Number(e.target.value))}
            className="flex-1 h-1 bg-stone-800 rounded appearance-none cursor-pointer accent-amber"
            style={{ accentColor: "rgb(196,154,108)" }}
          />
          <span className="font-mono text-2xl text-cream w-8 text-right">{entities}</span>
        </div>
      </div>

      {entities > 1 && (
        <>
          <div className="space-y-3 mb-8">
            {FUNCTIONS.map((fn) => {
              const duplicated = fn.perEntity * (entities - 1);
              const barWidth = Math.min(100, (duplicated / 80) * 100);
              return (
                <div key={fn.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-stone-500">{fn.name}</span>
                    <span className="text-stone-600">
                      {duplicated > 0 ? `+${duplicated} ${fn.unit} duplicated` : "—"}
                    </span>
                  </div>
                  <div className="h-1 bg-stone-800 rounded overflow-hidden">
                    <div
                      className="h-full rounded transition-all duration-300"
                      style={{
                        width: `${barWidth}%`,
                        background: "rgba(196,154,108,0.4)",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/[0.04]">
            <p className="text-stone-500 text-sm">
              With <span className="text-cream">{entities}</span> entities
              and no shared infrastructure, you are duplicating approximately{" "}
              <span className="text-amber/70 font-mono">{totalDuplicated}</span>{" "}
              hours of operational work per cycle across these six functions
              alone.
            </p>
            {entities >= 3 && (
              <p className="text-stone-600 text-xs mt-3">
                This is a rough estimate. The actual number depends on
                jurisdiction complexity, entity type, and how differently
                each one is set up. In our experience, the real number
                is higher.
              </p>
            )}
          </div>
        </>
      )}

      {entities === 1 && (
        <p className="text-stone-600 text-sm">
          With one entity, nothing is duplicated. The shared
          infrastructure question starts at two.
        </p>
      )}
    </div>
  );
}
