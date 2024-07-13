import { HeroData } from '../../data';
import { HeroProvider } from '../../contexts';
import { HeroSection } from './HeroSection';

export function Hero() {
  return (
    <HeroProvider heroData={HeroData}>
      <HeroSection />
    </HeroProvider>
  );
}
