import styles from './navbar.module.scss';
import lottery from '../../shared/icons/lottery.svg';
import logo from '../../assets/general/logo.png';
import { PATH_PAGE } from '../../app/paths';
import { NAV_LINKS_USER, NAV_LINKS_GUEST } from './constants';
import { Link, Text } from '../../shared/ui/index';

const Navbar = () => {
  const auth = false;

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
        {/* Lottery  */}
        <img
          src={lottery}
          alt='lottery'
          className={styles.lottery}
          /* eslint-disable */
          onClick={() => console.log('Try your luck')} // добавить тултип, и модальное окно через react портал, где мини игра
        />

        <ul className={styles.navLinks}>
          {/* User Navbar */}
          {auth && (
            <>
              {NAV_LINKS_USER.map((navLink) => (
                <li key={navLink.name}>
                  <Link to={navLink.path} size={'m'} color={'purple'}>
                    {navLink.name}
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
                <Text tag={'span'} size={'m'} color={'purple'} weight={'bold'}>
                  Sign out
                </Text>
              </li>
            </>
          )}

          {/* Guest Navbar */}
          {!auth && (
            <>
              {NAV_LINKS_GUEST.map((navLink) => (
                <li key={navLink.name}>
                  <Link to={navLink.path} size={'m'} color={'purple'}>
                    {navLink.name}
                  </Link>
                </li>
              ))}
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  /* eslint-disable */
                  console.log('signed in');
                }}
              >
                <Text tag={'span'} size={'m'} color={'purple'} weight='bold'>
                  Sign In
                </Text>
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  /* eslint-disable */
                  console.log('signed up');
                }}
              >
                <Text tag={'span'} size={'m'} color={'purple'} weight='bold'>
                  Sign Up
                </Text>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
