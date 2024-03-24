import { FC } from 'react';
import styles from './HomeCard.module.scss';
import { Button, Text } from '../../shared/ui';

interface HomeCardProps {
  flexDir: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  alterativeTxt: string;
  btnHeader: string;
  btnTxt: string;
  header: string;
  imgSrc: string;
  txt: string;
}

const HomeCard: FC<HomeCardProps> = ({
  flexDir,
  alterativeTxt,
  btnHeader,
  btnTxt,
  header,
  imgSrc,
  txt,
}) => {
  return (
    <div className={styles.homeCard} style={{ flexDirection: flexDir }}>
      <img src={imgSrc} alt={alterativeTxt} className={styles.image} />
      <div className={styles.textBlock}>
        <div className={styles.header}>
          <Text tag={'h1'} weight={'semibold'} size={'l'} color={'blue'}>
            {header}
          </Text>
        </div>
        <Text tag={'p'} align={'justify'}>
          {txt}
        </Text>
        <div className={styles.btnBlock}>
          <Text tag={'h2'} weight={'medium'} size={'m'}>
            {btnHeader}
          </Text>
          <div className={styles.btn}>
            <Button
              size='s'
              type='button'
              theme='primary'
              /* eslint-disable */
              onClick={() => console.log('button clicked')}
            >
              {btnTxt}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
