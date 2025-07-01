import type { TopUpcoming as TopUpcomingType } from "@/types";
import AnimeCard from "@/components/anime-card";

export default function TopUpcoming({
  topUpcoming,
}: {
  topUpcoming: TopUpcomingType[];
}) {
  return (
    <section className="p-3 sm:p-6 border-b border-[#2c2e36]">
      <h2 className="text-base sm:text-lg font-semibold mb-4 text-[#ffb347]">
        ⏳ Top Upcoming
      </h2>
      <div className="flex flex-wrap gap-3">
        {topUpcoming.map(upcoming => (
          <AnimeCard key={upcoming.id} {...upcoming} label="Upcoming Anime" />
        ))}
      </div>
    </section>
  );
}
