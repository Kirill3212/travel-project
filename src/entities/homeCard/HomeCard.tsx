import { FC } from 'react';
import styles from './homeCard.module.scss';
import { Button, Text } from '../../shared/ui';
import { HomeCardType } from '../../types/types';

export const HomeCard: FC<HomeCardType> = ({
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
      <img src={imgSrc} alt={alterativeTxt} className={styles.homeCard_image} />

      {/* Text Block */}
      <div className={styles.homeCard_textBlock}>
        <div className={styles.homeCard_textBlock_header}>
          <Text tag={'h1'} weight={'semibold'} size={'l'} color={'blue'}>
            {header}
          </Text>
        </div>
        <Text tag={'p'} align={'justify'}>
          {txt}
        </Text>
        <div className={styles.homeCard_textBlock_btnSection}>
          <Text tag={'h2'} weight={'medium'} size={'m'}>
            {btnHeader}
          </Text>
          <div className={styles.homeCard_textBlock_btnSection_btn}>
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


