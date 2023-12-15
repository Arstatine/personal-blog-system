import { useEffect } from 'react';
import Banner from '../../components/Banner';
import Breadcrumbs from '../../components/Breadcrumbs';

function About() {
  useEffect(() => {
    document.title = 'About';
  }, []);

  return (
    <div>
      <Banner title='About' />
      <Breadcrumbs />
    </div>
  );
}

export default About;
