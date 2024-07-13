import { HeroContent } from "../../molecules";

export function HeroSection() {
  return (
    <section className='-mt-3 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <HeroContent />
    </section>
  );
}
