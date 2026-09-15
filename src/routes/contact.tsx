import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/contact-hero.jpg";
import { AssessmentForm } from "@/components/site/AssessmentForm";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ScrollMotion } from "@/components/site/ScrollMotion";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { breadcrumbLd, organizationLd, pageHead, webPageLd, websiteLd } from "@/lib/seo";
import { SITE, SOLUTIONS } from "@/lib/site";

const PATH = "/contact";
const TITLE = "Contact Adroit | Book an Operations Assessment";
const DESCRIPTION =
  "Contact Adroit to discuss business automation, healthcare revenue cycle management or managed operations, or to book an operations assessment for a specific area of work.";

const EXPECTATIONS = [
  {
    step: "You send a few details",
    copy: "Name, company, how to reach you and the area of work you want to improve. No long form, no qualification questionnaire.",
  },
  {
    step: "Chat or book a meeting right away",
    copy: "No waiting on a reply. Start a live chat with an Adroit team member instantly, or book an online meeting at a time that suits you.",
  },
  {
    step: "A short call",
    copy: "Thirty minutes to understand the workflow, the volume involved and what good would look like.",
  },
  {
    step: "A written next step",
    copy: "Either a scoped operations assessment or an honest recommendation to solve it another way.",
  },
];

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: PATH,
      title: TITLE,
      description: DESCRIPTION,
      jsonLd: [
        organizationLd(),
        websiteLd(),
        webPageLd({ name: TITLE, description: DESCRIPTION, path: PATH }),
        breadcrumbLd([
          { label: "Home", path: "/" },
          { label: "Contact", path: PATH },
        ]),
        {
          "@type": "ContactPage",
          name: TITLE,
          description: DESCRIPTION,
          url: `${SITE.domain}${PATH}`,
        },
      ],
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollMotion />
      <SiteHeader />
      <main className="flex-1">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

        <section className="precision-section relative overflow-hidden border-b border-border">
          <img
            src={heroImage}
            alt=""
            width={1920}
            height={1088}
            className="absolute inset-0 size-full object-cover object-[30%_center] lg:object-center"
          />
          <div aria-hidden="true" className="hero-image-wash absolute inset-0" />
          <div aria-hidden="true" className="hero-image-soften hero-image-soften-wide absolute inset-0" />
          <div className="container-content relative grid gap-12 py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-24">
            <div data-reveal>
              <p className="eyebrow">Contact</p>
              <h1 className="mt-5 font-display text-[2.625rem] font-extrabold leading-[1.04] lg:text-[4rem]">
                Tell us what is slowing the work down.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-body lg:text-[1.1875rem]">
                Whether you are looking at business automation, healthcare revenue cycle support or a
                managed operations team, the conversation starts the same way: what does the work
                look like today, and where does it get stuck.
              </p>
              <p className="mt-7 max-w-2xl border-l-2 border-orange pl-5 font-display text-[1.0625rem] font-semibold leading-relaxed text-graphite">
                Submit the form, chat with a live agent or book an online meeting, and an Adroit
                operations lead responds right away.
              </p>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-neutral-mute">
                    What we help with
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    {SOLUTIONS.map((solution) => (
                      <li key={solution.to}>
                        <a
                          href={solution.to}
                          className="text-[0.9375rem] text-neutral-body transition-colors hover:text-orange"
                        >
                          {solution.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-neutral-mute">
                    Company
                  </h2>
                  <address className="mt-4 space-y-1 text-[0.9375rem] not-italic leading-relaxed text-neutral-body">
                    <p>{SITE.legalName}</p>
                    <p>
                      {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{" "}
                      {SITE.address.postalCode}
                    </p>
                  </address>
                </div>
              </div>
            </div>
            <div data-reveal data-reveal-delay="1">
              <AssessmentForm
                eyebrow="Submit an Enquiry"
                heading="Start the conversation."
                description="Share a few details and an Adroit operations lead will follow up to arrange a short call."
                submitLabel="Submit Enquiry"
              />
            </div>
          </div>
        </section>

        <section className="precision-section section-y">
          <div className="container-content">
            <div data-reveal className="max-w-3xl">
              <p className="eyebrow">What Happens Next</p>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.08] lg:text-[3rem]">
                No sales sequence. A conversation and a clear answer.
              </h2>
            </div>
            <ol className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {EXPECTATIONS.map((item, index) => (
                <li
                  key={item.step}
                  data-reveal
                  data-reveal-delay={String((index % 4) + 1)}
                  className="bg-background p-8 lg:p-10"
                >
                  <p className="font-display text-sm font-semibold text-orange">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-lg font-bold">{item.step}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-neutral-body">
                    {item.copy}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="precision-section border-t border-border bg-surface-soft">
          <div className="container-content grid gap-12 py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:py-24">
            <div data-reveal>
              <p className="eyebrow">Visit Us</p>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.08] lg:text-[3rem]">
                Based in Houston. Working wherever you are.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-body">
                Our team works with clients across the United States and beyond, but our home
                office is in Houston, Texas.
              </p>
              <address className="mt-8 space-y-1 text-[0.9375rem] not-italic leading-relaxed text-neutral-body">
                <p className="font-display font-semibold text-graphite">{SITE.legalName}</p>
                <p>
                  {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{" "}
                  {SITE.address.postalCode}
                </p>
                <p>{SITE.address.country}</p>
              </address>
              <a
                href="https://www.openstreetmap.org/?mlat=29.7904&amp;mlon=-95.3977#map=15/29.7904/-95.3977"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-display text-[0.9375rem] font-semibold text-orange transition-colors hover:text-graphite"
              >
                Open in a larger map
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <div data-reveal data-reveal-delay="1" className="overflow-hidden border border-border shadow-raised">
              <iframe
                title="Map showing the Adroit office location in Houston, Texas"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-95.4277%2C29.7754%2C-95.3677%2C29.8054&amp;layer=mapnik&amp;marker=29.7904%2C-95.3977"
                className="h-[320px] w-full lg:h-full lg:min-h-[420px]"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
