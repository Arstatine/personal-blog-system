import Banner from '../../components/Banner';
import Breadcrumbs from '../../components/Breadcrumbs';
import { darkMode } from '../../constant/utils';

function About() {
  return (
    <div>
      <div
        className={`border-b w-full ${
          darkMode.value ? 'border-dark-secondary' : 'border-light-secondary'
        }`}
      ></div>
      <Banner title='About' />
      <Breadcrumbs />
    </div>
  );
}

export default About;
