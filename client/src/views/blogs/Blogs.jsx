import { useEffect } from 'react';
import Banner from '../../components/Banner';
import Breadcrumbs from '../../components/Breadcrumbs';

function Blogs() {
  useEffect(() => {
    document.title = 'Blogs';
  }, []);

  return (
    <div>
      <Banner title='Blogs' />
      <Breadcrumbs />
    </div>
  );
}

export default Blogs;
