import { BsPlus } from 'react-icons/bs';

export function ProductButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick}>
      <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
        <BsPlus className='text-3xl' />
      </div>
    </button>
  );
}
