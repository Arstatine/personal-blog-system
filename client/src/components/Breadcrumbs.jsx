import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { darkMode } from '../constant/utils';

function Breadcrumbs() {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  // useEffect for destructuring path
  useEffect(() => {
    let currentLink = [];
    let bc = location.pathname.split('/').map((crumb, index, array) => {
      const isLast = index === array.length - 1;

      if (crumb != '') {
        currentLink.push(`/${crumb}`);
      }

      return (
        <div className='crumbs' key={index}>
          <Link
            to={crumb == '' ? '/' : currentLink.join('')}
            className={`text-ellipsis whitespace-nowrap capitalize hover:underline ${
              isLast && 'underline'
            }`}
          >
            {crumb == '' ? 'Home' : crumb}
          </Link>
        </div>
      );
    });
    setBreadcrumbs(bc);
  }, [location.pathname]);

  return (
    // returns breadcrumbs
    <div
      className={`w-full flex justify-center items-center ${
        darkMode.value
          ? 'bg-dark-secondary text-dark-text'
          : 'bg-light-secondary text-light-text'
      }`}
    >
      <div
        className={`breadcrumbs overflow-hidden px-4 lg:px-0 w-full container flex py-4 flex-center items-center`}
      >
        {breadcrumbs}
      </div>
    </div>
  );
}

export default Breadcrumbs;
