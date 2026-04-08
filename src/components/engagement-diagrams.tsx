/* ─── Engagement shape diagrams ─── */
/* Show how each engagement type works structurally.
   Cream/gold on dark, readable, architectural style. */

const C = "rgba(232,230,227,0.92)";
const CM = "rgba(232,230,227,0.68)";
const CL = "rgba(232,230,227,0.38)";
const G = "rgba(212,170,120,0.92)";
const GL = "rgba(212,170,120,0.5)";
const D = "rgba(14,14,20,0.85)";

/* ═══ Advisory — pulse rhythm between two nodes ═══ */
export function AdvisoryDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 140" className={className} fill="none">
      {/* You */}
      <rect x="20" y="40" width="90" height="58" rx="2" stroke={C} strokeWidth="1.1" fill={D} />
      <text x="65" y="66" fill={C} fontSize="11" fontFamily="var(--font-sans), system-ui" fontWeight="500" textAnchor="middle">Your team</text>
      <text x="65" y="82" fill={CM} fontSize="8" fontFamily="var(--font-sans), system-ui" textAnchor="middle">decisions · execution</text>

      {/* Us */}
      <rect x="310" y="40" width="90" height="58" rx="2" stroke={G} strokeWidth="1.2" fill={D} />
      <text x="355" y="66" fill={G} fontSize="11" fontFamily="var(--font-sans), system-ui" fontWeight="500" textAnchor="middle">Advisor</text>
      <text x="355" y="82" fill={GL} fontSize="8" fontFamily="var(--font-sans), system-ui" textAnchor="middle">judgment · pattern</text>

      {/* Biweekly pulse — scheduled calls */}
      {[145, 190, 235, 280].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="56" r={i % 2 === 0 ? 5 : 3} stroke={G} strokeWidth="1" fill={i % 2 === 0 ? G : "transparent"} />
          {i < 3 && (
            <line
              x1={x + (i % 2 === 0 ? 5 : 3)}
              y1="56"
              x2={[190, 235, 280][i] - (i % 2 === 0 ? 3 : 5)}
              y2="56"
              stroke={G}
              strokeWidth="0.7"
            />
          )}
        </g>
      ))}
      <text x="212" y="40" fill={G} fontSize="8" fontFamily="var(--font-sans), system-ui" fontStyle="italic" textAnchor="middle">biweekly call</text>

      {/* Async channel — below */}
      <line x1="115" y1="82" x2="305" y2="82" stroke={CL} strokeWidth="0.7" strokeDasharray="5 4" />
      <text x="212" y="94" fill={CM} fontSize="8" fontFamily="var(--font-sans), system-ui" textAnchor="middle">async · Slack · email</text>

      {/* Hours annotation */}
      <text x="212" y="125" fill={C} fontSize="10" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" fontWeight="500" textAnchor="middle">
        2–5 hours / month
      </text>
    </svg>
  );
}

/* ═══ Embedded — slotted into org structure ═══ */
export function EmbeddedDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 190" className={className} fill="none">
      {/* Founder node — top */}
      <rect x="150" y="14" width="100" height="38" rx="2" stroke={C} strokeWidth="1.1" fill={D} />
      <text x="200" y="38" fill={C} fontSize="10" fontFamily="var(--font-sans), system-ui" fontWeight="500" textAnchor="middle">Founder / CEO</text>

      {/* Fractional node — beside founder */}
      <rect x="280" y="14" width="115" height="38" rx="2" stroke={G} strokeWidth="1.2" fill={D} />
      <text x="337" y="32" fill={G} fontSize="10" fontFamily="var(--font-sans), system-ui" fontWeight="500" textAnchor="middle">Fractional</text>
      <text x="337" y="45" fill={GL} fontSize="8" fontFamily="var(--font-sans), system-ui" textAnchor="middle">2–3 days/week</text>

      {/* Dotted connection — peer level */}
      <line x1="250" y1="33" x2="280" y2="33" stroke={G} strokeWidth="0.9" strokeDasharray="4 3" />

      {/* Team nodes below */}
      {[
        { x: 70, label: "Product", sub: "reports to founder" },
        { x: 200, label: "Engineering", sub: "reports to founder" },
        { x: 335, label: "Ops / Finance", sub: "directed by fractional" },
      ].map((node) => {
        const isOps = node.label.includes("Ops");
        return (
          <g key={node.label}>
            <rect
              x={node.x - 52}
              y="90"
              width="104"
              height="44"
              rx="2"
              stroke={isOps ? G : C}
              strokeWidth={isOps ? "1.2" : "1"}
              fill={D}
            />
            <text x={node.x} y="109" fill={isOps ? G : C} fontSize="9.5" fontFamily="var(--font-sans), system-ui" fontWeight="500" textAnchor="middle">
              {node.label}
            </text>
            <text x={node.x} y="123" fill={CM} fontSize="7.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">
              {node.sub}
            </text>
          </g>
        );
      })}

      {/* Lines from founder to teams */}
      <line x1="200" y1="52" x2="70" y2="90" stroke={C} strokeWidth="0.7" />
      <line x1="200" y1="52" x2="200" y2="90" stroke={C} strokeWidth="0.7" />
      {/* Line from fractional to ops */}
      <line x1="337" y1="52" x2="335" y2="90" stroke={G} strokeWidth="0.9" />

      {/* Standup / cadence markers */}
      <text x="210" y="157" fill={CM} fontSize="8" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.05em">
        standups · leadership meetings · vendor reviews · hiring
      </text>

      {/* Hours */}
      <text x="210" y="178" fill={C} fontSize="10" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" fontWeight="500" textAnchor="middle">
        10–15 hours / week
      </text>
    </svg>
  );
}

/* ═══ Project — timeline with scope boundary ═══ */
export function ProjectDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 145" className={className} fill="none">
      {/* Timeline base */}
      <line x1="30" y1="66" x2="390" y2="66" stroke={CL} strokeWidth="0.7" />

      {/* SOW boundary — dashed rectangle around the project */}
      <rect x="45" y="22" width="275" height="84" rx="3" stroke={G} strokeWidth="1" strokeDasharray="5 3" fill="rgba(212,170,120,0.04)" />
      <text x="55" y="38" fill={G} fontSize="8" fontFamily="var(--font-sans), system-ui" fontWeight="500" letterSpacing="0.08em">
        SCOPE
      </text>

      {/* Phase nodes */}
      {[
        { x: 85, label: "Define", sub: "week 1–2" },
        { x: 175, label: "Build", sub: "week 3–8" },
        { x: 265, label: "Deliver", sub: "week 9–10" },
      ].map((phase) => (
        <g key={phase.label}>
          <circle cx={phase.x} cy="66" r="16" stroke={C} strokeWidth="1.1" fill={D} />
          <text x={phase.x} y="70" fill={C} fontSize="9" fontFamily="var(--font-sans), system-ui" fontWeight="500" textAnchor="middle">
            {phase.label}
          </text>
          <text x={phase.x} y="98" fill={CM} fontSize="7.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">
            {phase.sub}
          </text>
        </g>
      ))}

      {/* Arrows between phases */}
      <line x1="101" y1="66" x2="159" y2="66" stroke={C} strokeWidth="0.7" />
      <line x1="191" y1="66" x2="249" y2="66" stroke={C} strokeWidth="0.7" />

      {/* Handoff / convert point — outside scope boundary */}
      <circle cx="360" cy="66" r="16" stroke={G} strokeWidth="1" strokeDasharray="2 2" fill={D} />
      <text x="360" y="63" fill={G} fontSize="7.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">Retain</text>
      <text x="360" y="74" fill={G} fontSize="7.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">or exit</text>
      <line x1="281" y1="66" x2="344" y2="66" stroke={G} strokeWidth="0.6" strokeDasharray="3 3" />

      {/* Duration */}
      <text x="210" y="130" fill={C} fontSize="10" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" fontWeight="500" textAnchor="middle">
        60–90 days · defined deliverable
      </text>
    </svg>
  );
}

/* ═══ Build & Transition — intensity arc with crossover ═══ */
export function TransitionDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 170" className={className} fill="none">
      {/* Time axis */}
      <line x1="45" y1="115" x2="385" y2="115" stroke={CM} strokeWidth="0.7" />
      {/* Intensity axis */}
      <line x1="45" y1="25" x2="45" y2="115" stroke={CM} strokeWidth="0.7" />

      {/* Axis labels */}
      <text x="41" y="22" fill={CM} fontSize="8" fontFamily="var(--font-sans), system-ui" textAnchor="end">intensity</text>
      <text x="390" y="115" fill={CM} fontSize="8" fontFamily="var(--font-sans), system-ui">time</text>

      {/* Fractional involvement — starts high, tapers */}
      <path d="M55 35 C110 35 155 40 195 52 S280 80 340 105 L380 110" stroke={G} strokeWidth="1.6" />
      <text x="100" y="30" fill={G} fontSize="9" fontFamily="var(--font-sans), system-ui" fontWeight="500">fractional</text>

      {/* Permanent hire — starts at zero, ramps up */}
      <path d="M215 110 C245 102 275 85 310 60 S345 38 380 32" stroke={C} strokeWidth="1.4" />
      <text x="345" y="28" fill={C} fontSize="9" fontFamily="var(--font-sans), system-ui" fontWeight="500">permanent hire</text>

      {/* Crossover point */}
      <circle cx="295" cy="72" r="5" stroke={G} strokeWidth="1" fill={D} />
      <line x1="295" y1="77" x2="295" y2="115" stroke={G} strokeWidth="0.6" strokeDasharray="3 3" />
      <text x="295" y="128" fill={G} fontSize="8" fontFamily="var(--font-sans), system-ui" fontStyle="italic" textAnchor="middle">handoff</text>

      {/* Phase labels along bottom */}
      <text x="110" y="128" fill={CM} fontSize="8" fontFamily="var(--font-sans), system-ui" textAnchor="middle">build function</text>
      <text x="205" y="128" fill={CM} fontSize="8" fontFamily="var(--font-sans), system-ui" textAnchor="middle">hire team</text>
      <text x="360" y="128" fill={CM} fontSize="8" fontFamily="var(--font-sans), system-ui" textAnchor="middle">advisory</text>

      {/* Duration */}
      <text x="210" y="158" fill={C} fontSize="10" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" fontWeight="500" textAnchor="middle">
        6–12 months · the full arc
      </text>
    </svg>
  );
}
