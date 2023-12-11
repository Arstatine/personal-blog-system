import { darkMode } from '../../constant/utils';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { useState } from 'react';
import ButtonMenus from './ButtonMenus';

function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  // menu toggle
  const handleMenuClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div
      className={`flex justify-center items-center flex-col pt-2 transition-all overflow-x-hidden ${
        darkMode.value
          ? 'bg-dark-bg text-dark-text'
          : 'bg-light-bg text-light-text'
      }`}
    >
      <ButtonMenus handleMenuClick={handleMenuClick} />
      <div
        className={`border-b w-full mt-3 ${
          darkMode.value ? 'border-dark-secondary' : 'border-light-secondary'
        }`}
      ></div>
      <div className='hidden lg:block'>
        <DesktopNav handleMenuClick={handleMenuClick} />
      </div>
      <div className='block lg:hidden'>
        <MobileNav
          handleMenuClick={handleMenuClick}
          isMenuActive={isMenuActive}
        />
      </div>
    </div>
  );
}

export default Navbar;
