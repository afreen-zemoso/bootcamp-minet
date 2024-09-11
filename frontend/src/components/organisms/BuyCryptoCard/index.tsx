import { Box, Grid, styled } from '@mui/material';
import CryptoCard from '../../molecules/CryptoCard';
import Typography from '../../atoms/Typography';
import { StyledCard } from '../../../pages/purchasePage';
import theme from '../../../theme';
import { BuyCryptoCardProps } from '../../../utils/interfaces/BuyCryptoCardInterface';
const StyledCryptoCards = styled(Grid)({
    paddingRight: theme.spacing(4),
    maxHeight: theme.spacing(82),
    overflow: 'scroll'
});
const BuyCryptoCard: React.FC<BuyCryptoCardProps> = ({
    ...props
}: BuyCryptoCardProps) => {
    const buyingOrSellingLabel = `${
        props.transactionType === 'sell' ? 'Sell' : 'Buy'
    } Crypto`;

    const chooseCryptoLabel = 'Choose Crypto';
    return (
        <>
            <Grid
                container
                direction="column"
                rowGap={3}
                data-testid="cryptoCards"
            >
                <Grid item>
                    <Typography variant="subtitle1">
                        {buyingOrSellingLabel}
                    </Typography>
                </Grid>
                <Grid item>
                    <StyledCard>
                        <Grid container direction="column" rowGap={4}>
                            <Grid item>
                                <Typography variant="body1">
                                    {chooseCryptoLabel}
                                </Typography>
                            </Grid>
                            <StyledCryptoCards
                                item
                                container
                                sx={{
                                    paddingRight: theme.spacing(4),
                                    maxHeight: theme.spacing(82),
                                    overflow: 'scroll'
                                }}
                            >
                                {props.cryptoCoins.map((coincode, index) => {
                                    return (
                                        <Grid
                                            item
                                            xs={6}
                                            md={3}
                                            lg={2}
                                            key={coincode.id}
                                        >
                                            <Box
                                                data-testid={`cryptoCard`}
                                                onClick={() =>
                                                    props.onCryptoCoinSelected?.(
                                                        index
                                                    )
                                                }
                                            >
                                                <CryptoCard
                                                    src={coincode.icon}
                                                    name={coincode.name}
                                                    value={coincode.price}
                                                    selected={
                                                        coincode.id ==
                                                        props.selectedValue
                                                    }
                                                    width={theme.spacing(45)}
                                                    height={theme.spacing(39)}
                                                />
                                            </Box>
                                        </Grid>
                                    );
                                })}
                            </StyledCryptoCards>
                        </Grid>
                    </StyledCard>
                </Grid>
            </Grid>
        </>
    );
};

export default BuyCryptoCard;
