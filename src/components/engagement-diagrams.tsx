/* ─── Engagement shape diagrams ─── */
/* Show how each engagement type works structurally.
   Cream/gold on dark, readable, architectural style. */

const C = "rgba(232,230,227,0.75)";
const CM = "rgba(232,230,227,0.45)";
const CL = "rgba(232,230,227,0.2)";
const G = "rgba(196,154,108,0.7)";
const GL = "rgba(196,154,108,0.35)";
const D = "rgba(17,17,22,0.5)";

/* ═══ Advisory — pulse rhythm between two nodes ═══ */
export function AdvisoryDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 120" className={className} fill="none">
      {/* You */}
      <rect x="20" y="35" width="80" height="50" rx="2" stroke={C} strokeWidth="0.8" fill={D} />
      <text x="60" y="57" fill={C} fontSize="9" fontFamily="var(--font-sans), system-ui" textAnchor="middle">Your team</text>
      <text x="60" y="72" fill={CM} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">decisions · execution</text>

      {/* Us */}
      <rect x="300" y="35" width="80" height="50" rx="2" stroke={G} strokeWidth="0.8" fill={D} />
      <text x="340" y="57" fill={G} fontSize="9" fontFamily="var(--font-sans), system-ui" textAnchor="middle">Advisor</text>
      <text x="340" y="72" fill={GL} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">judgment · pattern</text>

      {/* Biweekly pulse — scheduled calls */}
      {[140, 180, 220, 260].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="48" r={i % 2 === 0 ? 4 : 2.5} stroke={G} strokeWidth="0.6" fill={i % 2 === 0 ? GL : "transparent"} />
          {i < 3 && <line x1={x + (i % 2 === 0 ? 4 : 2.5)} y1="48" x2={x + 40 - (i % 2 !== 0 ? 4 : 2.5)} y2="48" stroke={GL} strokeWidth="0.4" />}
        </g>
      ))}
      <text x="200" y="38" fill={GL} fontSize="6" fontFamily="var(--font-sans), system-ui" textAnchor="middle">biweekly call</text>

      {/* Async channel — below */}
      <line x1="105" y1="72" x2="295" y2="72" stroke={CL} strokeWidth="0.5" strokeDasharray="4 4" />
      <text x="200" y="85" fill={CL} fontSize="6" fontFamily="var(--font-sans), system-ui" textAnchor="middle">async · Slack · email</text>

      {/* Hours annotation */}
      <text x="200" y="110" fill={CM} fontSize="7" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        2–5 hours / month
      </text>
    </svg>
  );
}

/* ═══ Embedded — slotted into org structure ═══ */
export function EmbeddedDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 160" className={className} fill="none">
      {/* Founder node — top */}
      <rect x="155" y="10" width="90" height="32" rx="2" stroke={C} strokeWidth="0.8" fill={D} />
      <text x="200" y="30" fill={C} fontSize="8" fontFamily="var(--font-sans), system-ui" textAnchor="middle">Founder / CEO</text>

      {/* Fractional node — beside founder */}
      <rect x="280" y="10" width="100" height="32" rx="2" stroke={G} strokeWidth="0.8" fill={D} />
      <text x="330" y="25" fill={G} fontSize="8" fontFamily="var(--font-sans), system-ui" textAnchor="middle">Fractional</text>
      <text x="330" y="36" fill={GL} fontSize="6.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">2–3 days/week</text>

      {/* Dotted connection — peer level */}
      <line x1="245" y1="26" x2="280" y2="26" stroke={G} strokeWidth="0.6" strokeDasharray="3 3" />

      {/* Team nodes below */}
      {[
        { x: 60, label: "Product", sub: "reports to founder" },
        { x: 170, label: "Engineering", sub: "reports to founder" },
        { x: 290, label: "Ops / Finance", sub: "directed by fractional" },
      ].map((node) => (
        <g key={node.label}>
          <rect x={node.x - 45} y="75" width="90" height="36" rx="2" stroke={node.label.includes("Ops") ? G : CM} strokeWidth={node.label.includes("Ops") ? "0.7" : "0.5"} fill={D} />
          <text x={node.x} y="91" fill={node.label.includes("Ops") ? G : CM} fontSize="7.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{node.label}</text>
          <text x={node.x} y="103" fill={CL} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{node.sub}</text>
        </g>
      ))}

      {/* Lines from founder to teams */}
      <line x1="200" y1="42" x2="60" y2="75" stroke={CM} strokeWidth="0.4" />
      <line x1="200" y1="42" x2="170" y2="75" stroke={CM} strokeWidth="0.4" />
      {/* Line from fractional to ops */}
      <line x1="330" y1="42" x2="290" y2="75" stroke={G} strokeWidth="0.5" />

      {/* Standup / cadence markers */}
      <text x="200" y="135" fill={CM} fontSize="6" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.06em">
        standups · leadership meetings · vendor reviews · hiring pipeline
      </text>

      {/* Hours */}
      <text x="200" y="152" fill={CM} fontSize="7" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        10–15 hours / week
      </text>
    </svg>
  );
}

/* ═══ Project — timeline with scope boundary ═══ */
export function ProjectDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 120" className={className} fill="none">
      {/* Timeline base */}
      <line x1="30" y1="55" x2="370" y2="55" stroke={CL} strokeWidth="0.5" />

      {/* SOW boundary — dashed rectangle around the project */}
      <rect x="45" y="20" width="260" height="70" rx="3" stroke={G} strokeWidth="0.7" strokeDasharray="5 3" fill="rgba(196,154,108,0.02)" />
      <text x="55" y="34" fill={GL} fontSize="6" fontFamily="var(--font-sans), system-ui" letterSpacing="0.06em">SCOPE</text>

      {/* Phase nodes */}
      {[
        { x: 75, label: "Define", sub: "week 1–2" },
        { x: 155, label: "Build", sub: "week 3–8" },
        { x: 235, label: "Deliver", sub: "week 9–10" },
      ].map((phase) => (
        <g key={phase.label}>
          <circle cx={phase.x} cy="55" r="12" stroke={C} strokeWidth="0.7" fill={D} />
          <text x={phase.x} y="58" fill={C} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{phase.label}</text>
          <text x={phase.x} y="80" fill={CL} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{phase.sub}</text>
        </g>
      ))}

      {/* Arrows between phases */}
      <line x1="87" y1="55" x2="143" y2="55" stroke={CM} strokeWidth="0.5" />
      <line x1="167" y1="55" x2="223" y2="55" stroke={CM} strokeWidth="0.5" />

      {/* Handoff / convert point — outside scope boundary */}
      <circle cx="340" cy="55" r="12" stroke={GL} strokeWidth="0.7" fill={D} />
      <text x="340" y="52" fill={GL} fontSize="6" fontFamily="var(--font-sans), system-ui" textAnchor="middle">Retain</text>
      <text x="340" y="62" fill={GL} fontSize="6" fontFamily="var(--font-sans), system-ui" textAnchor="middle">or exit</text>
      <line x1="247" y1="55" x2="328" y2="55" stroke={GL} strokeWidth="0.4" strokeDasharray="3 3" />

      {/* Duration */}
      <text x="200" y="108" fill={CM} fontSize="7" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        60–90 days · defined deliverable
      </text>
    </svg>
  );
}

/* ═══ Build & Transition — intensity arc with crossover ═══ */
export function TransitionDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 140" className={className} fill="none">
      {/* Time axis */}
      <line x1="40" y1="100" x2="370" y2="100" stroke={CL} strokeWidth="0.5" />
      {/* Intensity axis */}
      <line x1="40" y1="20" x2="40" y2="100" stroke={CL} strokeWidth="0.5" />

      {/* Axis labels */}
      <text x="36" y="18" fill={CL} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="end">intensity</text>
      <text x="375" y="100" fill={CL} fontSize="5.5" fontFamily="var(--font-sans), system-ui">time</text>

      {/* Fractional involvement — starts high, tapers */}
      <path d="M50 30 C100 30 140 35 180 45 S260 70 320 90 L360 95" stroke={G} strokeWidth="1.2" />
      <text x="90" y="25" fill={G} fontSize="7" fontFamily="var(--font-sans), system-ui">fractional</text>

      {/* Permanent hire — starts at zero, ramps up */}
      <path d="M200 95 C230 90 260 75 290 55 S330 35 360 30" stroke={C} strokeWidth="1" />
      <text x="330" y="25" fill={C} fontSize="7" fontFamily="var(--font-sans), system-ui">permanent hire</text>

      {/* Crossover point */}
      <circle cx="275" cy="62" r="4" stroke={G} strokeWidth="0.7" fill={D} />
      <line x1="275" y1="66" x2="275" y2="100" stroke={GL} strokeWidth="0.4" strokeDasharray="3 3" />
      <text x="275" y="112" fill={GL} fontSize="6" fontFamily="var(--font-sans), system-ui" textAnchor="middle">handoff</text>

      {/* Phase labels along bottom */}
      <text x="100" y="112" fill={CM} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">build function</text>
      <text x="190" y="112" fill={CM} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">hire team</text>
      <text x="340" y="112" fill={CM} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">advisory</text>

      {/* Duration */}
      <text x="200" y="135" fill={CM} fontSize="7" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        6–12 months · the full arc
      </text>
    </svg>
  );
}
