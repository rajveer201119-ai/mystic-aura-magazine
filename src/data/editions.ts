export type Edition = {
  issue: string;
  title: string;
  date: string;
  year: string;
  description: string;
  image: string;
};

export const editions: Edition[] = [
  {
    issue: "Issue No. 24",
    title: "Ethereal Horizons",
    date: "May / June 2024",
    year: "2024",
    description:
      "Exploring the poetry of place, culture, and personal transformation.",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=88",
  },
  {
    issue: "Issue No. 23",
    title: "Resonance",
    date: "Mar / April 2024",
    year: "2024",
    description:
      "Stories of passion, purpose, and unapologetic individuality.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=88",
  },
  {
    issue: "Issue No. 22",
    title: "Inner Landscapes",
    date: "Jan / Feb 2024",
    year: "2024",
    description:
      "A journey within-finding balance in beauty, stillness and self.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=88",
  },
  {
    issue: "Issue No. 21",
    title: "The New Simplicity",
    date: "Nov / Dec 2023",
    year: "2023",
    description:
      "Embracing intention, elegance, and the beauty of less.",
    image:
      "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?auto=format&fit=crop&w=700&q=88",
  },
  {
    issue: "Issue No. 20",
    title: "Beyond Boundaries",
    date: "Sep / Oct 2023",
    year: "2023",
    description:
      "Celebrating visionaries who inspire change across cultures and communities.",
    image:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=700&q=88",
  },
  {
    issue: "Issue No. 19",
    title: "Elements of Change",
    date: "Jul / Aug 2023",
    year: "2023",
    description:
      "Change is beautiful. Stories of strength, adaptation, and new beginnings.",
    image:
      "https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=700&q=88",
  },
];

export const releaseYears = ["ALL", "2024", "2023", "2022", "2021", "2020", "2019"];
