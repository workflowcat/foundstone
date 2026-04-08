/* ─── Header illustration: the constraint ─── */
/* A single figure at the centre of converging workflows.
   Everything passes through one point. Architectural stress diagram. */

const C = "rgba(232,230,227,0.92)";
const CM = "rgba(232,230,227,0.68)";
const CL = "rgba(232,230,227,0.42)";
const CF = "rgba(232,230,227,0.2)";
const G = "rgba(212,170,120,0.92)";
const GL = "rgba(212,170,120,0.5)";

export function ConstraintHero({ className = "" }: { className?: string }) {
  // Converging workflow lines from edges to centre
  const inflows = [
    // Left side
    { x1: 22, y1: 60, label: "product" },
    { x1: 18, y1: 140, label: "engineering" },
    { x1: 25, y1: 220, label: "R&D" },
    { x1: 22, y1: 300, label: "architecture" },
    // Right side
    { x1: 578, y1: 70, label: "sales" },
    { x1: 582, y1: 150, label: "marketing" },
    { x1: 575, y1: 230, label: "partnerships" },
    { x1: 578, y1: 310, label: "clients" },
    // Top
    { x1: 180, y1: 18, label: "hiring" },
    { x1: 300, y1: 12, label: "strategy" },
    { x1: 420, y1: 18, label: "fundraising" },
    // Bottom
    { x1: 160, y1: 382, label: "compliance" },
    { x1: 300, y1: 388, label: "finance" },
    { x1: 440, y1: 382, label: "vendors" },
  ];

  const cx = 300;
  const cy = 200;

  return (
    <svg viewBox="0 0 600 410" className={className} fill="none">
      {/* Construction grid */}
      <line x1={cx} y1="0" x2={cx} y2="410" stroke={CF} strokeWidth="0.5" strokeDasharray="6 6" />
      <line x1="0" y1={cy} x2="600" y2={cy} stroke={CF} strokeWidth="0.5" strokeDasharray="6 6" />
      <circle cx={cx} cy={cy} r="120" stroke={CF} strokeWidth="0.5" strokeDasharray="6 6" />

      {/* Converging lines — all workflows funnelling to centre */}
      {inflows.map((line, i) => (
        <g key={i}>
          <line
            x1={line.x1}
            y1={line.y1}
            x2={cx}
            y2={cy}
            stroke={CL}
            strokeWidth="0.8"
          />
          <text
            x={line.x1}
            y={line.y1}
            fill={C}
            fontSize="9"
            fontFamily="var(--font-sans), system-ui"
            textAnchor={line.x1 < 300 ? "start" : line.x1 > 300 ? "end" : "middle"}
            dy={line.y1 < 100 ? -5 : line.y1 > 300 ? 14 : 3}
            dx={line.x1 < 100 ? 4 : line.x1 > 500 ? -4 : 0}
            letterSpacing="0.05em"
          >
            {line.label}
          </text>
          {/* Arrow tip near centre */}
          {(() => {
            const dx = cx - line.x1;
            const dy = cy - line.y1;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const nx = dx / dist;
            const ny = dy / dist;
            const tipX = cx - nx * 38;
            const tipY = cy - ny * 38;
            return <circle cx={tipX} cy={tipY} r="1.5" fill={CM} />;
          })()}
        </g>
      ))}

      {/* Stress concentration rings — pressure building at centre */}
      <circle cx={cx} cy={cy} r="32" stroke={G} strokeWidth="1.2" />
      <circle cx={cx} cy={cy} r="22" stroke={C} strokeWidth="1.3" />
      <circle cx={cx} cy={cy} r="13" stroke={C} strokeWidth="1.4" fill="rgba(14,14,20,0.9)" />

      {/* Central figure — abstract geometric person */}
      <circle cx={cx} cy={cy - 5} r="5.5" stroke={C} strokeWidth="1.2" />
      <line x1={cx} y1={cy} x2={cx} y2={cy + 11} stroke={C} strokeWidth="1.1" />
      <line x1={cx - 10} y1={cy + 3} x2={cx} y2={cy + 5} stroke={C} strokeWidth="1" />
      <line x1={cx + 10} y1={cy + 3} x2={cx} y2={cy + 5} stroke={C} strokeWidth="1" />

      {/* Pressure annotation — cracks */}
      <path d="M270 193 L274 197 L271 202" stroke={G} strokeWidth="0.9" strokeLinecap="round" />
      <path d="M332 188 L328 193 L331 198" stroke={G} strokeWidth="0.9" strokeLinecap="round" />
      <path d="M295 232 L299 228 L296 223" stroke={G} strokeWidth="0.9" strokeLinecap="round" />

      {/* Quadrant labels — the four workflow areas */}
      <text x="100" y="100" fill={G} fontSize="11" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        product
      </text>
      <text x="500" y="100" fill={G} fontSize="11" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        commercial
      </text>
      <text x="100" y="325" fill={G} fontSize="11" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        operations
      </text>
      <text x="500" y="325" fill={G} fontSize="11" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        infrastructure
      </text>

      {/* Title annotation */}
      <text x={cx} y="402" fill={CM} fontSize="9" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        all workflows, one point of processing
      </text>
    </svg>
  );
}
