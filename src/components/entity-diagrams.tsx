/* ─── Per-entity operational flow diagrams ─── */
/* Each one shows how the business actually works: inputs, processing,
   outputs, and where the operational functions sit. Wider format,
   placed between headers and prose. */

const C = "rgba(232,230,227,0.75)";  // cream — primary strokes
const CM = "rgba(232,230,227,0.45)"; // cream medium
const CL = "rgba(232,230,227,0.25)"; // cream light
const G = "rgba(196,154,108,0.7)";   // gold — accent/highlight
const GL = "rgba(196,154,108,0.35)"; // gold light
const D = "rgba(17,17,22,0.5)";      // dark fill

/* ═══ Data APIs — pipeline flow with policy interruption ═══ */
export function DataAPIDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 180" className={className} fill="none">
      {/* Data sources — left */}
      {[30, 60, 90, 120, 150].map((y) => (
        <g key={y}>
          <rect x="10" y={y - 8} width="50" height="16" rx="1" stroke={CL} strokeWidth="0.5" fill={D} />
          <line x1="60" y1={y} x2="110" y2="90" stroke={CL} strokeWidth="0.4" />
        </g>
      ))}
      <text x="35" y="17" fill={CM} fontSize="6" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.05em">SOURCES</text>

      {/* Ingestion engine */}
      <rect x="110" y="65" width="70" height="50" rx="2" stroke={C} strokeWidth="0.8" fill={D} />
      <text x="145" y="87" fill={C} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">Ingestion</text>
      <text x="145" y="100" fill={CM} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">normalize · store</text>

      {/* Arrow to API layer */}
      <line x1="180" y1="90" x2="220" y2="90" stroke={CM} strokeWidth="0.6" />
      <path d="M216 87 L222 90 L216 93" stroke={CM} strokeWidth="0.5" />

      {/* API layer */}
      <rect x="222" y="65" width="70" height="50" rx="2" stroke={C} strokeWidth="0.8" fill={D} />
      <text x="257" y="87" fill={C} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">API</text>
      <text x="257" y="100" fill={CM} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">auth · rate limit · serve</text>

      {/* Arrow to clients */}
      <line x1="292" y1="90" x2="330" y2="90" stroke={CM} strokeWidth="0.6" />

      {/* Client endpoints */}
      {[50, 80, 110, 130].map((y) => (
        <g key={y}>
          <line x1="330" y1="90" x2="380" y2={y} stroke={CL} strokeWidth="0.4" />
          <rect x="380" y={y - 8} width="55" height="16" rx="1" stroke={CL} strokeWidth="0.5" fill={D} />
        </g>
      ))}
      <text x="407" y="17" fill={CM} fontSize="6" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.05em">CLIENTS</text>

      {/* Policy change — the interruption */}
      <path d="M85 40 L145 40 L145 60" stroke={G} strokeWidth="0.8" strokeDasharray="3 2" />
      <text x="115" y="36" fill={G} fontSize="6" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">policy change</text>
      <circle cx="145" cy="40" r="3" stroke={G} strokeWidth="0.7" />

      {/* Billing/revenue flow — bottom */}
      <path d="M257 115 L257 150 L145 150 L145 115" stroke={GL} strokeWidth="0.5" strokeDasharray="4 3" />
      <text x="200" y="148" fill={GL} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">consumption → billing → revenue</text>

      {/* Ops annotation */}
      <text x="490" y="88" fill={GL} fontSize="5.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="end">coordination</text>
      <text x="490" y="98" fill={GL} fontSize="5.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="end">under pressure</text>
    </svg>
  );
}

/* ═══ Geocoding — request flow with cost tracking ═══ */
export function GeocodeDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 160" className={className} fill="none">
      {/* Request volume — left */}
      <text x="30" y="20" fill={CM} fontSize="6" fontFamily="var(--font-sans), system-ui" textAnchor="middle" letterSpacing="0.05em">REQUESTS</text>
      {/* Volume bars */}
      {[35, 50, 65, 80, 95, 110, 125].map((y, i) => {
        const w = [30, 42, 38, 45, 35, 40, 32][i];
        return <rect key={y} x="10" y={y} width={w} height="8" rx="1" stroke={CL} strokeWidth="0.4" fill={D} />;
      })}
      <text x="30" y="145" fill={CL} fontSize="5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">billions/yr</text>

      {/* Arrow */}
      <line x1="60" y1="80" x2="100" y2="80" stroke={CM} strokeWidth="0.5" />

      {/* Cache layer */}
      <rect x="100" y="55" width="65" height="50" rx="2" stroke={C} strokeWidth="0.7" fill={D} />
      <text x="132" y="77" fill={C} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">Cache</text>
      <text x="132" y="90" fill={CM} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">hit rate = margin</text>

      {/* Cache hit path — fast */}
      <path d="M165 70 L200 70 L200 50 L260 50" stroke={G} strokeWidth="0.7" />
      <text x="230" y="44" fill={G} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">cached · ~0 cost</text>

      {/* Cache miss path — expensive */}
      <path d="M165 90 L200 90 L200 110 L260 110" stroke={CM} strokeWidth="0.6" />
      <text x="230" y="124" fill={CM} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">origin · cost/req</text>

      {/* Merge to response */}
      <path d="M260 50 L300 80 L260 110" stroke={CL} strokeWidth="0.4" />
      <rect x="300" y="60" width="65" height="40" rx="2" stroke={C} strokeWidth="0.7" fill={D} />
      <text x="332" y="77" fill={C} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">Response</text>
      <text x="332" y="90" fill={CM} fontSize="5.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">&lt;50ms</text>

      {/* Client */}
      <line x1="365" y1="80" x2="400" y2="80" stroke={CM} strokeWidth="0.5" />
      <rect x="400" y="65" width="55" height="30" rx="2" stroke={CL} strokeWidth="0.5" fill={D} />
      <text x="427" y="83" fill={CM} fontSize="6.5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">Client</text>

      {/* Cost tracking underline */}
      <line x1="100" y1="140" x2="365" y2="140" stroke={GL} strokeWidth="0.5" strokeDasharray="4 3" />
      <text x="232" y="152" fill={GL} fontSize="5.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">per-request cost tracked at customer level</text>
    </svg>
  );
}

/* ═══ Manufacturing — production flow with dual regulatory tracks ═══ */
export function ManufacturingDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 170" className={className} fill="none">
      {/* Procurement */}
      <rect x="10" y="55" width="70" height="40" rx="2" stroke={C} strokeWidth="0.7" fill={D} />
      <text x="45" y="72" fill={C} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">Procurement</text>
      <text x="45" y="84" fill={CM} fontSize="5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">components · materials</text>

      {/* Arrow */}
      <line x1="80" y1="75" x2="115" y2="75" stroke={CM} strokeWidth="0.5" />

      {/* Production */}
      <rect x="115" y="55" width="70" height="40" rx="2" stroke={C} strokeWidth="0.7" fill={D} />
      <text x="150" y="72" fill={C} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">Production</text>
      <text x="150" y="84" fill={CM} fontSize="5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">assembly · QC</text>

      {/* Arrow */}
      <line x1="185" y1="75" x2="220" y2="75" stroke={CM} strokeWidth="0.5" />

      {/* Certification */}
      <rect x="220" y="55" width="70" height="40" rx="2" stroke={G} strokeWidth="0.7" fill={D} />
      <text x="255" y="72" fill={G} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">Certification</text>
      <text x="255" y="84" fill={GL} fontSize="5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">testing · approval</text>

      {/* Arrow */}
      <line x1="290" y1="75" x2="325" y2="75" stroke={CM} strokeWidth="0.5" />

      {/* Delivery */}
      <rect x="325" y="55" width="70" height="40" rx="2" stroke={C} strokeWidth="0.7" fill={D} />
      <text x="360" y="72" fill={C} fontSize="7" fontFamily="var(--font-sans), system-ui" textAnchor="middle">Delivery</text>
      <text x="360" y="84" fill={CM} fontSize="5" fontFamily="var(--font-sans), system-ui" textAnchor="middle">logistics · export docs</text>

      {/* Inventory tracking — underneath */}
      <line x1="45" y1="105" x2="360" y2="105" stroke={GL} strokeWidth="0.5" strokeDasharray="4 3" />
      <text x="200" y="118" fill={GL} fontSize="5.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">inventory · COGS · production scheduling</text>

      {/* Regulatory layer — above */}
      <line x1="220" y1="35" x2="395" y2="35" stroke={G} strokeWidth="0.5" strokeDasharray="3 2" />
      <text x="307" y="28" fill={G} fontSize="5.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="middle">regulatory approvals · export compliance</text>

      {/* Time annotation */}
      <text x="480" y="72" fill={CL} fontSize="5.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="end">weeks and months</text>
      <text x="480" y="84" fill={CL} fontSize="5.5" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" textAnchor="end">not milliseconds</text>
    </svg>
  );
}
