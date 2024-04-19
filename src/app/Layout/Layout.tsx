import styles from './layout.module.scss';
import { Header } from '../../widgets/header/Header';
// Ошибка при билде, хз почему

import { Outlet } from 'react-router-dom';

import Footer from '../../widgets/footer/Footer';

export const Layout = () => {
  return (
    <div className={styles.siteWrapper}>
      <Header />
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
