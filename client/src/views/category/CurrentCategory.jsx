import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useEffect } from 'react';

function CurrentCategory() {
  const { id } = useParams();

  useEffect(() => {
    let titleArr = id.split('-');
    let title = [];

    titleArr.map((word) => {
      return title.push(
        `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
      );
    });

    document.title = `${title.join(' ')}`;
  }, [id]);

  return (
    <div>
      <Breadcrumbs />
      <div className='break-words'>{id}</div>
    </div>
  );
}

export default CurrentCategory;
