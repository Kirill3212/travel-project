import styles from './signUpForHotTrips.module.scss';
import mail from '../../shared/icons/mail.svg';
import { FaArrowRight } from 'react-icons/fa';
import { Text, Button } from '../../shared/ui/index';

export const SignUpForHotTrips = () => {
  return (
    <div className={styles.signUpForHotTrips}>
      {/* Text */}
      <div className={styles.signUpForHotTrips_text}>
        <Text tag='h1'>Get Emails for Hot Tours</Text>
        <img src={mail} alt='mail' className={styles.signUpForHotTrips_mail} />
      </div>

      {/* Button */}
      <div className={styles.signUpForHotTrips_button}>
        <Button
          size='l'
          theme='neutral_black'
          onClick={() => /* eslint-disable */ console.log('Sign Up Modale')}
        >
          Sign Up
          <div className={styles.signUpForHotTrips_arrow}>
            <FaArrowRight />
          </div>
        </Button>
      </div>
    </div>
  );
};
