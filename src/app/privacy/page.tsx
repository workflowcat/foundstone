import { FadeIn } from "@/components/animate";

export default function PrivacyPage() {
  return (
    <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-amber mb-6">
            Legal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-12">
            Privacy Policy
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="prose-custom space-y-8">
            <p className="text-stone-400 leading-relaxed">
              Last updated: March 2025
            </p>

            <div className="space-y-6">
              <h2 className="font-serif text-xl text-cream">1. Introduction</h2>
              <p className="text-stone-400 leading-relaxed text-[15px]">
                Foundstone Capital Ltd (&ldquo;Foundstone,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;) is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, and safeguard your personal information when you
                visit our website or engage with our services.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-xl text-cream">2. Data Controller</h2>
              <p className="text-stone-400 leading-relaxed text-[15px]">
                Foundstone Capital Ltd, registration number HE 483648,
                registered at Agiou Athanasiou 76, ERATO BUILDING, 2nd floor,
                Agios Athanasios, 4102 Limassol, Cyprus.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-xl text-cream">
                3. Information We Collect
              </h2>
              <p className="text-stone-400 leading-relaxed text-[15px]">
                We may collect information you provide directly, including your
                name, email address, and any message content submitted through
                our contact form. We also collect standard web analytics data
                including IP addresses, browser type, and pages visited.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-xl text-cream">
                4. How We Use Your Information
              </h2>
              <p className="text-stone-400 leading-relaxed text-[15px]">
                We use collected information to respond to inquiries, improve
                our website and services, comply with legal obligations, and
                communicate with you about our services when requested.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-xl text-cream">5. Your Rights</h2>
              <p className="text-stone-400 leading-relaxed text-[15px]">
                Under applicable data protection laws, you have the right to
                access, rectify, erase, or restrict the processing of your
                personal data. To exercise these rights, please contact us at
                contact@foundstonecap.com.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-xl text-cream">6. Contact</h2>
              <p className="text-stone-400 leading-relaxed text-[15px]">
                For questions about this Privacy Policy, contact us at
                contact@foundstonecap.com.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
