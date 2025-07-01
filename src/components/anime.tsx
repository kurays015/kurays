import Spotlight from "@/components/spotlight";
import Trending from "@/components/trending";
import TopTen from "@/components/top-ten";
import TopAiring from "@/components/top-airing";
import MostPopular from "@/components/most-popular";
import MostFavorite from "@/components/most-favorite";
import TopUpcoming from "@/components/top-upcoming";
import { AnimeDataResponse } from "@/types";

export default function Kuraysnime({ anime }: { anime: AnimeDataResponse }) {
  return (
    <div className="min-h-screen bg-[#181a20] text-gray-100 font-mono">
      {/* Spotlight Section */}
      <Spotlight spotlight={anime.results.spotlights[0]} />

      {/* Trending Section */}
      <Trending trending={anime.results.trending} />

      {/* TopTen Section */}
      <TopTen topTen={anime.results.topTen} />

      {/* Top Airing Section */}
      <TopAiring topAiring={anime.results.topAiring} />

      {/* Most Popular Section */}
      <MostPopular mostPopular={anime.results.mostPopular} />

      {/* Most Favorite Section */}
      <MostFavorite mostFavorite={anime.results.mostFavorite} />

      {/* Top Upcoming Section */}
      <TopUpcoming topUpcoming={anime.results.topUpcoming} />
    </div>
  );
}
