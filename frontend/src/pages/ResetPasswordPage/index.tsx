import React from 'react';
import loginImage from '../../../public/assets/images/loginImage.png';
import { AuthenticationTemplate } from '../../components/templates/authenticationTemplate';
import ResetPassword from '../../components/organisms/resetPassword';

const ResetPasswordPage = () => {
    return (
        <AuthenticationTemplate body={<ResetPassword />} image={loginImage} />
    );
};

export default ResetPasswordPage;
