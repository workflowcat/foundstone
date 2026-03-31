"use client";

import { useState } from "react";

const S = "rgba(232,230,227,0.8)";
const SM = "rgba(232,230,227,0.55)";
const SL = "rgba(232,230,227,0.35)";
const SF = "rgba(139,115,85,0.2)";
const G = "rgba(196,154,108,0.8)";
const GL = "rgba(196,154,108,0.45)";

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
      <rect x="170" y="16" width="200" height="38" rx="2" stroke={S} strokeWidth="1" fill="rgba(17,17,22,0.5)" />
      <text x="270" y="31" fill={S} fontSize="10" fontFamily="var(--font-humanist), Georgia, serif" textAnchor="middle">Foundstone Capital</text>
      <text x="270" y="44" fill={SL} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.08em">HE 483648 · CYPRUS</text>

      {/* Shared functions layer */}
      <rect x="30" y="82" width="480" height="50" rx="2" stroke={G} strokeWidth="0.8" fill="rgba(196,154,108,0.04)" />
      <text x="270" y="98" fill={G} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.12em">SHARED OPERATIONAL INFRASTRUCTURE</text>

      {/* Function labels inside the layer */}
      {sharedFunctions.map((fn, i) => (
        <text key={fn} x={60 + i * 78} y="120" fill={SM} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">
          {fn}
        </text>
      ))}

      {/* Lines from Foundstone to shared layer */}
      <line x1="270" y1="54" x2="270" y2="82" stroke={SM} strokeWidth="0.8" />

      {/* Portfolio entities — bottom */}
      {entities.map((ent, i) => (
        <g key={i}>
          {/* Line from shared layer to entity */}
          <line x1={ent.x} y1="130" x2={ent.x} y2="170" stroke={SL} strokeWidth="0.5" />

          {/* Entity box */}
          <rect x={ent.x - 44} y="170" width="88" height="46" rx="2" stroke={SM} strokeWidth="0.8" fill="rgba(17,17,22,0.4)" />
          <text x={ent.x} y="191" fill={S} fontSize="9" fontFamily="var(--font-humanist), Georgia, serif" textAnchor="middle">
            {ent.label}
          </text>
          <text x={ent.x} y="206" fill={SL} fontSize="6.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.06em">
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

/* ═══ Portfolio entity icons — inline with article sections ═══ */

const IS = "rgba(232,230,227,0.7)";
const IL = "rgba(232,230,227,0.35)";
const IG = "rgba(196,154,108,0.6)";

export function IconDataAPI({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      {/* Data flow lines */}
      <path d="M8 20 L28 32 L8 44" stroke={IL} strokeWidth="0.8" />
      <path d="M8 14 L28 32 L8 50" stroke={IL} strokeWidth="0.5" />
      {/* Central processing node */}
      <circle cx="32" cy="32" r="6" stroke={IS} strokeWidth="1" />
      <circle cx="32" cy="32" r="2" fill={IG} />
      {/* Output streams */}
      <line x1="38" y1="28" x2="56" y2="16" stroke={IS} strokeWidth="0.7" />
      <line x1="38" y1="32" x2="56" y2="32" stroke={IS} strokeWidth="0.7" />
      <line x1="38" y1="36" x2="56" y2="48" stroke={IS} strokeWidth="0.7" />
      {/* Endpoint dots */}
      <circle cx="56" cy="16" r="2" stroke={IG} strokeWidth="0.6" />
      <circle cx="56" cy="32" r="2" stroke={IG} strokeWidth="0.6" />
      <circle cx="56" cy="48" r="2" stroke={IG} strokeWidth="0.6" />
    </svg>
  );
}

export function IconGeocode({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      {/* Globe outline */}
      <circle cx="32" cy="32" r="20" stroke={IS} strokeWidth="0.8" />
      {/* Meridians */}
      <ellipse cx="32" cy="32" rx="10" ry="20" stroke={IL} strokeWidth="0.5" />
      <ellipse cx="32" cy="32" rx="18" ry="20" stroke={IL} strokeWidth="0.3" />
      {/* Parallels */}
      <ellipse cx="32" cy="32" rx="20" ry="7" stroke={IL} strokeWidth="0.4" />
      <ellipse cx="32" cy="24" rx="18" ry="5" stroke={IL} strokeWidth="0.3" />
      <ellipse cx="32" cy="40" rx="18" ry="5" stroke={IL} strokeWidth="0.3" />
      {/* Pin */}
      <path d="M38 26 L38 20 Q38 16 42 16 Q46 16 46 20 L46 26 L42 32 Z" stroke={IG} strokeWidth="0.8" />
      <circle cx="42" cy="21" r="2" fill={IG} />
    </svg>
  );
}

export function IconSaaS({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      {/* Stacked layers — platform */}
      <path d="M12 36 L32 44 L52 36 L32 28 Z" stroke={IS} strokeWidth="0.7" />
      <path d="M12 30 L32 38 L52 30 L32 22 Z" stroke={IL} strokeWidth="0.6" />
      <path d="M12 24 L32 32 L52 24 L32 16 Z" stroke={IL} strokeWidth="0.5" />
      {/* Recurring arrow */}
      <path d="M32 48 Q24 48 20 44" stroke={IG} strokeWidth="0.7" />
      <path d="M22 42 L20 44 L22 46" stroke={IG} strokeWidth="0.6" />
      <path d="M32 48 Q40 48 44 44" stroke={IG} strokeWidth="0.7" />
      <path d="M42 42 L44 44 L42 46" stroke={IG} strokeWidth="0.6" />
    </svg>
  );
}

export function IconConsulting({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      {/* Two figures — consulting relationship */}
      {/* Person 1 */}
      <circle cx="22" cy="22" r="5" stroke={IS} strokeWidth="0.8" />
      <path d="M14 40 L22 32 L30 40" stroke={IS} strokeWidth="0.7" />
      {/* Person 2 */}
      <circle cx="42" cy="22" r="5" stroke={IL} strokeWidth="0.7" />
      <path d="M34 40 L42 32 L50 40" stroke={IL} strokeWidth="0.6" />
      {/* Connection / exchange */}
      <path d="M28 25 L36 25" stroke={IG} strokeWidth="0.7" strokeDasharray="2 2" />
      <path d="M28 28 L36 28" stroke={IG} strokeWidth="0.5" strokeDasharray="2 2" />
      {/* Document */}
      <rect x="24" y="44" width="16" height="12" rx="1" stroke={IL} strokeWidth="0.5" />
      <line x1="27" y1="48" x2="37" y2="48" stroke={IL} strokeWidth="0.3" />
      <line x1="27" y1="51" x2="37" y2="51" stroke={IL} strokeWidth="0.3" />
    </svg>
  );
}

export function IconManufacturing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      {/* Gear */}
      <circle cx="24" cy="28" r="10" stroke={IS} strokeWidth="0.7" />
      <circle cx="24" cy="28" r="5" stroke={IS} strokeWidth="0.5" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * 45 * Math.PI) / 180;
        return (
          <line key={i} x1={24 + 6 * Math.cos(a)} y1={28 + 6 * Math.sin(a)} x2={24 + 9.5 * Math.cos(a)} y2={28 + 9.5 * Math.sin(a)} stroke={IS} strokeWidth="0.6" />
        );
      })}
      {/* Component / circuit board trace */}
      <path d="M38 20 L46 20 L46 28 L54 28" stroke={IG} strokeWidth="0.7" />
      <path d="M38 28 L42 28 L42 36 L54 36" stroke={IG} strokeWidth="0.5" />
      <circle cx="38" cy="20" r="1.5" fill={IG} />
      <circle cx="54" cy="28" r="1.5" fill={IG} />
      <circle cx="38" cy="28" r="1.5" fill={IG} />
      <circle cx="54" cy="36" r="1.5" fill={IG} />
      {/* Base / conveyor */}
      <line x1="10" y1="48" x2="54" y2="48" stroke={IL} strokeWidth="0.6" />
      <line x1="10" y1="44" x2="54" y2="44" stroke={IL} strokeWidth="0.4" />
    </svg>
  );
}

export function IconHolding({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      {/* Keystone arch */}
      <path d="M10 52 L10 28 Q32 8 54 28 L54 52" stroke={IS} strokeWidth="0.8" />
      {/* Keystone */}
      <path d="M28 14 L32 10 L36 14 L34 22 L30 22 Z" stroke={IG} strokeWidth="0.7" />
      {/* Pillars */}
      <rect x="12" y="38" width="8" height="14" stroke={IL} strokeWidth="0.5" />
      <rect x="44" y="38" width="8" height="14" stroke={IL} strokeWidth="0.5" />
      {/* Foundation line */}
      <line x1="6" y1="52" x2="58" y2="52" stroke={IS} strokeWidth="0.6" />
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
