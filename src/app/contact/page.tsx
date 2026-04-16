import { FadeIn } from "@/components/animate";

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-amber mb-6">
              Contact
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-cream">
              Get in touch.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-stone-400 text-[15px] leading-relaxed max-w-xl">
              Write to us directly at{" "}
              <a
                href="mailto:contact@foundstonecap.com"
                className="text-amber hover:text-cream transition-colors"
              >
                contact@foundstonecap.com
              </a>
              . If your situation calls for it, the reply includes a
              link to book a 30-minute diagnostic call — no slide deck,
              no sales process, just a conversation about what is
              actually going on.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative px-6 md:px-12 pb-32 md:pb-40">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Contact details */}
            <FadeIn delay={0.2}>
              <div className="space-y-12">
                {/* Address */}
                <div>
                  <p className="text-xs tracking-[0.25em] uppercase text-stone-600 mb-4">
                    Registered Office
                  </p>
                  <div className="text-cream leading-relaxed space-y-1">
                    <p className="font-serif text-lg">Foundstone Capital Ltd</p>
                    <p className="text-stone-400">Agiou Athanasiou 76, ERATO BUILDING</p>
                    <p className="text-stone-400">2nd floor, Agios Athanasios</p>
                    <p className="text-stone-400">4102 Limassol, Cyprus</p>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <p className="text-xs tracking-[0.25em] uppercase text-stone-600 mb-4">
                    Email
                  </p>
                  <a
                    href="mailto:contact@foundstonecap.com"
                    className="text-amber hover:text-cream transition-colors text-lg"
                  >
                    contact@foundstonecap.com
                  </a>
                </div>

                {/* Registration */}
                <div>
                  <p className="text-xs tracking-[0.25em] uppercase text-stone-600 mb-4">
                    Registration
                  </p>
                  <p className="text-stone-400">
                    Registration Number: HE 483648
                  </p>
                  <p className="text-stone-400">
                    Jurisdiction: Republic of Cyprus
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Right side — what to include when writing */}
            <FadeIn delay={0.3}>
              <div className="relative">
                <div className="border border-white/[0.04] rounded-sm p-8 md:p-12 bg-stone-900/50">
                  <p className="text-xs tracking-[0.25em] uppercase text-stone-600 mb-8">
                    Writing to us
                  </p>

                  <p className="text-stone-400 text-[15px] leading-relaxed mb-6">
                    The more we know up front, the faster we can tell
                    you whether we are the right team at all. Useful to
                    include:
                  </p>

                  <ul className="space-y-3 text-stone-400 text-[15px] leading-relaxed mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-amber/40 mt-[7px] shrink-0">
                        <span className="block w-1 h-1 bg-current rounded-full" />
                      </span>
                      <span>Who you are and what you are building</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber/40 mt-[7px] shrink-0">
                        <span className="block w-1 h-1 bg-current rounded-full" />
                      </span>
                      <span>
                        What operational problem is actually hurting
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber/40 mt-[7px] shrink-0">
                        <span className="block w-1 h-1 bg-current rounded-full" />
                      </span>
                      <span>
                        What shape of engagement you are thinking about
                      </span>
                    </li>
                  </ul>

                  <a
                    href="mailto:contact@foundstonecap.com?subject=Situation%20we%20are%20working%20on"
                    className="inline-flex items-center gap-3 px-8 py-4 border border-amber/40 text-amber text-sm tracking-wider uppercase hover:bg-amber/10 transition-all duration-300"
                  >
                    Open email
                    <svg
                      className="w-4 h-4"
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
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
