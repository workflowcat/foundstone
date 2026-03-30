import Image from "next/image";
import { FadeIn } from "@/components/animate";

export function NoteFigure({
  src,
  alt,
  caption,
  aspect = "landscape",
}: {
  src: string;
  alt: string;
  caption: string;
  aspect?: "landscape" | "portrait" | "square";
}) {
  const aspectClass =
    aspect === "portrait"
      ? "aspect-[3/4]"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-[16/10]";

  return (
    <FadeIn>
      <figure className="my-12 md:my-16">
        <div
          className={`relative w-full ${aspectClass} overflow-hidden bg-stone-900 border border-white/[0.04]`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover opacity-90 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 720px"
            unoptimized
          />
          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-stone-950/20 pointer-events-none" />
        </div>
        <figcaption className="mt-3 text-xs tracking-wider text-stone-600 italic">
          {caption}
        </figcaption>
      </figure>
    </FadeIn>
  );
}
