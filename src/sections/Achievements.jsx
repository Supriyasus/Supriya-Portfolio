"use client";

import { Carousel, Card } from "../components/apple-card-carousel";
import data from "../constants/Achievement";

export function AchievementsSection() {
  const cards = data.map((item, index) => (
  <Card
    key={index}
    index={index}
    card={{
      category: item.category,
      title: item.title,
      src: item.src,
    }}
  />
));

  return (
    <section
  id="achievements"
  className="w-full py-6 mt-20 bg-background"
>
  {/* Section heading */}
  <div className="container mx-auto max-w-7xl mt-10 px-6">
    <h2 className="text-heading mb-2">Achievements</h2>
    <p className="text-muted-foreground max-w-xl">
      Highlights of my work, milestones, and things I’m proud of.
    </p>
  </div>

  {/* Carousel */}
  <div className="w-full mt-4">
    <Carousel items={cards} />
  </div>
</section>

  );
}

export default AchievementsSection;
