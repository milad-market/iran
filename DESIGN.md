---
name: Imperial Heritage
colors:
  surface: '#04132b'
  surface-dim: '#04132b'
  surface-bright: '#2b3953'
  surface-container-lowest: '#000e25'
  surface-container-low: '#0c1b33'
  surface-container: '#112038'
  surface-container-high: '#1c2a43'
  surface-container-highest: '#27354e'
  on-surface: '#d7e3ff'
  on-surface-variant: '#d1c5b4'
  inverse-surface: '#d7e3ff'
  inverse-on-surface: '#223149'
  outline: '#9a8f80'
  outline-variant: '#4e4639'
  surface-tint: '#e9c176'
  primary: '#e9c176'
  on-primary: '#412d00'
  primary-container: '#c5a059'
  on-primary-container: '#4e3700'
  inverse-primary: '#775a19'
  secondary: '#acc7ff'
  on-secondary: '#0a2f63'
  secondary-container: '#28467b'
  on-secondary-container: '#99b5f1'
  tertiary: '#ffb59c'
  on-tertiary: '#5c1900'
  tertiary-container: '#fe8257'
  on-tertiary-container: '#6f2000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea5'
  primary-fixed-dim: '#e9c176'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5d4201'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#acc7ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#28467b'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59c'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#822801'
  background: '#04132b'
  on-background: '#d7e3ff'
  surface-variant: '#27354e'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: '0'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  title-lg:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  calligraphic-accent:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

The brand identity evokes the majesty, intellectual rigor, and artistic mastery of Persian history—spanning from the Achaemenid and Sasanian eras through the Islamic Golden Age to the Safavid and modern epochs. The visual atmosphere balances museum-grade curation with regal gravitas, delivering an experience that feels like opening a modern, illuminated manuscript (*tazhib*). 

The design combines Classical Editorial Grandeur with Subtle Tactile Luxury:
- Deep architectural depth inspired by Isfahan's lapis mosaic tiles and Persepolis stonework.
- Restrained metallic gold leaf detailing applied to borders, rules, and accents rather than flat fill areas.
- High-contrast, bilingual-first hierarchy ensuring Persian (RTL) and English (LTR) display parity with tailored typographic optical weight.
- Atmospheric spotlighting and parchment-tinted surfaces that elevate archival maps, coinage, and monumental architecture.

## Colors

The palette draws directly from Persian architecture, lapis lazuli inlays, and illuminated manuscripts:

- **Primary (`#C5A059` — Antique Leaf Gold):** Applied to primary actions, prominent crests, active states, key timeline callouts, and delicate decorative linework. Accompanied by bright gold highlight (`#E5C158`) for focal nodes.
- **Secondary (`#1B3B6F` — Persian Sapphire Blue):** Used for elevated surfaces, dynasty badge backgrounds, secondary buttons, and contextual groupings.
- **Tertiary (`#C85A32` — Warm Terracotta / Kashan Clay):** Acts as an evocative accent for archaeological tags, heat markers, alert thresholds, and era transitions.
- **Neutral Base (`#0F1E36` — Deep Midnight Lapis):** The foundational dark canvas. Replaces cold digital black with the saturated depth of night over the Zagros mountains.
- **Surface Accents (`#F4EEDD` / `#E8DEC8` — Parchment & Antique Ivory):** Reserved for high-readability body copy, artifact transcriptions, and pristine historical quotes to avoid eye fatigue.
- **Functional States:** Success (`#2D6A4F` emerald glaze), Warning (`#D97706` saffron), Danger (`#8B0000` pomegranate lacquer).

## Typography

The dual-script typographic system ensures visual harmony between Latin and Perso-Arabic scripts:

- **English Pairings:** `Playfair Display` brings scholarly grace, high contrast, and classical authority to hero titles and section headers. `Inter` provides neutral, highly legible modern structure for dense historical essays, chronological data tables, and user interface controls.
- **Persian (فارسی) Pairings:** For production implementations, configure CSS font-family stacks where the Persian script falls back seamlessly to `Vazirmatn` or `Noto Sans Arabic` for body copy and system UI, while utilizing elegant calligraphic display cuts (such as `IranNastaliq` or `Vazirmatn Display`) for headlines.
- **Optical Matching:** Set Persian text 1px larger than its English counterpart (`16px` vs `15px`) and expand Persian line-height by 20–25% to respect ascenders, descenders, and complex diacritics (*tashkeel*, *tanween*).
- **Numerals:** Support both Western Arabic numerals (`1, 2, 3`) and Eastern Persian numerals (`۱, ۲, ۳`) mapped contextually to the active language direction.

## Layout & Spacing

The layout is built on a responsive 12-column dynamic grid system engineered to support both LTR (English) and RTL (Persian) mirror symmetry without content disarray:

- **Desktop (1200px+):** 12 columns with `1.5rem` gutters and a maximum container width of `1360px`. Exterior canvas margins sit at `3rem`.
- **Tablet (768px – 1199px):** 8 columns with `1.25rem` gutters and `2rem` outer margins.
- **Mobile (320px – 767px):** 4 columns with `1rem` gutters and `1.25rem` outer margins.
- **RTL Behavior:** Fluid bidirectional flow via CSS logical properties (`margin-inline-start`, `padding-inline-end`). All structural timelines, narrative flows, and dynasty carousels flip direction naturally when switching between EN and FA.
- **Rhythm & Spacing:** Historical artifacts and architectural photography require breathing room; use `space-xl` and `space-2xl` for section separation to mimic high-end exhibition halls.

## Elevation & Depth

Visual hierarchy leverages atmospheric layers, radial spotlights, and metallic filigree rather than generic dropped shadows:

- **Base Canvas:** `#0F1E36` (Lapis Void) enriched with an ultra-fine grain texture or faint geometric Persian tile tessellation overlay (`opacity: 0.03`).
- **Surface Elevation 1 (Card & Module Foundation):** `#142542` surrounded by a 1px perimeter border of `#C5A059` at `18%` opacity.
- **Surface Elevation 2 (Hover & Active Surfaces):** `#1B3256` layered with a radial spotlight glow: `radial-gradient(circle at top, rgba(197, 160, 89, 0.12) 0%, transparent 70%)`.
- **Surface Elevation 3 (Modals & Overlays):** `#0C182B` with 95% opacity backdrop blur (`16px`) and an outer aura of `0 24px 48px -12px rgba(5, 11, 20, 0.85)`.
- **Foil Highlight:** Critical interactive milestones feature a double border trick: an inner 1px gold outline (`rgba(197, 160, 89, 0.4)`) paired with a sharp 1px outer offset in background midnight navy.

## Shapes

The design embraces an architectural, slightly softened contour (`roundedness: 1` — base radius of `0.25rem` / 4px, `rounded-lg` at `0.5rem` / 8px). 

Sharp geometric discipline reflects stone engravings and lapidary seals:
- **Card Frames:** Crisp 4px corner radii prevent components from looking overly playful, keeping the interface scholarly and grounded.
- **Dynasty Seals & Medallions:** Circular (`rounded-full`) or faceted octagonal motifs inspired by traditional *Shamseh* (sunburst) motifs.
- **Accent Lines & Dividers:** Tapered line terminals that peak at `1px` to `2px` in the center and fade to zero opacity on both ends.

## Components

### Buttons
- **Primary Imperial Button:** Filled with rich antique gold (`#C5A059`), deep navy label text (`#0F1E36`, weight 600), subtle inner top highlight border (`#E5C158`). Hover brings an elevated amber-gold bloom (`box-shadow: 0 0 20px rgba(197, 160, 89, 0.45)`).
- **Secondary Ghost Button:** Transparent background, 1px gold border (`rgba(197, 160, 89, 0.5)`), parchment text (`#F4EEDD`). Hover shifts background to sapphire navy (`rgba(27, 59, 111, 0.4)`).
- **Bilingual Toggle Button:** Segmented control featuring Latin and Perso-Arabic scripts side-by-side with an active gold foil highlight chip.

### Timeline Cards (Museum-Grade)
- Vertical or horizontal spine marked with illuminated chronological nodes.
- Card surface composed of dark sapphire glass (`#142542`), framed by 1px muted gold line.
- Top section contains date badges in Terracotta (`#C85A32`) using bilingual dating (e.g., *550 BCE / ۵۵۰ پیش از میلاد*).
- Artifact thumbnail inset with a 1px inner gold bezel.

### Dynasty Cards
- Large interactive display cards featuring a prominent background watermark of historical dynastic seals (Achaemenid Eagle, Lion and Sun, Safavid Simurgh).
- Lower gradient scrim transitioning into deep lapis to preserve typography contrast.
- Includes expandable reign duration, territorial expanse metrics, and key monarch metadata in structured tabular chips.

### Interactive Map Visualization Cards
- Inset parchment-styled or antique dark-cartography cartographic windows.
- Territory boundary highlights glowing in gold (`#C5A059`) and territory conflict points in terracotta (`#C85A32`).
- Floating HUD controls styled with high-blur frosted glass, 1px gold borders, and minimal icon toggles.

### Chips & Badges
- Compact rectangular badges (`rounded: 4px`) with uppercase or calligraphic label typography.
- Subdued backgrounds (`rgba(27, 59, 111, 0.6)`) matched with colored micro-borders corresponding to historical categorization: Architectural, Military, Literary, or Philosophical.

### Input Fields & Search
- Low-elevation sapphire input container (`#142542`) with ivory placeholder copy.
- Interactive focus triggers a gold border transition and a soft ambient glow (`0 0 0 3px rgba(197, 160, 89, 0.2)`).
- Bi-directional text alignment that dynamically auto-detects Persian vs English keystrokes.

### Checkboxes & Radio Controls
- Gold perimeter boxes with deep navy interiors. Checked state renders a gold leaf fill with a dark navy checkmark or radial ring.