/* ─── Function area diagrams ─── */
/* Show the actual workflow for each operational function */

const C = "rgba(232,230,227,0.75)";
const CM = "rgba(232,230,227,0.45)";
const CL = "rgba(232,230,227,0.2)";
const G = "rgba(196,154,108,0.7)";
const GL = "rgba(196,154,108,0.35)";
const D = "rgba(17,17,22,0.5)";

/* ═══ Operations — weekly/monthly cadence cycle ═══ */
export function OperationsCadence({ className = "" }: { className?: string }) {
  const weekly = [
    { angle: 0, label: "Leadership\nmeeting" },
    { angle: 72, label: "Vendor\nreview" },
    { angle: 144, label: "Hiring\npipeline" },
    { angle: 216, label: "Escalation\ntriage" },
    { angle: 288, label: "Reporting\ncheck" },
  ];

  const cx = 200, cy = 105, r = 70;

  return (
    <svg viewBox="0 0 400 220" className={className} fill="none">
      <text x="200" y="16" fill={CM} fontSize="7" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        the operating cadence — what happens every week
      </text>

      {/* Cycle ring */}
      <circle cx={cx} cy={cy} r={r} stroke={GL} strokeWidth="0.6" strokeDasharray="4 3" />
      <circle cx={cx} cy={cy} r={r - 2} stroke={CL} strokeWidth="0.3" />

      {/* Nodes around the cycle */}
      {weekly.map((item, i) => {
        const a = (item.angle - 90) * Math.PI / 180;
        const nx = cx + r * Math.cos(a);
        const ny = cy + r * Math.sin(a);
        const lx = cx + (r + 38) * Math.cos(a);
        const ly = cy + (r + 38) * Math.sin(a);
        return (
          <g key={i}>
            <circle cx={nx} cy={ny} r="8" stroke={C} strokeWidth="0.7" fill={D} />
            <text x={nx} y={ny + 1} fill={G} fontSize="6" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{String(i + 1).padStart(2, "0")}</text>
            {item.label.split("\n").map((line, j) => (
              <text key={j} x={lx} y={ly + j * 10 - 3} fill={CM} fontSize="6.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{line}</text>
            ))}
          </g>
        );
      })}

      {/* Direction arrow on the ring */}
      <path d={`M${cx + r * Math.cos(-54 * Math.PI / 180)} ${cy + r * Math.sin(-54 * Math.PI / 180)} L${cx + (r + 5) * Math.cos(-50 * Math.PI / 180)} ${cy + (r + 5) * Math.sin(-50 * Math.PI / 180)}`} stroke={GL} strokeWidth="0.6" />

      {/* Centre label */}
      <text x={cx} y={cy - 2} fill={G} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">WEEKLY</text>
      <text x={cx} y={cy + 8} fill={GL} fontSize="6" fontFamily="var(--font-sans), system-ui" textAnchor="middle">CYCLE</text>

      {/* Monthly overlay items — below */}
      <line x1="60" y1="195" x2="340" y2="195" stroke={CL} strokeWidth="0.4" />
      <text x="200" y="210" fill={CM} fontSize="6" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.08em">
        MONTHLY: board prep · management accounts · quarterly planning · process review
      </text>
    </svg>
  );
}

/* ═══ Finance — reporting pipeline ═══ */
export function FinancePipeline({ className = "" }: { className?: string }) {
  const stages = [
    { x: 40, label: "Transactions", sub: "daily" },
    { x: 130, label: "Bookkeeping", sub: "weekly" },
    { x: 230, label: "Management\nAccounts", sub: "monthly" },
    { x: 340, label: "Board Deck", sub: "quarterly" },
  ];

  return (
    <svg viewBox="0 0 420 170" className={className} fill="none">
      <text x="210" y="16" fill={CM} fontSize="7" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        the reporting pipeline — raw data to board-ready
      </text>

      {/* Pipeline stages */}
      {stages.map((stage, i) => (
        <g key={i}>
          <rect x={stage.x - 35} y="40" width="70" height="50" rx="2" stroke={i === stages.length - 1 ? G : C} strokeWidth={i === stages.length - 1 ? "0.8" : "0.7"} fill={D} />
          {stage.label.split("\n").map((line, j) => (
            <text key={j} x={stage.x} y={60 + j * 11} fill={i === stages.length - 1 ? G : C} fontSize="7.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{line}</text>
          ))}
          <text x={stage.x} y={82} fill={CL} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{stage.sub}</text>
          {i < stages.length - 1 && (
            <>
              <line x1={stage.x + 35} y1="65" x2={stages[i + 1].x - 35} y2="65" stroke={CM} strokeWidth="0.5" />
              <path d={`M${stages[i + 1].x - 38} 62 L${stages[i + 1].x - 33} 65 L${stages[i + 1].x - 38} 68`} stroke={CM} strokeWidth="0.4" />
            </>
          )}
        </g>
      ))}

      {/* Interpretation layer — the CFO value add */}
      <rect x="115" y="105" width="240" height="30" rx="2" stroke={G} strokeWidth="0.6" fill="rgba(196,154,108,0.03)" />
      <text x="235" y="124" fill={G} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">interpretation · forecasting · variance analysis</text>

      {/* Lines from pipeline to interpretation */}
      <line x1="130" y1="90" x2="130" y2="105" stroke={GL} strokeWidth="0.4" />
      <line x1="230" y1="90" x2="230" y2="105" stroke={GL} strokeWidth="0.4" />
      <line x1="340" y1="90" x2="340" y2="105" stroke={GL} strokeWidth="0.4" />

      <text x="210" y="155" fill={CM} fontSize="6.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        the bookkeeper records. the CFO interprets.
      </text>
    </svg>
  );
}

/* ═══ Marketing — measurement loop ═══ */
export function MarketingLoop({ className = "" }: { className?: string }) {
  const steps = [
    { x: 60, y: 70, label: "Positioning" },
    { x: 170, y: 35, label: "Channels" },
    { x: 280, y: 70, label: "Content" },
    { x: 280, y: 130, label: "Measurement" },
    { x: 170, y: 160, label: "Iteration" },
    { x: 60, y: 130, label: "Unit Econ" },
  ];

  return (
    <svg viewBox="0 0 340 200" className={className} fill="none">
      <text x="170" y="14" fill={CM} fontSize="7" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        the marketing loop — numbers, not vibes
      </text>

      {/* Hexagonal loop */}
      {steps.map((step, i) => {
        const next = steps[(i + 1) % steps.length];
        return (
          <g key={i}>
            <line x1={step.x} y1={step.y} x2={next.x} y2={next.y} stroke={CL} strokeWidth="0.5" />
            <rect x={step.x - 32} y={step.y - 12} width="64" height="24" rx="2" stroke={i === 3 ? G : CM} strokeWidth="0.6" fill={D} />
            <text x={step.x} y={step.y + 2} fill={i === 3 ? G : CM} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{step.label}</text>
          </g>
        );
      })}

      {/* Centre */}
      <text x="170" y="98" fill={GL} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">where are the</text>
      <text x="170" y="109" fill={GL} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">next 50 clients?</text>

      <text x="170" y="192" fill={CM} fontSize="6.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        every cycle tighter than the last
      </text>
    </svg>
  );
}

/* ═══ Back Office — compliance calendar / document lifecycle ═══ */
export function BackOfficeLifecycle({ className = "" }: { className?: string }) {
  const tracks = [
    { y: 50, label: "Entity docs", events: [
      { x: 60, w: 40, name: "Annual filings" },
      { x: 200, w: 60, name: "Agreement review" },
      { x: 350, w: 40, name: "Annual filings" },
    ]},
    { y: 85, label: "Bank compliance", events: [
      { x: 100, w: 50, name: "EDD review" },
      { x: 280, w: 40, name: "KYC update" },
    ]},
    { y: 120, label: "People ops", events: [
      { x: 50, w: 25, name: "Payroll" }, { x: 90, w: 25, name: "Payroll" },
      { x: 130, w: 25, name: "Payroll" }, { x: 170, w: 25, name: "Payroll" },
      { x: 210, w: 25, name: "Payroll" }, { x: 250, w: 25, name: "Payroll" },
      { x: 290, w: 25, name: "Payroll" }, { x: 330, w: 25, name: "Payroll" },
      { x: 370, w: 25, name: "Payroll" },
    ]},
    { y: 155, label: "Documents", events: [
      { x: 80, w: 30, name: "Passport\nexpiry" },
      { x: 160, w: 30, name: "PoA\nexpiry" },
      { x: 300, w: 30, name: "Tax cert\nrenewal" },
    ]},
  ];

  return (
    <svg viewBox="0 0 420 200" className={className} fill="none">
      <text x="210" y="16" fill={CM} fontSize="7" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        the compliance calendar — what recurs and when
      </text>

      {/* Time axis */}
      <line x1="40" y1="30" x2="400" y2="30" stroke={CL} strokeWidth="0.4" />
      {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m, i) => (
        <text key={m} x={60 + i * 65} y="28" fill={CL} fontSize="5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{m}</text>
      ))}

      {/* Tracks */}
      {tracks.map((track) => (
        <g key={track.label}>
          <text x="12" y={track.y + 3} fill={CM} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="start">{track.label}</text>
          <line x1="40" y1={track.y} x2="400" y2={track.y} stroke={CL} strokeWidth="0.2" />
          {track.events.map((evt, j) => (
            <g key={j}>
              <rect x={evt.x} y={track.y - 8} width={evt.w} height="16" rx="2" stroke={track.label === "Bank compliance" ? G : CM} strokeWidth="0.5" fill={D} />
              {evt.name.split("\n").map((line, k) => (
                <text key={k} x={evt.x + evt.w / 2} y={track.y + (k * 8) - 1} fill={track.label === "Bank compliance" ? GL : CL} fontSize="4.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{line}</text>
              ))}
            </g>
          ))}
        </g>
      ))}

      {/* 72-hour drill annotation */}
      <rect x="100" y="78" width="50" height="16" rx="2" stroke={G} strokeWidth="0.6" fill="rgba(196,154,108,0.04)" />
      <path d="M125 94 L125 100" stroke={G} strokeWidth="0.4" strokeDasharray="2 2" />
      <text x="125" y="108" fill={G} fontSize="5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">72hrs</text>

      <text x="210" y="190" fill={CM} fontSize="6.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        the governance office exists because these dates do not wait
      </text>
    </svg>
  );
}
