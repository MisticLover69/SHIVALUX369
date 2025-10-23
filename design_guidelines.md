# SHIVALUX 369 - Design Guidelines

## Design Approach
**Reference-Based Approach**: Professional service company aesthetic inspired by modern B2B/construction industry websites like BuildDirect and ServiceTitan, combined with the clean card-based layouts of Stripe and the approachable professionalism of Thumbtack.

**Core Principle**: Establish trust and credibility through polished presentation while maintaining accessibility for all three customer segments (residential, business, contractors).

## Design Principles
1. **Credibilidad Profesional**: Every element reinforces expertise and reliability
2. **Segmentación Clara**: Visual differentiation between customer types (color-coding)
3. **Navegación Intuitiva**: Floating header system with smooth transitions
4. **Marca Consistente**: Strict adherence to SHIVALUX 369 brand identity

## Typography System
- **Headings**: IBM Plex Serif (700 weight) - conveys established authority
- **Body**: Inter (400, 600 weights) - modern readability
- **Scale**: h1 (2.6rem), h2 (1.8rem), h3 (1.2rem), body (1rem), small (0.9rem)
- **Line Height**: 1.6 for body text, 1.2 for headings

## Layout Structure
**Spacing Units**: Tailwind scale focused on 2, 4, 8, 12, 16, 20, 24 units
- Section padding: `py-20` (desktop), `py-12` (mobile)
- Container: `max-w-[1100px]` with `px-4` horizontal padding
- Card gaps: `gap-4` to `gap-6` depending on viewport
- Component spacing: `space-y-4` for vertical rhythm

## Component Library

### Navigation System
**Sticky Header** (top: 12px, not edge-to-edge):
- Glassmorphic container: `backdrop-blur-md` with `bg-[rgba(15,16,20,0.9)]`
- Border: `border border-[rgba(120,144,180,0.25)]`
- Pills-style navigation buttons with dual color scheme
- **Collapsed State**: Header fades out, circular FAB appears (48px diameter, bottom-right)
- **Mobile Panel**: Full-screen overlay with centered vertical menu

**Button Styles**:
- `.btn-gold`: Gold-tinted background `rgba(225,177,44,0.10)` with gold border on hover
- `.btn-teal`: Teal-tinted background `rgba(34,197,94,0.10)` with teal border on hover
- Rounded corners: `rounded-lg` (10px)
- Hover: `translateY(-1px)` lift effect

### Hero Section
**Full-width background image** with dark gradient overlay `linear-gradient(rgba(11,11,11,0.6), rgba(11,11,11,0.6))`
- Height: `min-h-[600px]` 
- Center-aligned content with max-width prose
- CTA buttons with blurred backgrounds: `backdrop-blur-sm bg-white/10`
- Primary: Gold button, Secondary: Outline gold

### Service Cards
**Three-column grid** (responsive to single column mobile):
- Card height: `min-h-[400px]` with flex column layout
- Image section: `h-40` object-cover
- Content padding: `p-4` to `p-6`
- Color-coded borders (3px):
  - **Particulares**: `border-[#25c065]` (green)
  - **Negocios**: `border-[#3498db]` (blue)  
  - **Contratistas**: `border-[#8e44ad]` (purple)
- CTA footer: Full-width button matching border color

### Process Steps
**Horizontal timeline grid** (4-5 columns responsive):
- Numbered circles: Large gold number with outline
- Card background: `bg-[#4b3838]`
- Center-aligned icon and text
- Step connector lines between cards (desktop only)

### Portfolio/Trabajos Grid
**Masonry-style grid** (3 columns → 2 → 1):
- Image overlay with caption on hover
- Dark gradient overlay on images: `bg-gradient-to-t from-black/80`
- Caption typography: `text-sm` white text

### Forms
**Contact forms per service type**:
- Field groups with labels above inputs
- Input styling: `bg-[rgba(15,16,20,0.5)]` with `border-[rgba(120,144,180,0.35)]`
- Focus states: Gold border highlight
- Submit button: Full-width gold CTA
- Form sections separated by service type (tabbed or accordion pattern)

## Color Palette Application
**Backgrounds**:
- Primary: `#393731` (dark charcoal)
- Secondary: `#4b3838` (warm dark brown)
- Light panels: `#dbdcc7` (warm cream - use sparingly for contrast sections)

**Text**:
- Primary: `#000000` (on light backgrounds)
- Light: `#ffffff` (on dark backgrounds)
- Muted: `#a5a5a5` (secondary text)

**Accents**:
- Gold: `#e1b12c` (primary brand, CTAs, highlights)
- Green: `#25c065` (particulares service)
- Blue: `#3498db` (negocios service)
- Purple: `#8e44ad` (contratistas service)

## Imagery Guidelines
**Hero Image**: Professional electrical work scene showing team or high-quality installation (full-width, 600-800px height)

**Service Images**: 
- Residential scene (warm lighting, modern home)
- Commercial space (professional office/retail)
- Industrial/construction setting (larger scale work)

**Portfolio Images**: Real project photos showcasing electrical installations, before/after comparisons where applicable

**Styling**: All images have subtle dark overlay when used as backgrounds, slight desaturation filter for cohesive brand feel

## Responsive Behavior
- **Desktop (1024px+)**: Full navigation visible, 3-column grids
- **Tablet (768-1023px)**: Collapsed navigation with FAB, 2-column grids
- **Mobile (<768px)**: Single column, stacked cards, hamburger menu panel

## Animations
**Minimal, purposeful motion**:
- Smooth scroll between sections (`scroll-behavior: smooth`)
- Header collapse/expand: 0.25s ease transition
- Button hovers: 0.2s transform and color changes
- Card entry: Subtle fade-in on viewport intersection (optional enhancement)
- NO distracting animations or excessive parallax

## Accessibility
- Semantic HTML5 structure with proper heading hierarchy
- ARIA labels for navigation and interactive elements
- Focus indicators visible on all interactive elements (gold outline)
- Sufficient color contrast ratios (AAA standard where possible)
- Form labels and error states clearly communicated