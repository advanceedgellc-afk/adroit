import type { ServicePage } from "./types";

const HOME_CRUMB = { label: "Home", href: "/" };
const SOLUTIONS_CRUMB = { label: "Solutions", href: "/#solutions" };

export const BUSINESS_AUTOMATION: ServicePage = {
  path: "/business-automation",
  title: "Business Automation Services for Small and Medium Businesses | Adroit",
  description:
    "Adroit designs and runs business process automation for small and medium businesses: workflow automation, CRM automation, system integration and AI enabled steps that remove manual work.",
  crumbs: [HOME_CRUMB, SOLUTIONS_CRUMB, { label: "Business Automation" }],
  eyebrow: "Business Automation",
  headline: "Run a stronger business by automating the work between systems.",
  headlineAccent: "automating the work",
  heroTreatment: "image",
  intro:
    "Adroit improves the process first, then automates the repetitive parts and connects the systems that should already be talking to each other. The result is faster turnaround, fewer errors and a team that spends its time on work that actually needs judgment.",
  answer:
    "Business automation is the practice of redesigning a workflow and then letting software carry out its repetitive steps. Adroit handles both parts: the process design and the working automation, with clear reporting on what changed.",
  formSubmitLabel: "Request an Automation Review",
  formEyebrow: "Automation Review",
  schemaName: "Business Automation",
  sections: [
    {
      id: "what-we-automate",
      eyebrow: "Scope",
      title: "What do we automate?",
      body: [
        "We start where the cost is easiest to see: work that is repeated many times a week, follows predictable rules and depends on someone remembering to do it. Quotes that sit unsent, leads that are not routed, invoices keyed twice, status updates copied between systems.",
        "Each automation is built on your existing tools wherever possible. We are not trying to sell you a platform. We are trying to make the workflow shorter, more consistent and visible to the people accountable for it.",
      ],
      capabilities: [
        "Business Process Automation",
        "Workflow Automation",
        "CRM Automation",
        "AI Enabled Workflows",
        "Lead Management and Routing",
        "Quote and Proposal Automation",
        "Appointment and Scheduling Automation",
        "Customer Onboarding",
        "Customer Follow Up Sequences",
        "Document Generation",
        "Data Synchronization",
        "System Integration",
      ],
    },
    {
      id: "how-it-works",
      eyebrow: "Approach",
      title: "How does an automation engagement run?",
      body: [
        "First we map the workflow as it is performed today, including the workarounds nobody documented. Then we agree what should be simplified, what should be automated and what should stay with a person.",
        "Build happens in short increments so you see working automation early rather than a long project with a distant finish. Each increment ships with the measures that show whether it helped: cycle time, volume handled, rework and error rate.",
        "After launch we monitor, tune and extend. Automation that nobody maintains quietly rots, so ongoing ownership is part of the engagement rather than an afterthought.",
      ],
    },
    {
      id: "results",
      eyebrow: "Outcomes",
      title: "What changes in the first 90 days?",
      body: [
        "In the first 30 days you get a documented view of the workflow, an agreed target state and the first automation live in the highest friction step.",
        "By 60 days the surrounding steps are connected and manual handoffs between systems have been removed. By 90 days the process runs on a measured baseline, with reporting that shows volume, turnaround and exceptions.",
        "Most teams notice the same three effects: work stops waiting on individuals, the same task is done the same way every time, and leadership finally has numbers for a process that used to be invisible.",
      ],
    },
    {
      id: "tools",
      eyebrow: "Systems",
      title: "Do you replace our existing software?",
      body: [
        "Rarely. Most businesses already own more capability than they use. We prefer to configure, connect and extend what you have, then recommend a change only when the current tool genuinely cannot do the job.",
        "When new tooling is warranted we say why, what it replaces and what it costs to run, so the decision belongs to you rather than to a vendor preference.",
      ],
    },
  ],
  faqs: [
    {
      question: "How much of our process can realistically be automated?",
      answer:
        "In most small and medium businesses, a large share of routine administrative steps can be automated: data entry between systems, routing, reminders, document creation and status updates. Work that needs judgment, negotiation or a relationship stays with your team, usually supported by better information.",
    },
    {
      question: "How long before we see results?",
      answer:
        "The first automation is normally live within a few weeks of the process review, because we deliberately start with a single high friction step rather than a full transformation programme.",
    },
    {
      question: "Do we need a technical person on our side?",
      answer:
        "No. We need access to the systems involved and someone who knows how the work is actually done. Adroit handles the design, build, testing and ongoing operation.",
    },
    {
      question: "What happens if the process changes later?",
      answer:
        "Automations are documented and maintained. When your process changes, we adjust the workflow rather than leaving you with a rule nobody understands.",
    },
    {
      question: "Is automation only for large companies?",
      answer:
        "No. Smaller teams often gain the most, because a handful of people are carrying every manual step. The work is scoped to what your business actually runs, not to enterprise programme sizes.",
    },
  ],
  related: [
    { label: "Managed Operations", href: "/managed-operations" },
    { label: "Growing Businesses", href: "/growing-businesses" },
    { label: "How We Work", href: "/how-we-work" },
  ],
};

export const HEALTHCARE_RCM: ServicePage = {
  path: "/healthcare-revenue-cycle-management",
  title: "Healthcare RCM and Medical Transcription Services | Adroit",
  description:
    "HIPAA compliant healthcare revenue cycle management: medical transcription, coding, billing, payment posting, AR follow up and denial management, run by certified teams.",
  crumbs: [HOME_CRUMB, SOLUTIONS_CRUMB, { label: "Healthcare RCM" }],
  eyebrow: "Healthcare Revenue Cycle Management",
  headline: "A modern, HIPAA compliant revenue cycle from dictation to final payment.",
  headlineAccent: "HIPAA compliant revenue cycle",
  heroTreatment: "image",
  intro:
    "Adroit pairs experienced, HIPAA certified revenue cycle teams with technology that tracks every stage: transcription, coding, billing, payment posting and denial management. The result is faster cash, fewer denials and clinical time that stays with patients.",
  answer:
    "Revenue cycle management is everything between a patient visit and payment fully collected. Adroit runs it as a managed, HIPAA compliant operation: certified teams, documented process, quality checks and weekly reporting that shows exactly where every dollar stands.",
  formSubmitLabel: "Request an RCM Review",
  formEyebrow: "Revenue Cycle Review",
  schemaName: "Healthcare Revenue Cycle Management",
  sections: [
    {
      id: "capabilities",
      eyebrow: "Scope",
      title: "Which revenue cycle functions do you cover?",
      body: [
        "We support the full administrative path of a claim, from the dictated report through transcription, coding and billing, all the way to payment posting and denial management. Or we take only the stages where you need help: some practices hand over the entire cycle, others keep coding in house and ask us to take accounts receivable follow up.",
        "Every function runs against a documented process with quality sampling, so performance is repeatable rather than dependent on one person's memory.",
      ],
      capabilities: [
        "Medical Billing",
        "Medical Coding",
        "Charge Entry",
        "Claims Processing Support",
        "Eligibility and Benefits Verification",
        "Prior Authorization Support",
        "Payment Posting",
        "Accounts Receivable Follow Up",
        "Denial Management and Appeals",
        "Patient Billing Support",
        "Medical Transcription",
        "Revenue Cycle Reporting",
      ],
    },
    {
      id: "transcription",
      eyebrow: "Clinical Documentation",
      title: "Whatever happened to dictation and transcription?",
      body: [
        "In the race to automate, many facilities have quietly dropped dictation altogether. Physicians are now expected to generate their own reports, or to review and correct an AI generated draft before the encounter can be closed. The documentation work did not disappear; it moved onto the provider, usually after hours.",
        "The older path is still the better one for many practices. Dictate the encounter the way you always have, and a trained transcriptionist turns it into an accurate, properly formatted report, ready for coding and billing. You keep the speed of speaking, the accuracy check is done by a human reviewer and the provider's time stays with patients.",
        "Adroit offers medical transcription alongside the rest of the revenue cycle: secure dictation capture, specialty trained transcriptionists, quality review and delivery straight into your records system. It runs as part of a wider engagement, or as a standalone service if coding and billing stay in house.",
      ],
      capabilities: [
        "Secure Dictation Capture",
        "Medical Transcription",
        "Specialty Trained Transcriptionists",
        "Quality Review and Correction",
        "Delivery Direct to Your Records System",
        "Standard and STAT Turnaround Options",
      ],
    },
    {
      id: "hipaa",
      eyebrow: "HIPAA",
      title: "Is Adroit HIPAA compliant?",
      body: [
        "Yes. Adroit is a HIPAA compliant organization and every employee is HIPAA certified, so compliance sits with the whole team rather than with a policy binder nobody opens.",
        "HIPAA processes and supporting technology run through the work itself: documented handling procedures, role based access limited to the assigned team, secure technology for dictation capture and data transfer, and audit trails that stand up to review. Compliance is part of how the work is performed, not a document attached at the end.",
      ],
    },
    {
      id: "performance",
      eyebrow: "Performance",
      title: "How is performance measured?",
      body: [
        "The whole cycle is measured, not just the billing end. Transcription reports on accuracy and turnaround, including STAT work. Coding is sampled and audited, with findings traced back to documentation. Billing reports on clean claim rate, charge lag, days in accounts receivable, aged balance mix, denial rate by reason and collection against expected reimbursement.",
        "Reporting is reviewed on a regular cadence rather than sent and forgotten. Where a number moves the wrong way, the review names the cause and the corrective action.",
      ],
    },
    {
      id: "compliance",
      eyebrow: "Controls",
      title: "What does access and control look like in practice?",
      body: [
        "Patient data is treated as protected health information at every step. We sign business associate agreements, agree handling requirements in writing before any engagement starts, and work in your systems wherever possible so records and audit trails stay where your compliance program expects them.",
        "Access to protected health information is limited to the assigned team at all times, and our teams operate to documented procedures with quality review.",
      ],
    },
    {
      id: "transition",
      eyebrow: "Transition",
      title: "What does onboarding look like?",
      body: [
        "We begin with a review of current performance, backlog and payer mix, so improvement is measured against a real baseline rather than an assumption.",
        "Transition runs in stages: documentation and access, a shadow period on live work, then full operation with agreed service measures. Your team keeps visibility throughout, and nothing moves before the process is written down.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you work with our existing practice management system?",
      answer:
        "Yes. We work inside the systems you already use for billing and records, so your data, audit trail and reporting stay where your team expects them.",
    },
    {
      question: "Can you take only part of the revenue cycle?",
      answer:
        "Yes. Many engagements start with a single stage, most often accounts receivable follow up or denial management, and expand once performance is proven.",
    },
    {
      question: "How do you protect patient information?",
      answer:
        "Adroit is HIPAA compliant and every employee is HIPAA certified. Access is restricted to the assigned team, handling rules are agreed in writing in the business associate agreement, and work stays in your systems where possible.",
    },
    {
      question: "What size practices do you support?",
      answer:
        "From independent practices to multi site medical groups and healthcare service organizations. The team is sized to your volume rather than to a fixed package.",
    },
    {
      question: "Is dictation and transcription still worth it with AI scribes available?",
      answer:
        "For many practices, yes. AI drafted notes still have to be reviewed and corrected by the physician, which moves documentation work back onto the provider. Dictation with a trained transcriptionist puts that accuracy check with a human reviewer instead, keeps report quality consistent and returns the provider's evenings to them. Adroit offers it standalone or as part of the wider revenue cycle.",
    },
    {
      question: "How quickly can a backlog be cleared?",
      answer:
        "That depends on volume, payer mix and claim age. We give a realistic clearance plan after reviewing the aged balance rather than promising a number in advance.",
    },
  ],
  related: [
    { label: "Healthcare", href: "/healthcare" },
    { label: "Managed Operations", href: "/managed-operations" },
    { label: "Business Automation", href: "/business-automation" },
  ],
};

export const MANAGED_OPERATIONS: ServicePage = {
  path: "/managed-operations",
  title: "Managed Operations and Back Office Support Teams | Adroit",
  description:
    "Adroit builds and manages operational teams for customer support, back office processing, data operations and administrative work, with owned workflow, quality control and performance reporting.",
  crumbs: [HOME_CRUMB, SOLUTIONS_CRUMB, { label: "Managed Operations" }],
  eyebrow: "Managed Operations",
  headline: "A managed operation, not extra headcount.",
  heroTreatment: "image",
  intro:
    "Where work still needs experienced people, Adroit builds the team, owns the workflow and reports on performance. You get a functioning operation with accountability for output, not a set of hours to supervise.",
  answer:
    "Managed operations means an external partner runs a defined business function end to end, including process, staffing, quality and reporting. Staffing supplies people. Managed operations supplies a result.",
  formSubmitLabel: "Request an Operations Review",
  formEyebrow: "Operations Review",
  schemaName: "Managed Operations",
  sections: [
    {
      id: "functions",
      eyebrow: "Scope",
      title: "Which functions can Adroit operate?",
      body: [
        "We take on work that is process driven, high volume and measurable: the administrative engine room that keeps a business running but rarely gets the attention it needs.",
        "Teams are built around your workflow and your systems, with named leads, documented procedures and quality sampling from day one.",
      ],
      capabilities: [
        "Customer Support Operations",
        "Inbound Call and Email Handling",
        "Outbound Follow Up",
        "Order and Request Processing",
        "Back Office Administration",
        "CRM Administration and Hygiene",
        "Data Entry and Data Operations",
        "Document Processing",
        "Accounting and Bookkeeping Support",
        "Project Coordination",
        "Vendor and Supplier Administration",
        "Operational Reporting",
      ],
    },
    {
      id: "accountability",
      eyebrow: "Accountability",
      title: "How is a managed team different from staffing?",
      body: [
        "A staffing arrangement gives you people and leaves the management with you. Adroit owns the operating model: how the work is done, how quality is checked, how volume is planned and how performance is reported.",
        "If output drops, it is our problem to diagnose and fix. That difference is the reason most clients move from staffing to managed operations in the first place.",
      ],
    },
    {
      id: "automation",
      eyebrow: "Improvement",
      title: "Does automation come with it?",
      body: [
        "Yes, and in that order. We operate the process, learn where the friction really sits, then automate the steps that no longer need a person. Automating a process you have never run is how teams end up with fast, broken workflows.",
        "Continuous improvement is part of the service. Every quarter you should see fewer manual steps and a shorter path from request to completion.",
      ],
    },
    {
      id: "scaling",
      eyebrow: "Capacity",
      title: "How does capacity change with demand?",
      body: [
        "Volume forecasts are reviewed regularly, and the team is scaled with notice rather than in a panic. Seasonal peaks, new product lines and growth are planned into the operating model.",
        "Because the process is documented, adding capacity does not mean restarting the learning curve for every new person.",
      ],
    },
  ],
  faqs: [
    {
      question: "Who manages the team day to day?",
      answer:
        "Adroit does. A named operations lead owns the workflow, quality, scheduling and reporting, and meets your team on an agreed cadence.",
    },
    {
      question: "How do we know quality is holding?",
      answer:
        "Work is sampled and scored against documented standards, and the results are reported alongside volume and turnaround. Issues come with a cause and a corrective action.",
    },
    {
      question: "Can a managed team use our systems?",
      answer:
        "Yes. Teams work in your systems with controlled access, so your records, audit trail and reporting remain in one place.",
    },
    {
      question: "What is the smallest sensible engagement?",
      answer:
        "A single well defined function is enough to start. Beginning small and expanding once performance is proven is usually a better path than moving several functions at once.",
    },
    {
      question: "How is pricing structured?",
      answer:
        "Pricing reflects the scope, volume and service measures agreed for the function, so you are buying a defined operation rather than an open ended hourly arrangement.",
    },
  ],
  related: [
    { label: "Business Automation", href: "/business-automation" },
    { label: "Healthcare RCM", href: "/healthcare-revenue-cycle-management" },
    { label: "Legal", href: "/legal" },
  ],
};
