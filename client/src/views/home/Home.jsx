import { darkMode } from '../../constant/utils';
import videoBanner from '../../assets/banner-video.mp4';

function Home() {
  return (
    <div>
      <div
        className={`transition-all relative flex justify-center items-center ${
          darkMode.value ? 'bg-dark-bg' : 'bg-light-bg'
        }`}
      >
        <p className='absolute h-full w-full tracking-widest top-0 uppercase left-0 z-10  flex justify-center items-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-lg'>
          Foodtrip
        </p>
        <video
          src={videoBanner}
          autoPlay
          muted
          loop
          preload='auto'
          loading='lazy'
          className='h-auto md:h-[80vh] w-full object-contain md:object-cover'
        />
      </div>
      <div className='h-[1000px]'></div>
    </div>
  );
}

export default Home;
