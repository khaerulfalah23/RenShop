import { HeroImage } from '../../atoms';
import { HeroTitleSection } from './HeroTitleSection';

export function HeroContent() {
  return (
    <div className='container mx-auto flex justify-around h-full'>
      <HeroTitleSection />
      <div className='hidden lg:block'>
        <HeroImage />
      </div>
    </div>
  );
}
