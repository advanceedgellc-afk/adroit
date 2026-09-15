# Small Business Verticals on the Growing Businesses Page

## Goal

Turn `/growing-businesses` into the page that shows the full range of small businesses Adroit works with. A new section lists ~15 US small-business verticals as cards, each with a short blurb on how Adroit helps that business get organized, build a digital presence and grow. Existing page copy stays as is.

## Content

New section on `/growing-businesses`, placed after the hero (passed as `children` to `IndustryPageTemplate`, so it sits above the existing content sections):

- Eyebrow: "Who We Serve"
- Title: e.g. "From contractors to clinics, we organize, digitize and grow."
- Short intro paragraph covering the three promises: organized operations, a digital presence that gets found, and support to grow.
- Grid of vertical cards (same visual pattern as the homepage industries grid: `gap-px` border grid, 1-3 columns responsive, hover sand background, number + name + blurb).

Verticals (name + one or two line blurb each):

1. General Contractors — scheduling, estimating paperwork, subcontractor coordination and a web presence that wins bids.
2. HVAC — booked calendars, service agreements, follow-up and a site that turns local searches into calls.
3. Law Firms — intake answered fast, matters administered, billing kept current.
4. Moving Companies — quote requests captured, crews scheduled, reviews and referrals worked.
5. Restaurants — reservations, online ordering, staff admin and a presence that fills tables.
6. Dental Offices — scheduling, recalls, insurance follow-up and patient communications.
7. Chiropractors — appointment automation, recalls, billing support and patient follow-up.
8. Plumbers — dispatch, quoting, invoicing and local search visibility.
9. Electricians — estimates, job scheduling, invoicing and a professional web presence.
10. Auto Repair — appointment booking, estimates, parts admin and follow-up.
11. Salons and Spas — online booking, reminders, rebooking and client records.
12. Gyms and Fitness Studios — membership admin, billing, trial follow-up and retention.
13. Real Estate Agencies — lead capture and routing, transaction admin and client updates.
14. Cleaning Services — quoting, scheduling, invoicing and recurring-service management.
15. Veterinary Clinics — appointments, reminders, records admin and client communications.
16. Accounting and Bookkeeping Firms — client onboarding, document collection and deadline tracking.

Closing line under the grid: if your business is not listed, the same approach applies — tell us how work moves through your business and we will shape the solution around it.

## Files

- `src/content/industries.ts`: export `SMALL_BUSINESS_VERTICALS` (name + blurb pairs) and the section copy strings.
- `src/routes/growing-businesses.tsx`: add a `VerticalsSection` component rendered as `children` to `IndustryPageTemplate`, using the same grid/card classes as the homepage industries grid; no new route files.

## Conventions

- Semantic tokens only, Manrope display / Inter body, no em dashes, no lorem ipsum.
- Corner marks / micro rules consistent with existing sections; `data-reveal` reveals on the section and staggered card delays.

## Verification

- Check build log for a clean build.
- Playwright script in `/tmp/browser/growing-verticals/`: load `/growing-businesses` at 1280x1800, screenshot the new section, confirm all 16 cards render and the page scrolls correctly; re-check at mobile width (390x844).
