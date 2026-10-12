"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, Arrow } from "@/components/useTranslations";
import ProductCard from "@/components/ProductCard";
import ThemeToggle from "@/components/ThemeToggle";
import ContactForm from "@/components/ContactForm";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { SITE } from "@/lib/site";

export default function Home() {
  const t = useTranslations();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav.products, href: "#products" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-gray-900 dark:bg-[#050b14] dark:text-white">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#050b14]/90">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6 lg:h-20 lg:px-8">
          <Link href="/" className="group flex shrink-0 items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20">
              N
            </div>

            <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Nabaz<span className="text-blue-500">.</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            {/* Desktop contact button */}
            <a
              href="#contact"
              className="hidden rounded-full border border-black/10 bg-black/[0.03] px-5 py-2.5 text-sm font-medium text-gray-800 transition hover:border-blue-500/40 hover:bg-blue-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white md:inline-flex"
            >
              {t.nav.letsTalk}
            </a>

            {/* Language and theme controls */}
            <LanguageSwitcher />
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-controls="mobile-navigation"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] text-gray-800 transition hover:border-blue-500/40 dark:border-white/10 dark:bg-white/[0.04] dark:text-white md:hidden"
            >
              {mobileMenuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
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
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-black/10 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#050b14]/95 md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-black/[0.04] hover:text-blue-500 dark:text-gray-300 dark:hover:bg-white/[0.05] dark:hover:text-blue-400"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-1 rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                {t.nav.letsTalk}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[120px] sm:h-[600px] sm:w-[900px] sm:blur-[140px]" />

        <div className="relative mx-auto flex min-h-[calc(100svh-64px)] max-w-7xl items-center px-4 py-8 sm:px-6 sm:py-16 lg:min-h-[calc(100vh-80px)] lg:px-8 lg:py-24">
          <div className="max-w-5xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 dark:border-white/10 dark:bg-white/[0.03] sm:mb-8 sm:gap-3 sm:px-4 sm:py-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500 shadow-lg shadow-blue-500/60" />
              <span className="text-xs text-gray-600 dark:text-gray-300 sm:text-sm">
                {t.hero.badge}
              </span>
            </div>

            <h1 className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-gray-900 sm:text-6xl lg:text-8xl dark:text-white">
              {t.hero.title1}
              <span className="block text-gray-500">{t.hero.title2}</span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                {t.hero.title3}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:mt-10 sm:text-xl sm:leading-8 dark:text-gray-400">
              {t.hero.intro}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-3 font-medium text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500 sm:px-7 sm:py-3.5"
              >
                {t.hero.ctaProducts}
                <Arrow className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-black/[0.03] px-6 py-3 font-medium text-gray-700 transition hover:bg-black/[0.06] dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-200 dark:hover:bg-white/[0.07] sm:px-7 sm:py-3.5"
              >
                {t.hero.ctaAbout}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 border-t border-black/10 pt-5 dark:border-white/[0.08] sm:mt-16 sm:gap-x-10 sm:gap-y-6 sm:pt-8">
              {t.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="border-t border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-4 sm:gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-500 dark:text-blue-400 sm:text-sm">
                {t.products.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:mt-4 sm:text-5xl">
                {t.products.heading}
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500 sm:text-base sm:leading-7 dark:text-gray-500">
              {t.products.sub}
            </p>
          </div>

          <div className="mt-7 grid gap-5 sm:mt-12 sm:gap-8 lg:grid-cols-2">
            <ProductCard
              number="01"
              name="Akuzzle"
              category={t.products.akuzzle.category}
              description={t.products.akuzzle.description}
              cta={t.products.cta}
              technologies={["React Native", "Node.js", "PostgreSQL", "AI"]}
              href="/products/akuzzle"
              visual="akuzzle"
            />

            <ProductCard
              number="02"
              name="Medicine Finder"
              category={t.products.medicine.category}
              description={t.products.medicine.description}
              cta={t.products.cta}
              technologies={["iOS", "AI", "Security", "Healthcare"]}
              href="/products/medicine-finder"
              visual="medicine"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-y border-black/10 dark:border-white/[0.06]"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-500 sm:text-sm">
                {t.about.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-gray-900 dark:text-white sm:mt-5 sm:text-5xl">
                {t.about.heading}
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 dark:text-gray-400">
                {t.about.p1}
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-500 sm:mt-6 sm:text-base sm:leading-8 dark:text-gray-500">
                {t.about.p2}
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-500 sm:mt-6 sm:text-base sm:leading-8 dark:text-gray-500">
                {t.about.p3}
              </p>

              <p className="mt-4 text-sm leading-7 text-gray-500 sm:mt-6 sm:text-base sm:leading-8 dark:text-gray-500">
                {t.about.p4Before}
                <span className="font-medium text-gray-900 dark:text-white">
                  {t.about.p4Highlight}
                </span>
                {t.about.p4After}
              </p>

              <div className="mt-6 grid gap-3 sm:mt-10 sm:grid-cols-2">
                {t.about.cards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-black/10 bg-black/[0.02] p-4 dark:border-white/[0.07] dark:bg-white/[0.02] sm:p-5"
                  >
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-10">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-gray-900 transition hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
                >
                  {t.nav.letsTalk}
                  <Arrow className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-black/10 dark:border-white/[0.06]"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-500 sm:text-sm">
                {t.contact.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-gray-900 dark:text-white sm:mt-5 sm:text-5xl">
                {t.contact.heading}
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 dark:text-gray-400">
                {t.contact.intro}
              </p>

              <ContactForm />

              <div className="mt-6 grid gap-3 sm:mt-10 sm:grid-cols-2">
                <a
                  href={`mailto:${SITE.email}`}
                  className="group rounded-3xl border border-black/10 bg-black/[0.02] p-4 transition hover:-translate-y-1 hover:border-blue-500/30 dark:border-white/[0.07] dark:bg-white/[0.02] sm:p-6"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500">
                    {t.contact.emailLabel}
                  </p>

                  <p className="mt-3 break-words text-sm font-medium text-gray-900 dark:text-white">
                    <bdi>{SITE.email}</bdi>
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500 transition group-hover:text-blue-500 sm:mt-5">
                    {t.contact.emailCta}
                    <Arrow className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </span>
                </a>

                {SITE.linkedin && (
                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-3xl border border-black/10 bg-black/[0.02] p-4 transition hover:-translate-y-1 hover:border-blue-500/30 dark:border-white/[0.07] dark:bg-white/[0.02] sm:p-6"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500">
                      {t.contact.linkedinLabel}
                    </p>

                    <p className="mt-3 text-sm font-medium text-gray-900 dark:text-white">
                      {t.contact.linkedinTitle}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500 transition group-hover:text-blue-500 sm:mt-5">
                      {t.contact.linkedinCta}
                      <Arrow className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
