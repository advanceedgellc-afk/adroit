import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-surface-soft">
      <div className="container-content py-4">
        <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-neutral-body">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <a href={item.href} className="transition-colors hover:text-orange">
                    {item.label}
                  </a>
                ) : (
                  <span aria-current={isLast ? "page" : undefined} className="text-graphite">
                    {item.label}
                  </span>
                )}
                {!isLast ? (
                  <ChevronRight className="size-3.5 text-neutral-mute" aria-hidden="true" />
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
