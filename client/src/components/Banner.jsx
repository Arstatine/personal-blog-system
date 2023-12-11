import banner from '../assets/banner.jpg';

function Banner({ title }) {
  return (
    <div className='relative'>
      <div className='absolute w-full h-full top-0 left-0 backdrop-blur-sm flex items-center justify-center text-dark-text font-bold text-md drop-shadow-lg uppercase tracking-widest'>
        <span className='h-[2px] w-[20px] bg-light-bg mx-3'></span>
        {title}
        <span className='h-[2px] w-[20px] bg-light-bg mx-3'></span>
      </div>
      <img src={banner} alt='' className='h-[200px] w-full object-cover' />
    </div>
  );
}

export default Banner;
