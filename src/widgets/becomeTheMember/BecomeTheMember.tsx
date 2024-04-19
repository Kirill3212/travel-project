import styles from './becomeTheMember.module.scss';
import { Text, Button } from '../../shared/ui/';
import becomeTheMember from '../../assets//becomeTheMember/becomeTheMember.gif';

export const BecomeTheMember = () => {
  return (
    <div className={styles.becomeTheMember}>
      <div className={styles.becomeTheMember_imageContainer}>
        <img
          src={becomeTheMember}
          alt='become the member image'
          className={styles.becomeTheMember_imageContainer_image}
        />
      </div>
      <div className={styles.becomeTheMember_text}>
        <Text tag={'h2'} size={'l'}>
          Become a Member to Travel Cheaper
        </Text>
        <Text tag={'p'} align={'justify'}>
          To access exclusive travel discounts, become a member today! Unlock savings on flights,
          hotels, and activities. Join our community of savvy travelers and enjoy affordable
          adventures worldwide. Do not miss out on the opportunity to explore more for less. Sign up
          now and start your journey to cheaper travel!
        </Text>
        <Button>Become The Member</Button>
      </div>
    </div>
  );
};
