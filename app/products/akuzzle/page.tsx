
"use client";

import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import ProductScreenshots from "@/components/ProductScreenshots";

const technologies = ["React Native", "Expo", "Node.js", "PostgreSQL", "AI"];

const facts = [
  { label: "Product", value: "Mobile Application" },
  { label: "Market", value: "Iraq" },
  { label: "AI", value: "Listing Assistance" },
  { label: "Architecture", value: "Full-stack Platform" },
];

const overviewFacts = [
  { value: "01", label: "Flexible marketplace" },
  { value: "02", label: "AI-assisted listings" },
  { value: "03", label: "Built for Iraq" },
];

const aiSteps = [
  { number: "01", title: "Capture", description: "Take a photo of the item." },
  { number: "02", title: "Analyze", description: "AI analyzes the image and its visible details." },
  { number: "03", title: "Generate", description: "Useful listing information is prepared." },
  { number: "04", title: "Review", description: "The user checks and adjusts the information." },
  { number: "05", title: "Publish", description: "The completed listing can be published." },
];

const growthCapabilities = [
  {
    number: "01",
    title: "Flexible categories",
    description: "The platform can support different categories and expand into new areas as requirements change.",
  },
  {
    number: "02",
    title: "Different listing types",
    description: "The marketplace can accommodate different kinds of products, services and opportunities.",
  },
  {
    number: "03",
    title: "Expandable architecture",
    description: "The system is designed to evolve as new marketplace requirements and features are introduced.",
  },
  {
    number: "04",
    title: "Local focus",
    description: "The experience is designed around users, businesses and digital commerce in Iraq.",
  },
];

const securityPrinciples = [
  {
    number: "01",
    title: "Account security",
    description: "User accounts and authentication are treated as a core part of the marketplace experience.",
  },
  {
    number: "02",
    title: "Trust between users",
    description: "The platform is designed to support more reliable interactions between individuals, businesses and organizations.",
  },
  {
    number: "03",
    title: "Controlled administration",
    description: "Administrative functionality is separated from the public marketplace experience.",
  },
  {
    number: "04",
    title: "Responsible data handling",
    description: "User and marketplace information is treated as an important part of the platform's design and development.",
  },
];

const technologyStack = [
  {
    number: "01",
    technology: "React Native",
    role: "Mobile application",
    description: "Used to build the cross-platform mobile experience.",
  },
  {
    number: "02",
    technology: "Expo",
    role: "Application platform",
    description: "Provides the development foundation for the React Native application.",
  },
  {
    number: "03",
    technology: "Node.js",
    role: "Backend",
    description: "Powers server-side functionality and application services.",
  },
  {
    number: "04",
    technology: "PostgreSQL",
    role: "Database",
    description: "Stores structured application and marketplace data.",
  },
];

const features = [
  {
    number: "01",
    title: "Marketplace listings",
    description: "Create and discover listings for different products, services and opportunities.",
  },
  {
    number: "02",
    title: "AI-assisted creation",
    description: "Use a product photo as the starting point for generating useful advertisement information.",
  },
  {
    number: "03",
    title: "Search & discovery",
    description: "Help users find relevant listings and opportunities within the marketplace.",
  },
  {
    number: "04",
    title: "User accounts",
    description: "Provide users with a personalized experience for interacting with the platform.",
  },
  {
    number: "05",
    title: "Business participation",
    description: "Allow businesses and organizations to participate alongside individual users.",
  },
  {
    number: "06",
    title: "Expandable platform",
    description: "Keep the platform flexible enough to introduce new categories, listing types and use cases.",
  },
];

const sectionClass = "mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28";
const headingClass = "mt-4 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl";
const bodyClass = "text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base sm:leading-8";

function Eyebrow({ children }: { children: React.ReactNode }) {
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
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
          {number}
        </span>
      </div>
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
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-gray-900 dark:bg-[#050b12] dark:text-white">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#050b12]/90">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <a
            href="/"
            onClick={closeMenu}
            className="text-sm font-semibold tracking-[0.18em] text-gray-900 dark:text-white"
          >
            NABAZ
          </a>

          <div className="flex items-center gap-3 sm:gap-5">
            <nav className="hidden items-center gap-5 sm:flex">
              <a href="#overview" className="text-sm text-gray-600 transition hover:text-blue-500 dark:text-gray-400 dark:hover:text-white">
                Overview
              </a>
              <a href="#technology" className="text-sm text-gray-600 transition hover:text-blue-500 dark:text-gray-400 dark:hover:text-white">
                Technology
              </a>
              <a href="/#products" className="text-sm text-gray-600 transition hover:text-blue-500 dark:text-gray-400 dark:hover:text-white">
                All projects
              </a>
            </nav>

            <ThemeToggle />

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-gray-700 sm:hidden dark:border-white/10 dark:text-white"
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-black/10 bg-white px-4 py-3 sm:hidden dark:border-white/[0.08] dark:bg-[#050b12]">
            {[
              { label: "Overview", href: "#overview" },
              { label: "AI listing workflow", href: "#ai-workflow" },
              { label: "Security & trust", href: "#security" },
              { label: "Technology", href: "#technology" },
              { label: "All projects", href: "/#products" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="block rounded-xl px-3 py-3 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/[0.05]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/10 dark:border-white/[0.06]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-16rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl sm:top-[-18rem] sm:h-[40rem] sm:w-[40rem]" />
          <div className="absolute right-[-10rem] top-40 h-[25rem] w-[25rem] rounded-full bg-blue-500/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-24 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] sm:gap-4 sm:text-sm sm:tracking-[0.25em]">
                <span className="text-blue-400">01</span>
                <span className="h-px w-8 bg-black/10 sm:w-10 dark:bg-white/15" />
                <span className="text-gray-600 dark:text-gray-500">Digital Marketplace</span>
              </div>

              <div className="mt-5 flex items-center gap-3 sm:mt-8 sm:gap-5">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03] shadow-xl sm:h-20 sm:w-20 dark:border-white/[0.1] dark:bg-white/[0.05]">
                  <Image src="/images/akuzzle/icon.png" alt="Akuzzle logo" fill className="object-contain" sizes="80px" />
                </div>
                <h1 className="text-4xl font-semibold tracking-[-0.05em] text-gray-900 sm:text-6xl lg:text-8xl dark:text-white">
                  Akuzzle
                </h1>
              </div>

              <p className="mt-5 max-w-2xl text-xl font-medium leading-tight text-gray-700 sm:mt-6 sm:text-3xl dark:text-gray-300">
                A flexible digital marketplace built for Iraq.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:mt-7 sm:text-lg sm:leading-8 dark:text-gray-500">
                A modern marketplace platform connecting people, businesses and communities through a flexible listing experience enhanced with artificial intelligence.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-8">
                {technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-xs font-medium text-gray-600 sm:px-4 sm:py-2 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-gray-400">
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-3">
                <a href="#overview" className="rounded-full bg-gray-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-700 sm:px-7 sm:py-3.5 dark:bg-white dark:text-[#07111f] dark:hover:bg-gray-200">
                  Explore project
                </a>
                <a href="#technology" className="rounded-full border border-black/10 bg-black/[0.03] px-6 py-3 text-center text-sm font-semibold text-gray-900 transition hover:bg-black/[0.06] sm:px-7 sm:py-3.5 dark:border-white/[0.1] dark:bg-white/[0.03] dark:text-white dark:hover:bg-white/[0.06]">
                  View technology
                </a>
              </div>

              <div className="mt-6 sm:mt-8">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-600">Available on</p>
                <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-3">
                  <a href="https://www.akuzzle.com/home" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-blue-500/30 hover:text-blue-600 dark:border-white/[0.1] dark:bg-white/[0.03] dark:text-gray-300 dark:hover:text-blue-400">
                    Web <span>↗</span>
                  </a>
                  <a href="https://apps.apple.com/hn/app/akuzzle/id6763965707?l=en-GB&platform=ipad" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-blue-500/30 hover:text-blue-600 dark:border-white/[0.1] dark:bg-white/[0.03] dark:text-gray-300 dark:hover:text-blue-400">
                    iOS <span>↗</span>
                  </a>
                  <span className="inline-flex cursor-default items-center gap-2 rounded-full border border-black/10 bg-black/[0.02] px-4 py-2.5 text-sm font-medium text-gray-400 dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-gray-600">
                    Android <span className="text-[10px] uppercase tracking-[0.12em]">Soon</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:mr-0">
              <div className="absolute -inset-5 rounded-[3rem] bg-blue-500/10 blur-3xl sm:-inset-10 sm:rounded-[4rem]" />
              <div className="relative rounded-[2rem] border border-black/10 bg-black/[0.03] p-2.5 shadow-2xl shadow-black/10 backdrop-blur sm:rounded-[2.5rem] sm:p-3 dark:border-white/[0.1] dark:bg-white/[0.04] dark:shadow-black/40">
                <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-gray-100 sm:rounded-[2rem] dark:border-white/[0.06] dark:bg-[#07111f]">
                  <div className="relative aspect-[9/16]">
                    <Image src="/images/akuzzle/create-ad.jpeg" alt="Akuzzle marketplace application screen" fill priority className="object-contain" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 420px" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-2 rounded-xl border border-black/10 bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur-xl sm:-bottom-6 sm:-left-10 sm:rounded-2xl sm:px-5 sm:py-4 dark:border-white/[0.1] dark:bg-[#0a1422]/95">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 sm:text-xs dark:text-gray-500">Platform</p>
                <p className="mt-1 text-xs font-medium text-gray-900 sm:text-sm dark:text-white">AI-powered marketplace</p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 border-y border-black/10 sm:mt-20 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 dark:border-white/[0.06]">
            {facts.map((item, index) => (
              <div key={item.label} className={`border-black/10 px-3 py-4 sm:px-6 sm:py-6 dark:border-white/[0.06] ${index < 2 ? "border-b" : ""} ${index % 2 === 0 ? "border-r" : ""} lg:border-b-0 ${index < 3 ? "lg:border-r" : "lg:border-r-0"}`}>
                <p className="text-[10px] uppercase tracking-[0.15em] text-gray-700 sm:text-xs sm:tracking-[0.2em] dark:text-gray-300">{item.label}</p>
                <p className="mt-1.5 text-xs font-medium leading-5 text-gray-700 sm:mt-2 sm:text-sm dark:text-gray-400">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:mt-14 sm:gap-4 sm:text-xs dark:text-gray-600">
            <span className="h-px w-8 bg-black/10 dark:bg-white/10" />
            <span>Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="border-y border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]">
        <div className={sectionClass}>
          <div className="mb-7 sm:mb-12">
            <Eyebrow>Product experience</Eyebrow>
            <h2 className={headingClass}>Designed around the user.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8 dark:text-gray-500">
              A closer look at the Akuzzle mobile experience, from discovering listings to creating and managing advertisements.
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
      <section id="overview" className="scroll-mt-20 border-b border-black/10 dark:border-white/[0.06]">
        <div className={sectionClass}>
          <div className="grid gap-7 sm:gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <Eyebrow>Overview</Eyebrow>
              <p className="mt-2 text-sm leading-6 text-gray-500 sm:mt-5 sm:leading-7 dark:text-gray-600">Product case study</p>
            </div>
            <div>
              <h2 className={headingClass.replace("mt-4", "mt-0")}>
                One platform for buying, selling, discovering and connecting.
              </h2>
              <div className="mt-4 max-w-3xl space-y-4 text-sm leading-7 text-gray-600 sm:mt-8 sm:space-y-6 sm:text-lg sm:leading-8 dark:text-gray-400">
                <p>
                  Akuzzle is a digital marketplace built specifically for the Iraqi market. It brings individuals, businesses and communities together through a single platform where different types of products, services and opportunities can be discovered and shared.
                </p>
                <p>
                  Rather than restricting the platform to a fixed set of categories, Akuzzle is designed to remain flexible as the marketplace grows. New categories, listing types and use cases can be introduced as user and business needs evolve.
                </p>
                <p>
                  Artificial intelligence is also integrated into the experience to help users create advertisements more efficiently, turning a product photo into a starting point for a marketplace listing.
                </p>
              </div>
              <div className="mt-6 grid gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4">
                {overviewFacts.map((item) => (
                  <div key={item.value} className="rounded-2xl border border-black/10 bg-black/[0.02] p-4 sm:p-5 dark:border-white/[0.08] dark:bg-white/[0.03]">
                    <p className="text-sm font-medium text-blue-500 dark:text-blue-400">{item.value}</p>
                    <p className="mt-2 text-sm text-gray-700 sm:mt-3 dark:text-gray-300">{item.label}</p>
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
                <span className="text-sm font-medium text-gray-500 dark:text-gray-600">01</span>
                <span className="h-px w-8 bg-black/10 dark:bg-white/10" />
                <Eyebrow>The challenge</Eyebrow>
              </div>
              <h2 className={headingClass}>A fragmented digital marketplace.</h2>
              <div className={`mt-4 space-y-4 sm:mt-7 sm:space-y-5 ${bodyClass}`}>
                <p>
                  Buying and selling, finding services, discovering opportunities and connecting with businesses can happen across many different platforms and communication channels.
                </p>
                <p>
                  Akuzzle was created to provide a more localized digital marketplace for users in Iraq, bringing these interactions together in one accessible experience.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-blue-500 dark:text-blue-400">02</span>
                <span className="h-px w-8 bg-blue-500/30" />
                <Eyebrow>The solution</Eyebrow>
              </div>
              <h2 className={headingClass}>One flexible platform.</h2>
              <div className={`mt-4 space-y-4 sm:mt-7 sm:space-y-5 ${bodyClass}`}>
                <p>
                  Akuzzle brings different marketplace experiences together while keeping the platform flexible enough to support new categories, listing types and use cases.
                </p>
                <p>
                  The goal is not simply to create another classifieds application, but to build a foundation that can evolve with users, businesses and the wider digital economy in Iraq.
                </p>
              </div>
              <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-5 sm:mt-10 sm:rounded-3xl sm:p-7">
                <Eyebrow>Core idea</Eyebrow>
                <p className="mt-3 text-lg font-medium leading-7 text-gray-900 sm:mt-4 sm:text-xl sm:leading-8 dark:text-white">
                  Build the marketplace around the needs of its users — rather than forcing users into a rigid marketplace structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI workflow */}
      <section id="ai-workflow" className="scroll-mt-20 relative overflow-hidden border-b border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <Eyebrow>Artificial intelligence</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:mt-7 sm:text-5xl lg:text-6xl dark:text-white">
              From a photo
              <span className="block text-gray-500 dark:text-gray-500">to a marketplace listing.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:mt-7 sm:text-lg sm:leading-8 dark:text-gray-400">
              Akuzzle uses artificial intelligence to help users create advertisements faster. A product photo becomes the starting point for generating useful information that can be reviewed and adjusted before publication.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:mt-20 lg:grid-cols-5">
            {aiSteps.map((step) => (
              <div key={step.number} className="rounded-2xl border border-black/10 bg-white p-5 transition hover:border-blue-500/30 sm:rounded-3xl sm:p-7 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:bg-white/[0.05]">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-500 dark:text-blue-400">{step.number}</span>
                  <span className="h-2 w-2 rounded-full bg-blue-400/70" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 sm:mt-8 sm:text-xl dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 sm:mt-3 sm:leading-7 dark:text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.05] p-5 sm:rounded-[2rem] sm:p-10">
              <Eyebrow>Human in the loop</Eyebrow>
              <h3 className="mt-3 text-xl font-semibold text-gray-900 sm:mt-5 sm:text-3xl dark:text-white">
                AI assists. The user stays in control.
              </h3>
              <p className={`mt-3 max-w-2xl sm:mt-5 ${bodyClass}`}>
                The generated information is not treated as the final answer. Users can review and modify the details before publishing their advertisement.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5 sm:rounded-[2rem] sm:p-10 dark:border-white/[0.08] dark:bg-white/[0.03]">
              <Eyebrow>Designed for speed</Eyebrow>
              <p className="mt-3 text-xl font-semibold leading-tight text-gray-900 sm:mt-5 sm:text-2xl dark:text-white">
                Reduce the effort required to create a listing.
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
              <Eyebrow>Built to grow</Eyebrow>
              <h2 className={headingClass}>A marketplace that can grow with its users.</h2>
              <p className={`mt-4 sm:mt-7 ${bodyClass}`}>
                Akuzzle is designed as a flexible marketplace platform rather than a system restricted to a predefined set of categories.
              </p>
              <p className={`mt-3 sm:mt-5 ${bodyClass}`}>
                Its structure allows new types of listings, categories and use cases to be introduced as the platform and its community evolve.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {growthCapabilities.map((item) => (
                <CapabilityCard key={item.number} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security and trust */}
      <section id="security" className="scroll-mt-20 border-b border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]">
        <div className={sectionClass}>
          <div className="grid gap-7 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <Eyebrow>Security & trust</Eyebrow>
              <h2 className={headingClass}>Trust is part of the product.</h2>
              <p className={`mt-4 sm:mt-7 ${bodyClass}`}>
                A marketplace depends on people feeling confident about the platform, their accounts and the information they share.
              </p>
              <p className={`mt-3 sm:mt-5 ${bodyClass}`}>
                Akuzzle is designed with security and responsible handling of user information as important parts of the overall product experience.
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {securityPrinciples.map((item) => (
                <div key={item.number} className="rounded-2xl border border-black/10 bg-white p-4 sm:rounded-3xl sm:p-7 dark:border-white/[0.08] dark:bg-white/[0.03]">
                  <div className="flex gap-4 sm:gap-6">
                    <span className="pt-0.5 text-sm font-medium text-blue-500 dark:text-blue-400">{item.number}</span>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 sm:text-lg dark:text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600 sm:mt-3 sm:leading-7 dark:text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy and legal */}
          <div className="mt-8 rounded-2xl border border-black/10 bg-white p-5 sm:mt-16 sm:rounded-[2rem] sm:p-10 dark:border-white/[0.08] dark:bg-white/[0.03]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between sm:gap-8">
              <div className="max-w-2xl">
                <Eyebrow>Privacy & legal</Eyebrow>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-gray-900 sm:mt-5 sm:text-3xl dark:text-white">
                  Built with trust and transparency in mind.
                </h3>
                <p className={`mt-3 sm:mt-4 ${bodyClass}`}>
                  Akuzzle provides published privacy and service terms explaining how user information is handled, how the platform may be used, and the responsibilities of users and the platform.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <a href="https://www.akuzzle.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 sm:px-6 sm:py-3.5 dark:bg-white dark:text-[#07111f] dark:hover:bg-gray-200">
                  Privacy Policy <span>↗</span>
                </a>
                <a href="https://www.akuzzle.com/terms-of-service" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-black/[0.06] sm:px-6 sm:py-3.5 dark:border-white/[0.1] dark:bg-white/[0.03] dark:text-white dark:hover:bg-white/[0.06]">
                  Terms of Service <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology and architecture */}
      <section id="technology" className="scroll-mt-20 border-b border-black/10 dark:border-white/[0.06]">
        <div className={sectionClass}>
          <div className="grid gap-7 sm:gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <Eyebrow>Technology</Eyebrow>
              <h2 className={headingClass}>A modern foundation for a growing platform.</h2>
              <p className={`mt-4 sm:mt-5 ${bodyClass}`}>
                The technology choices provide a flexible foundation for the product, allowing new features and services to be introduced as the platform evolves.
              </p>
              <p className={`mt-3 sm:mt-5 ${bodyClass}`}>
                The stack supports product development while keeping room for future features and services.
              </p>
            </div>
            <div>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {technologyStack.map((item) => (
                  <div key={item.number} className="rounded-2xl border border-black/10 bg-white p-4 sm:rounded-3xl sm:p-7 dark:border-white/[0.08] dark:bg-[#0a1422]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-medium text-blue-500 dark:text-blue-400">{item.number}</span>
                      <span className="rounded-full border border-black/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-gray-500 sm:px-3 sm:tracking-[0.15em] dark:border-white/[0.08] dark:text-gray-500">{item.role}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900 sm:mt-7 sm:text-xl dark:text-white">{item.technology}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600 sm:mt-3 sm:leading-7 dark:text-gray-500">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Architecture flow */}
              <div className="mt-3 rounded-2xl border border-black/10 bg-black/[0.02] p-4 sm:mt-4 sm:rounded-3xl sm:p-8 dark:border-white/[0.08] dark:bg-white/[0.02]">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-600">Platform flow</p>
                <div className="mt-4 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:items-center sm:gap-3">
                  {["Mobile App", "Backend", "Database"].map((item, index) => (
                    <div key={item} className="flex flex-1 items-center gap-3">
                      <div className="flex-1 rounded-xl border border-black/10 bg-white px-4 py-3 text-center text-sm font-medium text-gray-700 sm:rounded-2xl sm:px-5 sm:py-4 dark:border-white/[0.08] dark:bg-[#0a1422] dark:text-gray-300">
                        {item}
                      </div>
                      {index < 2 && (
                        <span className="hidden text-gray-400 sm:block dark:text-gray-700">→</span>
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
              <Eyebrow>Core capabilities</Eyebrow>
              <h2 className={headingClass}>Built around the marketplace experience.</h2>
              <p className={`mt-4 sm:mt-7 ${bodyClass}`}>
                Akuzzle brings together the essential capabilities needed to create, discover and manage marketplace activity through one connected platform.
              </p>
            </div>
            <div className="grid gap-2.5 sm:gap-3">
              {features.map((feature) => (
                <div key={feature.number} className="grid gap-2 rounded-2xl border border-black/10 bg-white p-4 sm:grid-cols-[44px_1fr] sm:items-center sm:gap-4 sm:p-6 dark:border-white/[0.08] dark:bg-white/[0.03]">
                  <span className="text-sm font-medium text-blue-500 dark:text-blue-400">{feature.number}</span>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 sm:text-lg dark:text-white">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-gray-600 sm:mt-2 sm:leading-7 dark:text-gray-500">{feature.description}</p>
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
            Building a more connected digital marketplace for Iraq.
          </h2>
          <a href="/#products" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500 sm:mt-10 sm:px-7 sm:py-3.5">
            Back to portfolio
          </a>
        </div>
      </section>
    </main>
  );
}