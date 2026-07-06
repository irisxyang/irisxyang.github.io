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
  //   { id: "thesis-writeup",
  //     title: "My Thesis, Plainly",
  //     date: "2025-11-02",
  //     blurb: "...",
  // category: "Technical Talk"},
];

export const blogsByDate = [...blogs].sort((a, b) =>
  b.date.localeCompare(a.date),
);
