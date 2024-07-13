import { ReactNode } from 'react';

type SidebarTextProps = {
  children: ReactNode;
  className?: string;
};

export function SidebarText({ children, className }: SidebarTextProps) {
  return <div className={className}>{children}</div>;
}
