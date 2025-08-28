"use client";

import Link from 'next/link';

/**
 * Call‑to‑action section inviting visitors to get in touch. The contrasting
 * background and clear messaging draw the eye at the end of the page.
 */
export default function CTA() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Готовы начать сотрудничество?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-base sm:text-lg">
          Оцените возможности GRANDTEX – наш премиальный пошив поможет
          реализовать ваши идеи.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-md bg-background px-6 py-3 text-sm font-medium text-primary hover:bg-muted transition-colors"
        >
          Связаться с нами
        </Link>
      </div>
    </section>
  );
}