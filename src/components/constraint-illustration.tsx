/* ─── Header illustration: the constraint ─── */
/* A single figure at the centre of converging workflows.
   Everything passes through one point. Architectural stress diagram
   meets Leonardo's Vitruvian proportion studies. */

const S = "rgba(139,115,85,0.85)";
const SM = "rgba(139,115,85,0.55)";
const SL = "rgba(139,115,85,0.32)";
const SF = "rgba(139,115,85,0.14)";
const G = "rgba(196,154,108,0.6)";
const GL = "rgba(196,154,108,0.3)";

export function ConstraintHero({ className = "" }: { className?: string }) {
  // Converging workflow lines from edges to centre
  const inflows = [
    // Left side — product/R&D
    { x1: 20, y1: 60, label: "product" },
    { x1: 15, y1: 140, label: "engineering" },
    { x1: 25, y1: 220, label: "R&D" },
    { x1: 20, y1: 300, label: "architecture" },
    // Right side — commercial
    { x1: 580, y1: 70, label: "sales" },
    { x1: 585, y1: 150, label: "marketing" },
    { x1: 575, y1: 230, label: "partnerships" },
    { x1: 580, y1: 310, label: "clients" },
    // Top — strategy
    { x1: 180, y1: 15, label: "hiring" },
    { x1: 300, y1: 10, label: "strategy" },
    { x1: 420, y1: 15, label: "fundraising" },
    // Bottom — operations
    { x1: 160, y1: 385, label: "compliance" },
    { x1: 300, y1: 390, label: "finance" },
    { x1: 440, y1: 385, label: "vendors" },
  ];

  const cx = 300;
  const cy = 200;

  return (
    <svg viewBox="0 0 600 400" className={className} fill="none">
      {/* Construction grid */}
      <line x1={cx} y1="0" x2={cx} y2="400" stroke={SF} strokeWidth="0.3" strokeDasharray="6 6" />
      <line x1="0" y1={cy} x2="600" y2={cy} stroke={SF} strokeWidth="0.3" strokeDasharray="6 6" />
      <circle cx={cx} cy={cy} r="120" stroke={SF} strokeWidth="0.3" strokeDasharray="6 6" />

      {/* Converging lines — all workflows funnelling to centre */}
      {inflows.map((line, i) => (
        <g key={i}>
          <line
            x1={line.x1}
            y1={line.y1}
            x2={cx}
            y2={cy}
            stroke={SL}
            strokeWidth="0.5"
          />
          {/* Small label at the source end */}
          <text
            x={line.x1}
            y={line.y1}
            fill={SF}
            fontSize="7"
            fontFamily="var(--font-sans), system-ui"
            textAnchor={line.x1 < 300 ? "start" : line.x1 > 300 ? "end" : "middle"}
            dy={line.y1 < 100 ? -4 : line.y1 > 300 ? 12 : 3}
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
            const tipX = cx - nx * 35;
            const tipY = cy - ny * 35;
            return (
              <circle cx={tipX} cy={tipY} r="1" fill={SL} />
            );
          })()}
        </g>
      ))}

      {/* Stress concentration rings — pressure building at centre */}
      <circle cx={cx} cy={cy} r="28" stroke={G} strokeWidth="0.8" />
      <circle cx={cx} cy={cy} r="20" stroke={S} strokeWidth="1" />
      <circle cx={cx} cy={cy} r="12" stroke={S} strokeWidth="1.2" />

      {/* Central figure — abstract, geometric person */}
      {/* Head */}
      <circle cx={cx} cy={cy - 6} r="5" stroke={S} strokeWidth="1" />
      {/* Body */}
      <line x1={cx} y1={cy - 1} x2={cx} y2={cy + 10} stroke={S} strokeWidth="0.8" />
      {/* Arms reaching outward — trying to hold everything */}
      <line x1={cx - 9} y1={cy + 2} x2={cx} y2={cy + 4} stroke={SM} strokeWidth="0.7" />
      <line x1={cx + 9} y1={cy + 2} x2={cx} y2={cy + 4} stroke={SM} strokeWidth="0.7" />

      {/* Pressure annotation — outer ring with crack suggestion */}
      <path d="M272 195 L275 198 L273 202" stroke={GL} strokeWidth="0.5" />
      <path d="M330 190 L327 194 L329 197" stroke={GL} strokeWidth="0.5" />
      <path d="M295 228 L298 225 L296 222" stroke={GL} strokeWidth="0.5" />

      {/* Quadrant labels — the four workflow areas */}
      <text x="100" y="100" fill={SM} fontSize="9" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        product
      </text>
      <text x="500" y="100" fill={SM} fontSize="9" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        commercial
      </text>
      <text x="100" y="320" fill={SM} fontSize="9" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        operations
      </text>
      <text x="500" y="320" fill={SM} fontSize="9" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        infrastructure
      </text>

      {/* Title annotation */}
      <text x={cx} y="388" fill={GL} fontSize="7" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        all workflows, one point of processing
      </text>
    </svg>
  );
}
