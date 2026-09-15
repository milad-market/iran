# AI Agent Guidelines & UI/UX Pro Max Integration

This project is equipped with the **UI/UX Pro Max** design intelligence skill (`.agents/skills/ui-ux-pro-max/` and `.gemini/skills/ui-ux-pro-max/`).

## Available UI/UX Pro Max Skills
- `ui-ux-pro-max`: Core design intelligence with 79 UI styles, 192 product palettes, 74 font pairings, 119 UX guidelines, and 25 chart types across 22 stacks.
- `design-system`: Intelligent design system generation and tokens.
- `ui-styling`: Advanced layout, spacing, and CSS/Tailwind execution.
- `brand`: Brand identity, motifs, and guidelines.
- `banner-design`: Hero and promotional banners.
- `slides`: Presentation and visual narrative decks.

## CLI Search Utility
You can query UI/UX design intelligence directly via:
```bash
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain>
# or generate full design system recommendation:
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system
```
Domains: `style`, `color`, `chart`, `landing`, `product`, `ux`, `typography`, `icons`, `gsap`, `react`, `web`, `google-fonts`.
Stacks: `react`, `html-tailwind`, `shadcn`, `threejs`, etc.
