import logoAsset from "@/assets/adroit-logo.webp";
import { INDUSTRIES, SITE, SOLUTIONS } from "@/lib/site";

const COMPANY_LINKS = [
  { label: "How We Work", href: "/how-we-work" },
  { label: "About Adroit", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-graphite text-[oklch(0.85_0_0)]">
      <div className="container-content py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="inline-flex items-center justify-center rounded-lg bg-hero-foreground px-3 py-2">
              <img
                src={logoAsset}
                alt="Adroit Solutions & Services"
                width={1190}
                height={281}
                loading="lazy"
                className="h-9 w-auto"
              />
            </span>
            <p className="mt-3 font-display text-lg font-bold text-[oklch(1_0_0)]">
              {SITE.legalName}
            </p>
            <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed">
              Business automation and managed operations that simplify work, improve performance
              and help organizations scale with confidence.
            </p>
          </div>

          <FooterColumn title="Solutions" items={SOLUTIONS.map((s) => ({ label: s.label, href: s.to }))} />
          <FooterColumn
            title="Industries"
            items={INDUSTRIES.map((s) => ({ label: s.label, href: s.to }))}
          />
          <FooterColumn title="Company" items={COMPANY_LINKS} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[oklch(1_0_0/12%)] pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName} All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="transition-colors hover:text-orange">
              Privacy Policy
            </a>
            <a href="/terms-of-use" className="transition-colors hover:text-orange">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-[oklch(1_0_0)]">
        {title}
      </h2>
      <ul className="mt-5 space-y-3 text-[0.9375rem]">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="transition-colors hover:text-orange">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
