import { FadeIn } from "@/components/animate";

export default function TermsPage() {
  return (
    <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-amber mb-6">
            Legal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-12">
            Terms of Service
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-8">
            <p className="text-stone-400 leading-relaxed">
              Last updated: March 2025
            </p>

            <div className="space-y-6">
              <h2 className="font-serif text-xl text-cream">1. Agreement</h2>
              <p className="text-stone-400 leading-relaxed text-[15px]">
                By accessing this website, you agree to be bound by these Terms
                of Service. If you do not agree with any part of these terms,
                you should not use this website.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-xl text-cream">2. Company Information</h2>
              <p className="text-stone-400 leading-relaxed text-[15px]">
                This website is operated by Foundstone Capital Ltd, a company
                registered in the Republic of Cyprus under registration number
                HE 483648, with its registered office at Agiou Athanasiou 76,
                ERATO BUILDING, 2nd floor, Agios Athanasios, 4102 Limassol,
                Cyprus.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-xl text-cream">
                3. Intellectual Property
              </h2>
              <p className="text-stone-400 leading-relaxed text-[15px]">
                All content on this website, including text, graphics, logos, and
                design elements, is the property of Foundstone Capital Ltd and
                is protected by applicable intellectual property laws.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-xl text-cream">
                4. Limitation of Liability
              </h2>
              <p className="text-stone-400 leading-relaxed text-[15px]">
                The information provided on this website is for general
                informational purposes only. Foundstone Capital Ltd makes no
                warranties regarding the accuracy or completeness of the
                information presented and shall not be liable for any damages
                arising from the use of this website.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-xl text-cream">
                5. Governing Law
              </h2>
              <p className="text-stone-400 leading-relaxed text-[15px]">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the Republic of Cyprus.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-xl text-cream">6. Contact</h2>
              <p className="text-stone-400 leading-relaxed text-[15px]">
                For questions about these Terms, contact us at
                contact@foundstonecap.com.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
