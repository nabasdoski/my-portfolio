type ProductCardProps = {
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  href: string;
  visual: "akuzzle" | "medicine";
};

export default function ProductCard({
  number,
  name,
  category,
  description,
  technologies,
  href,
  visual,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white transition duration-500 hover:-translate-y-1 hover:border-blue-500/30 dark:border-white/[0.08] dark:bg-white/[0.025]">
      {/* Product visual */}
      <div className="relative h-[360px] overflow-hidden bg-gray-100 dark:bg-[#0a1422]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.15] via-transparent to-cyan-500/[0.05]" />

        {/* Decorative glow */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-[80px]" />

        {visual === "akuzzle" ? (
          <div className="absolute left-1/2 top-1/2 w-[75%] -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] rounded-2xl border border-black/10 bg-white p-4 shadow-2xl shadow-black/10 transition duration-700 group-hover:rotate-0 group-hover:scale-105 dark:border-white/10 dark:bg-[#0d1b2d] dark:shadow-black/40">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <div className="h-2 w-20 rounded-full bg-black/10 dark:bg-white/10" />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="h-20 rounded-lg bg-blue-500/20" />
              <div className="h-20 rounded-lg bg-black/5 dark:bg-white/5" />
              <div className="h-20 rounded-lg bg-black/5 dark:bg-white/5" />
            </div>

            <div className="mt-3 h-3 w-2/3 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="mt-2 h-2 w-1/2 rounded-full bg-black/5 dark:bg-white/5" />
          </div>
        ) : (
          <div className="absolute left-1/2 top-1/2 w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-black/10 bg-white p-5 shadow-2xl shadow-black/10 transition duration-700 group-hover:scale-105 dark:border-white/10 dark:bg-[#0d1b2d] dark:shadow-black/40">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-3 w-28 rounded-full bg-black/10 dark:bg-white/20" />
                <div className="mt-2 h-2 w-20 rounded-full bg-black/5 dark:bg-white/10" />
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-500 dark:text-blue-400">
                +
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-black/10 bg-black/[0.02] p-4 dark:border-white/5 dark:bg-white/[0.03]">
              <div className="h-2 w-24 rounded-full bg-black/10 dark:bg-white/10" />
              <div className="mt-4 h-16 rounded-lg bg-blue-500/10" />
              <div className="mt-3 h-2 w-3/4 rounded-full bg-black/10 dark:bg-white/10" />
            </div>
          </div>
        )}
      </div>

      {/* Product information */}
      <div className="p-8 sm:p-10">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
            {number}
          </span>

          <span className="rounded-full border border-black/10 px-3 py-1 text-xs text-gray-500 dark:border-white/10 dark:text-gray-500">
            {category}
          </span>
        </div>

        <h3 className="mt-6 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h3>

        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
          {description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-black/[0.04] px-3 py-1.5 text-xs text-gray-600 dark:bg-white/[0.05] dark:text-gray-400"
            >
              {technology}
            </span>
          ))}
        </div>

        <a
          href={href}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition group-hover:text-blue-500 dark:text-gray-300 dark:group-hover:text-blue-400"
        >
          View case study
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </article>
  );
}