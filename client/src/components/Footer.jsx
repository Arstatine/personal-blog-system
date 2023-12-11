import { darkMode } from '../constant/utils';

function Footer() {
  return (
    <div
      className={`p-8 text-center ${
        darkMode.value
          ? 'bg-dark-bg text-dark-text'
          : 'bg-light-bg text-light-text'
      }`}
    >
      &copy; Xenon
    </div>
  );
}

export default Footer;
