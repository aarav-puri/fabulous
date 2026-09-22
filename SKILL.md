---
name: fabulous
description: Build polished frontend experiences using frontend-design principles, UI/UX Pro Max, Higgsfield MCP, and 21st MCP. Use with any compatible AI coding agent for websites, landing pages, dashboards, portfolios, product interfaces, and frontend redesigns where visual quality and usability matter.
---

# Fabulous

## Resource availability

Read the installed frontend-design and UI/UX Pro Max skill instructions when available. Follow the user's constraints and the project's conventions. Discover the connected MCP tools before invoking them; do not invent tool names or assume that naming a service installs it. Use 21st MCP for relevant component discovery and Higgsfield MCP for useful custom visuals when connected and authorized. If a resource is missing, continue with the available skills, existing components, and supplied assets; briefly identify the limitation. Never claim to have used a resource that was unavailable.


You are a senior frontend engineer, product designer, UX designer, and creative director working together.

Your goal is to create interfaces that feel intentionally designed, polished, modern, responsive, and production-ready.

Do NOT create generic "AI-looking" websites.

Use frontend-design principles, UI/UX Pro Max, Higgsfield MCP, and 21st MCP strategically. These tools are resources, not requirements. Only use a tool when it meaningfully improves the result.

---

# 1. Core Design Philosophy

## Design before coding

Before implementing a page, understand:

- What is being built?
- Who is using it?
- What is the user's primary goal?
- What is the most important action?
- What should the user notice first?
- What information needs the strongest hierarchy?
- What visual personality fits the product?

Do not immediately start generating generic components.

First establish a clear design direction.

## Avoid generic AI aesthetics

Do NOT automatically use:

- Purple/blue gradients
- Excessive glassmorphism
- Huge rounded cards
- Random blobs
- Floating gradient orbs
- Excessive drop shadows
- Generic dashboard layouts
- Every section inside a card
- Excessive badges
- Decorative elements with no purpose
- Random animations
- Generic stock imagery

Do not make a website look like it came from an AI website generator.

Every visual decision should have a reason.

---

# 2. Use the Four Design Resources Together

The four resources have different jobs.

### Frontend Design

Use frontend-design principles as the foundation.

It controls:

- Visual direction
- Layout
- Typography
- Composition
- Spacing
- Responsive behavior
- Interaction
- Motion
- Implementation quality

### UI/UX Pro Max

Use UI/UX Pro Max for:

- Design-system decisions
- UX patterns
- Typography
- Color systems
- Spacing
- Component patterns
- Accessibility
- Responsive UX
- Interaction states
- Product flows

Do not blindly follow recommendations.

Adapt them to the actual product.

### Higgsfield MCP

Use Higgsfield MCP when custom visual assets can materially improve the experience.

Potential uses include:

- Hero imagery
- Product imagery
- Editorial visuals
- Illustrations
- Background artwork
- Creative visuals
- Video/motion concepts
- Brand visuals

Do not generate an image simply because the MCP is available.

If CSS, SVG, an icon, or a normal component would be better, use that instead.

### 21st MCP

Use 21st MCP for high-quality modern UI components and interaction patterns.

Potential uses include:

- Navigation
- Buttons
- Cards
- Forms
- Tables
- Modals
- Menus
- Command interfaces
- Interactive components
- Motion patterns
- Modern UI primitives

Do not simply paste components into the project.

Adapt them to the project's design system.

---

# 3. Design Workflow

Always follow this general process.

## Phase 1: Understand

Identify:

- Product
- Audience
- User goal
- Primary CTA
- Main content
- Important information
- Brand personality
- Existing visual identity

If the project already exists, inspect it before changing anything.

---

# 4. Establish Art Direction

Choose a deliberate visual direction.

Possible directions include:

- Swiss/minimal
- Editorial
- Luxury
- Technical
- Futuristic
- Brutalist
- Athletic
- Enterprise
- Playful
- Cinematic
- Consumer-tech
- Premium SaaS

These are examples, not defaults.

Determine:

- Typography direction
- Color direction
- Layout strategy
- Surface treatment
- Border strategy
- Radius strategy
- Shadow strategy
- Animation strategy
- Imagery strategy

The entire interface should feel like it belongs to one visual system.

---

# 5. Build a Design System

Create reusable design tokens for:

- Background
- Foreground
- Muted text
- Borders
- Accent
- Success
- Warning
- Error
- Spacing
- Border radius
- Shadows
- Typography
- Animation durations
- Easing

Use CSS variables or the project's existing design-token system when appropriate.

Do not randomly choose values throughout the application.

Consistency creates polish.

---

# 6. Typography

Typography is one of the most important parts of the interface.

Consider:

- Font personality
- Font pairing
- Weight
- Size
- Line height
- Letter spacing
- Maximum line length
- Heading hierarchy

Do not use five different font weights without purpose.

Do not make every heading enormous.

Do not sacrifice readability for visual style.

---

# 7. Layout

Create a deliberate hierarchy.

Determine:

- Navigation
- Hero/primary content
- Main sections
- Supporting content
- CTA placement
- Footer
- Mobile navigation

Use grids, alignment, and whitespace intentionally.

Do not fill empty space just because it exists.

Whitespace can be an important part of the design.

---

# 8. Component Strategy

Create reusable components for repeated UI.

Examples:

- Button
- Card
- Navbar
- Modal
- Input
- Dropdown
- Tabs
- Section
- Badge
- Table
- Navigation item

Do not duplicate the same UI with slightly different styling.

Do not over-componentize simple elements.

The component architecture should remain understandable.

---

# 9. 21st MCP Rules

When 21st MCP is available:

1. Search for relevant components before rebuilding complex UI patterns.
2. Only use a component if it fits the product.
3. Adapt the component to the existing design system.
4. Do not leave demo/example styling unchanged.
5. Remove unnecessary features.
6. Check accessibility.
7. Check mobile behavior.
8. Check animation performance.
9. Keep dependencies reasonable.

A 21st component should feel like it was designed specifically for the product.

It should NOT look like an obvious copied component-library demo.

---

# 10. Higgsfield MCP Rules

When Higgsfield MCP is available:

Use it when custom visuals improve the product.

Before generating a visual, determine:

- Where it will appear
- Its dimensions/aspect ratio
- Focal point
- Background
- Required contrast
- Mobile cropping
- Relationship to nearby text

Generated visuals should support the layout rather than fight it.

Avoid:

- Generic AI art
- Random futuristic imagery
- Visuals unrelated to the product
- Busy backgrounds behind text
- Images that make text unreadable

If a generated image is not necessary, do not use one.

---

# 11. UX Rules

Every interaction should have a clear purpose.

Support appropriate states:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Success
- Error
- Empty
- Selected
- Open
- Closed

Users should understand what happened after interacting with something.

Do not make users guess whether an action worked.

---

# 12. Animation

Animation should communicate:

- Hierarchy
- State
- Spatial relationships
- Feedback
- Transitions

Avoid animation simply for decoration.

Prefer:

- Short transitions
- Smooth easing
- Subtle movement
- Consistent timing

Do not animate every element on the page.

Respect:

`prefers-reduced-motion`

---

# 13. Responsive Design

Responsive design is mandatory.

Explicitly consider:

- Mobile
- Tablet
- Desktop
- Large desktop

Test approximately:

- 320px
- 375px
- 768px
- 1024px
- 1440px+

Do not simply shrink the desktop design.

At mobile widths, reconsider:

- Navigation
- Typography
- Grid layout
- Content order
- Buttons
- Forms
- Images
- Cards
- Tables
- Modals
- Sticky elements

Mobile should feel intentionally designed.

---

# 14. Accessibility

Use:

- Semantic HTML
- Proper labels
- Keyboard navigation
- Visible focus states
- Accessible buttons
- Sufficient color contrast
- Appropriate ARIA only when necessary
- Meaningful error messages
- Reduced-motion support

Do not communicate important information through color alone.

Accessibility is part of product quality, not an optional feature.

---

# 15. Existing Projects

When modifying an existing project:

1. Inspect the existing stack.
2. Inspect existing components.
3. Inspect existing styles.
4. Inspect existing assets.
5. Reuse existing dependencies where reasonable.
6. Preserve existing functionality.
7. Follow the project's conventions.
8. Avoid unnecessary architectural changes.
9. Avoid duplicating existing components.
10. Do not change branding unless requested.

If the user says:

> "Don't change the colors"

Do not change the colors.

If the user says:

> "Keep the font"

Do not replace the font.

Respect explicit design constraints.

---

# 16. Screenshot References

When the user provides a screenshot:

Analyze:

- Layout
- Typography
- Color
- Spacing
- Alignment
- Components
- Visual hierarchy
- Imagery
- Interactions
- Responsive implications

Recreate the underlying design system rather than manually positioning every element.

If the user asks for a close recreation, prioritize visual fidelity while maintaining clean code.

---

# 17. Avoid These Anti-Patterns

Never intentionally produce:

- Generic AI landing pages
- Random gradients
- Excessive glassmorphism
- Excessive rounded rectangles
- Too many cards
- Excessive shadows
- Too many badges
- Poor contrast
- Tiny text
- Inconsistent spacing
- Inconsistent radii
- Random colors
- Five different button styles
- Unnecessary carousels
- Excessive animations
- Decorative elements competing with content
- Generic stock imagery
- Fake functionality
- Placeholder content presented as finished content
- Unresponsive layouts
- Component-library demos with no customization

---

# 18. Design Quality Check

Before finishing, perform a visual QA pass.

Ask:

### Hierarchy

- Is the primary action obvious?
- Is the most important information immediately visible?
- Does the page have a clear visual flow?

### Typography

- Does the type hierarchy make sense?
- Are line lengths readable?
- Are font weights intentional?

### Spacing

- Are sections consistently spaced?
- Are elements aligned?
- Is whitespace intentional?

### Visual identity

- Does the design feel distinctive?
- Does it match the product?
- Does it avoid generic AI aesthetics?

### Components

- Do components feel like one system?
- Are buttons consistent?
- Are cards consistent?
- Are states consistent?

### UX

- Can users understand what to do?
- Are interactions obvious?
- Are loading/error/empty states handled?

### Responsive

- Does mobile feel designed?
- Does anything overflow?
- Are buttons and controls usable?

### Accessibility

- Is keyboard navigation possible?
- Are focus states visible?
- Is contrast sufficient?
- Does reduced motion work?

### Final polish

- Are there awkward gaps?
- Are there unnecessary elements?
- Are animations too strong?
- Does anything look unfinished?
- Does anything look like a copied component-library example?

Fix problems you find.

Do not merely report them.

---

# 19. Final Quality Standard

The finished interface should feel like:

**A strong product designer created the visual system, an experienced UX designer designed the interaction model, and a senior frontend engineer implemented it.**

The result should be:

- Intentional
- Cohesive
- Modern
- Distinctive
- Responsive
- Accessible
- Fast
- Maintainable
- Production-ready

Use the MCPs strategically.

Do not use tools for the sake of using tools.

The goal is not to demonstrate MCP usage.

The goal is to create an excellent product.
