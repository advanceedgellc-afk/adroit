import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { INDUSTRIES, SOLUTIONS } from "@/lib/site";

export const Route = createFileRoute("/$")({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      { title: "Page not found | Adroit" },
      {
        name: "description",
        content: "This page is not available. Browse Adroit solutions, industries or get in touch.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  const links = [
    ...SOLUTIONS.map((item) => ({ label: item.label, href: item.to })),
    ...INDUSTRIES.map((item) => ({ label: item.label, href: item.to })),
    { label: "How We Work", href: "/how-we-work" },
    { label: "About Adroit", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="precision-section section-y">
          <div className="container-content max-w-3xl">
            <p className="eyebrow">Page Not Found</p>
            <h1 className="mt-5 font-display text-[2.5rem] font-extrabold leading-[1.06] lg:text-[3.5rem]">
              That page is not here.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-neutral-body">
              The link may be out of date or the address slightly off. Here is where most people are
              heading.
            </p>
            <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="bg-background p-6 font-display font-semibold text-graphite transition-colors hover:bg-sand"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="/"
              className="mt-12 inline-flex rounded-lg bg-orange px-7 py-4 font-display text-[0.9375rem] font-semibold uppercase tracking-[0.06em] text-primary-foreground transition-colors hover:bg-graphite"
            >
              Back to home
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
