import Image from "next/image";

type ProductScreenshotsProps = {
  images: string[];
};

export default function ProductScreenshots({
  images,
}: ProductScreenshotsProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {images.map((image, index) => (
        <div key={image} className="group relative">
          {/* Glow */}
          <div className="absolute -inset-4 rounded-[2.5rem] bg-blue-500/0 blur-2xl transition duration-700 group-hover:bg-blue-500/10" />

          {/* Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0a1422] p-3 shadow-xl shadow-black/20 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-500/30 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
            {/* Screenshot */}
            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-[#07111f]">
              <Image
                src={image}
                alt={`Akuzzle application screen ${index + 1}`}
                fill
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Subtle overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/[0.03]" />
            </div>

            {/* Caption */}
            <div className="px-3 pb-2 pt-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                  Screen {String(index + 1).padStart(2, "0")}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-blue-400/70" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
