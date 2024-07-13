import { useHeroContext } from '../../contexts';

export function HeroImage() {
  const { heroData } = useHeroContext();
  return (
    <img
      src={heroData.imageSrc}
      alt={heroData.imageAlt}
    />
  );
}
