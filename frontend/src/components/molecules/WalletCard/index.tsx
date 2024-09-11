import { Grid } from '@mui/material';
import Typography from '../../atoms/Typography';
import Image from '../../atoms/Image';
import RupeeIcon from '../../../../public/assets/images/rupee.svg';
import { numberFormat } from '../../organisms/portfolioDetailList';

interface WalletCardProps {
    balance: number;
}

const WalletCard: React.FC<WalletCardProps> = ({ balance }) => {
    const balanceLabel = `$ ${numberFormat(balance)}`;
    return (
        <>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                data-testid="WalletCard"
            >
                <Grid item>
                    <div>
                        <Grid container columnGap={2.5}>
                            <Grid item>
                                <Image alt={'Rupee Icon'} src={RupeeIcon} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">
                                    USD Coin
                                </Typography>
                                <Typography
                                    variant="caption2"
                                    color="text.mediumEmphasis"
                                >
                                    US Dollar
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item>
                    <Typography
                        sx={{ alignSelf: 'flex-end' }}
                        variant={'body1'}
                    >
                        {balanceLabel}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default WalletCard;
