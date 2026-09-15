import { useId, useState, type FormEvent } from "react";
import { PRIMARY_NEEDS } from "@/lib/site";

/**
 * Operations Assessment form.
 *
 * The container below is intentionally a single swappable panel:
 * <CRM_FORM_EMBED_HERE>: replace the <form> element with the external
 * form embed or wire handleSubmit to the CRM API when it is provisioned.
 */
export function AssessmentForm({
  submitLabel = "Start Assessment",
  eyebrow = "Operations Assessment",
  heading = "Start with a clear view of your operations.",
  description = "Share a few details and an Adroit operations lead will follow up to arrange your assessment.",
  appearance = "default",
}: {
  submitLabel?: string | undefined;
  eyebrow?: string | undefined;
  heading?: string | undefined;
  description?: string | undefined;
  appearance?: "default" | "glass" | "glass-light" | undefined;
}) {
  const uid = useId();
  const [submitted, setSubmitted] = useState(false);
  const isDarkGlass = appearance === "glass";
  const isLightGlass = appearance === "glass-light";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // CRM submission is connected in a later phase.
    setSubmitted(true);
  }

  return (
    <div
      id="operations-assessment"
      className={`scroll-mt-32 h-full rounded-xl border p-6 sm:p-8 lg:p-10 ${
        isDarkGlass
          ? "border-glass-border bg-glass-surface text-hero-foreground shadow-glass backdrop-blur-2xl"
          : isLightGlass
            ? "border-glass-highlight bg-background/45 shadow-glass backdrop-blur-2xl"
            : "border-border bg-background shadow-panel"
      }`}
    >
      <p className={isDarkGlass ? "eyebrow text-amber" : "eyebrow"}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-2xl font-bold leading-snug lg:text-[1.75rem] ${isDarkGlass ? "text-hero-foreground" : ""}`}>
        {heading}
      </h2>
      <p className={`mt-3 text-[0.9375rem] ${isDarkGlass ? "text-hero-muted" : "text-neutral-body"}`}>{description}</p>

      {submitted ? (
        <div className="mt-8 rounded-lg border border-border bg-sand p-6">
          <p className="font-display text-lg font-semibold text-graphite">Thank you.</p>
          <p className="mt-2 text-[0.9375rem] text-neutral-body">
            Your details have been recorded on this page. Once our assessment intake system is
            connected, requests will route directly to the Adroit operations team.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate={false}>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id={`${uid}-first`} label="First Name" name="firstName" autoComplete="given-name" glass={isDarkGlass} lightGlass={isLightGlass} />
            <Field id={`${uid}-last`} label="Last Name" name="lastName" autoComplete="family-name" glass={isDarkGlass} lightGlass={isLightGlass} />
          </div>
          <Field
            id={`${uid}-email`}
            label="Work Email"
            name="email"
            type="email"
            autoComplete="email"
            glass={isDarkGlass}
            lightGlass={isLightGlass}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id={`${uid}-phone`} label="Phone" name="phone" type="tel" autoComplete="tel" glass={isDarkGlass} lightGlass={isLightGlass} />
            <Field
              id={`${uid}-company`}
              label="Company"
              name="company"
              autoComplete="organization"
              glass={isDarkGlass}
              lightGlass={isLightGlass}
            />
          </div>
          <div>
            <label
              htmlFor={`${uid}-need`}
              className={`mb-2 block font-display text-[0.8125rem] font-semibold uppercase tracking-[0.1em] ${isDarkGlass ? "text-hero-muted" : "text-neutral-body"}`}
            >
              Primary Need
            </label>
            <select
              id={`${uid}-need`}
              name="primaryNeed"
              required
              defaultValue=""
              className={`h-12 w-full rounded-lg border px-4 text-[0.9375rem] outline-none transition-colors focus-visible:border-orange focus-visible:ring-2 focus-visible:ring-ring/30 ${isDarkGlass ? "border-glass-border bg-glass-field text-hero-foreground" : isLightGlass ? "border-glass-highlight bg-background/60 text-graphite" : "border-input bg-background text-graphite"}`}
            >
              <option value="" disabled>
                Select a primary need
              </option>
              {PRIMARY_NEEDS.map((need) => (
                <option key={need} value={need}>
                  {need}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="group relative mt-2 w-full overflow-hidden rounded-lg bg-orange px-6 py-4 font-display text-[0.9375rem] font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          >
            {submitLabel}
          </button>
          <p className={`text-center text-[0.8125rem] ${isDarkGlass ? "text-hero-muted" : "text-neutral-mute"}`}>
            We use your details only to prepare and schedule your assessment.
          </p>
        </form>
      )}
    </div>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  autoComplete,
  glass = false,
  lightGlass = false,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  glass?: boolean;
  lightGlass?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className={`mb-2 block font-display text-[0.8125rem] font-semibold uppercase tracking-[0.1em] ${glass ? "text-hero-muted" : "text-neutral-body"}`}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className={`h-12 w-full rounded-lg border px-4 text-[0.9375rem] outline-none transition-colors placeholder:text-neutral-mute focus-visible:border-orange focus-visible:ring-2 focus-visible:ring-ring/30 ${glass ? "border-glass-border bg-glass-field text-hero-foreground" : lightGlass ? "border-glass-highlight bg-background/60 text-graphite" : "border-input bg-background text-graphite"}`}
      />
    </div>
  );
}
