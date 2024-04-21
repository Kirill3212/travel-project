import styles from './signUpForHotTrips.module.scss';
import mail from '../../shared/icons/mail.svg';
import { FaArrowRight } from 'react-icons/fa';
import { PATH_PAGE } from '../../app/paths';
import { Text, Button } from '../../shared/ui/index';
import { useNavigate } from 'react-router-dom';

export const SignUpForHotTrips = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.signUpForHotTrips}>
      {/* Text */}
      <div className={styles.signUpForHotTrips_text}>
        <Text tag='h1'>Get Emails for Hot Tours</Text>
        <img src={mail} alt='mail' className={styles.signUpForHotTrips_mail} />
      </div>

      {/* Button */}
      <div className={styles.signUpForHotTrips_button}>
        <Button size='l' theme='neutral_black' onClick={() => navigate(PATH_PAGE.signUpEmails)}>
          Sign Up
          <div className={styles.signUpForHotTrips_arrow}>
            <FaArrowRight />
          </div>
        </Button>
      </div>
    </div>
  );
};
