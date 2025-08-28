# Audit UI Design Guidelines

This document provides the design tokens and layout guidance for building administrative audit interfaces.

## Color tokens

Use the CSS custom properties defined in `src/app/globals.css` for consistent theming:

- `--background` and `--foreground` for base surfaces and text
- `--primary` and `--primary-foreground` for calls to action
- `--secondary` for muted panels and info blocks
- `--accent` to draw attention to highlights

Avoid hard‑coded hex values; rely on Tailwind utilities such as `bg-primary` and `text-foreground` which map to these tokens.

## Typography

The default sans–serif font is exposed via the `--font-sans` variable and is loaded in `layout.tsx` using `next/font`.
Use `font-sans` in components to inherit this typeface and maintain legibility across the audit UI.

## Spacing and radius

Maintain consistent spacing using Tailwind's default scale. Corner radii are controlled through the `--radius` token, providing subtle rounding across cards and interactive elements.

## Accessibility

Ensure sufficient color contrast between text and backgrounds by relying on the provided tokens. Interactive elements should preserve focus styles with the `ring` token.
