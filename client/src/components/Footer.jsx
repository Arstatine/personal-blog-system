import { darkMode } from '../constant/utils';

function Footer() {
  return (
    <div>
      <div
        className={`border-b w-full ${
          darkMode.value ? 'border-dark-secondary' : 'border-light-secondary'
        }`}
      ></div>
      <div
        className={`p-8 text-center ${
          darkMode.value
            ? 'bg-dark-bg text-dark-text'
            : 'bg-light-bg text-light-text'
        }`}
      >
        &copy; Xenon
      </div>
    </div>
  );
}

export default Footer;
