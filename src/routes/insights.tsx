import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ClosingCta, CompanyPageTemplate } from "@/components/site/PageTemplates";
import { SectionHeading } from "@/components/site/SectionHeading";
import { breadcrumbLd, organizationLd, pageHead, webPageLd, websiteLd } from "@/lib/seo";

const PATH = "/insights";
const TITLE = "Insights on Operations, Automation and Managed Delivery | Adroit";
const DESCRIPTION =
  "Practical writing from Adroit on operations improvement, business automation, revenue cycle performance and managed delivery for small and medium businesses.";

const TOPICS = [
  {
    topic: "Operations improvement",
    copy: "How to find the friction in a workflow, quantify what it costs and decide what is genuinely worth fixing.",
  },
  {
    topic: "Business automation",
    copy: "Where automation pays back quickly, where it does not, and how to avoid automating a process that should be simplified instead.",
  },
  {
    topic: "Revenue cycle performance",
    copy: "The measures that actually move cash position in a practice, and the habits behind consistently clean claims.",
  },
  {
    topic: "Managed delivery",
    copy: "What separates a managed operation from supplied headcount, and how to hold a partner accountable for output.",
  },
  {
    topic: "Scaling without headcount",
    copy: "How growing businesses add capacity through process and tooling before they add administrative hires.",
  },
  {
    topic: "Systems and data",
    copy: "Keeping one reliable record across the tools you already own, and connecting them without a platform migration.",
  },
];

export const Route = createFileRoute("/insights")({
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
          { label: "Insights", path: PATH },
        ]),
      ],
    }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <CompanyPageTemplate
      crumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
      eyebrow="Insights"
      headline="Writing about how work actually gets done."
      intro="Our first articles are in preparation. They will cover the same ground we work on every day: finding friction in a workflow, deciding what to automate, running a measured operation and improving performance after go live. Practical writing based on real engagements, not commentary on trends."
      showCta={false}
    >
      <section className="precision-section section-y border-b border-border">
        <div className="container-content">
          <div data-reveal>
            <SectionHeading
              eyebrow="What we will cover"
              title="Topics we write about"
              intro={
                <p>
                  If one of these is a live question in your business, you do not have to wait for
                  the article. Ask us directly and we will answer it against your situation.
                </p>
              }
            />
          </div>
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((item, index) => (
              <article
                key={item.topic}
                data-reveal
                data-reveal-delay={String((index % 3) + 1)}
                className="bg-background p-8 lg:p-10"
              >
                <p className="font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-orange">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-lg font-bold lg:text-xl">{item.topic}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-neutral-body">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
          <div data-reveal className="mt-12">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 font-display text-[0.9375rem] font-semibold text-graphite transition-colors hover:text-orange"
            >
              Ask us a question directly
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>
      <ClosingCta
        title="Have a question we should write about?"
        body="Tell us the operational problem you are trying to solve. If it is a common one, it will probably become an article. Either way, you get an answer."
        actionLabel="Start the conversation"
      />
    </CompanyPageTemplate>
  );
}
