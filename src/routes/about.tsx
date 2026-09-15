import { createFileRoute } from "@tanstack/react-router";
import { CompanyPageTemplate } from "@/components/site/PageTemplates";
import { ABOUT as PAGE } from "@/content/company";
import { companyPageGraph } from "@/content/schema";
import { pageHead } from "@/lib/seo";
import heroImage from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: PAGE.path,
      title: PAGE.title,
      description: PAGE.description,
      jsonLd: companyPageGraph(PAGE),
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <CompanyPageTemplate
      crumbs={PAGE.crumbs}
      eyebrow={PAGE.eyebrow}
      headline={PAGE.headline}
      intro={PAGE.intro}
      heroTreatment="image"
      heroImage={heroImage}
      heroImagePosition="object-[0%_center] lg:object-center"
      sections={PAGE.sections}
      faqs={PAGE.faqs}
      related={PAGE.related}
    />
  );
}
