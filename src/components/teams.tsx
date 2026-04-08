/* ─── Team unit cards ─── */
/* Teams (not individuals) with key people listed inside.
   Honest about the team being the deliverable, not any one person.

   ── TODO (human input required) ──
   Each person has three fields that need verifiable content:
     - role (already filled)
     - background: 1 short line of prior operating history
                   (e.g. "10+ years building B2B data products · previously
                   built and exited X · ran ops at Y")
     - linkedin: full URL to public profile (undefined to hide)

   Never fabricate — if a field is unknown, leave it undefined and the
   line won't render. Trust signals fail closed, not open.
*/

interface Person {
  name: string;
  role: string;
  background?: string;
  linkedin?: string;
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
      {
        name: "Andrii",
        role: "Chief of Staff · corporate structure, market entry, hiring",
        background: undefined, // TODO: e.g. "Building B2B data businesses since 2018 · founded the first company in the group"
        linkedin: undefined, // TODO: full URL
      },
      {
        name: "Illya",
        role: "Operations lead · daily cadence, vendor stack, automation",
        background: undefined, // TODO
        linkedin: undefined, // TODO
      },
    ],
  },
  {
    name: "Finance",
    what: "Multi-entity reporting, cash management, bank relationships, compliance documentation. The team that keeps the books closeable and the bank account open.",
    people: [
      {
        name: "Jana",
        role: "CFO · multi-entity finance across three jurisdictions",
        background: undefined, // TODO
        linkedin: undefined, // TODO
      },
      {
        name: "Diana",
        role: "Finance operations · management reporting, AP/AR, controls",
        background: undefined, // TODO
        linkedin: undefined, // TODO
      },
    ],
  },
  {
    name: "Marketing",
    what: "Positioning, channel strategy, content systems, attribution. The team that figures out where the next 50 customers come from.",
    people: [
      {
        name: "Marina",
        role: "CMO · positioning, channel strategy, B2B systems",
        background: undefined, // TODO
        linkedin: undefined, // TODO
      },
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
                <div className="space-y-5">
                  {team.people.map((person) => (
                    <div key={person.name} className="border-l border-white/[0.06] pl-4">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="text-cream text-sm font-medium">
                          {person.name}
                        </span>
                        {person.linkedin && (
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-stone-500 hover:text-amber/70 transition-colors"
                          >
                            LinkedIn ↗
                          </a>
                        )}
                      </div>
                      <p className="text-stone-400 text-xs leading-relaxed mt-1">
                        {person.role}
                      </p>
                      {person.background && (
                        <p className="text-stone-500 text-xs leading-relaxed mt-1.5 italic">
                          {person.background}
                        </p>
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
