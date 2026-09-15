import type { ServicePage } from "./types";

const HOME_CRUMB = { label: "Home", href: "/" };
const INDUSTRIES_CRUMB = { label: "Industries", href: "/#industries" };

export const GROWING_BUSINESSES: ServicePage = {
  path: "/growing-businesses",
  title: "Operations Support for Growing Small and Medium Businesses | Adroit",
  description:
    "Adroit helps growing small and medium businesses replace manual workarounds with documented, automated and managed operations so revenue can grow without adding administrative headcount.",
  crumbs: [HOME_CRUMB, INDUSTRIES_CRUMB, { label: "Growing Businesses" }],
  eyebrow: "Growing Businesses",
  heroTreatment: "image",
  headline: "Your processes helped you start. They will not carry you further.",
  intro:
    "Most growing companies hit the same wall: the informal ways of working that made the early years possible start creating delay, rework and dependence on a few people. Adroit rebuilds those workflows, automates the repetitive parts and operates what still needs people.",
  answer:
    "If sales are growing faster than your ability to deliver and administer the work, the constraint is usually process rather than effort. Fixing the process is cheaper than hiring around it.",
  formSubmitLabel: "Request an Operations Review",
  formEyebrow: "Operations Review",
  schemaName: "Operations support for growing businesses",
  sections: [
    {
      id: "symptoms",
      eyebrow: "Diagnosis",
      title: "What does an outgrown process look like?",
      body: [
        "Quotes and orders live in inboxes. Two systems hold different versions of the same customer. Month end depends on one person's spreadsheet. New hires take months to become useful because nothing is written down.",
        "None of that is a failure of effort. It is what happens when a business grows faster than the operating model it started with.",
      ],
      capabilities: [
        "Lead capture and routing that stops leaks",
        "Quote, order and invoice workflow",
        "Customer onboarding that runs the same way every time",
        "One reliable customer record across systems",
        "Documented procedures new hires can follow",
        "Reporting leadership can trust",
      ],
    },
    {
      id: "approach",
      eyebrow: "Approach",
      title: "How does Adroit help a growing business?",
      body: [
        "We start with one area where the pain is obvious and measurable, usually sales administration, onboarding or billing. We map it, simplify it, automate the repetitive steps and hand back a process that runs without heroics.",
        "Where the work still needs people, a managed Adroit team can operate it so your own staff stay on customers, product and revenue.",
        "Each step is scoped to what a growing business can absorb. No twelve month transformation programme, no platform migration you did not ask for.",
      ],
    },
    {
      id: "outcome",
      eyebrow: "Outcomes",
      title: "What do you get out of it?",
      body: [
        "Capacity without proportional hiring, faster turnaround for customers and far less dependence on the few people who know how everything works.",
        "Equally important, you get visibility. When the process is documented and measured, decisions about pricing, hiring and capacity stop being guesses.",
      ],
    },
  ],
  faqs: [
    {
      question: "We are only a small team. Is this relevant to us?",
      answer:
        "Yes. Smaller teams feel manual work most sharply, because every extra step comes out of the same few days. Work is scoped to your size and your budget.",
    },
    {
      question: "Should we fix the process or hire more people?",
      answer:
        "Usually the process first. Hiring into a broken workflow multiplies the cost of that workflow, and the new person inherits the same workarounds.",
    },
    {
      question: "Will this disrupt how we serve customers?",
      answer:
        "Changes are made one workflow at a time with the current process running alongside until the new one is proven, so customers see improvement rather than interruption.",
    },
    {
      question: "Where do most engagements start?",
      answer:
        "With an operations assessment on a single area of work. It gives you a clear picture of what to improve, what to automate and what to hand to a managed team, before any commitment to build.",
    },
  ],
  related: [
    { label: "Business Automation", href: "/business-automation" },
    { label: "Managed Operations", href: "/managed-operations" },
    { label: "How We Work", href: "/how-we-work" },
  ],
};

export const HEALTHCARE: ServicePage = {
  path: "/healthcare",
  title: "Healthcare Operations and Administrative Support | Adroit",
  description:
    "Adroit supports medical practices, medical groups and healthcare service organizations with revenue cycle operations, documentation support and administrative workflows run by managed teams.",
  crumbs: [HOME_CRUMB, INDUSTRIES_CRUMB, { label: "Healthcare" }],
  eyebrow: "Healthcare",
  heroTreatment: "image",
  headline: "Less administration between your clinicians and their patients.",
  intro:
    "Healthcare organizations carry an unusually heavy administrative load: eligibility checks, documentation, claims, follow up and patient billing. Adroit operates that work with experienced teams and a documented process so clinical staff can stay clinical.",
  answer:
    "Adroit takes on the administrative and revenue cycle work around care delivery. Clinical decisions stay with your clinicians. The paperwork around them becomes a managed, measured process.",
  formSubmitLabel: "Request a Practice Review",
  formEyebrow: "Practice Review",
  schemaName: "Healthcare administrative and revenue cycle operations",
  sections: [
    {
      id: "who",
      eyebrow: "Who we support",
      title: "Which healthcare organizations do you work with?",
      body: [
        "Independent practices, specialty groups, multi site medical groups and healthcare service organizations whose administrative volume has outgrown the front office.",
        "Engagements range from a single function, such as accounts receivable follow up, to full revenue cycle and administrative operations.",
      ],
      capabilities: [
        "Revenue cycle operations",
        "Eligibility and authorization support",
        "Medical billing and coding",
        "Denial management and appeals",
        "Patient billing enquiries",
        "Medical transcription and documentation support",
        "Referral and scheduling coordination",
        "Records and data administration",
      ],
    },
    {
      id: "why",
      eyebrow: "Why it matters",
      title: "What does administrative drag actually cost?",
      body: [
        "It shows up as delayed claims, aged balances, unreturned patient calls, clinicians finishing notes late into the evening and front office staff turning over faster than you can train them.",
        "Treating that as an operations problem rather than an effort problem is what changes the outcome. Better process, automation where it fits and a managed team where judgment is needed.",
      ],
    },
    {
      id: "trust",
      eyebrow: "Controls",
      title: "How is patient information handled?",
      body: [
        "Patient data is treated as protected health information throughout. Access is limited to the assigned team, handling requirements are agreed in writing, and work stays inside your systems wherever possible.",
        "Procedures are documented with quality review at each stage, supporting the audit trail your compliance obligations require.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you only work in healthcare?",
      answer:
        "No. Adroit works with small and medium businesses across many industries. Healthcare is one area where we hold deep revenue cycle experience.",
    },
    {
      question: "Can you support a single practice rather than a group?",
      answer:
        "Yes. Team size is matched to your volume, so an independent practice can start with a narrow scope and grow it.",
    },
    {
      question: "Do you work in our practice management and records systems?",
      answer:
        "Yes. Working inside your existing systems keeps records, audit history and reporting in one place.",
    },
    {
      question: "What is the first step?",
      answer:
        "A review of current performance and volume across the functions you are considering, followed by a written view of what to improve, automate or hand over.",
    },
  ],
  related: [
    { label: "Healthcare RCM", href: "/healthcare-revenue-cycle-management" },
    { label: "Managed Operations", href: "/managed-operations" },
    { label: "Business Automation", href: "/business-automation" },
  ],
};

export const LEGAL: ServicePage = {
  path: "/legal",
  title: "Law Firm Operations and Administrative Support | Adroit",
  description:
    "Adroit supports law firms with client intake, matter administration, document processing, billing support and follow up, using documented process, automation and managed teams.",
  crumbs: [HOME_CRUMB, INDUSTRIES_CRUMB, { label: "Legal" }],
  heroTreatment: "image",
  eyebrow: "Legal",
  headline: "Intake answered. Matters administered. Billing kept current.",
  intro:
    "Law firms lose more to slow intake and administrative backlog than to competition. Adroit builds the workflow, automates the routine steps and provides managed teams for intake, matter administration and billing support.",
  answer:
    "Adroit handles the administrative operations around legal work: intake response, matter setup, document processing, billing support and client follow up. Legal advice and judgment stay with your attorneys.",
  formSubmitLabel: "Request a Firm Review",
  formEyebrow: "Firm Review",
  schemaName: "Legal administrative operations",
  sections: [
    {
      id: "scope",
      eyebrow: "Scope",
      title: "What can Adroit run for a firm?",
      body: [
        "The administrative spine of the practice: the work that must happen promptly and consistently but does not require a licensed professional.",
        "Every function runs to a documented procedure with quality checks, so responsiveness does not depend on who happens to be at the desk.",
      ],
      capabilities: [
        "Client intake response and qualification",
        "Consultation scheduling",
        "Matter setup and file administration",
        "Document preparation support",
        "Records and discovery administration",
        "Billing and pre bill support",
        "Accounts receivable follow up",
        "Client status follow up",
        "CRM and case system hygiene",
        "Operational reporting",
      ],
    },
    {
      id: "intake",
      eyebrow: "Intake",
      title: "Why does intake speed matter so much?",
      body: [
        "Prospective clients contact several firms and retain the one that responds first with a clear next step. An enquiry that waits until the next morning is often already gone.",
        "We combine automated acknowledgement and routing with a managed team that responds, qualifies and books the consultation, so no enquiry sits unanswered.",
      ],
    },
    {
      id: "confidentiality",
      eyebrow: "Controls",
      title: "How is client confidentiality protected?",
      body: [
        "Confidentiality obligations are agreed in writing before work begins. Access is restricted to the assigned team, work happens in your systems where possible, and handling procedures are documented.",
        "Conflict checks, retention rules and privilege remain under your firm's control. Our teams operate within the rules you set.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you provide legal advice or paralegal work?",
      answer:
        "No. Adroit provides administrative and operational support. Legal judgment, advice and any work requiring licensure stay with your firm.",
    },
    {
      question: "Can you handle after hours intake?",
      answer:
        "Coverage is set to your requirement, including extended hours where responsiveness drives conversion. Coverage windows are agreed before the engagement starts.",
    },
    {
      question: "Will you work in our case management system?",
      answer:
        "Yes. Teams work inside your existing case management and billing systems with controlled access.",
    },
    {
      question: "What size firms do you support?",
      answer:
        "From solo practices to multi attorney firms. Scope and team size are matched to your volume.",
    },
  ],
  related: [
    { label: "Managed Operations", href: "/managed-operations" },
    { label: "Business Automation", href: "/business-automation" },
    { label: "How We Work", href: "/how-we-work" },
  ],
};

export const VERTICALS_SECTION = {
  eyebrow: "Who We Serve",
  title: "Organized. Visible. Growing.",
  intro:
    "Adroit works with the businesses that keep the country running. We organize the day to day operations behind the scenes, give each business a digital presence that gets found, and put managed support behind growth.",
  closing:
    "If your business is not listed, the same approach applies. Tell us how work moves through your business and we will shape the solution around it.",
};

export type SmallBusinessVertical = { name: string; blurb: string };

export const SMALL_BUSINESS_VERTICALS: SmallBusinessVertical[] = [
  {
    name: "Accounting and Bookkeeping Firms",
    blurb: "Client onboarding, document collection and deadline tracking.",
  },
  {
    name: "Auto Repair",
    blurb: "Appointment booking, estimates, parts admin and customer follow-up.",
  },
  {
    name: "Chiropractors",
    blurb: "Appointment automation, recalls, billing support and patient follow-up.",
  },
  {
    name: "Cleaning Services",
    blurb: "Quoting, scheduling, invoicing and recurring-service management.",
  },
  {
    name: "Dental Offices",
    blurb: "Scheduling, recalls, insurance follow-up and patient communications.",
  },
  {
    name: "Electricians",
    blurb: "Estimates, job scheduling, invoicing and a professional web presence.",
  },
  {
    name: "General Contractors",
    blurb:
      "Scheduling, estimating paperwork and subcontractor coordination, backed by a web presence that wins bids.",
  },
  {
    name: "Gyms and Fitness Studios",
    blurb: "Membership admin, billing, trial follow-up and retention programs.",
  },
  {
    name: "HVAC",
    blurb:
      "Booked calendars, service agreements and follow-up, with a site that turns local searches into calls.",
  },
  {
    name: "Landscaping and Lawn Care",
    blurb:
      "Recurring routes scheduled, quotes tracked and seasonal contracts managed, with a presence that wins new yards.",
  },
  {
    name: "Laundromats",
    blurb:
      "Pickup and delivery scheduling, machine maintenance tracking and reviews that keep the washers full.",
  },
  {
    name: "Law Firms",
    blurb: "Intake answered fast, matters administered and billing kept current.",
  },
  {
    name: "Moving Companies",
    blurb: "Quote requests captured, crews scheduled, reviews and referrals worked.",
  },
  {
    name: "Pet Stores",
    blurb:
      "Inventory and ordering admin, grooming bookings and an online storefront that sells beyond the neighborhood.",
  },
  {
    name: "Plumbers",
    blurb: "Dispatch, quoting, invoicing and local search visibility.",
  },
  {
    name: "Real Estate Agencies",
    blurb: "Lead capture and routing, transaction admin and client updates.",
  },
  {
    name: "Restaurants",
    blurb: "Reservations, online ordering and staff admin, with a presence that fills tables.",
  },
  {
    name: "Roofing Companies",
    blurb:
      "Inspections scheduled, estimates tracked and crews routed, with a local presence that wins the search.",
  },
  {
    name: "Salons and Spas",
    blurb: "Online booking, reminders, rebooking and client records in one place.",
  },
  {
    name: "Veterinary Clinics",
    blurb: "Appointments, reminders, records admin and client communications.",
  },
];
