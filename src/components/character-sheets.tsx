"use client";

/* ─── Character sheet components ─── */
/* RPG-meets-operational-reality. Stat bars, equipment lists,
   experience log. Sepia notebook style. */

const C = "rgba(232,230,227,0.75)";
const CM = "rgba(232,230,227,0.45)";
const CL = "rgba(232,230,227,0.2)";
const G = "rgba(196,154,108,0.7)";
const GL = "rgba(196,154,108,0.35)";

interface Stat {
  name: string;
  value: number; // 0-5
}

interface CharacterProps {
  name: string;
  role: string;
  origin: string;
  stats: Stat[];
  carries: string[];
  hasSeen: string[];
  className?: string;
}

export function CharacterSheet({
  name, role, origin, stats, carries, hasSeen, className = "",
}: CharacterProps) {
  return (
    <div className={`border border-white/[0.08] bg-stone-900/40 p-6 md:p-8 ${className}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="font-serif text-2xl text-cream">{name}</p>
          <p className="text-xs tracking-[0.2em] uppercase text-amber/70 mt-1">{role}</p>
        </div>
        {/* Level / class icon — geometric initial */}
        <div className="w-10 h-10 flex items-center justify-center border border-amber/40 shrink-0">
          <span className="font-serif text-lg text-amber/80">{name[0]}</span>
        </div>
      </div>

      {/* Origin */}
      <p className="text-stone-300 text-sm leading-relaxed mb-8 italic">
        {origin}
      </p>

      {/* Stats — hand-drawn bar chart */}
      <div className="mb-8">
        <p className="text-xs tracking-[0.15em] uppercase text-stone-500 mb-4">Attributes</p>
        <div className="space-y-3">
          {stats.map((stat) => (
            <div key={stat.name} className="flex items-center gap-3">
              <span className="text-xs text-stone-400 w-28 shrink-0 text-right">{stat.name}</span>
              <div className="flex-1 flex gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-2.5 flex-1 rounded-sm transition-all"
                    style={{
                      background: i < stat.value
                        ? "rgba(196,154,108,0.7)"
                        : "rgba(232,230,227,0.08)",
                      border: i < stat.value
                        ? "1px solid rgba(196,154,108,0.5)"
                        : "1px solid rgba(232,230,227,0.06)",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carries */}
      <div className="mb-8">
        <p className="text-xs tracking-[0.15em] uppercase text-stone-500 mb-3">Carries</p>
        <div className="flex flex-wrap gap-2">
          {carries.map((item) => (
            <span key={item} className="text-xs text-stone-400 border border-white/[0.06] px-2.5 py-1">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Has seen */}
      <div>
        <p className="text-xs tracking-[0.15em] uppercase text-stone-500 mb-3">Has seen</p>
        <div className="space-y-2">
          {hasSeen.map((exp) => (
            <p key={exp} className="text-stone-400 text-xs leading-relaxed pl-3 border-l border-white/[0.06]">
              {exp}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Party Composition — coverage map ─── */

interface CoverageRow {
  dimension: string;
  andrii: number; // 0-3: 0=none, 1=backup, 2=capable, 3=primary
  jana: number;
  marina: number;
}

export function PartyComposition({ className = "" }: { className?: string }) {
  const coverage: CoverageRow[] = [
    { dimension: "Corporate structure", andrii: 3, jana: 1, marina: 0 },
    { dimension: "Legal / governance", andrii: 3, jana: 1, marina: 0 },
    { dimension: "Market entry strategy", andrii: 3, jana: 0, marina: 2 },
    { dimension: "Hiring pipeline", andrii: 3, jana: 0, marina: 1 },
    { dimension: "Fundraise / exit prep", andrii: 3, jana: 2, marina: 0 },
    { dimension: "Management reporting", andrii: 1, jana: 3, marina: 0 },
    { dimension: "Cash flow / treasury", andrii: 0, jana: 3, marina: 0 },
    { dimension: "Bank relationships", andrii: 1, jana: 3, marina: 0 },
    { dimension: "Multi-entity finance", andrii: 0, jana: 3, marina: 0 },
    { dimension: "Compliance / EDD", andrii: 2, jana: 2, marina: 0 },
    { dimension: "Positioning", andrii: 0, jana: 0, marina: 3 },
    { dimension: "Channel strategy", andrii: 0, jana: 0, marina: 3 },
    { dimension: "Content systems", andrii: 1, jana: 0, marina: 3 },
    { dimension: "People ops", andrii: 2, jana: 1, marina: 0 },
    { dimension: "Entity management", andrii: 2, jana: 2, marina: 0 },
    { dimension: "Process automation", andrii: 3, jana: 1, marina: 1 },
  ];

  const levelColor = (v: number) => {
    if (v === 3) return "rgba(196,154,108,0.85)";
    if (v === 2) return "rgba(196,154,108,0.5)";
    if (v === 1) return "rgba(232,230,227,0.25)";
    return "transparent";
  };

  const levelLabel = (v: number) => {
    if (v === 3) return "primary";
    if (v === 2) return "capable";
    if (v === 1) return "backup";
    return "";
  };

  return (
    <div className={`border border-white/[0.08] bg-stone-900/40 p-6 md:p-8 ${className}`}>
      <p className="text-xs tracking-[0.15em] uppercase text-stone-500 mb-2">
        Party composition
      </p>
      <p className="text-stone-400 text-sm mb-6">
        Coverage map across operational dimensions. Primary means they
        own it. Capable means they can run it. Backup means they can
        cover in a pinch.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-white/[0.06]">
              <th className="text-left text-stone-600 font-normal py-2 pr-4 w-40">Dimension</th>
              <th className="text-center text-stone-600 font-normal py-2 px-2 w-20">Andrii</th>
              <th className="text-center text-stone-600 font-normal py-2 px-2 w-20">Jana</th>
              <th className="text-center text-stone-600 font-normal py-2 px-2 w-20">Marina</th>
            </tr>
          </thead>
          <tbody>
            {coverage.map((row) => (
              <tr key={row.dimension} className="border-b border-white/[0.02]">
                <td className="text-stone-400 py-2 pr-4">{row.dimension}</td>
                {[row.andrii, row.jana, row.marina].map((v, i) => (
                  <td key={i} className="text-center py-2 px-2">
                    {v > 0 && (
                      <span
                        className="inline-block px-2 py-0.5 rounded-sm text-[10px]"
                        style={{
                          background: levelColor(v),
                          color: v >= 2 ? "rgba(17,17,22,0.8)" : CM,
                          border: `1px solid ${levelColor(v)}`,
                        }}
                      >
                        {levelLabel(v)}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Gaps */}
      <div className="mt-8 pt-6 border-t border-white/[0.04]">
        <p className="text-xs tracking-[0.15em] uppercase text-stone-500 mb-3">
          Known gaps
        </p>
        <div className="space-y-2">
          {[
            "No dedicated daily operations person — embedded COO work for clients is scoped per engagement and staffed accordingly",
            "No dedicated technical lead — engineering oversight relies on external partners",
            "Data infrastructure handled ad hoc — not a standing function yet",
            "Legal outsourced per-jurisdiction via partner network",
          ].map((gap) => (
            <p key={gap} className="text-stone-500 text-xs leading-relaxed pl-3 border-l border-white/[0.06]">
              {gap}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
