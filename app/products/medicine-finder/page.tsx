
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const screenshots = "/images/medicine-finder/";

const sectionClass =
  "border-b border-black/10 dark:border-white/[0.06]";

const containerClass =
  "mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24";

const eyebrowClass =
  "text-[10px] font-medium uppercase tracking-[0.22em] text-blue-500 sm:text-xs sm:tracking-[0.25em]";

const headingClass =
  "mt-3 text-2xl font-semibold tracking-[-0.035em] sm:mt-4 sm:text-3xl lg:text-4xl";

const bodyClass =
  "text-sm leading-6 text-gray-500 sm:leading-7 dark:text-gray-400";

const tags = [
  "iOS",
  "Android",
  "AI",
  "Pharmacy Network",
  "Messaging",
  "Role-based Access",
];

const userRoles = [
  {
    title: "Users",
    text: "Search pharmacies, request medication availability and communicate.",
  },
  {
    title: "Pharmacies",
    text: "Receive requests, respond, communicate and use pharmacy tools.",
  },
  {
    title: "Drug companies",
    text: "Use a dedicated business experience for company-related operations.",
  },
];

const requestSteps = [
  { number: "01", title: "Request", image: "user-request.png" },
  {
    number: "02",
    title: "Pharmacy response",
    image: "pharmacy-response.png",
  },
  { number: "03", title: "Notification", image: "notification.png" },
  { number: "04", title: "Conversation", image: "chat.png" },
];

const discoverySteps = [
  { image: "nearby-pharmacies.png", alt: "Nearby pharmacies" },
  { image: "pharmacy-profile.png", alt: "Pharmacy profile" },
  { image: "pharmacy-contact.png", alt: "Contact pharmacy" },
];

const businessSteps = [
  { number: "01", title: "Registration", image: "entity-registration.png" },
  { number: "02", title: "Admin review", image: "registration-review.png" },
  { number: "03", title: "Approval", image: "entity-approval.png" },
  { number: "04", title: "Subscription", image: "subscription-payment.png" },
];

const pharmacyTools = [
  { image: "pharmacy-requests.png", title: "Requests" },
  { image: "pharmacy-messaging.png", title: "Messaging" },
  { image: "pharmacy-call.png", title: "Calls" },
  { image: "pharmacy-tools.png", title: "More tools" },
];

const platformCapabilities = [
  ["Mobile", "iOS and Android experiences"],
  ["Communication", "Messaging, images and calls"],
  ["AI", "Prescription-reading assistance"],
  ["Access", "Role-based experiences and permissions"],
  ["Business", "Subscriptions and packages"],
  ["Administration", "Content and platform management"],
];

const learningItems = [
  { image: "courses.png", title: "Courses" },
  { image: "books.png", title: "Books" },
  { image: "blogs.png", title: "Blogs" },
  { image: "quizzes.png", title: "Quizzes" },
];

const adminItems = [
  {
    image: "admin-registrations.png",
    title: "Registrations",
    text: "Review incoming entity registrations.",
  },
  {
    image: "admin-entities.png",
    title: "Entities",
    text: "Manage pharmacies and drug companies.",
  },
  {
    image: "admin-packages.png",
    title: "Packages",
    text: "Configure subscription plans.",
  },
  {
    image: "admin-content.png",
    title: "Content",
    text: "Manage courses, books, blogs and quizzes.",
  },
];

const securityItems = [
  {
    title: "Role-based access",
    text: "Users, pharmacies and drug companies have different experiences and permissions.",
  },
  {
    title: "Controlled registration",
    text: "Pharmacy and drug company registrations are reviewed through the administration system.",
  },
  {
    title: "Protected communication",
    text: "Users and participating pharmacies can communicate through the platform within their respective roles.",
  },
  {
    title: "Privacy controls",
    text: "Account, communication and privacy controls support responsible handling of platform data.",
  },
];

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
        <p className={`mt-3 max-w-2xl ${bodyClass} sm:mt-5`}>
          {description}
        </p>
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

export default function MedicineFinderPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-gray-900 dark:bg-[#05070b] dark:text-white">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#05070b]/90">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-sm font-semibold tracking-[0.18em] text-gray-900 dark:text-white"
          >
            NABAZ
          </Link>

          <nav className="hidden items-center gap-5 md:flex lg:gap-6">
            <Link
              href="/#products"
              className="text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              All projects
            </Link>
            <a
              href="#overview"
              className="text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Overview
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              How it works
            </a>
            <a
              href="#technology"
              className="text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Technology
            </a>
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-gray-800 transition hover:bg-black/[0.04] dark:border-white/10 dark:text-white dark:hover:bg-white/[0.06]"
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
              {[
                { label: "All projects", href: "/#products" },
                { label: "Overview", href: "#overview" },
                { label: "How it works", href: "#how-it-works" },
                { label: "Pharmacy discovery", href: "#pharmacy-discovery" },
                { label: "AI capability", href: "#ai-capability" },
                { label: "Business workflow", href: "#business-workflow" },
                { label: "Learning & quizzes", href: "#learning" },
                { label: "Administration", href: "#administration" },
                { label: "Security & privacy", href: "#security" },
                { label: "Technology", href: "#technology" },
              ].map((item) => (
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
            <div>
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

                <div>
                  <p className={eyebrowClass}>
                    02 · Healthcare Technology
                  </p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                    Digital healthcare platform
                  </p>
                </div>
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.055em] text-gray-950 dark:text-white sm:mt-8 sm:text-6xl lg:text-7xl">
                Medicine Finder
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-600 dark:text-gray-400 sm:mt-6 sm:text-xl sm:leading-8">
                Connecting people with pharmacies when medication availability
                matters.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:mt-5 sm:text-base sm:leading-7 dark:text-gray-500">
                A multilingual healthcare directory and communication platform
                that helps users find participating pharmacies, request
                medication availability, and communicate directly.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-8">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-[11px] text-gray-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-400 sm:px-4 sm:py-2 sm:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-3">
                <a
                  href="https://apps.apple.com/us/app/medicine-finder/id6771959046"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 sm:px-5 sm:py-3"
                >
                  App Store
                </a>

                <a
                  href="https://apkpure.net/medicine-finder/com.medicinefinder"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black/10 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-black/[0.04] dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/[0.05] sm:px-5 sm:py-3"
                >
                  Android
                </a>

                <a
                  href="https://medicine-finder.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black/10 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-black/[0.04] dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/[0.05] sm:px-5 sm:py-3"
                >
                  Website
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-md">
              <div className="pointer-events-none absolute -inset-5 rounded-full bg-blue-500/[0.08] blur-3xl sm:-inset-8" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-black/[0.02] p-2.5 shadow-2xl shadow-black/10 dark:border-white/[0.08] dark:bg-white/[0.02] dark:shadow-black/40 sm:rounded-[2.5rem] sm:p-4">
                <div className="overflow-hidden rounded-[1.35rem] sm:rounded-[2rem]">
                  <Image
                    src="/images/medicine-finder/user-home.png"
                    alt="Medicine Finder application home screen"
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
              label="The product"
              title="One platform connecting people, pharmacies and healthcare businesses."
            />

            <p className={bodyClass}>
              The experience changes according to the user&apos;s role, while
              administration controls registrations, subscriptions, content
              and platform access.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-4">
            <ScreenshotCard
              image="user-home.png"
              alt="Medicine Finder user experience"
            />
            <ScreenshotCard
              image="pharmacy-home.png"
              alt="Medicine Finder pharmacy experience"
            />
            <ScreenshotCard
              image="drug-company-home.png"
              alt="Medicine Finder drug company experience"
            />
          </div>

          <div className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4">
            {userRoles.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl border border-black/10 p-4 dark:border-white/[0.07] sm:p-5"
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-blue-500 sm:text-xs sm:tracking-[0.2em]">
                  {role.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {role.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-gray-500 sm:mt-6 sm:text-sm sm:leading-6">
            Medicine Finder supports Kurdish, Arabic and English, helping
            different communities use the platform in their preferred language.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className={sectionClass}>
        <div className={containerClass}>
          <SectionHeading
            label="How it works"
            title="From a request to a pharmacy conversation."
          />

          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
            {requestSteps.map((item) => (
              <div key={item.number} className="min-w-0">
                <ScreenshotCard
                  image={item.image}
                  alt={item.title}
                  compact
                />
                <div className="mt-2.5 flex items-start gap-2 sm:mt-4 sm:gap-3">
                  <span className="pt-0.5 text-[10px] font-medium tracking-[0.16em] text-blue-500 sm:text-xs sm:tracking-[0.2em]">
                    {item.number}
                  </span>
                  <h3 className="text-xs font-semibold leading-5 sm:text-sm">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-blue-500/15 bg-blue-500/[0.04] p-4 sm:mt-8 sm:rounded-3xl sm:p-6">
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400 sm:leading-7">
              While a medication request is active, it is updated and sent to
              participating pharmacies every 10 seconds. The user can stop the
              request at any time. Pharmacies can respond with a quick
              availability response or send a message. Users receive
              notifications and can continue the conversation through text,
              images or calls.
            </p>
          </div>
        </div>
      </section>

      {/* PHARMACY DISCOVERY */}
      <section id="pharmacy-discovery" className={sectionClass}>
        <div className={containerClass}>
          <div className="grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div>
              <SectionHeading
                label="Pharmacy discovery"
                title="Users can also find and contact pharmacies directly."
                description="Search nearby participating pharmacies, open a profile and start a conversation about medication availability."
              />
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {discoverySteps.map((item) => (
                <ScreenshotCard
                  key={item.image}
                  image={item.image}
                  alt={item.alt}
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
              alt="AI prescription reader for pharmacists"
              width={1600}
              height={1100}
            />

            <div>
              <SectionHeading
                label="AI capability"
                title="AI assistance for difficult prescriptions."
                description="The pharmacy experience includes an AI-powered prescription reader to assist authorized pharmacists when working with difficult-to-read prescription information."
              />

              <div className="mt-5 grid gap-2.5 sm:mt-7 sm:gap-3">
                {[
                  {
                    title: "Pharmacy-only",
                    text: "Available within the authorized pharmacy experience.",
                  },
                  {
                    title: "AI-assisted",
                    text: "Supports pharmacists when prescription information is difficult to read.",
                  },
                  {
                    title: "Professional verification",
                    text: "AI does not replace professional judgment or clinical responsibility.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-black/10 p-3.5 dark:border-white/[0.07] sm:rounded-2xl sm:p-4"
                  >
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-gray-500 sm:leading-6 dark:text-gray-400">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS FLOW */}
      <section id="business-workflow" className={sectionClass}>
        <div className={containerClass}>
          <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-8">
            <SectionHeading
              label="Business workflow"
              title="Controlled registration and activation."
            />
            <p className={bodyClass}>
              Pharmacies and drug companies pass through administration review
              before becoming active subscribed entities.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
            {businessSteps.map((item) => (
              <div key={item.number} className="min-w-0">
                <ScreenshotCard
                  image={item.image}
                  alt={item.title}
                  compact
                />
                <div className="mt-2.5 sm:mt-4">
                  <span className="text-[10px] font-medium tracking-[0.16em] text-blue-500 sm:text-xs sm:tracking-[0.2em]">
                    {item.number}
                  </span>
                  <h3 className="mt-1 text-xs font-semibold sm:mt-2 sm:text-sm">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[11px] text-gray-500 sm:mt-7 sm:justify-center sm:gap-x-3 sm:text-xs">
            <span>Registration</span>
            <span aria-hidden="true">→</span>
            <span>Admin review</span>
            <span aria-hidden="true">→</span>
            <span>Approval</span>
            <span aria-hidden="true">→</span>
            <span>Subscription payment</span>
          </div>
        </div>
      </section>

      {/* PHARMACY WORKSPACE */}
      <section className={sectionClass}>
        <div className={containerClass}>
          <SectionHeading
            label="Pharmacy workspace"
            title="Tools designed around the pharmacy workflow."
            description="Medication requests, messaging, calls and additional role-specific tools are brought together in the pharmacy experience."
          />

          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
            {pharmacyTools.map((item) => (
              <div key={item.image} className="min-w-0">
                <ScreenshotCard
                  image={item.image}
                  alt={`Medicine Finder ${item.title}`}
                  compact
                />
                <h3 className="mt-2.5 text-xs font-semibold sm:mt-4 sm:text-sm">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING & QUIZZES */}
      <section id="learning" className={sectionClass}>
        <div className={containerClass}>
          <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-8">
            <SectionHeading
              label="Learning & quizzes"
              title="Learning content built into the platform."
            />
            <p className={bodyClass}>
              Courses, books, blogs and quizzes are managed through the
              administration system and made available to users through their
              platform experience.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
            {learningItems.map((item) => (
              <div key={item.image} className="group min-w-0">
                <ScreenshotCard
                  image={item.image}
                  alt={`Medicine Finder ${item.title}`}
                  compact
                />
                <h3 className="mt-2.5 text-xs font-semibold sm:mt-4 sm:text-sm">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
            <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4 dark:border-white/[0.07] dark:bg-white/[0.02] sm:rounded-3xl sm:p-6">
              <p className={eyebrowClass}>Content management</p>
              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400 sm:mt-3 sm:leading-7">
                Administration controls the learning content, including
                courses, books, blogs and quiz material.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4 dark:border-white/[0.07] dark:bg-white/[0.02] sm:rounded-3xl sm:p-6">
              <p className={eyebrowClass}>Quiz participation</p>
              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400 sm:mt-3 sm:leading-7">
                Quizzes support individual participation or sessions with up
                to four people. Pharmacies can also invite other users to
                participate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADMIN CONTROL PANEL */}
      <section id="administration" className={sectionClass}>
        <div className={containerClass}>
          <div className="grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
            <div>
              <SectionHeading
                label="Administration"
                title="One control center for the entire platform."
                description="The administration system manages users, registrations, entities, subscriptions, learning content, translations, pages and other platform operations."
              />
            </div>

            <ScreenshotCard
              image="admin-dashboard.png"
              alt="Medicine Finder administration dashboard"
              width={1800}
              height={1100}
            />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-4">
            {adminItems.map((item) => (
              <div key={item.image} className="min-w-0">
                <ScreenshotCard
                  image={item.image}
                  alt={`Medicine Finder ${item.title}`}
                  width={1200}
                  height={900}
                  compact
                />
                <h3 className="mt-2.5 text-xs font-semibold sm:mt-4 sm:text-sm">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] leading-5 text-gray-500 sm:text-xs sm:leading-6 dark:text-gray-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-blue-500/15 bg-blue-500/[0.04] p-4 sm:mt-8 sm:rounded-3xl sm:p-6">
            <p className="mb-3 text-xs font-semibold text-gray-700 dark:text-gray-300">
              Platform management modules
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Users",
                "Registrations",
                "Entities",
                "Packages",
                "Courses",
                "Books",
                "Blogs",
                "Posters",
                "Quizzes",
                "Translations",
                "Pages",
                "AI Assistant",
                "Analytics",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 bg-white/70 px-2.5 py-1 text-[10px] text-gray-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-400 sm:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY & PRIVACY */}
      <section id="security" className={sectionClass}>
        <div className={containerClass}>
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
            <div>
              <SectionHeading
                label="Security & privacy"
                title="Designed around controlled access and responsible data handling."
                description="Medicine Finder handles different account types and communication flows, so access is separated according to each account's role and permissions."
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {securityItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/10 bg-black/[0.02] p-4 dark:border-white/[0.07] dark:bg-white/[0.02] sm:rounded-3xl sm:p-6"
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
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-black/10 bg-black/[0.02] p-4 dark:border-white/[0.07] dark:bg-white/[0.02] sm:mt-8 sm:rounded-3xl sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Healthcare platform — not medical advice
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400 sm:leading-7">
                  Medicine Finder is a directory and communication platform.
                  It does not diagnose, prescribe, dispense or provide clinical
                  treatment recommendations. AI-assisted prescription reading
                  is intended to support authorized pharmacists, not replace
                  their professional judgment.
                </p>
              </div>

              <a
                href="https://medicine-finder.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-black/10 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-black/[0.04] dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/[0.05] sm:px-5 sm:py-3"
              >
                View platform
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className={sectionClass}>
        <div className={containerClass}>
          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4 dark:border-white/[0.07] dark:bg-white/[0.02] sm:rounded-[2.5rem] sm:p-8 lg:p-12">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
              <div>
                <SectionHeading
                  label="Technology"
                  title="Built as a connected digital platform."
                  description="The platform combines mobile experiences, role-based access, administration tools, communication, subscriptions and AI-assisted functionality."
                />
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
                {platformCapabilities.map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-black/10 bg-white p-3.5 dark:border-white/[0.07] dark:bg-[#090d14] sm:rounded-2xl sm:p-5"
                  >
                    <p className="text-sm font-semibold">{title}</p>
                    <p className="mt-1.5 text-xs leading-5 text-gray-500 sm:mt-2 sm:leading-6 dark:text-gray-400">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <p className={eyebrowClass}>Medicine Finder</p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.045em] sm:mt-5 sm:text-4xl lg:text-5xl">
            A practical digital platform for connecting people and pharmacies.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400 sm:mt-5 sm:leading-7">
            Explore the live product and see how Medicine Finder brings
            pharmacy discovery, medication requests, communication and
            pharmacy-focused AI together.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2.5 sm:mt-8 sm:gap-3">
            <a
              href="https://apps.apple.com/us/app/medicine-finder/id6771959046"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 sm:px-6 sm:py-3"
            >
              Open on App Store
            </a>

            <a
              href="https://medicine-finder.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-black/[0.04] dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/[0.05] sm:px-6 sm:py-3"
            >
              Visit website
            </a>
          </div>

          <Link
            href="/#products"
            className="mt-5 inline-flex text-sm text-gray-500 underline-offset-4 transition hover:text-blue-500 hover:underline sm:mt-7"
          >
            ← Back to all projects
          </Link>
        </div>
      </section>
    </main>
  );
}