import styles from './header.module.scss';
import Navbar from '../navbar/Navbar';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar />
    </div>
  );
};
