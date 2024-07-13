import { Link } from 'react-router-dom';

export function HeaderLogo() {
  return (
    <Link to={'/'}>
      <img
        className='w-[40px]'
        src='/img/logo.svg'
        alt='logo'
      />
    </Link>
  );
}
