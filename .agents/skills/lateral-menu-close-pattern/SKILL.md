---
name: lateral-menu-close-pattern
description: Implement a mobile lateral menu (right-side drawer) with robust close behavior. Use when Codex needs to add or refactor a responsive menu that opens from the side and closes via overlay click, close button click, menu-link click, and open-state changes.
---

# Lateral Menu + Close Behavior Pattern

## Objective
Build a predictable mobile lateral menu with reliable close behavior and smooth UX transitions.

## Scope
- Mobile navigation drawer only.
- Open/close state management.
- Close triggers and motion.
- Keep desktop navigation unchanged.

## Required Inputs
- Navbar component path.
- Existing breakpoint strategy (`md:hidden`, etc.).
- Link list and target anchors/routes.
- Existing motion library (for example `framer-motion`) or CSS transition approach.

## Behavior Contract
- Drawer opens from the right side.
- Backdrop overlay covers the viewport while open.
- Menu must close when:
1. User clicks/taps overlay.
2. User clicks close icon/button.
3. User clicks a menu link.
4. Parent open-state toggles to `false`.
- Menu should prevent background interaction while open.
- Close/open should animate smoothly.

## State Contract
- Use one source of truth: `mobileMenuOpen` (boolean).
- Toggle button flips state.
- Every close pathway must call the same close setter:
  - `setMobileMenuOpen(false)`.

## Suggested Structure
- `header` (fixed/top nav)
- trigger button (`md:hidden`)
- conditional rendering:
  - overlay (`fixed inset-0`)
  - drawer panel (`fixed top-0 right-0 h-full w-3/4 max-w-sm`)
- internal nav links
- optional CTA block

## Motion Defaults
- Overlay fade: `0.2s - 0.3s`.
- Drawer slide-in/out: `0.3s - 0.4s`, easing `easeInOut`.
- Keep durations consistent between open/close.

## Integration With Smooth Scroll
- If links target in-page sections, intercept click and run smooth-scroll helper.
- After calling smooth-scroll, close drawer immediately.
- Prevent default anchor jump when smooth-scroll is active.

## Accessibility Minimum
- Add `aria-label` for open/close buttons.
- Keep close button always visible in drawer header.
- Ensure overlay is keyboard-focus reachable if implemented as button.

## Acceptance Checklist
- Drawer opens on mobile trigger click.
- Overlay appears and blocks background clicks.
- Drawer closes from overlay, close button, and link click.
- No stale open state after route/section navigation.
- Desktop nav remains unaffected.
- No TypeScript/lint errors introduced.

## Non-Goals
- Do not redesign content, branding, or copy.
- Do not modify unrelated page sections or data models.
