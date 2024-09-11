import { Box, Grid, styled } from '@mui/material';
import theme from '../../../theme';
import TypographyComponent from '../../atoms/Typography';
import Image from '../../atoms/Image';
import Dollar from '../../../../public/assets/images/dollar.svg';
import { Coin, defaultText, Deposit } from '../../../utils/constants';
const StyledBox = styled(Box)({
    padding: theme.spacing(4),
    border: `1px solid ${theme.palette.grey[100]}`,
    borderRadius: theme.spacing(1)
});
const CashDeposit = () => {
    return (
        <>
            <StyledBox data-testid="cashDeposit" rowGap={3}>
                <Grid container>
                    <Grid item>
                        <TypographyComponent variant="body1">
                            {Deposit}
                        </TypographyComponent>
                    </Grid>
                    <Grid item width="100%">
                        <StyledBox marginTop={2} rowGap={3}>
                            <Grid container justifyContent={'space-between'}>
                                <Grid item>
                                    <Grid container gap={theme.spacing(3)}>
                                        <Grid item>
                                            <Image
                                                alt={'dollar_image'}
                                                src={Dollar}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TypographyComponent
                                                variant="caption1"
                                                color={
                                                    theme.palette.text
                                                        .highEmphasis
                                                }
                                            >
                                                {Coin}
                                            </TypographyComponent>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <TypographyComponent
                                        variant="caption1"
                                        color={
                                            theme.palette.text.mediumEmphasis
                                        }
                                    >
                                        {defaultText}
                                    </TypographyComponent>
                                </Grid>
                            </Grid>
                        </StyledBox>
                    </Grid>
                </Grid>
            </StyledBox>
        </>
    );
};

export default CashDeposit;
