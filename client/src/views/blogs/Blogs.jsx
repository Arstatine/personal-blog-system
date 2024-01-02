import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Breadcrumbs from '../../components/Breadcrumbs';
import { blog_lists } from '../../constant/blogs';
import BlogList from '../../components/BlogList';
import { ArrowDownAZ, ArrowDownUp, ArrowUpAZ } from 'lucide-react';
import { darkMode } from '../../constant/utils';

function Blogs() {
  const [sorted, setSorted] = useState(blog_lists);
  const [isSorted, setIsSorted] = useState(null);

  useEffect(() => {
    document.title = 'Blogs';
  }, []);

  const sortData = () => {
    if (isSorted) {
      let newData = blog_lists
        .slice()
        .sort((a, b) => a.title.localeCompare(b.title));
      setIsSorted(false);
      setSorted(newData);
    } else {
      let newData = blog_lists
        .slice()
        .sort((a, b) => b.title.localeCompare(a.title));
      setIsSorted(true);
      setSorted(newData);
    }
  };

  return (
    <div>
      <Banner title='Blogs' />
      <Breadcrumbs />
      <div className='flex justify-center items-center'>
        <div className='container my-6'>
          <div className='flex justify-between'>
            <h1 className='ml-2'>
              {isSorted == null
                ? 'Recent blogs'
                : isSorted
                ? 'Sorted from Z to A'
                : 'Sorted from A to Z'}
            </h1>
            <div
              className='cursor-pointer flex gap-2 font-medium'
              onClick={sortData}
            >
              Sort{' '}
              {isSorted == null ? (
                <ArrowDownUp
                  className={`${
                    darkMode.value ? 'stroke-dark-text' : 'stroke-light-text'
                  } `}
                />
              ) : isSorted ? (
                <ArrowUpAZ
                  className={`${
                    darkMode.value ? 'stroke-dark-text' : 'stroke-light-text'
                  } `}
                />
              ) : (
                <ArrowDownAZ
                  className={`${
                    darkMode.value ? 'stroke-dark-text' : 'stroke-light-text'
                  } `}
                />
              )}
            </div>
          </div>
          <div className='flex flex-col lg:flex-row flex-wrap'>
            {sorted.map((blog) => {
              return (
                <BlogList
                  key={blog.slug}
                  categories={blog.category}
                  slug={blog.slug}
                  image={blog.image}
                  title={blog.title}
                  description={blog.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
