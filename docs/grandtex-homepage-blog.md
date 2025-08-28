# Building GrandTex's Desktop Homepage

GrandTex's new homepage combines modern tooling with smooth motion and a focus on sustainable manufacturing. This post walks through the stack and gives a taste of the implementation.

## Tech Stack Overview

The project uses [Next.js](https://nextjs.org/) App Router with TypeScript and Tailwind CSS. Motion is handled by Framer Motion and GSAP, while Swiper powers horizontal carousels.

```javascript
// package.json (excerpt)
{
  "dependencies": {
    "framer-motion": "^12.23.12",
    "gsap": "^3.x",
    "swiper": "^10.x"
  }
}
```

## Design Tokens

Design tokens live in `src/styles/tokens.css` and define the color palette, radii and shadows used throughout the UI.

```javascript
/* src/styles/tokens.css */
:root {
  --gt-navy:#0C1B43;
  --gt-ink:#0E1525;
  --gt-cream:#F2F1ED;
  --gt-accent:#F5A623;
  --radius-xl:24px;
}
```

## Animated Sections

Each section fades and slides into view when scrolled. Framer Motion makes this straightforward:

```javascript
import { motion } from "framer-motion";

export function Section({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="container mx-auto px-6 lg:px-10 py-24"
    >
      {children}
    </motion.section>
  );
}
```

## Hero Parallax

The hero uses a short background video and a GSAP powered parallax effect for depth.

```javascript
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(heroRef.current, {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: wrapperRef.current,
    start: "top top",
    scrub: true,
    end: "+=800"
  }
});
```

## Final Thoughts

With a combination of reusable components, thoughtful motion and a clear content structure, the GrandTex homepage delivers product information quickly while maintaining brand personality. Future iterations will expand the search experience and add richer case studies.
