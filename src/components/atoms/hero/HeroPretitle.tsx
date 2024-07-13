import { useHeroContext } from '../../contexts';
import { HeroDivider } from './HeroDivider';

export function HeroPretitle() {
  const { heroData } = useHeroContext();
  return (
    <div className='font-semibold flex items-center uppercase'>
      <HeroDivider />
      {heroData.pretitle}
    </div>
  );
}
