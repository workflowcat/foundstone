/* ─── Compact SVG icons for notes index ─── */
/* ~80x80, same sepia line language as full illustrations */

const S = "rgba(139,115,85,0.8)";
const SL = "rgba(139,115,85,0.4)";
const G = "rgba(196,154,108,0.65)";

export function IconLedger({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      {/* Open book */}
      <line x1="40" y1="12" x2="40" y2="68" stroke={SL} strokeWidth="1" />
      <rect x="10" y="10" width="28" height="58" rx="1" stroke={S} strokeWidth="0.7" />
      <rect x="42" y="10" width="28" height="58" rx="1" stroke={S} strokeWidth="0.7" />
      {/* Ledger lines */}
      {[22, 30, 38, 46, 54].map((y) => (
        <g key={y}>
          <line x1="14" y1={y} x2="36" y2={y} stroke={SL} strokeWidth="0.3" />
          <line x1="44" y1={y} x2="66" y2={y} stroke={SL} strokeWidth="0.3" />
        </g>
      ))}
      {/* Column divider */}
      <line x1="30" y1="16" x2="30" y2="64" stroke={SL} strokeWidth="0.3" />
      <line x1="60" y1="16" x2="60" y2="64" stroke={SL} strokeWidth="0.3" />
      {/* Gold summa line */}
      <line x1="14" y1="60" x2="36" y2="60" stroke={G} strokeWidth="0.6" />
      <line x1="44" y1="60" x2="66" y2="60" stroke={G} strokeWidth="0.6" />
    </svg>
  );
}

export function IconMineShaft({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      {/* Surface */}
      <path d="M5 28 C20 26 40 30 60 27 S75 29 75 29" stroke={S} strokeWidth="0.7" />
      {/* Main shaft */}
      <rect x="32" y="28" width="16" height="42" stroke={S} strokeWidth="0.7" />
      {/* Timber supports */}
      {[36, 44, 52, 60].map((y) => (
        <line key={y} x1="30" y1={y} x2="50" y2={y} stroke={SL} strokeWidth="0.4" />
      ))}
      {/* Gallery */}
      <rect x="10" y="48" width="22" height="8" stroke={SL} strokeWidth="0.5" />
      <rect x="48" y="56" width="24" height="8" stroke={SL} strokeWidth="0.5" />
      {/* Ore vein */}
      <path d="M12 52 L28 51" stroke={G} strokeWidth="1" strokeLinecap="round" />
      {/* Strata */}
      <path d="M5 40 C25 39 55 42 75 40" stroke={SL} strokeWidth="0.3" />
      <path d="M5 55 C25 53 55 56 75 54" stroke={SL} strokeWidth="0.3" />
    </svg>
  );
}

export function IconShip({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      {/* Hull */}
      <path d="M15 45 Q12 58 20 65 Q35 72 40 73 Q45 72 60 65 Q68 58 65 45" stroke={S} strokeWidth="0.7" />
      {/* Deck */}
      <path d="M15 45 Q40 42 65 45" stroke={S} strokeWidth="0.6" />
      {/* Mast */}
      <line x1="40" y1="15" x2="40" y2="73" stroke={S} strokeWidth="0.6" />
      {/* Yards */}
      <line x1="25" y1="22" x2="55" y2="22" stroke={SL} strokeWidth="0.4" />
      <line x1="28" y1="32" x2="52" y2="32" stroke={SL} strokeWidth="0.4" />
      {/* Hold divisions */}
      <line x1="30" y1="45" x2="30" y2="65" stroke={SL} strokeWidth="0.3" />
      <line x1="50" y1="45" x2="50" y2="65" stroke={SL} strokeWidth="0.3" />
      {/* VOC mark */}
      <text x="40" y="58" fill={G} fontSize="7" fontFamily="var(--font-humanist), Georgia, serif" fontWeight="bold" textAnchor="middle">V</text>
      {/* Waterline */}
      <path d="M8 55 C20 53 35 56 50 54 S70 56 72 55" stroke={SL} strokeWidth="0.3" />
    </svg>
  );
}

export function IconFile({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none">
      {/* Folder / file shape */}
      <path d="M16 15 L16 65 L64 65 L64 22 L57 15 Z" stroke={S} strokeWidth="0.7" />
      <path d="M57 15 L57 22 L64 22" stroke={S} strokeWidth="0.5" />
      {/* Document lines */}
      {[28, 34, 40, 46, 52, 58].map((y) => (
        <line key={y} x1="22" y1={y} x2="58" y2={y} stroke={SL} strokeWidth="0.3" />
      ))}
      {/* Stamp / seal */}
      <circle cx="48" cy="52" r="7" stroke={G} strokeWidth="0.6" />
      <circle cx="48" cy="52" r="3" stroke={G} strokeWidth="0.4" />
      {/* Tab */}
      <path d="M16 15 L16 10 L35 10 L38 15" stroke={SL} strokeWidth="0.5" />
    </svg>
  );
}
