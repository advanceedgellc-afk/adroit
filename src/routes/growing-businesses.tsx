import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase,
  Building2,
  Calculator,
  Car,
  Dog,
  Dumbbell,
  HardHat,
  Home,
  PawPrint,
  PersonStanding,
  RotateCw,
  Scale,
  Scissors,
  Sparkles,
  Stethoscope,
  Thermometer,
  TreePine,
  Truck,
  UtensilsCrossed,
  WashingMachine,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { IndustryPageTemplate } from "@/components/site/PageTemplates";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  GROWING_BUSINESSES as PAGE,
  SMALL_BUSINESS_VERTICALS,
  type SmallBusinessVertical,
  VERTICALS_SECTION,
} from "@/content/industries";
import { servicePageGraph } from "@/content/schema";
import { pageHead } from "@/lib/seo";
import heroImage from "@/assets/growing-businesses-hero.jpg";

export const Route = createFileRoute("/growing-businesses")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: PAGE.path,
      title: PAGE.title,
      description: PAGE.description,
      jsonLd: servicePageGraph(PAGE),
    }),
  component: GrowingBusinessesPage,
});

const VERTICAL_ICONS: Record<string, LucideIcon> = {
  "General Contractors": HardHat,
  HVAC: Thermometer,
  "Law Firms": Scale,
  "Moving Companies": Truck,
  Restaurants: UtensilsCrossed,
  "Dental Offices": Stethoscope,
  Chiropractors: PersonStanding,
  Plumbers: Wrench,
  Electricians: Zap,
  "Roofing Companies": Home,
  "Landscaping and Lawn Care": TreePine,
  "Auto Repair": Car,
  "Salons and Spas": Scissors,
  Laundromats: WashingMachine,
  "Gyms and Fitness Studios": Dumbbell,
  "Real Estate Agencies": Building2,
  "Cleaning Services": Sparkles,
  "Veterinary Clinics": PawPrint,
  "Pet Stores": Dog,
  "Accounting and Bookkeeping Firms": Calculator,
};

function FlipCard({
  vertical,
  index,
}: {
  vertical: SmallBusinessVertical;
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const Icon = VERTICAL_ICONS[vertical.name] ?? Briefcase;
  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      data-reveal
      data-reveal-delay={String((index % 4) + 1)}
      className="group h-64 cursor-pointer [perspective:1200px] [outline:1px_solid_rgba(255,255,255,0.9)] [outline-offset:-0.5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
      tabIndex={0}
      role="button"
      aria-label={`${vertical.name}: ${vertical.blurb}`}
      aria-pressed={flipped}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0 flex flex-col p-7 [backface-visibility:hidden] lg:p-8">
          <span className="font-display text-[0.8125rem] font-semibold tracking-[0.12em] text-orange">
            {number}
          </span>
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <Icon className="h-16 w-16 text-orange" strokeWidth={1.25} aria-hidden />
            <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-graphite">
              {vertical.name}
            </h3>
          </div>
          <span className="inline-flex items-center justify-center gap-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-neutral-body">
            <RotateCw className="h-3 w-3" aria-hidden /> How we help
          </span>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center bg-graphite p-7 [backface-visibility:hidden] [transform:rotateY(180deg)] lg:p-8">
          <span className="font-display text-[0.8125rem] font-semibold tracking-[0.12em] text-orange">
            {number}
          </span>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-background/90">
            {vertical.blurb}
          </p>
        </div>
      </div>
    </div>
  );
}

function VerticalsSection() {
  return (
    <section className="precision-section section-y border-b border-border bg-surface-soft">
      <div className="container-content">
        <div data-reveal className="max-w-3xl">
          <SectionHeading
            eyebrow={VERTICALS_SECTION.eyebrow}
            title={VERTICALS_SECTION.title}
            intro={<p>{VERTICALS_SECTION.intro}</p>}
          />
        </div>
        <div
          className="mt-14 border border-border"
          style={{
            background:
              "radial-gradient(60% 80% at 12% 18%, rgba(249,115,22,0.16), transparent 62%)," +
              "radial-gradient(55% 75% at 68% 28%, rgba(245,158,11,0.22), transparent 65%)," +
              "radial-gradient(70% 90% at 38% 82%, rgba(231,160,94,0.18), transparent 60%)," +
              "radial-gradient(45% 60% at 92% 75%, rgba(249,115,22,0.12), transparent 70%)," +
              "repeating-linear-gradient(112deg, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0) 34px, rgba(255,255,255,0.25) 78px)," +
              "linear-gradient(118deg, #fdf3e3 0%, #f9e5c8 38%, #f3ddbd 68%, #fbeed7 100%)",
          }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {SMALL_BUSINESS_VERTICALS.map((vertical, index) => (
              <FlipCard key={vertical.name} vertical={vertical} index={index} />
            ))}
          </div>
        </div>
        <p
          data-reveal
          className="mt-10 max-w-2xl text-[1.0625rem] leading-relaxed text-neutral-body"
        >
          {VERTICALS_SECTION.closing}
        </p>
      </div>
    </section>
  );
}

function GrowingBusinessesPage() {
  return (
    <IndustryPageTemplate
      crumbs={PAGE.crumbs}
      eyebrow={PAGE.eyebrow}
      headline={PAGE.headline}
      heroTreatment={PAGE.heroTreatment}
      heroImage={heroImage}
      heroImagePosition="object-[76%_center] lg:object-[45%_center]"
      intro={PAGE.intro}
      answer={PAGE.answer}
      formSubmitLabel={PAGE.formSubmitLabel}
      formEyebrow={PAGE.formEyebrow}
      sections={PAGE.sections}
      faqs={PAGE.faqs}
      related={PAGE.related}
    >
      <VerticalsSection />
    </IndustryPageTemplate>
  );
}
