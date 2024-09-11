import { Meta, StoryObj } from '@storybook/react';
import walletRight from '../../../../public/assets/images/walletRight.svg';
import TransactionsList from '.';
const meta: Meta<typeof TransactionsList> = {
    title: 'organisms/TransactionsList',
    component: TransactionsList
};

export default meta;
type Story = StoryObj<typeof TransactionsList>;
const transaction = {
    id: 1,
    image: walletRight,
    symbol: 'Moves tightly together',
    change: 1.06,
    price: 87.0,
    name: 'Bitcoin',
    currentCardId: 0,
    portfolio: false,
    coinCode: 'BTC',
    date: { day: 21, month: 'Feb' },
    chipLabel: 'Purchased'
};
export const TransactionsListStory: Story = {
    args: {
        transactions: Array(10).fill(transaction)
    }
};
