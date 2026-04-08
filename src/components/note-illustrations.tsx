"use client";

/* ─── Hand-drawn style SVG illustrations for Notes ─── */
/* Leonardo notebook aesthetic: construction lines, annotations, warm sepia strokes */

const SEPIA = "rgba(232,230,227,0.9)";
const SEPIA_LIGHT = "rgba(232,230,227,0.5)";
const SEPIA_FAINT = "rgba(232,230,227,0.22)";
const GOLD = "rgba(212,170,120,0.9)";

export function LedgerIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} fill="none">
      {/* Open book / ledger */}
      <path d="M300 50 L300 350" stroke={SEPIA_LIGHT} strokeWidth="2" />
      {/* Left page */}
      <path d="M60 40 L290 45 L290 355 L55 350 Z" stroke={SEPIA} strokeWidth="1.2" fill="rgba(14,14,20,0.4)" />
      {/* Right page */}
      <path d="M310 45 L540 40 L545 350 L310 355 Z" stroke={SEPIA} strokeWidth="1.2" fill="rgba(14,14,20,0.4)" />
      {/* Spine curve */}
      <path d="M290 45 Q300 35 310 45" stroke={SEPIA} strokeWidth="0.9" />
      <path d="M290 355 Q300 365 310 355" stroke={SEPIA} strokeWidth="0.9" />

      {/* Left page: DARE (debit) header */}
      <text x="150" y="82" fill={SEPIA} fontSize="16" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" fontWeight="500" textAnchor="middle">Dare</text>
      <line x1="80" y1="92" x2="270" y2="92" stroke={SEPIA_LIGHT} strokeWidth="0.8" />

      {/* Right page: AVERE (credit) header */}
      <text x="420" y="82" fill={SEPIA} fontSize="16" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" fontWeight="500" textAnchor="middle">Avere</text>
      <line x1="330" y1="92" x2="520" y2="92" stroke={SEPIA_LIGHT} strokeWidth="0.8" />

      {/* Ledger lines — left */}
      {[115, 145, 175, 205, 235, 265, 295, 325].map((y) => (
        <line key={`l${y}`} x1="80" y1={y} x2="270" y2={y} stroke={SEPIA_FAINT} strokeWidth="0.6" />
      ))}
      {/* Ledger lines — right */}
      {[115, 145, 175, 205, 235, 265, 295, 325].map((y) => (
        <line key={`r${y}`} x1="330" y1={y} x2="520" y2={y} stroke={SEPIA_FAINT} strokeWidth="0.6" />
      ))}

      {/* Vertical amount column dividers */}
      <line x1="230" y1="92" x2="230" y2="345" stroke={SEPIA_FAINT} strokeWidth="0.6" />
      <line x1="480" y1="92" x2="480" y2="345" stroke={SEPIA_FAINT} strokeWidth="0.6" />

      {/* Sample entries — sketchy handwriting style */}
      <text x="90" y="132" fill={SEPIA_LIGHT} fontSize="11" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic">Per cassa di contanti</text>
      <text x="240" y="132" fill={SEPIA} fontSize="11" fontFamily="var(--font-humanist), Georgia, serif" fontWeight="500" textAnchor="end">£ 340</text>
      <text x="90" y="162" fill={SEPIA_LIGHT} fontSize="11" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic">Per mercanzia spezie</text>
      <text x="240" y="162" fill={SEPIA} fontSize="11" fontFamily="var(--font-humanist), Georgia, serif" fontWeight="500" textAnchor="end">£ 1,200</text>

      <text x="340" y="132" fill={SEPIA_LIGHT} fontSize="11" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic">A capital nostro</text>
      <text x="490" y="132" fill={SEPIA} fontSize="11" fontFamily="var(--font-humanist), Georgia, serif" fontWeight="500" textAnchor="end">£ 1,540</text>

      {/* Balance annotation — gold */}
      <text x="300" y="385" fill={GOLD} fontSize="12" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" fontWeight="500" textAnchor="middle">summa summarum</text>

      {/* Construction lines */}
      <line x1="40" y1="200" x2="560" y2="200" stroke={SEPIA_FAINT} strokeWidth="0.5" strokeDasharray="8 6" />
    </svg>
  );
}

export function MineShaftIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} fill="none">
      {/* Ground surface line */}
      <path d="M0 120 C100 115 200 125 300 118 S500 122 600 120" stroke={SEPIA} strokeWidth="1.2" />
      {/* Surface texture — grass/rock marks */}
      {[50, 120, 200, 280, 380, 460, 530].map((x) => (
        <line key={x} x1={x} y1={118} x2={x + 3} y2={112} stroke={SEPIA_LIGHT} strokeWidth="0.8" />
      ))}

      {/* Main shaft — vertical */}
      <rect x="240" y="120" width="60" height="220" stroke={SEPIA} strokeWidth="1.2" fill="rgba(14,14,20,0.85)" />
      {/* Timber supports */}
      {[160, 200, 240, 280, 320].map((y) => (
        <line key={y} x1="236" y1={y} x2="304" y2={y} stroke={SEPIA} strokeWidth="0.9" />
      ))}

      {/* Horizontal gallery — left */}
      <rect x="80" y="260" width="160" height="40" stroke={SEPIA} strokeWidth="1" fill="rgba(14,14,20,0.7)" />
      {/* Gallery supports */}
      {[100, 130, 160, 190, 220].map((x) => (
        <line key={x} x1={x} y1="256" x2={x} y2="304" stroke={SEPIA_LIGHT} strokeWidth="0.6" />
      ))}

      {/* Horizontal gallery — right (deeper) */}
      <rect x="300" y="310" width="180" height="35" stroke={SEPIA} strokeWidth="1" fill="rgba(14,14,20,0.7)" />

      {/* Ore vein — gold accent */}
      <path d="M90 275 C140 272 180 280 230 276" stroke={GOLD} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M310 325 C380 322 430 328 470 324" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" />

      {/* Water level indication */}
      <path d="M244 330 C260 328 280 332 296 330" stroke="rgba(130,160,185,0.55)" strokeWidth="0.9" />
      <path d="M244 334 C258 332 282 336 296 334" stroke="rgba(130,160,185,0.4)" strokeWidth="0.8" />

      {/* Pump mechanism sketch — top */}
      <circle cx="270" cy="100" r="15" stroke={SEPIA} strokeWidth="1" />
      <line x1="270" y1="85" x2="270" y2="115" stroke={SEPIA} strokeWidth="0.8" />
      <line x1="255" y1="100" x2="285" y2="100" stroke={SEPIA} strokeWidth="0.8" />
      {/* Rope from pump to shaft */}
      <line x1="270" y1="115" x2="270" y2="120" stroke={SEPIA_LIGHT} strokeWidth="0.6" strokeDasharray="3 2" />

      {/* Geological strata layers */}
      <path d="M0 160 C200 155 400 165 600 158" stroke={SEPIA_FAINT} strokeWidth="0.6" />
      <path d="M0 220 C200 218 400 224 600 220" stroke={SEPIA_FAINT} strokeWidth="0.6" />
      <path d="M0 300 C200 296 400 304 600 298" stroke={SEPIA_FAINT} strokeWidth="0.6" />

      {/* Dimension annotations */}
      <line x1="320" y1="120" x2="320" y2="340" stroke={SEPIA_FAINT} strokeWidth="0.5" />
      <text x="328" y="230" fill={SEPIA_LIGHT} fontSize="10" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic" transform="rotate(90, 328, 230)">profundità</text>

      {/* Risk labels — small annotation style */}
      <text x="100" y="250" fill={SEPIA} fontSize="10" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic">rischio geologico</text>
      <text x="420" y="360" fill={SEPIA} fontSize="10" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic">rischio idraulico</text>
    </svg>
  );
}

export function ShipCrossSection({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} fill="none">
      {/* Hull profile */}
      <path
        d="M100 200 Q80 260 120 320 Q200 370 300 380 Q400 370 480 320 Q520 260 500 200"
        stroke={SEPIA}
        strokeWidth="1.4"
      />
      {/* Deck line */}
      <path d="M100 200 Q300 180 500 200" stroke={SEPIA} strokeWidth="1.2" />
      {/* Upper deck */}
      <path d="M120 170 Q300 155 480 170" stroke={SEPIA} strokeWidth="0.9" />

      {/* Mast */}
      <line x1="300" y1="50" x2="300" y2="380" stroke={SEPIA} strokeWidth="1.2" />
      {/* Cross beams / yards */}
      <line x1="220" y1="80" x2="380" y2="80" stroke={SEPIA} strokeWidth="0.8" />
      <line x1="240" y1="130" x2="360" y2="130" stroke={SEPIA} strokeWidth="0.8" />

      {/* Cargo hold divisions */}
      <line x1="200" y1="200" x2="200" y2="340" stroke={SEPIA_LIGHT} strokeWidth="0.7" />
      <line x1="300" y1="200" x2="300" y2="370" stroke={SEPIA_LIGHT} strokeWidth="0.7" />
      <line x1="400" y1="200" x2="400" y2="340" stroke={SEPIA_LIGHT} strokeWidth="0.7" />

      {/* Horizontal hold divisions */}
      <line x1="140" y1="260" x2="460" y2="260" stroke={SEPIA_FAINT} strokeWidth="0.6" />
      <line x1="160" y1="310" x2="440" y2="310" stroke={SEPIA_FAINT} strokeWidth="0.6" />

      {/* Cargo annotations */}
      <text x="150" y="235" fill={SEPIA_LIGHT} fontSize="11" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic">specerijen</text>
      <text x="305" y="235" fill={SEPIA_LIGHT} fontSize="11" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic">zijde</text>
      <text x="410" y="235" fill={SEPIA_LIGHT} fontSize="11" fontFamily="var(--font-humanist), Georgia, serif" fontStyle="italic">porselein</text>

      {/* VOC monogram */}
      <text x="300" y="300" fill={GOLD} fontSize="22" fontFamily="var(--font-humanist), Georgia, serif" fontWeight="bold" textAnchor="middle">VOC</text>

      {/* Waterline */}
      <path d="M60 280 C100 275 140 285 180 278 S260 282 300 278 S380 284 420 278 S500 282 540 280" stroke="rgba(130,160,185,0.45)" strokeWidth="0.8" />

      {/* Construction / measurement lines */}
      <line x1="80" y1="380" x2="520" y2="380" stroke={SEPIA_FAINT} strokeWidth="0.5" strokeDasharray="6 4" />
      <line x1="80" y1="50" x2="80" y2="380" stroke={SEPIA_FAINT} strokeWidth="0.5" strokeDasharray="6 4" />

      {/* Chamber labels */}
      <text x="150" y="295" fill={SEPIA_LIGHT} fontSize="9" fontFamily="var(--font-humanist), Georgia, serif">Amsterdam</text>
      <text x="350" y="295" fill={SEPIA_LIGHT} fontSize="9" fontFamily="var(--font-humanist), Georgia, serif">Zeeland</text>
    </svg>
  );
}
