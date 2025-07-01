"use client";

// import { useState } from "react";
// import type { TopTen as TopTenType } from "@/types";

// const TABS = ["Today", "Week", "Month"] as const;
// type Tab = (typeof TABS)[number];

export default function TopTenTabs() {
  // const [tab, setTab] = useState<Tab>("Today");

  return (
    <div className="flex gap-2 mb-4">
      {/* {TABS.map(t => (
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
      ))} */}
    </div>
  );
}
