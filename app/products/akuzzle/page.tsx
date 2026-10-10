import ThemeToggle from "@/components/ThemeToggle";
import ProductScreenshots from "@/components/ProductScreenshots";
import Image from "next/image";
export default function AkuzzlePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-[#050b12] dark:text-white">
   
      {/* Navbar */}
<header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#050b12]/80">
  <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
    <a
      href="/"
     className="text-sm font-semibold tracking-[0.18em] text-gray-900 transition hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
     >
      NABAZ
    </a>

   <div className="flex items-center gap-4">
  <a
    href="#overview"
  className="hidden text-sm text-gray-600 transition hover:text-gray-900 sm:block dark:text-gray-500 dark:hover:text-white"
  >
    Overview
  </a>

  <a
    href="#technology"
    className="hidden text-sm text-gray-600 transition hover:text-gray-900 sm:block dark:text-gray-500 dark:hover:text-white"
  >
    Technology
  </a>

  <a
    href="/#projects"
   className="text-sm text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
  >
    All projects
  </a>
  <ThemeToggle />
</div>
  </div>
</header>

{/* Hero */}

<section className="relative overflow-hidden border-b border-black/10 dark:border-white/[0.06]">
  {/* Background glow */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-[-18rem] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
    <div className="absolute right-[-10rem] top-40 h-[25rem] w-[25rem] rounded-full bg-blue-500/5 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
    <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
      
      {/* Left */}
      <div>
        <div className="flex items-center gap-4 text-sm uppercase tracking-[0.25em]">
          <span className="text-blue-400">01</span>
          <span className="h-px w-10 bg-black/10 dark:bg-white/15" />
          <span className="text-gray-600 dark:text-gray-500">
            Digital Marketplace
          </span>
        </div>

        <div className="mt-8 flex items-center gap-5">
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03] shadow-xl sm:h-20 sm:w-20 dark:border-white/[0.1] dark:bg-white/[0.05]">
            <Image
              src="/images/akuzzle/icon.png"
              alt="Akuzzle logo"
              fill
              className="object-contain"
            />
          </div>

          <h1 className="text-6xl font-semibold tracking-[-0.04em] text-gray-900 sm:text-7xl lg:text-8xl dark:text-white">
            Akuzzle
          </h1>
        </div>

        <p className="mt-6 max-w-2xl text-2xl font-medium leading-tight text-gray-700 dark:text-gray-300 sm:text-3xl">
          A flexible digital marketplace built for Iraq.
        </p>

        <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-500 sm:text-lg">
          A modern marketplace platform connecting people, businesses and
          communities through a flexible listing experience enhanced with
          artificial intelligence.
        </p>

        {/* Technology tags */}
        <div className="mt-9 flex flex-wrap gap-2">
          {[
            "React Native",
            "Expo",
            "Node.js",
            "PostgreSQL",
            "AI",
          ].map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-xs font-medium text-gray-600 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-gray-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#overview"
            className="rounded-full bg-gray-900 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-gray-700 dark:bg-white dark:text-[#07111f] dark:hover:bg-gray-200"
          >
            Explore project
          </a>

          <a
            href="#technology"
            className="rounded-full border border-black/10 bg-black/[0.03] px-7 py-3.5 text-center text-sm font-semibold text-gray-900 transition hover:border-black/20 hover:bg-black/[0.06] dark:border-white/[0.1] dark:bg-white/[0.03] dark:text-white dark:hover:border-white/20 dark:hover:bg-white/[0.06]"
          >
            View technology
          </a>
        </div>

        {/* Platform links */}
        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-600">
            Available on
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://www.akuzzle.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-blue-600 dark:border-white/[0.1] dark:bg-white/[0.03] dark:text-gray-300 dark:hover:border-blue-500/30 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
            >
              Web
              <span>↗</span>
            </a>

            <a
              href="https://apps.apple.com/hn/app/akuzzle/id6763965707?l=en-GB&platform=ipad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-blue-600 dark:border-white/[0.1] dark:bg-white/[0.03] dark:text-gray-300 dark:hover:border-blue-500/30 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
            >
              iOS
              <span>↗</span>
            </a>

            <span className="inline-flex cursor-default items-center gap-2 rounded-full border border-black/10 bg-black/[0.02] px-4 py-2.5 text-sm font-medium text-gray-400 dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-gray-600">
              Android
              <span className="text-[10px] uppercase tracking-[0.12em]">
                Soon
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Right — Product visual */}
      <div className="relative mx-auto w-full max-w-[420px] lg:mr-0">
        <div className="absolute -inset-10 rounded-[4rem] bg-blue-500/10 blur-3xl" />

        <div className="relative rounded-[2.5rem] border border-black/10 bg-black/[0.03] p-3 shadow-2xl shadow-black/10 backdrop-blur dark:border-white/[0.1] dark:bg-white/[0.04] dark:shadow-black/40">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-gray-100 dark:border-white/[0.06] dark:bg-[#07111f]">
            <div className="relative aspect-[9/16]">
              <Image
                src="/images/akuzzle/create-ad.jpeg"
                alt="Akuzzle marketplace home screen"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
          </div>
        </div>

        {/* Floating information card */}
        <div className="absolute -bottom-6 -left-6 rounded-2xl border border-black/10 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl sm:-left-10 dark:border-white/[0.1] dark:bg-[#0a1422]/90">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-600 dark:text-gray-500">
            Platform
          </p>

          <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">
            AI-powered marketplace
          </p>
        </div>
      </div>
    </div>

    {/* Product facts */}
    <div className="mt-24 grid border-y border-black/10 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/[0.06]">
      {[
        {
          label: "Product",
          value: "Mobile Application",
        },
        {
          label: "Market",
          value: "Iraq",
        },
        {
          label: "AI",
          value: "Listing Assistance",
        },
        {
          label: "Architecture",
          value: "Full-stack Platform",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="border-b border-black/10 px-6 py-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0 dark:border-white/[0.06]"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-700 dark:text-gray-300">
            {item.label}
          </p>

          <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-400">
            {item.value}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-14 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-600">
      <span className="h-px w-8 bg-black/10 dark:bg-white/10" />
      <span>Scroll to explore</span>
    </div>
  </div>
</section>

      {/* Product preview */}
      {/* Screenshots */}
{/* Product preview */}
{/* Screenshots */}
<section className="border-y border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
    <div className="mb-12">
      <p className="text-sm uppercase tracking-[0.25em] text-blue-500 dark:text-blue-400">
        Product experience
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
        Designed around the user.
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-500">
        A closer look at the Akuzzle mobile experience, from discovering
        listings to creating and managing advertisements.
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
{/* Overview */}
<section
  id="overview"
  className="border-b border-black/10 dark:border-white/[0.06]"
>
  <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
    <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
      
      {/* Label */}
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-blue-500 dark:text-blue-400">
          Overview
        </p>

        <p className="mt-5 text-sm leading-7 text-gray-500 dark:text-gray-600">
          Product case study
        </p>
      </div>

      {/* Content */}
      <div>
        <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          One platform for buying, selling, discovering and connecting.
        </h2>

        <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
          <p>
            Akuzzle is a digital marketplace built specifically for the Iraqi
            market. It brings individuals, businesses and communities together
            through a single platform where different types of products,
            services and opportunities can be discovered and shared.
          </p>

          <p>
            Rather than restricting the platform to a fixed set of categories,
            Akuzzle is designed to remain flexible as the marketplace grows.
            New categories, listing types and use cases can be introduced as
            user and business needs evolve.
          </p>

          <p>
            Artificial intelligence is also integrated into the experience to
            help users create advertisements more efficiently, turning a
            product photo into a starting point for a marketplace listing.
          </p>
        </div>

        {/* Key facts */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            {
              value: "01",
              label: "Flexible marketplace",
            },
            {
              value: "02",
              label: "AI-assisted listings",
            },
            {
              value: "03",
              label: "Built for Iraq",
            },
          ].map((item) => (
            <div
              key={item.value}
              className="rounded-2xl border border-black/10 bg-black/[0.02] p-5 dark:border-white/[0.08] dark:bg-white/[0.03]"
            >
              <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
                {item.value}
              </p>

              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
   
{/* Problem / Solution */}
<section className="border-b border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]">
  <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
    <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
      {/* Problem */}
      <div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-600">
            01
          </span>

          <span className="h-px w-10 bg-black/10 dark:bg-white/10" />

          <p className="text-sm uppercase tracking-[0.25em] text-gray-600 dark:text-gray-500">
            The challenge
          </p>
        </div>

        <h2 className="mt-7 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          A fragmented digital marketplace.
        </h2>

        <div className="mt-7 space-y-5 leading-8 text-gray-600 dark:text-gray-400">
          <p>
            Buying and selling, finding services, discovering opportunities
            and connecting with businesses can happen across many different
            platforms and communication channels.
          </p>

          <p>
            Akuzzle was created to provide a more localized digital marketplace
            for users in Iraq, bringing these interactions together in one
            accessible experience.
          </p>
        </div>
      </div>

      {/* Solution */}
      <div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
            02
          </span>

          <span className="h-px w-10 bg-blue-500/30" />

          <p className="text-sm uppercase tracking-[0.25em] text-blue-500 dark:text-blue-400">
            The solution
          </p>
        </div>

        <h2 className="mt-7 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          One flexible platform.
        </h2>

        <div className="mt-7 space-y-5 leading-8 text-gray-600 dark:text-gray-400">
          <p>
            Akuzzle brings different marketplace experiences together while
            keeping the platform flexible enough to support new categories,
            listing types and use cases.
          </p>

          <p>
            The goal is not simply to create another classifieds application,
            but to build a foundation that can evolve with users, businesses
            and the wider digital economy in Iraq.
          </p>
        </div>

        {/* Highlight */}
        <div className="mt-10 rounded-3xl border border-blue-500/20 bg-blue-500/[0.05] p-7">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400">
            Core idea
          </p>

          <p className="mt-4 text-xl font-medium leading-8 text-gray-900 dark:text-white">
            Build the marketplace around the needs of its users — rather than
            forcing users into a rigid marketplace structure.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* AI-powered listing creation */}
<section className="relative overflow-hidden border-b border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]">
  {/* Background glow */}
  <div className="pointer-events-none absolute left-1/2 top-0 h-[35rem] w-[35rem] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
    {/* Heading */}
    <div className="max-w-3xl">
      <div className="flex items-center gap-4">
        <p className="text-sm uppercase tracking-[0.25em] text-blue-500 dark:text-blue-400">
          Artificial intelligence
        </p>

        <span className="h-px w-10 bg-blue-500/30" />
      </div>

      <h2 className="mt-7 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
        From a photo
        <span className="block text-gray-500 dark:text-gray-500">
          to a marketplace listing.
        </span>
      </h2>

      <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
        Akuzzle uses artificial intelligence to help users create
        advertisements faster. A product photo becomes the starting point
        for generating useful information that can be reviewed and adjusted
        before publication.
      </p>
    </div>

    {/* AI workflow */}
    <div className="mt-20">
      <div className="grid gap-4 lg:grid-cols-5">
        {[
          {
            number: "01",
            title: "Capture",
            description: "Take a photo of the item.",
          },
          {
            number: "02",
            title: "Analyze",
            description: "AI analyzes the image and its visible details.",
          },
          {
            number: "03",
            title: "Generate",
            description: "Useful listing information is prepared.",
          },
          {
            number: "04",
            title: "Review",
            description: "The user checks and adjusts the information.",
          },
          {
            number: "05",
            title: "Publish",
            description: "The completed listing can be published.",
          },
        ].map((step, index) => (
          <div key={step.number} className="relative">
            {/* Connector */}
            {index < 4 && (
              <div className="absolute left-[calc(100%+0.5rem)] top-10 hidden h-px w-3 bg-black/10 dark:bg-white/10 lg:block" />
            )}

            <div className="h-full rounded-3xl border border-black/10 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-gray-50 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:bg-white/[0.05]">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
                  {step.number}
                </span>

                <div className="h-2 w-2 rounded-full bg-blue-400/70" />
              </div>

              <h3 className="mt-10 text-xl font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-500">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* AI principle */}
    <div className="mt-16 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
      <div className="rounded-[2rem] border border-blue-500/20 bg-blue-500/[0.05] p-8 sm:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400">
          Human in the loop
        </p>

        <h3 className="mt-5 text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
          AI assists. The user stays in control.
        </h3>

        <p className="mt-5 max-w-2xl leading-8 text-gray-600 dark:text-gray-400">
          The generated information is not treated as the final answer.
          Users can review and modify the details before publishing their
          advertisement.
        </p>
      </div>

      <div className="rounded-[2rem] border border-black/10 bg-white p-8 sm:p-10 dark:border-white/[0.08] dark:bg-white/[0.03]">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-600 dark:text-gray-500">
          Designed for speed
        </p>

        <p className="mt-5 text-2xl font-semibold leading-tight text-gray-900 dark:text-white">
          Reduce the effort required to create a listing.
        </p>
      </div>
    </div>
  </div>
</section>


{/* Built for scale */}
<section className="border-b border-black/10 dark:border-white/[0.06]">
  <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
      {/* Introduction */}
      <div>
        <div className="flex items-center gap-4">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-500 dark:text-blue-400">
            Built to grow
          </p>

          <span className="h-px w-10 bg-blue-500/30" />
        </div>

        <h2 className="mt-7 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          A marketplace that can grow with its users.
        </h2>

        <p className="mt-7 leading-8 text-gray-600 dark:text-gray-400">
          Akuzzle is designed as a flexible marketplace platform rather than
          a system restricted to a predefined set of categories.
        </p>

        <p className="mt-5 leading-8 text-gray-500 dark:text-gray-500">
          Its structure allows new types of listings, categories and use cases
          to be introduced as the platform and its community evolve.
        </p>
      </div>

      {/* Capabilities */}
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          {
            number: "01",
            title: "Flexible categories",
            description:
              "The platform can support different categories and expand into new areas as requirements change.",
          },
          {
            number: "02",
            title: "Different listing types",
            description:
              "The marketplace can accommodate different kinds of products, services and opportunities.",
          },
          {
            number: "03",
            title: "Expandable architecture",
            description:
              "The system is designed to evolve as new marketplace requirements and features are introduced.",
          },
          {
            number: "04",
            title: "Local focus",
            description:
              "The experience is designed around users, businesses and digital commerce in Iraq.",
          },
        ].map((item) => (
          <div
            key={item.number}
            className="group rounded-3xl border border-black/10 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 dark:border-white/[0.08] dark:bg-[#0a1422]"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
                {item.number}
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-black/15 transition group-hover:bg-blue-400 dark:bg-white/20" />
            </div>

            <h3 className="mt-10 text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Security & Trust */}
<section className="border-b border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]">
  <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
      {/* Introduction */}
      <div>
        <div className="flex items-center gap-4">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-500 dark:text-blue-400">
            Security & trust
          </p>

          <span className="h-px w-10 bg-blue-500/30" />
        </div>

        <h2 className="mt-7 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Trust is part of the product.
        </h2>

        <p className="mt-7 leading-8 text-gray-600 dark:text-gray-400">
          A marketplace depends on people feeling confident about the
          platform, their accounts and the information they share.
        </p>

        <p className="mt-5 leading-8 text-gray-500 dark:text-gray-500">
          Akuzzle is designed with security and responsible handling of user
          information as important parts of the overall product experience.
        </p>
      </div>

      {/* Security principles */}
      <div className="space-y-4">
        {[
          {
            number: "01",
            title: "Account security",
            description:
              "User accounts and authentication are treated as a core part of the marketplace experience.",
          },
          {
            number: "02",
            title: "Trust between users",
            description:
              "The platform is designed to support more reliable interactions between individuals, businesses and organizations.",
          },
          {
            number: "03",
            title: "Controlled administration",
            description:
              "Administrative functionality is separated from the public marketplace experience.",
          },
          {
            number: "04",
            title: "Responsible data handling",
            description:
              "User and marketplace information is treated as an important part of the platform's design and development.",
          },
        ].map((item) => (
          <div
            key={item.number}
            className="group rounded-3xl border border-black/10 bg-white p-7 transition-all duration-500 hover:border-blue-500/30 hover:bg-gray-100 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:bg-white/[0.05]"
          >
            <div className="flex gap-6">
              <span className="pt-1 text-sm font-medium text-blue-500 dark:text-blue-400">
                {item.number}
              </span>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Privacy & Legal */}
   {/* Privacy & Legal */}
<div className="mt-16 rounded-[2rem] border border-black/10 bg-white p-8 transition-all duration-500 hover:border-blue-500/30 dark:border-white/[0.08] dark:bg-white/[0.03] sm:p-10">
  <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
    <div className="max-w-2xl">
      <div className="flex items-center gap-4">
        <p className="text-sm uppercase tracking-[0.25em] text-blue-500 dark:text-blue-400">
          Privacy & legal
        </p>

        <span className="h-px w-10 bg-blue-500/30" />
      </div>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
        Built with trust and transparency in mind.
      </h3>

      <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
        Akuzzle provides published privacy and service terms explaining how
        user information is handled, how the platform may be used, and the
        responsibilities of users and the platform.
      </p>
    </div>

    <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
      <a
        href="https://www.akuzzle.com/privacy-policy"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-700 dark:bg-white dark:text-[#07111f] dark:hover:bg-gray-200"
      >
        Privacy Policy
        <span>↗</span>
      </a>

      <a
        href="https://www.akuzzle.com/terms-of-service"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-6 py-3.5 text-sm font-semibold text-gray-900 transition hover:border-black/20 hover:bg-black/[0.06] dark:border-white/[0.1] dark:bg-white/[0.03] dark:text-white dark:hover:border-white/20 dark:hover:bg-white/[0.06]"
      >
        Terms of Service
        <span>↗</span>
      </a>
    </div>
  </div>
</div>
  </div>
</section>

{/* Technology & Architecture */}
<section
  id="technology"
  className="border-b border-black/10 dark:border-white/[0.06]"
>
  <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
    <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
      {/* Introduction */}
      <div>
        <div className="flex items-center gap-4">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-500 dark:text-blue-400">
            Technology
          </p>

          <span className="h-px w-10 bg-blue-500/30" />
        </div>

        <h2 className="mt-7 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          A modern foundation for a growing platform.
        </h2>

        <p className="mt-5 leading-8 text-gray-600 dark:text-gray-500">
          The technology choices provide a flexible foundation for the product,
          allowing new features and services to be introduced as the platform evolves.
        </p>

        <p className="mt-5 leading-8 text-gray-500 dark:text-gray-500">
          The technology choices provide a foundation for developing the
          product quickly while keeping room for future features and services.
        </p>
      </div>

      {/* Technology stack */}
      <div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              number: "01",
              technology: "React Native",
              role: "Mobile application",
              description:
                "Used to build the cross-platform mobile experience.",
            },
            {
              number: "02",
              technology: "Expo",
              role: "Application platform",
              description:
                "Provides the development foundation for the React Native application.",
            },
            {
              number: "03",
              technology: "Node.js",
              role: "Backend",
              description:
                "Powers server-side functionality and application services.",
            },
            {
              number: "04",
              technology: "PostgreSQL",
              role: "Database",
              description:
                "Stores structured application and marketplace data.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="group rounded-3xl border border-black/10 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 dark:border-white/[0.08] dark:bg-[#0a1422]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
                  {item.number}
                </span>

                <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-gray-500 dark:border-white/[0.08] dark:text-gray-600">
                  {item.role}
                </span>
              </div>

              <h3 className="mt-10 text-xl font-semibold text-gray-900 dark:text-white">
                {item.technology}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Architecture flow */}
        <div className="mt-4 rounded-3xl border border-black/10 bg-black/[0.02] p-7 sm:p-8 dark:border-white/[0.08] dark:bg-white/[0.02]">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-600">
            Platform flow
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            {["Mobile App", "Backend", "Database"].map((item, index) => (
              <div
                key={item}
                className="flex flex-1 items-center gap-3"
              >
                <div className="flex-1 rounded-2xl border border-black/10 bg-white px-5 py-4 text-center text-sm font-medium text-gray-700 dark:border-white/[0.08] dark:bg-[#0a1422] dark:text-gray-300">
                  {item}
                </div>

                {index < 2 && (
                  <span className="hidden text-gray-400 dark:text-gray-700 sm:block">
                    →
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

{/* Features */}
{/* Core Capabilities */}
<section className="border-b border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]">
  <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
    <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
      {/* Introduction */}
      <div>
        <div className="flex items-center gap-4">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-500 dark:text-blue-400">
            Core capabilities
          </p>

          <span className="h-px w-10 bg-blue-500/30" />
        </div>

        <h2 className="mt-7 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Built around the marketplace experience.
        </h2>

        <p className="mt-7 leading-8 text-gray-600 dark:text-gray-400">
          Akuzzle brings together the essential capabilities needed to create,
          discover and manage marketplace activity through one connected
          platform.
        </p>
      </div>

      {/* Capabilities */}
      <div className="grid gap-3">
        {[
          {
            number: "01",
            title: "Marketplace listings",
            description:
              "Create and discover listings for different products, services and opportunities.",
          },
          {
            number: "02",
            title: "AI-assisted creation",
            description:
              "Use a product photo as the starting point for generating useful advertisement information.",
          },
          {
            number: "03",
            title: "Search & discovery",
            description:
              "Help users find relevant listings and opportunities within the marketplace.",
          },
          {
            number: "04",
            title: "User accounts",
            description:
              "Provide users with a personalized experience for interacting with the platform.",
          },
          {
            number: "05",
            title: "Business participation",
            description:
              "Allow businesses and organizations to participate alongside individual users.",
          },
          {
            number: "06",
            title: "Expandable platform",
            description:
              "Keep the platform flexible enough to introduce new categories, listing types and use cases.",
          },
        ].map((feature) => (
          <div
            key={feature.number}
            className="group grid gap-5 rounded-3xl border border-black/10 bg-white p-6 transition-all duration-500 hover:border-blue-500/30 hover:bg-gray-100 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:bg-white/[0.05] sm:grid-cols-[60px_1fr] sm:items-center"
          >
            <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
              {feature.number}
            </span>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
{/* CTA */}
<section className="border-t border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]">
  <div className="mx-auto max-w-7xl px-6 py-28 text-center lg:px-8">
    <p className="text-sm uppercase tracking-[0.25em] text-blue-500 dark:text-blue-400">
      Akuzzle
    </p>

    <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
      Building a more connected digital marketplace for Iraq.
    </h2>

    <a
      href="/#products"
      className="mt-10 inline-flex rounded-full bg-blue-600 px-7 py-3.5 font-medium text-white transition hover:bg-blue-500"
    >
      Back to portfolio
    </a>
  </div>
</section>
    </main>
  );
}