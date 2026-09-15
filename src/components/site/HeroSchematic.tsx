/**
 * Decorative system-flow schematic for service page heroes.
 * Purely visual: an abstract pipeline of three stages connected by
 * dashed precision rules, echoing the blueprint language of the brand.
 */
export function HeroSchematic({
  stages = ["Map", "Automate", "Operate"],
}: {
  stages?: readonly string[] | undefined;
}) {
  const [first, second, third] = stages;
  return (
    <div aria-hidden="true" className="mt-12 hidden border-t border-rule pt-8 lg:block">
      <div className="flex items-start">
        <div className="relative rounded-md border border-rule bg-surface p-3">
          <div className="mb-2 flex gap-1">
            <span className="size-1 bg-orange" />
            <span className="size-1 bg-amber" />
          </div>
          <span className="font-display text-[0.625rem] font-bold uppercase tracking-[0.14em] text-graphite">
            {first ?? "Map"}
          </span>
        </div>

        <span className="mt-7 w-10 shrink-0 border-t border-dashed border-rule sm:w-14" />

        <div className="relative rounded-md border border-graphite bg-background p-3">
          <div className="mb-2 flex items-center justify-between gap-4">
            <span className="block h-1 w-8 bg-orange" />
            <span className="size-1 rounded-full bg-rule" />
          </div>
          <span className="font-display text-[0.625rem] font-bold uppercase tracking-[0.14em] text-graphite">
            {second ?? "Automate"}
          </span>
        </div>

        <span className="mt-7 w-10 shrink-0 border-t border-dashed border-rule sm:w-14" />

        <div className="relative rounded-md border border-rule bg-surface p-3">
          <span className="mb-2 block size-4 border-b-2 border-r-2 border-amber" />
          <span className="font-display text-[0.625rem] font-bold uppercase tracking-[0.14em] text-graphite">
            {third ?? "Operate"}
          </span>
        </div>

        <div className="ml-auto pt-1 text-right font-mono text-[0.625rem] leading-relaxed text-neutral-mute">
          <p className="font-semibold uppercase tracking-[0.1em] text-orange">System: Active</p>
          <p className="uppercase tracking-[0.1em]">Flow: Continuous</p>
        </div>
      </div>
    </div>
  );
}
