import type { CompanyPage, LegalPage } from "./types";

const HOME_CRUMB = { label: "Home", href: "/" };

export const HOW_WE_WORK: CompanyPage = {
  path: "/how-we-work",
  title: "How We Work: The Adroit Method for Better Operations | Adroit",
  description:
    "The Adroit Method in detail: understand the work, find the friction, improve the process, automate what software can handle, operate what needs people, then measure and improve.",
  crumbs: [HOME_CRUMB, { label: "How We Work" }],
  eyebrow: "How We Work",
  headline: "Process before technology. Always.",
  intro:
    "Adroit follows one method on every engagement. We learn how the work actually moves, remove the friction, automate what software can handle reliably, operate what still needs experienced people, and keep measuring after go live. Nothing about it is proprietary mystery. It is simply the order that works.",
  sections: [
    {
      id: "understand",
      eyebrow: "Step 01",
      title: "Understand the work as performed",
      body: [
        "We map the workflow with the people who do it, including the shortcuts and workarounds that never made it into a procedure document.",
        "This is where most improvement programmes go wrong. Designing against the official process produces a solution for work nobody actually does.",
      ],
    },
    {
      id: "friction",
      eyebrow: "Step 02",
      title: "Find where time and money leak",
      body: [
        "Rework, waiting, duplicate entry, chasing approvals, hunting for information. We quantify each one so priority is based on cost rather than on whoever complains loudest.",
        "The output is a short, honest list of what is worth fixing and what is not.",
      ],
    },
    {
      id: "improve",
      eyebrow: "Step 03",
      title: "Improve the process first",
      body: [
        "Steps are removed, sequences are simplified and ownership is made explicit before any automation is built.",
        "Automating a poor process only makes its problems arrive faster, so this step is never skipped to save time.",
      ],
    },
    {
      id: "automate",
      eyebrow: "Step 04",
      title: "Automate and connect",
      body: [
        "Repetitive, rule based steps move to software, and the systems that hold your data are connected so information stops being retyped.",
        "We build on the tools you already own wherever they are capable, and we say plainly when they are not.",
      ],
    },
    {
      id: "operate",
      eyebrow: "Step 05",
      title: "Operate what still needs people",
      body: [
        "Judgment, exceptions and relationships stay human. Where you want that work handled externally, Adroit builds and manages the team around it with documented procedures and quality review.",
        "Accountability sits with us: workflow, quality, capacity and reporting.",
      ],
    },
    {
      id: "measure",
      eyebrow: "Step 06",
      title: "Measure, review, improve",
      body: [
        "Turnaround, volume, error rate and exception rate are reported on an agreed cadence, reviewed with your team and used to drive the next improvement.",
        "An operation that is not measured drifts back to its old shape within a year. Continuous review is what keeps the gains.",
      ],
    },
  ],
  faqs: [
    {
      question: "How long does an assessment take?",
      answer:
        "For a single area of work, typically one to two weeks from access to written findings, depending on how many people and systems are involved.",
    },
    {
      question: "Do we have to commit to a full programme?",
      answer:
        "No. Each stage stands on its own. Many clients begin with an assessment, act on part of it internally and ask us to deliver the rest.",
    },
    {
      question: "Who is involved from our side?",
      answer:
        "The people who perform the work, plus someone who can make decisions about how it should run. Time commitment is a few hours during the assessment.",
    },
    {
      question: "How do you decide what to automate and what to staff?",
      answer:
        "Rule based, repeatable and high volume work is automated. Work that needs judgment, negotiation or a relationship is operated by people, supported by better information and fewer manual steps.",
    },
  ],
  related: [
    { label: "Business Automation", href: "/business-automation" },
    { label: "Managed Operations", href: "/managed-operations" },
    { label: "About Adroit", href: "/about" },
  ],
};

export const ABOUT: CompanyPage = {
  path: "/about",
  title: "About Adroit: Operations, Automation and Managed Delivery | Adroit",
  description:
    "Adroit IT Solutions and Services Inc. helps small and medium businesses run better operations through process improvement, business automation and professionally managed delivery teams.",
  crumbs: [HOME_CRUMB, { label: "About" }],
  eyebrow: "About Adroit",
  headline: "We build operations that hold up under growth.",
  intro:
    "Adroit IT Solutions and Services Inc. works with small and medium businesses that have reached the limits of manual process. We combine operations expertise, automation capability and managed delivery under a single accountable relationship, so improvement is designed, built and then actually run.",
  sections: [
    {
      id: "belief",
      eyebrow: "What we believe",
      title: "Most businesses do not need more software or more people",
      body: [
        "They need better operations. Another subscription rarely fixes a workflow that was never designed, and another hire often just absorbs the inefficiency more quietly.",
        "So we start with the work itself: how it moves, where it stalls, who is accountable. Technology and people are then applied where each genuinely belongs.",
      ],
    },
    {
      id: "difference",
      eyebrow: "How we are different",
      title: "One partner across process, technology and delivery",
      body: [
        "Consultancies produce recommendations. Software vendors sell tools. Staffing firms supply people. Each leaves you to integrate the other two.",
        "Adroit designs the process, builds the automation and operates the remaining work, which means there is no gap between the recommendation and the result.",
      ],
      capabilities: [
        "Operations first, technology second",
        "Managed delivery rather than supplied headcount",
        "Built on the systems you already own where possible",
        "Measured performance with a regular review cadence",
        "Scoped for small and medium businesses",
        "Single accountable relationship",
      ],
    },
    {
      id: "who",
      eyebrow: "Who we serve",
      title: "Small and medium businesses across many industries",
      body: [
        "Growing companies whose processes have not kept up, professional practices carrying heavy administration, and service businesses where responsiveness decides whether work is won.",
        "We hold particular depth in healthcare revenue cycle work and legal administration, and we apply the same method wherever administrative work is heavy and measurable.",
      ],
    },
    {
      id: "working",
      eyebrow: "Working with us",
      title: "Clear scope, clear measures, no theatre",
      body: [
        "Engagements are written down: what is in scope, how performance is measured, who is accountable and what the review cadence is.",
        "We would rather turn down work that does not fit than deliver something that leaves you managing a supplier instead of running a business.",
      ],
    },
  ],
  faqs: [
    {
      question: "How big is the Adroit team?",
      answer:
        "More than 50 team members today, spanning operations analysis, automation engineering and managed delivery. That size lets us put a dedicated team on your work without stretching anyone thin.",
    },
    {
      question: "How experienced is your core team?",
      answer:
        "The core team has a combined experience of over 50 years across operations leadership, process improvement, business automation and managed delivery. The people who scope your engagement have personally done the kind of work they are scoping.",
    },
    {
      question: "Which industries do you know best?",
      answer:
        "Healthcare and legal are our deepest domains, particularly healthcare revenue cycle work and legal administration. Beyond those we work across many small business industries, from contractors, HVAC and moving companies to restaurants, dental and chiropractic practices, because the underlying problems are similar: heavy manual work, disconnected systems and unclear accountability.",
    },
    {
      question: "Do you work with businesses our size?",
      answer:
        "Small and medium businesses are who we build for. Engagements are scoped and priced for teams that cannot absorb enterprise consulting rates or carry a large internal operations project, and the method is the same one we would run for a larger company, just proportioned honestly.",
    },
    {
      question: "What makes you different from a consultancy or a staffing firm?",
      answer:
        "A consultancy hands you a recommendation and leaves. A staffing firm supplies people and leaves you to manage them. We design the process, build the automation and operate the remaining work under one accountable relationship, so there is no gap between the advice and the result.",
    },
    {
      question: "How do we get started?",
      answer:
        "Begin with an Operations Assessment. We spend one to two weeks understanding how a specific area of your work runs, then give you written findings on what to improve, what to automate and what to operate, whether or not you ask us to deliver any of it.",
    },
  ],
  related: [
    { label: "How We Work", href: "/how-we-work" },
    { label: "Contact Adroit", href: "/contact" },
    { label: "Business Automation", href: "/business-automation" },
  ],
};

export const PRIVACY: LegalPage = {
  path: "/privacy-policy",
  title: "Privacy Policy | Adroit",
  description:
    "How Adroit IT Solutions and Services Inc. collects, uses, shares and protects information submitted through this website, and the choices available to you.",
  crumbs: [HOME_CRUMB, { label: "Privacy Policy" }],
  heading: "Privacy Policy",
  updated: "September 2026",
  intro:
    "This policy explains what information Adroit IT Solutions and Services Inc. collects through this website, why we collect it, how it is used and the choices available to you. It applies to this website and to enquiries submitted through it.",
  sections: [
    {
      heading: "Information we collect",
      body: [
        "When you submit an enquiry or assessment request we collect the details you provide, such as your name, work email address, phone number, company name and the nature of your enquiry.",
        "We also collect limited technical information automatically, such as browser type, device type and pages visited, which helps us understand how the site is used and keep it working correctly.",
      ],
    },
    {
      heading: "How we use information",
      body: [
        "We use enquiry details to respond to you, prepare and schedule an assessment, and communicate about the services you asked about.",
        "We use technical information to maintain, secure and improve the website. We do not sell personal information.",
      ],
    },
    {
      heading: "Client and patient data",
      body: [
        "Information handled as part of a client engagement, including any protected health information, is governed by the agreement with that client rather than by this website policy.",
        "Engagement data is accessed only by the assigned team, handled according to written requirements and processed inside client systems wherever possible.",
      ],
    },
    {
      heading: "Sharing information",
      body: [
        "We share information only with service providers who support our operations, such as hosting and communication providers, and only to the extent needed to deliver that service.",
        "We may disclose information where required by law or to protect our legal rights.",
      ],
    },
    {
      heading: "Retention and security",
      body: [
        "Enquiry information is retained for as long as needed to respond and to maintain a record of our business relationship, then deleted or anonymised.",
        "We apply access controls, staff training and documented handling procedures to protect information. No method of transmission over the internet is completely secure, so we encourage you not to include sensitive personal or patient details in a website enquiry.",
      ],
    },
    {
      heading: "Your choices",
      body: [
        "You can ask us to access, correct or delete the details you submitted, or to stop contacting you, by writing to us using the details on our contact page.",
        "Where local law grants additional rights over personal information, we honour those rights.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "We may update this policy as our services or legal obligations change. The date above reflects the most recent update.",
      ],
    },
  ],
};

export const TERMS: LegalPage = {
  path: "/terms-of-use",
  title: "Terms of Use | Adroit",
  description:
    "The terms that apply to your use of the Adroit website, including permitted use, intellectual property, disclaimers and limitation of liability.",
  crumbs: [HOME_CRUMB, { label: "Terms of Use" }],
  heading: "Terms of Use",
  updated: "September 2026",
  intro:
    "These terms apply to your use of this website, operated by Adroit IT Solutions and Services Inc. By using the site you agree to them. If you do not agree, please do not use the site.",
  sections: [
    {
      heading: "Permitted use",
      body: [
        "You may use this website to learn about our services and to contact us about them. You may not use it to attempt unauthorised access, disrupt its operation, collect data by automated means without permission, or for any unlawful purpose.",
      ],
    },
    {
      heading: "Information on this site",
      body: [
        "Content is provided for general information about our services. It does not constitute professional, legal, medical, billing or compliance advice, and it should not be relied upon as a substitute for advice about your specific circumstances.",
        "We aim to keep content accurate and current but do not warrant that it is complete or free of error.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        "The Adroit name, logo, site design, text and graphics are owned by Adroit IT Solutions and Services Inc. or its licensors. You may not reproduce or redistribute them for commercial purposes without written permission.",
      ],
    },
    {
      heading: "Enquiries and submissions",
      body: [
        "Submitting an enquiry does not create a contract or an engagement. Services are provided only under a separate written agreement.",
        "Please do not submit confidential, sensitive or patient information through website forms.",
      ],
    },
    {
      heading: "Third party links",
      body: [
        "The site may link to third party resources. We are not responsible for their content, availability or practices.",
      ],
    },
    {
      heading: "Disclaimers and liability",
      body: [
        "The website is provided on an as available basis without warranties of any kind, to the fullest extent permitted by law.",
        "To the extent permitted by law, Adroit is not liable for indirect, incidental or consequential loss arising from your use of this website.",
      ],
    },
    {
      heading: "Governing law and changes",
      body: [
        "These terms are governed by the laws of the State of Texas, United States, without regard to conflict of law principles.",
        "We may update these terms from time to time. The date above reflects the most recent update.",
      ],
    },
  ],
};
