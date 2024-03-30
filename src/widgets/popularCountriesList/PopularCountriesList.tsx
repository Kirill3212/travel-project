import styles from './popularCountriesList.module.scss';
import { PopularCountryType } from '../../types/types';
import { Text } from '../../shared/ui';
import { v4 as uuidv4 } from 'uuid';

import { useGetPopularCountriesQuery } from '../../api/api';
import { PopularCountryCard } from '../../entities/popularCountryCard/PopularCountryCard';

import { ErrorRequest } from '../../components/errorRequest/ErrorRequest';
import { LoadingRequest } from '../../components/loadingRequest/LoadingRequest';

export const PopularCountriesList = () => {
  const { data: popularCountries, isLoading, error } = useGetPopularCountriesQuery('');

  return (
    <div className={styles.popularCountriesList}>
      {isLoading && <LoadingRequest />}
      {error && !isLoading && <ErrorRequest />}

      {popularCountries && (
        <>
          <div className={styles.popularCountriesList_header}>
            <Text tag={'h1'} size={'xl'} color={'purple'} weight={'medium'}>
              {popularCountries.header.title}
            </Text>
            <img
              className={styles.popularCountriesList_headerLogo}
              src={popularCountries.header.logo}
              alt='world with flags image'
            />
          </div>

          <div className={styles.popularCountriesList_cardsList}>
            {popularCountries.countries.map((popularCountry: PopularCountryType) => (
              <PopularCountryCard
                key={uuidv4()}
                capital={popularCountry.capital}
                flagImage={popularCountry.flagImage}
                image={popularCountry.image}
                name={popularCountry.name}
                popularExpression={popularCountry.popularExpression}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
