import type { MostFavorite as MostFavoriteType } from "@/types";
import AnimeCard from "@/components/anime-card";

export default function MostFavorite({
  mostFavorite,
}: {
  mostFavorite: MostFavoriteType[];
}) {
  return (
    <section className="p-3 sm:p-6 border-b border-[#2c2e36]">
      <h2 className="text-base sm:text-lg font-semibold mb-4 text-[#ffb347]">
        💖 Most Favorite
      </h2>
      <div className="flex flex-wrap gap-3">
        {mostFavorite.map(fav => (
          <AnimeCard key={fav.id} {...fav} label="Favorite Anime" />
        ))}
      </div>
    </section>
  );
}
