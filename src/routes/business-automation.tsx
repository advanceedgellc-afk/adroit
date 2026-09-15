import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/PageTemplates";
import { servicePageGraph } from "@/content/schema";
import { BUSINESS_AUTOMATION as PAGE } from "@/content/solutions";
import { pageHead } from "@/lib/seo";
import heroImage from "@/assets/business-automation-hero.jpg";

export const Route = createFileRoute("/business-automation")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: PAGE.path,
      title: PAGE.title,
      description: PAGE.description,
      jsonLd: servicePageGraph(PAGE),
    }),
  component: BusinessAutomationPage,
});

function BusinessAutomationPage() {
  return (
    <ServicePageTemplate
      crumbs={PAGE.crumbs}
      eyebrow={PAGE.eyebrow}
      headline={PAGE.headline}
      headlineAccent={PAGE.headlineAccent}
      heroTreatment={PAGE.heroTreatment}
      heroImage={heroImage}
      intro={PAGE.intro}
      answer={PAGE.answer}
      formSubmitLabel={PAGE.formSubmitLabel}
      formEyebrow={PAGE.formEyebrow}
      sections={PAGE.sections}
      faqs={PAGE.faqs}
      related={PAGE.related}
    />
  );
}
