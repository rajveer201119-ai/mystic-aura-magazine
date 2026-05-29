import { Categories } from "@/components/Categories";
import { FeaturedStories } from "@/components/FeaturedStories";
import { HeroSection } from "@/components/HeroSection";
import { LatestEdition } from "@/components/LatestEdition";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedStories />
      <LatestEdition />
      <Categories />
      <Newsletter />
    </>
  );
}
