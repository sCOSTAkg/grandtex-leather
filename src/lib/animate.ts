"use client";

export const initScrollAnimations = () => {
  if (typeof window === "undefined") return;

  const fadeElements = document.querySelectorAll(".animate-fade-in-scroll");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    fadeElements.forEach((element) => {
      const el = element as HTMLElement;
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  fadeElements.forEach((element) => {
    observer.observe(element);
  });
};

export const initParallaxEffect = () => {
  if (typeof window === "undefined") return;

  const parallaxElements = document.querySelectorAll("[data-parallax]");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    parallaxElements.forEach((element) => {
      (element as HTMLElement).style.transform = "none";
    });
    return;
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    parallaxElements.forEach((element) => {
      const speed = Number(element.getAttribute("data-parallax-speed")) || 0.2;
      const offset = scrollTop * speed;
      (element as HTMLElement).style.transform = `translateY(${offset}px)`;
    });
  };

  window.addEventListener("scroll", handleScroll);

  // Cleanup function
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

export const initProductHoverEffects = () => {
  if (typeof window === "undefined") return;

  const productCards = document.querySelectorAll("[data-product-card]");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    productCards.forEach((card) => {
      const image = card.querySelector("[data-product-image]");
      if (image) {
        (image as HTMLElement).style.transform = "none";
      }
    });
    return;
  }

  const handlers: {
    card: Element;
    enter: () => void;
    leave: () => void;
  }[] = [];

  productCards.forEach((card) => {
    const handleMouseEnter = () => {
      card.classList.add("scale-[1.02]");

      const image = card.querySelector("[data-product-image]");
      if (image) {
        image.classList.add("scale-110");
      }
    };

    const handleMouseLeave = () => {
      card.classList.remove("scale-[1.02]");

      const image = card.querySelector("[data-product-image]");
      if (image) {
        image.classList.remove("scale-110");
      }
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    handlers.push({ card, enter: handleMouseEnter, leave: handleMouseLeave });
  });

  return () => {
    handlers.forEach(({ card, enter, leave }) => {
      card.removeEventListener("mouseenter", enter);
      card.removeEventListener("mouseleave", leave);
    });
  };
};
