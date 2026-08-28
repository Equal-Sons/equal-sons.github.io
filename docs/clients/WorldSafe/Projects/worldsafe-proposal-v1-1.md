# Project Proposal: WorldSafe Lead Generation Chat Tool

**Prepared by:** Equal Sons  
**Prepared for:** WorldSafe  
**Date:** May 22, 2025  
**Version:** 1.1

---

## Executive Overview

WorldSafe has an opportunity to convert website visitors into qualified leads by deploying an AI-powered chat tool that engages business managers actively searching for security specialists. This proposal outlines the work required to take an existing prototype to a production-ready service — including a more capable AI model with retrieval-augmented generation (RAG), hardened security, a streamlined lead capture pipeline, and a full deployment through the WorldSafe.life domain.

The result will be a fully operational, branded chat experience that answers prospective customers' questions with expert-level accuracy and automatically notifies WorldSafe's team when a new lead is ready for follow-up.

---

## Deliverables

Upon completion of this engagement, WorldSafe will receive:

- A deployed, production-ready AI chat tool hosted under the WorldSafe.life domain
- A RAG-enabled AI model trained on sourced industry and security content for accurate, expert responses
- A lead capture form that collects and stores prospect contact information
- Automated email notifications to WorldSafe staff when a new lead is submitted
- Security hardening including CAPTCHA, honeypot fields, and rate limiting
- Upgraded LLM model integration for improved speed and response quality
- All application source code and deployment configuration

---

## Project Scope & Work Breakdown

| Task                    | Subtask              | Description                                                            | Hours        |
| ----------------------- | -------------------- | ---------------------------------------------------------------------- | ------------ |
| Prepare AI Model        | RAG Implementation   | Create embeddings from sourced content; upload to Vector Database      | 2            |
|                         | RAG Integration      | Connect Vector Database to LLM                                         | 2            |
|                         | Model Training       | System prompting and fine-tuning to achieve acceptable accuracy        | 5            |
|                         | Quality Assurance    | QA testing to ensure model functions as expected                       | 3            |
| Application Development | Frontend Development | Integrate new backend services into client UI                          | 16           |
|                         | Backend Development  | Build foundational infrastructure layer for app APIs                   | 4            |
|                         | Lead Capture Form    | Create form for WorldSafe backend data submission                      | 2            |
|                         | AI Integration       | LLM model integration in server application                            | 10           |
|                         | Lead Notification    | Capture and email new lead contact data to WorldSafe team              | 2            |
| Implementation          | Deployment           | Deploy production app, API, and database; route through WorldSafe.life | 5            |
| **Total**               |                      |                                                                        | **51 hours** |

---

## Out of Scope

The following items are explicitly **not included** in this engagement. Any work in these areas will require a separate written change order and revised pricing:

- CRM or sales platform integration (e.g. HubSpot, Salesforce)
- Ongoing updates or additions to RAG content after initial deployment
- Mobile application development
- Multi-language support
- Analytics dashboards or reporting tools
- Ongoing content moderation or AI response monitoring
- Post-warranty bug fixes or feature enhancements
- Changes to WorldSafe's existing website or domain infrastructure beyond routing

---

## Project Timeline

This engagement is estimated to complete within **three (3) weeks** from the project start date, contingent on timely client feedback and access to required resources (see Client Responsibilities below).

| Phase | Work | Target Window |
|---|---|---|
| Phase 1 — AI Model | RAG Implementation, Integration, Training, QA | Week 1 |
| Phase 2 — Application | Frontend, Lead Capture, Server Development, Notification | Weeks 1–2 |
| Phase 3 — Deployment | Production deployment and routing | Week 3 |

The project start date is defined as the date Equal Sons receives the signed proposal and initial deposit.

---

## Pricing & Payment Terms

| Item                   | Amount        |
| ---------------------- | ------------- |
| Billable Rate          | $100 / hour   |
| Estimated Hours        | 51 hours      |
| **Total Project Cost** | **$5,100.00** |

**Payment Schedule:**

- **Initial deposit ($2,550)** due upon signed proposal to initiate work
- **Remaining balance ($2,550)** due upon project completion and delivery

Invoices are due within 14 days of issuance. Late payments are subject to a 1.5% monthly fee. Equal Sons reserves the right to pause work on accounts with outstanding invoices.

---
## Assumptions & Risks

### Known Risks

**Latency from RAG:** Adding retrieval-augmented generation introduces an additional processing step per response. This is mitigated by upgrading to a faster LLM model, but some latency tradeoff between speed and output quality is expected and accepted as part of this architecture.

**Security Footprint:** The frontend chat interface does not require user authentication, which broadens the attack surface. Equal Sons will implement industry best practices including CAPTCHA verification, honeypot fields, and rate limiting to reduce this risk. No security measure is guaranteed to be exhaustive.

**AI Hallucinations:** Large language models can produce inaccurate or fabricated responses. Equal Sons will apply system prompting, RAG grounding, and quality assurance testing to minimize this risk. However, the accuracy of AI-generated responses cannot be fully guaranteed. WorldSafe is advised to implement human review processes for outbound lead communications.

**General Software Disclaimer:** All software may contain bugs. Equal Sons warrants repairs for defects in the delivered work for a period of three (3) months following the deployment date (see Warranty section below).

---

## Third-Party Services & Hosting Costs

This application is built on top of third-party services that are required for it to function. WorldSafe is responsible for all associated hosting and service fees, including but not limited to:

- Cloudflare (hosting, Workers, and infrastructure)
- LLM API provider (e.g. OpenAI or Anthropic)
- Embedding/vector database provider
- Transactional email service

At anticipated usage levels, these costs are expected to be nominal or free under available free tiers. Equal Sons will recommend specific providers and configurations, but WorldSafe retains full ownership of all third-party accounts.

Equal Sons is not responsible for outages, pricing changes, policy changes, or service interruptions by any third-party provider.

---

## Client Responsibilities

Timely delivery of this project depends on WorldSafe fulfilling the following responsibilities:

- Provide access to the WorldSafe.life domain and DNS management for deployment
- Supply or approve the source content to be used for RAG embeddings
- Create accounts for required third-party services (or authorize Equal Sons to create them on WorldSafe's behalf)
- Provide timely review and feedback at each project phase (within 2 business days of delivery)
- Designate a single point of contact for approvals and communications

Delays caused by WorldSafe's failure to meet these responsibilities may result in timeline extensions and are not the liability of Equal Sons.

---

## Warranty

Equal Sons warrants that delivered software will function materially as described in this proposal for a period of **three (3) months** following the deployment date.

**Covered under warranty:**
- Defects or bugs in code delivered by Equal Sons under this engagement
- Failures caused by Equal Sons' implementation choices

**Not covered under warranty:**
- Issues caused by WorldSafe-initiated changes to the codebase, configuration, or third-party accounts
- Outages or failures attributable to third-party service providers
- Feature requests or enhancements not described in this proposal
- Work performed after the warranty period

Warranty repairs will be completed at no additional cost. Work outside the warranty scope or timeline is considered a new engagement.

---

## Intellectual Property

Upon receipt of final payment, WorldSafe will own all custom application code and configurations delivered under this engagement. Equal Sons retains the right to reuse general methodologies, architectural patterns, and non-proprietary frameworks developed or employed during this project.

---

## AI Output Disclaimer

The chat tool delivered under this engagement uses a large language model (LLM) to generate responses to user queries. Equal Sons does not warrant the accuracy, completeness, or appropriateness of any AI-generated outputs produced by the deployed application. WorldSafe assumes full responsibility for monitoring the deployed tool's responses and is advised to implement human review processes for any communications with prospective leads.

---

## Change Orders

Any work outside the scope defined in this proposal requires a written change order agreed upon by both parties prior to work beginning. Change orders will include a revised scope description, additional hours estimate, and updated pricing. Verbal agreements do not constitute an approved change order.

---

## Acceptance

By signing below, both parties agree to the terms outlined in this proposal.

| **Equal Sons**                                               | **WorldSafe**                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_      | Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_      |
| Name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_     | Name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_     |
| Title:  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ | Title:  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| Date: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_   | Date: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_   |

---

*Equal Sons — Build. Lead. Share.*
