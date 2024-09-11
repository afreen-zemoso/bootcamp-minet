import React, { useState } from 'react';
import { Box, Grid, Link, styled } from '@mui/material';
import Button from '../../atoms/Button';
import TypographyComponent from '../../atoms/Typography';
import theme from '../../../theme/index';
import {
    forgotPassword,
    backTo,
    loginText,
    resetCodeText,
    resetPassword,
    resetCode,
    resetCodeValue,
    regCode
} from '../../../utils/constants';
import { LabelTestField } from '../../molecules/labelTextField';
import { useNavigate, useParams } from 'react-router-dom';
import { ResetCodeType } from '../../../utils/interfaces/ResetCodeType';
export const BottomText = () => {
    return (
        <TypographyComponent
            variant="body1"
            color={theme.palette.text.mediumEmphasis}
        >
            {backTo}
            <Link href="/" underline={'none'}>
                {loginText}
            </Link>
        </TypographyComponent>
    );
};

const ResetCode = () => {
    const { email } = useParams();
    const [formData, setFormData] = useState<ResetCodeType>({
        resetCode: ''
    });
    const navigate = useNavigate();

    const handleInputChange = (fieldName: string, value: string) => {
        if (regCode.test(value)) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [fieldName]: value
            }));
        }
    };

    const isLinkEnabled =
        regCode.test(formData.resetCode) &&
        formData.resetCode === resetCodeValue &&
        formData.resetCode.length === 8;

    const StyledBox = styled(Box)({
        '& .buttonClass': {
            width: theme.spacing(130),
            marginTop: theme.spacing(-1)
        }
    });

    return (
        <Box
            data-testid="reset code"
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
                        {resetCode}
                    </TypographyComponent>
                </Grid>
                <LabelTestField
                    id="code"
                    label=""
                    type="text"
                    value={formData.resetCode}
                    onChange={(e) =>
                        handleInputChange('resetCode', e.target.value)
                    }
                    placeholder={resetCodeText}
                    helperText={''}
                    error={false}
                />
            </Box>
            <StyledBox display="flex">
                <Button
                    variant="primary"
                    onClick={() => {
                        navigate(`/reset-password/${email}`);
                    }}
                    data-testid="password-toggle-button"
                    className="buttonClass"
                    disabled={!isLinkEnabled}
                >
                    {resetPassword}
                </Button>
            </StyledBox>
            {BottomText()}
        </Box>
    );
};

export default ResetCode;
