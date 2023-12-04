import { Link } from 'react-router-dom';
import { darkMode } from '../../constant/utils';
import { navLinks } from '../../constant/navLinks';

function NavLinks({ handleMenuClick }) {
  return (
    <div className='flex justify-center gap-0 lg:gap-5 flex-col lg:flex-row w-full'>
      {navLinks.map((links, index) => {
        return (
          <Link
            key={index}
            to={links.path}
            onClick={handleMenuClick}
            className='py-5 text-center hover:opacity-[.75] transition-all group cursor-pointer flex justify-center items-center flex-col'
          >
            <div>{links.title}</div>
            <div
              className={`hidden lg:block border-b ${
                darkMode.value ? 'border-[#aaa]' : 'border-[#111]'
              } transition-all w-0 group-hover:w-full`}
            ></div>
          </Link>
        );
      })}
    </div>
  );
}

export default NavLinks;
