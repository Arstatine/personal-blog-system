import Breadcrumbs from '../../components/Breadcrumbs';
import { darkMode } from '../../constant/utils';
import Banner from '../../components/Banner';

function Category() {
  return (
    <div>
      <div
        className={`border-b w-full ${
          darkMode.value ? 'border-dark-secondary' : 'border-light-secondary'
        }`}
      ></div>
      <Banner title='Categories' />
      <Breadcrumbs />
    </div>
  );
}

export default Category;
