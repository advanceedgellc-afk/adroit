import { createFileRoute } from "@tanstack/react-router";
import { CompanyPageTemplate } from "@/components/site/PageTemplates";
import { HOW_WE_WORK as PAGE } from "@/content/company";
import { companyPageGraph } from "@/content/schema";
import { pageHead } from "@/lib/seo";
import heroImage from "@/assets/how-we-work-hero.jpg";

export const Route = createFileRoute("/how-we-work")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: PAGE.path,
      title: PAGE.title,
      description: PAGE.description,
      jsonLd: companyPageGraph(PAGE),
    }),
  component: HowWeWorkPage,
});

function HowWeWorkPage() {
  return (
    <CompanyPageTemplate
      crumbs={PAGE.crumbs}
      eyebrow={PAGE.eyebrow}
      headline={PAGE.headline}
      intro={PAGE.intro}
      heroTreatment="image"
      heroImage={heroImage}
      heroImagePosition="object-[38%_center] lg:object-[58%_center]"
      sections={PAGE.sections}
      faqs={PAGE.faqs}
      related={PAGE.related}
    />
  );
}
