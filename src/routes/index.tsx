import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AssessmentForm } from "@/components/site/AssessmentForm";
import { Faq, type FaqItem } from "@/components/site/Faq";
import { CapabilityList, SectionHeading } from "@/components/site/SectionHeading";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ScrollMotion } from "@/components/site/ScrollMotion";
import { Button } from "@/components/ui/button";
import { INDUSTRIES, SITE } from "@/lib/site";
import reviewImage from "@/assets/operations-review.jpg";
import processImage from "@/assets/process-detail.jpg";
import heroImage from "@/assets/houston-hero-midday.jpg";

const TITLE = "Adroit | Business Automation, Healthcare RCM & Managed Operations";
const DESCRIPTION =
  "Adroit combines intelligent business automation, healthcare revenue-cycle expertise and professionally managed operations to reduce administrative work and improve performance.";

const FAQS: FaqItem[] = [
  {
    question: "What does Adroit actually do?",
    answer:
      "Adroit works in three connected areas: business automation, healthcare revenue cycle management and managed operations. We examine how work moves through your organization, improve the process, automate repetitive steps and provide managed operational teams where human judgment is still required.",
  },
  {
    question: "How is managed operations different from staffing?",
    answer:
      "Staffing provides people. Adroit provides an operation. We own the workflow, delivery, quality, performance reporting and continuous improvement, with clear accountability for outcomes rather than hours.",
  },
  {
    question: "Which organizations do you work with?",
    answer:
      "We work with small and medium-sized businesses across most industries. Whether you are a growing company that has outgrown its processes, a professional practice or a service business with heavy administrative work, we shape the solution around how your business runs.",
  },
  {
    question: "Do you replace our existing systems?",
    answer:
      "Rarely. In most engagements we improve the process first, then connect and extend the systems you already use. Technology is the toolkit; the business outcome is the product.",
  },
  {
    question: "What happens in an Operations Assessment?",
    answer:
      "We review how a specific area of work runs today, identify where friction, rework and delay occur, and return a practical view of what should be improved, what should be automated and what should be operated by a managed team.",
  },
];

const SOLUTION_BLOCKS = [
  {
    number: "01",
    name: "Business Automation",
    headline: ["Automate repetitive work.", "Connect critical systems."],
    copy: "Adroit helps organizations eliminate unnecessary manual work, connect disconnected processes and build workflows that improve speed, consistency and visibility.",
    capabilities: [
      "Business Process Automation",
      "CRM Automation",
      "Workflow Automation",
      "AI-Enabled Workflows",
      "Lead Management and Routing",
      "Appointment Automation",
      "Customer Follow-Up",
      "Customer Onboarding",
      "Data Synchronization",
      "System Integration",
    ],
    cta: { label: "Explore Business Automation", href: "/business-automation" },
  },
  {
    number: "02",
    name: "Healthcare Revenue Cycle Management",
    headline: ["Reduce administrative friction.", "Strengthen revenue performance."],
    copy: "Adroit supports healthcare organizations across critical revenue-cycle and administrative workflows with experienced operational teams, structured processes and technology-enabled delivery.",
    capabilities: [
      "Medical Billing",
      "Medical Coding",
      "Medical Transcription",
      "Claims Processing Support",
      "Payment Posting",
      "Accounts Receivable Follow-Up",
      "Denial Management",
      "Eligibility Verification Support",
      "Revenue Cycle Operations",
      "Revenue Cycle Reporting",
    ],
    cta: { label: "Explore Healthcare RCM", href: "/healthcare-revenue-cycle-management" },
  },
  {
    number: "03",
    name: "Managed Operations",
    headline: ["Specialized teams.", "Managed for performance."],
    copy: "Adroit extends internal capabilities with professionally managed operational teams and clear accountability for delivery, quality and continuous improvement.",
    capabilities: [
      "Customer Operations",
      "Inbound Operations",
      "Outbound Operations",
      "Back-Office Support",
      "Administrative Processing",
      "CRM Administration",
      "Data Operations",
      "Accounting Support",
      "Project Coordination",
      "Operational Reporting",
    ],
    cta: { label: "Explore Managed Operations", href: "/managed-operations" },
  },
];

const METHOD_STEPS = [
  {
    step: "Understand",
    copy: "We map how work actually moves through the organization, not how it is meant to move on paper.",
  },
  {
    step: "Identify friction",
    copy: "We locate the rework, delays, handoffs and manual steps that quietly cost time and revenue.",
  },
  {
    step: "Improve the process",
    copy: "Process comes before technology. A better process is what makes automation worth doing.",
  },
  {
    step: "Automate and connect",
    copy: "We automate repetitive work and connect the systems that should have been talking to each other.",
  },
  {
    step: "Operate",
    copy: "Where work still needs experienced people, we build and manage the operational team around it.",
  },
  {
    step: "Measure and improve",
    copy: "Performance is reported, reviewed and improved on a continuing basis.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Operations first, technology second",
    copy: "We do not automate work simply because automation is possible. We automate where it creates practical business value.",
  },
  {
    title: "One partner across three disciplines",
    copy: "Automation capability, revenue cycle expertise and managed delivery under a single accountable relationship.",
  },
  {
    title: "Managed, not staffed",
    copy: "Adroit owns delivery, workflow, quality, reporting and continuous improvement, not just headcount.",
  },
  {
    title: "Built around your business",
    copy: "Every engagement is shaped around your workflows, priorities and measurable goals, not a one-size-fits-all delivery model.",
  },
];

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE.domain}/#organization`,
      name: SITE.legalName,
      alternateName: "Adroit",
      url: SITE.domain,
      description: DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: "US",
      },
      areaServed: "United States",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.domain}/#website`,
      url: SITE.domain,
      name: "Adroit",
      publisher: { "@id": `${SITE.domain}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(STRUCTURED_DATA),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollMotion />
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="precision-section precision-section-hero relative isolate min-h-[700px] overflow-hidden border-b border-glass-border bg-graphite">
          <img src={heroImage} alt="Bright midday view of downtown Houston under a clear blue sky" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden="true" />
          <div className="container-content grid items-stretch gap-10 py-12 lg:grid-cols-[1.25fr_0.9fr] lg:gap-16 lg:py-16">
            <div data-reveal className="flex flex-col justify-center rounded-xl border border-glass-border bg-glass-surface p-6 shadow-glass backdrop-blur-2xl sm:p-8 lg:p-10">
              <p className="eyebrow text-amber">Operations, Reimagined</p>
              <h1 className="mt-5 font-display text-[2.625rem] font-extrabold leading-[1.02] text-hero-foreground lg:text-[4rem]">
                Build smarter operations.
                <br />
                Run them better.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-hero-muted lg:text-[1.1875rem]">
                Adroit combines intelligent business automation, healthcare revenue-cycle expertise
                and professionally managed operations to help organizations reduce administrative work,
                improve performance and scale efficiently.
              </p>
              <p className="mt-8 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-hero-foreground">
                Business Automation <span className="text-orange">•</span> Healthcare RCM{" "}
                <span className="text-orange">•</span> Managed Operations
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Button asChild variant="outline" className="h-12 rounded-lg border-glass-border bg-glass-field px-6 font-display font-semibold text-hero-foreground backdrop-blur-xl transition-colors hover:border-orange hover:bg-orange hover:text-primary-foreground">
                  <a href="#solutions">Explore Solutions<ArrowRight aria-hidden="true" /></a>
                </Button>
              </div>
            </div>
            <div data-reveal data-reveal-delay="1">
              <AssessmentForm appearance="glass" />
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="precision-section section-y border-b border-border">
          <div className="container-content grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div data-reveal>
              <SectionHeading
                eyebrow="The Adroit Idea"
                title={
                  <>
                    Technology where it helps.
                    <br />
                    People where they matter.
                  </>
                }
              />
            </div>
            <div data-reveal data-reveal-delay="1" className="space-y-6 text-lg leading-relaxed text-neutral-body lg:pt-16">
              <p>Most organizations do not need more software or more people.</p>
              <p className="font-display text-2xl font-bold text-graphite lg:text-[1.75rem]">
                They need better operations.
              </p>
              <p>
                Adroit examines how work moves through an organization, identifies friction, improves
                the process, automates repetitive work and builds managed operational support around
                the work that still requires human expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Three solutions */}
        <section id="solutions" className="precision-section scroll-mt-24 border-b border-border">
          <div className="container-content pt-16 lg:pt-24">
            <div data-reveal>
              <SectionHeading
                eyebrow="Solutions"
                title={
                  <>
                    One partner.
                    <br />
                    Three ways to operate better.
                  </>
                }
              />
            </div>
          </div>
          <div className="container-content pb-16 lg:pb-24">
            {SOLUTION_BLOCKS.map((block) => (
              <article
                key={block.number}
                data-reveal
                className="grid gap-8 border-t border-border py-14 first:mt-14 lg:grid-cols-[auto_1fr_1.15fr] lg:gap-14 lg:py-16"
              >
                <p className="font-display text-[2rem] font-extrabold leading-none text-orange lg:text-[2.5rem]">
                  {block.number}
                </p>
                <div>
                  <h3 className="font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-neutral-mute">
                    {block.name}
                  </h3>
                  <p className="mt-4 font-display text-[1.75rem] font-bold leading-[1.15] text-graphite lg:text-[2.125rem]">
                    {block.headline[0]}
                    <br />
                    {block.headline[1]}
                  </p>
                </div>
                <div className="space-y-8">
                  <p className="text-[1.0625rem] leading-relaxed text-neutral-body">{block.copy}</p>
                  <CapabilityList items={block.capabilities} />
                  <Button asChild variant="outline" className="group h-11 rounded-lg border-graphite bg-background px-5 font-display font-semibold text-graphite transition-all hover:-translate-y-0.5 hover:border-orange hover:bg-orange hover:text-primary-foreground">
                    <a href={block.cta.href}>{block.cta.label}<ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="precision-section section-y border-b border-border bg-surface-soft">
          <div className="container-content">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
              <div data-reveal>
                <SectionHeading
                  eyebrow="Industries"
                  title="Operational depth where it counts."
                  intro={
                    <p>
                      We work where administrative work is heavy, process discipline matters and
                      performance is measurable.
                    </p>
                  }
                />
              </div>
              <img
                src={reviewImage}
                alt="Two colleagues reviewing a printed process overview at a table"
                width={1408}
                height={1008}
                loading="lazy"
                data-reveal
                data-reveal-delay="1"
                className="h-full w-full rounded-xl border border-border object-cover"
              />
            </div>
            <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-3">
              {INDUSTRIES.map((industry, index) => (
                <a
                  key={industry.to}
                  href={industry.to}
                  data-reveal
                  data-reveal-delay={String(index + 1)}
                  className="group bg-background p-8 transition-colors hover:bg-sand lg:p-10"
                >
                  <p className="font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-orange">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 font-display text-xl font-bold lg:text-2xl">
                    {industry.label}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-neutral-body">
                    {INDUSTRY_COPY[industry.label]}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-graphite">
                    View industry
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiation */}
        <section className="precision-section section-y border-b border-border">
          <div className="container-content">
            <div data-reveal>
              <SectionHeading
                eyebrow="Why Adroit"
                title="Better operations are the answer."
                intro={
                  <p>
                    Automation alone is not enough. Neither is adding more people. We bring process,
                    technology and accountable execution together so the whole operation performs better.
                  </p>
                }
              />
            </div>
            <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
              {DIFFERENTIATORS.map((item, index) => (
                <div key={item.title} data-reveal data-reveal-delay={String((index % 2) + 1)} className="bg-background p-8 lg:p-10">
                  <h3 className="font-display text-lg font-bold lg:text-xl">{item.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-neutral-body">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Adroit Method */}
        <section className="precision-section precision-section-dark section-y border-b border-border bg-graphite">
          <div className="container-content">
            <div data-reveal className="max-w-3xl">
              <p className="eyebrow">The Adroit Method</p>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.08] text-[oklch(1_0_0)] lg:text-[3rem]">
                We automate what technology can handle and expertly operate what still needs people.
              </h2>
            </div>
            <ol className="mt-14 grid gap-px border border-[oklch(1_0_0/14%)] bg-[oklch(1_0_0/14%)] md:grid-cols-2 lg:grid-cols-3">
              {METHOD_STEPS.map((item, index) => (
                <li key={item.step} data-reveal data-reveal-delay={String((index % 3) + 1)} className="bg-graphite p-8 lg:p-10">
                  <p className="font-display text-sm font-semibold text-orange">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-lg font-bold text-[oklch(1_0_0)]">
                    {item.step}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-[oklch(0.82_0_0)]">
                    {item.copy}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Faq items={FAQS} eyebrow="Common Questions" />

        {/* Closing CTA */}
        <section className="precision-section border-t border-border bg-sand">
          <div className="container-content grid items-center gap-12 py-16 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:py-24">
            <div data-reveal>
              <p className="eyebrow">Next Step</p>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.08] lg:text-[3rem]">
                Start with an Operations Assessment.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-body">
                A structured review of how a specific area of work runs today, what should be
                improved, what should be automated and what should be operated by a managed team.
              </p>
              <a
                href="#operations-assessment"
                className="mt-9 inline-flex rounded-lg bg-orange px-7 py-4 font-display text-[0.9375rem] font-semibold uppercase tracking-[0.06em] text-primary-foreground transition-colors hover:bg-graphite"
              >
                Book an Operations Assessment
              </a>
            </div>
            <img
              src={processImage}
              alt="Stack of printed operational reports beside a pen on a pale sand surface"
              width={1408}
              height={1008}
              loading="lazy"
              data-reveal
              data-reveal-delay="1"
              className="w-full rounded-xl border border-border object-cover"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

const INDUSTRY_COPY: Record<string, string> = {
  Healthcare:
    "Revenue cycle, documentation and administrative operations for practices, medical groups and healthcare service organizations.",
  "Growing Businesses":
    "For companies that have outgrown the processes and systems that helped them start.",
  Legal: "Client intake, follow-up and administrative operations for law firms and administrators.",
};
