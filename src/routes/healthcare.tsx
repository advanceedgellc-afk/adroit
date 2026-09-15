import { createFileRoute } from "@tanstack/react-router";
import { IndustryPageTemplate } from "@/components/site/PageTemplates";
import { HEALTHCARE as PAGE } from "@/content/industries";
import { servicePageGraph } from "@/content/schema";
import { pageHead } from "@/lib/seo";
import heroImage from "@/assets/healthcare-hero.jpg";

export const Route = createFileRoute("/healthcare")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: PAGE.path,
      title: PAGE.title,
      description: PAGE.description,
      jsonLd: servicePageGraph(PAGE),
    }),
  component: HealthcarePage,
});

function HealthcarePage() {
  return (
    <IndustryPageTemplate
      crumbs={PAGE.crumbs}
      eyebrow={PAGE.eyebrow}
      heroTreatment={PAGE.heroTreatment}
      heroImage={heroImage}
      heroImagePosition="object-[76%_center] lg:object-[0%_center]"
      headline={PAGE.headline}
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
