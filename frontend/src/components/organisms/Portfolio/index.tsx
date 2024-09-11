import { Box, Divider, Grid, styled } from '@mui/material';
import React from 'react';
import PortfolioValue from '../../molecules/PortfolioValue';
import theme from '../../../theme';
import { Graph } from '../../molecules/Graph';
import TimePeriodTab from '../../molecules/TimePeriodTab';
import report from '../../../../public/assets/images/dataReport.svg';
import TypographyComponent from '../../atoms/Typography';
import { PortfolioProps } from '../../../utils/interfaces/PortfolioInterface';

const StyledPortfolio = styled(Grid)({
    padding: theme.spacing(6),
    paddingRight: 0,
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.grey[100]}`,
    background: 'white',
    '& .styleDivider': {
        height: theme.spacing(13.5)
    },
    '& .addPadding': {
        paddingRight: theme.spacing(6)
    }
});
const StyledBox = styled(Box)({
    width: theme.spacing(2),
    height: theme.spacing(2),
    borderRadius: theme.spacing(2),
    background: theme.palette.primary[500],
    marginRight: theme.spacing(0.5)
});
const Portfolio = (props: PortfolioProps) => {
    const { totalInvestment, coin, displayGraph } = props;
    const altReport = 'Report';
    const colors = [totalInvestment.color, coin.color];
    const series = [
        {
            name: totalInvestment.name,
            data: totalInvestment.data
        },
        { name: coin.name, data: coin.data }
    ];
    return (
        <StyledPortfolio container data-testid="Portfolio">
            <Grid
                item
                container
                direction="row"
                columnSpacing={theme.spacing(7)}
            >
                <Grid item>
                    <PortfolioValue
                        label={totalInvestment.name}
                        currentValue={totalInvestment.value}
                        profitOrLossPercentage={totalInvestment.percentage}
                    />
                </Grid>
                {displayGraph && (
                    <Grid item>
                        <Divider
                            orientation="vertical"
                            className="styleDivider"
                        />
                    </Grid>
                )}
                <Grid item flexGrow={1}>
                    {displayGraph && (
                        <PortfolioValue
                            label={coin.name}
                            currentValue={coin.value}
                            profitOrLossPercentage={coin.percentage}
                        />
                    )}
                </Grid>
                <Grid item className="addPadding">
                    <TimePeriodTab variant="primary" />
                </Grid>
            </Grid>
            <Grid container direction="column">
                {displayGraph && (
                    <Grid item>
                        <Graph
                            id={coin.name}
                            opacity={0.1}
                            colors={colors}
                            series={series}
                            width="99.9%"
                            height={theme.spacing(67.5)}
                            labelVisible={true}
                            gridVisible={true}
                        />
                    </Grid>
                )}
                {!displayGraph && (
                    <>
                        <Grid
                            item
                            container
                            justifyContent="flex-end"
                            alignItems="center"
                            paddingRight={theme.spacing(6)}
                        >
                            <Grid item>
                                <StyledBox />
                            </Grid>
                            <Grid item>
                                <TypographyComponent variant="overline">
                                    {totalInvestment.name}
                                </TypographyComponent>
                            </Grid>
                        </Grid>
                        <Grid item container justifyContent="center">
                            <img src={report} alt={altReport} />
                        </Grid>
                    </>
                )}
            </Grid>
        </StyledPortfolio>
    );
};

export default Portfolio;
