import NewHero from '@/components/NewHero';
import Portfolio from '@/components/Portfolio';
import Benefits from '@/components/Benefits';
import ClientLogos from '@/components/ClientLogos';
import CTA from '@/components/CTA';

/**
 * The home page stitches together the key sections of the website: hero,
 * portfolio, advantages, client logos and a call‑to‑action. Each section is
 * encapsulated in its own component to keep this file concise.
 */
export default function HomePage() {
  return (
    <>
      <NewHero />
      <Portfolio />
      <Benefits />
      <ClientLogos />
      <CTA />
    </>
  );
}