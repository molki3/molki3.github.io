---
name: section-transition-lateral-menu
description: Replicate the LC-00001 transition movement design model in landing pages. Use when Codex needs to implement or align: (1) smooth section-to-section anchor scrolling with easing, (2) a right-side mobile lateral menu drawer with backdrop and close behaviors, and (3) clean section boundary transitions with subtle separators.
---

# Section Transition + Lateral Menu Model

## Objective
Implement a consistent movement system for landing pages:
1. Smooth anchor scrolling between sections.
2. Right-side mobile drawer menu with overlay.
3. Clean visual transition between sections.

## Required Inputs
- Project path.
- Navbar component path.
- Section component paths used in landing flow.
- Existing design tokens/colors (Tailwind classes or CSS variables).

## Default Motion Model
- Scroll duration: `1000ms`.
- Scroll easing: cubic ease-in-out (`easeInOutCubic`).
- Mobile drawer:
  - Overlay fade in/out: `~0.25s`.
  - Drawer slide from right: `~0.35s`, `easeInOut`.
- Close drawer when:
  - User taps overlay.
  - User taps close icon.
  - User selects a nav link.

## Implementation Steps
1. Add a reusable smooth-scroll hook.
2. Intercept nav link clicks and call smooth-scroll instead of default jump.
3. Refactor mobile nav into a lateral drawer:
   - Fixed overlay on full viewport.
   - Fixed right panel (`w-3/4`, `max-w-sm`, full height).
   - Keep desktop nav unchanged.
4. Normalize section transitions:
   - Use block-like sections (`bg-white`).
   - Add subtle separators (`border-t border-gray-100`) between major sections.
5. Preserve existing content structure; only adjust movement and transition styling.

## Smooth Scroll Hook Contract
- Function signature:
  - `(e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void`
- Behavior:
  - `preventDefault()`.
  - If target is home (`"#"` or `"/"`), animate to top.
  - Otherwise query target with `document.querySelector(targetId)`.
  - Apply fixed header offset before computing destination.
  - Animate with `requestAnimationFrame`.

## Drawer Structure Contract
- Trigger button visible on mobile (`md:hidden`).
- Overlay:
  - `fixed inset-0`
  - dark transparent background
  - closes drawer on click
- Drawer panel:
  - `fixed top-0 right-0 h-full`
  - slide-in/out motion
  - internal nav links with divider lines
  - optional CTA pinned in drawer content flow

## Acceptance Checklist
- Clicking desktop nav links animates to section targets (no abrupt jumps).
- Mobile menu opens from right and closes from all expected actions.
- Overlay blocks background interaction while drawer is open.
- Section boundaries appear clean and consistent across the landing page.
- No TypeScript or lint errors introduced by the refactor.

## Constraints
- Keep changes localized to navbar/navigation hooks and section wrapper classes.
- Do not rewrite unrelated business content or data models.
- Reuse existing color system instead of introducing a new palette.
