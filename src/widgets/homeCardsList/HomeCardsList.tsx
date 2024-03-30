import styles from './homeCardsList.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { HomeCardType } from '../../types/types';
import { Text } from '../../shared/ui';

import { useGetHomeCardsQuery } from '../../api/api';
import { HomeCard } from '../../entities/homeCard/HomeCard';

import { ErrorRequest } from '../../components/errorRequest/ErrorRequest';
import { LoadingRequest } from '../../components/loadingRequest/LoadingRequest';

export const HomeCardsList = () => {
  const { data: homeCards, isLoading, error } = useGetHomeCardsQuery('');

  return (
    <div className={styles.homeCardsList}>
      {isLoading && <LoadingRequest />}
      {error && !isLoading && <ErrorRequest />}

      {homeCards && (
        <>
          <div className={styles.homeCardsList_header}>
            <Text tag={'h1'} size={'xl'} color={'green'} weight={'medium'}>
              {homeCards.header.title}
            </Text>
            <img
              className={styles.homeCardsList_headerLogo}
              src={homeCards.header.logo}
              alt='palm image'
            />
          </div>

          {homeCards.cards.map((homeCard: HomeCardType) => {
            return (
              <HomeCard
                key={uuidv4()}
                flexDir={homeCard.flexDir}
                alterativeTxt={homeCard.alterativeTxt}
                btnHeader={homeCard.btnHeader}
                btnTxt={homeCard.btnTxt}
                header={homeCard.header}
                imgSrc={homeCard.imgSrc}
                txt={homeCard.txt}
              />
            );
          })}
        </>
      )}
    </div>
  );
};
