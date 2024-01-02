import { Link, useLocation } from 'react-router-dom';
import { darkMode } from '../../constant/utils';
import { navLinks } from '../../constant/navLinks';
import { Fragment, useEffect, useState } from 'react';
import CategoryList from './CategoryList';

function NavLinks({ handleMenuClick }) {
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    let links = location.pathname.split('/');
    setActiveLink(links[1]);
  }, [location.pathname]);

  const handleDropdown = () => {
    setDropdown(true);
  };

  return (
    <div className='relative'>
      <div className='flex justify-center gap-0 lg:gap-5 flex-col lg:flex-row w-full'>
        {navLinks.map((links, index) => {
          let link = links.path.toLowerCase() === '/' + activeLink;
          return (
            <Fragment key={index}>
              {links?.path == '/categories' ? (
                <Link
                  onClick={handleDropdown}
                  className='py-5 text-center hover:opacity-75 transition-all group cursor-pointer flex justify-center items-center flex-col'
                >
                  <div className='tracking-widest'>{links.title}</div>
                  <div
                    className={`hidden lg:block border-b transition-all ${
                      darkMode.value ? 'border-dark-text' : 'border-light-text'
                    } ${
                      link || dropdown ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></div>
                </Link>
              ) : (
                <Link
                  to={links.path}
                  onClick={handleMenuClick}
                  className='py-5 text-center hover:opacity-75 transition-all group cursor-pointer flex justify-center items-center flex-col'
                >
                  <div className='tracking-widest'>{links.title}</div>
                  <div
                    className={`hidden lg:block border-b transition-all ${
                      darkMode.value ? 'border-dark-text' : 'border-light-text'
                    } ${link ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  ></div>
                </Link>
              )}
            </Fragment>
          );
        })}
      </div>
      <CategoryList
        dropdown={dropdown}
        setDropdown={setDropdown}
        handleMenuClick={handleMenuClick}
      />
    </div>
  );
}

export default NavLinks;
