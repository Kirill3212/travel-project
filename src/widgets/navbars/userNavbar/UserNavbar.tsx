import styles from './userNavbar.module.scss';
import logo from '../../../assets/logo.png';
import { Link, Text } from '../../../shared/ui';
import { PATH_PAGE } from '../../../app/paths';
import { NAV_LINKS } from './constants';

const UserNavbar = () => {
  return (
    <div className={styles.userNavbar}>
      {/* Logo */}
      <Link to={PATH_PAGE.root}>
        <div className={styles.logo}>
          <img src={logo} alt='logo' />
          <Text tag={'span'} size={'l'} weight={'medium'} color={'purple'}>
            Traveler
          </Text>
        </div>
      </Link>
      {/* Navigation Links */}
      <div className={styles.navLinksContainer}>
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((navlink) => (
            <li key={navlink.name}>
              <Link to={navlink.path} size={'m'} color={'purple'}>
                {navlink.name}
              </Link>
            </li>
          ))}
          <li
            style={{ cursor: 'pointer' }}
            onClick={() => {
              /* eslint-disable */
              console.log('signed out');
            }}
          >
            <Text tag={'span'} size={'m'}  color={'purple'}>
              Sign out
            </Text>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserNavbar;
