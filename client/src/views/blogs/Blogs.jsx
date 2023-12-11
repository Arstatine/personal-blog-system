import Banner from '../../components/Banner';
import Breadcrumbs from '../../components/Breadcrumbs';
import { darkMode } from '../../constant/utils';

function Blogs() {
  return (
    <div>
      <div
        className={`border-b w-full ${
          darkMode.value ? 'border-dark-secondary' : 'border-light-secondary'
        }`}
      ></div>
      <Banner title='Blogs' />
      <Breadcrumbs />
    </div>
  );
}

export default Blogs;
