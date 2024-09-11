import { Grid, styled } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import Switch from '../../../../public/assets/images/switch.svg';
import { TradeTab } from '../../molecules/Tradetab';
import MinetTheme from '../../../theme';
import React from 'react';
import { TradeListProp } from '../../../utils/interfaces/TradeListType';
const StyledGrid = styled(Grid)({
    padding: `${MinetTheme.spacing(3.25)} ${MinetTheme.spacing(6)}`
});
const StyleTradeTab = styled(Grid)({
    maxHeight: MinetTheme.spacing(20)
});
export const TradeList = ({ trades, onCheckedCrypto }: TradeListProp) => {
    return (
        <>
            <StyledGrid container data-testid="trade-list">
                <Grid item flex={1.7}>
                    <TypographyComponent variant="caption1">
                        Name
                    </TypographyComponent>
                </Grid>

                <Grid item flex={1.8}>
                    <TypographyComponent variant="caption1">
                        Price
                    </TypographyComponent>
                </Grid>
                <Grid item flex={1.3}>
                    <TypographyComponent variant="caption1">
                        Change
                    </TypographyComponent>
                </Grid>
                <Grid item flex={1.2}>
                    <TypographyComponent variant="caption1">
                        Market Cap
                    </TypographyComponent>{' '}
                    <img src={Switch} alt="switch coin" />
                </Grid>
                <Grid item flex={0.2} sx={{ textAlign: 'center' }}>
                    <TypographyComponent variant="caption1">
                        Watch
                    </TypographyComponent>
                </Grid>
            </StyledGrid>
            <Grid container direction="column" rowGap={3}>
                {trades.map((trade) => (
                    <StyleTradeTab item key={trade.id}>
                        <TradeTab
                            {...trade}
                            checkboxName={trade.id.toString()}
                            onChecked={onCheckedCrypto}
                        />
                    </StyleTradeTab>
                ))}
            </Grid>
        </>
    );
};
