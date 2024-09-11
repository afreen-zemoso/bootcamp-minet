import { useState } from 'react';
import { Box, Grid, Link, Typography, styled } from '@mui/material';
import Button from '../../atoms/Button';
import { LabelTestField as LabelTextField } from '../../molecules/labelTextField';
import TypographyComponent from '../../atoms/Typography';
import SocialLogin from '../../molecules/SocialLoginCard';
import theme from '../../../../src/theme/index';
import {
    signupHeading,
    fullName,
    namePlaceholder,
    emailText,
    emailTextPlaceholder,
    passwordTextPlaceholder,
    passwordText,
    signupText,
    orText,
    alreadyHaveAccount,
    loginText,
    SocialLoginOptions,
    regEmail,
    regexPassword,
    passwordValidationMsg
} from '../../../../src/utils/constants';
import { MinetService } from '../../../utils/MinetService';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const InnerBox = styled(Box)({
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(1.25)
    },
    '& .signup': {
        width: theme.spacing(130)
    },
    '& .login': {
        marginLeft: theme.spacing(2.5),
        textDecoration: 'none',
        color: theme.palette.primary[500],
        ...theme.typography.body1
    }
});

const SignUp = () => {
    const { loginWithRedirect } = useAuth0();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const handleInputChange = (fieldName: string, value: string) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [fieldName]: value
        }));
    };
    const isSignUpEnabled =
        formData.password.length >= 8 &&
        regexPassword.test(formData.password) &&
        regEmail.test(formData.email);

    const handleSignup = async () => {
        MinetService.signUp(formData).then(() => {
            navigate('/');
        });
    };

    return (
        <Box
            data-testid="sign up"
            display="flex"
            flexDirection="column"
            paddingTop={theme.spacing(7.5)}
            gap={theme.spacing(7.5)}
            width={theme.spacing(128)}
        >
            <Box display="flex" data-testid="heading">
                <TypographyComponent
                    variant="h4"
                    color={theme.palette.text.highEmphasis}
                >
                    {signupHeading}
                </TypographyComponent>
            </Box>
            <InnerBox
                display="flex"
                flexDirection="column"
                data-testid="fullname"
                borderColor={theme.palette.grey[300]}
            >
                <Grid display="flex">
                    <TypographyComponent
                        variant="body1"
                        color={theme.palette.grey[700]}
                    >
                        {fullName}
                    </TypographyComponent>
                </Grid>
                <LabelTextField
                    id="fullname"
                    label=""
                    type="text"
                    onChange={(e) =>
                        handleInputChange('fullName', e.target.value)
                    }
                    placeholder={namePlaceholder}
                    value={formData.fullName}
                    helperText={''}
                    error={false}
                />
            </InnerBox>
            <InnerBox display="flex" flexDirection="column">
                <Grid display="flex">
                    <TypographyComponent
                        variant="body1"
                        color={theme.palette.grey[700]}
                    >
                        {emailText}
                    </TypographyComponent>
                </Grid>
                <LabelTextField
                    id="email"
                    label=""
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder={emailTextPlaceholder}
                    helperText={''}
                    error={false}
                />
            </InnerBox>
            <InnerBox display="flex" flexDirection="column">
                <Grid display="flex">
                    <TypographyComponent
                        variant="body1"
                        color={theme.palette.grey[700]}
                    >
                        {passwordText}
                    </TypographyComponent>
                </Grid>
                <LabelTextField
                    id="password"
                    label=""
                    type="password"
                    onChange={(e) =>
                        handleInputChange('password', e.target.value)
                    }
                    placeholder={passwordTextPlaceholder}
                    value={formData.password}
                    helperText={''}
                    error={false}
                />
            </InnerBox>
            <Grid item>
                <Typography variant="caption2" color={theme.palette.gray[500]}>
                    {passwordValidationMsg}
                </Typography>
            </Grid>
            <InnerBox display="flex" data-testid="signuptext">
                <Button
                    variant="primary"
                    data-testid="password-toggle-button"
                    onClick={handleSignup}
                    className="signup"
                    disabled={!isSignUpEnabled}
                >
                    {signupText}
                </Button>
            </InnerBox>

            <Box
                display="flex"
                alignItems="center"
                width={theme.spacing(128)}
                data-testid="or"
            >
                <Box
                    flex="1"
                    borderBottom={`1px solid ${theme.palette.grey[100]}`}
                />
                <Box mx={1}>
                    <TypographyComponent
                        variant="caption1"
                        color={theme.palette.text.mediumEmphasis}
                    >
                        {orText}
                    </TypographyComponent>
                </Box>
                <Box
                    flex="1"
                    borderBottom={`1px solid ${theme.palette.grey[100]}`}
                />
            </Box>
            <Box
                display="flex"
                gap={theme.spacing(7.5)}
                width={theme.spacing(128)}
            >
                {SocialLoginOptions.map((option) => (
                    <SocialLogin
                        key={option.text}
                        src={option.src}
                        text={option.text}
                        onClick={() => loginWithRedirect()}
                    />
                ))}
            </Box>
            <InnerBox display="flex" data-testid="account">
                <TypographyComponent
                    variant="body1"
                    color={theme.palette.text.mediumEmphasis}
                >
                    {alreadyHaveAccount}
                    <Link href="/" underline={'none'}>
                        <span className="login">{loginText}</span>
                    </Link>
                </TypographyComponent>
            </InnerBox>
        </Box>
    );
};

export default SignUp;