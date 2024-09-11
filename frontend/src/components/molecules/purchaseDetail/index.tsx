import React from 'react';
import rightIcon from '../../../../public/assets/images/check-fill.svg';
import { Grid } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import Button from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';
import { CASH_WALLET_PATH } from '../../../utils/routes';
interface PurchaseDetailProp {
    paymentMessage: string;
    sell: boolean;
    currency: string;
}
export const PurchaseDetail = ({
    paymentMessage,
    sell,
    currency
}: PurchaseDetailProp) => {
    const centerStyle = {
        alignItems: 'center',
        justifyContent: 'center'
    };
    const buttonText = 'GO TO USD COIN';
    const cryptoButton = (sell ? 'SELL' : 'BUY') + ' CRYPTO';
    const navigate = useNavigate();
    return (
        <>
            <Grid
                container
                direction="column"
                {...centerStyle}
                data-testid="purchase details"
            >
                <Grid
                    item
                    container
                    direction="column"
                    rowSpacing={6}
                    {...centerStyle}
                >
                    <Grid item>
                        <img src={rightIcon} alt="right icon" />
                    </Grid>
                    <Grid item>
                        <TypographyComponent variant="h4">
                            {currency}
                        </TypographyComponent>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    justifyContent="center"
                    rowGap={9}
                    rowSpacing={2}
                >
                    <Grid item>
                        <TypographyComponent
                            variant="body2"
                            sx={{ maxWidth: '400px', textAlign: 'center' }}
                        >
                            {paymentMessage}
                        </TypographyComponent>
                    </Grid>
                    <Grid item container {...centerStyle} columnSpacing={3}>
                        <Grid item>
                            <Button variant="secondary">{cryptoButton}</Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="primary"
                                onClick={() => navigate(CASH_WALLET_PATH)}
                            >
                                {buttonText}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
