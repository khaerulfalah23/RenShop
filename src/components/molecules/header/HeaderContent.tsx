import { HeaderIcon, HeaderLogo } from '../../atoms';

export function HeaderContent() {
  return (
    <div className='container mx-auto flex items-center justify-between h-full'>
      <HeaderLogo />
      <HeaderIcon />
    </div>
  );
}
