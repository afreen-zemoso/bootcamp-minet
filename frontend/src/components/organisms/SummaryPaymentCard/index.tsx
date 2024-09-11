import { Card, Divider, styled } from '@mui/material';
import React from 'react';
import AmountInformation from '../../molecules/AmountInformation';
import TransactionDetails from '../../molecules/TransactionDetails';
import Delivery from '../../../../public/assets/images/circledelivery.svg';
import Payment from '../../../../public/assets/images/payment.svg';
import Paycoin from '../../../../public/assets/images/paycoin.svg';
import DepositCoin from '../../../../public/assets/images/depositcoin.svg';
import Wallet from '../../../../public/assets/images/wallet.svg';
import { PaymentSummary } from '../../molecules/paymentSummary';
import { PaymentCardProps } from '../../../utils/interfaces/PaymentCardType';
import theme from '../../../theme';

const SummaryPaymentCard = (props: PaymentCardProps) => {
    const {
        coin,
        amount,
        deliveryFee,
        paymentMethod,
        totalCoins,
        type,
        transactionFee
    } = props;
    const StyledCard = styled(Card)({
        borderRadius: '4px',
        border: `1px solid ${theme.palette.grey[100]}`,
        background: 'white',
        boxShadow: 'none',
        padding: 0,
        borderTop: 'none',
        paddingBottom: theme.spacing(12),
        maxWidth: props.width,
        '& .stylePaymentComponents': {
            padding: theme.spacing(6)
        }
    });
    const wallet = coin.name + ' wallet';
    return (
        <StyledCard>
            <AmountInformation
                transactionType={type}
                numOfCryptoCoinsInvolved={totalCoins}
                valuePerOneCryptoCoin={coin.price}
                cryptoCoinCode={coin.symbol}
            />
            <Divider />
            <div className="stylePaymentComponents">
                <TransactionDetails
                    paymentSrc={type === 'buy' ? Payment : Paycoin}
                    paymentCaptiontext={
                        type === 'buy' ? 'Payment method' : 'Paying through'
                    }
                    paymentBodytext={type === 'buy' ? paymentMethod : wallet}
                    deliverySrc={Delivery}
                    deliveryCaptiontext={'Delivery fees'}
                    deliveryBodytext={deliveryFee + ` ${coin.symbol}`}
                    walletSrc={type === 'buy' ? Wallet : DepositCoin}
                    walletCaptiontext={'Deposit to'}
                    walletBodytext={type === 'sell' ? paymentMethod : wallet}
                />
            </div>
            <Divider />
            <div className="stylePaymentComponents">
                <PaymentSummary
                    coinBTC={`${totalCoins} ${coin.symbol}`}
                    amount={amount}
                    transactionFees={transactionFee}
                    screen={type}
                    onSubmit={props.onSubmit}
                />
            </div>
        </StyledCard>
    );
};

export default SummaryPaymentCard;
