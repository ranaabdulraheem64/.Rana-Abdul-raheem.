---
name: Aether Gemini
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#009eb9'
  on-tertiary-container: '#002f38'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.04em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 22px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system blends **Minimalist Precision** with **Atmospheric Glassmorphism**, engineered specifically for high-frequency cognitive work, complex reasoning, and creative generation. 

### Brand Personality
- **Omniscient & Measured:** Confident without theatrics. Interactions prioritize silent speed, low cognitive drag, and surgical precision.
- **Luminous Depth:** Interface planes feel like obsidian slabs suspended over subtle ambient auroras. Glowing accents signal intelligence, computational energy, and active states.
- **Architectural Utility:** Inspired by advanced developer environments and high-end editorial layouts. Form serves thought flow.

### Emotional Target
The user feels an immediate sense of quiet focus, hyper-competence, and fluidity. The interface recedes entirely, foregrounding the dialogue and generative artifacts.

## Colors

The palette leverages an obsidian bedrock with an atmospheric spectral gradient spanning Indigo, Violet, and Cyan.

### Dark Mode (Default)
- **Canvas Base:** `#020617` (Deep Obsidian / Slate-950)
- **Surface Elevation 1 (Sidebar / Bottom Panels):** `#090D1A` with subtle linear sheen
- **Surface Elevation 2 (Cards / Modals / Input Capsule):** `#0F172A` at 70% opacity with backdrop blur
- **Surface Elevation 3 (Hover States / Tooltips):** `#1E293B`
- **Ghost Borders:** `rgba(255, 255, 255, 0.08)` baseline; `rgba(99, 102, 241, 0.25)` when active/focused
- **Text Primary:** `#F8FAFC`
- **Text Secondary:** `#94A3B8`
- **Text Muted:** `#64748B`

### Light Mode Adaptations
- **Canvas Base:** `#F8FAFC`
- **Surface Elevation 1:** `#FFFFFF`
- **Surface Elevation 2:** `rgba(255, 255, 255, 0.85)`
- **Ghost Borders:** `rgba(15, 23, 42, 0.08)`
- **Text Primary:** `#0F172A`
- **Text Secondary:** `#475569`

### Accent Roles
- **Primary (`#6366F1` Indigo):** Brand anchor, selected navigation states, user prompt bubble tint, primary action triggers.
- **Secondary (`#8B5CF6` Violet):** Reasoning indicators, dynamic generation highlights, badge backgrounds.
- **Tertiary (`#06B6D4` Cyan):** Code citations, real-time streaming cursor, live search/grounding chips.

## Typography

Typography prioritizes extreme legibility across extended reading sessions, high-density prompt logs, and complex code snippets.

- **Primary Typeface (`Geist`):** Delivers clean geometry, crisp render paths on subpixel displays, and a neutral, unpretentious posture.
- **Monospaced Utility (`JetBrains Mono`):** Applied strictly to meta tags, status states, system timestamps, token counters, and markdown code blocks.
- **Editorial Balance:** AI responses use `body-lg` with a loose line-height (`26px`) to reduce ocular fatigue during long answers. Technical lists and conversation trees use `body-md`.

## Layout & Spacing

The structural layout utilizes a high-adaptability fixed/fluid hybrid architecture optimized for uninterrupted conversation streaming.

### Layout Model
- **Left Collapsible Workspace Drawer:** Fixed at `280px` desktop width, collapse-ready to `0px` icon rail on command.
- **Central Chat Stage:** Fluid width with a locked maximum content column of `800px` (or `960px` when artifacts/code splits are triggered).
- **Floating Command Dock (Input Bar):** Anchored to bottom with dynamic clearance (`space-xl` bottom offset), auto-expanding upward up to `240px` before engaging internal scroll.

### Form Factors & Breakpoints
- **Desktop (≥ 1024px):** Dual-pane view (persistent sidebar + centered conversation spine).
- **Tablet (768px - 1023px):** Collapsed sidebar drawer overlay; full-width conversation column bounded by `margin-desktop`.
- **Mobile (< 768px):** Single-column layout. Sidebar becomes a modal sheet. Floating input spans edge-to-edge minus `margin`. Gaps compress to `space-sm` and `space-md`.

## Elevation & Depth

This system treats surfaces as optic layers with physical refractive index and luminous back-bleed rather than relying on blunt drop shadows.

### Elevation Hierarchy
1. **Tier 0 (Canvas):** Pure `#020617` absorbing background.
2. **Tier 1 (Panels & Sidebar):** `rgba(9, 13, 26, 0.75)` with `16px` backdrop-filter blur and a 1px border `rgba(255, 255, 255, 0.05)`.
3. **Tier 2 (Chat Bubbles & Cards):** `rgba(15, 23, 42, 0.65)` layered with subtle top-highlight border: `1px solid rgba(255, 255, 255, 0.1)`.
4. **Tier 3 (Floating Input & Popovers):** `rgba(15, 23, 42, 0.85)` with `24px` blur and an ambient diffuse glow: `0 12px 40px -10px rgba(0, 0, 0, 0.7), 0 0 20px -2px rgba(99, 102, 241, 0.15)`.

### Active Glow Treatment
Streaming and focused elements feature dynamic perimeter bleeding using multi-stop linear gradients along borders (`#6366F1` to `#06B6D4`), producing a subtle kinetic pulse during model processing.

## Shapes

The interface balances soft human curves with technological precision:

- **Input Prompt Bar:** Pill-contoured container (`rounded-xl` / `1.5rem`) creating a welcoming, tactile dock for interactions.
- **Chat Bubbles:** `rounded-lg` (`1rem`) on outer perimeters, with the sender anchor-corner reduced to `0.25rem` to signify origin.
- **Cards & Code Panels:** Structured `rounded-lg` (`1rem`) bounding boxes with matching inner radii (`0.75rem`) for code blocks.
- **Action Pills & Badges:** Full circular rounds (`9999px`) for quick-filter suggestions, token pill tags, and action buttons.

## Components

### 1. Unified Prompt Capsule (Input Dock)
- **Structure:** Multi-line text field wrapped in a high-blur glassmorphic container with horizontal utility actions (model selector, attachment trigger, web search toggle, voice mode, and send pill).
- **Focus State:** Subtle `1px` gradient border transition from slate border to violet-cyan gradient with inner rim light.
- **Send Trigger:** Circular button transitioning from muted slate to solid indigo (`#6366F1`) once input criteria are satisfied.

### 2. Conversation Streams & Message Bubbles
- **User Prompts:** Right-aligned or compact left-aligned with a subtle cool-slate background (`rgba(30, 41, 59, 0.6)`), crisp typography, and instant copy/edit controls revealed on hover.
- **Assistant Responses:** Open-canvas layout (no heavy bounding box) directly on the background plane for an editorial, distraction-free reading experience. Preceded by a subtle radial model spark glyph.
- **Thinking / Chain of Thought:** Collapsible accordions with `JetBrains Mono` headers, subtle left-border cyan rules, and soft dimming to de-emphasize scratchpad logic.

### 3. Empty State & Suggestion Cards
- **Hero State:** Centered minimal greeting with subtle chromatic gradient text fill (`#F8FAFC` to `#94A3B8`).
- **Prompt Cards:** 2x2 grid of glassmorphic cards. Hover actions elevate surface luminance by 8%, shift top-border to glowing indigo, and present an actionable chevron icon.

### 4. Code Blocks & Markdown Elements
- **Code Containers:** Deep slate shell (`#050811`) featuring a top utility strip containing language indicator, execution runtime (if applicable), and one-click copy button.
- **Tables:** Minimal borders (`1px solid rgba(255,255,255,0.06)`), alternating subtle row highlights, and strict tabular figures.
- **Blockquotes:** Indented with a 2px vertical neon violet rule and muted italic text.

### 5. Sidebar & History Matrix
- **Conversations List:** Segmented chronologically (Today, Yesterday, Previous 7 Days).
- **List Items:** Low-profile pills showing title, dynamic action ellipsis on hover, and smooth fade masking for text overflow. Active thread features a soft cyan-indigo indicator bar on the left edge.