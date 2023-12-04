import { Link } from 'react-router-dom';
import { darkMode } from '../../constant/utils';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

function Navbar() {
  const handleClick = () => {
    darkMode.value = !darkMode.value;
  };

  return (
    <div
      className={`flex justify-center items-center flex-col pt-2 transition-all ${
        darkMode.value ? 'bg-dark-bg text-[#f9f9f9]' : 'bg-light-bg text-[#111]'
      }`}
    >
      <div className='flex justify-between lg:justify-center items-center flex-row lg:flex-col p-8 w-full'>
        <div className='text-start lg:text-center'>
          <h1 className='hidden sm:block text-xl lg:text-3xl font-semibold hover:opacity-[.75]'>
            <Link to='/'>Xenon Vergara Blog</Link>
          </h1>
          <h1 className='block sm:hidden text-xl lg:text-3xl font-semibold hover:opacity-[.75]'>
            <Link to='/'>Blog</Link>
          </h1>
          <p
            className={`text-sm lg:text-medium ${
              darkMode.value ? 'text-[#aaa]' : 'text-[#777]'
            }`}
          >
            The Daily Life of Xenon
          </p>
        </div>

        <MobileNav handleClick={handleClick} />
      </div>
      <div className='border-b w-full border-[#aaa] mb-8'></div>
      <DesktopNav handleClick={handleClick} />
    </div>
  );
}

export default Navbar;
