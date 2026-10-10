
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
    <article className="group overflow-hidden rounded-2xl border border-black/10 bg-white transition duration-500 hover:-translate-y-1 hover:border-blue-500/30 dark:border-white/[0.08] dark:bg-white/[0.025] sm:rounded-[2rem]">
      {/* Product visual */}
      <div className="relative h-[190px] overflow-hidden bg-gray-100 sm:h-[300px] lg:h-[360px] dark:bg-[#0a1422]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.15] via-transparent to-cyan-500/[0.05]" />

        {/* Decorative glow */}
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-600/20 blur-[60px] sm:h-64 sm:w-64 sm:blur-[80px]" />

        {visual === "akuzzle" ? (
          <div className="absolute left-1/2 top-1/2 w-[82%] -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] rounded-xl border border-black/10 bg-white p-3 shadow-2xl shadow-black/10 transition duration-700 group-hover:rotate-0 group-hover:scale-105 dark:border-white/10 dark:bg-[#0d1b2d] dark:shadow-black/40 sm:w-[75%] sm:rounded-2xl sm:p-4">
            <div className="mb-3 flex items-center gap-2 sm:mb-4">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <div className="h-2 w-16 rounded-full bg-black/10 dark:bg-white/10 sm:w-20" />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="h-12 rounded-lg bg-blue-500/20 sm:h-20" />
              <div className="h-12 rounded-lg bg-black/5 dark:bg-white/5 sm:h-20" />
              <div className="h-12 rounded-lg bg-black/5 dark:bg-white/5 sm:h-20" />
            </div>

            <div className="mt-3 h-2.5 w-2/3 rounded-full bg-black/10 dark:bg-white/10 sm:h-3" />
            <div className="mt-2 h-2 w-1/2 rounded-full bg-black/5 dark:bg-white/5" />
          </div>
        ) : (
          <div className="absolute left-1/2 top-1/2 w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-black/10 bg-white p-3 shadow-2xl shadow-black/10 transition duration-700 group-hover:scale-105 dark:border-white/10 dark:bg-[#0d1b2d] dark:shadow-black/40 sm:w-[75%] sm:rounded-2xl sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-3 w-24 rounded-full bg-black/10 dark:bg-white/20 sm:w-28" />
                <div className="mt-2 h-2 w-16 rounded-full bg-black/5 dark:bg-white/10 sm:w-20" />
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-500 dark:text-blue-400 sm:h-10 sm:w-10 sm:rounded-xl">
                +
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-black/10 bg-black/[0.02] p-3 dark:border-white/5 dark:bg-white/[0.03] sm:mt-8 sm:rounded-xl sm:p-4">
              <div className="h-2 w-20 rounded-full bg-black/10 dark:bg-white/10 sm:w-24" />
              <div className="mt-3 h-10 rounded-lg bg-blue-500/10 sm:mt-4 sm:h-16" />
              <div className="mt-3 h-2 w-3/4 rounded-full bg-black/10 dark:bg-white/10" />
            </div>
          </div>
        )}
      </div>

      {/* Product information */}
      <div className="p-4 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
            {number}
          </span>

          <span className="max-w-full rounded-full border border-black/10 px-3 py-1 text-xs text-gray-500 dark:border-white/10 dark:text-gray-500">
            {category}
          </span>
        </div>

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-gray-900 sm:mt-6 sm:text-3xl dark:text-white">
          {name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400 sm:mt-4 sm:text-base sm:leading-7">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2 sm:mt-7">
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
          className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-gray-700 transition group-hover:text-blue-500 dark:text-gray-300 dark:group-hover:text-blue-400 sm:mt-8"
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