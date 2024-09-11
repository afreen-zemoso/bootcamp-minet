import React from 'react';
import { AuthenticationTemplate } from '../../components/templates/authenticationTemplate';
import signupImage from '../../../public/assets/images/signup.png';
import SignUp from '../../components/organisms/SignUp';

const SignupPage = () => {
    return <AuthenticationTemplate body={<SignUp />} image={signupImage} />;
};

export default SignupPage;
