import { useRef } from 'react';

function Button({
  classText,
  buttonText,
  type,
  rippleBg = '#fff',
  onClickHandle,
}) {
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    const button = buttonRef.current;

    const rect = button.getBoundingClientRect();
    const xInside = e.clientX - rect.left;
    const yInside = e.clientY - rect.top;

    const circle = document.createElement('span');
    circle.className = 'circle';
    circle.style.cssText = `top: ${yInside}px; left: ${xInside}px; background-color: ${rippleBg} `;

    button.appendChild(circle);
    onClickHandle();

    setTimeout(() => {
      button.removeChild(circle);
    }, 600);
  };

  return (
    <button
      className={`ripple ${classText}`}
      type={type}
      onClick={handleClick}
      ref={buttonRef}
    >
      {buttonText}
    </button>
  );
}

export default Button;
