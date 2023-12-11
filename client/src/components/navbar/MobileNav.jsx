import { darkMode } from '../../constant/utils';
import { X } from 'lucide-react';
import NavLinks from './NavLinks';

function MobileNav({ isMenuActive, handleMenuClick }) {
  return (
    <div
      className={`fixed top-0 w-screen h-screen transition-all z-[999] block lg:hidden overflow-x-hidden ${
        darkMode.value ? 'bg-dark-bg' : 'bg-light-bg'
      } ${isMenuActive ? 'left-0 w-100' : 'left-[100%] w-0'}`}
    >
      <div className='py-10 px-8 flex justify-end'>
        <div
          onClick={() => handleMenuClick()}
          className={`cursor-pointer rounded-full p-4 ${
            darkMode.value ? 'hover:bg-dark-hover' : 'hover:bg-light-hover'
          }`}
        >
          <X />
        </div>
      </div>

      <NavLinks handleMenuClick={handleMenuClick} />
    </div>
  );
}

export default MobileNav;
