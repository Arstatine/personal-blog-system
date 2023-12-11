import { Link } from 'react-router-dom';
import { darkMode } from '../../constant/utils';
import { AlignJustify, Moon, Search, Sun } from 'lucide-react';

function ButtonMenus({ handleMenuClick }) {
  const handleClick = () => {
    darkMode.value = !darkMode.value;
  };

  return (
    <div className='flex justify-between items-center py-8 px-8 lg:px-[50px] xl:px-[100px] 2xl:px-[200px] 3xl:px-[300px] w-screen'>
      <div className='text-start hidden lg:block'>
        <p className='text-xl lg:text-3xl font-semibold hover:opacity-[.75]'>
          <Link to='/'>Bon Appetit</Link>
        </p>
        <p
          className={`text-sm lg:text-medium ${
            darkMode.value ? 'text-dark-text' : 'text-light-text'
          }`}
        >
          The Daily Life of Mukbanger
        </p>
      </div>
      <div className='block lg:hidden text-3xl font-semibold '>BON APPETIT</div>
      <div className='flex justify-center items-center gap-0 lg:gap-2 shrink-0'>
        <Link
          to='/search'
          className={`p-4 rounded-full transition-all ${
            darkMode.value ? 'hover:bg-dark-hover' : 'hover:bg-light-hover'
          }`}
        >
          <Search />
        </Link>
        <div
          className={`rounded-full p-4 cursor-pointer transition-all ${
            darkMode.value ? 'hover:bg-dark-hover' : 'hover:bg-light-hover'
          }`}
          onClick={() => handleClick()}
        >
          {darkMode.value ? <Moon /> : <Sun />}
        </div>

        {/* mobile right menu */}
        <nav className='container flex justify-end items-center gap-2'>
          <div
            className={`cursor-pointer rounded-full p-4 block lg:hidden ${
              darkMode.value ? 'hover:bg-dark-hover' : 'hover:bg-light-hover'
            }`}
            onClick={handleMenuClick}
          >
            <AlignJustify />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default ButtonMenus;
