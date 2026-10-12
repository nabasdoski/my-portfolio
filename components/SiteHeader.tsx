"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import { useTranslations } from "@/components/useTranslations";
import { SITE } from "@/lib/site";

export type NavLink = { label: string; href: string };

type SiteHeaderProps = {
  /** Links shown in the desktop bar (keep it to about 3-4). */
  links: NavLink[];
  /** Links shown in the mobile menu. Defaults to `links`. */
  mobileLinks?: NavLink[];
  /** Optional call-to-action button (desktop bar and end of mobile menu). */
  cta?: NavLink;
};

const desktopLinkClass =
  "text-sm text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white";

const mobileLinkClass =
  "rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-black/[0.04] hover:text-blue-500 dark:text-gray-300 dark:hover:bg-white/[0.05] dark:hover:text-blue-400";

export default function SiteHeader({
  links,
  mobileLinks,
  cta,
}: SiteHeaderProps) {
  const t = useTranslations();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const menuLinks = mobileLinks ?? links;

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl dark:border-white/[0.06] dark:bg-background/90">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6 lg:h-20 lg:px-8"
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20">
            {SITE.brand.charAt(0)}
          </div>

          <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {SITE.brand}
            <span className="text-blue-500">.</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-10">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className={desktopLinkClass}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          {cta && (
            <Link
              href={cta.href}
              className="hidden rounded-full border border-black/10 bg-black/[0.03] px-5 py-2.5 text-sm font-medium text-gray-800 transition hover:border-blue-500/40 hover:bg-blue-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white lg:inline-flex"
            >
              {cta.label}
            </Link>
          )}

          <LanguageSwitcher />
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] text-gray-800 transition hover:border-blue-500/40 dark:border-white/10 dark:bg-white/[0.04] dark:text-white md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                d={menuOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-black/10 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-xl dark:border-white/[0.06] dark:bg-background/95 md:hidden"
        >
          <nav
            aria-label="Mobile"
            className="mx-auto flex max-w-7xl flex-col gap-1"
          >
            {menuLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                {item.label}
              </Link>
            ))}

            {cta && (
              <Link
                href={cta.href}
                onClick={closeMenu}
                className="mt-1 rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                {cta.label}
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
