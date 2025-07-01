import type { Trending } from "@/types";
import AnimeCard from "./anime-card";

export default function Trending({ trending }: { trending: Trending[] }) {
  return (
    <section className="p-3 sm:p-6 border-b border-[#2c2e36]">
      <h2 className="text-base sm:text-lg font-semibold mb-4 text-[#ffb347] flex items-center gap-2">
        <span role="img" aria-label="trending">
          🚀
        </span>{" "}
        Trending
      </h2>
      <div className="flex flex-wrap gap-3">
        {trending.map(trend => (
          <AnimeCard key={trend.id} {...trend} label="Trending Anime" />
        ))}
      </div>
    </section>
  );
}
