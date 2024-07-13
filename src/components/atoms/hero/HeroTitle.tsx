import { useHeroContext } from '../../contexts';

export function HeroTitle() {
  const { heroData } = useHeroContext();
  const splitIndex = heroData.title.lastIndexOf('WOMENS');
  const firstPart = heroData.title.substring(0, splitIndex).trim();
  const secondPart = heroData.title.substring(splitIndex).trim();
  return (
    <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
      {firstPart} <br />
      <span className='font-semibold'>{secondPart}</span>
    </h1>
  );
}
