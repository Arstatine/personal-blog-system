import { useState } from 'react';
import Button from '../../components/Button';
import { darkMode } from '../../constant/utils';
import { useSearchParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';

function Search() {
  const [search, setSearch] = useSearchParams({ q: '' });
  const [text, setText] = useState('');

  const handleSearch = () => {
    if (text != '') {
      setSearch({ q: text });
    }
  };

  const handleKeyboardEnter = (e) => {
    if (e.key == 'Enter' && text != '') {
      setText(e.target.value);
      setSearch({ q: text });
    }
  };

  return (
    <div
      className={`flex justify-center items-center flex-col ${
        darkMode.value ? 'bg-dark-bg' : 'bg-light-bg'
      }`}
    >
      <Breadcrumbs />

      <div className={`flex justify-center items-center w-full p-8`}>
        <div
          className={`container text-center ${
            darkMode.value ? 'text-light-bg' : 'text-dark-bg'
          }`}
        >
          <h1 className='text-3xl'>WHAT ARE YOU LOOKING FOR?</h1>
          <p className='text-lg'>Search for content, article or blog</p>

          {/* search input and button */}
          <div className='flex items-stretch justify-center mt-5'>
            <input
              type='text'
              value={text}
              className={`p-4 w-[90%] lg:w-[50%] rounded-s outline-none ${
                darkMode.value
                  ? 'bg-light-bg text-light-text'
                  : 'bg-dark-bg text-dark-text'
              }`}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyboardEnter}
              placeholder='Search...'
            />
            <Button
              buttonText='Search'
              classText={`px-6 shrink-0 rounded-e ${
                darkMode.value
                  ? 'bg-dark-secondary text-dark-text'
                  : 'bg-light-secondary text-light-text'
              }`}
              onClickHandle={() => handleSearch()}
            />
          </div>

          <div className='mt-6'>
            <div className='border-b w-full border-[#aaa] mb-5'></div>
            <p className='text-left'>
              Search result for {search.get('q') || '___'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
