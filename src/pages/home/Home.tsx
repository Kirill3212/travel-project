import styles from './home.module.scss';

import { PopularCountriesList } from '../../widgets/popularCountriesList/PopularCountriesList';
import { HomeCardsList } from '../../widgets/homeCardsList/HomeCardsList';

const Home = () => {
  return (
    <div className={styles.home}>
      <HomeCardsList />
      <PopularCountriesList />
    </div>
  );
};

export default Home;
