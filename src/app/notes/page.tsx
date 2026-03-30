import Link from "next/link";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animate";

const notes = [
  {
    slug: "what-your-bank-sees",
    date: "March 2025",
    title: "What Your Bank Actually Sees When They Open Your File",
    excerpt:
      "A compliance officer has between 40 and 200 corporate files on their desk. The difference between approval in a day and a three-month escalation is not the quality of the business. It is the quality of the documentation.",
    readTime: "16 min read",
  },
  {
    slug: "venetian-bookkeeping",
    date: "March 2025",
    title: "Why the Venetian Republic\u2019s Bookkeeping System Matters for Modern SaaS Companies",
    excerpt:
      "The longest-lived operational technology in business is 530 years old, and you use it every day without thinking about it. Luca Pacioli documented the method of Venice in 1494. ASC 606 is Pacioli in a suit.",
    readTime: "12 min read",
  },
  {
    slug: "risk-management-1556",
    date: "February 2025",
    title: "What Mining Engineers Knew About Risk Management in 1556 That Startup Founders Don\u2019t",
    excerpt:
      "Georgius Agricola catalogued six categories of risk 470 years ago. Modern compliance frameworks \u2014 SOC 2, ISO 31000, COSO ERM \u2014 follow the same structure. He would wonder why it took everyone else so long.",
    readTime: "9 min read",
  },
  {
    slug: "dutch-east-india-holding",
    date: "January 2025",
    title: "How the Dutch East India Company Invented the Holding Company Structure",
    excerpt:
      "The VOC lasted 197 years. It invented joint-stock ownership, limited liability, and the multi-subsidiary holding structure. It also failed at intercompany accounting. Four centuries later, the accounting is still the hard part.",
    readTime: "11 min read",
  },
];

export default function NotesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-amber mb-6">
              Notes
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-cream">
              Notes from the back office.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-stone-400 text-lg max-w-2xl leading-relaxed">
              Things we&apos;ve learned from running companies, managing money
              across borders, and automating processes that shouldn&apos;t
              require a human. Updated when we have something to say, not on a
              content calendar.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Notes list */}
      <section className="relative px-6 md:px-12 pb-32 md:pb-40">
        <div className="max-w-4xl mx-auto">
          <StaggerChildren className="space-y-0" stagger={0.1}>
            {notes.map((note) => (
              <StaggerItem key={note.slug}>
                <Link href={`/notes/${note.slug}`} className="group block">
                  <article className="py-12 md:py-16 border-t border-white/[0.04] group-hover:border-amber/20 transition-colors">
                    <div className="flex items-center gap-4 mb-6">
                      <time className="text-xs tracking-wider text-stone-600">
                        {note.date}
                      </time>
                      <span className="text-stone-800">&middot;</span>
                      <span className="text-xs tracking-wider text-stone-600">
                        {note.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl md:text-3xl text-cream group-hover:text-amber/90 transition-colors mb-4">
                      {note.title}
                    </h2>

                    <p className="text-stone-400 leading-relaxed max-w-2xl text-[15px]">
                      {note.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-stone-600 group-hover:text-stone-400 transition-colors">
                      <span className="text-xs tracking-wider uppercase">
                        Read note
                      </span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
