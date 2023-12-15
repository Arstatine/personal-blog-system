import { darkMode } from '../../constant/utils';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { useState, useEffect, useCallback } from 'react';
import ButtonMenus from './ButtonMenus';
import { ArrowUp } from 'lucide-react';

function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // menu toggle
  const handleMenuClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const threshold = 137;
    setIsSticky(scrollPosition > threshold);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Adds a smooth scrolling effect
    });
  };

  return (
    <>
      <div
        className={`pt-2 transition-all ${
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
      </div>
      <div
        className={`w-full sticky top-0 z-[9999] ${
          darkMode.value
            ? isSticky
              ? 'bg-light-bg text-light-text'
              : 'bg-dark-bg text-dark-text'
            : isSticky
            ? 'bg-dark-bg text-dark-text'
            : 'bg-light-bg text-light-text'
        }`}
      >
        <div className='hidden lg:flex justify-center items-center flex-col'>
          <DesktopNav handleMenuClick={handleMenuClick} isSticky={isSticky} />
        </div>
      </div>
      <div className='block lg:hidden'>
        <MobileNav
          handleMenuClick={handleMenuClick}
          isMenuActive={isMenuActive}
        />
        <div
          onClick={scrollToTop}
          className={`p-4 aspect-square rounded-full bottom-[20px] right-[20px] z-[999] ${
            darkMode.value
              ? isSticky
                ? 'fixed bg-light-bg text-light-text opacity-75'
                : 'hidden bg-dark-bg text-dark-text opacity-75'
              : isSticky
              ? 'fixed bg-dark-bg text-dark-text opacity-75'
              : 'hidden bg-light-bg text-light-text opacity-75'
          }`}
        >
          <ArrowUp />
        </div>
      </div>
      <div
        className={`border-b w-full ${
          darkMode.value ? 'border-dark-secondary' : 'border-light-secondary'
        }`}
      ></div>
    </>
  );
}

export default Navbar;
