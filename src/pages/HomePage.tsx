import { Cta } from "../components/Cta";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { MapSection } from "../components/MapSection";
import { Steps } from "../components/Steps";

export function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <MapSection />
      <Steps />
      <Cta />
    </main>
  );
}
