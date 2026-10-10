import ProductCard from "@/components/ProductCard";
import ThemeToggle from "@/components/ThemeToggle";
import ContactForm from "@/components/ContactForm";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-[#050b14] dark:text-white">
      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#050b14]/80">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <a href="/" className="group flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20">
              N
            </div>

            <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Nabaz
              <span className="text-blue-500">.</span>
            </span>
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            <a
              href="#products"
              className="text-sm text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Products
            </a>

            <a
              href="#about"
              className="text-sm text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* Contact button + Theme */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-full border border-black/10 bg-black/[0.03] px-5 py-2.5 text-sm font-medium text-gray-800 transition hover:border-blue-500/40 hover:bg-blue-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
            >
              Let's talk
            </a>

            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-20">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[140px]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="max-w-5xl">
            {/* Small label */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 dark:border-white/10 dark:bg-white/[0.03]">
              <span className="h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/60" />

              <span className="text-sm text-gray-600 dark:text-gray-300">
                Software · AI · Digital Products
              </span>
            </div>

            {/* Main heading */}
            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-gray-900 sm:text-6xl lg:text-8xl dark:text-white">
              I build digital
              <span className="block text-gray-500">
                products that
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                solve real problems.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-10 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl dark:text-gray-400">
              I design and develop practical software products combining
              modern engineering, artificial intelligence and secure digital
              experiences.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 font-medium text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Explore my products

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-black/[0.03] px-7 py-3.5 font-medium text-gray-700 transition hover:bg-black/[0.06] dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-200 dark:hover:bg-white/[0.07]"
              >
                About me
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-6 border-t border-black/10 pt-8 dark:border-white/[0.08]">
              <div>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  02+
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Digital products
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  AI
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Built into products
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Iraq
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Primary market
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="border-t border-black/10 bg-gray-50 dark:border-white/[0.06] dark:bg-[#070e18]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500 dark:text-blue-400">
                Selected work
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Products I've built.
              </h2>
            </div>

            <p className="max-w-md text-gray-500 dark:text-gray-500">
              Real products designed around real users, markets and problems.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <ProductCard
              number="01"
              name="Akuzzle"
              category="Digital Marketplace"
              description="A modern marketplace built specifically for Iraq, connecting people and businesses across real estate, vehicles, electronics, jobs, services and more."
              technologies={["React Native", "Node.js", "PostgreSQL", "AI"]}
              href="/products/akuzzle"
              visual="akuzzle"
            />

            <ProductCard
              number="02"
              name="Medicine Finder"
              category="Healthcare Technology"
              description="A multilingual healthcare platform connecting users, pharmacies and healthcare businesses through discovery, messaging and intelligent tools."
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
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
    <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
          About me
        </p>

        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-gray-900 dark:text-white sm:text-5xl">
          I build digital products that solve real problems.
        </h2>
      </div>

      <div>
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
          I am a software developer and technology professional focused on
          building practical digital products, intelligent systems, and
          technology solutions that can be used in the real world.
        </p>

        <p className="mt-6 text-base leading-8 text-gray-500 dark:text-gray-500">
          My work combines software engineering with artificial intelligence,
          cybersecurity, data, and digital transformation. I enjoy taking an
          idea from a real problem to a working product — designing the system,
          building the software, and thinking about how people and businesses
          will actually use it.
        </p>

        <p className="mt-6 text-base leading-8 text-gray-500 dark:text-gray-500">
          I have worked across software development, information systems,
          international projects, and business operations. This combination
          has taught me to look beyond code and understand the wider problem
          a technology solution needs to solve.
        </p>

        <p className="mt-6 text-base leading-8 text-gray-500 dark:text-gray-500">
          Today, I am particularly interested in the intersection of{" "}
          <span className="font-medium text-gray-900 dark:text-white">
            AI, cybersecurity, and digital transformation
          </span>
          — building technology that is useful, secure, and capable of growing
          beyond a single project or market.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Software Engineering",
              text: "Web, mobile and business applications",
            },
            {
              title: "Artificial Intelligence",
              text: "Practical AI features inside real products",
            },
            {
              title: "Cybersecurity",
              text: "Secure systems, access and data protection",
            },
            {
              title: "Digital Transformation",
              text: "Turning real-world processes into digital solutions",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/10 bg-black/[0.02] p-5 dark:border-white/[0.07] dark:bg-white/[0.02]"
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

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 transition hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
          >
            Let&apos;s talk
            <span aria-hidden="true">→</span>
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
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
          Let&apos;s talk
        </p>

        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-gray-900 dark:text-white sm:text-5xl">
          Have an idea, project, or problem worth solving?
        </h2>
      </div>

      <div>
        <p className="max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          I&apos;m interested in building useful digital products, intelligent
          systems, and technology solutions. If you have a project,
          collaboration, or idea you would like to discuss, get in touch.
        </p>
        <ContactForm />

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          <a
            href="mailto:YOUR_EMAIL@example.com"
            className="group rounded-3xl border border-black/10 bg-black/[0.02] p-6 transition hover:-translate-y-1 hover:border-blue-500/30 dark:border-white/[0.07] dark:bg-white/[0.02]"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500">
              Email
            </p>

            <p className="mt-3 text-sm font-medium text-gray-900 dark:text-white">
              Nabaz@akuzzle.com
            </p>

            <span className="mt-5 inline-block text-sm text-gray-500 transition group-hover:text-blue-500">
              Send an email →
            </span>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-black/10 bg-black/[0.02] p-6 transition hover:-translate-y-1 hover:border-blue-500/30 dark:border-white/[0.07] dark:bg-white/[0.02]"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500">
              LinkedIn
            </p>

            <p className="mt-3 text-sm font-medium text-gray-900 dark:text-white">
              Professional profile
            </p>

            <span className="mt-5 inline-block text-sm text-gray-500 transition group-hover:text-blue-500">
              View profile →
            </span>
          </a>
        </div>


        
      </div>
    </div>
  </div>
</section>
    </main>
  );
}