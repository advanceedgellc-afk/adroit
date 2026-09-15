import type { Crumb } from "@/components/site/Breadcrumbs";
import type { FaqItem } from "@/components/site/Faq";
import type { ContentSection, PageLink } from "@/components/site/PageTemplates";

export type ServicePage = {
  path: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  eyebrow: string;
  headline: string;
  headlineAccent?: string;
  heroTreatment?: "image";
  intro: string;
  answer: string;
  formSubmitLabel: string;
  formEyebrow: string;
  sections: ContentSection[];
  faqs: FaqItem[];
  related: PageLink[];
  schemaName: string;
};

export type CompanyPage = {
  path: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  eyebrow: string;
  headline: string;
  intro: string;
  sections: ContentSection[];
  faqs?: FaqItem[];
  related?: PageLink[];
};

export type LegalPage = {
  path: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  heading: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};
