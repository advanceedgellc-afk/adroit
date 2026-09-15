import type { ReactNode } from "react";
import { AssessmentForm } from "@/components/site/AssessmentForm";
import { Breadcrumbs, type Crumb } from "@/components/site/Breadcrumbs";
import { Faq, type FaqItem } from "@/components/site/Faq";
import { HeroSchematic } from "@/components/site/HeroSchematic";
import { ScrollMotion } from "@/components/site/ScrollMotion";
import { CapabilityList, SectionHeading } from "@/components/site/SectionHeading";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export type ContentSection = {
  id?: string;
  eyebrow?: string;
  title: string;
  body: string[];
  capabilities?: readonly string[];
};

export type PageLink = { label: string; href: string };

function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollMotion />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

function ContentSections({ sections }: { sections: ContentSection[] }) {
  return (
    <>
      {sections.map((section, index) => (
        <section
          key={section.title}
          id={section.id}
          className={`precision-section section-y scroll-mt-24 border-b border-border ${
            index % 2 === 1 ? "bg-surface-soft" : ""
          }`}
        >
          <div className="container-content grid gap-10 lg:grid-cols-[0.95fr_1.3fr] lg:gap-16">
            <div data-reveal>
              <SectionHeading eyebrow={section.eyebrow} title={section.title} />
            </div>
            <div data-reveal data-reveal-delay="1" className="space-y-7">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-[1.0625rem] leading-relaxed text-neutral-body">
                  {paragraph}
                </p>
              ))}
              {section.capabilities ? <CapabilityList items={section.capabilities} /> : null}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export function RelatedLinks({
  title = "Continue reading",
  eyebrow = "Related",
  links,
}: {
  title?: string;
  eyebrow?: string;
  links: PageLink[];
}) {
  if (!links.length) return null;
  return (
    <section className="precision-section section-y border-b border-border">
      <div className="container-content">
        <div data-reveal>
          <SectionHeading eyebrow={eyebrow} title={title} />
        </div>
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              data-reveal
              data-reveal-delay={String((index % 3) + 1)}
              className="bg-background p-8 transition-colors hover:bg-sand"
            >
              <span className="font-display text-lg font-bold text-graphite">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClosingCta({
  title = "Start with an Operations Assessment.",
  body = "A structured review of how a specific area of work runs today, what should be improved, what should be automated and what should be operated by a managed team.",
  actionLabel = "Book an Operations Assessment",
}: {
  title?: string;
  body?: string;
  actionLabel?: string;
}) {
  return (
    <section className="precision-section border-t border-border bg-sand">
      <div className="container-content py-16 lg:py-24">
        <div data-reveal className="max-w-3xl">
          <p className="eyebrow">Next Step</p>
          <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.08] lg:text-[3rem]">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-body">{body}</p>
          <a
            href="#operations-assessment"
            className="mt-9 inline-flex rounded-lg bg-orange px-7 py-4 font-display text-[0.9375rem] font-semibold uppercase tracking-[0.06em] text-primary-foreground transition-colors hover:bg-graphite"
          >
            {actionLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

/**
 * Template for solution and industry pages: intro plus assessment form,
 * alternating content sections, FAQs and a closing call to action.
 */
export function ServicePageTemplate({
  crumbs,
  eyebrow,
  headline,
  headlineAccent,
  heroTreatment,
  heroImage,
  heroImagePosition,
  heroContentSide,
  intro,
  answer,
  formSubmitLabel,
  formEyebrow,
  sections,
  faqs,
  related,
  children,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  headline: string;
  headlineAccent?: string | undefined;
  heroTreatment?: "image" | undefined;
  heroImage?: string | undefined;
  heroImagePosition?: string | undefined;
  heroContentSide?: "right" | undefined;
  intro: string;
  answer?: string | undefined;
  formSubmitLabel: string;
  formEyebrow?: string | undefined;
  sections: ContentSection[];
  faqs?: FaqItem[] | undefined;
  related?: PageLink[] | undefined;
  children?: ReactNode;
}) {
  const accentStart = headlineAccent ? headline.indexOf(headlineAccent) : -1;
  const headlineLead = accentStart >= 0 ? headline.slice(0, accentStart) : headline;
  const headlineHighlight = accentStart >= 0 ? (headlineAccent ?? "") : "";
  const headlineTail = accentStart >= 0 ? headline.slice(accentStart + headlineHighlight.length) : "";
  return (
    <PageShell>
      <Breadcrumbs items={crumbs} />
      <section
        className={`precision-section border-b border-border ${
          heroTreatment === "image" ? "hero-image-bg" : "hero-schematic-bg"
        }`}
      >
        {heroTreatment === "image" && heroImage ? (
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            width={1920}
            height={1088}
            className={`absolute inset-0 size-full object-cover ${heroImagePosition ?? "object-center"}`}
          />
        ) : null}
        {heroTreatment === "image" ? <div aria-hidden="true" className="hero-image-wash absolute inset-0" /> : null}
        {heroTreatment === "image" ? <div aria-hidden="true" className="hero-image-soften absolute inset-0" /> : null}
        {(() => {
          const contentRight = heroContentSide === "right";
          return (
            <div
              className={`container-content relative z-10 grid gap-12 py-16 lg:gap-16 lg:py-24 ${
                contentRight ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.35fr_1fr]"
              }`}
            >
              {contentRight ? <div aria-hidden="true" className="hidden lg:block" /> : null}
              <div
                data-reveal
                className={`relative ${contentRight ? "lg:col-start-2" : ""}`}
              >
                <p className="eyebrow">{eyebrow}</p>
                <h1 className={`mt-5 font-display text-[2.625rem] font-extrabold leading-[1.04] ${contentRight ? "lg:text-[3.25rem]" : "lg:text-[4rem]"}`}>
                  {headlineLead}
                  {headlineHighlight ? (
                    <span className="text-gradient-brand">{headlineHighlight}</span>
                  ) : null}
                  {headlineTail}
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-body lg:text-[1.1875rem]">
                  {intro}
                </p>
                {answer ? (
                  <p className="mt-7 max-w-2xl border-l-2 border-orange pl-5 font-display text-[1.0625rem] font-semibold leading-relaxed text-graphite">
                    {answer}
                  </p>
                ) : null}
                {heroTreatment === "image" ? null : <HeroSchematic />}
              </div>
              <div
                data-reveal
                data-reveal-delay="1"
                className={contentRight ? "lg:col-start-2 lg:max-w-md" : ""}
              >
                <AssessmentForm
                  submitLabel={formSubmitLabel}
                  eyebrow={formEyebrow}
                  appearance={heroTreatment === "image" ? "glass-light" : "default"}
                />
              </div>
            </div>
          );
        })()}
      </section>

      {children}

      <ContentSections sections={sections} />

      {faqs?.length ? <Faq items={faqs} eyebrow="Common Questions" /> : null}
      {related?.length ? <RelatedLinks links={related} /> : null}
      <ClosingCta />
    </PageShell>
  );
}

export function IndustryPageTemplate(props: Parameters<typeof ServicePageTemplate>[0]) {
  return <ServicePageTemplate {...props} />;
}

/**
 * Template for company pages: a wide statement hero, content sections and CTA.
 */
export function CompanyPageTemplate({
  crumbs,
  eyebrow,
  headline,
  intro,
  heroTreatment,
  heroImage,
  heroImagePosition,
  sections,
  faqs,
  related,
  children,
  showCta = true,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  headline: string;
  intro: string;
  heroTreatment?: "image" | undefined;
  heroImage?: string | undefined;
  heroImagePosition?: string | undefined;
  sections?: ContentSection[] | undefined;
  faqs?: FaqItem[] | undefined;
  related?: PageLink[] | undefined;
  children?: ReactNode;
  showCta?: boolean | undefined;
}) {
  return (
    <PageShell>
      <Breadcrumbs items={crumbs} />
      <section
        className={`precision-section border-b border-border ${
          heroTreatment === "image" ? "hero-image-bg" : "bg-surface-soft"
        }`}
      >
        {heroTreatment === "image" && heroImage ? (
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            width={1920}
            height={1088}
            className={`absolute inset-0 size-full object-cover ${heroImagePosition ?? "object-center"}`}
          />
        ) : null}
        {heroTreatment === "image" ? <div aria-hidden="true" className="hero-image-wash absolute inset-0" /> : null}
        {heroTreatment === "image" ? <div aria-hidden="true" className="hero-image-soften hero-image-soften-wide absolute inset-0" /> : null}
        <div className="container-content relative z-10 grid gap-10 py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:py-24">
          <div data-reveal>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-5 font-display text-[2.625rem] font-extrabold leading-[1.04] lg:text-[4rem]">
              {headline}
            </h1>
          </div>
          <p
            data-reveal
            data-reveal-delay="1"
            className="text-lg leading-relaxed text-neutral-body lg:pt-16 lg:text-[1.1875rem]"
          >
            {intro}
          </p>
        </div>
      </section>

      {children}

      {sections?.length ? <ContentSections sections={sections} /> : null}
      {faqs?.length ? <Faq items={faqs} eyebrow="Common Questions" /> : null}
      {related?.length ? <RelatedLinks links={related} /> : null}
      {showCta ? <ClosingCta /> : null}
    </PageShell>
  );
}

/**
 * Narrow prose template for policy pages.
 */
export function LegalPageTemplate({
  crumbs,
  title,
  updated,
  intro,
  sections,
}: {
  crumbs: Crumb[];
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <PageShell>
      <Breadcrumbs items={crumbs} />
      <section className="precision-section border-b border-border bg-surface-soft">
        <div className="container-content py-14 lg:py-20">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-5 max-w-3xl font-display text-[2.25rem] font-extrabold leading-[1.06] lg:text-[3.25rem]">
            {title}
          </h1>
          <p className="mt-5 text-[0.9375rem] text-neutral-mute">Last updated {updated}</p>
        </div>
      </section>
      <section className="section-y">
        <div className="container-content max-w-3xl">
          <p className="text-[1.0625rem] leading-relaxed text-neutral-body">{intro}</p>
          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <div key={section.heading} data-reveal>
                <h2 className="font-display text-[1.375rem] font-bold text-graphite lg:text-[1.625rem]">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[1.0625rem] leading-relaxed text-neutral-body"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
