import Breadcrumbs from '../../components/Breadcrumbs';
import Banner from '../../components/Banner';
import { category_lists } from '../../constant/categories';
import CategoryItem from './CategoryItem';
import { useEffect } from 'react';

function Category() {
  useEffect(() => {
    document.title = 'Categories';
  }, []);

  return (
    <div>
      <Banner title='Categories' />
      <Breadcrumbs />
      <div className='flex justify-center items-center py-4 lg:py-12 px-4'>
        <div className='container flex flex-wrap items-center justify-center gap-2'>
          {category_lists.map((category, index) => {
            return (
              <CategoryItem
                key={index}
                path={category?.path}
                title={category?.title}
                img={
                  category?.img ||
                  'https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg'
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
