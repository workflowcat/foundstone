import type { ComponentType, SVGProps } from "react";
import {
  IconConstraint,
  IconFile,
  IconLedger,
  IconMineShaft,
} from "@/components/note-icons";

/**
 * Single source of truth for note metadata.
 *
 * The homepage, the /notes index, and each /notes/[slug] detail page must
 * show consistent dates and titles. Importing from here guarantees they
 * cannot drift apart.
 *
 * Date format: "Month YYYY" in full (e.g. "March 2026"). Detail pages
 * that previously showed their own hardcoded date should import the
 * matching entry from this file via `notesBySlug`.
 */

export interface Note {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const notes: Note[] = [
  {
    slug: "master-craftsman-constraint",
    date: "March 2026",
    title: "When the Master Craftsman Becomes the Constraint",
    excerpt:
      "A company doubles in size. The founder who was best at every function is now the bottleneck at every function. The Arsenal of Venice, the Prussian General Staff, and three sensors that tell you before it breaks.",
    readTime: "18 min read",
    Icon: IconConstraint,
  },
  {
    slug: "what-your-bank-sees",
    date: "March 2026",
    title: "What Your Bank Actually Sees When They Open Your File",
    excerpt:
      "A compliance officer has between 40 and 200 corporate files on their desk. The difference between approval in a day and a three-month escalation is the quality of the documentation.",
    readTime: "16 min read",
    Icon: IconFile,
  },
  {
    slug: "venetian-bookkeeping",
    date: "February 2026",
    title: "Why the Venetian Republic\u2019s Bookkeeping System Matters for Modern SaaS Companies",
    excerpt:
      "27 pages from 1494 are still how bookkeeping works. Pacioli documented the method of Venice. ASC 606 follows the same five steps a Venetian merchant would recognize.",
    readTime: "14 min read",
    Icon: IconLedger,
  },
  {
    slug: "risk-management-1556",
    date: "January 2026",
    title: "What Mining Engineers Knew About Risk Management in 1556 That Startup Founders Don\u2019t",
    excerpt:
      "Agricola catalogued six categories of risk, described six types of drainage pumps, and documented a share trading system that predates the stock market by 130 years. 69% of modern organizations still lack comprehensive risk management.",
    readTime: "14 min read",
    Icon: IconMineShaft,
  },
];

export const notesBySlug: Record<string, Note> = Object.fromEntries(
  notes.map((n) => [n.slug, n]),
);
