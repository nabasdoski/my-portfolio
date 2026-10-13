"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductScreenshots from "@/components/ProductScreenshots";
import { useTranslations } from "@/components/useTranslations";
import { useLanguage } from "@/components/LanguageProvider";
import SiteHeader from "@/components/SiteHeader";

const technologies = ["React Native", "Expo", "Node.js", "PostgreSQL", "AI"];

const sectionClass =
  "mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28";

const headingClass =
  "mt-4 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl";

const bodyClass =
  "text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base sm:leading-8";

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400 sm:text-sm sm:tracking-[0.25em]">
      {children}
    </p>
  );
}

function CapabilityCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4 transition hover:border-blue-500/30 sm:rounded-3xl sm:p-7 dark:border-white/[0.08] dark:bg-[#0a1422]">
      <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
        {number}
      </span>
      <h3 className="mt-4 text-base font-semibold text-gray-900 sm:mt-7 sm:text-lg dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-600 sm:mt-3 sm:leading-7 dark:text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default function AkuzzlePage() {
  const t = useTranslations();
  const { language } = useLanguage();
  const isRtl = language === "ar" || language === "ku";
  const a = t.akuzzle;

  const mobileLinks = [
    { label: a.nav.overview, href: "#overview" },
    { label: a.nav.aiWorkflow, href: "#ai-workflow" },
    { label: a.nav.security, href: "#security" },
    { label: a.nav.technology, href: "#technology" },
    { label: a.nav.projects, href: "/#products" },
  ];

  const navLinks = [
    { label: a.nav.overview, href: "#overview" },
    { label: a.nav.technology, href: "#technology" },
    { label: a.nav.projects, href: "/#products" },
  ];

  return (
    <>
      <SiteHeader
        links={navLinks}
        mobileLinks={mobileLinks}
        cta={{ label: t.nav.letsTalk, href: "/#contact" }}
      />
      <main
        dir={isRtl ? "rtl" : "ltr"}
        className="min-h-screen overflow-x-clip bg-background text-foreground"
      >
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-black/10 dark:border-white/[0.06]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-16rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl sm:top-[-18rem] sm:h-[40rem] sm:w-[40rem]" />
            <div className="absolute end-[-10rem] top-40 h-[25rem] w-[25rem] rounded-full bg-blue-500/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-24 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-40">
            <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] sm:gap-4 sm:text-sm sm:tracking-[0.25em]">
                  <span className="text-blue-400">01</span>
                  <span className="h-px w-8 bg-black/10 sm:w-10 dark:bg-white/15" />
                  <span className="text-gray-600 dark:text-gray-500">
                    {a.hero.category}
                  </span>
                </div>

                <div className="mt-5 flex min-w-0 items-center gap-3 sm:mt-8 sm:gap-5">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03] shadow-xl sm:h-20 sm:w-20 dark:border-white/[0.1] dark:bg-white/[0.05]">
                    <Image
                      src="/images/akuzzle/icon.png"
                      alt="Akuzzle logo"
                      fill
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>
                  <h1 className="min-w-0 break-words text-4xl font-semibold tracking-[-0.05em] text-gray-900 sm:text-6xl lg:text-8xl dark:text-white">
                    Akuzzle
                  </h1>
                </div>

                <p className="mt-5 max-w-2xl text-xl font-medium leading-tight text-gray-700 sm:mt-6 sm:text-3xl dark:text-gray-300">
                  {a.hero.tagline}
                </p>

                <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:mt-7 sm:text-lg sm:leading-8 dark:text-gray-500">
                  {a.hero.intro}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 sm:mt-8">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-xs font-medium text-gray-600 sm:px-4 sm:py-2 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-3">
                  <a
                    href="#overview"
                    className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-500 sm:px-7 sm:py-3.5"
                  >
                    {a.hero.explore}
                  </a>
                  <a
                    href="#technology"
                    className="rounded-full border border-black/10 bg-black/[0.03] px-6 py-3 text-center text-sm font-semibold text-gray-900 transition hover:bg-black/[0.06] sm:px-7 sm:py-3.5 dark:border-white/[0.1] dark:bg-white/[0.03] dark:text-white dark:hover:bg-white/[0.06]"
                  >
                    {a.hero.viewTechnology}
                  </a>
                </div>

                <div className="mt-6 sm:mt-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-600">
                    {a.hero.availableOn}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-3">
                    <a
                      href="https://www.akuzzle.com/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-blue-500/30 hover:text-blue-600 dark:border-white/[0.1] dark:bg-white/[0.03] dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      {a.hero.web} <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      href="https://apps.apple.com/app/id6763965707"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-blue-500/30 hover:text-blue-600 dark:border-white/[0.1] dark:bg-white/[0.03] dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      {a.hero.ios} <span aria-hidden="true">↗</span>
                    </a>
                    <span className="inline-flex cursor-default items-center gap-2 rounded-full border border-black/10 bg-black/[0.02] px-4 py-2.5 text-sm font-medium text-gray-400 dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-gray-600">
                      {a.hero.android}
                      <span className="text-[10px] uppercase tracking-[0.12em]">
                        {a.hero.soon}
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:me-0">
                <div className="absolute -inset-5 rounded-[3rem] bg-blue-500/10 blur-3xl sm:-inset-10 sm:rounded-[4rem]" />
                <div className="relative rounded-[2rem] border border-black/10 bg-black/[0.03] p-2.5 shadow-2xl shadow-black/10 backdrop-blur sm:rounded-[2.5rem] sm:p-3 dark:border-white/[0.1] dark:bg-white/[0.04] dark:shadow-black/40">
                  <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-gray-100 sm:rounded-[2rem] dark:border-white/[0.06] dark:bg-[#07111f]">
                    <div className="relative aspect-[9/16]">
                      <Image
                        src="/images/akuzzle/create-ad.jpeg"
                        alt="Akuzzle marketplace application screen"
                        fill
                        priority
                        className="object-contain"
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 420px"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 start-2 rounded-xl border border-black/10 bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur-xl sm:-bottom-6 sm:start-[-2.5rem] sm:rounded-2xl sm:px-5 sm:py-4 dark:border-white/[0.1] dark:bg-[#0a1422]/95">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 sm:text-xs dark:text-gray-500">
                    {a.hero.platform}
                  </p>
                  <p className="mt-1 text-xs font-medium text-gray-900 sm:text-sm dark:text-white">
                    {a.hero.platformValue}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-2 border-y border-black/10 sm:mt-20 lg:mt-24 lg:grid-cols-4 dark:border-white/[0.06]">
              {a.facts.map((item, index) => (
                <div
                  key={item.label}
                  className={`border-black/10 px-3 py-4 sm:px-6 sm:py-6 dark:border-white/[0.06] ${
                    index < 2 ? "border-b lg:border-b-0" : ""
                  } ${index % 2 === 0 ? "border-e" : ""} lg:border-e ${
                    index === 3 ? "lg:border-e-0" : ""
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.15em] text-gray-700 sm:text-xs sm:tracking-[0.2em] dark:text-gray-300">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-xs font-medium leading-5 text-gray-700 sm:mt-2 sm:text-sm dark:text-gray-400">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:mt-14 sm:gap-4 sm:text-xs dark:text-gray-600">
              <span className="h-px w-8 bg-black/10 dark:bg-white/10" />
              <span>{a.hero.scroll}</span>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="border-y border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]">
          <div className={sectionClass}>
            <div className="mb-7 sm:mb-12">
              <Eyebrow>{a.screenshots.eyebrow}</Eyebrow>
              <h2 className={headingClass}>{a.screenshots.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8 dark:text-gray-500">
                {a.screenshots.description}
              </p>
            </div>
            <ProductScreenshots
              images={[
                "/images/akuzzle/home.jpeg",
                "/images/akuzzle/create-ad.jpeg",
                "/images/akuzzle/categories.jpeg",
                "/images/akuzzle/profile.jpeg",
              ]}
            />
          </div>
        </section>

        {/* Overview */}
        <section
          id="overview"
          className="scroll-mt-20 border-b border-black/10 dark:border-white/[0.06]"
        >
          <div className={sectionClass}>
            <div className="grid gap-7 sm:gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <Eyebrow>{a.overview.eyebrow}</Eyebrow>
                <p className="mt-2 text-sm leading-6 text-gray-500 sm:mt-5 sm:leading-7 dark:text-gray-600">
                  {a.overview.kicker}
                </p>
              </div>
              <div className="min-w-0">
                <h2 className={headingClass.replace("mt-4", "mt-0")}>
                  {a.overview.title}
                </h2>
                <div className="mt-4 max-w-3xl space-y-4 text-sm leading-7 text-gray-600 sm:mt-8 sm:space-y-6 sm:text-lg sm:leading-8 dark:text-gray-400">
                  {a.overview.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-6 grid gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4">
                  {a.overview.highlights.map((highlight, index) => (
                    <div
                      key={highlight}
                      className="rounded-2xl border border-black/10 bg-black/[0.02] p-4 sm:p-5 dark:border-white/[0.08] dark:bg-white/[0.03]"
                    >
                      <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-2 text-sm text-gray-700 sm:mt-3 dark:text-gray-300">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem and solution */}
        <section className="border-b border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]">
          <div className={sectionClass}>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-600">
                    01
                  </span>
                  <span className="h-px w-8 bg-black/10 dark:bg-white/10" />
                  <Eyebrow>{a.challenge.eyebrow}</Eyebrow>
                </div>
                <h2 className={headingClass}>{a.challenge.title}</h2>
                <div
                  className={`mt-4 space-y-4 sm:mt-7 sm:space-y-5 ${bodyClass}`}
                >
                  {a.challenge.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
                    02
                  </span>
                  <span className="h-px w-8 bg-blue-500/30" />
                  <Eyebrow>{a.solution.eyebrow}</Eyebrow>
                </div>
                <h2 className={headingClass}>{a.solution.title}</h2>
                <div
                  className={`mt-4 space-y-4 sm:mt-7 sm:space-y-5 ${bodyClass}`}
                >
                  {a.solution.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-5 sm:mt-10 sm:rounded-3xl sm:p-7">
                  <Eyebrow>{a.solution.coreLabel}</Eyebrow>
                  <p className="mt-3 text-lg font-medium leading-7 text-gray-900 sm:mt-4 sm:text-xl sm:leading-8 dark:text-white">
                    {a.solution.coreText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI workflow */}
        <section
          id="ai-workflow"
          className="relative scroll-mt-20 overflow-hidden border-b border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <Eyebrow>{a.ai.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:mt-7 sm:text-5xl lg:text-6xl dark:text-white">
                {a.ai.title}
                <span className="block text-gray-500 dark:text-gray-500">
                  {a.ai.titleAccent}
                </span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:mt-7 sm:text-lg sm:leading-8 dark:text-gray-400">
                {a.ai.description}
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:mt-20 lg:grid-cols-5">
              {a.ai.steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-black/10 bg-white p-5 transition hover:border-blue-500/30 sm:rounded-3xl sm:p-7 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-blue-400/70" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 sm:mt-8 sm:text-xl dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 sm:mt-3 sm:leading-7 dark:text-gray-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-6 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-5 sm:rounded-[2rem] sm:p-10">
                <Eyebrow>{a.ai.humanLabel}</Eyebrow>
                <h3 className="mt-3 text-xl font-semibold text-gray-900 sm:mt-5 sm:text-3xl dark:text-white">
                  {a.ai.humanTitle}
                </h3>
                <p className={`mt-3 max-w-2xl sm:mt-5 ${bodyClass}`}>
                  {a.ai.humanDescription}
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-5 sm:rounded-[2rem] sm:p-10 dark:border-white/[0.08] dark:bg-white/[0.03]">
                <Eyebrow>{a.ai.speedLabel}</Eyebrow>
                <p className="mt-3 text-xl font-semibold leading-tight text-gray-900 sm:mt-5 sm:text-2xl dark:text-white">
                  {a.ai.speedText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Growth and scalability */}
        <section className="border-b border-black/10 dark:border-white/[0.06]">
          <div className={sectionClass}>
            <div className="grid gap-7 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <Eyebrow>{a.growth.eyebrow}</Eyebrow>
                <h2 className={headingClass}>{a.growth.title}</h2>
                {a.growth.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`${index === 0 ? "mt-4 sm:mt-7" : "mt-3 sm:mt-5"} ${bodyClass}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {a.growth.capabilities.map((item, index) => (
                  <CapabilityCard
                    key={item.title}
                    number={String(index + 1).padStart(2, "0")}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security and trust */}
        <section
          id="security"
          className="scroll-mt-20 border-b border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]"
        >
          <div className={sectionClass}>
            <div className="grid gap-7 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <Eyebrow>{a.security.eyebrow}</Eyebrow>
                <h2 className={headingClass}>{a.security.title}</h2>
                {a.security.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`${index === 0 ? "mt-4 sm:mt-7" : "mt-3 sm:mt-5"} ${bodyClass}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="space-y-3 sm:space-y-4">
                {a.security.principles.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-black/10 bg-white p-4 sm:rounded-3xl sm:p-7 dark:border-white/[0.08] dark:bg-white/[0.03]"
                  >
                    <div className="flex gap-4 sm:gap-6">
                      <span className="pt-0.5 text-sm font-medium text-blue-500 dark:text-blue-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 sm:text-lg dark:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600 sm:mt-3 sm:leading-7 dark:text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy and legal */}
            <div className="mt-8 rounded-2xl border border-black/10 bg-white p-5 sm:mt-16 sm:rounded-[2rem] sm:p-10 dark:border-white/[0.08] dark:bg-white/[0.03]">
              <div className="flex flex-col gap-5 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <Eyebrow>{a.privacy.eyebrow}</Eyebrow>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-gray-900 sm:mt-5 sm:text-3xl dark:text-white">
                    {a.privacy.title}
                  </h3>
                  <p className={`mt-3 sm:mt-4 ${bodyClass}`}>
                    {a.privacy.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                  <a
                    href="https://www.akuzzle.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 sm:px-6 sm:py-3.5"
                  >
                    {a.privacy.policy} <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href="https://www.akuzzle.com/terms-of-service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-black/[0.06] sm:px-6 sm:py-3.5 dark:border-white/[0.1] dark:bg-white/[0.03] dark:text-white dark:hover:bg-white/[0.06]"
                  >
                    {a.privacy.terms} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology and architecture */}
        <section
          id="technology"
          className="scroll-mt-20 border-b border-black/10 dark:border-white/[0.06]"
        >
          <div className={sectionClass}>
            <div className="grid gap-7 sm:gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <Eyebrow>{a.technology.eyebrow}</Eyebrow>
                <h2 className={headingClass}>{a.technology.title}</h2>
                {a.technology.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`${index === 0 ? "mt-4 sm:mt-5" : "mt-3 sm:mt-5"} ${bodyClass}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="min-w-0">
                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  {a.technology.items.map((item, index) => (
                    <div
                      key={item.role}
                      className="rounded-2xl border border-black/10 bg-white p-4 sm:rounded-3xl sm:p-7 dark:border-white/[0.08] dark:bg-[#0a1422]"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="rounded-full border border-black/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-gray-500 sm:px-3 sm:tracking-[0.15em] dark:border-white/[0.08] dark:text-gray-500">
                          {item.role}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-gray-900 sm:mt-7 sm:text-xl dark:text-white">
                        {technologies[index]}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600 sm:mt-3 sm:leading-7 dark:text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Architecture flow */}
                <div className="mt-3 rounded-2xl border border-black/10 bg-black/[0.02] p-4 sm:mt-4 sm:rounded-3xl sm:p-8 dark:border-white/[0.08] dark:bg-white/[0.02]">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-600">
                    {a.technology.flow}
                  </p>
                  <div className="mt-4 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:items-center sm:gap-3">
                    {a.technology.flowItems.map((item, index) => (
                      <div
                        key={item}
                        className="flex min-w-0 flex-1 items-center gap-3"
                      >
                        <div className="flex-1 rounded-xl border border-black/10 bg-white px-3 py-3 text-center text-sm font-medium text-gray-700 sm:rounded-2xl sm:px-5 sm:py-4 dark:border-white/[0.08] dark:bg-[#0a1422] dark:text-gray-300">
                          {item}
                        </div>
                        {index < a.technology.flowItems.length - 1 && (
                          <span className="hidden text-gray-400 sm:block dark:text-gray-700">
                            {isRtl ? "←" : "→"}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core capabilities */}
        <section className="border-b border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]">
          <div className={sectionClass}>
            <div className="grid gap-7 sm:gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <Eyebrow>{a.features.eyebrow}</Eyebrow>
                <h2 className={headingClass}>{a.features.title}</h2>
                <p className={`mt-4 sm:mt-7 ${bodyClass}`}>
                  {a.features.description}
                </p>
              </div>
              <div className="grid gap-2.5 sm:gap-3">
                {a.features.items.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="grid gap-2 rounded-2xl border border-black/10 bg-white p-4 sm:grid-cols-[44px_1fr] sm:items-center sm:gap-4 sm:p-6 dark:border-white/[0.08] dark:bg-white/[0.03]"
                  >
                    <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 sm:text-lg dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-gray-600 sm:mt-2 sm:leading-7 dark:text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="border-t border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]">
          <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <Eyebrow>Akuzzle</Eyebrow>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-gray-900 sm:mt-5 sm:text-5xl dark:text-white">
              {a.closing.title}
            </h2>
            <Link
              href="/#products"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500 sm:mt-10 sm:px-7 sm:py-3.5"
            >
              {a.closing.back}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
