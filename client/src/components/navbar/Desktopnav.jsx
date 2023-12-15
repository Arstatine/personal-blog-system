import NavLinks from './NavLinks';

function DesktopNav({ isSticky }) {
  return (
    <nav className='container flex justify-center items-center'>
      <NavLinks isSticky={isSticky} />
    </nav>
  );
}

export default DesktopNav;
