import styles from './navbar.module.scss';
import logo from '../../assets/general/logo.png';
import lottery from '../../shared/icons/lottery.svg';
import { PATH_PAGE } from '../../app/paths';
import { NAV_LINKS_USER, NAV_LINKS_GUEST, NAV_LINK_DISCOVER } from './constants';
import { Link, Text } from '../../shared/ui/index';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const auth = false;
  const navigate = useNavigate();

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

            {/* Dropdown menu Discover */}
              <div className={styles.dropdown}>
                <Link to={NAV_LINK_DISCOVER.discover.path} size={'m'} color={'purple'}>
                  {NAV_LINK_DISCOVER.discover.name}
                </Link>
                <div className={styles.menu}>
                  <Link to='' color='purple'>
                    {NAV_LINK_DISCOVER.allPlaces}
                  </Link>
                  <Link to='' color='purple'>
                    {NAV_LINK_DISCOVER.latestPlaces}
                  </Link>
                  <Link to='' color='purple'>
                    {NAV_LINK_DISCOVER.mostPopular}
                  </Link>
                  <Link to='' color='purple'>
                    {NAV_LINK_DISCOVER.random}
                  </Link>
                </div>
              </div>

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
                  navigate(PATH_PAGE.signIn)
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
                  navigate(PATH_PAGE.signUp);
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
