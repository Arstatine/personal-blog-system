import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import { darkMode } from '../../constant/utils';

function CurrentCategory() {
  const { id } = useParams();

  return (
    <div>
      <div
        className={`border-b w-full ${
          darkMode.value ? 'border-dark-secondary' : 'border-light-secondary'
        }`}
      ></div>
      <Breadcrumbs />
      <div className='break-words'>{id}</div>
    </div>
  );
}

export default CurrentCategory;
