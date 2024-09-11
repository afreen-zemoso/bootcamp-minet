import React from 'react';
import { AuthenticationTemplate } from '../../components/templates/authenticationTemplate';
import loginImage from '../../../public/assets/images/loginImage.png';
import ResetSucess from '../../components/organisms/ResetSuccess';

const ResetPasswordSuccessPage = () => {
    return <AuthenticationTemplate body={<ResetSucess />} image={loginImage} />;
};

export default ResetPasswordSuccessPage;
