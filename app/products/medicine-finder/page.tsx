import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function MedicineFinderPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-[#05070b] dark:text-white">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#05070b]/80">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.2em] text-gray-900 dark:text-white"
          >
            NABAZ
          </Link>

          <nav className="flex items-center gap-3 sm:gap-6">
            <Link
              href="/"
              className="hidden text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white sm:block"
            >
              All projects
            </Link>

            <a
              href="#overview"
              className="hidden text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white md:block"
            >
              Overview
            </a>

            <a
              href="#technology"
              className="hidden text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white md:block"
            >
              Technology
            </a>

            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-32">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg dark:border-white/10 dark:bg-[#0d1b2d]">
                  <Image
                    src="/images/medicine-finder/micon.jpg"
                    alt="Medicine Finder"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-500">
                    02 · Healthcare Technology
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Digital healthcare platform
                  </p>
                </div>
              </div>

              <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-gray-950 dark:text-white sm:text-6xl lg:text-7xl">
                Medicine Finder
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-400">
                Connecting people with pharmacies when medication availability
                matters.
              </p>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-500 dark:text-gray-500">
                A multilingual healthcare directory and communication platform
                that helps users find participating pharmacies, request
                medication availability, and communicate directly.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "iOS",
                  "Android",
                  "AI",
                  "Pharmacy Network",
                  "Messaging",
                  "Role-based Access",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-xs text-gray-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="https://apps.apple.com/us/app/medicine-finder/id6771959046"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  App Store
                </a>

                <a
                  href="https://apkpure.net/medicine-finder/com.medicinefinder"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-black/[0.04] dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/[0.05]"
                >
                  Android
                </a>

                <a
                  href="https://medicine-finder.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-black/[0.04] dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/[0.05]"
                >
                  Website
                </a>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-8 rounded-full bg-blue-500/[0.08] blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-black/[0.02] p-4 shadow-2xl shadow-black/10 dark:border-white/[0.08] dark:bg-white/[0.02] dark:shadow-black/40">
                <div className="overflow-hidden rounded-[2rem]">
                  <Image
                    src="/images/medicine-finder/user-home.png"
                    alt="Medicine Finder application"
                    width={1200}
                    height={1600}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section
        id="overview"
        className="border-y border-black/10 dark:border-white/[0.06]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-500">
                The product
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                One platform connecting people, pharmacies and healthcare
                businesses.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500 dark:text-gray-500">
              The experience changes according to the user's role, while
              administration controls registrations, subscriptions, content
              and platform access.
            </p>
          </div>

          {/* SCREENSHOT COLLAGE */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-black/[0.02] p-2 dark:border-white/[0.07] dark:bg-white/[0.02]">
              <Image
                src="/images/medicine-finder/user-home.png"
                alt="Medicine Finder user experience"
                width={1200}
                height={1600}
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-black/[0.02] p-2 dark:border-white/[0.07] dark:bg-white/[0.02]">
              <Image
                src="/images/medicine-finder/pharmacy-home.png"
                alt="Medicine Finder pharmacy experience"
                width={1200}
                height={1600}
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-black/[0.02] p-2 dark:border-white/[0.07] dark:bg-white/[0.02]">
              <Image
                src="/images/medicine-finder/drug-company-home.png"
                alt="Medicine Finder drug company experience"
                width={1200}
                height={1600}
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-black/10 p-5 dark:border-white/[0.07]">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-500">
                Users
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Search pharmacies, request availability and communicate.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 p-5 dark:border-white/[0.07]">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-500">
                Pharmacies
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Receive requests, respond, communicate and use pharmacy tools.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 p-5 dark:border-white/[0.07]">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-500">
                Drug companies
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Operate through a dedicated business experience without
                pharmacy discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-black/10 dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-500">
              How it works
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              From a request to a pharmacy conversation.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Request",
                image: "user-request.png",
              },
              {
                number: "02",
                title: "Pharmacy response",
                image: "pharmacy-response.png",
              },
              {
                number: "03",
                title: "Notification",
                image: "notification.png",
              },
              {
                number: "04",
                title: "Conversation",
                image: "chat.png",
              },
            ].map((item) => (
              <div key={item.number}>
                <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-black/[0.02] p-2 dark:border-white/[0.07] dark:bg-white/[0.02]">
                  <Image
                    src={`/images/medicine-finder/${item.image}`}
                    alt={item.title}
                    width={1000}
                    height={1300}
                    className="h-auto w-full rounded-[1.35rem]"
                  />
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <span className="text-xs font-medium tracking-[0.2em] text-blue-500">
                    {item.number}
                  </span>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-blue-500/15 bg-blue-500/[0.04] p-6">
            <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
              While a medication request is active, it is updated and sent to
              participating pharmacies every 10 seconds. The user can stop
              the request at any time.
            </p>
          </div>
        </div>
      </section>

      {/* PHARMACY DISCOVERY */}
      <section className="border-b border-black/10 dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-500">
                Pharmacy discovery
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Users can also find and contact pharmacies directly.
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-500">
                Search nearby participating pharmacies, open a profile and
                start a conversation about medication availability.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  image: "nearby-pharmacies.png",
                  alt: "Nearby pharmacies",
                },
                {
                  image: "pharmacy-profile.png",
                  alt: "Pharmacy profile",
                },
                {
                  image: "pharmacy-contact.png",
                  alt: "Contact pharmacy",
                },
              ].map((item) => (
                <div
                  key={item.image}
                  className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-black/[0.02] p-2 dark:border-white/[0.07] dark:bg-white/[0.02]"
                >
                  <Image
                    src={`/images/medicine-finder/${item.image}`}
                    alt={item.alt}
                    width={900}
                    height={1200}
                    className="h-auto w-full rounded-[1.15rem]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI */}
      <section className="border-b border-black/10 dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-black/[0.02] p-3 shadow-2xl shadow-black/5 dark:border-white/[0.07] dark:bg-white/[0.02] dark:shadow-black/30">
              <Image
                src="/images/medicine-finder/ai-prescription-reader.png"
                alt="AI prescription reader for pharmacists"
                width={1600}
                height={1100}
                className="h-auto w-full rounded-[2rem]"
              />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-500">
                AI capability
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                AI assistance for difficult prescriptions.
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-500">
                The pharmacy experience includes an AI-powered prescription
                reader to assist authorized pharmacists when working with
                difficult-to-read prescription information.
              </p>

              <div className="mt-7 space-y-3">
                <div className="rounded-2xl border border-black/10 p-4 dark:border-white/[0.07]">
                  <p className="text-sm font-semibold">Pharmacy-only</p>
                  <p className="mt-1 text-xs leading-6 text-gray-500">
                    Available within the authorized pharmacy experience.
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 p-4 dark:border-white/[0.07]">
                  <p className="text-sm font-semibold">AI-assisted</p>
                  <p className="mt-1 text-xs leading-6 text-gray-500">
                    Supports pharmacists when prescription information is
                    difficult to read.
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 p-4 dark:border-white/[0.07]">
                  <p className="text-sm font-semibold">Professional verification</p>
                  <p className="mt-1 text-xs leading-6 text-gray-500">
                    AI does not replace professional judgment or clinical
                    responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS FLOW */}
      <section className="border-b border-black/10 dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-500">
                Business workflow
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Controlled registration and activation.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              Pharmacies and drug companies pass through administration review
              before becoming active subscribed entities.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Registration",
                image: "entity-registration.png",
              },
              {
                number: "02",
                title: "Admin review",
                image: "registration-review.png",
              },
              {
                number: "03",
                title: "Approval",
                image: "entity-approval.png",
              },
              {
                number: "04",
                title: "Subscription",
                image: "subscription-payment.png",
              },
            ].map((item) => (
              <div key={item.number}>
                <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-black/[0.02] p-2 dark:border-white/[0.07] dark:bg-white/[0.02]">
                  <Image
                    src={`/images/medicine-finder/${item.image}`}
                    alt={item.title}
                    width={1000}
                    height={800}
                    className="h-auto w-full rounded-[1.35rem]"
                  />
                </div>

                <div className="mt-4">
                  <span className="text-xs font-medium tracking-[0.2em] text-blue-500">
                    {item.number}
                  </span>

                  <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500">
            <span>Registration</span>
            <span>→</span>
            <span>Admin review</span>
            <span>→</span>
            <span>Approval</span>
            <span>→</span>
            <span>Subscription payment</span>
          </div>
        </div>
      </section>

      {/* PHARMACY WORKSPACE */}
      <section className="border-b border-black/10 dark:border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-500">
              Pharmacy workspace
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Tools designed around the pharmacy workflow.
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Medication requests, messaging, calls and additional
              role-specific tools are brought together in the pharmacy
              experience.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              {
                image: "pharmacy-requests.png",
                title: "Requests",
              },
              {
                image: "pharmacy-messaging.png",
                title: "Messaging",
              },
              {
                image: "pharmacy-call.png",
                title: "Calls",
              },
              {
                image: "pharmacy-tools.png",
                title: "More tools",
              },
            ].map((item) => (
              <div key={item.image}>
                <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-black/[0.02] p-2 dark:border-white/[0.07] dark:bg-white/[0.02]">
                  <Image
                    src={`/images/medicine-finder/${item.image}`}
                    alt={`Medicine Finder ${item.title}`}
                    width={1000}
                    height={1200}
                    className="h-auto w-full rounded-[1.35rem]"
                  />
                </div>

                <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="rounded-[2.5rem] border border-black/10 bg-black/[0.02] p-8 dark:border-white/[0.07] dark:bg-white/[0.02] sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-500">
                  Technology
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Built as a connected digital platform.
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-500">
                  The platform combines mobile experiences, role-based access,
                  administration tools, communication, subscriptions and
                  AI-assisted functionality.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Mobile", "iOS & Android"],
                  ["Communication", "Messaging, images & calls"],
                  ["AI", "Prescription reading assistance"],
                  ["Access", "Role-based experiences"],
                  ["Business", "Subscriptions & packages"],
                  ["Administration", "Content & platform management"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-black/10 bg-white p-5 dark:border-white/[0.07] dark:bg-[#090d14]"
                  >
                    <p className="text-sm font-semibold">{title}</p>
                    <p className="mt-2 text-xs leading-6 text-gray-500">
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
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 lg:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-500">
            Medicine Finder
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            A practical digital platform for connecting people and pharmacies.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500">
            Explore the live product and see how Medicine Finder brings
            pharmacy discovery, medication requests, communication and
            pharmacy-focused AI together.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://apps.apple.com/us/app/medicine-finder/id6771959046"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Open on App Store
            </a>

            <a
              href="https://medicine-finder.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-black/[0.04] dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/[0.05]"
            >
              Visit website
            </a>
          </div>
        </div>
      </section>

      {/* LEARNING & QUIZZES */}
<section className="border-b border-black/10 dark:border-white/[0.06]">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-500">
          Learning & quizzes
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Learning content built into the platform.
        </h2>
      </div>

      <p className="max-w-md text-sm leading-7 text-gray-500">
        Courses, books, blogs and quizzes are managed through the
        administration system and made available to users through their
        platform experience.
      </p>
    </div>

    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          image: "courses.png",
          title: "Courses",
        },
        {
          image: "books.png",
          title: "Books",
        },
        {
          image: "blogs.png",
          title: "Blogs",
        },
        {
          image: "quizzes.png",
          title: "Quizzes",
        },
      ].map((item) => (
        <div key={item.image} className="group">
          <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-black/[0.02] p-2 transition duration-500 group-hover:-translate-y-1 group-hover:border-blue-500/20 dark:border-white/[0.07] dark:bg-white/[0.02]">
            <Image
              src={`/images/medicine-finder/${item.image}`}
              alt={`Medicine Finder ${item.title}`}
              width={1000}
              height={1200}
              className="h-auto w-full rounded-[1.35rem]"
            />
          </div>

          <h3 className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">
            {item.title}
          </h3>
        </div>
      ))}
    </div>

    <div className="mt-10 grid gap-4 sm:grid-cols-2">
      <div className="rounded-3xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/[0.07] dark:bg-white/[0.02]">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500">
          Content management
        </p>

        <p className="mt-3 text-sm leading-7 text-gray-500">
          Administration controls the learning content, including courses,
          books, blogs and quiz material.
        </p>
      </div>

      <div className="rounded-3xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/[0.07] dark:bg-white/[0.02]">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500">
          Quiz participation
        </p>

        <p className="mt-3 text-sm leading-7 text-gray-500">
          Quizzes can support individual participation or sessions with up to
          four people, and pharmacies can invite other users to participate.
        </p>
      </div>
    </div>
  </div>
</section>
{/* ADMIN CONTROL PANEL */}
<section className="border-b border-black/10 dark:border-white/[0.06]">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
    <div className="grid items-end gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-500">
          Administration
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          One control center for the entire platform.
        </h2>

        <p className="mt-5 max-w-lg text-sm leading-7 text-gray-500">
          The administration system manages users, registrations, entities,
          subscriptions, learning content, translations, pages and other
          platform operations.
        </p>
      </div>

      <div className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-black/[0.02] p-3 shadow-2xl shadow-black/5 dark:border-white/[0.07] dark:bg-white/[0.02] dark:shadow-black/30">
        <Image
          src="/images/medicine-finder/admin-dashboard.png"
          alt="Medicine Finder administration dashboard"
          width={1800}
          height={1100}
          className="h-auto w-full rounded-[2rem]"
        />
      </div>
    </div>

    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
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
      ].map((item) => (
        <div key={item.image} className="group">
          <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-black/[0.02] p-2 transition duration-500 group-hover:-translate-y-1 group-hover:border-blue-500/20 dark:border-white/[0.07] dark:bg-white/[0.02]">
            <Image
              src={`/images/medicine-finder/${item.image}`}
              alt={`Medicine Finder ${item.title}`}
              width={1200}
              height={900}
              className="h-auto w-full rounded-[1.35rem]"
            />
          </div>

          <h3 className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">
            {item.title}
          </h3>

          <p className="mt-1 text-xs leading-6 text-gray-500">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-8 rounded-3xl border border-blue-500/15 bg-blue-500/[0.04] p-6">
      <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-gray-500">
        <span>Users</span>
        <span>Registrations</span>
        <span>Entities</span>
        <span>Packages</span>
        <span>Courses</span>
        <span>Books</span>
        <span>Blogs</span>
        <span>Posters</span>
        <span>Quizzes</span>
        <span>Translations</span>
        <span>Pages</span>
        <span>AI Assistant</span>
      </div>
    </div>
  </div>
</section>
{/* SECURITY & PRIVACY */}
<section className="border-b border-black/10 dark:border-white/[0.06]">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-500">
          Security & privacy
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Designed around controlled access and responsible data handling.
        </h2>

        <p className="mt-5 text-sm leading-7 text-gray-500">
          Medicine Finder handles different account types and communication
          flows, so access is separated according to the role and permissions
          of each account.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {[
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
            text: "Users and participating pharmacies can communicate through the platform without exposing every platform role to each other.",
          },
          {
            title: "Privacy controls",
            text: "The platform provides account, communication and privacy controls in accordance with its published policies.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/[0.07] dark:bg-white/[0.02]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/[0.06] text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
              >
                <path d="M12 3 5 6v5c0 4.5 2.9 8.5 7 10 4.1-1.5 7-5.5 7-10V6l-7-3Z" />
                <path d="m9.5 12 1.7 1.7 3.5-3.5" />
              </svg>
            </div>

            <h3 className="mt-5 text-sm font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-500">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-10 rounded-3xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/[0.07] dark:bg-white/[0.02] sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            Healthcare platform — not medical advice
          </p>

          <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-500">
            Medicine Finder is a directory and communication platform. It does
            not diagnose, prescribe, dispense or provide clinical treatment
            recommendations.
          </p>
        </div>

        <a
          href="https://medicine-finder.com"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-black/[0.04] dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/[0.05]"
        >
          View platform
        </a>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}