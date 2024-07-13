import { Link } from 'react-router-dom';

type SidebarLinkProps = {
  link: string;
  linkText: string;
  className: string;
};

export function SidebarLink({ link, linkText, className }: SidebarLinkProps) {
  return (
    <Link
      to={link}
      className={`flex p-4 justify-center items-center w-full font-medium ${className}`}>
      {linkText}
    </Link>
  );
}
