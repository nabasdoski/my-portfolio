"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageProvider";
import { useTranslations } from "@/components/useTranslations";

const screenshots = "/images/medicine-finder/";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/medicine-finder/id6771959046";
const ANDROID_URL = "https://apkpure.net/medicine-finder/com.medicinefinder";
const WEBSITE_URL = "https://medicine-finder.com";

const sectionClass = "border-b border-black/10 dark:border-white/[0.06]";

const containerClass =
  "mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24";

const eyebrowClass =
  "text-[10px] font-medium uppercase tracking-[0.22em] text-blue-500 sm:text-xs sm:tracking-[0.25em]";

const headingClass =
  "mt-3 text-2xl font-semibold tracking-[-0.035em] sm:mt-4 sm:text-3xl lg:text-4xl";

const bodyClass =
  "text-sm leading-6 text-gray-500 sm:leading-7 dark:text-gray-400";

const navLinkClass =
  "text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white";

const pillLinkClass =
  "rounded-full border border-black/10 px-4 py-2 text-xs font-medium text-gray-700 transition hover:bg-black/[0.04] dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/[0.05] sm:text-sm";

/**
 * Screenshots. Where the dictionary has a list (roles, steps, features...)
 * the screenshot at the same index is shown next to it. If you reorder a
 * list in translations.ts, reorder the matching array here too.
 */
const overviewImages = [
  "user-home.png",
  "pharmacy-home.png",
  "drug-company-home.png",
];

const howItWorksImages = [
  "user-request.png",
  "pharmacy-response.png",
  "notification.png",
  "chat.png",
];

const discoveryImages = [
  "nearby-pharmacies.png",
  "pharmacy-profile.png",
  "pharmacy-contact.png",
];

const businessImages = [
  "entity-registration.png",
  "registration-review.png",
  "entity-approval.png",
];

// These galleries are shown as screenshots only (no per-image captions),
// because the dictionary features don't line up one-to-one with them.
const pharmacyImages = [
  "pharmacy-requests.png",
  "pharmacy-messaging.png",
  "pharmacy-call.png",
  "pharmacy-tools.png",
];

const learningImages = ["courses.png", "books.png", "blogs.png", "quizzes.png"];

const adminImages = [
  "admin-registrations.png",
  "admin-entities.png",
  "admin-packages.png",
  "admin-content.png",
];

const pad = (index: number) => String(index + 1).padStart(2, "0");

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className={eyebrowClass}>{label}</p>
      <h2 className={headingClass}>{title}</h2>
      {description && (
        <p className={`mt-3 max-w-2xl ${bodyClass} sm:mt-5`}>{description}</p>
      )}
    </div>
  );
}

function ScreenshotCard({
  image,
  alt,
  width = 1000,
  height = 1200,
  compact = false,
}: {
  image: string;
  alt: string;
  width?: number;
  height?: number;
  compact?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02] p-1.5 dark:border-white/[0.07] dark:bg-white/[0.02] sm:rounded-[1.75rem] sm:p-2">
      <Image
        src={`${screenshots}${image}`}
        alt={alt}
        width={width}
        height={height}
        className={`h-auto w-full rounded-xl sm:rounded-[1.35rem] ${
          compact ? "max-h-[420px] object-contain" : ""
        }`}
      />
    </div>
  );
}

function Gallery({
  images,
  label,
  width,
  height,
}: {
  images: string[];
  label: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {images.map((image, index) => (
        <div key={image} className="min-w-0">
          <ScreenshotCard
            image={image}
            alt={`${label} ${index + 1}`}
            width={width}
            height={height}
            compact
          />
        </div>
      ))}
    </div>
  );
}

function FeatureCard({
  title,
  description,
  number,
  className = "",
}: {
  title: string;
  description: string;
  number?: string;
  className?: string;
}) {
  return (
    <div
      className={`min-w-0 rounded-xl border border-black/10 p-3.5 dark:border-white/[0.07] sm:rounded-2xl sm:p-5 ${className}`}
    >
      {number && (
        <span className="text-[10px] font-medium tracking-[0.16em] text-blue-500 sm:text-xs sm:tracking-[0.2em]">
          {number}
        </span>
      )}
      <p className={`text-sm font-semibold ${number ? "mt-1.5" : ""}`}>
        {title}
      </p>
      <p className="mt-1.5 text-xs leading-5 text-gray-500 dark:text-gray-400 sm:leading-6">
        {description}
      </p>
    </div>
  );
}

export default function MedicineFinderPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { direction } = useLanguage();
  const t = useTranslations();
  const m = t.medicineFinder;

  const closeMenu = () => setMenuOpen(false);

  // medicineFinder.nav has no "projects" or "technology" keys, so those two
  // labels are borrowed from existing entries.
  const mobileLinks = [
    { label: t.akuzzle.nav.projects, href: "/#products" },
    { label: m.nav.overview, href: "#overview" },
    { label: m.nav.howItWorks, href: "#how-it-works" },
    { label: m.nav.discovery, href: "#pharmacy-discovery" },
    { label: m.nav.ai, href: "#ai-capability" },
    { label: m.nav.business, href: "#business-workflow" },
    { label: m.nav.pharmacy, href: "#pharmacy-workspace" },
    { label: m.nav.learning, href: "#learning" },
    { label: m.nav.admin, href: "#administration" },
    { label: m.nav.security, href: "#security" },
    { label: m.technology.eyebrow, href: "#technology" },
  ];

  return (
    <main
      dir={direction}
      className="min-h-screen overflow-x-clip bg-white text-gray-900 dark:bg-[#05070b] dark:text-white"
    >
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#05070b]/90">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link
            href="/"
            onClick={closeMenu}
            className="shrink-0 text-sm font-semibold tracking-[0.18em] text-gray-900 dark:text-white"
          >
            NABAZ
          </Link>

          <nav className="hidden items-center gap-4 md:flex lg:gap-6">
            <Link href="/#products" className={navLinkClass}>
              {t.akuzzle.nav.projects}
            </Link>
            <a href="#overview" className={navLinkClass}>
              {m.nav.overview}
            </a>
            <a href="#how-it-works" className={navLinkClass}>
              {m.nav.howItWorks}
            </a>
            <a href="#technology" className={navLinkClass}>
              {m.technology.eyebrow}
            </a>
            <LanguageSwitcher />
            <ThemeToggle />
          </nav>

          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? m.nav.closeMenu : m.nav.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/10 text-gray-800 transition hover:bg-black/[0.04] dark:border-white/10 dark:text-white dark:hover:bg-white/[0.06]"
            >
              {menuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-black/10 bg-white px-4 py-3 dark:border-white/[0.08] dark:bg-[#080c13] md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col">
              {mobileLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2.5 text-sm text-gray-600 transition hover:bg-black/[0.04] hover:text-gray-950 dark:text-gray-300 dark:hover:bg-white/[0.05] dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-24 sm:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/[0.09] blur-3xl sm:h-[500px] sm:w-[700px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24">
          <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <div className="min-w-0">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-black/10 bg-white shadow-lg dark:border-white/10 dark:bg-[#0d1b2d] sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Image
                    src="/images/medicine-finder/micon.jpg"
                    alt="Medicine Finder"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>

                <div className="min-w-0">
                  <p className={eyebrowClass}>02 · {m.hero.category}</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                    {m.hero.platform}: {m.hero.platformValue}
                  </p>
                </div>
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.055em] text-gray-950 dark:text-white sm:mt-8 sm:text-6xl lg:text-7xl">
                Medicine Finder
              </h1>

              <p className="mt-4 max-w-2xl text-lg font-medium leading-7 text-gray-700 dark:text-gray-300 sm:mt-6 sm:text-xl sm:leading-8">
                {m.hero.title}
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:mt-5 sm:text-base sm:leading-7 dark:text-gray-500">
                {m.hero.intro}
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-3">
                <a
                  href="#overview"
                  className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-500 sm:px-7 sm:py-3.5"
                >
                  {m.hero.explore}
                </a>

                <a
                  href="#how-it-works"
                  className="rounded-full border border-black/10 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-black/[0.04] dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/[0.05] sm:px-5 sm:py-3"
                >
                  {m.hero.viewFeatures}
                </a>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-7">
                <span className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                  {m.hero.availableOn}
                </span>

                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={pillLinkClass}
                >
                  {m.hero.ios}
                </a>
                <a
                  href={ANDROID_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={pillLinkClass}
                >
                  {m.hero.android}
                </a>
                <a
                  href={WEBSITE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={pillLinkClass}
                >
                  {m.hero.web}
                </a>
              </div>

              <div className="mt-10 hidden items-center gap-3 text-xs text-gray-400 lg:flex">
                <span className="h-px w-8 bg-current" />
                {m.hero.scroll}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-md">
              <div className="pointer-events-none absolute -inset-5 rounded-full bg-blue-500/[0.08] blur-3xl sm:-inset-8" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-black/[0.02] p-2.5 shadow-2xl shadow-black/10 dark:border-white/[0.08] dark:bg-white/[0.02] dark:shadow-black/40 sm:rounded-[2.5rem] sm:p-4">
                <div className="overflow-hidden rounded-[1.35rem] sm:rounded-[2rem]">
                  <Image
                    src="/images/medicine-finder/user-home.png"
                    alt={`Medicine Finder — ${m.hero.platformValue}`}
                    width={1200}
                    height={1600}
                    priority
                    className="h-auto w-full"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, 500px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section id="overview" className={sectionClass}>
        <div className={containerClass}>
          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-8">
            <SectionHeading
              label={m.overview.eyebrow}
              title={m.overview.title}
            />

            <p className={bodyClass}>{m.overview.description}</p>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-4">
            {overviewImages.map((image, index) => (
              <ScreenshotCard
                key={image}
                image={image}
                alt={m.overview.roles[index]?.title ?? "Medicine Finder"}
              />
            ))}
          </div>

          <div className="mt-8 sm:mt-12">
            <h3 className="text-base font-semibold sm:text-lg">
              {m.overview.rolesTitle}
            </h3>
            <p className={`mt-2 max-w-2xl ${bodyClass}`}>
              {m.overview.rolesDescription}
            </p>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {m.overview.roles.map((role) => (
              <div
                key={role.title}
                className="min-w-0 rounded-2xl border border-black/10 p-4 dark:border-white/[0.07] sm:p-5"
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-blue-500 sm:text-xs sm:tracking-[0.2em]">
                  {role.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className={sectionClass}>
        <div className={containerClass}>
          <SectionHeading
            label={m.howItWorks.eyebrow}
            title={m.howItWorks.title}
            description={m.howItWorks.description}
          />

          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
            {m.howItWorks.steps.map((step, index) => (
              <div key={step.title} className="min-w-0">
                {howItWorksImages[index] && (
                  <ScreenshotCard
                    image={howItWorksImages[index]}
                    alt={step.title}
                    compact
                  />
                )}
                <div className="mt-2.5 flex items-start gap-2 sm:mt-4 sm:gap-3">
                  <span className="pt-0.5 text-[10px] font-medium tracking-[0.16em] text-blue-500 sm:text-xs sm:tracking-[0.2em]">
                    {pad(index)}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xs font-semibold leading-5 sm:text-sm">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-5 text-gray-500 dark:text-gray-400 sm:text-xs sm:leading-6">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-blue-500/15 bg-blue-500/[0.04] p-4 sm:mt-8 sm:rounded-3xl sm:p-6">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {m.howItWorks.requestTitle}
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400 sm:leading-7">
              {m.howItWorks.requestDescription}
            </p>
            <p className="mt-3 text-xs font-medium text-blue-500">
              {m.howItWorks.stopRequest}
            </p>
          </div>
        </div>
      </section>

      {/* PHARMACY DISCOVERY */}
      <section id="pharmacy-discovery" className={sectionClass}>
        <div className={containerClass}>
          <div className="grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div className="min-w-0">
              <SectionHeading
                label={m.discovery.eyebrow}
                title={m.discovery.title}
                description={m.discovery.description}
              />

              <div className="mt-5 sm:mt-7">
                <h3 className="text-sm font-semibold sm:text-base">
                  {m.discovery.searchTitle}
                </h3>
                <p className={`mt-1.5 ${bodyClass}`}>
                  {m.discovery.searchDescription}
                </p>
              </div>

              <div className="mt-4 grid gap-2.5 sm:gap-3">
                {m.discovery.features.map((feature) => (
                  <FeatureCard
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {discoveryImages.map((image, index) => (
                <ScreenshotCard
                  key={image}
                  image={image}
                  alt={m.discovery.features[index]?.title ?? "Medicine Finder"}
                  compact
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI */}
      <section id="ai-capability" className={sectionClass}>
        <div className={containerClass}>
          <div className="grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <ScreenshotCard
              image="ai-prescription-reader.png"
              alt={m.ai.title}
              width={1600}
              height={1100}
            />

            <div className="min-w-0">
              <SectionHeading
                label={m.ai.eyebrow}
                title={m.ai.title}
                description={m.ai.description}
              />

              <div className="mt-5 grid gap-2.5 sm:mt-7 sm:gap-3">
                {m.ai.steps.map((step, index) => (
                  <FeatureCard
                    key={step.title}
                    number={pad(index)}
                    title={step.title}
                    description={step.description}
                  />
                ))}
              </div>

              <div className="mt-3 rounded-xl border border-blue-500/15 bg-blue-500/[0.04] p-3.5 sm:mt-4 sm:rounded-2xl sm:p-5">
                <p className="text-sm font-semibold">{m.ai.noteTitle}</p>
                <p className="mt-1.5 text-xs leading-5 text-gray-600 dark:text-gray-400 sm:leading-6">
                  {m.ai.noteDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section id="business-workflow" className={sectionClass}>
        <div className={containerClass}>
          <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-8">
            <SectionHeading
              label={m.business.eyebrow}
              title={m.business.title}
            />
            <p className={bodyClass}>{m.business.description}</p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            {m.business.features.map((feature, index) => (
              <div key={feature.title} className="min-w-0">
                {businessImages[index] && (
                  <ScreenshotCard
                    image={businessImages[index]}
                    alt={feature.title}
                    compact
                  />
                )}
                <div className="mt-2.5 sm:mt-4">
                  <span className="text-[10px] font-medium tracking-[0.16em] text-blue-500 sm:text-xs sm:tracking-[0.2em]">
                    {pad(index)}
                  </span>
                  <h3 className="mt-1 text-xs font-semibold sm:mt-2 sm:text-sm">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-gray-500 dark:text-gray-400 sm:text-xs sm:leading-6">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHARMACY WORKSPACE */}
      <section id="pharmacy-workspace" className={sectionClass}>
        <div className={containerClass}>
          <SectionHeading
            label={m.pharmacy.eyebrow}
            title={m.pharmacy.title}
            description={m.pharmacy.description}
          />

          <div className="mt-7 sm:mt-10">
            <Gallery images={pharmacyImages} label={m.pharmacy.eyebrow} />
          </div>

          <div className="mt-4 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
            {m.pharmacy.features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING */}
      <section id="learning" className={sectionClass}>
        <div className={containerClass}>
          <SectionHeading
            label={m.learning.eyebrow}
            title={m.learning.title}
            description={m.learning.description}
          />

          <div className="mt-7 sm:mt-10">
            <Gallery images={learningImages} label={m.learning.eyebrow} />
          </div>

          <div className="mt-4 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
            {m.learning.features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ADMINISTRATION */}
      <section id="administration" className={sectionClass}>
        <div className={containerClass}>
          <div className="grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
            <SectionHeading
              label={m.admin.eyebrow}
              title={m.admin.title}
              description={m.admin.description}
            />

            <ScreenshotCard
              image="admin-dashboard.png"
              alt={m.admin.title}
              width={1800}
              height={1100}
            />
          </div>

          <div className="mt-5 sm:mt-8">
            <Gallery
              images={adminImages}
              label={m.admin.eyebrow}
              width={1200}
              height={900}
            />
          </div>

          <div className="mt-4 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
            {m.admin.features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY & PRIVACY */}
      <section id="security" className={sectionClass}>
        <div className={containerClass}>
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
            <SectionHeading
              label={m.security.eyebrow}
              title={m.security.title}
              description={m.security.description}
            />

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {m.security.principles.map((item) => (
                <div
                  key={item.title}
                  className="min-w-0 rounded-2xl border border-black/10 bg-black/[0.02] p-4 dark:border-white/[0.07] dark:bg-white/[0.02] sm:rounded-3xl sm:p-6"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/[0.06] text-blue-500 sm:h-10 sm:w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M12 3 5 6v5c0 4.5 2.9 8.5 7 10 4.1-1.5 7-5.5 7-10V6l-7-3Z" />
                      <path d="m9.5 12 1.7 1.7 3.5-3.5" />
                    </svg>
                  </div>

                  <h3 className="mt-3 text-sm font-semibold text-gray-900 dark:text-white sm:mt-5">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400 sm:leading-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-black/10 bg-black/[0.02] p-4 dark:border-white/[0.07] dark:bg-white/[0.02] sm:mt-8 sm:gap-4 sm:rounded-3xl sm:p-8">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <circle cx="12" cy="12" r="9" />
                <path
                  d="M12 8h.01M11 12h1v4h1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <p className="min-w-0 text-sm leading-6 text-gray-500 dark:text-gray-400 sm:leading-7">
              {m.security.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className={sectionClass}>
        <div className={containerClass}>
          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4 dark:border-white/[0.07] dark:bg-white/[0.02] sm:rounded-[2.5rem] sm:p-8 lg:p-12">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
              <SectionHeading
                label={m.technology.eyebrow}
                title={m.technology.title}
                description={m.technology.description}
              />

              <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                {m.technology.items.map((item) => (
                  <FeatureCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    className="bg-white dark:bg-[#090d14]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="border-t border-black/10 dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <p className={eyebrowClass}>Medicine Finder</p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.045em] sm:mt-5 sm:text-4xl lg:text-5xl">
            {m.closing.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400 sm:mt-5 sm:leading-7">
            {m.closing.description}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2.5 sm:mt-8 sm:gap-3">
            <a
              href={WEBSITE_URL}
              target="_blank"
              rel="noreferrer"
              //   className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 sm:px-6 sm:py-3"
              className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-500 sm:px-7 sm:py-3.5"
            >
              {m.closing.explore}
            </a>
          </div>

          <Link
            href="/#products"
            className="mt-5 inline-flex items-center gap-2 text-sm text-gray-500 underline-offset-4 transition hover:text-blue-500 hover:underline sm:mt-7"
          >
            {/* rotate-180 gives ←, and rtl:-scale-x-100 turns it into → in RTL */}
            <span
              aria-hidden="true"
              className="inline-block rotate-180 rtl:-scale-x-100"
            >
              →
            </span>
            {m.closing.back}
          </Link>
        </div>
      </section>
    </main>
  );
}
