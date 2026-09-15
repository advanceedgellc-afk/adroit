import {
  breadcrumbLd,
  faqLd,
  organizationLd,
  serviceLd,
  webPageLd,
  websiteLd,
} from "@/lib/seo";
import type { CompanyPage, ServicePage } from "./types";

function crumbTrail(page: ServicePage | CompanyPage) {
  return page.crumbs.map((crumb, index) => ({
    label: crumb.label,
    path: index === page.crumbs.length - 1 ? page.path : (crumb.href ?? page.path),
  }));
}

export function servicePageGraph(page: ServicePage) {
  return [
    organizationLd(),
    websiteLd(),
    webPageLd({ name: page.title, description: page.description, path: page.path }),
    breadcrumbLd(crumbTrail(page)),
    serviceLd({
      name: page.schemaName,
      description: page.description,
      path: page.path,
    }),
    faqLd(page.faqs),
  ];
}

export function companyPageGraph(page: CompanyPage) {
  const graph = [
    organizationLd(),
    websiteLd(),
    webPageLd({ name: page.title, description: page.description, path: page.path }),
    breadcrumbLd(crumbTrail(page)),
  ];
  if (page.faqs?.length) graph.push(faqLd(page.faqs));
  return graph;
}
