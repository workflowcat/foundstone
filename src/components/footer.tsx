import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-amber/20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <p className="font-serif text-lg text-cream mb-4">Foundstone</p>
            <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
              Management company for a group of B2B technology businesses
              in data, APIs, and infrastructure.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-600 mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/services", label: "Services" },
                { href: "/notes", label: "Notes" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-stone-400 hover:text-cream transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-600 mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-3 text-sm text-stone-400">
              <p>Agiou Athanasiou 76, ERATO BUILDING</p>
              <p>2nd floor, Agios Athanasios</p>
              <p>4102 Limassol, Cyprus</p>
              <a
                href="mailto:contact@foundstonecap.com"
                className="text-amber hover:text-cream transition-colors mt-2"
              >
                contact@foundstonecap.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-stone-600">
            &copy; {new Date().getFullYear()} Foundstone Capital Ltd &mdash; HE
            483648
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-stone-600 hover:text-stone-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-stone-600 hover:text-stone-400 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
