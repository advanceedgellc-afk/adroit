import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import logoAsset from "@/assets/adroit-logo.webp";

import { Button } from "@/components/ui/button";
import { INDUSTRIES, SOLUTIONS } from "@/lib/site";

const NAV_LINKS = [
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

function DropdownNav({
  label,
  items,
}: {
  label: string;
  items: readonly { label: string; to: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
        <Button type="button" variant="ghost" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="h-auto gap-1.5 px-0 py-2 font-display text-[0.9375rem] font-medium text-graphite hover:bg-transparent hover:text-orange">
          {label}<ChevronDown className="size-4 text-neutral-mute" aria-hidden="true" />
        </Button>
      {open ? (
        <div className="absolute left-0 top-full z-50 w-64 border border-border bg-background py-2 shadow-raised">
          {items.map((item) => (
            <a
              key={item.to}
              href={item.to}
              className="block px-4 py-2.5 text-[0.9375rem] text-neutral-body transition-colors hover:bg-orange-tint hover:text-graphite"
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-glass-border bg-header-glass shadow-header backdrop-blur-2xl">
      <div className="container-content flex h-24 items-center justify-between gap-8">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Adroit home">
          <img
            src={logoAsset}
            alt="Adroit Solutions & Services"
            width={1190}
            height={281}
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          <DropdownNav label="Solutions" items={SOLUTIONS} />
          <DropdownNav label="Industries" items={INDUSTRIES} />
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-[0.9375rem] font-medium text-graphite transition-colors hover:text-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden h-12 rounded-lg bg-orange px-6 font-display font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-graphite md:inline-flex">
            <a href="#operations-assessment">
              Let's Talk
            </a>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-11 rounded-lg border-border text-graphite lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-content max-h-[calc(100vh-96px)] space-y-8 overflow-y-auto py-8">
            <div>
              <p className="eyebrow mb-3">Solutions</p>
              <div className="space-y-1">
                {SOLUTIONS.map((item) => (
                  <a
                    key={item.to}
                    href={item.to}
                    className="block py-2 font-display text-lg text-graphite"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow mb-3">Industries</p>
              <div className="space-y-1">
                {INDUSTRIES.map((item) => (
                  <a
                    key={item.to}
                    href={item.to}
                    className="block py-2 font-display text-lg text-graphite"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-1 border-t border-border pt-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 font-display text-lg text-graphite"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <Button asChild className="h-12 w-full bg-orange font-display font-semibold text-primary-foreground hover:bg-graphite">
              <a href="#operations-assessment" onClick={() => setMobileOpen(false)}>Let's Talk</a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
