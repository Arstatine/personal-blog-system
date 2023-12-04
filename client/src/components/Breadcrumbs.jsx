import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { darkMode } from '../constant/utils';

function Breadcrumbs() {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    let currentLink = [];
    let bc = location.pathname.split('/').map((crumb, index, array) => {
      const isLast = index === array.length - 1;
      console.log(isLast);
      if (crumb != '') {
        currentLink.push(`/${crumb}`);
      }

      return (
        <div className='crumbs' key={index}>
          <Link
            to={crumb == '' ? '/' : currentLink.join('')}
            className={`capitalize ${
              isLast ? 'opacity-[.75] ' : 'hover:opacity-[.75]'
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
    <div
      className={`w-full flex justify-center items-center ${
        darkMode.value
          ? 'bg-light-primary text-light-bg'
          : 'bg-dark-primary text-light-bg'
      }`}
    >
      <div
        className={`breadcrumbs px-8 lg:px-0 w-full container flex py-4 flex-center items-center`}
      >
        {breadcrumbs}
      </div>
    </div>
  );
}

export default Breadcrumbs;
