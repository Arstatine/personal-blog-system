import { Link } from 'react-router-dom';
import { darkMode } from '../constant/utils';

function BlogList({ categories, slug, image, title, description }) {
  return (
    <div
      className={`flex items-stretch p-2 ${
        darkMode.value ? 'bg-dark-bg' : 'bg-light-bg'
      } overflow-hidden w-full lg:w-1/2 relative`}
    >
      <img
        src={image}
        alt={title}
        className='h-full lg:h-[250px] aspect-square object-cover'
      />
      <div
        className={`pl-3 flex flex-col gap-2 justify-center absolute lg:static left-0 bottom-0 m-2 lg:m-0 py-4 lg:py-0 ${
          darkMode.value ? 'bg-dark-secondary' : 'bg-light-secondary'
        } `}
      >
        <div className='flex gap-2'>
          {categories.map((category, index) => {
            return (
              <Link
                to={'/categories/' + category}
                key={index}
                className={`${
                  darkMode.value
                    ? 'bg-dark-accent hover:text-dark-bg'
                    : 'bg-light-accent hover:text-light-bg'
                } px-2 rounded-sm text-sm capitalize transition-all`}
              >
                {category}
              </Link>
            );
          })}
        </div>
        <div className='text-lg lg:text-2xl font-semibold line-clamp-2'>
          {title}
        </div>
        <p className='line-clamp-2 lg:line-clamp-3 text-sm lg:text-base '>
          {description}
        </p>
        <div className='flex items-center'>
          <Link
            to={'/' + slug}
            className='font-medium group transition-all moving-left'
          >
            <div
              className={`text-sm lg:text-base ${
                darkMode.value
                  ? 'group-hover:text-blue-400 text-blue-400 lg:text-dark-text'
                  : 'group-hover:text-blue-600 text-blue-600 lg:text-light-text'
              }`}
            >
              Read more{' '}
              <span className='group-hover:inline inline'>&gt;&gt;</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
