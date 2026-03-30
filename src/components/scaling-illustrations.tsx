/* ─── Illustrations for the scaling/craftsman article ─── */
/* Full-width, detailed, architectural drawing style */

const S = "rgba(139,115,85,0.8)";
const SM = "rgba(139,115,85,0.55)";
const SL = "rgba(139,115,85,0.3)";
const SF = "rgba(139,115,85,0.12)";
const G = "rgba(196,154,108,0.55)";
const GL = "rgba(196,154,108,0.3)";
const W = "rgba(107,133,160,0.25)";

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
    <svg viewBox="0 0 540 220" className={className} fill="none">
      <text x="270" y="16" fill={SM} fontSize="8" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        Communication pathways: n(n−1)/2
      </text>

      {groups.map((group) => {
        const pts = getPoints(group.n, group.cx, group.cy, group.r);
        const lines: Array<[number, number, number, number]> = [];
        // Only draw a subset for 30 to avoid visual noise
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
                stroke={group.n <= 5 ? SL : group.n <= 15 ? SF : "rgba(139,115,85,0.06)"}
                strokeWidth="0.3"
              />
            ))}
            {/* Nodes */}
            {pts.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r={group.n <= 5 ? 3 : group.n <= 15 ? 2 : 1.5}
                stroke={S} strokeWidth="0.5" fill="rgba(17,17,22,0.8)"
              />
            ))}
            {/* Label */}
            <text x={group.cx} y={group.cy + group.r + 22} fill={SM} fontSize="8"
              fontFamily="var(--font-humanist), Georgia, serif" textAnchor="middle">
              {group.label}
            </text>
            {/* Path count */}
            <text x={group.cx} y={group.cy + group.r + 34} fill={G} fontSize="7"
              fontFamily="var(--font-sans), system-ui" textAnchor="middle">
              {group.paths} paths
            </text>
          </g>
        );
      })}

      {/* Multiplier annotations */}
      <text x="160" y="190" fill={SL} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">×10</text>
      <path d="M120 185 L145 185" stroke={SL} strokeWidth="0.4" />
      <path d="M175 185 L200 185" stroke={SL} strokeWidth="0.4" />

      <text x="340" y="190" fill={SL} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">×4</text>
      <path d="M300 185 L325 185" stroke={SL} strokeWidth="0.4" />
      <path d="M355 185 L380 185" stroke={SL} strokeWidth="0.4" />

      <text x="270" y="210" fill={SL} fontSize="6" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
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
      <text x="320" y="18" fill={SM} fontSize="8" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        Arsenale di Venezia — canal-based sequential production
      </text>

      {/* Canal — the central waterway */}
      <rect x="30" y="110" width="580" height="60" rx="2" stroke={SM} strokeWidth="0.8" fill="rgba(107,133,160,0.04)" />
      {/* Water texture */}
      {[125, 135, 145, 155].map((y) => (
        <path key={y} d={`M35 ${y} C80 ${y - 2} 160 ${y + 2} 240 ${y - 1} S400 ${y + 1} 480 ${y - 1} S580 ${y + 2} 605 ${y}`} stroke={W} strokeWidth="0.4" />
      ))}

      {/* Direction arrow */}
      <line x1="50" y1="140" x2="590" y2="140" stroke={GL} strokeWidth="0.6" strokeDasharray="8 4" />
      <path d="M585 137 L595 140 L585 143" stroke={GL} strokeWidth="0.6" />

      {/* Station buildings — top side */}
      {stages.map((stage, i) => (
        <g key={`top-${i}`}>
          {/* Building */}
          <rect x={stage.x - 20} y="40" width="40" height="65" stroke={S} strokeWidth="0.7" fill="rgba(17,17,22,0.3)" />
          {/* Roof line */}
          <path d={`M${stage.x - 22} 40 L${stage.x} 30 L${stage.x + 22} 40`} stroke={S} strokeWidth="0.6" />
          {/* Door opening to canal */}
          <rect x={stage.x - 6} y="88" width="12" height="17" stroke={SL} strokeWidth="0.4" />
          {/* Stage label */}
          <text x={stage.x} y="68" fill={SL} fontSize="6.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
            {stage.label}
          </text>
          {/* Stage number */}
          <text x={stage.x} y="80" fill={GL} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">
            {String(i + 1).padStart(2, "0")}
          </text>
        </g>
      ))}

      {/* Ships progressing through canal */}
      {/* Ship 1 — early stage, just a frame */}
      <g>
        <path d="M75 130 L70 145 Q80 152 90 145 L85 130 Z" stroke={S} strokeWidth="0.7" />
        {/* Frame ribs */}
        <line x1="77" y1="132" x2="77" y2="143" stroke={SL} strokeWidth="0.4" />
        <line x1="80" y1="131" x2="80" y2="144" stroke={SL} strokeWidth="0.4" />
        <line x1="83" y1="132" x2="83" y2="143" stroke={SL} strokeWidth="0.4" />
      </g>

      {/* Ship 2 — mid stage, has hull and deck */}
      <g>
        <path d="M275 128 L268 148 Q280 156 292 148 L285 128 Z" stroke={S} strokeWidth="0.7" fill="rgba(139,115,85,0.04)" />
        <line x1="270" y1="135" x2="290" y2="135" stroke={SL} strokeWidth="0.4" />
        <line x1="280" y1="128" x2="280" y2="148" stroke={SL} strokeWidth="0.3" />
      </g>

      {/* Ship 3 — late stage, masted and rigged */}
      <g>
        <path d="M475 126 L466 150 Q478 160 490 150 L481 126 Z" stroke={S} strokeWidth="0.8" fill="rgba(139,115,85,0.06)" />
        <line x1="468" y1="136" x2="488" y2="136" stroke={SM} strokeWidth="0.5" />
        {/* Mast */}
        <line x1="478" y1="105" x2="478" y2="150" stroke={SM} strokeWidth="0.6" />
        {/* Yard */}
        <line x1="468" y1="112" x2="488" y2="112" stroke={SL} strokeWidth="0.4" />
        {/* Pennant */}
        <path d="M478 105 L484 108 L478 111" stroke={G} strokeWidth="0.5" />
      </g>

      {/* Warehouse buildings — bottom side */}
      {[80, 180, 280, 380, 480, 560].map((x, i) => (
        <g key={`ware-${i}`}>
          <rect x={x - 18} y="175" width="36" height="45" stroke={SL} strokeWidth="0.5" fill="rgba(17,17,22,0.15)" />
          {/* Shelving lines */}
          <line x1={x - 14} y1={188} x2={x + 14} y2={188} stroke={SF} strokeWidth="0.3" />
          <line x1={x - 14} y1={200} x2={x + 14} y2={200} stroke={SF} strokeWidth="0.3" />
        </g>
      ))}
      <text x="320" y="240" fill={SL} fontSize="7" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        prefabricated component warehouses
      </text>

      {/* Dimension line */}
      <line x1="40" y1="270" x2="600" y2="270" stroke={SF} strokeWidth="0.4" />
      <line x1="40" y1="266" x2="40" y2="274" stroke={SF} strokeWidth="0.4" />
      <line x1="600" y1="266" x2="600" y2="274" stroke={SF} strokeWidth="0.4" />
      <text x="320" y="285" fill={SF} fontSize="6" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.15em">
        CANAL DIRECTION OF FLOW
      </text>

      {/* Construction crosshairs */}
      <line x1="30" y1="140" x2="610" y2="140" stroke={SF} strokeWidth="0.2" strokeDasharray="2 4" />
      <line x1="320" y1="25" x2="320" y2="260" stroke={SF} strokeWidth="0.2" strokeDasharray="2 4" />

      {/* Time annotation */}
      <text x="595" y="165" fill={G} fontSize="7" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="end">
        &lt; 1 hour
      </text>
      <text x="595" y="175" fill={SL} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="end">
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
      <text x="160" y="22" fill={SM} fontSize="8" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        Prussia, October 1806
      </text>

      {/* Commander node — single point */}
      <circle cx="160" cy="70" r="16" stroke={S} strokeWidth="0.8" />
      <text x="160" y="73" fill={S} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">CMD</text>

      {/* All lines converge on commander */}
      {[60, 110, 160, 210, 260].map((x) => (
        <g key={`old-${x}`}>
          <line x1="160" y1="86" x2={x} y2="150" stroke={SL} strokeWidth="0.5" />
          <circle cx={x} cy="155" r="8" stroke={SL} strokeWidth="0.5" />
          {/* Unit dots below */}
          {[-8, 0, 8].map((dx) => (
            <circle key={dx} cx={x + dx} cy="180" r="2.5" stroke={SF} strokeWidth="0.4" />
          ))}
          <line x1={x} y1="163" x2={x - 8} y2="177" stroke={SF} strokeWidth="0.3" />
          <line x1={x} y1="163" x2={x} y2="177" stroke={SF} strokeWidth="0.3" />
          <line x1={x} y1="163" x2={x + 8} y2="177" stroke={SF} strokeWidth="0.3" />
        </g>
      ))}

      {/* Bottleneck annotation */}
      <circle cx="160" cy="70" r="22" stroke="rgba(180,80,60,0.3)" strokeWidth="0.8" strokeDasharray="3 3" />
      <text x="160" y="210" fill="rgba(180,80,60,0.4)" fontSize="6" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.1em">
        SINGLE POINT OF FAILURE
      </text>

      {/* Casualties */}
      <text x="160" y="240" fill={SL} fontSize="6" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        10,000 dead. 115 cannons lost.
      </text>

      {/* ── RIGHT: New system (Scharnhorst) ── */}
      <text x="480" y="22" fill={SM} fontSize="8" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        Scharnhorst&apos;s reform, 1807–
      </text>

      {/* Commander node */}
      <circle cx="480" cy="55" r="14" stroke={S} strokeWidth="0.8" />
      <text x="480" y="58" fill={S} fontSize="6.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">CMD</text>

      {/* Staff layer — extends bandwidth */}
      <rect x="395" y="85" width="170" height="30" rx="2" stroke={G} strokeWidth="0.7" fill="rgba(196,154,108,0.03)" />
      <text x="480" y="104" fill={G} fontSize="6.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.08em">
        GENERAL STAFF
      </text>

      {/* Connection from commander to staff */}
      <line x1="480" y1="69" x2="480" y2="85" stroke={SM} strokeWidth="0.6" />

      {/* Staff sections */}
      {[
        { x: 405, label: "OPS" },
        { x: 440, label: "LOG" },
        { x: 480, label: "TOPO" },
        { x: 520, label: "INTEL" },
        { x: 555, label: "HIST" },
      ].map((sec) => (
        <g key={sec.label}>
          <circle cx={sec.x} cy="92" r="1.5" fill={GL} />
        </g>
      ))}

      {/* Staff to field commanders */}
      {[400, 440, 480, 520, 560].map((x) => (
        <g key={`new-${x}`}>
          <line x1={x} y1="115" x2={x} y2="145" stroke={SL} strokeWidth="0.5" />
          <circle cx={x} cy="150" r="8" stroke={SM} strokeWidth="0.5" />
          {/* Auftragstaktik — dashed lines showing autonomous action */}
          {[-8, 0, 8].map((dx) => (
            <circle key={dx} cx={x + dx} cy="175" r="2.5" stroke={SL} strokeWidth="0.4" />
          ))}
          <line x1={x} y1="158" x2={x - 8} y2="172" stroke={SL} strokeWidth="0.3" />
          <line x1={x} y1="158" x2={x} y2="172" stroke={SL} strokeWidth="0.3" />
          <line x1={x} y1="158" x2={x + 8} y2="172" stroke={SL} strokeWidth="0.3" />
        </g>
      ))}

      {/* Auftragstaktik label */}
      <text x="480" y="210" fill={G} fontSize="6" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        Auftragstaktik — objective given, method chosen locally
      </text>

      {/* Outcome */}
      <text x="480" y="240" fill={SL} fontSize="6" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
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
      <text x="260" y="18" fill={SM} fontSize="8" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        Cynefin — Snowden &amp; Boone, 2007
      </text>

      {/* Main dividing lines — slightly hand-drawn quality */}
      <path d="M260 30 C258 100 262 200 260 310" stroke={S} strokeWidth="0.8" />
      <path d="M30 170 C150 168 370 172 490 170" stroke={S} strokeWidth="0.8" />

      {/* Fold / disorder center */}
      <path d="M235 145 C245 155 255 155 260 170 C265 155 275 155 285 145" stroke={SM} strokeWidth="0.6" />
      <path d="M235 195 C245 185 255 185 260 170 C265 185 275 185 285 195" stroke={SM} strokeWidth="0.6" />

      {/* ── Top-left: COMPLEX ── */}
      <text x="145" y="55" fill={S} fontSize="12" fontFamily="var(--font-humanist), Georgia, serif" textAnchor="middle">
        Complex
      </text>
      <text x="145" y="72" fill={SL} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">
        probe → sense → respond
      </text>
      {/* Emergent pattern dots */}
      {[
        [90, 95], [110, 108], [130, 90], [145, 115], [160, 98],
        [175, 110], [120, 125], [155, 130], [100, 135], [140, 142],
        [180, 120], [85, 115], [170, 140],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill={SL} />
      ))}
      {/* Connection lines between some dots — emergent pattern */}
      <path d="M90 95 L110 108 L130 90" stroke={GL} strokeWidth="0.4" />
      <path d="M145 115 L160 98 L175 110" stroke={GL} strokeWidth="0.4" />
      <path d="M120 125 L140 142 L155 130" stroke={GL} strokeWidth="0.4" />

      {/* ── Top-right: COMPLICATED ── */}
      <text x="375" y="55" fill={S} fontSize="12" fontFamily="var(--font-humanist), Georgia, serif" textAnchor="middle">
        Complicated
      </text>
      <text x="375" y="72" fill={SL} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">
        sense → analyze → respond
      </text>
      {/* Ordered structure — gear/mechanism */}
      <circle cx="375" cy="115" r="20" stroke={SL} strokeWidth="0.5" />
      <circle cx="375" cy="115" r="12" stroke={SL} strokeWidth="0.4" />
      <circle cx="375" cy="115" r="4" stroke={SM} strokeWidth="0.5" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * 45 * Math.PI) / 180;
        return (
          <line key={i} x1={375 + 13 * Math.cos(a)} y1={115 + 13 * Math.sin(a)} x2={375 + 19 * Math.cos(a)} y2={115 + 19 * Math.sin(a)} stroke={SL} strokeWidth="0.4" />
        );
      })}

      {/* ── Bottom-left: CHAOTIC ── */}
      <text x="145" y="200" fill={S} fontSize="12" fontFamily="var(--font-humanist), Georgia, serif" textAnchor="middle">
        Chaotic
      </text>
      <text x="145" y="217" fill={SL} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">
        act → sense → respond
      </text>
      {/* Turbulent lines */}
      <path d="M80 240 C95 230 105 250 120 238 S145 255 160 242 S185 248 200 235" stroke={SL} strokeWidth="0.5" />
      <path d="M85 255 C100 248 115 265 130 252 S155 262 170 250 S190 260 205 248" stroke={SF} strokeWidth="0.4" />
      <path d="M90 268 C105 260 120 275 135 262 S158 270 175 258" stroke={SF} strokeWidth="0.3" />

      {/* ── Bottom-right: CLEAR ── */}
      <text x="375" y="200" fill={S} fontSize="12" fontFamily="var(--font-humanist), Georgia, serif" textAnchor="middle">
        Clear
      </text>
      <text x="375" y="217" fill={SL} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">
        sense → categorize → respond
      </text>
      {/* Ordered grid — clean, predictable */}
      {[238, 252, 266, 280].map((y) => (
        <line key={`h${y}`} x1="320" y1={y} x2="430" y2={y} stroke={SF} strokeWidth="0.4" />
      ))}
      {[320, 342, 364, 386, 408, 430].map((x) => (
        <line key={`v${x}`} x1={x} y1="238" x2={x} y2="280" stroke={SF} strokeWidth="0.4" />
      ))}

      {/* Center label */}
      <text x="260" y="173" fill={SM} fontSize="7" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        disorder
      </text>

      {/* Transition arrow — the key insight */}
      <path d="M300 90 C310 120 310 120 280 145" stroke={G} strokeWidth="0.8" strokeDasharray="4 3" />
      <path d="M282 140 L278 148 L286 145" stroke={G} strokeWidth="0.6" />
      <text x="315" y="108" fill={G} fontSize="6" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic">
        15 → 30 people
      </text>

      {/* Bottom annotation */}
      <text x="260" y="330" fill={SL} fontSize="6.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">
        At 15 people, most problems sit on the right. At 30, many have drifted left.
      </text>
    </svg>
  );
}
