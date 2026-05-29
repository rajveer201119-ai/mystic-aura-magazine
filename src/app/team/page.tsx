import type { Metadata } from "next";
import { Newsletter } from "@/components/Newsletter";
import { TeamSection } from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the Mystic Aura editorial team.",
  openGraph: {
    title: "Team | Mystic Aura Magazine",
    description: "Meet the Mystic Aura editorial team.",
  },
};

export default function TeamPage() {
  return (
    <>
      <TeamSection />
      <Newsletter />
    </>
  );
}
