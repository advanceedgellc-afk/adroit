export const SITE = {
  legalName: "Adroit IT Solutions and Services Inc.",
  brand: "ADROIT",
  domain: "https://runadroit.com",
  address: {
    street: "Adele Street",
    city: "Houston",
    region: "TX",
    postalCode: "77009",
    country: "United States",
  },
} as const;

export const SOLUTIONS = [
  { label: "Business Automation", to: "/business-automation" },
  { label: "Healthcare RCM", to: "/healthcare-revenue-cycle-management" },
  { label: "Managed Operations", to: "/managed-operations" },
] as const;

export const INDUSTRIES = [
  { label: "Growing Businesses", to: "/growing-businesses" },
  { label: "Healthcare", to: "/healthcare" },
  { label: "Legal", to: "/legal" },
] as const;

export const PRIMARY_NEEDS = [
  "Business Automation",
  "Healthcare RCM",
  "Managed Operations",
  "Other",
] as const;
