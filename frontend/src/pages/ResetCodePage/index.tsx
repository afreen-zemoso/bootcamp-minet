import React from 'react';
import loginImage from '../../../public/assets/images/loginImage.png';
import { AuthenticationTemplate } from '../../components/templates/authenticationTemplate';
import ResetCode from '../../components/organisms/ResetCode';

const ResetCodePage = () => {
    return <AuthenticationTemplate body={<ResetCode />} image={loginImage} />;
};

export default ResetCodePage;
