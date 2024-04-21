import { useEffect } from 'react';
import SignUpForEmailsForm from '../../features/signUpForEmailsForm/SignUpForEmailsForm';

const SignUpEmails = () => {
  useEffect(() => {
    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  }, []);

  return <SignUpForEmailsForm />;
};

export default SignUpEmails;
