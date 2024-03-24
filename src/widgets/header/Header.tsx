import styles from './Header.module.scss';

import UserNavbar from '../userNavbar/UserNavbar';
import GuestNavbar from '../guestNavbar/GuestNavbar';

const Header = () => {
  const auth = true;

  return <div className={styles.header}>{auth ? <UserNavbar /> : <GuestNavbar />}</div>;
};

export default Header;
