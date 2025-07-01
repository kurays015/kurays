import Image from "next/image";
import type { BaseData } from "@/types";

export default function AnimeCard({
  id,
  poster,
  title,
  japanese_title,
  label,
}: BaseData & { label: string }) {
  return (
    <div
      key={id}
      className="relative w-40 max-w-xs mx-auto border-4 border-double border-[#00eaff] bg-gradient-to-br from-[#23242b] via-[#181a20] to-[#23242b] rounded-xl px-2 pt-2 pb-3 flex flex-col items-center shadow-[0_4px_24px_#00eaff55] transition-all duration-200 hover:border-[#ff00cc] hover:shadow-[0_0_32px_#ff00cc99] group cursor-pointer "
    >
      <div className="w-full aspect-[3/4] h-36 max-h-36 rounded-lg overflow-hidden border-2 border-[#00eaff] bg-black flex items-center justify-center relative mb-2">
        <Image
          width={120}
          height={160}
          src={poster}
          alt={title || japanese_title || label}
          className="object-contain w-full h-full"
        />
        {/* CRT scanlines effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,234,255,0.12) 3px,rgba(0,234,255,0.12) 4px)",
          }}
        />
      </div>
      <h3 className="font-bold text-[#00eaff] text-center truncate w-full mb-1 text-[12px] tracking-widest group-hover:text-[#ff00cc] ">
        {title || japanese_title}
      </h3>
      <span className="inline-block bg-black border-2 border-[#ff00cc] text-[#ff00cc] px-2 py-0.5 rounded font-bold tracking-widest text-[10px] mt-auto  shadow-[0_0_8px_#ff00cc99]">
        {label}
      </span>
    </div>
  );
}
