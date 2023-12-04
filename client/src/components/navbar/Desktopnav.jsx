import { Link } from 'react-router-dom';
import Button from '../Button';
import { darkMode } from '../../constant/utils';
import { Moon, Search, Sun } from 'lucide-react';

function DesktopNav() {
  const handleClick = () => {
    darkMode.value = !darkMode.value;
  };

  return (
    <nav className='container hidden lg:flex justify-between items-center pb-8'>
      <div className='shrink-0'>Blag</div>
      <div className='flex justify-center gap-5'>
        <Link to='/'>Home</Link>
        <Link to='/'>Home</Link>
        <Link to='/'>Home</Link>
        <Link to='/'>Home</Link>
      </div>
      <div className='flex justify-center items-center gap-2 shrink-0'>
        <Link
          to='/search'
          className={`hover:bg-slate-200 p-4 rounded-full ${
            darkMode.value ? 'hover:bg-neutral-700' : 'hover:bg-slate-100'
          }`}
        >
          <Search />
        </Link>
        <div
          className={`rounded-full p-2 cursor-pointer ${
            darkMode.value ? 'hover:bg-neutral-700' : 'hover:bg-slate-100'
          }`}
          onClick={handleClick}
        >
          {darkMode.value ? <Moon size={36} /> : <Sun size={36} />}
        </div>
      </div>
    </nav>
  );
}

export default DesktopNav;
