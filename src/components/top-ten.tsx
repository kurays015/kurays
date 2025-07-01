"use client";

import { useState } from "react";
import type { TopTen as TopTenType } from "@/types";
import AnimeCard from "@/components/anime-card";

const TABS = ["Today", "Week", "Month"] as const;
type Tab = (typeof TABS)[number];

export default function TopTen({ topTen }: { topTen: TopTenType }) {
  const [tab, setTab] = useState<Tab>("Today");
  const data =
    tab === "Today"
      ? topTen.today
      : tab === "Week"
      ? topTen.week
      : topTen.month;

  return (
    <section className="p-3 sm:p-6 border-b border-[#2c2e36]">
      <h2 className="text-base sm:text-lg font-semibold mb-4 text-[#ffb347]">
        🏆 Top Ten
      </h2>

      <div className="flex gap-2 mb-4">
        {TABS.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-150 ${
              tab === t
                ? "bg-[#ffb347] text-[#23242b]"
                : "bg-[#23242b] text-[#ffb347] border border-[#ffb347] hover:bg-[#ffb347]/20"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {data.map(d => (
          <AnimeCard key={d.id} {...d} label="Upcoming Anime" />
        ))}
      </div>
    </section>
  );
}
