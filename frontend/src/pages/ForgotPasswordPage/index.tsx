import React from 'react';
import loginImage from '../../../public/assets/images/loginImage.png';
import { AuthenticationTemplate } from '../../components/templates/authenticationTemplate';
import ForgotPassword from '../../components/organisms/ForgotPassword';

const ForgotPasswordPage = () => {
    return (
        <AuthenticationTemplate body={<ForgotPassword />} image={loginImage} />
    );
};

export default ForgotPasswordPage;
