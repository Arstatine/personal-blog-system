import { Link } from 'react-router-dom';
import Button from '../Button';
import { darkMode } from '../../constant/utils';
import { AlignJustify, Moon, Search, Sun, X } from 'lucide-react';
import { useState } from 'react';
import NavLinks from './NavLinks';

function MobileNav() {
  const handleClick = () => {
    darkMode.value = !darkMode.value;
  };

  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <div>
        <nav className='container flex justify-between items-center gap-2'>
          <Link
            to='/search'
            className={`cursor-pointer rounded-full p-3 block lg:hidden ${
              darkMode.value ? 'hover:bg-neutral-700' : 'hover:bg-slate-100'
            }`}
            onClick={() => handleMenuClick()}
          >
            <Search />
          </Link>
          <div
            className={`cursor-pointer rounded-full p-3 block lg:hidden ${
              darkMode.value ? 'hover:bg-neutral-700' : 'hover:bg-slate-100'
            }`}
            onClick={() => handleMenuClick()}
          >
            <AlignJustify />
          </div>
        </nav>
      </div>
      <div
        className={`absolute top-0 w-screen h-screen transition-all z-[999] ${
          darkMode.value ? 'bg-dark-bg' : 'bg-light-bg'
        } ${isMenuActive ? 'left-0' : 'left-[100%] w-0 overflow-x-hidden'}`}
      >
        <div className='py-10 px-8 flex justify-end'>
          <div
            className={`cursor-pointer rounded-full p-3 ${
              darkMode.value ? 'hover:bg-neutral-700' : 'hover:bg-slate-100'
            }`}
          >
            <X onClick={() => handleMenuClick()} />
          </div>
        </div>

        <NavLinks handleMenuClick={handleMenuClick} />
        <div className='flex justify-center items-center mt-5'>
          <div
            className={`rounded-full p-2 cursor-pointer ${
              darkMode.value ? 'hover:bg-neutral-700' : 'hover:bg-slate-100'
            }`}
            onClick={handleClick}
          >
            {darkMode.value ? <Moon size={36} /> : <Sun size={36} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
