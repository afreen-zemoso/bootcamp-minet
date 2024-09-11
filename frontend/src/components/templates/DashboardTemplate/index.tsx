import { Grid } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import { DashboardProps } from '../../../utils/interfaces/DashboardInterface';

const DashboardTemplate = (prop: DashboardProps) => {
    return (
        <>
            <Grid container data-testid="DashboardTemplate">
                <Grid
                    item
                    width={theme.spacing(210.5)}
                    height={theme.spacing(216)}
                >
                    <Grid container>
                        <Grid item>
                            <Grid container>
                                <Grid
                                    item
                                    width={theme.spacing(210)}
                                    height={theme.spacing(8)}
                                    marginBottom={2}
                                    marginTop={4}
                                    marginLeft={4}
                                >
                                    <Grid container>
                                        <Grid item>
                                            <Grid container>
                                                <Grid item>
                                                    {prop.watchlistText}
                                                </Grid>
                                                <Grid item>
                                                    {prop.assetsText}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container>
                                                <Grid item>{prop.view}</Grid>
                                                <Grid item>{prop.window}</Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    width={theme.spacing(210)}
                                    height={theme.spacing(71)}
                                    marginBottom={4}
                                    marginLeft={4}
                                >
                                    {prop.watchlistCard}
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Grid container>
                                <Grid
                                    item
                                    width={theme.spacing(210.5)}
                                    height={theme.spacing(8)}
                                    marginBottom={2}
                                    marginLeft={4}
                                >
                                    <Grid container>
                                        <Grid item>{prop.portfoliovalue}</Grid>
                                        <Grid item>
                                            <Grid container>
                                                <Grid item>{prop.chart}</Grid>
                                                <Grid item>{prop.graph}</Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    width={theme.spacing(210)}
                                    height={theme.spacing(105.9175)}
                                    marginBottom={2}
                                    marginLeft={4}
                                >
                                    {prop.portfolio}
                                </Grid>
                                <Grid
                                    item
                                    width={theme.spacing(210)}
                                    height={theme.spacing(8)}
                                    marginBottom={4}
                                    marginLeft={4}
                                >
                                    <Grid container>
                                        <Grid item>{prop.coinText}</Grid>
                                        <Grid item>
                                            <Grid container>
                                                <Grid item>{prop.info}</Grid>
                                                <Grid item>
                                                    {prop.infoText}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    width={theme.spacing(210.5)}
                                    height={theme.spacing(9.5)}
                                    marginBottom={7}
                                    marginLeft={4}
                                >
                                    {prop.bitcoinSlider}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container>
                        <Grid
                            item
                            width={theme.spacing(99.5)}
                            height={theme.spacing(77)}
                            marginLeft={9}
                        >
                            {prop.portfolioCardList}
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid
                            item
                            width={theme.spacing(99.5)}
                            height={theme.spacing(24.5)}
                            marginLeft={9}
                            marginTop={4}
                        >
                            {prop.walletCard}
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid
                            item
                            width={theme.spacing(99.5)}
                            height={theme.spacing(55.5)}
                            marginLeft={9}
                            marginTop={4}
                            marginBottom={8}
                        >
                            {prop.transactions}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default DashboardTemplate;
