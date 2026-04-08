/* ─── Illustrations for the scaling/craftsman article ─── */
/* Full-width, detailed, architectural drawing style */

const S = "rgba(232,230,227,0.92)";
const SM = "rgba(232,230,227,0.68)";
const SL = "rgba(232,230,227,0.4)";
const SF = "rgba(232,230,227,0.2)";
const G = "rgba(212,170,120,0.92)";
const GL = "rgba(212,170,120,0.45)";
const W = "rgba(130,160,185,0.4)";

/* ═══ Communication Pathways — why 3x headcount = ~10x complexity ═══ */
export function CommunicationPaths({ className = "" }: { className?: string }) {
  // n(n-1)/2 formula for communication lines
  const groups = [
    { n: 5, cx: 80, cy: 100, r: 35, label: "5 people", paths: 10 },
    { n: 15, cx: 240, cy: 100, r: 50, label: "15 people", paths: 105 },
    { n: 30, cx: 430, cy: 100, r: 60, label: "30 people", paths: 435 },
  ];

  function getPoints(n: number, cx: number, cy: number, r: number) {
    return Array.from({ length: n }, (_, i) => {
      const angle = (i * 2 * Math.PI) / n - Math.PI / 2;
      return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
    });
  }

  return (
    <svg viewBox="0 0 540 230" className={className} fill="none">
      <text x="270" y="18" fill={S} fontSize="10" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        Communication pathways: n(n−1)/2
      </text>

      {groups.map((group) => {
        const pts = getPoints(group.n, group.cx, group.cy, group.r);
        const lines: Array<[number, number, number, number]> = [];
        const maxLines = group.n <= 15 ? pts.length * (pts.length - 1) / 2 : 80;
        let count = 0;
        for (let i = 0; i < pts.length && count < maxLines; i++) {
          for (let j = i + 1; j < pts.length && count < maxLines; j++) {
            lines.push([pts[i].x, pts[i].y, pts[j].x, pts[j].y]);
            count++;
          }
        }

        return (
          <g key={group.n}>
            {/* Connection lines */}
            {lines.map(([x1, y1, x2, y2], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={group.n <= 5 ? SM : group.n <= 15 ? SL : SF}
                strokeWidth={group.n <= 5 ? "0.6" : "0.5"}
              />
            ))}
            {/* Nodes */}
            {pts.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r={group.n <= 5 ? 3.5 : group.n <= 15 ? 2.5 : 2}
                stroke={S} strokeWidth="0.9" fill="rgba(14,14,20,0.95)"
              />
            ))}
            {/* Label */}
            <text x={group.cx} y={group.cy + group.r + 26} fill={S} fontSize="10"
              fontFamily="var(--font-humanist), Georgia, serif" textAnchor="middle">
              {group.label}
            </text>
            {/* Path count */}
            <text x={group.cx} y={group.cy + group.r + 40} fill={G} fontSize="9"
              fontFamily="var(--font-sans), system-ui" fontWeight="500" textAnchor="middle">
              {group.paths} paths
            </text>
          </g>
        );
      })}

      {/* Multiplier annotations */}
      <text x="160" y="198" fill={SM} fontSize="9" fontFamily="var(--font-sans), system-ui" textAnchor="middle">×10</text>
      <path d="M120 193 L145 193" stroke={SM} strokeWidth="0.6" />
      <path d="M175 193 L200 193" stroke={SM} strokeWidth="0.6" />

      <text x="340" y="198" fill={SM} fontSize="9" fontFamily="var(--font-sans), system-ui" textAnchor="middle">×4</text>
      <path d="M300 193 L325 193" stroke={SM} strokeWidth="0.6" />
      <path d="M355 193 L380 193" stroke={SM} strokeWidth="0.6" />

      <text x="270" y="222" fill={SM} fontSize="8" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        6× the people. 43× the communication lines.
      </text>
    </svg>
  );
}

/* ═══ Arsenal Assembly Line — top-down canal view ═══ */
export function ArsenalAssemblyLine({ className = "" }: { className?: string }) {
  const stages = [
    { x: 60, label: "Frame" },
    { x: 130, label: "Plank" },
    { x: 200, label: "Caulk" },
    { x: 270, label: "Deck" },
    { x: 340, label: "Mast" },
    { x: 410, label: "Rig" },
    { x: 480, label: "Oars" },
    { x: 550, label: "Arms" },
  ];

  return (
    <svg viewBox="0 0 640 320" className={className} fill="none">
      {/* Title annotation */}
      <text x="320" y="20" fill={S} fontSize="10" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        Arsenale di Venezia — canal-based sequential production
      </text>

      {/* Canal — the central waterway */}
      <rect x="30" y="110" width="580" height="60" rx="2" stroke={SM} strokeWidth="1" fill="rgba(130,160,185,0.06)" />
      {/* Water texture */}
      {[125, 135, 145, 155].map((y) => (
        <path key={y} d={`M35 ${y} C80 ${y - 2} 160 ${y + 2} 240 ${y - 1} S400 ${y + 1} 480 ${y - 1} S580 ${y + 2} 605 ${y}`} stroke={W} strokeWidth="0.6" />
      ))}

      {/* Direction arrow */}
      <line x1="50" y1="140" x2="590" y2="140" stroke={G} strokeWidth="0.8" strokeDasharray="8 4" />
      <path d="M583 136 L595 140 L583 144" stroke={G} strokeWidth="0.9" />

      {/* Station buildings — top side */}
      {stages.map((stage, i) => (
        <g key={`top-${i}`}>
          {/* Building */}
          <rect x={stage.x - 20} y="40" width="40" height="65" stroke={S} strokeWidth="1" fill="rgba(14,14,20,0.85)" />
          {/* Roof line */}
          <path d={`M${stage.x - 22} 40 L${stage.x} 30 L${stage.x + 22} 40`} stroke={S} strokeWidth="0.9" />
          {/* Door opening to canal */}
          <rect x={stage.x - 6} y="88" width="12" height="17" stroke={SM} strokeWidth="0.6" />
          {/* Stage label */}
          <text x={stage.x} y="68" fill={S} fontSize="8.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
            {stage.label}
          </text>
          {/* Stage number */}
          <text x={stage.x} y="82" fill={G} fontSize="8.5" fontFamily="var(--font-sans), system-ui" fontWeight="500" textAnchor="middle">
            {String(i + 1).padStart(2, "0")}
          </text>
        </g>
      ))}

      {/* Ships progressing through canal */}
      {/* Ship 1 — early stage, just a frame */}
      <g>
        <path d="M75 130 L70 145 Q80 152 90 145 L85 130 Z" stroke={S} strokeWidth="0.9" fill="rgba(14,14,20,0.6)" />
        <line x1="77" y1="132" x2="77" y2="143" stroke={SM} strokeWidth="0.5" />
        <line x1="80" y1="131" x2="80" y2="144" stroke={SM} strokeWidth="0.5" />
        <line x1="83" y1="132" x2="83" y2="143" stroke={SM} strokeWidth="0.5" />
      </g>

      {/* Ship 2 — mid stage, has hull and deck */}
      <g>
        <path d="M275 128 L268 148 Q280 156 292 148 L285 128 Z" stroke={S} strokeWidth="0.9" fill="rgba(14,14,20,0.75)" />
        <line x1="270" y1="135" x2="290" y2="135" stroke={SM} strokeWidth="0.5" />
        <line x1="280" y1="128" x2="280" y2="148" stroke={SM} strokeWidth="0.4" />
      </g>

      {/* Ship 3 — late stage, masted and rigged */}
      <g>
        <path d="M475 126 L466 150 Q478 160 490 150 L481 126 Z" stroke={S} strokeWidth="1" fill="rgba(14,14,20,0.8)" />
        <line x1="468" y1="136" x2="488" y2="136" stroke={SM} strokeWidth="0.6" />
        {/* Mast */}
        <line x1="478" y1="105" x2="478" y2="150" stroke={S} strokeWidth="0.8" />
        {/* Yard */}
        <line x1="468" y1="112" x2="488" y2="112" stroke={SM} strokeWidth="0.5" />
        {/* Pennant */}
        <path d="M478 105 L484 108 L478 111" stroke={G} strokeWidth="0.8" />
      </g>

      {/* Warehouse buildings — bottom side */}
      {[80, 180, 280, 380, 480, 560].map((x, i) => (
        <g key={`ware-${i}`}>
          <rect x={x - 18} y="180" width="36" height="45" stroke={SM} strokeWidth="0.7" fill="rgba(14,14,20,0.6)" />
          <line x1={x - 14} y1={193} x2={x + 14} y2={193} stroke={SL} strokeWidth="0.4" />
          <line x1={x - 14} y1={205} x2={x + 14} y2={205} stroke={SL} strokeWidth="0.4" />
        </g>
      ))}
      <text x="320" y="250" fill={SM} fontSize="9" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        prefabricated component warehouses
      </text>

      {/* Dimension line */}
      <line x1="40" y1="278" x2="600" y2="278" stroke={SL} strokeWidth="0.5" />
      <line x1="40" y1="274" x2="40" y2="282" stroke={SL} strokeWidth="0.5" />
      <line x1="600" y1="274" x2="600" y2="282" stroke={SL} strokeWidth="0.5" />
      <text x="320" y="295" fill={SL} fontSize="7.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.15em">
        CANAL · DIRECTION OF FLOW
      </text>

      {/* Time annotation */}
      <text x="595" y="165" fill={G} fontSize="9" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" fontWeight="500" textAnchor="end">
        &lt; 1 hour
      </text>
      <text x="595" y="177" fill={SM} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="end">
        Henry III, 1574
      </text>
    </svg>
  );
}

/* ═══ Command Structure — before/after Scharnhorst ═══ */
export function CommandStructure({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 280" className={className} fill="none">
      {/* Dividing line */}
      <line x1="320" y1="20" x2="320" y2="260" stroke={SF} strokeWidth="0.5" strokeDasharray="4 4" />

      {/* ── LEFT: Old system (Jena) ── */}
      <text x="160" y="24" fill={S} fontSize="10" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        Prussia, October 1806
      </text>

      {/* Commander node — single point */}
      <circle cx="160" cy="70" r="18" stroke={S} strokeWidth="1.2" fill="rgba(14,14,20,0.9)" />
      <text x="160" y="74" fill={S} fontSize="9" fontFamily="var(--font-sans), system-ui" fontWeight="500" textAnchor="middle">CMD</text>

      {/* All lines converge on commander */}
      {[60, 110, 160, 210, 260].map((x) => (
        <g key={`old-${x}`}>
          <line x1="160" y1="88" x2={x} y2="150" stroke={SM} strokeWidth="0.8" />
          <circle cx={x} cy="155" r="9" stroke={SM} strokeWidth="0.8" fill="rgba(14,14,20,0.85)" />
          {/* Unit dots below */}
          {[-8, 0, 8].map((dx) => (
            <circle key={dx} cx={x + dx} cy="182" r="2.8" stroke={SL} strokeWidth="0.6" />
          ))}
          <line x1={x} y1="164" x2={x - 8} y2="179" stroke={SL} strokeWidth="0.5" />
          <line x1={x} y1="164" x2={x} y2="179" stroke={SL} strokeWidth="0.5" />
          <line x1={x} y1="164" x2={x + 8} y2="179" stroke={SL} strokeWidth="0.5" />
        </g>
      ))}

      {/* Bottleneck annotation */}
      <circle cx="160" cy="70" r="26" stroke="rgba(210,95,75,0.55)" strokeWidth="1" strokeDasharray="3 3" />
      <text x="160" y="215" fill="rgba(210,95,75,0.75)" fontSize="8" fontFamily="var(--font-sans), system-ui" fontWeight="500" textAnchor="middle" letterSpacing="0.1em">
        SINGLE POINT OF FAILURE
      </text>

      {/* Casualties */}
      <text x="160" y="245" fill={SM} fontSize="8.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        10,000 dead. 115 cannons lost.
      </text>

      {/* ── RIGHT: New system (Scharnhorst) ── */}
      <text x="480" y="24" fill={S} fontSize="10" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        Scharnhorst&apos;s reform, 1807–
      </text>

      {/* Commander node */}
      <circle cx="480" cy="55" r="16" stroke={S} strokeWidth="1.2" fill="rgba(14,14,20,0.9)" />
      <text x="480" y="59" fill={S} fontSize="9" fontFamily="var(--font-sans), system-ui" fontWeight="500" textAnchor="middle">CMD</text>

      {/* Staff layer — extends bandwidth */}
      <rect x="395" y="85" width="170" height="32" rx="2" stroke={G} strokeWidth="1" fill="rgba(212,170,120,0.06)" />
      <text x="480" y="106" fill={G} fontSize="8.5" fontFamily="var(--font-sans), system-ui" fontWeight="500" textAnchor="middle" letterSpacing="0.1em">
        GENERAL STAFF
      </text>

      {/* Connection from commander to staff */}
      <line x1="480" y1="71" x2="480" y2="85" stroke={G} strokeWidth="0.9" />

      {/* Staff sections */}
      {[405, 440, 480, 520, 555].map((x) => (
        <circle key={x} cx={x} cy="95" r="2" fill={G} />
      ))}

      {/* Staff to field commanders */}
      {[400, 440, 480, 520, 560].map((x) => (
        <g key={`new-${x}`}>
          <line x1={x} y1="117" x2={x} y2="145" stroke={SM} strokeWidth="0.8" />
          <circle cx={x} cy="150" r="9" stroke={S} strokeWidth="0.8" fill="rgba(14,14,20,0.85)" />
          {[-8, 0, 8].map((dx) => (
            <circle key={dx} cx={x + dx} cy="177" r="2.8" stroke={SM} strokeWidth="0.6" />
          ))}
          <line x1={x} y1="159" x2={x - 8} y2="174" stroke={SM} strokeWidth="0.5" />
          <line x1={x} y1="159" x2={x} y2="174" stroke={SM} strokeWidth="0.5" />
          <line x1={x} y1="159" x2={x + 8} y2="174" stroke={SM} strokeWidth="0.5" />
        </g>
      ))}

      {/* Auftragstaktik label */}
      <text x="480" y="215" fill={G} fontSize="8.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        Auftragstaktik — objective given, method chosen locally
      </text>

      {/* Outcome */}
      <text x="480" y="245" fill={SM} fontSize="8.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        Wars of Liberation, 1813–1815. Won without Scharnhorst.
      </text>
    </svg>
  );
}

/* ═══ Cynefin — hand-drawn framework diagram ═══ */
export function CynefinDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 340" className={className} fill="none">
      {/* Title */}
      <text x="260" y="20" fill={S} fontSize="10" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        Cynefin — Snowden &amp; Boone, 2007
      </text>

      {/* Main dividing lines */}
      <path d="M260 30 C258 100 262 200 260 310" stroke={S} strokeWidth="1" />
      <path d="M30 170 C150 168 370 172 490 170" stroke={S} strokeWidth="1" />

      {/* Fold / disorder center */}
      <path d="M235 145 C245 155 255 155 260 170 C265 155 275 155 285 145" stroke={SM} strokeWidth="0.8" />
      <path d="M235 195 C245 185 255 185 260 170 C265 185 275 185 285 195" stroke={SM} strokeWidth="0.8" />

      {/* ── Top-left: COMPLEX ── */}
      <text x="145" y="56" fill={S} fontSize="14" fontFamily="var(--font-humanist), Georgia, serif" fontWeight="500" textAnchor="middle">
        Complex
      </text>
      <text x="145" y="74" fill={SM} fontSize="8.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">
        probe → sense → respond
      </text>
      {/* Emergent pattern dots */}
      {[
        [90, 95], [110, 108], [130, 90], [145, 115], [160, 98],
        [175, 110], [120, 125], [155, 130], [100, 135], [140, 142],
        [180, 120], [85, 115], [170, 140],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill={SM} />
      ))}
      <path d="M90 95 L110 108 L130 90" stroke={G} strokeWidth="0.7" />
      <path d="M145 115 L160 98 L175 110" stroke={G} strokeWidth="0.7" />
      <path d="M120 125 L140 142 L155 130" stroke={G} strokeWidth="0.7" />

      {/* ── Top-right: COMPLICATED ── */}
      <text x="375" y="56" fill={S} fontSize="14" fontFamily="var(--font-humanist), Georgia, serif" fontWeight="500" textAnchor="middle">
        Complicated
      </text>
      <text x="375" y="74" fill={SM} fontSize="8.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">
        sense → analyze → respond
      </text>
      {/* Ordered structure — gear/mechanism */}
      <circle cx="375" cy="118" r="22" stroke={SM} strokeWidth="0.8" />
      <circle cx="375" cy="118" r="13" stroke={SM} strokeWidth="0.7" />
      <circle cx="375" cy="118" r="5" stroke={S} strokeWidth="0.9" fill={SM} />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * 45 * Math.PI) / 180;
        return (
          <line key={i} x1={375 + 14 * Math.cos(a)} y1={118 + 14 * Math.sin(a)} x2={375 + 21 * Math.cos(a)} y2={118 + 21 * Math.sin(a)} stroke={SM} strokeWidth="0.7" />
        );
      })}

      {/* ── Bottom-left: CHAOTIC ── */}
      <text x="145" y="202" fill={S} fontSize="14" fontFamily="var(--font-humanist), Georgia, serif" fontWeight="500" textAnchor="middle">
        Chaotic
      </text>
      <text x="145" y="220" fill={SM} fontSize="8.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">
        act → sense → respond
      </text>
      {/* Turbulent lines */}
      <path d="M80 240 C95 230 105 250 120 238 S145 255 160 242 S185 248 200 235" stroke={SM} strokeWidth="0.8" />
      <path d="M85 255 C100 248 115 265 130 252 S155 262 170 250 S190 260 205 248" stroke={SL} strokeWidth="0.6" />
      <path d="M90 268 C105 260 120 275 135 262 S158 270 175 258" stroke={SL} strokeWidth="0.5" />

      {/* ── Bottom-right: CLEAR ── */}
      <text x="375" y="202" fill={S} fontSize="14" fontFamily="var(--font-humanist), Georgia, serif" fontWeight="500" textAnchor="middle">
        Clear
      </text>
      <text x="375" y="220" fill={SM} fontSize="8.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">
        sense → categorize → respond
      </text>
      {/* Ordered grid — clean, predictable */}
      {[240, 254, 268, 282].map((y) => (
        <line key={`h${y}`} x1="320" y1={y} x2="430" y2={y} stroke={SL} strokeWidth="0.6" />
      ))}
      {[320, 342, 364, 386, 408, 430].map((x) => (
        <line key={`v${x}`} x1={x} y1="240" x2={x} y2="282" stroke={SL} strokeWidth="0.6" />
      ))}

      {/* Center label */}
      <text x="260" y="175" fill={SM} fontSize="8" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        disorder
      </text>

      {/* Transition arrow — the key insight */}
      <path d="M300 90 C320 120 320 120 285 148" stroke={G} strokeWidth="1.2" strokeDasharray="4 3" />
      <path d="M287 144 L281 152 L291 150" stroke={G} strokeWidth="1" />
      <text x="330" y="112" fill={G} fontSize="9" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" fontWeight="500">
        15 → 30 people
      </text>

      {/* Bottom annotation */}
      <text x="260" y="332" fill={SM} fontSize="9" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        At 15 people, most problems sit on the right. At 30, many have drifted left.
      </text>
    </svg>
  );
}
