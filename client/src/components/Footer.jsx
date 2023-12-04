import { darkMode } from '../constant/utils';

function Footer() {
  return (
    <div
      className={`p-8 text-center ${
        darkMode.value ? 'bg-light-bg text-dark-bg' : 'bg-dark-bg text-light-bg'
      }`}
    >
      &copy; Xenon
    </div>
  );
}

export default Footer;
