import { Link } from 'react-router-dom';
import { useHeroContext } from '../../contexts';

export function HeroLink() {
  const { heroData } = useHeroContext();
  return (
    <Link
      to={heroData.link}
      className='self-start uppercase font-semibold border-b-2 border-primary'>
      {heroData.linkText}
    </Link>
  );
}
