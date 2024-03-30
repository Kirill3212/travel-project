import styles from './header.module.scss';

import UserNavbar from '../navbars/userNavbar/UserNavbar';
import GuestNavbar from '../navbars/guestNavbar/GuestNavbar';

const Header = () => {
  const auth = true;

  return <div className={styles.header}>{auth ? <UserNavbar /> : <GuestNavbar />}</div>;
};

export default Header;
