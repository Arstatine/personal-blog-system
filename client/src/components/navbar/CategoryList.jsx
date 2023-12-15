import { darkMode } from '../../constant/utils';
import { X } from 'lucide-react';
import { category_lists } from '../../constant/categories';
import CategoryItem from './CategoryItem';
import { Link } from 'react-router-dom';

function CategoryList({ dropdown, setDropdown, handleMenuClick }) {
  return (
    <div
      className={`fixed w-screen h-screen z-30 bg-[rgba(0,0,0,.2)] top-0 left-0 ${
        dropdown ? 'translate-x-0' : 'translate-x-full'
      }`}
      onClick={() => setDropdown(false)}
    >
      <div
        className={`fixed top-0 right-0 z-40 w-64 h-screen overflow-y-hidden transition-transform ${
          dropdown ? 'translate-x-0' : 'translate-x-full'
        } ${
          darkMode.value
            ? 'bg-light-bg text-light-text'
            : 'bg-dark-bg text-dark-text'
        }`}
      >
        {/* categories header */}
        <div className='flex justify-between items-center px-4 h-[80px]'>
          <h5
            className={`font-bold text-lg tracking-widest uppercase ${
              darkMode.value ? 'text-light-primary' : 'text-dark-primary'
            }`}
          >
            Categories
          </h5>
          <div
            onClick={() => setDropdown(false)}
            className={`cursor-pointer rounded-full p-4 ${
              darkMode.value ? 'hover:bg-light-hover' : 'hover:bg-dark-hover'
            }`}
          >
            <X />
          </div>
        </div>
        <div className='px-4 py-2 h-[70px] text-center'>
          <div
            className={`border-b w-full mb-3 ${
              darkMode.value ? 'border-light-text' : 'border-dark-text'
            }`}
          ></div>
          <Link
            to='categories'
            onClick={() => {
              setDropdown(false);
              handleMenuClick();
            }}
            className='hover:underline transition-all'
          >
            View All
          </Link>
          <div
            className={`border-b w-full mt-3 ${
              darkMode.value ? 'border-light-text' : 'border-dark-text'
            }`}
          ></div>
        </div>

        {/* categories list */}
        <div
          className={`overflow-y-auto no-scrollbar`}
          style={{ height: 'calc(100% - 160px)' }}
        >
          <ul className='font-medium '>
            {category_lists.map((category, index) => {
              return (
                <CategoryItem
                  key={index}
                  path={category?.path}
                  title={category?.title}
                  handleMenuClick={handleMenuClick}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
