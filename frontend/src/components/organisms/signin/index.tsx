import React, { useState } from 'react';
import { Divider, Grid, Link } from '@mui/material';
import theme from '../../../theme';
import {
    emailPlaceholder,
    emailWarningText,
    emptyField,
    passwordLengthText,
    passwordPlaceholder,
    passwordWarningText,
    regEmail,
    regPassword,
    wrongCredentialsText
} from '../../../utils/constants';
import TypographyComponent from '../../atoms/Typography';
import Button from '../../atoms/Button';
import google from '../../../../public/assets/images/google.svg';
import facebook from '../../../../public/assets/images/facebook.svg';
import microsoft from '../../../../public/assets/images/microsoft.svg';
import SocialLogin from '../../molecules/SocialLoginCard';
import { LabelTestField } from '../../molecules/labelTextField';
import { useAuth0 } from '@auth0/auth0-react';
import { MinetService } from '../../../utils/MinetService';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../redux/user/userreducer';

export const Signin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailHelperText, setEmailHelperText] = useState<string>('');
    const [passwordHelperText, setPasswordHelperText] = useState<string>('');

    const loginHeader = 'Login to Minet';
    const linkForgot = 'Forgot Password';
    const footerText = 'Don’t have an account?';
    const signUpLinkText = 'Signup';
    const signInbuttonText = 'Sign In';
    const { loginWithRedirect } = useAuth0();
    const { user } = useAuth0();
    if (user) console.log(user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (!regEmail.test(e.target.value))
            setEmailHelperText(emailWarningText);
        else {
            setEmailHelperText('');
        }
    };
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (email === '') setEmailHelperText(emptyField);
        else {
            setPassword(e.target.value);
            if (e.target.value.length < 8)
                setPasswordHelperText(passwordLengthText);
            else if (regPassword.test(e.target.value))
                setPasswordHelperText(passwordWarningText);
            else {
                setPasswordHelperText('');
            }
        }
    };

    const handleSignIn = () => {
        MinetService.getUserLogin(email, btoa(password))
            .then((response) => {
                const token = response.data.token;
                MinetService.getUser(email).then((response) => {
                    dispatch(
                        userActions.loginUser({
                            ...response.data,
                            token: token
                        })
                    );
                    navigate('/dashboard');
                });
            })
            .catch(() => {
                setEmailHelperText(wrongCredentialsText);
                setPasswordHelperText(wrongCredentialsText);
            });
    };
    return (
        <>
            <Grid
                container
                direction="column"
                sx={{ maxWidth: theme.spacing(128) }}
                data-testid="sign in"
            >
                <Grid item container rowGap={8} direction="column">
                    <Grid item>
                        <TypographyComponent variant="h4">
                            {loginHeader}
                        </TypographyComponent>
                    </Grid>
                    <Grid item container direction="column" rowSpacing={6}>
                        <Grid item>
                            <LabelTestField
                                id="email"
                                label="Email"
                                type="text"
                                value={email}
                                placeholder={emailPlaceholder}
                                onChange={handleEmail}
                                helperText={emailHelperText}
                                error={!!emailHelperText}
                            />
                        </Grid>
                        <Grid item>
                            <LabelTestField
                                id="password"
                                label="Password"
                                type="password"
                                value={password}
                                placeholder={passwordPlaceholder}
                                onChange={handlePassword}
                                helperText={passwordHelperText}
                                error={!!passwordHelperText}
                            />
                        </Grid>
                        <Grid item>
                            <Link href="/forgot-password" underline={'none'}>
                                <TypographyComponent variant="body2">
                                    {linkForgot}
                                </TypographyComponent>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="primary"
                                onClick={handleSignIn}
                                disabled={
                                    !(
                                        regEmail.test(email) &&
                                        !regPassword.test(password)
                                    )
                                }
                                fullWidth
                                data-testid="signin-button"
                            >
                                {signInbuttonText}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    rowGap={11}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} />
                    <Grid
                        item
                        container
                        xs={12}
                        alignItems="center"
                        alignContent="center"
                        columnSpacing={2}
                    >
                        <Grid item xs={5.7}>
                            <Divider
                                sx={{
                                    border: `1px solid ${theme.palette.grey[100]}`
                                }}
                            />
                        </Grid>
                        <Grid item xs={0.6}>
                            <TypographyComponent
                                variant="caption1"
                                color={theme.palette.text.mediumEmphasis}
                            >
                                Or
                            </TypographyComponent>
                        </Grid>
                        <Grid item xs={5.7}>
                            <Divider
                                sx={{
                                    border: `1px solid ${theme.palette.grey[100]}`
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container columnSpacing={5} rowGap={2}>
                        <Grid item>
                            <SocialLogin
                                src={google}
                                text="Google"
                                onClick={() => loginWithRedirect()}
                            />
                        </Grid>
                        <Grid item>
                            <SocialLogin src={facebook} text="Facebook" />
                        </Grid>
                        <Grid item>
                            <SocialLogin src={microsoft} text="Microsoft" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container rowSpacing={8} direction="column">
                    <Grid item></Grid>
                    <Grid item container columnGap={2}>
                        <TypographyComponent
                            variant="body1"
                            sx={{
                                color: theme.palette.text.mediumEmphasis
                            }}
                        >
                            {footerText}
                        </TypographyComponent>
                        <Link href="/signup" underline={'none'}>
                            <TypographyComponent variant="body1">
                                {signUpLinkText}
                            </TypographyComponent>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
