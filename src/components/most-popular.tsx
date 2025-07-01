import type { MostPopular as MostPopularType } from "@/types";
import AnimeCard from "@/components/anime-card";

export default function MostPopular({
  mostPopular,
}: {
  mostPopular: MostPopularType[];
}) {
  return (
    <section className="p-3 sm:p-6 border-b border-[#2c2e36]">
      <h2 className="text-base sm:text-lg font-semibold mb-4 text-[#ffb347]">
        🔥 Most Popular
      </h2>
      <div className="flex flex-wrap gap-3">
        {mostPopular.map(popular => (
          <AnimeCard key={popular.id} {...popular} label="Popular Anime" />
        ))}
      </div>
    </section>
  );
}
