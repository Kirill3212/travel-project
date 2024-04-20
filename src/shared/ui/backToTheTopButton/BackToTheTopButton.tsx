import styles from './backToTheTopButton.module.scss';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

export const BackToTheTopButton = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const btn = document.getElementById('backToTheTopButton');
    if (window.scrollY > 1000) {
      btn!.style.display = 'flex';
    } else {
      btn!.style.display = 'none';
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <button
      type='button'
      onClick={topFunction}
      id='backToTheTopButton'
      className={styles.backToTheTopButton}
    >
      Back To The Top
      <FaRegArrowAltCircleUp size={18} />
    </button>
  );
};
