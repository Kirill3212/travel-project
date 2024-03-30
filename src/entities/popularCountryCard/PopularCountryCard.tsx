import { FC } from 'react';
import styles from './popularCountryCard.module.scss';
import { Button, Text } from '../../shared/ui';
import { PopularCountryType } from '../../types/types';

export const PopularCountryCard: FC<PopularCountryType> = ({
  capital,
  flagImage,
  image,
  name,
  popularExpression,
}) => {
  return (
    <div className={styles.countryCard}>
      {/* Header */}
      <div className={styles.countryCard_header}>
        <div className={styles.countryCard_header_text}>
          <Text tag={'h2'} size={'m'} color={'purple'}>
            {name}
          </Text>
          <Text tag={'h2'} size={'s'} color={'blue'}>
            Capital : {capital}
          </Text>
        </div>
        <div className={styles.countryCard_header_flag}>
          <img src={flagImage} width={'45px'} alt='' />
        </div>
      </div>

      {/* Body */}
      <div className={styles.countryCard_body}>
        <img src={image} alt='image of a country' className={styles.countryCard_body_image} />
        <div className={styles.countryCard_body_expression}>
          <Text tag={'h3'} size={'s'} weight={'medium'}>
            {popularExpression}
          </Text>
        </div>
        <Button size={'m'} theme={'secondary'} width={'max'}>
          Plan Trip To {name}
        </Button>
      </div>
    </div>
  );
};
