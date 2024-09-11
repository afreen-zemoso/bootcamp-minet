import { AuthenticationTemplate } from '../../components/templates/authenticationTemplate';
import SignInPanelImage from '../../../public/assets/images/loginImage.png';
import { Signin } from '../../components/organisms/signin';

const SignInPage: React.FC = () => {
    return (
        <AuthenticationTemplate body={<Signin />} image={SignInPanelImage} />
    );
};

export default SignInPage;
