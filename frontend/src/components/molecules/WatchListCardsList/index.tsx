import React from 'react';
import { Grid } from '@mui/material';
import theme from '../../../theme';
import WatchListCard from '../WatchListCard';
import { WatchListCardsProps } from '../../../utils/interfaces/WatchListCardsType';
const WatchListCardsList = (props: WatchListCardsProps) => {
    const { cards } = props;
    const checkLastCard = (index: number) => {
        return index === cards.length && cards.length % 2 != 0;
    };
    return (
        <Grid
            container
            data-testid="WatchListCardsList"
            spacing={theme.spacing(6)}
        >
            {cards.map((WatchCard, index) => {
                const cryptoCoin = WatchCard.cryptoCoin;
                return (
                    <Grid
                        item
                        key={cryptoCoin.id}
                        lg={checkLastCard(index + 1) ? 12 : 6}
                    >
                        <WatchListCard
                            key={cryptoCoin.id}
                            profitOrLossPercentage={cryptoCoin.change}
                            cryptoCoinCode={cryptoCoin.symbol}
                            valuePerOneCoin={cryptoCoin.price}
                            GraphProps={WatchCard.GraphProps}
                            icon={cryptoCoin.icon}
                            name={cryptoCoin.name}
                            id={cryptoCoin.id}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default WatchListCardsList;
