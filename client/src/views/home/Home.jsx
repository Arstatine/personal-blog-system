import { darkMode } from '../../constant/utils';

function Home() {
  return (
    <div
      className={`h-screen transition-all ${
        darkMode.value ? 'bg-dark-bg' : 'bg-light-bg'
      }`}
    >
      <img
        src='https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.png'
        alt=''
        className='h-auto w-screen object-cover'
      />
    </div>
  );
}

export default Home;
