import { SITE } from "./site";
import type { FaqItem } from "@/components/site/Faq";

type JsonLd = Record<string, unknown>;

export function absoluteUrl(path: string): string {
  return `${SITE.domain}${path}`;
}

/**
 * Builds a complete, self-referencing head() payload for a page.
 */
export function pageHead({
  path,
  title,
  description,
  ogType = "website",
  jsonLd,
}: {
  path: string;
  title: string;
  description: string;
  ogType?: "website" | "article";
  jsonLd?: JsonLd[];
}) {
  const url = absoluteUrl(path);
  const meta = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  const links = [{ rel: "canonical", href: url }];

  if (!jsonLd?.length) {
    return { meta, links };
  }

  return {
    meta,
    links,
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({ "@context": "https://schema.org", "@graph": jsonLd }),
      },
    ],
  };
}

export function breadcrumbLd(items: { label: string; path: string }[]): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}): JsonLd {
  return {
    "@type": "Service",
    name,
    description,
    serviceType: serviceType ?? name,
    url: absoluteUrl(path),
    provider: { "@id": `${SITE.domain}/#organization` },
    areaServed: "United States",
    audience: { "@type": "BusinessAudience", name: "Small and medium-sized businesses" },
  };
}

export function faqLd(items: FaqItem[]): JsonLd {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function webPageLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${SITE.domain}/#website` },
    publisher: { "@id": `${SITE.domain}/#organization` },
  };
}

export function organizationLd(): JsonLd {
  return {
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE.domain}/#organization`,
    name: SITE.legalName,
    alternateName: "Adroit",
    url: SITE.domain,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: "US",
    },
    areaServed: "United States",
  };
}

export function websiteLd(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": `${SITE.domain}/#website`,
    url: SITE.domain,
    name: "Adroit",
    publisher: { "@id": `${SITE.domain}/#organization` },
  };
}
