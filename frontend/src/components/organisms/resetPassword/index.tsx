import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import theme from '../../../theme';
import {
    emptyField,
    mismatchPasswordsMsg,
    passwordLengthText,
    passwordPlaceholder,
    passwordValidationMsg,
    passwordWarningText,
    regPassword,
    resetPassword
} from '../../../utils/constants';
import Button from '../../atoms/Button';
import _ from 'lodash';
import { LabelTestField } from '../../molecules/labelTextField';
import { MinetService } from '../../../utils/MinetService';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState<string>('');
    const [reEnteredPassword, setReEnteredPassword] = useState<string>('');
    const [passwordHelperText, setPasswordHelperText] = useState<string>('');
    const [reEnteredPasswordHelperText, setreEnteredPasswordHelperText] =
        useState<string>('');
    const { email } = useParams();
    const navigate = useNavigate();

    const handleReset = () => {
        if (password !== reEnteredPassword)
            setreEnteredPasswordHelperText(mismatchPasswordsMsg);
        else
            MinetService.resetPassword(
                email as string,
                btoa(reEnteredPassword)
            ).then(() => navigate(`/reset-success`));
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8)
            setPasswordHelperText(passwordLengthText);
        else if (regPassword.test(e.target.value))
            setPasswordHelperText(passwordWarningText);
        else {
            setPasswordHelperText('');
        }
    };

    const handleReEnteredPassword = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (password === '') setPasswordHelperText(emptyField);
        else {
            setReEnteredPassword(e.target.value);
            if (e.target.value.length < 8)
                setreEnteredPasswordHelperText(passwordLengthText);
            else if (regPassword.test(e.target.value))
                setreEnteredPasswordHelperText(passwordWarningText);
            else setreEnteredPasswordHelperText('');
        }
    };
    return (
        <Grid
            data-testid="reset password"
            container
            direction="column"
            rowSpacing={theme.spacing(8)}
            sx={{ maxWidth: theme.spacing(128) }}
        >
            <Grid item>
                <Typography
                    variant="h4"
                    color={theme.palette.text.highEmphasis}
                    sx={{ width: '512px', height: '54px' }}
                >
                    {resetPassword}
                </Typography>
            </Grid>
            <Grid item container direction="column" rowSpacing={6}>
                <Grid item>
                    <LabelTestField
                        id="password"
                        label="Enter Password"
                        type="password"
                        value={password}
                        placeholder={passwordPlaceholder}
                        onChange={handlePassword}
                        helperText={passwordHelperText}
                        error={!!passwordHelperText}
                    />
                </Grid>
                <Grid item>
                    <LabelTestField
                        id="password"
                        label="Re-Enter Password"
                        type="password"
                        value={reEnteredPassword}
                        placeholder={passwordPlaceholder}
                        onChange={handleReEnteredPassword}
                        helperText={reEnteredPasswordHelperText}
                        error={!!reEnteredPasswordHelperText}
                    />
                </Grid>
                <Grid item>
                    <Typography
                        variant="caption2"
                        color={theme.palette.gray[500]}
                    >
                        {passwordValidationMsg}
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        data-testid="resetpassword-button"
                        variant="primary"
                        onClick={handleReset}
                        disabled={
                            !(
                                _.isEmpty(passwordHelperText) &&
                                _.isEmpty(reEnteredPasswordHelperText) &&
                                !_.isEmpty(reEnteredPassword)
                            )
                        }
                        fullWidth
                    >
                        {resetPassword}
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ResetPassword;
