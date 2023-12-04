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

  console.log(search.get('q'));
  return (
    <div
      className={`flex justify-center items-center flex-col ${
        darkMode.value ? 'bg-dark-bg' : 'bg-light-bg'
      }`}
    >
      <div className='border-b w-full border-[#aaa]'></div>
      <Breadcrumbs />

      <div className={`flex justify-center items-center w-full p-8`}>
        <div
          className={`container text-center ${
            darkMode.value ? 'text-light-bg' : 'text-dark-bg'
          }`}
        >
          <h1 className='text-3xl'>WHAT ARE YOU LOOKING FOR?</h1>
          <p className='text-lg'>Search for content, article or blog</p>
          <div className='flex items-stretch justify-center mt-5'>
            <input
              type='text'
              value={text}
              className={`px-4 py-4 w-[90%] lg:w-[50%]  outline-none ${
                darkMode.value
                  ? 'bg-slate-100 text-dark-bg'
                  : 'bg-neutral-700 text-light-bg'
              }`}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyboardEnter}
              placeholder='Search...'
            />
            <Button
              buttonText='Search'
              classText={`px-6 shrink-0 ${
                darkMode.value
                  ? 'bg-light-accent text-light-bg'
                  : 'bg-dark-accent text-light-bg'
              }`}
              onClickHandle={() => handleSearch()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
