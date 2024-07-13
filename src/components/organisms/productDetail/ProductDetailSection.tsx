import { ReactNode } from 'react';

export function ProductDetailSection({ children }: { children: ReactNode }) {
  return (
    <section className='my-20 lg:my-14 py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        <div className=' flex flex-col lg:flex-row items-center'>
          {children}
        </div>
      </div>
    </section>
  );
}
