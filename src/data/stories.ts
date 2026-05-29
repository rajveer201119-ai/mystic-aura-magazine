export type Story = {
  category: string;
  title: string;
  readingTime: string;
  image: string;
};

export const stories: Story[] = [
  {
    category: "Fashion",
    title: "The New Language of Identity",
    readingTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=86",
  },
  {
    category: "Culture",
    title: "Rooted in Tradition, Rising in the World",
    readingTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=86",
  },
  {
    category: "Lifestyle",
    title: "Slow Living in a Fast World",
    readingTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=86",
  },
  {
    category: "Interviews",
    title: "A Conversation with Arjun Saluja",
    readingTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1520975682031-aef53ba0f53b?auto=format&fit=crop&w=800&q=86",
  },
];

export const categories = [
  {
    name: "Fashion",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=86",
  },
  {
    name: "Beauty",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=86",
  },
  {
    name: "Culture",
    image:
      "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=800&q=86",
  },
  {
    name: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=86",
  },
  {
    name: "Interviews",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=86",
  },
];
