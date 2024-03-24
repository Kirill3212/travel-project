import styles from './Home.module.scss';
import HomeCard from '../../entities/homeCard/HomeCard';
import { HOME_CARDS } from './constants';
import { Text } from '../../shared/ui';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <Text tag={'h1'} size={'xl'} color={'green'} weight={'medium'}>
          Your Adventure Starts Today
        </Text>
        <img className={styles.headerLogo} src={'src/assets/palm-tree.png'} alt='palm image' />
      </div>
      {/* Home Cards */}
      {HOME_CARDS.map((homeCard, index) => (
        <HomeCard
          key={index}
          flexDir={homeCard.flexDir as 'row' | 'row-reverse' | 'column' | 'column-reverse'}
          imgSrc={homeCard.imgSrc}
          header={homeCard.header}
          txt={homeCard.txt}
          btnHeader={homeCard.btnHeader}
          btnTxt={homeCard.btnTxt}
          alterativeTxt={homeCard.alterativeTxt}
        />
      ))}

      {/* Countries */}
      {/* <div>
        <h1>Countries People Choose</h1>
        <div style={{ display: 'grid', gap: 6, gridTemplateColumns: 'repeat(3, 200px)' }}>
          <div style={{ height: '200px', backgroundColor: 'green' }}>Country 1</div>
          <div style={{ height: '200px', backgroundColor: 'green' }}>Country 2</div>
          <div style={{ height: '200px', backgroundColor: 'green' }}>Country 3</div>
          <div style={{ height: '200px', backgroundColor: 'green' }}>Country 4</div>
          <div style={{ height: '200px', backgroundColor: 'green' }}>Country 5</div>
          <div style={{ height: '200px', backgroundColor: 'green' }}>Country 6</div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
