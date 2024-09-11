import { Card, Grid, styled } from '@mui/material';
import React from 'react';
import MinetTheme from '../../../theme';
import TypographyComponent from '../../atoms/Typography';
import chart from '../../../../public/assets/images/chart.svg';
import listIcon from '../../../../public/assets/images/list.svg';
import Image from '../../atoms/Image';
import PortFolioCard from '../../molecules/PortFolioCard';
import { PortfolioCardListProp } from '../../../utils/interfaces/PortfolioCardListInterface';

export const PortfolioCardList = ({
    cardId,
    cards,
    width
}: PortfolioCardListProp) => {
    const StyledCard = styled(Card)({
        maxHeight: MinetTheme.spacing(61),
        overflowY: 'visible',
        boxShadow: 'none',
        maxWidth: width
    });
    return (
        <>
            <Grid
                container
                direction="column"
                rowGap={4.25}
                width="95%"
                data-testid="portfolio cards"
            >
                <Grid
                    item
                    container
                    columnGap={3.2625}
                    paddingLeft={MinetTheme.spacing(6)}
                >
                    <Grid item flexGrow={1}>
                        <TypographyComponent variant="body1">
                            My portfolio
                        </TypographyComponent>
                    </Grid>
                    <Grid item>
                        <Image src={chart} alt="chart icon" />
                    </Grid>
                    <Grid item>
                        <Image src={listIcon} alt="List icon" />
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
                                portfolio={true}
                            />
                        ))}
                    </StyledCard>
                </Grid>
            </Grid>
        </>
    );
};
