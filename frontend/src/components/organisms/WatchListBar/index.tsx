import React from 'react';
import { Box, Stack, styled } from '@mui/material';
import Image from '../../atoms/Image';
import ProfitIcon from '../../../../public/assets/images/profit.svg';
import LossIcon from '../../../../public/assets/images/loss.svg';
import VerticalLineIcon from '../../../../public/assets/images/vertical-line.svg';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';
import { Icon } from '../../atoms/icon';
import { WatchListBarProps } from '../../../utils/interfaces/Watchlistbar';
import { getCalculatedValue } from '../../../utils/methods';

const StyledStack = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing(6),
    gap: theme.spacing(8),
    width: '100%',
    height: theme.spacing(26.5),
    background: theme.palette.background.paper,
    border: `${theme.spacing(0.25)} solid ${theme.palette.grey[100]}`,
    borderRadius: theme.spacing(1),
    flex: 'none',
    order: 0,
    flexGrow: 0,
    '& .coinicon-56x56 img': {
        width: theme.spacing(14)
    },
    '& .coin-details': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: theme.spacing(2),
        '& .coin-label-percentage': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: 0,
            width: theme.spacing(22.25),
            height: theme.spacing(14.75),
            flex: 'none',
            order: 1,
            flexGrow: 0
        },
        '& .profitOrLoss': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0px',
            width: theme.spacing(22.25),
            height: theme.spacing(6),
            flex: 'none',
            order: 1,
            flexGrow: 0
        }
    },
    '& .coin-parameters': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: theme.spacing(6),
        '& > *': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: theme.spacing(1)
        }
    },
    '& .watchlist-btn': {
        marginLeft: 'auto'
    }
}));

const WatchListBar: React.FC<WatchListBarProps> = ({
    sx,
    className,
    cryptoCoin,
    checked,
    getState
}) => {
    const isProfit = cryptoCoin.change >= 0;
    const profitOrLossIcon = isProfit ? ProfitIcon : LossIcon;
    const profitOrLossPercentageLabelColor = isProfit
        ? 'success.500'
        : 'error.500';
    let changeLabel = '';

    changeLabel = `${cryptoCoin.change.toFixed(1)}`;
    const profitOrLossPercentageLabel = `${isProfit ? '+' : ''}${changeLabel}%`;

    let marketCapValue = '';
    marketCapValue = `$${getCalculatedValue(
        cryptoCoin.marketCap
    ).toLocaleString('en-US')}T`;

    let volumeIn24HoursLabel = '';
    volumeIn24HoursLabel = `$${getCalculatedValue(
        cryptoCoin.volume
    ).toLocaleString('en-US')}T`;

    const getCirculatingSupplyLabel = () => {
        return `${getCalculatedValue(cryptoCoin.circulatingSupply)}M ${
            cryptoCoin.symbol
        }`;
    };
    const circulatingSupplyValue = getCirculatingSupplyLabel();
    const onClickAddtoWatchlistBtn: React.MouseEventHandler<
        HTMLButtonElement
    > = (event) => {
        event.preventDefault();

        getState(!checked);
    };

    const marketCapLabel = 'Market Cap';
    const circulatingSupplyLabel = 'Circulating Supply';
    const volumeLabel = 'Vol. 24H';
    const addToWatchListBtnLabel = 'ADD TO WATCHLIST';

    return (
        <StyledStack data-testid="WatchListBar" sx={sx} className={className}>
            <Stack className="coin-details">
                <Image
                    className="coinicon-56x56"
                    src={cryptoCoin.icon}
                    alt={cryptoCoin.name + ' icon'}
                />
                <Stack>
                    <Typography variant="h6" color="text.highEmphasis">
                        {cryptoCoin.name}
                    </Typography>
                    <Stack className="profitOrLoss">
                        <Typography variant="body1" color="text.mediumEmphasis">
                            {cryptoCoin.symbol}
                        </Typography>
                        <Image src={profitOrLossIcon} alt="ProfitOrLossIcon" />
                        <Typography
                            variant="overline"
                            color={profitOrLossPercentageLabelColor}
                        >
                            {profitOrLossPercentageLabel}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Image src={VerticalLineIcon} alt="Vertial Line" />
            <Stack className="coin-parameters">
                <Stack>
                    <Typography variant="caption1" color="text.mediumEmphasis">
                        {marketCapLabel}
                    </Typography>
                    <Typography variant="body1" color="text.highEmphasis">
                        {marketCapValue}
                    </Typography>
                </Stack>
                <Stack>
                    <Typography variant="caption1" color="text.mediumEmphasis">
                        {volumeLabel}
                    </Typography>
                    <Typography variant="body1" color="text.highEmphasis">
                        {volumeIn24HoursLabel}
                    </Typography>
                </Stack>
                <Stack>
                    <Typography variant="caption1" color="text.mediumEmphasis">
                        {circulatingSupplyLabel}
                    </Typography>
                    <Typography variant="body1" color="text.highEmphasis">
                        {circulatingSupplyValue}
                    </Typography>
                </Stack>
            </Stack>
            <Box className="watchlist-btn">
                <Button
                    onClick={onClickAddtoWatchlistBtn}
                    data-testid="watchListButton"
                    startIcon={<Icon checked={checked} />}
                    variant="secondary"
                >
                    <Typography variant="button">
                        {addToWatchListBtnLabel}
                    </Typography>
                </Button>
            </Box>
        </StyledStack>
    );
};

export default WatchListBar;
