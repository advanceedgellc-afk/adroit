import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string | undefined;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center" | undefined;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.08] lg:text-[3.25rem]">
        {title}
      </h2>
      {intro ? (
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-neutral-body">{intro}</div>
      ) : null}
    </div>
  );
}

export function CapabilityList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[0.9375rem] text-neutral-body">
          <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 bg-orange" />
          {item}
        </li>
      ))}
    </ul>
  );
}
