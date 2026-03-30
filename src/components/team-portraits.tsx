/* ─── Team portrait illustrations ─── */
/* Style: architectural line drawing, Leonardo notebook meets Deus Ex.
   Sepia strokes, construction lines, geometric scaffolding around
   human features. Each portrait is distinct but shares the same
   visual language as the note illustrations. */

const S = "rgba(139,115,85,0.65)";   // sepia primary
const SL = "rgba(139,115,85,0.3)";   // sepia light
const SF = "rgba(139,115,85,0.12)";  // sepia faint
const G = "rgba(196,154,108,0.5)";   // gold accent

export function PortraitAndrii({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 240" className={className} fill="none">
      {/* Construction grid */}
      <line x1="100" y1="0" x2="100" y2="240" stroke={SF} strokeWidth="0.3" strokeDasharray="4 4" />
      <line x1="0" y1="80" x2="200" y2="80" stroke={SF} strokeWidth="0.3" strokeDasharray="4 4" />

      {/* Head — geometric, angular */}
      <path d="M100 30 L130 55 L128 95 L115 115 L85 115 L72 95 L70 55 Z" stroke={S} strokeWidth="1" strokeLinejoin="round" />

      {/* Hair — short, structured lines */}
      <path d="M70 55 L68 40 Q100 20 132 40 L130 55" stroke={S} strokeWidth="0.8" />
      {Array.from({ length: 8 }).map((_, i) => {
        const x = 74 + i * 8;
        return <line key={i} x1={x} y1={42 - (i > 2 && i < 6 ? 4 : 0)} x2={x + 2} y2={50} stroke={SL} strokeWidth="0.5" />;
      })}

      {/* Eyes — sharp, focused */}
      <line x1="82" y1="72" x2="95" y2="72" stroke={S} strokeWidth="0.8" />
      <line x1="105" y1="72" x2="118" y2="72" stroke={S} strokeWidth="0.8" />
      <circle cx="88" cy="72" r="2" fill={S} />
      <circle cx="112" cy="72" r="2" fill={S} />
      {/* Brow lines */}
      <path d="M80 67 L96 66" stroke={SL} strokeWidth="0.5" />
      <path d="M104 66 L120 67" stroke={SL} strokeWidth="0.5" />

      {/* Nose — angular */}
      <path d="M100 75 L102 90 L98 92 L96 90" stroke={SL} strokeWidth="0.6" />

      {/* Mouth — slight, composed */}
      <path d="M90 100 Q100 104 110 100" stroke={SL} strokeWidth="0.5" />

      {/* Jaw/chin emphasis */}
      <path d="M85 115 L100 122 L115 115" stroke={S} strokeWidth="0.6" />

      {/* Neck and shoulders — architectural */}
      <line x1="92" y1="122" x2="88" y2="145" stroke={S} strokeWidth="0.7" />
      <line x1="108" y1="122" x2="112" y2="145" stroke={S} strokeWidth="0.7" />
      <path d="M88 145 L40 170 L40 240" stroke={S} strokeWidth="0.8" />
      <path d="M112 145 L160 170 L160 240" stroke={S} strokeWidth="0.8" />

      {/* Collar / shirt lines */}
      <path d="M88 145 L100 160 L112 145" stroke={SL} strokeWidth="0.5" />
      <line x1="100" y1="160" x2="100" y2="200" stroke={SF} strokeWidth="0.4" />

      {/* Golden accent — small geometric mark */}
      <circle cx="100" cy="155" r="2.5" stroke={G} strokeWidth="0.8" />
    </svg>
  );
}

export function PortraitJana({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 240" className={className} fill="none">
      {/* Construction grid */}
      <line x1="100" y1="0" x2="100" y2="240" stroke={SF} strokeWidth="0.3" strokeDasharray="4 4" />
      <circle cx="100" cy="75" r="45" stroke={SF} strokeWidth="0.3" strokeDasharray="4 4" />

      {/* Head — softer oval */}
      <path d="M100 28 L125 50 L128 85 L120 110 L100 118 L80 110 L72 85 L75 50 Z" stroke={S} strokeWidth="1" strokeLinejoin="round" />

      {/* Hair — longer, flowing lines */}
      <path d="M75 50 L70 35 Q100 18 130 35 L125 50" stroke={S} strokeWidth="0.8" />
      <path d="M70 35 L62 55 L58 80 L60 110" stroke={SL} strokeWidth="0.6" />
      <path d="M130 35 L138 55 L142 80 L140 110" stroke={SL} strokeWidth="0.6" />
      <path d="M62 55 L56 75 L55 100" stroke={SF} strokeWidth="0.4" />
      <path d="M138 55 L144 75 L145 100" stroke={SF} strokeWidth="0.4" />

      {/* Eyes — clear, precise */}
      <path d="M82 72 Q88 69 95 72 Q88 74 82 72" stroke={S} strokeWidth="0.7" />
      <path d="M105 72 Q112 69 118 72 Q112 74 105 72" stroke={S} strokeWidth="0.7" />
      <circle cx="88" cy="72" r="1.8" fill={S} />
      <circle cx="112" cy="72" r="1.8" fill={S} />

      {/* Nose */}
      <path d="M100 76 L101 88 L98 90" stroke={SL} strokeWidth="0.5" />

      {/* Mouth */}
      <path d="M92 98 Q100 102 108 98" stroke={SL} strokeWidth="0.5" />

      {/* Neck and shoulders */}
      <line x1="94" y1="118" x2="90" y2="142" stroke={S} strokeWidth="0.7" />
      <line x1="106" y1="118" x2="110" y2="142" stroke={S} strokeWidth="0.7" />
      <path d="M90 142 L42 168 L42 240" stroke={S} strokeWidth="0.8" />
      <path d="M110 142 L158 168 L158 240" stroke={S} strokeWidth="0.8" />

      {/* Collar */}
      <path d="M90 142 L100 155 L110 142" stroke={SL} strokeWidth="0.5" />

      {/* Golden accent — small diamond */}
      <path d="M100 152 L103 156 L100 160 L97 156 Z" stroke={G} strokeWidth="0.7" />
    </svg>
  );
}

export function PortraitMarina({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 240" className={className} fill="none">
      {/* Construction grid */}
      <line x1="100" y1="0" x2="100" y2="240" stroke={SF} strokeWidth="0.3" strokeDasharray="4 4" />
      <line x1="50" y1="120" x2="150" y2="120" stroke={SF} strokeWidth="0.3" strokeDasharray="4 4" />

      {/* Head — balanced, defined */}
      <path d="M100 30 L126 52 L126 88 L118 112 L100 120 L82 112 L74 88 L74 52 Z" stroke={S} strokeWidth="1" strokeLinejoin="round" />

      {/* Hair — structured, medium length */}
      <path d="M74 52 L72 38 Q100 22 128 38 L126 52" stroke={S} strokeWidth="0.8" />
      <path d="M72 38 L66 52 L64 75 L66 95 L70 110" stroke={SL} strokeWidth="0.6" />
      <path d="M128 38 L134 52 L136 75 L134 95 L130 110" stroke={SL} strokeWidth="0.6" />
      {/* Hair detail strands */}
      <path d="M76 42 L74 50" stroke={SF} strokeWidth="0.4" />
      <path d="M124 42 L126 50" stroke={SF} strokeWidth="0.4" />
      <path d="M100 25 L100 35" stroke={SF} strokeWidth="0.4" />

      {/* Eyes — warm, direct */}
      <path d="M82 73 L96 73" stroke={S} strokeWidth="0.7" />
      <path d="M104 73 L118 73" stroke={S} strokeWidth="0.7" />
      <circle cx="89" cy="73" r="2" fill={S} />
      <circle cx="111" cy="73" r="2" fill={S} />
      {/* Lower lash hint */}
      <path d="M84 75 Q89 77 94 75" stroke={SF} strokeWidth="0.3" />
      <path d="M106 75 Q111 77 116 75" stroke={SF} strokeWidth="0.3" />

      {/* Nose */}
      <path d="M100 77 L101 89 L99 91 L97 89" stroke={SL} strokeWidth="0.5" />

      {/* Mouth — slight smile */}
      <path d="M91 100 Q100 105 109 100" stroke={SL} strokeWidth="0.5" />
      <path d="M94 100 Q100 103 106 100" stroke={S} strokeWidth="0.4" />

      {/* Neck and shoulders */}
      <line x1="94" y1="120" x2="90" y2="144" stroke={S} strokeWidth="0.7" />
      <line x1="106" y1="120" x2="110" y2="144" stroke={S} strokeWidth="0.7" />
      <path d="M90 144 L44 170 L44 240" stroke={S} strokeWidth="0.8" />
      <path d="M110 144 L156 170 L156 240" stroke={S} strokeWidth="0.8" />

      {/* Collar — slightly different cut */}
      <path d="M90 144 L85 155 L100 162 L115 155 L110 144" stroke={SL} strokeWidth="0.5" />

      {/* Golden accent — horizontal bar */}
      <line x1="94" y1="158" x2="106" y2="158" stroke={G} strokeWidth="0.8" />
    </svg>
  );
}
