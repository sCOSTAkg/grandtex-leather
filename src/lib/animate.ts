'use client';

export const initScrollAnimations = () => {
  if (typeof window === 'undefined') return;

  const fadeElements = document.querySelectorAll('.animate-fade-in-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(element => {
    observer.observe(element);
  });
};

export const initParallaxEffect = () => {
  if (typeof window === 'undefined') return;

  const parallaxElements = document.querySelectorAll('[data-parallax]');

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    parallaxElements.forEach((element) => {
      const speed = Number(element.getAttribute('data-parallax-speed')) || 0.2;
      const offset = scrollTop * speed;
      (element as HTMLElement).style.transform = `translateY(${offset}px)`;
    });
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

export const initProductHoverEffects = () => {
  if (typeof window === 'undefined') return;

  const productCards = document.querySelectorAll('[data-product-card]');

  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('scale-[1.02]');

      const image = card.querySelector('[data-product-image]');
      if (image) {
        image.classList.add('scale-110');
      }
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('scale-[1.02]');

      const image = card.querySelector('[data-product-image]');
      if (image) {
        image.classList.remove('scale-110');
      }
    });
  });
};
