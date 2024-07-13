import { ReactNode } from 'react';

export function CartSection({ children }: { children: ReactNode }) {
  return (
    <div className='flex gap-x-4 py-2 lg:py-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {children}
      </div>
    </div>
  );
}
