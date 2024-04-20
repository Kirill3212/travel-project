import styles from './auth.module.scss';
import { PATH_PAGE } from '../../app/paths';
import { Input, Button, Text, Link } from '../../shared/ui/index';

const SignUpForm = () => {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authContainer_header}>
        <Text tag='h2' color='purple'>
          Sign up
        </Text>
        <Text tag='span'>Create your Account</Text>
      </div>
      <Input width='max' size='s' placeholder='Username' theme='standart' type='input' />
      <Input width='auto' size='s' placeholder='Email' theme='standart' type='email' />
      <Input width='auto' size='s' placeholder='Password' theme='standart' type='password' />
      <Input
        width='auto'
        size='s'
        placeholder='Confirm Password'
        theme='standart'
        type='password'
      />
      <Button theme='secondary' width='max'>
        Sign Up
      </Button>
      <div>
        <Text tag='span'>
          Already have an account ? <Link to={PATH_PAGE.signIn}>Yeap</Link>
        </Text>
      </div>
    </div>
  );
};

export default SignUpForm;
