import { Grid } from '@mui/material';
import { StyledCard } from '../../../pages/purchasePage';
import theme from '../../../theme';
import TypographyComponent from '../../atoms/Typography';
import rupee from '../../../../public/assets/images/rupee32.svg';
import { DepositCardProps } from '../../../utils/interfaces/DepositCardInterface';

export const DepositCard = ({ totalBalance, type }: DepositCardProps) => {
    const headerText = 'Payment Method';
    const balance = `Total Balance - ${totalBalance.toLocaleString('en-US')}`;
    const defaultText = 'Default';
    return (
        <StyledCard data-testid={`${type}DepositCard`}>
            <Grid container direction="column" rowGap={4}>
                <Grid item>
                    <TypographyComponent variant="body1">
                        {headerText}
                    </TypographyComponent>
                </Grid>
                <Grid item>
                    <StyledCard className="styleInCard">
                        <Grid container columnGap={3} alignItems="center">
                            <Grid item>
                                <img src={rupee} alt="rupee" />
                            </Grid>
                            <Grid item flexGrow={1}>
                                <TypographyComponent variant="caption1">
                                    USD Coin (Cash)
                                </TypographyComponent>
                                {type === 'buy' && (
                                    <TypographyComponent
                                        variant="subtitle1"
                                        color={
                                            theme.palette.text.mediumEmphasis
                                        }
                                    >
                                        {balance}
                                    </TypographyComponent>
                                )}
                            </Grid>
                            <Grid item>
                                <TypographyComponent
                                    variant="caption1"
                                    color={theme.palette.text.mediumEmphasis}
                                >
                                    {defaultText}
                                </TypographyComponent>
                            </Grid>
                        </Grid>
                    </StyledCard>
                </Grid>
            </Grid>
        </StyledCard>
    );
};
