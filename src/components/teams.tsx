/* ─── Team unit cards ─── */
/* Teams (not individuals) with key people listed inside.
   Honest about the team being the deliverable, not any one person. */

interface Person {
  name: string;
  note?: string;
}

interface Team {
  name: string;
  what: string;
  people: Person[];
}

const teams: Team[] = [
  {
    name: "Operations",
    what: "Operating cadence, vendor management, hiring infrastructure, process design. The team that runs the day-to-day rhythm.",
    people: [
      { name: "Andrii", note: "Chief of Staff · corporate structure, market entry, hiring" },
      { name: "Illya", note: "Operations lead · daily cadence, vendor stack, automation" },
    ],
  },
  {
    name: "Finance",
    what: "Multi-entity reporting, cash management, bank relationships, compliance documentation. The team that keeps the books closeable and the bank account open.",
    people: [
      { name: "Jana", note: "CFO · multi-entity finance across three jurisdictions" },
      { name: "Diana", note: "Finance operations · management reporting, AP/AR, controls" },
    ],
  },
  {
    name: "Marketing",
    what: "Positioning, channel strategy, content systems, attribution. The team that figures out where the next 50 customers come from.",
    people: [
      { name: "Marina", note: "CMO · positioning, channel strategy, B2B systems" },
    ],
  },
];

const partners = [
  "Legal counsel across Cyprus, Estonia, and Ukraine",
  "Tax advisors per jurisdiction",
  "Audit and assurance partners",
  "Specialist contractors for engineering, design, and data work",
];

export function Teams({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="space-y-0">
        {teams.map((team, i) => (
          <article
            key={team.name}
            className="py-12 md:py-16 border-t border-white/[0.06]"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-1">
                <p className="text-amber/50 text-sm font-mono">{String(i + 1).padStart(2, "0")}</p>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl text-cream">{team.name}</h3>
                <p className="text-xs tracking-[0.15em] uppercase text-amber/50 mt-2">team</p>
              </div>
              <div className="md:col-span-7">
                <p className="text-stone-300 leading-relaxed text-[15px] mb-6">
                  {team.what}
                </p>
                <div className="space-y-2">
                  {team.people.map((person) => (
                    <div key={person.name} className="flex items-baseline gap-3">
                      <span className="text-cream/90 text-sm font-medium w-16 shrink-0">
                        {person.name}
                      </span>
                      {person.note && (
                        <span className="text-stone-500 text-xs leading-relaxed">
                          {person.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Partners */}
      <div className="mt-16 pt-12 border-t border-white/[0.06]">
        <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-6">
          Behind the team
        </p>
        <p className="text-stone-400 text-[15px] leading-relaxed mb-8 max-w-2xl">
          The teams above are the people you work with directly. Behind
          them is a network of partners and specialists we bring in
          when an engagement needs them.
        </p>
        <ul className="space-y-2">
          {partners.map((p) => (
            <li
              key={p}
              className="text-stone-500 text-sm pl-4 border-l border-white/[0.06]"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
