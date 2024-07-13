import { ReactNode } from 'react';

type SidebarButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

export function SidebarButton({
  onClick,
  children,
  className,
}: SidebarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`icon-button ${className}`}>
      {children}
    </button>
  );
}
