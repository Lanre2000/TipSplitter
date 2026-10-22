# Design System: TipSplitter

## 1. Visual Theme & Atmosphere

**Design intent:** a focused, reassuring mobile utility that makes splitting a bill feel effortless. The interface should feel like a well-made financial tool: crisp, calm, tactile, and precise—not like a banking dashboard or a generic calculator template.

- **Density:** 4/10 — airy enough to scan at a glance, with only the controls needed for the calculation.
- **Variance:** 5/10 — a confident left-aligned hierarchy with a slightly offset result area; avoid rigid stacks of identical cards.
- **Motion:** 4/10 — brief, purposeful feedback that reinforces selection and calculation without slowing down a quick task.
- **Primary experience:** one screen, one obvious workflow: enter a bill, choose a tip, read the result.
- **Platform:** mobile-first iOS and Android, designed for Flutter implementation.
- **Visual signature:** a warm-white canvas, charcoal typography, and one restrained green accent associated with a completed calculation. Use typography, spacing, and fine dividers—not decorative illustrations—to create character.
- **Content tone:** plain, helpful, and specific. Prefer “Bill amount,” “Tip amount,” and “Total” over marketing copy.

The screen must remain useful with the keyboard open. Keep the primary input and tip choices easy to reach, and let the result region move naturally in the layout rather than overlap other controls.

## 2. Color Palette & Roles

Use this single, consistent palette in light mode. Do not introduce extra accent colors for individual tip percentages.

- **Paper Canvas** (`#F7F8F6`) — primary app background; a subtle neutral-white base.
- **Surface White** (`#FFFFFF`) — input surface and the main result surface.
- **Charcoal Ink** (`#202522`) — primary text, totals, labels, and high-emphasis icons. Never use pure black.
- **Slate Text** (`#69716B`) — helper text, supporting labels, and secondary information.
- **Quiet Border** (`#DDE2DC`) — input outlines, dividers, and restrained component boundaries.
- **Tip Green** (`#397A58`) — the sole accent; use for the selected tip rate, primary action, focus state, and the final total emphasis. Keep saturation restrained.
- **Soft Green Wash** (`#EAF2EC`) — subtle selected-state background behind the active tip option or result detail; it is a tint of the single accent, not a second accent.
- **Error Red** (`#B54747`) — semantic validation only; never use as decoration.

### Color rules

- Maintain strong text contrast and never communicate selection through color alone.
- Keep the majority of the screen neutral; green should guide attention rather than paint every component.
- Do not use gradients, neon colors, purple/blue neon aesthetics, glow effects, or rainbow tip buttons.
- In dark mode, if implemented later, define a deliberate neutral dark palette and preserve the same semantic roles. Do not simply invert every color.

## 3. Typography Rules

- **Display and result figures:** `Outfit`, weight 600–700. Use controlled, compact headings and clear numerical hierarchy.
- **Body and controls:** `Outfit`, weight 400–600. Use comfortable line height and plain, direct labels.
- **Currency figures:** `Geist Mono`, weight 500–600, for aligned, easy-to-compare amounts.
- **Fallbacks:** use a clean sans-serif fallback if these fonts are unavailable. Do not use `Inter` as the designed primary font.
- **Currency formatting:** display two decimal places for monetary results (for example, `₦2,500.00` where the currency is NGN). Keep currency selection locale-aware; do not hard-code the naira symbol if the app is intended for international use.
- **Hierarchy:** screen title 24–28sp; result total 32–40sp; section labels 14–16sp; input value 22–26sp; supporting text 12–14sp. Respect platform accessibility text scaling.
- **Legibility:** body text should have relaxed line height and short line lengths. Avoid thin font weights for numbers or labels.

Never use oversized, all-caps headings, decorative serif fonts, or multiple competing typefaces.

## 4. Component Stylings

### Screen header

- Align content to the leading edge with a compact top inset.
- Use “TipSplitter” as the product title and a concise supporting line such as “A clear total, in seconds.”
- The header must not dominate the calculator. Avoid a large marketing hero, illustrations, or unnecessary navigation.
- If a reset action is present, use a small text or icon button with an accessible label; never make it visually compete with the calculation.

### Bill amount input

- Place the persistent label **Bill amount** above the field; do not rely on placeholder text as the only label.
- Use a white surface, 12–16px corner radius, and a quiet 1px border.
- Give the numeric amount a clear 22–26sp type size and enough horizontal room for long values.
- Use a numeric keyboard with decimal support. Respect the user's locale for decimal separators.
- Show currency as a clear prefix or suffix only when the currency is known. Avoid ambiguous symbols.
- Focus state: 2px Tip Green outline or accessible focus indicator, without an outer glow.
- Error state: place a concise message directly beneath the field, such as “Enter a valid amount greater than zero.” Preserve the user's input so it can be corrected.

### Tip percentage selector

- Present three compact, equally sized choices: **10%**, **15%**, and **20%**. These are the only equal-width options in the primary workflow; do not expand the screen into a row of feature cards.
- Use rounded rectangular controls (12–14px radius), minimum 48px height, and consistent gaps.
- Unselected options: white or canvas surface, charcoal label, quiet border.
- Selected option: Soft Green Wash background, Tip Green border, and a visibly stronger label. Include a checkmark only if it remains visually quiet and improves clarity; selection must still be understandable without it.
- Default to **15%** on first launch unless product requirements specify otherwise. Keep the selected value visually and semantically clear.
- Press feedback should be a subtle scale/translation change and a quick color transition—not a bounce-heavy animation.

### Calculation action

- Use one full-width primary button labeled **Calculate tip** only if calculation is explicitly user-triggered.
- If the product calculates instantly as the user types or changes the tip, do not add a redundant Calculate button. Instead, keep the result live and clearly indicate when the bill amount is invalid.
- Primary button: Tip Green fill, white label, 14–16px radius, minimum 48px height, and a tactile pressed state.
- Disabled state: visibly muted, still readable, and not mistaken for an active control.
- Avoid multiple competing primary actions.

### Result area

- Make the final total the most visually prominent output, in its own calm white surface or separated result region.
- Use a small label **Total bill**, followed by a large monospaced currency value.
- Show **Bill amount** and **Tip amount** as supporting rows with aligned labels and values. Use a thin divider only where it improves scanning.
- If a split-bill feature is added later, show the per-person amount as a separate, clearly labeled result; do not squeeze it into the core result hierarchy.
- Do not use a large green card, heavy shadow, decorative chart, or celebratory animation. The result should feel precise, not gamified.

### Validation and empty state

- Before a valid bill amount is entered, show a neutral prompt such as “Enter your bill to see the total.”
- Empty, non-numeric, negative, and invalid values must never crash the app or display misleading totals.
- Keep error text inline and actionable. Avoid modal alerts for simple input corrections.
- During ordinary calculation, no loader is needed. If future work adds asynchronous operations, use a skeleton that matches the final layout rather than a generic circular spinner.

### Elevation and shape

- Prefer borders and whitespace over stacked cards and shadows.
- Use a consistent radius family: 12px for controls, 16px for result surfaces, and 20px only for a larger containing surface if necessary.
- Shadows, if used, should be barely perceptible and neutral. No colored or neon outer glows.

## 5. Layout Principles

- Design the main screen for a 360–430 logical-pixel mobile viewport first.
- Use a single-column layout with 20–24px horizontal page padding and 8px-based spacing increments.
- Suggested vertical rhythm: 24px header-to-input gap, 10–12px label-to-field gap, 20–24px between major sections, and 12px between related controls.
- Keep the workflow ordered: header → bill input → tip selection → result. The result should be easy to find without scrolling on typical phone sizes.
- Use a subtle asymmetric emphasis: align labels to the leading edge while allowing the total amount to establish the visual anchor. Do not center every element.
- Keep the result region visually distinct through whitespace, type scale, and a restrained surface—not through a stack of nested cards.
- Respect safe areas and device insets. Avoid fixed positioning that can collide with the keyboard.
- In Flutter, prefer layout primitives such as `SafeArea`, `SingleChildScrollView` when needed, `Column`, `Padding`, and `LayoutBuilder` over brittle screen-size assumptions.
- Keep the bill amount, selected tip rate, and results in a predictable reading order for screen readers.
- No horizontal overflow at any supported viewport. At wider screens, constrain the calculator to a comfortable maximum width (about 480px) and center the overall column while keeping content left-aligned.

## 6. Responsive & Accessibility Rules

- **Mobile first:** all primary controls fit comfortably on narrow phones; no horizontal scrolling.
- **Touch targets:** interactive controls should be at least 44×44 logical pixels; prefer 48px height for main controls.
- **Text scaling:** support platform font scaling without clipping amounts, labels, or button text.
- **Contrast:** maintain WCAG AA contrast for normal text and meaningful control boundaries.
- **Semantics:** give the amount field a meaningful label, expose tip options as a mutually exclusive selection group, and announce updated totals accessibly without repeatedly interrupting users.
- **Keyboard:** support decimal entry, provide a clear way to dismiss the keyboard, and ensure the result is not hidden behind it.
- **Focus:** show a visible focus state and preserve a logical focus order.
- **Error communication:** pair color with plain-language error text; never use color alone.

## 7. Motion & Interaction

- **Motion character:** restrained, tactile, and immediate. Use short ease-out transitions or spring-like motion with a weighty feel; avoid linear, mechanical movement.
- **Tip selection:** animate the selected background and border over roughly 140–200ms. A tiny 1px press translation is sufficient.
- **Result update:** update figures promptly. A brief opacity transition (120–180ms) may help distinguish a changed result, but do not animate every digit independently.
- **Entry:** use a subtle 160–220ms fade/translate reveal on first display only if it does not delay input.
- **Performance:** animate opacity and transforms only. Avoid repeated layout changes or animation that affects the bill field's position.
- **Reduced motion:** respect system reduced-motion preferences and make all state changes instantaneous when requested.
- **No perpetual animation:** this is a utility app, so do not add infinite pulse, shimmer, floating, or typewriter loops to idle controls.

## 8. Calculation & State Presentation

- Calculate the tip using `tipAmount = billAmount × (tipPercentage / 100)`.
- Calculate the total using `totalBill = billAmount + tipAmount`.
- Round displayed currency values to the currency's minor unit (typically two decimal places). Use a decimal-safe currency strategy for calculations where practical, rather than relying on binary floating-point display rounding alone.
- Update the result whenever the bill amount or selected percentage changes if using instant calculation. If calculation is explicitly triggered, make the button's role and timing obvious.
- Handle empty and malformed input safely. Do not silently convert invalid input into a valid zero-value bill.
- Keep the displayed tip rate and calculation results synchronized with the actual app state.
- Format currency according to the selected locale and currency. Avoid mixing currency symbols or separators within the same result.
- If the app later adds bill splitting, calculate `perPersonTotal = totalBill / numberOfPeople`; validate that the number of people is a positive integer and make rounding behavior clear.

## 9. Anti-Patterns (Banned)

- No emojis anywhere in the interface.
- No `Inter` as the primary designed font.
- No pure black (`#000000`), generic serif fonts, or decorative typefaces.
- No purple/blue neon gradients, oversaturated accents, glow shadows, or rainbow-colored percentage options.
- No excessive gradient text, glassmorphism, frosted-glass layers, or decorative blur.
- No generic three-column equal feature-card layout.
- No unnecessary charts, dashboards, account balances, transaction history, or features unrelated to tipping.
- No overlapping elements, absolute-positioned text stacks, or content hidden behind the keyboard.
- No oversized hero section, centered marketing headline, or filler text such as “Scroll to explore.”
- No fake ratings, fabricated statistics, placeholder brand names, or AI copywriting clichés such as “Elevate,” “Seamless,” “Unleash,” or “Next-Gen.”
- No modal dialog for a simple field-validation error.
- No redundant Calculate button when the results are already live.
- No animation that delays the core task or loops indefinitely.
- No inaccessible low-contrast labels, tiny touch targets, or color-only selection indicators.

## 10. Flutter Implementation Notes

- Build reusable widgets for the amount field, tip option, and result rows so styling remains consistent.
- Define the palette, spacing, radii, and typography as theme tokens rather than repeating raw values throughout the widget tree.
- Use `TextField` or `TextFormField` with a numeric keyboard and a persistent label.
- Use `ChoiceChip`, custom `InkWell`, or semantic radio controls for tip selection; expose selected state to assistive technology.
- Use `FilledButton` or a styled `ElevatedButton` for the primary action when a manual calculation step is required.
- Keep arithmetic and currency formatting separate from widget layout so validation and rounding can be tested.
- Add tests for empty input, invalid characters, zero and negative values, each tip percentage, currency rounding, and result updates after edits.
- Keep the core screen lightweight; do not add dependencies for animations or state management unless the project genuinely needs them.

---

**Project:** TipSplitter  
**Purpose:** Lightweight Flutter utility for calculating tip amounts and total bills  
**Platform:** iOS and Android  
**Project author:** Emmanuel Olukoga
