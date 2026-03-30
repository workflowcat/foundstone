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

            {/* Right side — message or map placeholder */}
            <FadeIn delay={0.3}>
              <div className="relative">
                <div className="border border-white/[0.04] rounded-sm p-8 md:p-12 bg-stone-900/50">
                  <p className="text-xs tracking-[0.25em] uppercase text-stone-600 mb-8">
                    Send a message
                  </p>

                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm text-stone-400 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-cream placeholder:text-stone-700 focus:border-amber/40 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-stone-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-cream placeholder:text-stone-700 focus:border-amber/40 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-stone-400 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full bg-transparent border-b border-white/[0.08] pb-3 text-cream placeholder:text-stone-700 focus:border-amber/40 focus:outline-none transition-colors resize-none"
                        placeholder="How can we help?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 px-8 py-4 border border-amber/40 text-amber text-sm tracking-wider uppercase hover:bg-amber/10 transition-all duration-300 mt-4"
                    >
                      Send message
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
                    </button>
                  </form>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
