import { Grid, Box, styled } from '@mui/material';
import React from 'react';
import theme from '../../../theme/index';
import Dropdown from '../../../../public/assets/images/Dropdown.svg';
import TypographyComponent from '../../atoms/Typography';
import Image from '../../atoms/Image';
import Button from '../../atoms/Button';
import { buttonLabel } from '../../../utils/constants';
import { FooterProps } from '../../../utils/interfaces/Footer';
const StyledBox = styled(Box)({
    padding: theme.spacing(6),
    background: theme.palette.primary[100],
    borderTop: `1px solid ${theme.palette.grey[100]}`,
    '& .textPrimary': {
        color: theme.palette.primary[500]
    },
    '& .textBlack': {
        color: 'black'
    },
    '& .button': {
        height: '42px',
        margin: 0
    }
});
const Footer = ({ menuItems }: FooterProps) => {
    const altDropdown = 'dropdown';
    return (
        <StyledBox data-testid="footer">
            <Grid container columnSpacing={4} alignItems="center">
                <Grid item flexGrow={1}>
                    <div>
                        <Grid container columnSpacing={6}>
                            {menuItems.map((item) => (
                                <Grid item key={item.text}>
                                    <TypographyComponent
                                        variant="body2"
                                        className={
                                            item.isBlack
                                                ? 'textBlack'
                                                : 'textPrimary'
                                        }
                                    >
                                        {item.text}
                                    </TypographyComponent>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </Grid>
                <Grid item>
                    <Image src={Dropdown} alt={altDropdown} />
                </Grid>
                <Grid item>
                    <Button variant="secondary" className="button">
                        {buttonLabel}
                    </Button>
                </Grid>
            </Grid>
        </StyledBox>
    );
};

export default Footer;
