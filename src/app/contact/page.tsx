import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Newsletter } from "@/components/Newsletter";
import { TeamSection } from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Mystic Aura Magazine in Guwahati, Assam.",
  openGraph: {
    title: "Contact Us | Mystic Aura Magazine",
    description: "Contact Mystic Aura Magazine in Guwahati, Assam.",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <TeamSection compact />
      <Newsletter floral />
    </>
  );
}
