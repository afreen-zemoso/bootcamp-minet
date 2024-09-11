import React from 'react';
import MuiTypography from '../../atoms/Typography';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../theme';
import Image from '../../atoms/Image';

interface SocialLoginProps {
    text: string;
    src: string;
    onClick?: () => void;
}
const StylesBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `${theme.spacing(5)} ${theme.spacing(10)}`,
    gap: theme.spacing(2),
    background: theme.palette.primary[100],
    border: `1px solid ${theme.palette.grey[100]}`,
    borderRadius: theme.spacing(3),
    width: theme.spacing(39.3325),
    height: theme.spacing(24)
});

const SocialLogin = ({ text, src, onClick }: SocialLoginProps) => {
    return (
        <StylesBox data-testid="socialIconComponent" onClick={onClick}>
            <Image src={src} alt={'image'} />
            <MuiTypography
                sx={{ color: theme.palette.text.mediumEmphasis }}
                variant="body1"
            >
                {text}
            </MuiTypography>
        </StylesBox>
    );
};
export default SocialLogin;
