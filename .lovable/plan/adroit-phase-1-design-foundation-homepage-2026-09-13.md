# ADROIT — Phase 1: Design Foundation + Homepage

Build the brand foundation and a finished homepage for Adroit IT Solutions and Services Inc., following the brief exactly. No other pages get built until you approve the homepage look.

## Brand foundation

- Colors: Graphite #1F1F1F, Bright Orange #FF6A00, Amber #FFB347 (sparing), Pale Sand #F7E8D9, White, plus the neutral greys. Balance held at roughly 70% white/light, 20% graphite, 10% orange.
- Type: Manrope for headings, navigation, buttons and statistics; Inter for body copy and forms. Sizes, eyebrow labels and letter spacing per the brief.
- Layout: 8px spacing scale, 1320px max content width, section spacing and page padding per the brief for desktop, tablet and mobile.
- Borders over shadows: 1px #D8D8D4 lines, 8–12px radii, minimal shadow, restrained motion only.

## Header and navigation

Sticky white header. Your real logo on the left, trimmed cleanly from the brand sheet you sent — the full "adroit solutions & services" lockup in the header, the orange A mark alone for tight screens and the browser icon. No recolouring, redrawing or stretching. Centre links for Solutions, Industries, How We Work, About, Insights, and an orange "Book an Operations Assessment" button on the right. Solutions and Industries open clean dropdowns with their three items each. Full mobile menu.

## Homepage sections

1. Split hero: headline "Build Smarter Operations. Run Them Better.", supporting paragraph, the three-discipline line, "Explore Our Solutions" secondary link, and the Operations Assessment form on the right.
2. Introduction: eyebrow "Operations, Reimagined", headline "Technology where it helps. People where they matter.", typography-led, no cards.
3. Three solutions as numbered editorial sections (01 Healthcare RCM, 02 Business Automation, 03 Managed Operations) with headline, copy, capability lists and a link into each future page.
4. Industries: Healthcare, Growing Businesses, Legal.
5. Differentiation and The Adroit Method (the process steps from the brief).
6. U.S. + global delivery, referencing Houston, Texas.
7. FAQ block, built as a reusable piece.
8. Closing call-to-action band on Pale Sand.
9. Footer: company name, Houston address, navigation columns, legal links, copyright.

## Operations Assessment form

Designed as part of the page, not a pasted-in widget: white/Pale Sand panel, thin border, visible labels above every field, comfortable spacing, orange submit button. Fields: First Name, Last Name, Work Email, Phone, Company, Primary Need (Healthcare RCM / Business Automation / Managed Operations / Other). It validates and shows a confirmation message, but does not send anywhere yet — the panel is built as a single swappable container so your CRM form or API drops straight in later. Reused on every commercial page with page-specific button wording.

## Imagery

Three or four restrained, understated photographs generated to the palette — an architectural Houston-feel exterior, a quiet professional workspace, a documents/process detail. No robots, circuitry, headsets, handshakes or dashboard mockups.

## Reusable pieces prepared now, used later

Breadcrumbs, FAQ, section headings, capability lists, the assessment form, a service-page template and an industry-page template — so the remaining eleven pages can be produced quickly and consistently after approval.

## SEO groundwork

Unique title, description and social tags on the homepage; single H1 with a correct heading order; semantic markup; descriptive alt text; Organization and LocalBusiness structured data for the Houston office; FAQ structured data on the FAQ block; robots file and canonical handling.

## Technical notes

- TanStack Start; tokens defined in `src/styles.css` and consumed as semantic Tailwind classes only.
- Manrope and Inter loaded via a stylesheet link in the root route.
- Chat launcher space reserved in the lower-right; nothing important placed under it.
- Bottom-right area kept clear so the CRM chat widget can be added later without covering controls.

## Not in this phase

The eleven inner pages, insights articles, the chat widget itself, CRM/analytics connections, and sitemap generation — all queued for after homepage approval.
