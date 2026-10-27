---
name: Tien Huynh — Issued Credential
description: The portfolio as a security-printed credential; every claim carries a serial and a seal that opens its proof.
colors:
  paper: "#E3ECE8"
  paper-2: "#D5E2DC"
  paper-3: "#EEF4F1"
  ink: "#10232B"
  ink-2: "#3B5660"
  engrave: "#0F4C5C"
  seal: "#C1311E"
  foil: "#B8902F"
  uv-paper: "#121029"
  uv-paper-2: "#1B183D"
  uv-paper-3: "#201D48"
  uv-ink: "#ECF8F2"
  uv-ink-2: "#ABBAD8"
  uv-engrave: "#6CF0C2"
  uv-seal: "#FF7A45"
  uv-foil: "#F2D06B"
  field-sand: "#D9C8A2"
  field-sage: "#A9BDB0"
  field-red: "#C1311E"
  field-teal: "#0F4C5C"
  field-ink: "#10232B"
  uv-field-sand: "#2B2347"
  uv-field-sage: "#12302A"
  uv-field-red: "#7A1830"
  uv-field-teal: "#0B2D3A"
  uv-field-ink: "#07061A"
typography:
  display:
    fontFamily: "Archivo, Segoe UI, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 125"
  numeral:
    fontFamily: "Archivo, Segoe UI, sans-serif"
    fontSize: "clamp(6rem, 19vw, 17rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.03em"
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 125"
  title:
    fontFamily: "Archivo, Segoe UI, sans-serif"
    fontSize: "clamp(1.15rem, 1.8vw, 1.45rem)"
    fontWeight: 750
    lineHeight: 1.25
    fontVariation: "'wdth' 108"
  body:
    fontFamily: "Archivo, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.68rem"
    fontWeight: 400
    letterSpacing: "0.04em"
    fontVariation: "'wdth' 85"
  mrz:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "calc((100cqw - 5rem) / 39.6)"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "0.2em"
rounded:
  hairline: "0.3rem"
  plate: "0.5rem"
  control: "0.6rem"
  stamp: "0.7rem"
  tray: "0.8rem"
  photo: "0.9rem"
  document: "22px"
  round: "999px"
spacing:
  "0-25": "0.25rem"
  "0-5": "0.5rem"
  "0-75": "0.75rem"
  "1": "1rem"
  "1-5": "1.5rem"
  "2": "2rem"
  "2-5": "2.5rem"
  "3": "3rem"
components:
  button-stamp:
    backgroundColor: "{colors.seal}"
    textColor: "#FFFFFF"
    rounded: "{rounded.stamp}"
    padding: "0.95rem 1.4rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.engrave}"
    rounded: "{rounded.stamp}"
    padding: "0.95rem 1.4rem"
  button-outline-hover:
    backgroundColor: "{colors.engrave}"
    textColor: "{colors.paper}"
  door:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.photo}"
    padding: "1.1rem 1.25rem 1.2rem"
  door-hover:
    backgroundColor: "{colors.engrave}"
    textColor: "{colors.paper}"
  tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    rounded: "0.55rem"
    padding: "0.5rem 0.95rem"
  tab-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  tab-tray:
    backgroundColor: "{colors.paper-3}"
    rounded: "{rounded.tray}"
    padding: "0.3rem"
  nav-link:
    textColor: "{colors.ink-2}"
    padding: "0.5rem 0.8rem"
  credential-document:
    backgroundColor: "{colors.paper-3}"
    textColor: "{colors.ink}"
    rounded: "{rounded.document}"
  chat-seal:
    backgroundColor: "{colors.seal}"
    textColor: "#FFFFFF"
    rounded: "{rounded.round}"
    size: "3.75rem"
---

# Design System: Tien Huynh — Issued Credential

## Overview

**Creative North Star: "The Issued Credential"**

The site is a security-printed identity document issued to its holder. Every region is printed matter: engraved guilloche rosettes and bands, embedded fibres, microtext rules, dashed field rules, a machine-readable zone in mono, and round rubber-stamp seals that verify a claim and open its proof. Type is set like a document's data page: expanded grotesk caps for names and divisions, a mono for serials, dates, field labels and the MRZ.

The document is not one sheet. Whole sections are full-bleed colour fields (paper, sand, red, teal, sage, ink) that own their width; each field announces itself with a half-disc arch of its own colour rising out of the field above as the visitor scrolls in. A red disc rises behind the hero document, a pinned scene runs a seal down the holder's record, and the red field carries giant count-up figures. Density is that of a filled form: ruled rows, generous margins, no card grid.

Dark mode is the same document under a UV lamp, never an inverted palette: a violet-black ground, fibres and seals that fluoresce, and a UV-only print in the hero that only appears under the lamp. The theme switch reveals the lit document as a circle spreading from the switch.

**Key Characteristics:**
- Security paper ground with fixed engraved bands and fibres behind everything.
- Full-bleed colour fields, each redefining the ink tokens locally, joined by rising half-disc arches.
- Ruled registers (2px ink top rule, dashed engrave row rules) instead of cards.
- Vermilion ink seals as the verification and action mark; they stamp down on arrival.
- Holographic foil on the portrait only, tracking the pointer.
- MRZ strips in mono spanning the full width of the hero document and footer.

## Colors

A cool celadon security paper inked in deep teal-black, with one hot vermilion for seals and a gold foil kept to the hologram; section fields borrow warm sand, sage, red, teal and ink.

### Primary
- **Seal Vermilion** (seal): The stamp ink. Seals, the primary "Chat with my CV" action, the floating chat seal, active nav underline, focus ring, selection, scroll progress bar, checked checkboxes, serial numbers, dates on stamps, lit record lines and the hover tint on register rows.

### Secondary
- **Engraving Teal** (engrave): Line work and secondary emphasis. Guilloche, microtext rules, dashed row rules (at 25–30% mix), outline buttons, door borders, links and the given-name line of the display name. Engrave is also the fill colour on outline-button and door hover.

### Tertiary
- **Hologram Gold** (foil): The foil. The portrait's guilloche overprint and the folded corner of the scene record sheet; under UV it lights the sand field's line work.

### Neutral
- **Celadon Security Paper** (paper): The page ground and the default field.
- **Shaded Paper** (paper-2): Toggle track, image plates' backing.
- **Bright Paper** (paper-3): Raised sheets: the hero document, stamps, tab tray, record sheet.
- **Document Ink** (ink): Text, heavy 2px register rules, the active tab.
- **Faded Ink** (ink-2): Field labels, secondary text, statements.

### Colour Fields
- **Sand** (field-sand), **Sage** (field-sage), **Seal Red** (field-red), **Engraving Teal** (field-teal) and **Ink** (field-ink) own whole sections. Each field redefines `--paper`, `--paper-2/3`, `--ink`, `--ink-2`, `--engrave` and, on dark fields, `--seal` so every component inside reads correctly without its own overrides.
- Under UV each field fluoresces to its own night variant (uv-field-sand violet, uv-field-sage deep green, uv-field-red wine, uv-field-teal, uv-field-ink).

### UV (dark theme)
- **UV Ground** (uv-paper, uv-paper-2, uv-paper-3) is violet-black; **UV Lettering** (uv-ink, uv-ink-2) is a cool near-white; **Fluorescent Mint** (uv-engrave) replaces engrave; **UV Seal** (uv-seal) is a fluorescent orange and seals gain a soft glow; **UV Foil** (uv-foil) brightens to pale gold.

### Named Rules
**The Seal Is the Hot Mark Rule.** Vermilion marks what is verified, active or the primary action. It never becomes a section ground except on the red field, and on the red field the seal token inverts to ink (and to mint under UV) so the stamp still contrasts.

**The Field Owns Its Ink Rule.** A colour field sets the whole token family locally. Components never hard-code colours for a field; they read `--ink`, `--engrave`, `--seal` and the field supplies them.

**The Same Document Under UV Rule.** Dark mode re-lights the same document: same layout, same components, fluorescent equivalents of every token. Nothing is added or removed except the UV-only print.

## Typography

**Display Font:** Archivo (variable width 62–125, weight 100–900), with Segoe UI, sans-serif
**Body Font:** Archivo, with Segoe UI, sans-serif
**Label/Mono Font:** Martian Mono (variable width 75–112.5), with ui-monospace, monospace

**Character:** A wide, heavy grotesk in caps reads like the printed name on an ID card; the condensed mono reads like the machine-printed serials beside it. Width (font-stretch) is a hierarchy axis as much as weight.

### Hierarchy
- **Numeral** (900, clamp(6rem, 19vw, 17rem), 0.9, width 125%, tabular): The lead count on the red field; secondary counts use clamp(3.5rem, 8vw, 7rem).
- **Display** (900, clamp(2.75rem, 7vw, 6rem), 0.92, width 125%, uppercase): The holder's name on the hero document only.
- **Headline** (800, clamp(2rem, 4vw, 3.25rem), 1, width 125%, uppercase): Section division titles; the scene title runs 900 at clamp(1.8rem, 3.2vw, 3rem).
- **Title** (700–750, clamp(1.15rem, 1.8vw, 1.45rem), 1.25, width 105–108%): Register entries, annex titles; featured entries rise to clamp(1.4rem, 2.6vw, 2.1rem) at width 118%.
- **Body** (400, 1rem, 1.65): Statements and descriptions, held to 60–68ch.
- **Label** (400, 0.68rem, 0.04em, uppercase, mono at width 85%): Field labels on every data field, captions, ledger captions.
- **Serial / Date** (mono, 0.8rem, tabular): Serial numbers, dates, stacks, annex letters.
- **MRZ** (mono, size computed from container width, 0.2em tracking): The machine-readable zone; a line always spans its container.

### Named Rules
**The Width Is Rank Rule.** Higher rank is set wider: 125% for name, numerals and divisions, 105–120% for titles and buttons, 85% for labels.

**The Mono Is Machine Rule.** Martian Mono carries only what a machine would print: serials, dates, counts in meta lines, labels, the MRZ, the UV toggle. Prose is never mono.

## Layout

Content sits in a container of `min(1280px, 100% - 2 * clamp(1rem, 4vw, 3rem))`. Colour fields are full-bleed and carry their own vertical padding (clamp(1rem, 4vh, 3rem) top, clamp(6rem, 14vh, 10rem) bottom) so each arch has room to rise into the field above. Sections inside a field use clamp(3rem, 8vh, 5rem) top padding; plain sections clamp(4.5rem, 11vh, 8rem).

The hero document is a two-column data page: photo column minmax(220px, 340px) beside a two-column field grid; doors and actions span the field grid; the MRZ runs the full bottom edge. Asymmetric 4fr / 7fr splits structure the holder and skills; contact flips to 7fr / 4fr. Registers are multi-column rows: serial margin, plate, particulars, seal.

The pinned scene is 320vh tall (260vh under 900px) with a sticky viewport below the header: copy at 5fr, record sheet at 6fr, collapsing to one column on small screens.

Breakpoints: 992px (hero and splits stack), 900px (nav collapses, scene stacks, red disc hidden, arches widen to 60vw), 768px (floating seal shrinks), 640px (field grid, registers and doors go single column).

### Named Rules
**The Ruled Row Rule.** Lists of evidence are registers: a 2px ink rule on top, dashed engrave rules between rows, hover tints the row with 4–5% seal. Never a card grid, except certificates, which are perforated stamps on a sheet.

## Elevation & Depth

Mostly flat, printed matter. Depth comes from stacking paper: the hero document and record sheet lift off the ground with long, soft, negative-spread drop shadows, stamps cast a filtered drop-shadow, and the hero document carries an inset double frame. Shadows are always tinted by `--shadow-color`, never pure black at full strength, and never offset hard.

### Shadow Vocabulary
- **Sheet lift** (`box-shadow: 0 40px 80px -50px var(--shadow-color)`): The hero document; the record sheet uses `0 40px 70px -40px`.
- **Document frame** (`inset 0 0 0 6px var(--paper-3), inset 0 0 0 7px` engrave at 18%): The engraved inner border on the hero document.
- **Stamp drop** (`filter: drop-shadow(0 10px 14px` shadow-color at 45%`)`): Perforated certificate stamps, so the perforation keeps its silhouette.
- **Ink pool** (`0 12px 24px -14px var(--seal)`): Under the stamp button; presses to `0 4px 10px -8px` on active.
- **UV glow** (`drop-shadow(0 0 6px` seal at 60%`)`): Seals under the UV lamp only.

### Named Rules
**The Paper Stack Rule.** Only physical sheets (the hero document, record sheet, stamps, photo) cast shadows. Controls and rows are flat.

## Shapes

Documents have softly rounded corners (22px for the hero document, 0.9rem for the photo and doors); controls are slightly tighter (0.6–0.8rem); thumbnail plates 0.5rem. Seals, the chat seal, the UV toggle, arches and the red disc are perfect circles or half discs. The record sheet has a clipped, folded top-right corner with a foil fold. Certificate stamps have a perforated edge punched in the paper colour. Rules are hairline: 1px solid or dashed at engrave 22–30%, with 2px ink as the heavy rule that heads a register.

### Named Rules
**The Circle Is Official Rule.** Round forms are reserved for seals, arches and the hero disc: anything circular reads as an authority mark.

## Components

### Buttons
- **Stamp (primary):** Seal vermilion with white text (dark ink #1a0d07 under UV), 0.7rem radius, 0.95rem 1.4rem padding, weight 700 at width 112%. A dashed white impression ring sits 4px inside. Hover lifts 2px and tilts -1deg; active presses down (scale 0.96) and the ink pool shrinks.
- **Outline (secondary):** 1.5px engrave border, engrave text; hover fills engrave with paper text.
- **Pill (view more):** The outline button at 999px radius.

### Doors
The two audience doors on the hero: 1.5px engrave border at 45%, translucent paper fill, 0.9rem radius, uppercase width-120% title, mono meta line, arrow in the corner. On hover or focus an engrave panel slides up from below and the text turns paper.

### Tabs and Checkbox
- **Tabs:** A bright-paper tray (0.8rem radius, engrave hairline) holding text tabs; the active tab is an ink pill with paper text (the work filter slides the pill between tabs).
- **Checkbox:** 1.15rem engrave-outlined box; checked fills seal with an inset paper ring.

### Registers (work, education and experience, research)
Rows under a 2px ink rule with dashed engrave dividers. Work entries: mono serial in seal ("No. 003") and label in the margin, a 16:10 image plate with an inset paper frame, a title whose seal underline draws on hover, a mono stack line, and a seal that opens the overview. Awards and papers carry seals instead of a kind label.

### Evidence Stamps
Certificates are postage stamps on a sheet: perforated 6px rim, bright paper inner with an engrave hairline, slight random tilt that straightens on hover, a seal-coloured open badge that scales in on hover.

### Seal (signature component)
An SVG rubber stamp: three concentric rings, mono ring text on a circular path, a heavy width-125% centre word and mono sub-line, roughened by a turbulence ink filter. It stamps down once on arrival (from scale 1.6, blurred and over-rotated, to its tilt, spring 420/22) and settles at 92% opacity. Uses: hero VERIFIED, awards, papers, work overview links, red-field ON FILE, footer.

### Colour Field and Arch (signature component)
A full-bleed section in one tone with faint 6px microprint lines over it. A half disc in the field colour (min(34vw, 460px), 2:1) sits left, right or centre on its top edge; as the field enters, it rises from 60% down and scale 0.35 to full on a spring (90/22).

### Pinned Record Scene
The record sheet lists the holder's education and experience in mono dates; a seal dot travels down it with scroll and lights each passed line with 16% seal. The left heading swaps through three traits with a clip reveal; three bar dots show progress in seal.

### Numbers
On the red field, a lead figure at numeral size spans the row, three smaller figures follow on 1px ink-tinted top rules, each counting up once when seen, with an ON FILE seal at the corner.

### Navigation
Sticky 4rem header in translucent paper with a 12px backdrop blur; gains an engrave hairline once scrolled. Logo is uppercase width 125% with a mono serial. Links are ink-2 at 0.875rem 600; hover and active turn ink and draw a 2px seal underline from the left. Under 900px the list drops down with a clip reveal, rows on dashed rules, active link in seal.

### UV Toggle
A fixed pill in the lower left (moves into the header under 900px): mono uppercase label, paper-2 track, engrave knob that slides and glows under UV.

### Floating Chat Seal
A fixed 3.75rem vermilion disc with a paper gap ring and a seal outer ring; turns -12deg on hover and rolls away when hidden.

## Do's and Don'ts

### Do:
- **Do** put every claim on a field: mono uppercase label above, value beneath, dashed engrave rule under it.
- **Do** let colour fields set the token family; build components only from `--paper`, `--ink`, `--ink-2`, `--engrave`, `--seal`.
- **Do** open new sections with a division: uppercase width-125% title, a short note, and a microtext rule that rules in from the left.
- **Do** use a seal (stamping down on arrival) wherever something is verified or opens its proof.
- **Do** provide the UV equivalent for every new colour, and a reduced-motion path (opacity only) for every scroll or stamp motion.
- **Do** ease with cubic-bezier(0.16, 1, 0.3, 1) for state and reveal transitions.

### Don't:
- **Don't** use vermilion as a decorative fill or section ground outside the red field and the hero disc.
- **Don't** put gold foil anywhere but the portrait hologram and the record sheet's fold.
- **Don't** lay evidence out as a card grid; use ruled registers, or stamps on a sheet for certificates.
- **Don't** cast shadows from controls or rows, and never use hard offset shadows.
- **Don't** set prose in mono, or labels in the grotesk.
- **Don't** hard-code hex colours in components; the overview pages' own accent hexes are drift, not precedent.
