import { IoMdArrowForward } from 'react-icons/io';
import { SidebarButton, SidebarText } from '../../atoms';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../../features/sidebarSlice';

type SidebarHeaderProps = {
  itemAmount: number;
};

export function SidebarHeader({ itemAmount }: SidebarHeaderProps) {
  const dispatch = useDispatch();
  return (
    <div className='flex items-center justify-between py-6 border-b'>
      <SidebarText className='uppercase font-semibold text-sm'>
        Shopping Bag ({itemAmount})
      </SidebarText>
      <SidebarButton
        onClick={() => dispatch(toggleSidebar())}
        className='h-8 w-8 flex justify-center items-center'>
        <IoMdArrowForward className='text-2xl' />
      </SidebarButton>
    </div>
  );
}
