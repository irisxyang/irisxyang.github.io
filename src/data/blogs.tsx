export type Category =
  | "Miscellaneous Musings"
  | "Technical Talk"
  | "Athletic Adventures";

export type BlogMeta = {
  id: string;
  title: string;
  date: string;
  blurb: string; // one line for the card
  category: Category;
  thumbnail?: string; // card image
  tags?: string[];
};

export const blogs: BlogMeta[] = [
  {
    id: "2026-07-site-update",
    title: "Rebuilding My Site",
    date: "2026-07-01",
    blurb: "A quick recap of the updates I made to this site!",
    category: "Technical Talk",
    thumbnail: "/blog_images/2026-07-01-thumb.jpg",
  },
  {
    id: "2026-07-cycling-update",
    title: "My Cycling Journey",
    date: "2026-07-07",
    blurb:
      "Some of my thoughts as a beginner cyclist trying to get into the complex (and often elitist) sport of cycling.",
    category: "Athletic Adventures",
    thumbnail: "/blog_images/2026-07-12-thumb.jpg",
  },
  {
    id: "2026-07-stp2026-recap",
    title: "Seattle to Portland 2026",
    date: "2026-07-12",
    blurb: "Reflecting on my first time participating in STP.",
    category: "Athletic Adventures",
    thumbnail: "/blog_images/2026-07-13-thumb.jpg",
  },
];

export const blogsByDate = [...blogs].sort((a, b) =>
  b.date.localeCompare(a.date),
);
