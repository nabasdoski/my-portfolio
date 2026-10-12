/**
 * Single source of truth for your identity and contact details.
 * Fill in the TODO values; empty strings hide the related UI/metadata.
 */
export const SITE = {
  // TODO: put your full name here (e.g. "Nabaz Ahmed")
  name: "Nabaz",
  // TODO: your real job title
  role: "Software Developer",
  description:
    "Software developer building AI-powered products for real-world needs in Iraq, including Akuzzle (digital marketplace) and Medicine Finder (healthcare platform).",
  // Set NEXT_PUBLIC_SITE_URL in .env.local and in your hosting dashboard.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "Nabaz@akuzzle.com", // TODO: consider a personal-domain address
  linkedin: "", // TODO: full profile URL, e.g. https://www.linkedin.com/in/your-handle
  github: "", // TODO: https://github.com/your-handle (optional)
} as {
  name: string;
  role: string;
  description: string;
  url: string;
  email: string;
  linkedin: string;
  github: string;
};
