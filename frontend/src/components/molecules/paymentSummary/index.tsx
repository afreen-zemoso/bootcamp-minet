import { Divider, Grid } from '@mui/material';
import React from 'react';
import MinetTheme from '../../../theme';
import Button from '../../atoms/Button';
import TypographyComponent from '../../atoms/Typography';
import { numberFormat } from '../../organisms/portfolioDetailList';
import { PaymentSummaryProps } from '../../../utils/interfaces/paymentSummaryInterface';

export const PaymentSummary = ({ ...props }: PaymentSummaryProps) => {
    const total = props.amount + props.transactionFees;
    return (
        <Grid
            container
            direction="column"
            rowGap={6}
            data-testid="paymentSummary"
        >
            <Grid item container direction="column" rowSpacing={4}>
                <Grid item container alignItems="center" alignContent="center">
                    <Grid item>
                        <TypographyComponent variant="overline">
                            {props.coinBTC}
                        </TypographyComponent>
                    </Grid>
                    <Grid item sx={{ flexGrow: 1 }}>
                        <Divider
                            sx={{
                                border: `1px dashed ${MinetTheme.palette.grey[300]}`,
                                marginTop: '3px'
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TypographyComponent variant="overline">
                            ${numberFormat(props.amount)}
                        </TypographyComponent>
                    </Grid>
                </Grid>
                <Grid item container alignItems="center">
                    <Grid item>
                        <TypographyComponent variant="overline">
                            transaction fee
                        </TypographyComponent>
                    </Grid>
                    <Grid item sx={{ flexGrow: 1 }}>
                        <Divider
                            sx={{
                                border: `1px dashed ${MinetTheme.palette.grey[300]}`,
                                marginTop: '3px'
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TypographyComponent variant="overline">
                            ${props.transactionFees.toLocaleString('en-US')}
                            {props.transactionFees -
                                Math.floor(props.transactionFees) !==
                            0
                                ? ''
                                : '.00'}
                        </TypographyComponent>
                    </Grid>
                </Grid>
                <Grid item container alignItems="center">
                    <Grid item>
                        <TypographyComponent variant="body1">
                            Total
                        </TypographyComponent>
                    </Grid>
                    <Grid item sx={{ flexGrow: 1 }}>
                        <Divider
                            sx={{
                                border: `1px dashed ${MinetTheme.palette.grey[300]}`
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TypographyComponent variant="body1">
                            ${total.toLocaleString('en-US')}
                            {total - Math.floor(total) !== 0 ? '' : '.00'}
                        </TypographyComponent>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button
                    variant="primary"
                    fullWidth
                    onClick={props.onSubmit}
                    sx={{
                        backgroundColor:
                            props.screen === 'buy'
                                ? 'none'
                                : MinetTheme.palette.warning[300]
                    }}
                >
                    {props.screen === 'buy' ? 'BUY NOW' : 'SELL NOW'}
                </Button>
            </Grid>
        </Grid>
    );
};
