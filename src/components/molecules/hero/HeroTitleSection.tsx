import { HeroLink, HeroPretitle, HeroTitle } from '../../atoms';

export function HeroTitleSection() {
  return (
    <div className='flex flex-col justify-center'>
      <HeroPretitle />
      <HeroTitle />
      <HeroLink />
    </div>
  );
}
