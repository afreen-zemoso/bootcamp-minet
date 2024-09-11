import { Grid } from '@mui/material';
import React from 'react';
import TypographyComponent from '../../atoms/Typography';
import MinetTheme from '../../../theme';
import { PriceCorrelationList } from '../PriceCorrelationList';
import { priceCorrelationCards } from '../../../utils/constants';
interface BitCoinOverviewProps {
    about: string;
    resources: {
        src: string;
        name: string;
    }[];
    name: string;
}
export const BitCoinOverview = ({
    about,
    resources,
    name
}: BitCoinOverviewProps) => {
    return (
        <Grid container data-testid="bitcoin-overview">
            <Grid item flexGrow={1}>
                <div>
                    <Grid container direction="column" rowGap={6}>
                        <Grid item container direction="column" rowGap={2}>
                            <Grid item>
                                <TypographyComponent variant="body1">
                                    About {name}
                                </TypographyComponent>
                            </Grid>
                            <Grid item>
                                <TypographyComponent
                                    variant="body2"
                                    sx={{ maxWidth: MinetTheme.spacing(202.5) }}
                                >
                                    {about}
                                </TypographyComponent>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" rowGap={3}>
                            <Grid item>
                                <TypographyComponent variant="body1">
                                    Resources
                                </TypographyComponent>
                            </Grid>
                            {resources.map((resource) => (
                                <Grid
                                    container
                                    item
                                    columnSpacing={2.5}
                                    key={resource.name}
                                >
                                    <Grid item>
                                        <img
                                            src={resource.src}
                                            alt="website icon"
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TypographyComponent
                                            variant="body2"
                                            sx={{
                                                color: MinetTheme.palette
                                                    .primary[500]
                                            }}
                                        >
                                            {resource.name}
                                        </TypographyComponent>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid item>
                <PriceCorrelationList
                    cards={priceCorrelationCards}
                    cardId={'tether'}
                />
            </Grid>
        </Grid>
    );
};
