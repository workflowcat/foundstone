/* ─── Function area diagrams ─── */
/* Show the actual workflow for each operational function */

const C = "rgba(232,230,227,0.92)";
const CM = "rgba(232,230,227,0.68)";
const CL = "rgba(232,230,227,0.38)";
const G = "rgba(212,170,120,0.92)";
const GL = "rgba(212,170,120,0.48)";
const D = "rgba(14,14,20,0.85)";

/* ═══ Operations — weekly/monthly cadence cycle ═══ */
export function OperationsCadence({ className = "" }: { className?: string }) {
  const weekly = [
    { angle: 0, label: "Leadership\nmeeting" },
    { angle: 72, label: "Vendor\nreview" },
    { angle: 144, label: "Hiring\npipeline" },
    { angle: 216, label: "Escalation\ntriage" },
    { angle: 288, label: "Reporting\ncheck" },
  ];

  const cx = 220, cy = 115, r = 75;

  return (
    <svg viewBox="0 0 440 245" className={className} fill="none">
      <text x="220" y="20" fill={C} fontSize="10" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        the operating cadence — what happens every week
      </text>

      {/* Cycle ring */}
      <circle cx={cx} cy={cy} r={r} stroke={G} strokeWidth="0.9" strokeDasharray="5 3" />
      <circle cx={cx} cy={cy} r={r - 3} stroke={CL} strokeWidth="0.5" />

      {/* Nodes around the cycle */}
      {weekly.map((item, i) => {
        const a = (item.angle - 90) * Math.PI / 180;
        const nx = cx + r * Math.cos(a);
        const ny = cy + r * Math.sin(a);
        const lx = cx + (r + 42) * Math.cos(a);
        const ly = cy + (r + 42) * Math.sin(a);
        return (
          <g key={i}>
            <circle cx={nx} cy={ny} r="11" stroke={C} strokeWidth="1.1" fill={D} />
            <text x={nx} y={ny + 3} fill={G} fontSize="9" fontFamily="var(--font-sans), system-ui" fontWeight="500" textAnchor="middle">{String(i + 1).padStart(2, "0")}</text>
            {item.label.split("\n").map((line, j) => (
              <text key={j} x={lx} y={ly + j * 11 - 3} fill={C} fontSize="8.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{line}</text>
            ))}
          </g>
        );
      })}

      {/* Direction arrow on the ring */}
      <path d={`M${cx + r * Math.cos(-54 * Math.PI / 180)} ${cy + r * Math.sin(-54 * Math.PI / 180)} L${cx + (r + 6) * Math.cos(-50 * Math.PI / 180)} ${cy + (r + 6) * Math.sin(-50 * Math.PI / 180)}`} stroke={G} strokeWidth="0.9" />

      {/* Centre label */}
      <text x={cx} y={cy - 2} fill={G} fontSize="9" fontFamily="var(--font-sans), system-ui" fontWeight="500" textAnchor="middle" letterSpacing="0.1em">WEEKLY</text>
      <text x={cx} y={cy + 10} fill={CM} fontSize="8" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.1em">CYCLE</text>

      {/* Monthly overlay items — below */}
      <line x1="60" y1="218" x2="380" y2="218" stroke={CL} strokeWidth="0.6" />
      <text x="220" y="235" fill={C} fontSize="8" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.08em">
        MONTHLY: board prep · management accounts · quarterly planning
      </text>
    </svg>
  );
}

/* ═══ Finance — reporting pipeline ═══ */
export function FinancePipeline({ className = "" }: { className?: string }) {
  const stages = [
    { x: 55, label: "Transactions", sub: "daily" },
    { x: 165, label: "Bookkeeping", sub: "weekly" },
    { x: 285, label: "Management", sub: "monthly", line2: "Accounts" },
    { x: 405, label: "Board Deck", sub: "quarterly" },
  ];

  return (
    <svg viewBox="0 0 480 195" className={className} fill="none">
      <text x="240" y="20" fill={C} fontSize="10" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        the reporting pipeline — raw data to board-ready
      </text>

      {/* Pipeline stages */}
      {stages.map((stage, i) => (
        <g key={i}>
          <rect
            x={stage.x - 42}
            y="42"
            width="84"
            height="58"
            rx="2"
            stroke={i === stages.length - 1 ? G : C}
            strokeWidth={i === stages.length - 1 ? "1.2" : "1"}
            fill={D}
          />
          <text
            x={stage.x}
            y={stage.line2 ? 66 : 74}
            fill={i === stages.length - 1 ? G : C}
            fontSize="10"
            fontFamily="var(--font-sans), system-ui"
            fontWeight="500"
            textAnchor="middle"
          >
            {stage.label}
          </text>
          {stage.line2 && (
            <text x={stage.x} y={79} fill={C} fontSize="10" fontFamily="var(--font-sans), system-ui" fontWeight="500" textAnchor="middle">
              {stage.line2}
            </text>
          )}
          <text x={stage.x} y={93} fill={CM} fontSize="7.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">
            {stage.sub}
          </text>
          {i < stages.length - 1 && (
            <>
              <line x1={stage.x + 42} y1="71" x2={stages[i + 1].x - 42} y2="71" stroke={C} strokeWidth="0.8" />
              <path d={`M${stages[i + 1].x - 46} 67 L${stages[i + 1].x - 40} 71 L${stages[i + 1].x - 46} 75`} stroke={C} strokeWidth="0.8" />
            </>
          )}
        </g>
      ))}

      {/* Interpretation layer — the CFO value add */}
      <rect x="130" y="118" width="280" height="34" rx="2" stroke={G} strokeWidth="1" fill="rgba(212,170,120,0.06)" />
      <text x="270" y="139" fill={G} fontSize="9" fontFamily="var(--font-sans), system-ui" fontWeight="500" textAnchor="middle">
        interpretation · forecasting · variance analysis
      </text>

      {/* Lines from pipeline to interpretation */}
      <line x1="165" y1="100" x2="165" y2="118" stroke={GL} strokeWidth="0.7" />
      <line x1="285" y1="100" x2="285" y2="118" stroke={GL} strokeWidth="0.7" />
      <line x1="405" y1="100" x2="405" y2="118" stroke={GL} strokeWidth="0.7" />

      <text x="240" y="178" fill={CM} fontSize="9" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        the bookkeeper records. the CFO interprets.
      </text>
    </svg>
  );
}

/* ═══ Marketing — measurement loop ═══ */
export function MarketingLoop({ className = "" }: { className?: string }) {
  const steps = [
    { x: 75, y: 80, label: "Positioning" },
    { x: 195, y: 42, label: "Channels" },
    { x: 315, y: 80, label: "Content" },
    { x: 315, y: 145, label: "Measurement" },
    { x: 195, y: 178, label: "Iteration" },
    { x: 75, y: 145, label: "Unit Econ" },
  ];

  return (
    <svg viewBox="0 0 390 220" className={className} fill="none">
      <text x="195" y="18" fill={C} fontSize="10" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        the marketing loop — numbers, not vibes
      </text>

      {/* Hexagonal loop — lines drawn first, behind the boxes */}
      {steps.map((step, i) => {
        const next = steps[(i + 1) % steps.length];
        return (
          <line key={`line-${i}`} x1={step.x} y1={step.y} x2={next.x} y2={next.y} stroke={CL} strokeWidth="0.7" />
        );
      })}

      {steps.map((step, i) => (
        <g key={`box-${i}`}>
          <rect
            x={step.x - 38}
            y={step.y - 14}
            width="76"
            height="28"
            rx="2"
            stroke={i === 3 ? G : C}
            strokeWidth={i === 3 ? "1.1" : "1"}
            fill={D}
          />
          <text
            x={step.x}
            y={step.y + 4}
            fill={i === 3 ? G : C}
            fontSize="9"
            fontFamily="var(--font-sans), system-ui"
            fontWeight="500"
            textAnchor="middle"
          >
            {step.label}
          </text>
        </g>
      ))}

      {/* Centre */}
      <text x="195" y="109" fill={G} fontSize="9" fontFamily="var(--font-sans), system-ui" textAnchor="middle">where are the</text>
      <text x="195" y="121" fill={G} fontSize="9" fontFamily="var(--font-sans), system-ui" textAnchor="middle">next 50 clients?</text>

      <text x="195" y="212" fill={CM} fontSize="9" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        every cycle tighter than the last
      </text>
    </svg>
  );
}

/* ═══ Back Office — compliance calendar / document lifecycle ═══ */
export function BackOfficeLifecycle({ className = "" }: { className?: string }) {
  const tracks = [
    { y: 62, label: "Entity docs", events: [
      { x: 75, w: 55, name: "Annual filings" },
      { x: 215, w: 72, name: "Agreement review" },
      { x: 360, w: 55, name: "Annual filings" },
    ]},
    { y: 102, label: "Bank compliance", events: [
      { x: 115, w: 62, name: "EDD review" },
      { x: 290, w: 55, name: "KYC update" },
    ]},
    { y: 142, label: "People ops", events: [
      { x: 60, w: 28, name: "Payroll" }, { x: 98, w: 28, name: "Payroll" },
      { x: 136, w: 28, name: "Payroll" }, { x: 174, w: 28, name: "Payroll" },
      { x: 212, w: 28, name: "Payroll" }, { x: 250, w: 28, name: "Payroll" },
      { x: 288, w: 28, name: "Payroll" }, { x: 326, w: 28, name: "Payroll" },
      { x: 364, w: 28, name: "Payroll" },
    ]},
    { y: 182, label: "Documents", events: [
      { x: 90, w: 46, name: "Passport exp." },
      { x: 175, w: 46, name: "PoA expiry" },
      { x: 305, w: 54, name: "Tax cert renewal" },
    ]},
  ];

  return (
    <svg viewBox="0 0 470 232" className={className} fill="none">
      <text x="235" y="18" fill={C} fontSize="10" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        the compliance calendar — what recurs and when
      </text>

      {/* Time axis */}
      <line x1="55" y1="38" x2="440" y2="38" stroke={CM} strokeWidth="0.6" />
      {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m, i) => (
        <text key={m} x={75 + i * 70} y="34" fill={CM} fontSize="8" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{m}</text>
      ))}

      {/* Tracks */}
      {tracks.map((track) => (
        <g key={track.label}>
          <text x="14" y={track.y + 3} fill={C} fontSize="8" fontFamily="var(--font-sans), system-ui" fontWeight="500" textAnchor="start">
            {track.label}
          </text>
          <line x1="55" y1={track.y} x2="440" y2={track.y} stroke={CL} strokeWidth="0.3" strokeDasharray="2 3" />
          {track.events.map((evt, j) => {
            const isBankCompliance = track.label === "Bank compliance";
            return (
              <g key={j}>
                <rect
                  x={evt.x}
                  y={track.y - 10}
                  width={evt.w}
                  height="20"
                  rx="2"
                  stroke={isBankCompliance ? G : C}
                  strokeWidth="0.9"
                  fill={isBankCompliance ? "rgba(212,170,120,0.08)" : D}
                />
                <text
                  x={evt.x + evt.w / 2}
                  y={track.y + 3}
                  fill={isBankCompliance ? G : C}
                  fontSize="7"
                  fontFamily="var(--font-sans), system-ui"
                  textAnchor="middle"
                >
                  {evt.name}
                </text>
              </g>
            );
          })}
        </g>
      ))}

      {/* 72-hour drill annotation */}
      <text x="146" y="118" fill={G} fontSize="7" fontFamily="var(--font-sans), system-ui" fontStyle="italic" textAnchor="middle">72hrs</text>

      <text x="235" y="222" fill={CM} fontSize="9" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        the governance office exists because these dates do not wait
      </text>
    </svg>
  );
}
