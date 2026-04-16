import Link from "next/link";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animate";
import { notes } from "@/data/notes";

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
                    <div className="flex gap-6 md:gap-8">
                      {/* SVG icon */}
                      <div className="hidden sm:block shrink-0 pt-2">
                        <note.Icon className="w-20 h-20 md:w-24 md:h-24 opacity-80 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-4 mb-4">
                          <time className="text-xs tracking-wider text-stone-600">
                            {note.date}
                          </time>
                          <span className="text-stone-800">&middot;</span>
                          <span className="text-xs tracking-wider text-stone-600">
                            {note.readTime}
                          </span>
                        </div>

                        <h2 className="font-serif text-2xl md:text-3xl text-cream group-hover:text-amber/90 transition-colors mb-3">
                          {note.title}
                        </h2>

                        <p className="text-stone-400 leading-relaxed max-w-2xl text-[15px]">
                          {note.excerpt}
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-stone-600 group-hover:text-stone-400 transition-colors">
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
                      </div>
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
