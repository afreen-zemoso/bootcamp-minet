import { Card, Grid, styled } from '@mui/material';
import React from 'react';
import MinetTheme from '../../../theme';
import TypographyComponent from '../../atoms/Typography';
import PortFolioCard from '../../molecules/PortFolioCard';
import { PriceCorrelationListProps } from '../../../utils/interfaces/PriceCorrelationType';
export const PriceCorrelationList = ({
    cardId,
    cards
}: PriceCorrelationListProps) => {
    const StyledCard = styled(Card)({
        maxHeight: MinetTheme.spacing(61),
        overflowY: 'visible',
        boxShadow: 'none'
    });
    return (
        <>
            <Card
                sx={{
                    padding: `${MinetTheme.spacing(4)} ${MinetTheme.spacing(
                        3
                    )} ${MinetTheme.spacing(4)} ${MinetTheme.spacing(0.5)}`,
                    maxWidth: MinetTheme.spacing(99.25),
                    border: `1px solid ${MinetTheme.palette.grey[100]}`,
                    boxShadow: 'none'
                }}
            >
                <Grid
                    container
                    direction="column"
                    rowGap={4.25}
                    sx={{
                        maxWidth: MinetTheme.spacing(95.5)
                    }}
                    data-testid="price correlation cards"
                >
                    <Grid
                        item
                        container
                        columnGap={3.2625}
                        sx={{
                            width: '95%',
                            paddingLeft: MinetTheme.spacing(6)
                        }}
                    >
                        <Grid item flexGrow={1}>
                            <TypographyComponent
                                variant="subtitle1"
                                color={MinetTheme.palette.text.highEmphasis}
                            >
                                Price correlation with
                            </TypographyComponent>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column">
                        <StyledCard>
                            {cards.map((card) => (
                                <PortFolioCard
                                    key={card.id}
                                    id={card.id}
                                    change={card.change}
                                    name={card.name}
                                    image={card.icon}
                                    price={card.price}
                                    symbol={card.symbol}
                                    currentCardId={cardId}
                                    portfolio={false}
                                />
                            ))}
                        </StyledCard>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
};
