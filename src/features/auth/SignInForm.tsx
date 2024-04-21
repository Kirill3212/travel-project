import styles from './auth.module.scss';
import { PATH_PAGE } from '../../app/paths';
import travelItems from '../../assets/signInsignUp/signInsignUp.png';
import { Input, Button, Text, Link } from '../../shared/ui/index';

const SignInForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.authContainer}>
        <img src={travelItems} alt='travel items' className={styles.authContainer_image} />
        <div className={styles.authContainer_body}>
          <div className={styles.authContainer_body_header}>
            <Text tag='h2' color='purple'>
              Welcome Back
            </Text>
            <Text tag='span'>Enter your credential to login</Text>
          </div>

          <Input width='max' size='s' placeholder='Username' theme='standart' type='input' />
          <Input width='max' size='s' placeholder='Password' theme='standart' type='password' />
          <Button theme='secondary' width='max'>
            Log In
          </Button>

          <div className={styles.authContainer_body_helperLinks}>
            <Link to={''} color='purple'>
              Forgot Password ?
            </Link>
            <div className={styles.authContainer_body_helperLinks_noAccount}>
              <Text tag='span'>Don not have an account ?</Text>
              <Link to={PATH_PAGE.signUp} color='purple'>
                Nope
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
