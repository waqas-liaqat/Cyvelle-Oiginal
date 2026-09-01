const categoryMeta = {
  leadership: {
    label: "Executive Security & Compliance Leadership",
    short: "Leadership",
    path: "/services/leadership",
    intro: "Senior judgment for organizations that need security or compliance ownership without immediately hiring a full-time executive.",
    icon: "BriefcaseBusiness"
  },
  compliance: {
    label: "Compliance & Certification Readiness",
    short: "Compliance",
    path: "/services/compliance",
    intro: "Readiness, implementation support, evidence preparation, and coordination for the framework your next contract actually requires.",
    icon: "FileCheck2"
  },
  risk: {
    label: "Cyber Risk & Resilience",
    short: "Risk",
    path: "/services/risk",
    intro: "Vendor risk, incident planning, maturity, startup security, and cloud governance built for operating reality.",
    icon: "Network"
  },
  ai: {
    label: "AI Governance & Responsible AI",
    short: "AI Governance",
    path: "/services/ai-governance",
    intro: "Governance for how your organization actually uses AI, integrated with security, risk, compliance, and accountability.",
    icon: "BrainCircuit"
  }
};

const visuals = {
  hero: "/assets/photos/boardroom.jpg",
  strategy: "/assets/photos/strategy.jpg",
  team: "/assets/photos/team.jpg",
  laptop: "/assets/photos/laptop.jpg",
  office: "/assets/photos/office.jpg",
  workshop: "/assets/photos/workshop.jpg",
  logo: "/assets/cyvelle-logo.png",
  mark: "/assets/cyvelle-mark.png"
};

const categoryVisual = {
  leadership: visuals.office,
  compliance: visuals.strategy,
  risk: visuals.workshop,
  ai: visuals.laptop
};

const independence = {
  "soc-2": "Cyvelle prepares the organization and coordinates handoff. An independent CPA firm performs the examination and issues the report.",
  "iso-27001": "Cyvelle designs and prepares the ISMS. An accredited certification body performs the certification audit and makes the certification decision.",
  "iso-42001": "Cyvelle designs and prepares the AI management system. An accredited certification body performs the certification audit and makes the certification decision.",
  "pci-dss": "Cyvelle provides readiness and advisory. Independent QSA-led assessment and validation remain separate where applicable.",
  hitrust: "Cyvelle supports readiness and architecture. Validated assessments and certification decisions remain with Authorized External Assessors and HITRUST.",
  cmmc: "Cyvelle prepares the control and evidence baseline. Independent assessment and government decisions remain separate where required by the current program.",
  nis2: "Cyvelle supports technical and governance readiness. Counsel confirms jurisdiction, applicability, entity classification, and legal interpretation.",
  "eu-ai-act": "Cyvelle supports technical and governance readiness. Legal interpretation, formal classification, and authority determinations remain with qualified counsel and regulators.",
  "nist-ai-rmf": "NIST AI RMF alignment is voluntary and is not a certification."
};

const services = [
  {
    slug: "virtual-ciso",
    category: "leadership",
    title: "Virtual CISO",
    path: "/services/leadership/virtual-ciso",
    seo: "Virtual CISO Services for Growing Companies | Cyvelle",
    meta: "Founder-led virtual CISO leadership for growing organizations that need security strategy, risk oversight, executive reporting, and compliance direction.",
    hero: "Executive security leadership without waiting for a full-time CISO hire.",
    intro: "Cyvelle provides founder-led vCISO support for organizations that need a clear security strategy, accountable risk decisions, and credible reporting to customers, auditors, executives, and the board.",
    who: ["Growing B2B technology companies with material security responsibilities.", "Regulated organizations without a dedicated CISO.", "Leadership teams that need sustained senior oversight across risk, compliance, and assurance."],
    triggers: ["Security decisions lack one accountable owner.", "Enterprise buyers receive inconsistent answers from different teams.", "The roadmap competes with product delivery because priorities and acceptable risk are unclear."],
    solves: "A vCISO establishes an executive governance layer across security, compliance, technology, and business operations.",
    does: ["Define business-aligned security priorities, owners, dependencies, and review dates.", "Establish repeatable risk intake, treatment, acceptance, escalation, and reporting.", "Build executive and board reporting on posture, material issues, exceptions, and decisions.", "Coordinate assurance across customer requirements, contracts, SOC 2, ISO, PCI DSS, HIPAA, CMMC, NIS2, and AI governance."],
    deliverables: ["Security strategy and roadmap", "Risk governance model", "Executive and board reporting package", "Compliance and assurance direction", "Decision register"],
    engagement: "Ongoing monthly advisory with a defined governance cadence and clear decision ownership.",
    pricing: [
      ["Governance Advisor", "$5,500 / month", "Executive direction and risk governance for teams with internal execution capacity."],
      ["Security Program Lead", "$8,500 / month", "Deeper ownership of roadmap, reporting, assurance, and cross-functional program rhythm."],
      ["Embedded vCISO", "$12,000 / month", "Expanded leadership presence for complex environments, board reporting, and multiple obligations."]
    ],
    changes: ["Security has one accountable executive voice.", "Leadership receives decision-ready reporting instead of fragmented gap lists.", "Customer and audit narratives become consistent and evidence-backed."]
  },
  {
    slug: "part-time-ciso",
    category: "leadership",
    title: "Part-Time CISO",
    path: "/services/leadership/part-time-ciso",
    seo: "Part-Time CISO | Embedded Security Leadership on a Defined Weekly Cadence",
    meta: "Part-time CISO services for growth-stage and mid-market organizations. Embedded leadership, weekly cadence, and program build-out led personally by Temi.",
    hero: "An embedded security leader for a defined weekly commitment.",
    intro: "Temi steps into the executive seat on a predictable weekly cadence, leading the program while you build out or transition security leadership.",
    who: ["Organizations with a clear security leadership need but no full-time CISO headcount.", "Teams in a major framework or audit build-out.", "Companies between CISOs or navigating a restructuring."],
    triggers: ["A previous leader has left and the program cannot pause.", "A deadline is approaching and weekly leadership is needed to keep work moving.", "Security decisions are being made ad hoc across several stakeholders."],
    solves: "Part-Time CISO support solves the need for someone in the seat every week, not only advisory comments from the side.",
    does: ["Commit to a defined weekly time block.", "Lead recurring security governance and program meetings.", "Own priority initiatives across readiness, risk, and incident planning.", "Coordinate technology, operations, compliance, legal, and business teams.", "Represent security in executive and board discussions."],
    deliverables: ["Weekly leadership cadence", "Program plan and backlog", "Stakeholder alignment model", "Executive reporting", "Framework and audit leadership"],
    engagement: "A defined weekly schedule with embedded leadership, work tracking, stakeholder meetings, and executive reporting.",
    pricing: [
      ["Leadership Advisory", "$5,500 / month", "Weekly executive direction for a smaller program or transition period."],
      ["Embedded Leadership", "$8,500 / month", "Hands-on program leadership across roadmap, meetings, evidence, and decisions."],
      ["Part-Time / Interim CISO", "$12,000 / month", "More substantial leadership coverage during major build-outs, gaps, or complex assurance work."]
    ],
    changes: ["Security work has a weekly operating rhythm.", "Leaders know what is moving, blocked, and accepted.", "The program can continue while hiring or internal transition happens."]
  },
  {
    slug: "fractional-compliance-officer",
    category: "leadership",
    title: "Fractional Compliance Officer",
    path: "/services/leadership/fractional-compliance-officer",
    seo: "Fractional Compliance Officer | Ongoing Compliance Leadership Without a Full-Time Hire",
    meta: "Fractional Compliance Officer services to lead your compliance program: policies, frameworks, audit readiness, and evidence, led personally by Temi.",
    hero: "Ongoing compliance leadership without a full-time hire.",
    intro: "Cyvelle gives you a leader for the compliance function so frameworks, policies, evidence, exceptions, and remediation are managed as one program.",
    who: ["Organizations with several frameworks and no single compliance owner.", "Companies facing recurring audits or assessments.", "Teams with controls in place but no clear ownership for evidence and remediation."],
    triggers: ["Compliance is spread across IT, security, legal, and operations.", "Audit cycles are reactive and stressful.", "New frameworks are being layered onto existing obligations."],
    solves: "The service turns compliance from a sequence of isolated audits into a managed operating program.",
    does: ["Maintain a unified framework roadmap and register.", "Own the policy lifecycle across frameworks.", "Oversee evidence collection and quality standards.", "Coordinate audit and assessment schedules.", "Track exceptions, remediation plans, and management actions."],
    deliverables: ["Compliance roadmap and framework register", "Policy and control governance", "Evidence management model", "Audit coordination plan", "Exception and remediation tracker"],
    engagement: "Ongoing fractional leadership with a recurring compliance operating cadence and visible backlog.",
    pricing: [
      ["Compliance Advisor", "$5,500 / month", "Guidance and governance for a focused compliance portfolio."],
      ["Compliance Architect", "$8,500 / month", "Program ownership across policies, evidence, exceptions, and audit rhythm."],
      ["Fractional Compliance Lead", "$12,000 / month", "Expanded fractional ownership for multiple frameworks, teams, and assessment cycles."]
    ],
    changes: ["Compliance has one operating owner.", "Evidence quality improves before audit pressure peaks.", "Executives can see obligations, exceptions, and decisions in one place."]
  },
  {
    slug: "soc-2",
    category: "compliance",
    title: "SOC 2 Readiness",
    path: "/services/compliance/soc-2",
    seo: "SOC 2 Readiness Consulting for SaaS Companies | Cyvelle",
    meta: "SOC 2 readiness support from scope and control design through evidence preparation, remediation, and independent CPA firm coordination.",
    hero: "Build the controls and evidence your SOC 2 examination depends on.",
    intro: "Cyvelle helps service organizations move from customer pressure or an unfinished platform to an evidence-ready SOC 2 program.",
    who: ["B2B SaaS, technology, data, and service organizations pursuing a first SOC 2 report.", "Teams moving from Type I to Type II.", "Organizations repairing a readiness program that has stalled."],
    triggers: ["A customer or deal requires SOC 2 before procurement can proceed.", "The automation platform shows gaps without resolving ownership or control design.", "Evidence is inconsistent, late, or unclear to control owners."],
    solves: "Readiness work reduces avoidable findings by testing the control story before the examination period or point-in-time review.",
    does: ["Define product, system, vendor, people, data, and Trust Services Criteria scope.", "Map current controls and evidence to selected criteria.", "Write or refine control language, policies, procedures, owners, and frequency.", "Build an evidence index and validate samples.", "Support auditor selection, request lists, walkthroughs, and management responses."],
    deliverables: ["Scope and criteria decision memo", "Control matrix with owners and frequency", "Evidence index", "Remediation tracker", "CPA handoff package"],
    engagement: "Assessment, implementation support, evidence readiness, remediation management, and CPA firm coordination.",
    pricing: [
      ["Readiness Assessment", "$9,500 fixed", "Current-state SOC 2 gap assessment, scope decisions, and readiness roadmap."],
      ["Type I Readiness", "$20,000 fixed", "Control design, policy build-out, evidence preparation, and Type I handoff."],
      ["Type II Readiness + Observation Support", "$30,000 fixed", "Expanded operating evidence support across the observation period."]
    ],
    changes: ["Your scope and criteria decisions are explicit.", "Control owners know what evidence to retain and when.", "The auditor receives a cleaner, more coherent control story."]
  },
  {
    slug: "iso-27001",
    category: "compliance",
    title: "ISO 27001 Readiness",
    path: "/services/compliance/iso-27001",
    seo: "ISO/IEC 27001 Readiness and ISMS Implementation | Cyvelle",
    meta: "ISO/IEC 27001 readiness and ISMS implementation covering scope, risk, controls, Statement of Applicability, evidence, internal audit, and certification coordination.",
    hero: "Build an information security management system that operates beyond the certification audit.",
    intro: "Cyvelle helps organizations design, implement, and prepare an ISO/IEC 27001:2022 information security management system.",
    who: ["Technology companies and regulated service providers pursuing ISO/IEC 27001 certification.", "Organizations extending an existing SOC 2 program.", "Teams repairing an ISMS that has become documentation-heavy and operationally weak."],
    triggers: ["Certification is required for market access.", "The ISMS scope, context, and risk method are unclear.", "Documentation exists without operating evidence."],
    solves: "ISO readiness connects business context, risk, controls, owners, records, internal audit, management review, and continual improvement.",
    does: ["Define ISMS scope, context, interested parties, and governance.", "Design the information security risk process.", "Build the control framework and Statement of Applicability.", "Prepare policies, operating records, internal audit, and management review.", "Coordinate certification-body planning and handoff."],
    deliverables: ["ISMS scope and context package", "Risk methodology and risk register", "Statement of Applicability", "Policy and evidence set", "Certification readiness roadmap"],
    engagement: "Gap assessment, ISMS implementation, evidence readiness, internal assurance support, and certification coordination.",
    pricing: [
      ["Gap + Scope Assessment", "From $12,500", "Current-state review, ISMS scope, risk method, and readiness roadmap."],
      ["Full ISMS Readiness", "From $40,000", "End-to-end ISMS design, implementation support, evidence, internal audit, and management review preparation."],
      ["Complex / Multi-Entity Readiness", "From $55,000", "Expanded scope across entities, geographies, complex systems, or multiple assurance obligations."]
    ],
    changes: ["The ISMS reflects actual business operations.", "Risk treatment, controls, and evidence become connected.", "Certification readiness is easier to explain and maintain."]
  },
  {
    slug: "pci-dss",
    category: "compliance",
    title: "PCI DSS Readiness",
    path: "/services/compliance/pci-dss",
    seo: "PCI DSS Readiness Consulting | Scope, Controls & Evidence Preparation",
    meta: "PCI DSS readiness consulting for organizations that need scope clarity, control design, evidence preparation, and QSA coordination.",
    hero: "Prepare your payment environment before validation pressure arrives.",
    intro: "Cyvelle helps organizations understand cardholder-data exposure, reduce unnecessary scope, and prepare control evidence for PCI DSS expectations.",
    who: ["Organizations storing, processing, or transmitting cardholder data.", "SaaS and commerce teams unsure where PCI scope begins and ends.", "Companies preparing for SAQ, ROC, or customer-driven PCI review."],
    triggers: ["Payment flows and third-party responsibilities are not clearly documented.", "Segmentation assumptions have not been tested from a governance perspective.", "Evidence expectations changed under PCI DSS v4.x."],
    solves: "PCI readiness clarifies scope, owners, controls, and evidence before validation work becomes urgent.",
    does: ["Map payment flows, systems, vendors, and responsibility boundaries.", "Review segmentation, access, logging, encryption, vulnerability, and policy controls.", "Build evidence expectations by requirement and owner.", "Prioritize remediation and coordinate QSA handoff where needed."],
    deliverables: ["PCI scope and responsibility map", "Gap assessment", "Control and evidence tracker", "Remediation roadmap", "QSA coordination package"],
    engagement: "Scoped readiness assessment with optional implementation and validation coordination.",
    pricing: [
      ["Scope + Gap Assessment", "$9,500 fixed", "Payment-flow mapping, scope analysis, and prioritized readiness findings."],
      ["Readiness Program", "From $20,000", "Control design, evidence readiness, remediation management, and QSA coordination."],
      ["Complex ROC-Level Readiness", "From $35,000", "Expanded support for complex environments, segmentation, multi-party responsibility, and ROC-level preparation."]
    ],
    changes: ["PCI scope is easier to defend.", "Control owners know what validation evidence requires.", "Third-party and QSA discussions become less reactive."]
  },
  {
    slug: "hipaa",
    category: "compliance",
    title: "HIPAA Readiness",
    path: "/services/compliance/hipaa",
    seo: "HIPAA Readiness Consulting | Security Rule Risk Analysis & Compliance Support",
    meta: "HIPAA readiness consulting for organizations that need risk analysis, policy alignment, safeguards, evidence, and remediation support.",
    hero: "Make HIPAA safeguards visible, owned, and evidence-ready.",
    intro: "Cyvelle helps covered entities and business associates understand HIPAA security expectations and build a practical readiness path.",
    who: ["Healthcare, health-tech, and service organizations handling protected health information.", "Business associates responding to customer diligence.", "Teams that need a defensible HIPAA Security Rule risk analysis."],
    triggers: ["PHI workflows have changed faster than safeguards and policies.", "Customers ask for HIPAA evidence the team cannot easily produce.", "Risk analysis exists as a document but not an operating process."],
    solves: "HIPAA readiness connects risk analysis, safeguards, policies, vendors, evidence, and remediation.",
    does: ["Map PHI systems, vendors, roles, and workflows.", "Assess administrative, physical, and technical safeguards.", "Create or refresh HIPAA risk analysis and remediation tracking.", "Align policies, procedures, evidence, and leadership reporting."],
    deliverables: ["HIPAA risk analysis", "Safeguard gap summary", "Policy and evidence roadmap", "Remediation tracker", "Executive readiness memo"],
    engagement: "Risk analysis and baseline readiness with follow-on implementation support where needed.",
    pricing: [
      ["Risk Analysis + Baseline", "From $7,500", "PHI workflow review, safeguard baseline, and priority remediation roadmap."],
      ["Full HIPAA Readiness", "From $15,000", "Expanded policies, evidence model, vendor review, and remediation support."],
      ["Complex / Multi-Entity Readiness", "From $30,000", "Broader HIPAA readiness across multiple entities, products, or regulated workflows."]
    ],
    changes: ["HIPAA risk decisions become visible.", "Safeguards are connected to evidence and owners.", "Customer and leadership conversations become clearer."]
  },
  {
    slug: "hitrust",
    category: "compliance",
    title: "HITRUST Readiness Support",
    path: "/services/compliance/hitrust",
    seo: "HITRUST Readiness Support | Assessment Architecture & Evidence Preparation",
    meta: "HITRUST readiness support for organizations preparing for e1, i1, or r2 assessment paths.",
    hero: "Prepare HITRUST work before the assessment path hardens.",
    intro: "Cyvelle helps organizations select the right HITRUST path, reuse existing controls, and build the evidence architecture needed for assessor review.",
    who: ["Organizations asked for HITRUST by healthcare, enterprise, or partner stakeholders.", "Teams choosing between e1, i1, and r2 assessment paths.", "Companies with SOC 2 or ISO controls they want to reuse."],
    triggers: ["The requested HITRUST level is unclear.", "Evidence is scattered across tools and teams.", "Existing controls are not mapped to the assessment path."],
    solves: "HITRUST readiness turns the assessment path into a practical control, evidence, and ownership plan.",
    does: ["Confirm target assessment path and scope assumptions.", "Map existing controls to HITRUST requirements.", "Identify evidence gaps and remediation priorities.", "Coordinate readiness handoff to external assessor roles."],
    deliverables: ["Assessment path recommendation", "Control-reuse map", "Evidence architecture", "Remediation backlog", "Assessor handoff package"],
    engagement: "Readiness support calibrated to the selected HITRUST path and evidence maturity.",
    pricing: [
      ["e1 Readiness", "From $25,000", "Focused readiness for essential cybersecurity control expectations."],
      ["i1 Assessment + Architecture", "$35,000 fixed", "Moderate-depth readiness architecture, control mapping, evidence model, and remediation plan."],
      ["r2 Architecture + Readiness Management", "From $55,000", "Expanded readiness management for a risk-based r2 assessment path."]
    ],
    changes: ["The HITRUST path is deliberate.", "Reusable controls are identified before new work is created.", "Evidence gaps are visible early."]
  },
  {
    slug: "cmmc",
    category: "compliance",
    title: "CMMC Readiness",
    path: "/services/compliance/cmmc",
    seo: "CMMC Readiness Consulting | NIST 800-171 Control & Evidence Baseline",
    meta: "CMMC readiness consulting for organizations that need a defensible NIST 800-171 and CMMC evidence baseline.",
    hero: "Build a defensible CMMC and NIST 800-171 readiness baseline.",
    intro: "Cyvelle helps defense contractors and suppliers prepare control ownership, evidence, and remediation before CMMC requirements appear in contracts.",
    who: ["Organizations handling FCI or CUI in the defense supply chain.", "Companies responding to NIST 800-171 and SPRS expectations.", "Teams preparing for future CMMC assessment requirements."],
    triggers: ["Contract requirements are approaching before the evidence baseline is mature.", "Controls exist informally but are not owned or documented.", "Leadership needs a prioritized path for remediation decisions."],
    solves: "CMMC readiness establishes current control status, evidence quality, POA&M priorities, and executive decisions.",
    does: ["Map systems, data, contracts, and responsibility boundaries.", "Assess NIST 800-171 control implementation and evidence.", "Develop remediation roadmap and POA&M priorities.", "Prepare for independent assessment where required by the current program."],
    deliverables: ["CMMC/NIST 800-171 baseline", "Evidence readiness tracker", "POA&M and remediation roadmap", "Executive risk memo", "Assessment preparation package"],
    engagement: "Baseline assessment through readiness architecture and complex program support.",
    pricing: [
      ["NIST 800-171 / CMMC Baseline", "$9,500 fixed", "Current-state control and evidence review with prioritized remediation path."],
      ["Readiness Architecture", "From $25,000", "Control design, documentation, evidence expectations, and remediation management."],
      ["Complex Readiness Program", "From $40,000", "Expanded support for multi-system, multi-contract, or assessment-driven environments."]
    ],
    changes: ["Control status becomes defensible.", "Evidence expectations are clearer before assessment.", "Leadership can sequence remediation by contract and risk."]
  },
  {
    slug: "nis2",
    category: "compliance",
    title: "NIS2 Compliance Readiness",
    path: "/services/compliance/nis2",
    seo: "NIS2 Compliance Readiness | Governance, Risk & Evidence Support",
    meta: "NIS2 readiness consulting for organizations that need exposure analysis, governance mapping, control gaps, and implementation planning.",
    hero: "Understand NIS2 exposure across Member State requirements and operating controls.",
    intro: "Cyvelle helps organizations map technical and governance readiness for NIS2 while legal counsel confirms jurisdiction, applicability, and entity classification.",
    who: ["Organizations operating in or serving EU markets.", "Companies that may be essential or important entities under national law.", "Leadership teams connecting cyber risk governance to EU obligations."],
    triggers: ["NIS2 responsibilities differ by Member State and the business lacks a consolidated view.", "Cyber risk management practices are not mapped to legal and operational expectations.", "Incident reporting, vendor risk, and governance evidence are fragmented."],
    solves: "NIS2 readiness translates exposure, controls, governance duties, and evidence needs into a practical implementation roadmap.",
    does: ["Inventory entities, services, systems, suppliers, and relevant EU exposure.", "Map current governance, risk, incident, and supply-chain practices.", "Identify control and evidence gaps.", "Coordinate counsel-reviewed applicability and implementation decisions."],
    deliverables: ["NIS2 exposure and assumptions map", "Governance and control gap assessment", "Supplier and incident-readiness findings", "Implementation roadmap", "Leadership readout"],
    engagement: "Applicability support, gap assessment, and readiness program design with counsel involvement where legal interpretation is required.",
    pricing: [
      ["Applicability + Gap Assessment", "From $9,500", "Exposure assumptions, readiness baseline, gap analysis, and priority roadmap."],
      ["Readiness Program", "From $30,000", "Governance, risk, incident, supplier, and evidence implementation support."],
      ["Multi-Country / Complex Readiness", "From $50,000", "Expanded support across several Member States, entities, service lines, or supplier dependencies."]
    ],
    changes: ["Member State caveats are visible.", "Governance and evidence gaps are prioritized.", "Legal and technical readiness stay connected."]
  },
  {
    slug: "audit-certification-coordination",
    category: "compliance",
    title: "Audit and Certification Coordination",
    path: "/services/compliance/audit-certification-coordination",
    seo: "Audit and Certification Coordination | Evidence, Requests & Handoff Support",
    meta: "Audit and certification coordination for teams preparing request lists, evidence, walkthroughs, findings, and management responses.",
    hero: "Keep audit and certification work coordinated without blurring independence.",
    intro: "Cyvelle helps teams manage request lists, evidence quality, responsibilities, walkthroughs, follow-ups, and management responses.",
    who: ["Organizations entering SOC 2, ISO, PCI DSS, HITRUST, CMMC, or similar assessment cycles.", "Teams managing multiple auditors, assessors, or certification bodies.", "Companies that need evidence discipline but must preserve assessor independence."],
    triggers: ["Request lists arrive faster than owners can respond.", "Evidence quality varies by team.", "Multiple audit cycles collide and leadership lacks a consolidated view."],
    solves: "Coordination gives the audit cycle a single operating rhythm while independent assurance decisions remain separate.",
    does: ["Organize request lists, owners, dates, evidence status, and dependencies.", "Review evidence for completeness before submission.", "Prepare teams for walkthroughs and follow-ups.", "Track findings, management responses, and remediation commitments."],
    deliverables: ["Audit operating calendar", "Evidence request tracker", "Walkthrough preparation notes", "Finding and response log", "Leadership status reporting"],
    engagement: "Single-cycle, multi-stage, or multi-framework coordination support.",
    pricing: [
      ["Single Audit Cycle", "From $7,500", "Coordination for one defined audit, assessment, or certification cycle."],
      ["Multi-Stage / Observation Cycle", "From $12,000", "Support across readiness, observation, fieldwork, follow-ups, and responses."],
      ["Multi-Framework Coordination", "From $18,000", "Consolidated coordination across overlapping frameworks, teams, and evidence requests."]
    ],
    changes: ["Owners, evidence, and due dates are visible.", "Follow-ups become easier to manage.", "Leadership sees audit status before surprises compound."]
  },
  {
    slug: "third-party-risk-management",
    category: "risk",
    title: "Third-Party Risk Management",
    path: "/services/risk/third-party-risk-management",
    seo: "Third-Party Risk Management Consulting | Vendor Risk Program Build",
    meta: "Third-party risk management consulting to build vendor inventory, risk tiers, due diligence, monitoring, and governance.",
    hero: "Make vendor risk visible before customers, auditors, or incidents expose it.",
    intro: "Cyvelle helps organizations build a practical third-party risk program tied to vendor criticality, data exposure, evidence, and business ownership.",
    who: ["Companies with growing vendor ecosystems.", "Teams responding to customer or audit questions about supplier risk.", "Organizations with critical third parties but inconsistent due diligence."],
    triggers: ["Vendor inventory is incomplete.", "Risk reviews are performed only when a customer asks.", "Critical suppliers do not have assigned business owners or monitoring expectations."],
    solves: "TPRM work turns vendor risk into a repeatable governance process instead of a spreadsheet scramble.",
    does: ["Build vendor inventory and tiering model.", "Define due diligence requirements by vendor risk.", "Create questionnaire, evidence, and review workflows.", "Establish exception, renewal, and monitoring cadence."],
    deliverables: ["Vendor inventory and tiering model", "Due diligence workflow", "Evidence and questionnaire standards", "Risk register", "Monitoring cadence"],
    engagement: "Program foundation, build-out, or scaled TPRM support depending on vendor count and risk complexity.",
    pricing: [
      ["Program Foundation", "From $15,000", "Vendor inventory, tiering, due diligence baseline, and governance roadmap."],
      ["Program Build + Priority Backlog", "From $25,000", "Workflow design, templates, backlog, ownership model, and rollout support."],
      ["Scaled / Multi-Entity TPRM", "From $40,000", "Expanded support for larger vendor portfolios, entities, data classes, or regulated obligations."]
    ],
    changes: ["Vendor risk is tiered and owned.", "Due diligence expectations are consistent.", "Supplier evidence supports customer and audit reviews."]
  },
  {
    slug: "incident-response-planning",
    category: "risk",
    title: "Incident Response Planning",
    path: "/services/risk/incident-response-planning",
    seo: "Incident Response Planning | Plans, Tabletop Exercises & Governance",
    meta: "Incident response planning consulting for organizations that need practical plans, roles, escalation, tabletop exercises, and improvement tracking.",
    hero: "Build an incident plan your team can actually run under pressure.",
    intro: "Cyvelle helps organizations clarify roles, escalation paths, communications, legal handoffs, evidence, and leadership decisions before an incident.",
    who: ["Organizations without a current incident response plan.", "Teams preparing for SOC 2, ISO, PCI DSS, HIPAA, or customer requirements.", "Leadership groups that have not practiced incident decision-making."],
    triggers: ["Plans are outdated or copied from a template.", "Nobody knows who declares an incident or escalates to leadership.", "Tabletop exercises reveal confusion but no improvement plan follows."],
    solves: "Incident planning turns response from a static document into practiced governance, communication, and decision flow.",
    does: ["Review or create incident response plan structure.", "Define roles, escalation, communications, and decision rights.", "Design and facilitate tabletop exercises.", "Track lessons learned and remediation actions."],
    deliverables: ["Incident response plan", "Escalation and communications matrix", "Custom tabletop scenario", "After-action report", "Improvement tracker"],
    engagement: "Plan refresh, custom tabletop, or advanced multi-scenario program.",
    pricing: [
      ["Plan Review + Refresh", "From $7,500", "Plan review, role clarification, escalation map, and update roadmap."],
      ["Plan + Custom Tabletop", "From $15,000", "Updated plan plus tailored tabletop exercise and after-action reporting."],
      ["Advanced / Multi-Scenario Program", "From $25,000", "Expanded exercises, leadership scenarios, remediation tracking, and operating cadence."]
    ],
    changes: ["Incident roles are known before pressure hits.", "Leadership decisions are built into the plan.", "Lessons learned become tracked improvements."]
  },
  {
    slug: "cybersecurity-maturity-assessment",
    category: "risk",
    title: "Cybersecurity Maturity Assessment",
    path: "/services/risk/cybersecurity-maturity-assessment",
    seo: "Cybersecurity Maturity Assessment | Executive Risk & Roadmap",
    meta: "Cybersecurity maturity assessment consulting for organizations that need a clear current-state view, risk priorities, and executive roadmap.",
    hero: "See the maturity picture leadership can use to make decisions.",
    intro: "Cyvelle assesses cybersecurity maturity across governance, controls, evidence, ownership, risk, and operating cadence.",
    who: ["Organizations that need an executive current-state view.", "Teams preparing for board, customer, investor, or audit scrutiny.", "Companies deciding which framework or program investment should come first."],
    triggers: ["Leadership sees many findings but no priority model.", "Security work is scattered across tools and teams.", "Maturity claims are not backed by evidence."],
    solves: "The assessment turns a broad security picture into a decision-ready roadmap with owners, dependencies, and business context.",
    does: ["Review governance, risk, policies, controls, evidence, incident readiness, cloud, vendor risk, and reporting.", "Map findings to business impact and assurance needs.", "Prioritize actions by risk, dependencies, and effort.", "Prepare executive reporting for decision-making."],
    deliverables: ["Maturity assessment report", "Priority findings register", "Evidence and ownership map", "90-day roadmap", "Executive risk memo"],
    engagement: "Focused assessment through multi-framework or portfolio-level maturity review.",
    pricing: [
      ["Focused Maturity Assessment", "$9,500 fixed", "Current-state review and executive roadmap for a defined scope."],
      ["Multi-Framework Assessment", "From $15,000", "Assessment across overlapping frameworks, controls, and assurance obligations."],
      ["Multi-Entity / Portfolio Assessment", "From $25,000", "Expanded assessment for several entities, products, teams, or business units."]
    ],
    changes: ["Security maturity is no longer anecdotal.", "Leadership can compare risks and dependencies.", "The next 90 days become easier to govern."]
  },
  {
    slug: "security-for-startups",
    category: "risk",
    title: "Security for Startups",
    path: "/services/risk/security-for-startups",
    seo: "Security for Startups | Buyer-Ready Security Foundation",
    meta: "Security for startups consulting to help early-stage companies answer buyer questions, build baseline controls, and prepare for future frameworks.",
    hero: "Build the security foundation buyers expect before the deal asks for it.",
    intro: "Cyvelle helps startups create a right-sized security baseline that supports enterprise sales, investor diligence, and future compliance paths.",
    who: ["Startups entering enterprise sales.", "Teams receiving long security questionnaires for the first time.", "Founders who need credible controls without overbuilding."],
    triggers: ["A buyer asks for security evidence the team has not prepared.", "Founders are unsure when SOC 2, ISO 27001, or another framework should start.", "Security responsibilities are split informally across engineering and operations."],
    solves: "Startup security support creates a credible baseline, reusable evidence, and a roadmap that does not crush product delivery.",
    does: ["Define baseline security governance, policies, and owners.", "Prepare buyer-ready responses and evidence.", "Prioritize cloud, access, vendor, incident, and data controls.", "Build a future framework roadmap."],
    deliverables: ["Startup security baseline", "Buyer security response kit", "Control and policy starter set", "Evidence folder model", "Framework adoption roadmap"],
    engagement: "Baseline, buyer-ready foundation, or growth-stage security build depending on sales pressure and maturity.",
    pricing: [
      ["Startup Security Baseline", "From $5,000", "Right-sized review, baseline controls, and priority action plan."],
      ["Buyer-Ready Foundation", "$9,500 fixed", "Policies, evidence model, questionnaire support, and control roadmap for enterprise sales."],
      ["Growth-Stage Security Build", "From $15,000", "Expanded support for governance, evidence, cloud, vendor, incident, and framework readiness."]
    ],
    changes: ["Buyer security questions become easier to answer.", "Security work is sequenced for the stage of the company.", "Future compliance programs can reuse the baseline."]
  },
  {
    slug: "cloud-security-consulting",
    category: "risk",
    title: "Cloud Security Consulting",
    path: "/services/risk/cloud-security-consulting",
    seo: "Cloud Security Consulting | Governance, Risk & Control Review",
    meta: "Cloud security consulting for organizations that need architecture review, identity, logging, encryption, configuration, governance, and remediation roadmap support.",
    hero: "Turn cloud posture into governance decisions and clear remediation.",
    intro: "Cyvelle reviews cloud architecture and controls to identify security gaps, ownership issues, and practical hardening priorities.",
    who: ["Organizations running critical workloads in AWS, Azure, Google Cloud, Microsoft 365, or hybrid environments.", "Teams preparing for customer, audit, or regulatory review.", "Companies with fast-moving cloud changes and unclear control ownership."],
    triggers: ["Cloud posture is difficult to explain to leadership or auditors.", "Identity, logging, encryption, and configuration baselines vary by environment.", "Responsibility boundaries across teams and vendors are unclear."],
    solves: "Cloud consulting creates a clear view of posture, governance gaps, and remediation priorities.",
    does: ["Review cloud architecture and responsibility maps.", "Assess identity, access, logging, encryption, data protection, and configuration controls.", "Identify material misconfigurations and governance gaps.", "Provide prioritized hardening roadmap and executive readout."],
    deliverables: ["Cloud security assessment report", "Architecture and responsibility map", "Risk and gap summary", "Improvement roadmap", "Executive readout"],
    engagement: "Scoped assessment with follow-on hardening governance and remediation support.",
    pricing: [
      ["Single-Platform Governance Assessment", "From $7,500", "One primary cloud or SaaS environment with baseline architecture and control review."],
      ["Regulated / Multi-Cloud Assessment", "From $12,500", "Multiple environments or material compliance and evidence requirements."],
      ["Complex Cloud Governance Program", "From $20,000", "Expanded support for multi-account, multi-entity, hybrid, or complex regulated environments."]
    ],
    changes: ["Cloud risks are visible in business terms.", "Control ownership and logging expectations are clearer.", "Hardening work is prioritized instead of scattered."]
  },
  {
    slug: "iso-42001",
    category: "ai",
    title: "ISO 42001 Readiness",
    path: "/services/ai-governance/iso-42001",
    seo: "ISO 42001 Consulting & Readiness | Prepare Your AI Management System for Certification",
    meta: "ISO 42001 readiness consulting for organizations building AI management systems. Scope, risk, lifecycle controls, and certification-body handoff, led personally by Temi.",
    hero: "Prepare for ISO 42001 certification of your AI management system.",
    intro: "ISO 42001 asks how your organization governs AI, not just what your models can do. Cyvelle helps design and implement an AI management system that can be certified.",
    who: ["Organizations building or formalizing an AI management system.", "Teams adding AI governance to existing SOC 2 or ISO 27001 foundations.", "Companies that need evidence across AI design, deployment, monitoring, and retirement."],
    triggers: ["Customers or regulators ask for AI governance evidence.", "AI use has expanded before lifecycle controls matured.", "Existing security controls do not address AI-specific risk and impact."],
    solves: "ISO 42001 readiness formalizes AI scope, governance, risk, lifecycle controls, documentation, and assurance preparation.",
    does: ["Define AIMS scope and governance structure.", "Design AI risk and impact assessment processes.", "Create lifecycle controls for AI systems.", "Prepare documentation, evidence, internal assurance, and certification handoff."],
    deliverables: ["AIMS scope and governance model", "AI inventory", "Risk and impact process", "Lifecycle controls and documentation", "Certification handoff package"],
    engagement: "Fixed-fee or scope-sensitive readiness engagement calibrated to your AI footprint.",
    pricing: [
      ["Gap + AIMS Design Assessment", "From $15,000", "AIMS scope, AI inventory, governance model, gap assessment, and roadmap."],
      ["ISO 42001 Overlay", "$30,000 fixed", "AI management-system design for organizations extending existing governance foundations."],
      ["Greenfield AIMS Readiness", "From $45,000", "End-to-end AI management-system architecture and implementation support."]
    ],
    changes: ["AI governance has a defined management-system structure.", "Lifecycle decisions are documented.", "Certification discussions start from a clearer evidence base."]
  },
  {
    slug: "eu-ai-act",
    category: "ai",
    title: "EU AI Act Readiness",
    path: "/services/ai-governance/eu-ai-act",
    seo: "EU AI Act Readiness Consulting | Map Exposure, Obligations & Evidence",
    meta: "EU AI Act readiness consulting for organizations with AI systems in or affecting the EU. Scope, risk classification, obligations, and roadmap, led personally by Temi.",
    hero: "Understand your EU AI Act exposure and build the evidence your obligations require.",
    intro: "EU AI Act obligations apply in phases, including transparency requirements that began applying on 2 August 2026. Cyvelle helps identify affected AI systems, map obligations, and build a roadmap with legal interpretation confirmed by counsel.",
    who: ["Organizations building, deploying, or using AI systems in or affecting the EU market.", "Product, legal, risk, and technology teams that need a shared AI inventory.", "Companies with provider, deployer, vendor, or downstream obligations to clarify."],
    triggers: ["Legal and product teams have questions about EU AI Act exposure.", "AI systems have not been inventoried or classified.", "Governance evidence is not aligned to system-level obligations."],
    solves: "EU AI Act readiness creates a practical inventory, preliminary classification, obligations map, governance gaps, and implementation roadmap.",
    does: ["Build an inventory of AI systems and EU exposure.", "Assess systems against risk levels and role assumptions.", "Identify applicable obligations and governance needs.", "Provide implementation roadmap and leadership readout."],
    deliverables: ["AI system inventory and classification support", "Obligations map", "Governance gap summary", "Evidence needs model", "Implementation roadmap"],
    engagement: "Scoped consulting engagement centered on inventory, classification support, and readiness planning.",
    pricing: [
      ["Focused Readiness Assessment", "$9,500 fixed", "Defined AI-system inventory, role analysis, preliminary classification, gap analysis, and roadmap."],
      ["Multi-System Readiness", "From $15,000", "Expanded support across several systems, product teams, vendor dependencies, or roles."],
      ["Complex / High-Risk Program", "From $30,000", "Deeper operating support for high-risk, GPAI-related, cross-border, or multi-entity environments."]
    ],
    changes: ["AI exposure becomes visible by system and role.", "Counsel and technical teams work from a shared fact base.", "Evidence needs are sequenced before enforcement pressure increases."]
  },
  {
    slug: "nist-ai-rmf",
    category: "ai",
    title: "NIST AI RMF Alignment",
    path: "/services/ai-governance/nist-ai-rmf",
    seo: "NIST AI RMF Consulting | Align Your AI Program to the NIST AI Risk Management Framework",
    meta: "NIST AI RMF alignment consulting for organizations managing AI risk across the lifecycle. Map practices, close gaps, and improve governance, led personally by Temi.",
    hero: "Align your AI program to the NIST AI Risk Management Framework.",
    intro: "NIST AI RMF provides a voluntary structure for managing AI risk. Cyvelle helps map current practices and close gaps.",
    who: ["Organizations choosing NIST AI RMF as their AI risk reference.", "Teams that need a voluntary framework before formal certification or regulation work.", "Companies integrating AI risk with enterprise governance."],
    triggers: ["Leadership wants a recognized AI risk approach.", "Current AI practices do not map cleanly to Govern, Map, Measure, and Manage.", "AI risk ownership is unclear across product, security, legal, and operations."],
    solves: "NIST AI RMF alignment shows how current practices compare to the framework and what should improve first.",
    does: ["Inventory AI-related processes and controls.", "Map practices to AI RMF functions and categories.", "Identify gaps and improvement opportunities.", "Design ownership, monitoring, and reporting recommendations."],
    deliverables: ["AI RMF alignment map", "Gap and opportunity summary", "Ownership model", "Improvement plan", "Leadership readout"],
    engagement: "Scoped alignment assessment, governance build, or enterprise portfolio program.",
    pricing: [
      ["AI RMF Alignment Assessment", "$9,500 fixed", "Map, Measure, Manage, and Govern baseline with priority improvement roadmap."],
      ["AI Governance Build", "From $18,000", "Governance roles, risk method, inventory workflow, policies, monitoring, and cadence."],
      ["Enterprise / Multi-Use-Case Program", "From $30,000", "Expanded portfolio mapping, reporting, evidence architecture, and cross-framework integration."]
    ],
    changes: ["AI risk work has a recognized structure.", "Ownership gaps become visible.", "Framework alignment can feed ISO 42001, EU AI Act, and enterprise risk work."]
  }
];

const blueprint = {
  title: "The Governance Blueprint",
  path: "/the-governance-blueprint",
  seo: "The Governance Blueprint | Cyvelle",
  meta: "An integrated diagnostic across cybersecurity, compliance, enterprise risk, and AI governance.",
  hero: "See where governance is breaking, what evidence exists, and what leadership should fix first.",
  intro: "The Governance Blueprint is Cyvelle's integrated diagnostic across cybersecurity, compliance, enterprise risk, and AI governance. It connects commitments, systems, AI uses, vendors, risks, controls, owners, evidence, and executive decisions in one current-state view.",
  who: ["Growth-stage and mid-market organizations facing enterprise diligence.", "Companies with overlapping audits, regulatory expansion, AI adoption, or board pressure.", "Teams growing quickly without one integrated governance view."],
  triggers: ["Governance work is spread across teams and frameworks.", "The organization cannot consistently prove what it says in policies and customer responses.", "Leadership sees too many findings and too few decisions."],
  does: ["Map commitments and obligations across customer, regulatory, certification, contractual, policy, board, and responsible-AI requirements.", "Inventory systems, data, AI uses, vendors, owners, dependencies, and affected stakeholders.", "Assess governance current state, risk, evidence, exceptions, incidents, audit readiness, and reporting.", "Build a control-reuse and evidence map.", "Create a GRC Debt register and executive action plan."],
  deliverables: ["Commitment and obligation map", "System, data, AI, and vendor inventory", "Governance current-state assessment", "Control-reuse and evidence map", "GRC Debt register", "Executive risk memo and 90-day roadmap"],
  schedule: ["Week 1: discovery, document intake, and scope confirmation.", "Week 2: interviews, inventory, and current-state assessment.", "Week 3: evidence map, GRC Debt register, and control-reuse analysis.", "Week 4: executive memo, 90-day roadmap, and leadership readout."]
};

const intelligenceTopics = [
  ["SOC 2", "Type I vs Type II, what auditors test, SaaS scoping, and readiness mistakes."],
  ["ISO 27001", "Annex A vs Statement of Applicability, ISMS scope, auditor expectations, and SOC 2 overlap."],
  ["PCI DSS", "Scope and segmentation mistakes, PCI DSS v4.x changes, and QSA review preparation."],
  ["HIPAA / HITRUST", "Risk analysis, evidence reuse, and what HITRUST adds to healthcare assurance."],
  ["CMMC / Defense", "Current CMMC program status, NIST 800-171 evidence, and contract-specific readiness."],
  ["NIS2", "Non-EU exposure, Member State transposition, ISO 27001 overlap, and counsel-confirmed applicability."],
  ["Leadership", "Virtual vs full-time CISO, Part-Time CISO, and Fractional Compliance Officer decision-making."],
  ["AI Governance", "ISO 42001, AI inventory, EU AI Act obligations, and NIST AI RMF alignment."]
];

const pages = {
  "/": renderHome,
  "/services": renderServicesHub,
  "/the-governance-blueprint": renderBlueprint,
  "/pricing": renderPricing,
  "/intelligence": () => renderIntelligence("Intelligence", "Practical buyer education and regulatory radar for governance, security, compliance, and AI oversight."),
  "/intelligence/insights": () => renderIntelligence("Insights", "Evergreen explainers that help teams understand readiness, governance, audit, and leadership decisions."),
  "/intelligence/regulatory-radar": () => renderIntelligence("Regulatory & Standards Radar", "Dated updates for regulatory changes, standard versions, enforcement milestones, and official guidance."),
  "/about": renderAbout,
  "/contact": renderContact
};

Object.values(categoryMeta).forEach((cat, index) => {
  const key = Object.keys(categoryMeta)[index];
  pages[cat.path] = () => renderCategory(key);
});

services.forEach((service) => {
  pages[service.path] = () => renderService(service);
});

function icon(name, label = "") {
  return `<i data-lucide="${name}" aria-hidden="true"></i>${label ? `<span>${label}</span>` : ""}`;
}

function link(path, label, cls = "") {
  return `<a class="${cls}" href="${path}" data-link>${label}</a>`;
}

function cta(label = "Book a 30-Minute Consultation", path = "/contact", extra = "") {
  return link(path, `${icon("CalendarCheck")} ${label}`, `btn primary ${extra}`);
}

function secondary(label, path) {
  return link(path, `${icon("ArrowRight")} ${label}`, "btn secondary");
}

function shell(content) {
  return `
    <header class="site-header">
      <a class="brand" href="/" data-link aria-label="Cyvelle home">
        <img src="${visuals.logo}" alt="Cyvelle Consulting" />
      </a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        ${link("/", "Home")}
        <div class="nav-drop">
          ${link("/services", "Services")}
          <div class="mega">
            ${Object.entries(categoryMeta).map(([key, cat]) => `
              <section>
                <a href="${cat.path}" data-link><strong>${cat.label}</strong></a>
                ${services.filter((service) => service.category === key).map((service) => link(service.path, service.title)).join("")}
              </section>
            `).join("")}
            <div class="mega-utility">
              ${link("/pricing", "View pricing")}
              ${link("/the-governance-blueprint", "Start with The Governance Blueprint")}
            </div>
          </div>
        </div>
        ${link("/the-governance-blueprint", "The Governance Blueprint")}
        ${link("/intelligence", "Intelligence")}
        ${link("/about", "About")}
        ${link("/contact", "Contact")}
      </nav>
      ${cta()}
      <button class="mobile-toggle" type="button" aria-label="Open navigation">${icon("Menu")}</button>
    </header>
    <div class="mobile-panel" hidden>
      ${link("/", "Home")}
      ${link("/services", "Services")}
      ${Object.values(categoryMeta).map((cat) => link(cat.path, cat.label)).join("")}
      ${link("/the-governance-blueprint", "The Governance Blueprint")}
      ${link("/pricing", "Pricing")}
      ${link("/intelligence", "Intelligence")}
      ${link("/about", "About")}
      ${link("/contact", "Contact")}
    </div>
    <main>${content}</main>
    <footer>
      <div class="footer-brand">
        <a class="brand" href="/" data-link><img src="${visuals.logo}" alt="Cyvelle Consulting" /></a>
        <p>Founder-led governance, risk, compliance, cybersecurity, and AI oversight advisory.</p>
      </div>
      <nav aria-label="Footer navigation">
        <span>Company</span>
        ${link("/services", "Services")}
        ${link("/pricing", "Pricing")}
        ${link("/intelligence", "Intelligence")}
        ${link("/about", "About")}
        ${link("/contact", "Contact")}
      </nav>
      <div class="footer-note">
        <span>Start here</span>
        <strong>The Governance Blueprint</strong>
        <p class="fine">Independent audit, certification, legal, testing, software, travel, remediation, and other third-party costs remain separate where applicable.</p>
        ${link("/the-governance-blueprint", "View Blueprint", "text-link")}
      </div>
    </footer>
  `;
}

function hero({ eyebrow, title, copy, primary = true, secondaryPath = "/the-governance-blueprint", secondaryLabel = "Explore the Governance Blueprint", image = false, stats = [] }) {
  return `
    <section class="hero ${image ? "hero-with-visual" : ""}">
      <div class="hero-inner">
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p>${copy}</p>
        <div class="actions">
          ${primary ? cta() : ""}
          ${secondary(secondaryLabel, secondaryPath)}
        </div>
      </div>
      ${image ? `
        <div class="hero-visual">
          <img src="${image}" alt="" />
          <div class="hero-stat-row">
            ${(stats.length ? stats : ["Founder-led", "Public pricing", "Evidence-first"]).map((item) => `<span>${item}</span>`).join("")}
          </div>
        </div>
      ` : ""}
    </section>
  `;
}

function cardGrid(items, cls = "") {
  return `<div class="grid ${cls}">${items.join("")}</div>`;
}

function section(title, body, cls = "") {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return `<section class="section ${cls} section-${slug}"><div class="section-head"><h2>${title}</h2></div>${body}</section>`;
}

function list(items) {
  return `<ul class="check-list">${items.map((item) => `<li>${icon("CheckCircle2")}<span>${item}</span></li>`).join("")}</ul>`;
}

function renderHome() {
  setSeo("Cyvelle Consulting | Governance, Risk, Compliance & AI Governance Advisory", "Founder-led governance, risk, compliance, cybersecurity, and AI governance advisory.");
  const practiceCards = Object.entries(categoryMeta).map(([key, cat]) => `
    <article class="card practice">
      <div class="card-icon">${icon(cat.icon)}</div>
      <h3>${cat.label}</h3>
      <p>${cat.intro}</p>
      ${link(cat.path, "Explore services", "text-link")}
    </article>
  `);
  return shell(`
    ${hero({
      eyebrow: "Founder-led GRC, security, and AI governance advisory",
      title: "Governance, risk, compliance, and AI oversight - led by one accountable practitioner.",
      copy: "Cyvelle Consulting helps growth-stage and mid-market organizations meet enterprise and regulatory expectations across cybersecurity, compliance, enterprise risk, and AI governance. Every engagement is led directly by Temi Oyawoye, a practitioner with more than 20 years of experience.",
      image: visuals.hero,
      stats: ["20+ years experience", "Founder-led delivery", "Clear public pricing"]
    })}
    ${section("What brings organizations to Cyvelle", list([
      "An enterprise security review or questionnaire is slowing a commercial opportunity.",
      "A major contract requires a framework, but scope, evidence, ownership, and the implementation path are unclear.",
      "AI use has expanded before leadership established an inventory, risk process, or decision rights.",
      "Security, compliance, privacy, and risk activities exist, but no one has a shared view of what matters most."
    ]), "compact")}
    ${imageStory()}
    ${section("Practice areas", cardGrid(practiceCards, "four"))}
    <section class="split-band">
      <div>
        <p class="eyebrow">Featured offer</p>
        <h2>The Governance Blueprint</h2>
        <p>The integrated diagnostic across cybersecurity, compliance, enterprise risk, and AI governance. It connects commitments, systems, AI uses, vendors, risks, controls, owners, evidence, and executive decisions in one current-state view and prioritized action plan.</p>
        ${secondary("See the Governance Blueprint", "/the-governance-blueprint")}
      </div>
      <div class="metric-panel">
        <span>$9,500 fixed</span>
        <strong>Four-week standard delivery calendar</strong>
        <p>Built for teams that need a decision-ready baseline before choosing a readiness, leadership, or governance program.</p>
      </div>
    </section>
    ${section("Why Cyvelle", cardGrid([
      valueCard("UserCheck", "Founder-led", "The person you meet in the first conversation remains responsible for the engagement."),
      valueCard("BadgeCheck", "Operating experience", "20+ years building compliance programs and leading audits across financial services, media and entertainment, healthcare, and technology."),
      valueCard("Recycle", "Reuse before rebuild", "Existing controls, policies, evidence, and systems are mapped before new work is proposed."),
      valueCard("ClipboardList", "Decision-ready reporting", "Leadership receives priorities, owners, dependencies, evidence expectations, and decisions to make.")
    ], "four"))}
    ${founderModule()}
  `);
}

function imageStory() {
  return `
    <section class="image-story">
      <figure>
        <img src="${visuals.strategy}" alt="" />
      </figure>
      <div>
        <p class="eyebrow">Evidence before assertion</p>
        <h2>Turn scattered obligations into a current-state view leadership can act on.</h2>
        <p>Cyvelle starts with what already exists: commitments, controls, evidence, owners, vendors, AI uses, systems, and decisions. The result is practical governance work that feels grounded, not decorative.</p>
      </div>
      <figure>
        <img src="${visuals.team}" alt="" />
      </figure>
    </section>
  `;
}

function valueCard(iconName, title, copy) {
  return `<article class="card ${copy ? "" : "problem-card"}"><div class="card-icon">${icon(iconName)}</div><h3>${title}</h3>${copy ? `<p>${copy}</p>` : ""}</article>`;
}

function renderServicesHub() {
  setSeo("Services | Cyvelle Consulting", "Governance support matched to the business trigger, framework, risk, or leadership pressure in front of you.");
  return shell(`
    ${hero({
      eyebrow: "Services",
      title: "Governance support matched to the pressure in front of you.",
      copy: "Start with the service tied to the immediate business trigger, or begin with The Governance Blueprint when several frameworks, risks, teams, and deadlines overlap.",
      secondaryPath: "/pricing",
      secondaryLabel: "View pricing",
      image: visuals.workshop,
      stats: ["4 practice areas", "20 offer pages", "Scope-first pricing"]
    })}
    ${section("Service groups", cardGrid(Object.entries(categoryMeta).map(([key, cat]) => `
      <article class="card practice">
        <div class="card-icon">${icon(cat.icon)}</div>
        <h3>${cat.label}</h3>
        <p>${cat.intro}</p>
        <div class="mini-links">${services.filter((service) => service.category === key).map((service) => link(service.path, service.title)).join("")}</div>
      </article>
    `), "two"))}
    ${section("Executive leadership decision guide", decisionTable())}
    ${section("When needs overlap", `<div class="callout"><h3>The Governance Blueprint</h3><p>Use the Blueprint when the question is not one framework, but how security, compliance, enterprise risk, vendors, AI use, evidence, and leadership decisions connect.</p>${secondary("Explore the Blueprint", "/the-governance-blueprint")}</div>`)}
  `);
}

function renderCategory(key) {
  const cat = categoryMeta[key];
  const categoryServices = services.filter((service) => service.category === key);
  setSeo(`${cat.label} | Cyvelle Consulting`, cat.intro);
  return shell(`
    ${hero({ eyebrow: "Services", title: cat.label, copy: cat.intro, secondaryPath: "/pricing", secondaryLabel: "View pricing", image: categoryVisual[key], stats: ["Practical scope", "Evidence focus", "Executive clarity"] })}
    ${section("Services", cardGrid(categoryServices.map(serviceSummaryCard), "three"))}
    ${key === "leadership" ? section("Decision guide", decisionTable()) : ""}
    ${key === "ai" ? section("Different questions, one governance model", cardGrid([
      valueCard("BadgeCheck", "ISO 42001", "Can your AI management system be governed, evidenced, and prepared for certification?"),
      valueCard("Scale", "EU AI Act", "Which AI systems, roles, risk levels, and obligations apply to EU-facing activity?"),
      valueCard("Map", "NIST AI RMF", "How do current practices map to a voluntary AI risk-management framework?")
    ], "three")) : ""}
  `);
}

function serviceSummaryCard(service) {
  return `
    <article class="card service-card">
      <p class="eyebrow">${categoryMeta[service.category].short}</p>
      <h3>${service.title}</h3>
      <p>${service.hero}</p>
      <div class="price-line">${service.pricing[0][1]}</div>
      ${link(service.path, "View service", "text-link")}
    </article>
  `;
}

function decisionTable() {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Service</th><th>Best fit</th></tr></thead>
        <tbody>
          <tr><td>Virtual CISO</td><td>Ongoing executive direction, strategy, risk decisions, governance, assurance, and reporting.</td></tr>
          <tr><td>Part-Time CISO</td><td>An embedded leader on a defined weekly cadence during a leadership gap, transition, or build-out.</td></tr>
          <tr><td>Fractional Compliance Officer</td><td>Ongoing ownership of frameworks, policies, evidence, audit coordination, and compliance operations.</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

function renderService(service) {
  setSeo(service.seo, service.meta);
  const adjacent = services.filter((item) => item.category === service.category && item.slug !== service.slug).slice(0, 4);
  return shell(`
    ${breadcrumbs(["Home", "Services", categoryMeta[service.category].short, service.title])}
    ${hero({ eyebrow: categoryMeta[service.category].label, title: service.title, copy: `${service.hero} ${service.intro}`, secondaryPath: "#engagement", secondaryLabel: "See what the engagement includes", image: categoryVisual[service.category], stats: service.pricing.map((tier) => tier[1]) })}
    ${section("Who this is for", list(service.who), "compact")}
    ${section("What brings clients here", cardGrid(service.triggers.map((item) => valueCard("AlertCircle", item, "")), "three"))}
    ${section(service.category === "leadership" ? "What this service solves" : "Why this matters", `<p class="lead">${service.solves}</p>`)}
    ${section("What Cyvelle does", list(service.does))}
    ${section("What you get", deliverableGrid(service.deliverables), "strong")}
    ${section("How the engagement works", `<p id="engagement" class="lead">${service.engagement}</p>`)}
    ${section(`${service.title} Pricing`, pricingCards(service.pricing, service), "pricing-band")}
    ${service.changes ? section("What changes", list(service.changes), "compact") : ""}
    ${section("Important scope information", `<div class="callout muted"><p>${independence[service.slug] || "Final scope is confirmed in the Statement of Work. Independent audit, certification, legal, testing, software, travel, remediation, and other third-party costs remain separate where applicable."}</p></div>`)}
    ${section("Why Cyvelle", cardGrid([
      valueCard("UserCheck", "Founder-led delivery", "Temi remains responsible from first conversation through final delivery."),
      valueCard("FileSearch", "Evidence before assertion", "Controls, commitments, owners, and evidence are connected before conclusions are presented."),
      valueCard("Milestone", "Decision-ready output", "The work ends in priorities, owners, dependencies, and leadership decisions.")
    ], "three"))}
    ${founderModule()}
    ${section("Related services", cardGrid(adjacent.map(serviceSummaryCard), "four"))}
    ${finalCta(service.title)}
  `);
}

function breadcrumbs(items) {
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">${items.map((item, index) => `<span>${item}</span>${index < items.length - 1 ? "<b>/</b>" : ""}`).join("")}</nav>`;
}

function deliverableGrid(items) {
  return cardGrid(items.map((item, index) => `<article class="deliverable"><small>0${index + 1}</small><span>${icon("FileText")}</span><h3>${item}</h3><p>A practical work product your team can own, review, and reuse.</p></article>`), "three");
}

function pricingMeta(price) {
  if (price.includes("/ month")) return "monthly";
  if (price.toLowerCase().includes("fixed")) return "fixed fee";
  return "scoped engagement";
}

function tierBullets(service, index) {
  const pools = [
    [
      service.deliverables[0],
      service.deliverables[1],
      "Priority gap and readiness findings",
      "Executive-ready roadmap"
    ],
    [
      "Everything in the first tier",
      service.deliverables[2] || "Operating model design",
      service.deliverables[3] || "Evidence preparation",
      "Implementation and stakeholder coordination",
      "Leadership readout"
    ],
    [
      "Everything in the middle tier",
      "Expanded scope across teams, entities, or systems",
      service.deliverables[4] || "Complex governance support",
      "Remediation sequencing and decision support",
      "Coordination through handoff"
    ]
  ];
  return pools[index].filter(Boolean).slice(0, index === 1 ? 6 : 5);
}

function pricingCards(tiers, service) {
  return `
    <p class="pricing-intro">Fixed-price or published-band proposals are confirmed after scoping. No hourly bank is presented on the website.</p>
    <div class="pricing-grid">
      ${tiers.map((tier, index) => `
        <article class="price-card ${index === 1 ? "popular" : ""}">
          ${index === 1 ? `<span class="badge">Most popular</span>` : ""}
          <h3>${tier[0]}</h3>
          <p class="tier-fit">${tier[2]}</p>
          <div class="price-row"><strong>${tier[1]}</strong><span>${pricingMeta(tier[1])}</span></div>
          <ul class="tier-list">
            ${tierBullets(service, index).map((item) => `<li>${icon("Check")}<span>${item}</span></li>`).join("")}
          </ul>
          ${cta("Book consultation", "/contact", index === 1 ? "accent" : "dark")}
        </article>
      `).join("")}
    </div>
    <p class="fine">Final scope is confirmed in the Statement of Work. Independent audit, certification, legal, testing, software, travel, remediation, and other third-party costs are separate where applicable.</p>
  `;
}

function renderBlueprint() {
  setSeo(blueprint.seo, blueprint.meta);
  return shell(`
    ${breadcrumbs(["Home", blueprint.title])}
    ${hero({ eyebrow: "Integrated diagnostic", title: blueprint.title, copy: `${blueprint.hero} ${blueprint.intro}`, secondaryPath: "#delivery", secondaryLabel: "See delivery calendar", image: visuals.strategy, stats: ["$9,500 fixed", "4-week delivery", "GRC Debt register"] })}
    ${section("Who this is for", list(blueprint.who), "compact")}
    ${section("What brings clients here", cardGrid(blueprint.triggers.map((item) => valueCard("AlertCircle", item, "")), "three"))}
    ${section("What Cyvelle does", list(blueprint.does))}
    ${section("What you get", deliverableGrid(blueprint.deliverables), "strong")}
    ${section("Fixed price", `<div class="blueprint-price"><span>$9,500 fixed</span><p>One standard four-week diagnostic that ends in a current-state governance view, GRC Debt register, executive risk memo, and 90-day roadmap.</p>${cta("Book a 30-Minute Consultation")}</div>`)}
    ${section("Four-week delivery calendar", `<div id="delivery" class="timeline">${blueprint.schedule.map((item) => `<div><span>${icon("CalendarDays")}</span><p>${item}</p></div>`).join("")}</div>`)}
    ${section("Important scope information", `<div class="callout muted"><p>The Blueprint is a diagnostic and action plan. It does not replace legal advice, independent audits, certification decisions, testing, or remediation services that require separate independence or authorization.</p></div>`)}
    ${founderModule()}
    ${finalCta("The Governance Blueprint")}
  `);
}

function renderPricing() {
  setSeo("Pricing | Cyvelle Consulting Governance & Compliance Advisory", "Transparent public pricing for Cyvelle governance, compliance, cybersecurity, and AI governance services.");
  return shell(`
    ${hero({ eyebrow: "Pricing", title: "Transparent pricing, scoped to the work.", copy: "Cyvelle publishes a standard price path for each service so you can calibrate budget before a consultation. The final Statement of Work confirms exact scope based on entities, systems, frameworks, evidence maturity, delivery complexity, and external dependencies.", secondaryPath: "/services", secondaryLabel: "Explore services", image: visuals.office, stats: ["No hourly bank", "Public bands", "SOW confirms scope"] })}
    ${section("Pricing by practice area", Object.entries(categoryMeta).map(([key, cat]) => `
      <div class="pricing-section">
        <h3>${cat.label}</h3>
        ${cardGrid(services.filter((service) => service.category === key).map((service) => `
          <article class="price-list-card">
            <h4>${service.title}</h4>
            <div class="mini-prices">
              ${service.pricing.map((tier) => `<span><b>${tier[0]}</b><strong>${tier[1]}</strong></span>`).join("")}
            </div>
            ${link(service.path, "See scope", "text-link")}
          </article>
        `), "three")}
      </div>
    `).join("") + `
      <div class="pricing-section">
        <h3>The Governance Blueprint</h3>
        <article class="price-list-card featured"><h4>$9,500 fixed</h4><p>Fixed-price exception with a four-week standard delivery calendar.</p>${link("/the-governance-blueprint", "See Blueprint", "text-link")}</article>
      </div>
      <p class="fine">All non-Blueprint services use three public bands. Independent audit, certification, legal, testing, software, travel, remediation, and other third-party costs remain separate where applicable.</p>
    `)}
  `);
}

function renderIntelligence(title, copy) {
  setSeo(`${title} | Cyvelle Consulting`, copy);
  return shell(`
    ${hero({ eyebrow: "Intelligence", title, copy, secondaryPath: "/services", secondaryLabel: "Explore services", image: visuals.laptop, stats: ["Insights", "Radar", "Framework updates"] })}
    ${section("Launch taxonomy", cardGrid(intelligenceTopics.map(([topic, body]) => `
      <article class="card service-card">
        <p class="eyebrow">Topic cluster</p>
        <h3>${topic}</h3>
        <p>${body}</p>
      </article>
    `), "four"))}
    ${section("Regulatory notes", cardGrid([
      valueCard("ShieldAlert", "CMMC", "Phase II was suspended in July 2026 while Phase I self-assessment remains. Future rollout dates belong in the radar."),
      valueCard("BrainCircuit", "EU AI Act", "Transparency obligations began applying on 2 August 2026; legal interpretation remains with qualified counsel."),
      valueCard("Landmark", "NIS2", "NIS2 is transposed into national law and Member State status differs.")
    ], "three"))}
  `);
}

function renderAbout() {
  setSeo("About Cyvelle Consulting | Founder-Led GRC & AI Governance Advisory", "About Cyvelle Consulting and founder Temi Oyawoye.");
  return shell(`
    ${hero({ eyebrow: "About", title: "Governance built by the person who does the work.", copy: "Cyvelle Consulting was founded by Temi Oyawoye because organizations facing enterprise or regulatory pressure deserve direct access to someone who has built compliance programs and conducted audits and assessments, not only advised from the sidelines.", secondaryPath: "/contact", secondaryLabel: "Book time with Temi", image: visuals.workshop, stats: ["CISA", "CISM", "CRISC", "CDPSE", "PCI-QSA"] })}
    ${section("About Temi", `<p class="lead">Temi has spent more than two decades building compliance programs and leading audits across financial services, media and entertainment, healthcare, and technology. The experience is grounded in both sides of the work: designing programs that operate over time, and conducting the assessments and audits that test whether controls, evidence, ownership, and governance hold up in practice.</p><p class="credentials">CISA | CISM | CRISC | CDPSE | PCI-QSA | MSIS</p>`)}
    ${section("How Cyvelle works", list([
      "Begins with current obligations, systems, AI uses, controls, evidence, owners, known risks, and business decisions.",
      "Reuses what works before proposing new work.",
      "Clarifies what does not hold up under buyer, auditor, regulatory, or board scrutiny.",
      "Gives leadership a credible sequence for action."
    ]), "compact")}
    ${section("Independence", `<div class="callout muted"><p>Cyvelle provides advisory, readiness, implementation support, coordination, and fractional leadership. Cyvelle does not perform independent audits, issue certifications, provide legal advice, or act as a penetration tester or assessor requiring separate independence or authorization.</p></div>`)}
  `);
}

function renderContact() {
  setSeo("Contact Cyvelle Consulting | Book a 30-Minute Consultation", "Book a 30-minute consultation with Cyvelle Consulting.");
  return shell(`
    ${hero({ eyebrow: "Contact", title: "Book a 30-Minute Consultation.", copy: "Bring the business trigger, deadline, and current challenge. Temi will confirm whether Cyvelle is the right starting point and what the next decision should be.", primary: false, secondaryPath: "/services", secondaryLabel: "Review services", image: visuals.strategy, stats: ["Business trigger", "Deadline", "Next decision"] })}
    <section class="contact-layout">
      <form class="contact-form">
        <label>Name<input name="name" required /></label>
        <label>Work email<input name="email" type="email" required /></label>
        <label>Company<input name="company" /></label>
        <label>Service of interest<select name="service">${["Not sure yet", blueprint.title, ...services.map((service) => service.title)].map((item) => `<option>${item}</option>`).join("")}</select></label>
        <label>Message<textarea name="message" rows="6"></textarea></label>
        <button class="btn primary" type="submit">${icon("Send")} Send inquiry</button>
        <p class="form-status" role="status"></p>
      </form>
      <aside>
        <h2>Good fit for the call</h2>
        ${list(["A buyer, auditor, regulator, investor, or board deadline is creating pressure.", "You need to understand scope, evidence, ownership, and the next decision.", "Several obligations overlap and you are not sure where to begin."])}
      </aside>
    </section>
  `);
}

function founderModule() {
  return `
    <section class="founder">
      <figure class="founder-mark"><img src="${visuals.mark}" alt="Cyvelle mark" /></figure>
      <div>
        <p class="eyebrow">Founder-led</p>
        <h2>Led by Temi Oyawoye</h2>
        <p>Temi has spent more than two decades building compliance programs and leading audits across financial services, media and entertainment, healthcare, and technology. Every Cyvelle engagement is led personally by Temi from the first conversation through final delivery.</p>
        <p class="credentials">CISA | CISM | CRISC | CDPSE | PCI-QSA | MSIS</p>
      </div>
      <div class="actions">
        ${secondary("About Temi", "/about")}
        <a class="btn secondary" href="https://www.linkedin.com/in/temioyawoye/" target="_blank" rel="noreferrer">${icon("Linkedin")} Connect on LinkedIn</a>
      </div>
    </section>
  `;
}

function finalCta(context) {
  return `<section class="final-cta"><p class="eyebrow">${context}</p><h2>Ready to make the next governance decision visible?</h2><p>Bring the pressure point, deadline, and current state. Cyvelle will help confirm the practical next step.</p>${cta()}</section>`;
}

function notFound() {
  setSeo("Page not found | Cyvelle Consulting", "The requested page could not be found.");
  return shell(`${hero({ eyebrow: "404", title: "This page is not in the current site map.", copy: "Use the services hub to get back to the approved Cyvelle architecture.", primary: false, secondaryPath: "/services", secondaryLabel: "Go to services" })}`);
}

function setSeo(title, description) {
  document.title = title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", description);
}

function render() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const view = pages[path] || notFound;
  document.getElementById("app").innerHTML = view();
  bind();
}

function bind() {
  const header = document.querySelector(".site-header");
  const navDrop = document.querySelector(".nav-drop");
  const servicesLink = document.querySelector(".nav-drop > a");
  const mega = document.querySelector(".mega");
  let menuTimer;

  const setMenuTop = () => {
    const currentHeader = document.querySelector(".site-header");
    if (!currentHeader) return;
    document.documentElement.style.setProperty("--header-bottom", `${Math.ceil(currentHeader.getBoundingClientRect().bottom)}px`);
  };
  const openMenu = () => {
    clearTimeout(menuTimer);
    setMenuTop();
    navDrop?.classList.add("open");
  };
  const closeMenuSoon = () => {
    clearTimeout(menuTimer);
    menuTimer = setTimeout(() => navDrop?.classList.remove("open"), 300);
  };

  setMenuTop();
  servicesLink?.addEventListener("mouseenter", openMenu);
  navDrop?.addEventListener("mouseenter", openMenu);
  mega?.addEventListener("mouseenter", openMenu);
  navDrop?.addEventListener("mouseleave", closeMenuSoon);
  mega?.addEventListener("mouseleave", closeMenuSoon);

  document.querySelectorAll("[data-link]").forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const url = new URL(anchor.href);
      if (url.origin === window.location.origin) {
        event.preventDefault();
        navDrop?.classList.remove("open");
        history.pushState({}, "", url.pathname + url.hash);
        render();
        if (url.hash) document.querySelector(url.hash)?.scrollIntoView({ behavior: "smooth" });
        else window.scrollTo({ top: 0, behavior: "instant" });
      }
    });
  });

  document.querySelector(".mobile-toggle")?.addEventListener("click", () => {
    const panel = document.querySelector(".mobile-panel");
    panel.hidden = !panel.hidden;
  });

  document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.querySelector(".form-status").textContent = "Inquiry captured for handoff. Connect this form to your scheduling or CRM endpoint before production launch.";
  });

  if (window.lucide) window.lucide.createIcons();
}

window.addEventListener("popstate", render);
render();
