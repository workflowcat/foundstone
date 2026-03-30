"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─── Fade-in on scroll ─── */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Geological strata SVG ─── */
function StrataBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        {/* Sediment layers — flowing geological strata */}
        <path
          d="M0 720 C360 700 720 740 1080 710 S1440 730 1440 730 L1440 900 L0 900Z"
          fill="var(--color-umber)"
          opacity="0.08"
        />
        <path
          d="M0 680 C240 660 600 700 960 670 S1200 690 1440 680 L1440 900 L0 900Z"
          fill="var(--color-clay)"
          opacity="0.06"
        />
        <path
          d="M0 760 C480 740 840 780 1200 750 S1440 770 1440 770 L1440 900 L0 900Z"
          fill="var(--color-sandstone)"
          opacity="0.05"
        />

        {/* Fine grain texture — dot grid */}
        <pattern
          id="grain"
          x="0"
          y="0"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="0.4" fill="var(--color-sepia)" opacity="0.08" />
        </pattern>
        <rect width="1440" height="900" fill="url(#grain)" />
      </svg>
    </div>
  );
}

/* ─── Leonardo notebook-style SVG illustrations ─── */
function DaVinciGear({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      {/* Gear mechanism sketch — Leonardo notebook style */}
      <circle cx="100" cy="100" r="60" stroke="var(--color-sepia)" strokeWidth="0.8" opacity="0.3" />
      <circle cx="100" cy="100" r="40" stroke="var(--color-sepia)" strokeWidth="0.6" opacity="0.25" />
      <circle cx="100" cy="100" r="8" stroke="var(--color-sepia)" strokeWidth="1" opacity="0.4" />
      {/* Gear teeth */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 100 + 55 * Math.cos(angle);
        const y1 = 100 + 55 * Math.sin(angle);
        const x2 = 100 + 68 * Math.cos(angle);
        const y2 = 100 + 68 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--color-sepia)"
            strokeWidth="0.7"
            opacity="0.3"
          />
        );
      })}
      {/* Spokes */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const x1 = 100 + 10 * Math.cos(angle);
        const y1 = 100 + 10 * Math.sin(angle);
        const x2 = 100 + 38 * Math.cos(angle);
        const y2 = 100 + 38 * Math.sin(angle);
        return (
          <line
            key={`s${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--color-sepia)"
            strokeWidth="0.5"
            opacity="0.25"
          />
        );
      })}
      {/* Construction lines — the notebook annotation feel */}
      <line x1="20" y1="100" x2="180" y2="100" stroke="var(--color-sepia)" strokeWidth="0.3" opacity="0.15" strokeDasharray="4 4" />
      <line x1="100" y1="20" x2="100" y2="180" stroke="var(--color-sepia)" strokeWidth="0.3" opacity="0.15" strokeDasharray="4 4" />
    </svg>
  );
}

function ArchitecturalArch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 200" className={className} fill="none">
      {/* Renaissance architectural sketch — keystone arch */}
      <path
        d="M40 180 L40 80 Q150 10 260 80 L260 180"
        stroke="var(--color-sepia)"
        strokeWidth="0.8"
        opacity="0.25"
      />
      <path
        d="M55 180 L55 90 Q150 30 245 90 L245 180"
        stroke="var(--color-sepia)"
        strokeWidth="0.6"
        opacity="0.2"
      />
      {/* Keystone */}
      <path
        d="M140 25 L150 15 L160 25 L155 45 L145 45Z"
        stroke="var(--color-sepia)"
        strokeWidth="0.7"
        opacity="0.3"
      />
      {/* Voussoir lines */}
      {Array.from({ length: 7 }).map((_, i) => {
        const t = (i + 1) / 8;
        const angle = Math.PI * (1 - t);
        const ix = 150 + 105 * Math.cos(angle);
        const iy = 80 - 70 * Math.sin(angle) + 30;
        const ox = 150 + 120 * Math.cos(angle);
        const oy = 80 - 80 * Math.sin(angle) + 25;
        return (
          <line
            key={i}
            x1={ix}
            y1={iy}
            x2={ox}
            y2={oy}
            stroke="var(--color-sepia)"
            strokeWidth="0.5"
            opacity="0.2"
          />
        );
      })}
      {/* Foundation blocks */}
      <rect x="30" y="170" width="30" height="20" stroke="var(--color-sepia)" strokeWidth="0.5" opacity="0.2" />
      <rect x="240" y="170" width="30" height="20" stroke="var(--color-sepia)" strokeWidth="0.5" opacity="0.2" />
      {/* Dimension line */}
      <line x1="40" y1="195" x2="260" y2="195" stroke="var(--color-sepia)" strokeWidth="0.3" opacity="0.15" />
      <line x1="40" y1="190" x2="40" y2="198" stroke="var(--color-sepia)" strokeWidth="0.3" opacity="0.15" />
      <line x1="260" y1="190" x2="260" y2="198" stroke="var(--color-sepia)" strokeWidth="0.3" opacity="0.15" />
    </svg>
  );
}

function StrataSection({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 120" className={className} fill="none" preserveAspectRatio="none">
      {/* Cross-section geological diagram */}
      <path d="M0 90 C100 85 200 95 300 88 S400 92 400 92 L400 120 L0 120Z" fill="var(--color-umber)" opacity="0.1" />
      <path d="M0 70 C80 65 180 75 280 68 S400 72 400 72 L400 120 L0 120Z" fill="var(--color-clay)" opacity="0.07" />
      <path d="M0 50 C120 48 220 55 320 50 S400 52 400 52 L400 120 L0 120Z" fill="var(--color-sandstone)" opacity="0.05" />
      {/* Annotation lines */}
      <line x1="350" y1="50" x2="390" y2="50" stroke="var(--color-sepia)" strokeWidth="0.4" opacity="0.2" />
      <line x1="350" y1="70" x2="390" y2="70" stroke="var(--color-sepia)" strokeWidth="0.4" opacity="0.2" />
      <line x1="350" y1="90" x2="390" y2="90" stroke="var(--color-sepia)" strokeWidth="0.4" opacity="0.2" />
    </svg>
  );
}

/* ─── Main page ─── */
export default function V2Page() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--color-ink)",
        fontFamily: "var(--font-sans), system-ui, sans-serif",
      }}
    >
      {/* ─── Top bar ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5" style={{ background: "rgba(28,26,23,0.85)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <span
            className="text-sm tracking-[0.2em] uppercase"
            style={{ color: "var(--color-sandstone)", fontFamily: "var(--font-humanist), serif" }}
          >
            Foundstone
          </span>
          <span className="text-xs tracking-wider" style={{ color: "var(--color-slate)" }}>
            V2 Concept &mdash; Geological + Renaissance
          </span>
        </div>
      </nav>

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <StrataBackground />

        {/* Leonardo illustrations — background decoration */}
        <DaVinciGear className="absolute top-24 right-12 w-48 h-48 md:w-64 md:h-64 opacity-40" />
        <ArchitecturalArch className="absolute bottom-32 left-8 w-56 h-40 md:w-80 md:h-56 opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.12] tracking-tight italic"
              style={{
                fontFamily: "var(--font-humanist), serif",
                color: "var(--color-parchment)",
              }}
            >
              &ldquo;Every company between 15 and 150 people has the same problem.&rdquo;
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 max-w-2xl mx-auto space-y-5 text-left sm:text-center leading-relaxed" style={{ color: "var(--color-slate)" }}>
              <p className="text-lg">
                You need a COO, a CFO, and probably someone running marketing
                who actually understands unit economics. You can&apos;t afford
                three senior hires. You definitely can&apos;t afford three bad
                senior hires, which is what happens when you rush it.
              </p>
              <p className="text-lg">
                We provide fractional operations, finance, and marketing
                leadership on retainer. We&apos;ve been running these functions
                for our own group of B2B technology companies since 2018. At
                some point we noticed everyone else needed the same thing, so
                here we are.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-wider uppercase transition-all duration-300"
                style={{
                  border: "1px solid var(--color-copper)",
                  color: "var(--color-copper)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-copper-glow)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                How it works
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <Reveal delay={0.8} className="absolute bottom-12">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--color-slate)" }}>
              Scroll
            </span>
            <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, var(--color-slate), transparent)" }} />
          </div>
        </Reveal>
      </section>

      {/* ═══════════ WHAT WE DO — on parchment ═══════════ */}
      <section className="relative py-32 md:py-40 px-6 md:px-12" style={{ background: "var(--color-parchment)" }}>
        {/* Paper texture grain */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='0.8' fill='%23483C32'/%3E%3C/svg%3E")`,
            backgroundSize: "6px 6px",
          }}
        />

        <div className="relative max-w-3xl mx-auto">
          <Reveal>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-8"
              style={{ color: "var(--color-clay)" }}
            >
              What fractional means in practice
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-lg md:text-xl leading-relaxed mb-6"
              style={{ color: "var(--color-ink)", fontFamily: "var(--font-humanist), serif" }}
            >
              Fractional means you get the person without the full-time
              commitment. Monthly retainer, 3&ndash;12 month engagements, no
              equity conversations. We embed into your tools, attend your
              standups, and do the actual work.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--color-umber)", fontFamily: "var(--font-humanist), serif" }}
            >
              This is not advisory. Advisory is when someone tells you what to
              do and then leaves. This is when someone does it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ SERVICES GRID — dark with illustrations ═══════════ */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        {/* Floating illustration */}
        <DaVinciGear className="absolute -right-8 top-24 w-40 h-40 opacity-20" />

        <div className="relative max-w-[1200px] mx-auto">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase mb-16" style={{ color: "var(--color-slate)" }}>
              Ten load-bearing functions
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {[
              {
                num: "01",
                title: "Fractional COO",
                body: "Your CEO is spending 40% of their time on things that aren't their job. We'll build your operating cadence, unfuck your vendor stack, and set up reporting that humans actually read.",
              },
              {
                num: "02",
                title: "Fractional CFO",
                body: "The thinking layer on top of the recording layer. Cash flow forecasting, board-ready financials, and the conversation with your bank where someone needs to sound like they know what EBITDA is.",
              },
              {
                num: "03",
                title: "Fractional CMO",
                body: "Positioning that maps to how customers actually buy. Channel strategy based on your unit economics. Content that compounds instead of evaporating. Numbers, not vibes.",
              },
              {
                num: "04",
                title: "Fractional CTO",
                body: "Not product — infrastructure. CI/CD pipelines, monitoring, incident response, SOC 2 prep. The engineering equivalent of accounts payable: everyone needs it, nobody's excited about it.",
              },
              {
                num: "05",
                title: "Data Operations",
                body: "Set up the warehouse, build the dashboards, connect the sources. The bedrock layer of decision-making — so the CEO can answer 'how are we doing?' without asking three people.",
              },
              {
                num: "06",
                title: "People Operations",
                body: "Not recruiting — the systems around it. Payroll across jurisdictions, contracts, onboarding, benefits, labor law. The ground you hire people on.",
              },
              {
                num: "07",
                title: "Treasury & Cash",
                body: "Multi-entity cash positioning, intercompany flows, FX, bank relationships. We'll make sure your bank doesn't close your account because you forgot a KYC questionnaire.",
              },
              {
                num: "08",
                title: "Procurement",
                body: "Full vendor lifecycle — sourcing, negotiation, contract management, spend analysis. The supply chain underneath the org chart.",
              },
              {
                num: "09",
                title: "Entity Management",
                body: "Setting up entities, intercompany agreements, transfer pricing, annual filings. The literal corporate foundation. Almost too on-the-nose for the name.",
              },
              {
                num: "10",
                title: "Governance Office",
                body: "Compliance, risk registers, corporate housekeeping. The boring thing that keeps your bank account open. We know what banks want to see because we've been through it ourselves.",
              },
            ].map((s) => (
              <Reveal key={s.num}>
                <article
                  className="py-10 md:py-12"
                  style={{ borderTop: "1px solid rgba(107,101,96,0.15)" }}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <span
                      className="text-sm font-mono shrink-0"
                      style={{ color: "var(--color-copper)", opacity: 0.6 }}
                    >
                      {s.num}
                    </span>
                    <h3
                      className="text-xl md:text-2xl"
                      style={{
                        fontFamily: "var(--font-humanist), serif",
                        color: "var(--color-parchment)",
                      }}
                    >
                      {s.title}
                    </h3>
                  </div>
                  <p
                    className="leading-relaxed text-[15px] pl-10"
                    style={{ color: "var(--color-slate)" }}
                  >
                    {s.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT — parchment + architectural illustration ═══════════ */}
      <section className="relative py-32 md:py-40 px-6 md:px-12" style={{ background: "var(--color-parchment)" }}>
        <ArchitecturalArch className="absolute right-12 top-16 w-64 h-44 opacity-20" />

        <div className="relative max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase mb-8" style={{ color: "var(--color-clay)" }}>
              How we got here
            </p>
          </Reveal>

          <div className="space-y-6" style={{ fontFamily: "var(--font-humanist), serif" }}>
            <Reveal delay={0.05}>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--color-ink)" }}>
                Foundstone started as the management company for a group of B2B
                data and API businesses. Someone had to handle the finance,
                compliance, contracts, vendor relationships, and general
                operational overhead that accumulates when you run multiple
                companies across multiple countries. We were that someone.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--color-ink)" }}>
                Over time, we got unreasonably good at the boring parts of
                running companies. We built internal systems for payment
                controls, management reporting, compliance tracking, and
                operational automation. Then we noticed that every founder we
                talked to was solving the same problems from scratch, usually
                badly, usually while also trying to build product.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--color-umber)" }}>
                So we opened the door. Same team, same systems, same
                operational infrastructure &mdash; now available on retainer to
                companies that aren&apos;t ours.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════ CENTERPIECE QUOTE — dark, geological ═══════════ */}
      <section className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden">
        {/* Strata divider */}
        <StrataSection className="absolute bottom-0 left-0 right-0 h-32" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Reveal>
            <p
              className="text-2xl sm:text-3xl md:text-4xl leading-relaxed italic"
              style={{
                fontFamily: "var(--font-humanist), serif",
                color: "var(--color-sandstone)",
              }}
            >
              The stone is natural. The structure is human. Foundstone is
              what&apos;s underneath &mdash; but someone had to put it there.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ NOTES PREVIEW ═══════════ */}
      <section className="relative py-24 md:py-32 px-6 md:px-12" style={{ borderTop: "1px solid rgba(107,101,96,0.1)" }}>
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--color-copper)", opacity: 0.6 }}>
              Notes from the back office
            </p>
            <p className="leading-relaxed mb-12" style={{ color: "var(--color-slate)" }}>
              Things we&apos;ve learned from running companies, managing money
              across borders, and automating processes that shouldn&apos;t
              require a human. Updated when we have something to say, not on a
              content calendar.
            </p>
          </Reveal>

          {[
            "Why the Venetian Republic's bookkeeping system matters for modern SaaS companies",
            "What mining engineers knew about risk management in 1556 that startup founders don't",
            "How the Dutch East India Company invented the holding company structure",
          ].map((title, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                className="py-8"
                style={{ borderTop: "1px solid rgba(107,101,96,0.1)" }}
              >
                <p
                  className="text-xl md:text-2xl"
                  style={{
                    fontFamily: "var(--font-humanist), serif",
                    color: "var(--color-parchment)",
                  }}
                >
                  {title}
                </p>
                <p className="mt-2 text-xs tracking-wider uppercase" style={{ color: "var(--color-slate)" }}>
                  Coming soon
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="relative py-16 px-6 md:px-12" style={{ borderTop: "1px solid rgba(107,101,96,0.08)" }}>
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p
              className="text-sm tracking-[0.15em] uppercase mb-2"
              style={{ color: "var(--color-sandstone)", fontFamily: "var(--font-humanist), serif" }}
            >
              Foundstone Capital Ltd
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--color-slate)" }}>
              HE 483648 &middot; Limassol, Cyprus
            </p>
          </div>
          <div className="text-xs" style={{ color: "var(--color-slate)" }}>
            <p>
              Operational infrastructure for companies that want to spend their
              time on the interesting problems.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
