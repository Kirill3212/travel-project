import styles from './home.module.scss';

import { PopularCountriesList } from '../../widgets/popularCountriesList/PopularCountriesList';
import { PopularBeachesList } from '../../widgets/popularBeachesList/PopularBeachesList';
import { SignUpForHotTrips } from '../../widgets/signUpForHotTrips/SignUpForHotTrips';
import { HomeCardsList } from '../../widgets/homeCardsList/HomeCardsList';

const Home = () => {
  return (
    <div className={styles.home}>
      <HomeCardsList />
      <PopularCountriesList />
      <PopularBeachesList />
      <SignUpForHotTrips />
    </div>
  );
};

export default Home;
