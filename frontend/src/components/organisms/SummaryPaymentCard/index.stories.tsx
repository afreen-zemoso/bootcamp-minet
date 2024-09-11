import { Meta, StoryObj } from '@storybook/react';
import SummaryPaymentCard from '.';
import theme from '../../../theme';

const meta: Meta<typeof SummaryPaymentCard> = {
    title: 'organisms/PaymentCardSummary',
    component: SummaryPaymentCard
};
export default meta;

type Story = StoryObj<typeof SummaryPaymentCard>;

export const PaymentCardBuyStory: Story = {
    args: {
        coin: {
            name: 'Bitcoin',
            price: 3406089,
            symbol: 'BTC'
        },
        amount: 34000,
        deliveryFee: 0.001,
        totalCoins: 0.02345,
        type: 'buy',
        paymentMethod: 'Visa credit ...8845',
        transactionFee: 1000,
        width: theme.spacing(161.75)
    }
};

export const PaymentCardSellStory: Story = {
    args: {
        coin: {
            name: 'Bitcoin',
            price: 3406089,
            symbol: 'BTC'
        },
        amount: 34000,
        deliveryFee: 0.001,
        totalCoins: 0.02345,
        type: 'sell',
        paymentMethod: 'Rupay coin',
        transactionFee: 1000
    }
};
