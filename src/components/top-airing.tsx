import type { TopAiring as TopAiringType } from "@/types";
import AnimeCard from "@/components/anime-card";

export default function TopAiring({
  topAiring,
}: {
  topAiring: TopAiringType[];
}) {
  return (
    <section className="p-3 sm:p-6 border-b border-[#2c2e36]">
      <h2 className="text-base sm:text-lg font-semibold mb-4 text-[#ffb347]">
        📺 Top Airing
      </h2>
      <div className="flex flex-wrap gap-3">
        {topAiring.map(airing => (
          <AnimeCard key={airing.id} {...airing} label="Top Airing Anime" />
        ))}
      </div>
    </section>
  );
}
