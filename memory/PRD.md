# Logix Finance & Investment — PRD

## Original Problem Statement
Reference site: logixfinanceandinvestment.com.
Build a website using the attached PDF brief ("Website Content Pack" for an Indian NBFC
preparing for an RBI audit). Design must be clean, minimal, modern and finance-industry
appropriate. Every company-specific placeholder must be rendered as `xxxxxxxx` (user
will edit later).

## User Choices (gathered via ask_human)
- Scope: Full site — all pages including all 10 regulatory pages.
- Backend: Static site (frontend only).
- Placeholders: literal `xxxxxxxx` per user instruction.
- Design: "Surprise me with a refined, distinctive NBFC palette."
- Reference: Design fresh from the PDF brief (do not match logixfinanceandinvestment.com).

## Architecture
- React (CRA + craco) · React Router v7 · Tailwind v3 · shadcn/ui (only conventions).
- No backend changes (existing FastAPI scaffold left untouched).
- Pure SPA, static content. No DB writes.
- Fonts via Google Fonts in `public/index.html`: Cormorant Garamond, Manrope, JetBrains Mono.
- Design tokens & utility classes in `src/index.css`.

### Design System
- Palette: Bone White `#F9F8F6` · Deep Forest `#1A2421` · Terracotta `#B85C38` · Muted Sage Grey `#64746C` · Border `#E5E3DB`.
- Typography: Cormorant Garamond (display/serif headings, italic flourishes), Manrope (body), JetBrains Mono (`xxxxxxxx` placeholders).
- Components: flat 1px borders, sharp corners (`rounded-sm`), subtle hover translate, no heavy shadows.

### File Map
- `src/App.js` — Router with 15 routes wrapped in `SiteLayout`.
- `src/components/layout/{Header,Footer,SiteLayout}.jsx`
- `src/components/common/{Placeholder.jsx,PolicyLayout.jsx,ScrollToTop.jsx}`
- `src/pages/{Home,About,LoanProducts,HowItWorks,Contact}.jsx`
- `src/pages/policies/` — 10 regulatory pages

## What's Been Implemented (Dec 2025)
- Header (sticky, scroll-aware border, desktop nav + mobile menu)
- Footer (4 columns: Brand+contact, Explore, Regulatory, Legal; CIN/RBI/GSTIN strip)
- Home: hero with stats, 4-pillar trust strip, 4-product asymmetric grid, "Balance, by design" trust split with company snapshot, 7-step preview, founder quote, contact CTA
- About: hero, Vision/Mission, 4-value grid, 3-leader cards, company snapshot table
- Loan Products: 4 detailed product blocks (specs, eligibility, documents) + disclosure bar
- How It Works: vertical 7-step timeline + cooling-off / KFS callouts + CTA
- Contact: 2-column layout with multi-card contact info + enquiry form (local-state) + Google Map placeholder + Grievance Officer details
- Reusable `PolicyLayout` with sticky Table of Contents (scroll-spy) + breadcrumbs + last-updated + .prose-policy long-form typography
- 10 regulatory pages: Interest Rate Policy, Rates Fees & Charges, Fair Practices Code, Grievance Redressal (with 3-level matrix card), KYC & AML, Privacy Policy, Terms & Conditions, Refund & Cancellation, Disclaimer, Regulatory & Statutory Disclosures
- Placeholder system: `<X />` component wraps every `xxxxxxxx` in a monospace muted badge so they read as intentional variables awaiting user edit
- Smooth route transitions (ScrollToTop), data-testid on all interactive elements
- E2E tested via testing_agent_v3 — 15/15 routes pass, 0 console/page errors, 100% frontend pass

## Personas
- Loan applicants (individuals / small business owners in India)
- RBI auditors / regulatory reviewers
- Lending partners (LSPs, banks)
- Site owner editing `xxxxxxxx` placeholders before launch

## Prioritized Backlog
### P1 — Pre-launch (user task)
- Replace all `xxxxxxxx` placeholders with verified company data
- Embed real Google Map iframe on /contact
- Add unique `<title>` per route (currently shared title)

### P2 — Enhancements
- Online "Apply Now" multi-step form backed by FastAPI + MongoDB
- Loan EMI calculator widget on /loan-products
- Customer login portal: download KFS, view EMIs, raise grievance ticket with ref ID
- Blog / News section for RBI updates
- Multi-language toggle (Hindi + regional)

### P3 — Nice to have
- Animated hero (subtle parallax on stones image)
- Dark mode variant
- PDF export of policies for offline compliance review
