"use client";

import { useLanguage } from "@/components/LanguageProvider";
import {
  clientProjects,
  clientProjectsCopy as copy,
  type ProjectIcon,
} from "@/content/clientProjects";

const iconPaths: Record<ProjectIcon, string> = {
  bank: "M3 21h18M5 21V10m4.5 11V10m5 11V10M19 21V10M2 10l10-6 10 6",
  health: "M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z",
  gym: "M6.5 6.5v11m11-11v11M3.5 9v6m17-6v6M6.5 12h11",
  building:
    "M5 21V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17m0-11h3a1 1 0 0 1 1 1v10M3 21h18M9 7h2m-2 4h2m-2 4h2",
};

function ProjectIconTile({ icon }: { icon: ProjectIcon }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 text-blue-600 ring-1 ring-blue-500/20 transition duration-500 group-hover:scale-105 dark:text-blue-400">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d={iconPaths[icon]} />
      </svg>
    </div>
  );
}

export default function ClientProjects() {
  const { language } = useLanguage();

  return (
    <section
      id="client-work"
      className="border-t border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-4 sm:gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-500 dark:text-blue-400 sm:text-sm">
              {copy.eyebrow[language]}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:mt-4 sm:text-5xl">
              {copy.heading[language]}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
            {copy.sub[language]}
          </p>
        </div>

        <ul className="mt-7 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {clientProjects.map((project) => (
            <li key={project.id}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 dark:border-white/[0.08] dark:bg-white/[0.025]">
                {/* Decorative glow and top accent */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -end-16 -top-16 h-44 w-44 rounded-full bg-blue-600/10 blur-3xl transition duration-700 group-hover:bg-blue-600/20"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
                />

                <div className="relative flex h-full flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <ProjectIconTile icon={project.icon} />

                    <span className="rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-xs font-medium text-gray-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300">
                      <bdi>{project.years}</bdi>
                    </span>
                  </div>

                  <p className="mt-5 text-xs font-medium text-blue-600 dark:text-blue-400">
                    {project.category[language]}
                  </p>

                  <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {project.summary[language]}
                  </p>

                  <div className="mt-5 border-t border-black/10 pt-4 dark:border-white/[0.08]">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      {copy.roleLabel[language]}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-gray-700 dark:text-gray-300">
                      {project.role[language]}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-blue-500/[0.08] px-3 py-1.5 text-xs font-medium text-blue-700 dark:bg-blue-400/10 dark:text-blue-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <p className="mt-auto flex items-center gap-2 pt-5 text-xs text-gray-500 dark:text-gray-400">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5 shrink-0"
                    >
                      <path d="M3 7h18v4H3zM5 11v9h14v-9M10 15h4" />
                    </svg>
                    {copy.badge[language]}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
