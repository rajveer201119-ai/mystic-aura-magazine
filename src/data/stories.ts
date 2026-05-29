export type Story = {
  category: string;
  title: string;
  readingTime: string;
  image: string;
  href: string;
};

export const stories: Story[] = [
  {
    category: "Fashion",
    title: "Royal Radiance",
    readingTime: "6 min read",
    image:
      "https://mysticauramag.com/wp-content/uploads/2025/12/December-Edition-page-1-scaled.jpg",
    href: "https://mysticauramag.com/wp-content/uploads/2025/12/December-Edition-page.pdf",
  },
  {
    category: "Culture",
    title: "Pure Soul",
    readingTime: "6 min read",
    image:
      "https://mysticauramag.com/wp-content/uploads/2025/11/November-Edition-page-1-scaled.jpg",
    href: "https://mysticauramag.com/wp-content/uploads/2025/11/November-Edition-page.pdf",
  },
  {
    category: "Lifestyle",
    title: "Fashion Is Lifestyle",
    readingTime: "7 min read",
    image:
      "https://mysticauramag.com/wp-content/uploads/2025/09/Sept-Edition-page-1-scaled.jpg",
    href: "https://mysticauramag.com/wp-content/uploads/2025/09/Sept-Edition-page.pdf",
  },
  {
    category: "Interviews",
    title: "Legends Never Truly Die",
    readingTime: "5 min read",
    image:
      "https://mysticauramag.com/wp-content/uploads/2025/10/October-Edition-page-1-scaled.jpg",
    href: "https://mysticauramag.com/wp-content/uploads/2025/10/October-Edition-page.pdf",
  },
];

export const categories = [
  {
    name: "Fashion",
    image:
      "https://mysticauramag.com/wp-content/uploads/2026/03/March-Edition-page-1.jpg-scaled.jpeg",
    href: "/releases?category=fashion",
  },
  {
    name: "Beauty",
    image:
      "https://mysticauramag.com/wp-content/uploads/2025/07/July-Edition-1-1-scaled.jpg",
    href: "/releases?category=beauty",
  },
  {
    name: "Culture",
    image:
      "https://mysticauramag.com/wp-content/uploads/2024/10/Oct-Edition-page-1-2-scaled.jpg",
    href: "/releases?category=culture",
  },
  {
    name: "Lifestyle",
    image:
      "https://mysticauramag.com/wp-content/uploads/2025/08/August-Edition-page-1-scaled.jpg",
    href: "/releases?category=lifestyle",
  },
  {
    name: "Interviews",
    image:
      "https://mysticauramag.com/wp-content/uploads/2025/10/October-Edition-page-1-scaled.jpg",
    href: "/releases?category=interviews",
  },
];
