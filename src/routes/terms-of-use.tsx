import { createFileRoute } from "@tanstack/react-router";
import { LegalPageTemplate } from "@/components/site/PageTemplates";
import { TERMS as PAGE } from "@/content/company";
import { breadcrumbLd, organizationLd, pageHead, webPageLd, websiteLd } from "@/lib/seo";

export const Route = createFileRoute("/terms-of-use")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: PAGE.path,
      title: PAGE.title,
      description: PAGE.description,
      jsonLd: [
        organizationLd(),
        websiteLd(),
        webPageLd({ name: PAGE.heading, description: PAGE.description, path: PAGE.path }),
        breadcrumbLd([
          { label: "Home", path: "/" },
          { label: PAGE.heading, path: PAGE.path },
        ]),
      ],
    }),
  component: TermsOfUsePage,
});

function TermsOfUsePage() {
  return (
    <LegalPageTemplate
      crumbs={PAGE.crumbs}
      title={PAGE.heading}
      updated={PAGE.updated}
      intro={PAGE.intro}
      sections={PAGE.sections}
    />
  );
}
