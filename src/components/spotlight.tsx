import Image from "next/image";
import type { SpotLights } from "@/types";

export default function Spotlight({ spotlight }: { spotlight: SpotLights }) {
  return (
    <section className="p-3 sm:p-6 border-b bg-gradient-to-br from-[#23242b] via-[#181a20] to-[#23242b] rounded-xl border-4 border-double border-[#00eaff] shadow-[0_4px_24px_#00eaff55] mb-6">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-[#ff00cc] font-mono tracking-widest flex items-center gap-2">
        <span role="img" aria-label="spotlight">
          🌟
        </span>{" "}
        Spotlight
      </h2>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <div className="flex-shrink-0 rounded-lg overflow-hidden border-2 border-[#00eaff] shadow-lg mb-2 sm:mb-0 w-32 h-48 bg-black flex items-center justify-center relative">
          <Image
            width={128}
            height={192}
            src={spotlight.poster}
            alt="Spotlight Anime"
            className="object-contain w-full h-full"
            priority
          />
          {/* CRT scanlines effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,234,255,0.12) 3px,rgba(0,234,255,0.12) 4px)",
            }}
          />
        </div>
        <div className="flex-1 text-center sm:text-left px-2">
          <h3 className="text-base sm:text-lg font-bold text-[#00eaff] mb-2 font-mono tracking-widest">
            {spotlight.title || spotlight.japanese_title || "Unknown Title"}
          </h3>
          <p className="text-xs sm:text-sm text-gray-200 font-mono bg-[#181a20]/60 p-2 rounded-md border border-[#00eaff]/30">
            {spotlight.description}
          </p>
        </div>
      </div>
    </section>
  );
}
