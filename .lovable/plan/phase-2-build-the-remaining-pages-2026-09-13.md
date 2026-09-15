# Phase 2: Build the remaining pages

Extend the approved homepage design to the full site. Same palette, typography, corner marks, background grid and scroll reveals. No em dashes anywhere.

## Pages to build

**Solutions (3)**
- Business Automation (`/business-automation`) — lead solution, most depth
- Healthcare RCM (`/healthcare-revenue-cycle-management`)
- Managed Operations (`/managed-operations`)

**Industries (3)**
- Growing Businesses (`/growing-businesses`)
- Healthcare (`/healthcare`)
- Legal (`/legal`)

**Company (4)**
- How We Work (`/how-we-work`) — the Adroit Method in depth
- About (`/about`) — who we are, how we operate, leadership approach
- Insights (`/insights`) — hub page, ready for articles later
- Contact (`/contact`) — enquiry form plus response expectations

**Legal (2)**
- Privacy Policy (`/privacy-policy`)
- Terms of Use (`/terms-of-use`)

Plus a friendly "page not found" page.

## Content approach

Every page is written fresh, no filler text. Structure per page:

1. Short eyebrow, one clear headline, one paragraph that states the outcome
2. The problem in plain business terms
3. What we actually do, as concrete capability lists
4. How engagement works and what changes in the first 30 to 90 days
5. Three to five FAQs answering the questions a buyer actually types
6. A closing call to action

Positioning stays SMB first. Business automation leads; healthcare appears as one example among several, never the headline of the company.

Answer engine friendliness: each page opens with a direct one or two sentence answer to its core question, uses question-style subheadings, keeps paragraphs short and scannable, and states specifics rather than adjectives.

## Enquiry form

Form submissions show a clear thank you message on the page. Nothing is stored or emailed yet. When you want captured enquiries and notifications, that is a follow up step.

## Search and technical setup

- Unique title, description and social preview text on every page
- Canonical link on every page, self referencing
- Breadcrumb trail on inner pages, matched by structured data
- Organization and website structured data sitewide; service, industry and FAQ data on the relevant pages
- Sitemap listing every page, served automatically
- Crawler file kept open, pointing at the sitemap once the site has its public address
- One main heading per page, ordered subheadings, descriptive image alt text, lazy loaded images
- Internal linking: solutions link to relevant industries and back, every page links to contact

## Technical notes

- Route files under `src/routes/`, one per path, each with its own `head()`
- Reuse `ServicePageTemplate` / `IndustryPageTemplate` in `src/components/site/PageTemplates.tsx`; extend it with corner marks, the micro grid and `data-reveal` so inner pages match the homepage, and fix the existing `eyebrow` optional-type error
- New `CompanyPageTemplate` for How We Work, About and Insights; a narrow prose template for the legal pages
- Page copy lives in `src/content/*.ts` so text edits stay separate from layout
- Sitemap via a `sitemap[.]xml` server route generated from the route list
- `ScrollMotion` mounted once in `__root.tsx` so reveals work on every page
- No new images generated unless a page clearly needs one; reuse existing assets

## Verification

Typecheck and build clean, then walk every page in the preview at desktop and mobile widths, confirming headings, links, form thank you state, reveals and metadata.
