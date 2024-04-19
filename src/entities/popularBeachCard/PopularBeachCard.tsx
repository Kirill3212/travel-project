import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaStar } from 'react-icons/fa6';
import styles from './popularBeachCard.module.scss';
import { PopularBeachType } from '../../types/types';
import { Text, Button } from '../../shared/ui';

export const PopularBeachCard: FC<PopularBeachType> = ({
  activities,
  description,
  image,
  location,
  name,
  rating,
}) => {
  return (
    <div className={styles.popularBeachCard}>
      {/* Heading */}
      <div className={styles.popularBeachCard_heading}>
        <Text tag='h2'>{name}</Text>
        <div className={styles.popularBeachCard_heading_rating}>
          <Text tag='span' size='m'>
            {rating}
          </Text>
          <FaStar color='gold' size={22} />
        </div>
      </div>

      {/* Body */}
      <div className={styles.popularBeachCard_body}>
        <img src={image} className={styles.popularBeachCard_body_image} alt='picture of a beach' />
        <Text tag='h4' color='blue'>
          {location}
        </Text>

        <div className={styles.popularBeachCard_body_description}>
          <Text tag='p'>{description}</Text>
        </div>

        <div className={styles.popularBeachCard_body_activities}>
          <Text tag='h4' color='purple' align='center'>
            Activities:
          </Text>
          <div>
            {activities.map((activity) => (
              <div key={uuidv4()}>{activity}</div>
            ))}
          </div>
        </div>
      </div>

      <Button width='max'>Get a tan at this beach</Button>
    </div>
  );
};
