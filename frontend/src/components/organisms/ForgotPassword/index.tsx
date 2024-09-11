import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Button from '../../atoms/Button';
import { LabelTestField } from '../../molecules/labelTextField';
import TypographyComponent from '../../atoms/Typography';
import theme from '../../../../src/theme/index';
import styled from '@emotion/styled';
import {
    forgotPassword,
    emailText,
    sendResetLink,
    emailPlaceholder,
    regEmail,
    invalidUserText
} from '../../../utils/constants';
import { MinetService } from '../../../utils/MinetService';
import { useNavigate } from 'react-router-dom';
import { EmailType } from '../../../utils/interfaces/EmailType';
import { BottomText } from '../ResetCode';

const ForgotPassword = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<EmailType>({
        email: ''
    });

    const ResetCode = () => {
        navigate(`/reset-code/${formData.email}`);
    };

    const [validUserHelperText, setValidUserHelperText] = useState<string>('');

    useEffect(() => {
        setValidUserHelperText('');
    }, [formData.email]);

    const handleInputChange = (fieldName: string, value: string) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [fieldName]: value
        }));
    };

    const isLinkEnabled = regEmail.test(formData.email);

    const handleForgotPassword = () => {
        MinetService.getUser(formData.email)
            .then(() => {
                ResetCode();
            })
            .catch(() => setValidUserHelperText(invalidUserText));
    };

    const StyledBox = styled(Box)({
        '& .buttonClass': {
            width: theme.spacing(130),
            marginTop: theme.spacing(-1)
        }
    });
    return (
        <Box
            data-testid="forgot password"
            display="flex"
            flexDirection="column"
            paddingTop={theme.spacing(7.5)}
            gap={theme.spacing(7.5)}
            maxWidth={512}
        >
            <Box display="flex">
                <TypographyComponent
                    variant="h4"
                    color={theme.palette.text.highEmphasis}
                >
                    {forgotPassword}
                </TypographyComponent>
            </Box>
            <Box display="flex" flexDirection="column">
                <Grid display="flex">
                    <TypographyComponent
                        variant="body1"
                        color={theme.palette.grey[700]}
                    >
                        {emailText}
                    </TypographyComponent>
                </Grid>
                <LabelTestField
                    id="email"
                    label=""
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder={emailPlaceholder}
                    helperText={validUserHelperText}
                    error={!!validUserHelperText}
                />
            </Box>

            <StyledBox display="flex">
                <Button
                    variant="primary"
                    data-testid="password-toggle-button"
                    onClick={handleForgotPassword}
                    className="buttonClass"
                    disabled={!isLinkEnabled}
                >
                    {sendResetLink}
                </Button>
            </StyledBox>
            {BottomText()}
        </Box>
    );
};

export default ForgotPassword;
