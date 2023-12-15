import { Link } from 'react-router-dom';

function CategoryItem({ path, title, img }) {
  return (
    <div className='group aspect-video w-full overflow-hidden lg:w-[32%] shrink-0 relative cursor-pointer'>
      <Link to={path}>
        <img
          src={img}
          alt={title}
          className='object-cover group-hover:scale-150 transition-all'
        />
        <div className='flex items-center font-medium justify-center absolute bottom-0 backdrop-blur-sm translate-y-0 py-4 w-full text-dark-text bg-[rgba(1,1,1,.25)]'>
          {title}
        </div>
      </Link>
    </div>
  );
}

export default CategoryItem;
