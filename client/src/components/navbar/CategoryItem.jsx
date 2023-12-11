import { Link } from 'react-router-dom';
import { darkMode } from '../../constant/utils';

function CategoryItem({ title, path, handleMenuClick }) {
  return (
    <Link
      to={'/category/' + path}
      onClick={handleMenuClick}
      className={`flex items-center px-4 py-3 cursor-pointer ${
        darkMode.value ? 'hover:bg-dark-hover' : 'hover:bg-light-hover'
      }`}
    >
      <label className='w-full ms-2 text-sm rounded cursor-pointer capitalize'>
        {title}
      </label>
    </Link>
  );
}

export default CategoryItem;
