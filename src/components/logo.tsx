import Link from "next/link";

/**
 * Foundstone Capital logomark.
 *
 * Single-line Garamond small caps wordmark. Three size variants —
 * "nav", "footer", "hero" — sized for their respective contexts.
 * No location or date subline; the wordmark stands alone.
 */

type LogoSize = "nav" | "footer" | "hero";

interface LogoProps {
  size?: LogoSize;
  href?: string;
  className?: string;
}

export function Logo({ size = "nav", href, className = "" }: LogoProps) {
  const content = <LogoContent size={size} />;

  if (href) {
    return (
      <Link
        href={href}
        className={`inline-block hover:opacity-80 transition-opacity ${className}`}
        aria-label="Foundstone Capital — home"
      >
        {content}
      </Link>
    );
  }

  return <div className={`inline-block ${className}`}>{content}</div>;
}

function LogoContent({ size }: { size: LogoSize }) {
  const sizeClass =
    size === "hero"
      ? "text-2xl md:text-3xl"
      : size === "footer"
        ? "text-[17px]"
        : "text-[14px] md:text-[15px]";

  return (
    <p
      className={`font-humanist uppercase tracking-[0.18em] text-cream leading-none ${sizeClass}`}
    >
      Foundstone Capital
    </p>
  );
}
