export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "Blogs",
    hash: "/blogs",
  },
] as const;

export type SectionName = (typeof links)[number]["name"];
