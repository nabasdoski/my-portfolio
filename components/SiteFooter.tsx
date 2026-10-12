import { SITE } from "@/lib/site";

type FooterLink = { label: string; href: string; external: boolean };

export default function SiteFooter() {
  const links: FooterLink[] = [];

  if (SITE.linkedin) {
    links.push({ label: "LinkedIn", href: SITE.linkedin, external: true });
  }

  if (SITE.github) {
    links.push({ label: "GitHub", href: SITE.github, external: true });
  }

  if (SITE.email) {
    links.push({
      label: SITE.email,
      href: `mailto:${SITE.email}`,
      external: false,
    });
  }

  return (
    <footer className="border-t border-black/10 bg-white dark:border-white/[0.06] dark:bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-gray-500 dark:text-gray-400 sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {SITE.since} {SITE.name}
        </p>

        {links.length > 0 && (
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="transition hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <bdi>{link.label}</bdi>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
