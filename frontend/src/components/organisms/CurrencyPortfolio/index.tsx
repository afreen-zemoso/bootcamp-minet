import { Grid } from '@mui/material';
import React from 'react';
import PortfolioValue from '../../molecules/PortfolioValue';
import theme from '../../../theme';
import { Graph } from '../../molecules/Graph';
import TimePeriodTab from '../../molecules/TimePeriodTab';
import { PortfolioProps } from '../../../utils/interfaces/Currencyporfolio';

const CurrencyPortfolio = (props: PortfolioProps) => {
    const { coin } = props;
    return (
        <Grid container data-testid="Portfolio">
            <Grid item container direction="row" justifyContent="space-between">
                <Grid item>
                    <PortfolioValue
                        sx={{ gap: '0px' }}
                        label={coin.name}
                        currentValue={coin.value}
                        profitOrLossPercentage={coin.percentage}
                        portfolioArrowDown={true}
                    />
                </Grid>
                <Grid item>
                    <TimePeriodTab variant="primary" />
                </Grid>
            </Grid>
            <Grid container marginTop={theme.spacing(15)} direction={'column'}>
                <Grid item>
                    <Graph
                        id={coin.name}
                        colors={[coin.color]}
                        opacity={0.1}
                        series={[{ name: coin.name, data: coin.data }]}
                        height={theme.spacing(67)}
                        labelVisible={true}
                        gridVisible={true}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CurrencyPortfolio;
