import styles from './popularBeachList.module.scss';
import { PopularBeachType } from '../../types/types';
import { FaArrowTurnDown } from 'react-icons/fa6';
import { Text } from '../../shared/ui';
import { v4 as uuidv4 } from 'uuid';

import { useGetPopularBeachesQuery } from '../../api/api';
import { PopularBeachCard } from '../../entities/popularBeachCard/PopularBeachCard';

import { LoadingRequest } from '../../components/loadingRequest/LoadingRequest';
import { ErrorRequest } from '../../components/errorRequest/ErrorRequest';

export const PopularBeachesList = () => {
  const { data: popularBeaches, isLoading, error } = useGetPopularBeachesQuery('');

  return (
    <div className={styles.popularBeachesListContainer}>
      {isLoading && <LoadingRequest />}
      {error && !isLoading && <ErrorRequest />}

      {popularBeaches && (
        <div className={styles.popularBeachesList}>
          {/* Header */} {/* SubHeader 1*/}
          <div className={styles.popularBeachesList_header}>
            <div className={styles.popularBeachesList_header_subHeaderOne}>
              <Text tag={'h1'} size={'xl'} color={'purple'} weight={'medium'}>
                {popularBeaches.header.title}
              </Text>
              <div className={styles.popularBeachesList_header_subHeaderOne_arrow}>
                <FaArrowTurnDown size={80} />
              </div>
            </div>

            {/* SubHeader 2*/}
            <div className={styles.popularBeachesList_header_subHeaderTwo}>
              <div className={styles.popularBeachesList_header_subHeaderTwo_title}>
                <Text tag='span' size='l' color='blue' weight='medium'>
                  {popularBeaches.header.subTitle}
                </Text>
              </div>
              <img
                src={popularBeaches.header.logo}
                className={styles.popularBeachesList_header_subHeaderTwo_logo}
                alt='minivan logo'
              />
            </div>
          </div>
          {/* Body */}
          <div className={styles.popularBeachesList_body}>
            {popularBeaches.beaches.map((popularBeach: PopularBeachType) => (
              <PopularBeachCard
                key={uuidv4()}
                activities={popularBeach.activities}
                description={popularBeach.description}
                image={popularBeach.image}
                location={popularBeach.location}
                name={popularBeach.name}
                rating={popularBeach.rating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
