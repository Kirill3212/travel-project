import styles from './layout.module.scss';

import { Outlet } from 'react-router-dom';

import Header from '../../widgets/header/Header';
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
