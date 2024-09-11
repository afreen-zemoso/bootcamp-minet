import React from 'react';
import { Grid, styled } from '@mui/material';
import theme from '../../../theme';
interface TradeTemplateProps {
    cryptoText: string;
    cryptoBody: React.ReactNode;
    totalBalanceBody: React.ReactNode;
    amountDetailsBody: React.ReactNode;
    feesBody: React.ReactNode;
    paymentCardBody: React.ReactNode;
}
const StyledGrid = styled(Grid)({
    '& .styleBody': {
        padding: theme.spacing(6),
        paddingBottom: theme.spacing(15)
    },
    '& .stylePaymentCard': {
        position: 'sticky',
        top: 82
    }
});
const TradeTemplate = (props: TradeTemplateProps) => {
    const {
        cryptoBody,
        totalBalanceBody,
        amountDetailsBody,
        feesBody,
        paymentCardBody
    } = props;
    return (
        <StyledGrid data-testid="trade template" container>
            <Grid item flex={1}>
                <div className="styleBody">
                    <Grid
                        container
                        direction="column"
                        rowSpacing={theme.spacing(6)}
                    >
                        <Grid item>{cryptoBody}</Grid>
                        <Grid item>{totalBalanceBody}</Grid>
                        <Grid item>{amountDetailsBody}</Grid>
                        <Grid item>{feesBody}</Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid item flex={0.4}>
                <div className="stylePaymentCard">{paymentCardBody}</div>
            </Grid>
        </StyledGrid>
    );
};

export default TradeTemplate;
