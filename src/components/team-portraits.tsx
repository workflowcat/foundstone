/* ─── Team portrait illustrations ─── */
/* Refined portraits: sepia line art with actual portrait quality.
   More anatomical detail, natural proportions, distinct faces.
   Still construction-line aesthetic but reads as a person, not a diagram. */

const S = "rgba(139,115,85,0.6)";
const SM = "rgba(139,115,85,0.45)";
const SL = "rgba(139,115,85,0.25)";
const SF = "rgba(139,115,85,0.1)";
const G = "rgba(196,154,108,0.4)";

/* Andrii — angular features, short hair, direct gaze, slight stubble suggestion */
export function PortraitAndrii({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 220" className={className} fill="none">
      {/* Faint construction */}
      <line x1="90" y1="10" x2="90" y2="210" stroke={SF} strokeWidth="0.3" strokeDasharray="6 6" />
      <ellipse cx="90" cy="72" rx="38" ry="46" stroke={SF} strokeWidth="0.3" strokeDasharray="6 6" />

      {/* Hair — short, textured, slightly swept */}
      <path d="M58 42 C60 28 72 18 90 16 C108 18 120 28 122 42" stroke={S} strokeWidth="0.9" />
      <path d="M58 42 C58 36 62 30 70 26" stroke={SM} strokeWidth="0.5" />
      <path d="M122 42 C122 36 118 30 110 26" stroke={SM} strokeWidth="0.5" />
      {/* Hair texture strokes */}
      <path d="M68 22 L72 32" stroke={SL} strokeWidth="0.4" />
      <path d="M80 18 L82 28" stroke={SL} strokeWidth="0.4" />
      <path d="M90 17 L90 27" stroke={SL} strokeWidth="0.4" />
      <path d="M100 18 L98 28" stroke={SL} strokeWidth="0.4" />
      <path d="M112 22 L108 32" stroke={SL} strokeWidth="0.4" />

      {/* Face outline — angular jaw, defined cheekbones */}
      <path d="M58 42 L56 58 L58 78 L64 92 L74 104 L90 112 L106 104 L116 92 L122 78 L124 58 L122 42" stroke={S} strokeWidth="0.8" />

      {/* Forehead line */}
      <path d="M62 48 C70 44 110 44 118 48" stroke={SL} strokeWidth="0.3" />

      {/* Eyebrows — strong, slightly angled */}
      <path d="M68 58 C72 55 80 55 84 57" stroke={SM} strokeWidth="0.7" />
      <path d="M96 57 C100 55 108 55 112 58" stroke={SM} strokeWidth="0.7" />

      {/* Eyes — detailed, focused */}
      <path d="M70 65 C74 62 82 62 86 65 C82 67 74 67 70 65" stroke={S} strokeWidth="0.6" />
      <path d="M94 65 C98 62 106 62 110 65 C106 67 98 67 94 65" stroke={S} strokeWidth="0.6" />
      {/* Iris */}
      <circle cx="78" cy="64.5" r="3" stroke={S} strokeWidth="0.5" />
      <circle cx="78" cy="64.5" r="1.5" fill={SM} />
      <circle cx="102" cy="64.5" r="3" stroke={S} strokeWidth="0.5" />
      <circle cx="102" cy="64.5" r="1.5" fill={SM} />
      {/* Upper lid crease */}
      <path d="M70 62 C74 59 82 59 86 62" stroke={SL} strokeWidth="0.3" />
      <path d="M94 62 C98 59 106 59 110 62" stroke={SL} strokeWidth="0.3" />

      {/* Nose — straight, defined bridge */}
      <path d="M88 58 L87 72 L84 78 L88 80 L92 80 L96 78 L93 72 L92 58" stroke={SL} strokeWidth="0.4" />
      <path d="M84 78 L88 80" stroke={SM} strokeWidth="0.5" />
      <path d="M92 80 L96 78" stroke={SM} strokeWidth="0.5" />

      {/* Mouth — composed, slight asymmetry */}
      <path d="M78 90 C82 88 86 87 90 88 C94 87 98 88 102 90" stroke={SM} strokeWidth="0.5" />
      <path d="M80 90 C85 92 95 92 100 90" stroke={SL} strokeWidth="0.35" />

      {/* Chin definition */}
      <path d="M82 102 C86 106 94 106 98 102" stroke={SL} strokeWidth="0.3" />

      {/* Ears */}
      <path d="M56 58 C52 58 50 64 50 72 C50 78 52 82 56 82" stroke={SL} strokeWidth="0.4" />
      <path d="M124 58 C128 58 130 64 130 72 C130 78 128 82 124 82" stroke={SL} strokeWidth="0.4" />

      {/* Neck */}
      <path d="M80 112 L78 135" stroke={SM} strokeWidth="0.6" />
      <path d="M100 112 L102 135" stroke={SM} strokeWidth="0.6" />
      {/* Adam's apple hint */}
      <path d="M89 122 L90 126 L91 122" stroke={SL} strokeWidth="0.3" />

      {/* Shoulders — broader, structured */}
      <path d="M78 135 C70 138 50 145 35 155 L30 210" stroke={S} strokeWidth="0.7" />
      <path d="M102 135 C110 138 130 145 145 155 L150 210" stroke={S} strokeWidth="0.7" />

      {/* Collar */}
      <path d="M78 135 L90 148 L102 135" stroke={SL} strokeWidth="0.5" />
      <line x1="90" y1="148" x2="90" y2="175" stroke={SF} strokeWidth="0.4" />

      {/* Subtle stubble texture */}
      {[
        [76, 96], [80, 98], [84, 100], [90, 102], [96, 100], [100, 98], [104, 96],
        [78, 92], [86, 94], [94, 94], [102, 92],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="0.4" fill={SL} />
      ))}

      {/* Gold accent pin */}
      <circle cx="90" cy="152" r="2" stroke={G} strokeWidth="0.7" />
    </svg>
  );
}

/* Jana — softer features, longer hair, precise gaze */
export function PortraitJana({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 220" className={className} fill="none">
      {/* Faint construction */}
      <line x1="90" y1="10" x2="90" y2="210" stroke={SF} strokeWidth="0.3" strokeDasharray="6 6" />

      {/* Hair — longer, parted, layered */}
      <path d="M56 44 C56 26 70 14 90 12 C110 14 124 26 124 44" stroke={S} strokeWidth="0.8" />
      <path d="M56 44 L52 60 L48 80 L46 105 L48 130" stroke={SM} strokeWidth="0.6" />
      <path d="M124 44 L128 60 L132 80 L134 105 L132 130" stroke={SM} strokeWidth="0.6" />
      {/* Hair layers */}
      <path d="M52 60 L46 72 L44 90 L44 115" stroke={SL} strokeWidth="0.4" />
      <path d="M128 60 L134 72 L136 90 L136 115" stroke={SL} strokeWidth="0.4" />
      {/* Part line */}
      <path d="M82 14 C84 20 85 28 84 38" stroke={SL} strokeWidth="0.3" />
      {/* Strands */}
      <path d="M62 30 L58 44" stroke={SL} strokeWidth="0.35" />
      <path d="M72 20 L68 36" stroke={SL} strokeWidth="0.35" />
      <path d="M100 18 L104 34" stroke={SL} strokeWidth="0.35" />
      <path d="M114 26 L118 42" stroke={SL} strokeWidth="0.35" />

      {/* Face — softer oval, slightly rounder jaw */}
      <path d="M58 44 L56 60 L58 78 L66 94 L78 106 L90 112 L102 106 L114 94 L122 78 L124 60 L122 44" stroke={S} strokeWidth="0.7" />

      {/* Eyebrows — refined arch */}
      <path d="M68 56 C72 53 80 52 85 55" stroke={SM} strokeWidth="0.6" />
      <path d="M95 55 C100 52 108 53 112 56" stroke={SM} strokeWidth="0.6" />

      {/* Eyes — slightly larger, almond shape */}
      <path d="M69 64 C73 60 83 60 87 64 C83 67 73 67 69 64" stroke={S} strokeWidth="0.6" />
      <path d="M93 64 C97 60 107 60 111 64 C107 67 97 67 93 64" stroke={S} strokeWidth="0.6" />
      <circle cx="78" cy="63.5" r="3.2" stroke={S} strokeWidth="0.5" />
      <circle cx="78" cy="63.5" r="1.6" fill={SM} />
      <circle cx="102" cy="63.5" r="3.2" stroke={S} strokeWidth="0.5" />
      <circle cx="102" cy="63.5" r="1.6" fill={SM} />
      {/* Lash suggestion */}
      <path d="M69 64 C68 63 68 62 69 61" stroke={SL} strokeWidth="0.3" />
      <path d="M111 64 C112 63 112 62 111 61" stroke={SL} strokeWidth="0.3" />

      {/* Nose — narrow, slightly upturned */}
      <path d="M88 56 L87 72 L84 77 L88 79 L92 79 L96 77 L93 72" stroke={SL} strokeWidth="0.4" />
      <path d="M86 77 L88 79" stroke={SM} strokeWidth="0.4" />

      {/* Mouth — defined, gentle */}
      <path d="M80 88 C84 86 88 85 90 86 C92 85 96 86 100 88" stroke={SM} strokeWidth="0.5" />
      <path d="M82 88 C86 90 94 90 98 88" stroke={SL} strokeWidth="0.35" />
      {/* Cupid's bow */}
      <path d="M87 86 L90 84 L93 86" stroke={SL} strokeWidth="0.3" />

      {/* Ears (partially hidden by hair) */}
      <path d="M56 60 C54 64 54 72 56 76" stroke={SL} strokeWidth="0.3" />
      <path d="M124 60 C126 64 126 72 124 76" stroke={SL} strokeWidth="0.3" />

      {/* Neck — slender */}
      <path d="M82 112 L80 136" stroke={SM} strokeWidth="0.5" />
      <path d="M98 112 L100 136" stroke={SM} strokeWidth="0.5" />

      {/* Shoulders */}
      <path d="M80 136 C72 140 52 148 38 156 L34 210" stroke={S} strokeWidth="0.7" />
      <path d="M100 136 C108 140 128 148 142 156 L146 210" stroke={S} strokeWidth="0.7" />

      {/* Collar — V-neck */}
      <path d="M80 136 L90 152 L100 136" stroke={SL} strokeWidth="0.5" />

      {/* Gold accent — small diamond */}
      <path d="M90 148 L93 152 L90 156 L87 152 Z" stroke={G} strokeWidth="0.6" />
    </svg>
  );
}

/* Marina — defined features, medium hair, confident expression */
export function PortraitMarina({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 220" className={className} fill="none">
      {/* Faint construction */}
      <line x1="90" y1="10" x2="90" y2="210" stroke={SF} strokeWidth="0.3" strokeDasharray="6 6" />

      {/* Hair — medium, voluminous, swept to one side */}
      <path d="M54 46 C54 26 70 14 90 12 C112 14 126 28 126 46" stroke={S} strokeWidth="0.8" />
      <path d="M54 46 L50 62 L48 82 L50 100 L54 115" stroke={SM} strokeWidth="0.6" />
      <path d="M126 46 L128 58 L128 72 L126 85" stroke={SM} strokeWidth="0.5" />
      {/* Volume on the left side */}
      <path d="M50 62 L44 76 L42 95 L44 112 L48 125" stroke={SL} strokeWidth="0.4" />
      <path d="M54 46 L48 52" stroke={SL} strokeWidth="0.35" />
      {/* Strands */}
      <path d="M64 22 L58 38" stroke={SL} strokeWidth="0.35" />
      <path d="M78 16 L76 30" stroke={SL} strokeWidth="0.35" />
      <path d="M102 16 L106 30" stroke={SL} strokeWidth="0.35" />
      <path d="M116 24 L120 40" stroke={SL} strokeWidth="0.35" />
      {/* Swept fringe */}
      <path d="M70 18 C76 20 82 28 78 38" stroke={SL} strokeWidth="0.4" />

      {/* Face — balanced, slightly wider cheekbones */}
      <path d="M56 46 L54 62 L56 80 L64 94 L76 106 L90 112 L104 106 L116 94 L124 80 L126 62 L124 46" stroke={S} strokeWidth="0.7" />

      {/* Cheekbone emphasis */}
      <path d="M58 76 C62 74 66 75 68 78" stroke={SL} strokeWidth="0.25" />
      <path d="M122 76 C118 74 114 75 112 78" stroke={SL} strokeWidth="0.25" />

      {/* Eyebrows — defined, confident */}
      <path d="M66 56 C70 52 80 52 86 55" stroke={SM} strokeWidth="0.65" />
      <path d="M94 55 C100 52 110 52 114 56" stroke={SM} strokeWidth="0.65" />

      {/* Eyes — direct, warm */}
      <path d="M68 64 C72 60 82 60 86 64 C82 67 72 67 68 64" stroke={S} strokeWidth="0.6" />
      <path d="M94 64 C98 60 108 60 112 64 C108 67 98 67 94 64" stroke={S} strokeWidth="0.6" />
      <circle cx="77" cy="63.5" r="3" stroke={S} strokeWidth="0.5" />
      <circle cx="77" cy="63.5" r="1.5" fill={SM} />
      <circle cx="103" cy="63.5" r="3" stroke={S} strokeWidth="0.5" />
      <circle cx="103" cy="63.5" r="1.5" fill={SM} />
      {/* Light catch */}
      <circle cx="79" cy="62" r="0.6" fill="rgba(232,230,227,0.15)" />
      <circle cx="105" cy="62" r="0.6" fill="rgba(232,230,227,0.15)" />

      {/* Nose */}
      <path d="M88 57 L87 72 L83 78 L87 80 L93 80 L97 78 L93 72" stroke={SL} strokeWidth="0.4" />
      <path d="M85 78 L87 80" stroke={SM} strokeWidth="0.4" />
      <path d="M93 80 L95 78" stroke={SM} strokeWidth="0.4" />

      {/* Mouth — slight confident smile */}
      <path d="M78 90 C82 87 88 86 90 87 C92 86 98 87 102 90" stroke={SM} strokeWidth="0.5" />
      <path d="M80 90 C84 93 96 93 100 90" stroke={SL} strokeWidth="0.35" />
      {/* Smile line suggestion */}
      <path d="M76 90 C76 92 77 93 78 93" stroke={SL} strokeWidth="0.2" />
      <path d="M104 90 C104 92 103 93 102 93" stroke={SL} strokeWidth="0.2" />

      {/* Ears (partially visible) */}
      <path d="M54 62 C52 66 52 74 54 78" stroke={SL} strokeWidth="0.3" />

      {/* Neck */}
      <path d="M82 112 L80 136" stroke={SM} strokeWidth="0.5" />
      <path d="M98 112 L100 136" stroke={SM} strokeWidth="0.5" />

      {/* Shoulders */}
      <path d="M80 136 C72 140 54 148 40 156 L36 210" stroke={S} strokeWidth="0.7" />
      <path d="M100 136 C108 140 126 148 140 156 L144 210" stroke={S} strokeWidth="0.7" />

      {/* Collar — crew neck */}
      <path d="M80 136 C84 140 96 140 100 136" stroke={SL} strokeWidth="0.5" />
      <path d="M84 140 C86 144 94 144 96 140" stroke={SF} strokeWidth="0.3" />

      {/* Gold accent — horizontal bar */}
      <line x1="84" y1="150" x2="96" y2="150" stroke={G} strokeWidth="0.7" />
    </svg>
  );
}
