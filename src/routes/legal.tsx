import { createFileRoute } from "@tanstack/react-router";
import { IndustryPageTemplate } from "@/components/site/PageTemplates";
import { LEGAL as PAGE } from "@/content/industries";
import heroImage from "@/assets/legal-hero.jpg";
import { servicePageGraph } from "@/content/schema";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/legal")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: PAGE.path,
      title: PAGE.title,
      description: PAGE.description,
      jsonLd: servicePageGraph(PAGE),
    }),
  component: LegalIndustryPage,
});

function LegalIndustryPage() {
  return (
    <IndustryPageTemplate
      crumbs={PAGE.crumbs}
      eyebrow={PAGE.eyebrow}
      heroTreatment={PAGE.heroTreatment}
      heroImage={heroImage}
      heroImagePosition="object-[0%_center] lg:object-[65%_center]"
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
