import { ReactNode } from 'react';

export function ProductSection({ children }: { children: ReactNode }) {
  return (
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {children}
        </div>
      </div>
    </section>
  );
}
