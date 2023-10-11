import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;

// An example of using a redirect where we have to catch the auth through the
// getRedirectResult in a useEffect
//
// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
// const SignIn = () => {
//   useEffect(() => {
//     const fetchResponse = async () => {
//       const response = await getRedirectResult(auth);
//       if (response) {
//         const userDocRef = await createUserDocumentFromAuth(response.user);
//       }
//     };
//     fetchResponse();
//   }, []);
