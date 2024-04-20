import styles from './home.module.scss';

import { PopularCountriesList } from '../../widgets/popularCountriesList/PopularCountriesList';
import { PopularBeachesList } from '../../widgets/popularBeachesList/PopularBeachesList';
import { SignUpForHotTrips } from '../../entities/signUpForHotTrips/SignUpForHotTrips';
import { HomeCardsList } from '../../widgets/homeCardsList/HomeCardsList';

import { BackToTheTopButton } from '../../shared/ui/backToTheTopButton/BackToTheTopButton';

const Home = () => {
  return (
    <div className={styles.home}>
      <HomeCardsList />
      <PopularCountriesList />
      <PopularBeachesList />
      <SignUpForHotTrips />

      <BackToTheTopButton />
    </div>
  );
};

export default Home;
