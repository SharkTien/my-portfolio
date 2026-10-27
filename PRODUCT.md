# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally (confirmed by the owner, 2026-10-27):

- **AI hiring teams**: recruiters and tech leads screening an AI Engineer. They skim for shipped AI systems, research, competition results and education, then download the CV, ask the CV chatbot, or make contact.
- **Freelance web clients**: small businesses that need a website. They look for sites already delivered (Loptamlyhoc, Navis Danang, BabooHouse, Leximco, Ttcenter, Utopia, Center2, AuraVibe) and a way to get in touch.

## Product Purpose

Personal portfolio of Huynh Viet Tien ("Felik"), AI Engineer and developer based in Ho Chi Minh City. Success: either audience finds the work relevant to them within a minute and reaches a contact channel, the CV, or the CV chatbot.

## Positioning

An AI engineer who ships both research-grade AI (medical VQA thesis, multimodal video retrieval, published SHREC 2025 work) and production product AI (Wistudi XP Video agent and Flow AI), and who also builds and delivers client websites. The CV chatbot lets a visitor interrogate the CV instead of reading it.

## Operating Context

React 18 + Vite single-page app, HashRouter, deployed to GitHub Pages under `/my-portfolio/`. Routes: portfolio home, `/chat` (AI chatbot about the CV), `/project/:slug` (per-project overview pages; Wistudi has a full landing). Content lives in component data arrays (`src/components/work/Data.jsx`, qualification, certificates, research).

## Capabilities and Constraints

Must keep working (owner, 2026-10-27): the CV chatbot page and floating chat entry, the project overview pages with their cover-image transition, and the light/dark theme switch. The whole structure and visual identity may be replaced; all content must still be represented.

## Brand Commitments

- Name: Huynh Viet Tien; nickname "Felik"; logo text "Tien Huynh".
- Portrait: `src/assets/avatar.jpg` (studio headshot, light grey backdrop, black suit, white shirt) replaces the illustrated hero portrait.
- Owner explicitly rejects a result that looks like a template portfolio.

## Evidence on Hand

- Projects with images, links and descriptions: `src/components/work/Data.jsx` (21 entries).
- Research: SHREC 2025 ROOMELSA (published, Computers & Graphics / JVCI link), SoICT 2025 workshop paper.
- Education & experience timeline, awards, certificates with images: `qualification.jsx`, `Certificates.jsx`, `src/assets/cert/`.
- CV PDF: `src/assets/HUYNH VIET TIEN_AI_Engineer.pdf`.
- Wistudi screenshots and recordings: `src/assets/projectPic/wistudi/`.
- No testimonials, client quotes or metrics beyond those listed; do not invent any.

## Product Principles

1. Proof before claims: show shipped work and real results, not adjectives.
2. Both audiences find their door fast: AI work and client sites are each one step away.
3. Personality survives the polish: "Felik" stays human, not a paper CV.
4. Every interactive extra (chatbot, transitions) must keep the content readable.
