import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FaqItem = { question: string; answer: string };

export function Faq({
  items,
  heading = "Frequently asked questions",
  eyebrow = "Questions",
}: {
  items: FaqItem[];
  heading?: string;
  eyebrow?: string;
}) {
  return (
    <section className="precision-section section-y border-t border-border" aria-labelledby="faq-heading">
      <div className="container-content grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2
            id="faq-heading"
            className="mt-4 font-display text-[2rem] font-bold leading-[1.1] lg:text-[2.75rem]"
          >
            {heading}
          </h2>
        </div>
        <Accordion type="single" collapsible className="border-t border-border">
          {items.map((item) => (
            <AccordionItem key={item.question} value={item.question} className="border-border">
              <AccordionTrigger className="py-6 text-left font-display text-lg font-semibold hover:no-underline lg:text-xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[1rem] leading-relaxed text-neutral-body">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
