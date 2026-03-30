"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/notes", label: "Notes" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-stone-950/80 backdrop-blur-xl border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 h-20">
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-cream hover:text-amber transition-colors"
        >
          Foundstone
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wider uppercase transition-colors ${
                pathname === link.href
                  ? "text-amber"
                  : "text-stone-400 hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-8 pt-2 bg-stone-950/95 backdrop-blur-xl border-b border-white/[0.04]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 text-sm tracking-wider uppercase transition-colors ${
                pathname === link.href
                  ? "text-amber"
                  : "text-stone-400 hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
