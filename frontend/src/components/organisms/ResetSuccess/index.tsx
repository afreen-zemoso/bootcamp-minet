import { Grid } from '@mui/material';
import React from 'react';
import CircleTick from '../../../../public/assets/images/tick-circle.svg';
import theme from '../../../theme';
import TypographyComponent from '../../atoms/Typography';
import Button from '../../atoms/Button';
import {
    login,
    loginProceedText,
    passwordResetSuccess
} from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';

const ResetSucess = () => {
    const navigate = useNavigate();
    const customStyle = {
        padding: theme.spacing(6),
        background: theme.palette.primary[100],
        border: '1px solid #E8E8F7',
        borderRadius: theme.spacing(3),
        gap: theme.spacing(3)
    };
    return (
        <Grid
            data-testid="ResetSuccess"
            container
            direction="row"
            sx={{ maxWidth: theme.spacing(128) }}
        >
            <TypographyComponent
                variant={'h4'}
                sx={{ paddingBottom: theme.spacing(8) }}
            >
                Reset Password
            </TypographyComponent>

            <Grid item container sx={customStyle}>
                <img src={CircleTick} />
                <Grid item>
                    <TypographyComponent variant={'body1'}>
                        {passwordResetSuccess}
                    </TypographyComponent>
                    <TypographyComponent
                        variant={'body2'}
                        color={theme.palette.text.mediumEmphasis}
                    >
                        {loginProceedText}
                    </TypographyComponent>
                </Grid>
            </Grid>
            <Grid
                item
                container
                sx={{
                    maxWidth: theme.spacing(128),
                    paddingTop: theme.spacing(6)
                }}
            >
                <Button
                    variant="primary"
                    fullWidth
                    onClick={() => navigate('/')}
                >
                    {login}
                </Button>
            </Grid>
        </Grid>
    );
};

export default ResetSucess;
