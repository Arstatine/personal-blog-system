import { useEffect } from 'react';
import Banner from '../../components/Banner';
import Breadcrumbs from '../../components/Breadcrumbs';
import { blog_lists } from '../../constant/blogs';
import BlogList from '../../components/BlogList';

function Blogs() {
  useEffect(() => {
    document.title = 'Blogs';
  }, []);

  return (
    <div>
      <Banner title='Blogs' />
      <Breadcrumbs />
      <div className='flex justify-center items-center'>
        <div className='container my-6'>
          <h1 className='ml-2'>Recent blogs</h1>
          <div className='flex flex-col lg:flex-row flex-wrap'>
            {blog_lists.map((blog) => {
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
