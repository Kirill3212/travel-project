import styles from './signUpForEmailsForm.module.scss';
import signUpForEmails from '../../assets/signUpForEmails/signUpForEmails.png';
import { Input, Button, Text } from '../../shared/ui/index';

const SignUpForEmailsForm = () => {
  return (
    <div className={styles.wrapper}>
      <img src={signUpForEmails} alt='place image' className={styles.wrapper_image} />

      <div className={styles.signUpForEmailsForm}>
        {/* Header */}
        <Text tag='h2' size='l' color='darkGrey'>
          We will give you just the right amount of love!
        </Text>

        {/* Body */}
        <div className={styles.signUpForEmailsForm_body}>
          <Text tag='span' color='blue'>
            No Spam, we promise
          </Text>
          <Text tag='span'>Email adress</Text>
          <div className={styles.signUpForEmailsForm_body_input}>
            <Input type='input' theme='standart' width='max' placeholder='Email address'></Input>
          </div>
          <Button type='submit' size='m' theme='primary' width='max'>
            Sign Me Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForEmailsForm;
