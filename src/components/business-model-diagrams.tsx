/* ─── Business model illustrations ─── */
/* Services treadmill and holding structure complexity */

const C = "rgba(232,230,227,0.75)";
const CM = "rgba(232,230,227,0.45)";
const CL = "rgba(232,230,227,0.2)";
const G = "rgba(196,154,108,0.7)";
const GL = "rgba(196,154,108,0.35)";
const R = "rgba(180,80,60,0.5)";
const RL = "rgba(180,80,60,0.25)";

/* ═══ Services Treadmill — the cycle that never stops ═══ */
export function ServicesTreadmill({ className = "" }: { className?: string }) {
  // Four nodes in a cycle, each driving the next
  const nodes = [
    { x: 260, y: 45, label: "More clients", sub: "revenue grows" },
    { x: 415, y: 130, label: "Need more people", sub: "capacity gap" },
    { x: 260, y: 215, label: "More overhead", sub: "margins compress" },
    { x: 105, y: 130, label: "Need more revenue", sub: "back to sales" },
  ];

  // Arrow paths between nodes (curved)
  const arrows = [
    "M310 60 C370 60 400 85 405 110",
    "M405 150 C395 185 370 210 310 215",
    "M210 215 C155 210 120 185 110 155",
    "M110 110 C120 80 150 60 210 50",
  ];

  return (
    <svg viewBox="0 0 520 280" className={className} fill="none">
      <text x="260" y="16" fill={CM} fontSize="7" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        the services treadmill
      </text>

      {/* The cycle — arrows first, behind nodes */}
      {arrows.map((d, i) => (
        <path key={i} d={d} stroke={i === 2 ? R : GL} strokeWidth="0.8" />
      ))}

      {/* Arrow tips */}
      <circle cx="405" cy="112" r="2" fill={GL} />
      <circle cx="308" cy="215" r="2" fill={GL} />
      <circle cx="110" cy="153" r="2" fill={R} />
      <circle cx="212" cy="50" r="2" fill={GL} />

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={i}>
          <rect
            x={node.x - 65}
            y={node.y - 18}
            width="130"
            height="36"
            rx="2"
            stroke={i === 2 ? R : C}
            strokeWidth="0.7"
            fill="rgba(17,17,22,0.5)"
          />
          <text
            x={node.x}
            y={node.y - 2}
            fill={i === 2 ? R : C}
            fontSize="8"
            fontFamily="var(--font-sans), system-ui"
            textAnchor="middle"
          >
            {node.label}
          </text>
          <text
            x={node.x}
            y={node.y + 10}
            fill={i === 2 ? RL : CL}
            fontSize="6"
            fontFamily="var(--font-sans), system-ui"
            textAnchor="middle"
          >
            {node.sub}
          </text>
        </g>
      ))}

      {/* Centre — the trap */}
      <circle cx="260" cy="130" r="25" stroke={RL} strokeWidth="0.6" strokeDasharray="4 3" />
      <text x="260" y="127" fill={RL} fontSize="6.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">hourly</text>
      <text x="260" y="137" fill={RL} fontSize="6.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">rate trap</text>

      {/* Acceleration marks — the cycle speeds up */}
      {[38, 44, 50].map((r, i) => (
        <circle key={i} cx="260" cy="130" r={r} stroke={CL} strokeWidth="0.2" strokeDasharray={`${2 + i} ${6 - i}`} />
      ))}

      {/* Annotation */}
      <text x="260" y="268" fill={CM} fontSize="6.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        every services company knows this cycle. most pretend they don&apos;t.
      </text>
    </svg>
  );
}

/* ═══ Holding Structure — the actual complexity map ═══ */
export function HoldingComplexity({ className = "" }: { className?: string }) {
  const entities = [
    { x: 70, y: 95, label: "Data APIs", jur: "EST" },
    { x: 180, y: 95, label: "Geocoding", jur: "EST" },
    { x: 290, y: 95, label: "SaaS", jur: "EST/CYP" },
    { x: 400, y: 95, label: "Hardware", jur: "UKR" },
  ];

  const functions = [
    "Finance", "Compliance", "People", "Vendors", "Governance", "Capital",
  ];

  // Intercompany flow lines
  const flows = [
    [70, 180], [180, 290], [70, 290], [290, 400], [180, 400],
  ];

  return (
    <svg viewBox="0 0 470 280" className={className} fill="none">
      <text x="235" y="14" fill={CM} fontSize="7" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        what a holding structure actually looks like to operate
      </text>

      {/* Foundstone Capital — top */}
      <rect x="155" y="25" width="160" height="28" rx="2" stroke={G} strokeWidth="0.8" fill="rgba(17,17,22,0.5)" />
      <text x="235" y="42" fill={G} fontSize="8" fontFamily="var(--font-sans), system-ui" textAnchor="middle">Foundstone Capital</text>

      {/* Shared functions layer */}
      <rect x="25" y="60" width="420" height="18" rx="1" stroke={GL} strokeWidth="0.5" fill="rgba(196,154,108,0.02)" />
      {functions.map((fn, i) => (
        <text key={fn} x={50 + i * 70} y="72" fill={GL} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{fn}</text>
      ))}

      {/* Lines from holding to shared layer */}
      <line x1="235" y1="53" x2="235" y2="60" stroke={GL} strokeWidth="0.5" />

      {/* Entity boxes */}
      {entities.map((ent, i) => (
        <g key={i}>
          <line x1={ent.x} y1="78" x2={ent.x} y2="85" stroke={CL} strokeWidth="0.4" />
          <rect x={ent.x - 42} y="85" width="84" height="32" rx="2" stroke={CM} strokeWidth="0.6" fill="rgba(17,17,22,0.4)" />
          <text x={ent.x} y="100" fill={C} fontSize="7.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{ent.label}</text>
          <text x={ent.x} y="111" fill={CL} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{ent.jur}</text>
        </g>
      ))}

      {/* Intercompany flows — the complexity */}
      {flows.map(([from, to], i) => (
        <path
          key={i}
          d={`M${from} 117 C${from} ${135 + i * 6} ${to} ${135 + i * 6} ${to} 117`}
          stroke={RL}
          strokeWidth="0.5"
          strokeDasharray="3 3"
        />
      ))}
      <text x="235" y="168" fill={RL} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.05em">
        intercompany flows · transfer pricing · currency conversion
      </text>

      {/* Jurisdiction complexity — bottom */}
      <line x1="25" y1="185" x2="445" y2="185" stroke={CL} strokeWidth="0.3" />

      {/* Three jurisdiction columns */}
      {[
        { x: 100, label: "Estonia", items: ["Corp tax 20% (distributed)", "e-Residency", "EU employment law"] },
        { x: 235, label: "Cyprus", items: ["Corp tax 12.5%", "Holding regime", "13th month salary"] },
        { x: 370, label: "Ukraine", items: ["Wartime amendments", "FX controls", "Mobilisation rules"] },
      ].map((jur) => (
        <g key={jur.label}>
          <text x={jur.x} y="198" fill={CM} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{jur.label}</text>
          {jur.items.map((item, j) => (
            <text key={j} x={jur.x} y={212 + j * 11} fill={CL} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">{item}</text>
          ))}
        </g>
      ))}

      {/* Bottom annotation */}
      <text x="235" y="265" fill={CM} fontSize="6.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        three jurisdictions · four entities · one set of books that has to reconcile
      </text>
    </svg>
  );
}
