import { Meta, StoryObj } from '@storybook/react';
import WalletTransactions from '.';
import walletRight from '../../../../public/assets/images/walletRight.svg';
const meta: Meta<typeof WalletTransactions> = {
    title: 'organisms/WalletTransactions',
    component: WalletTransactions
};

export default meta;
type Story = StoryObj<typeof WalletTransactions>;
const transaction = {
    id: 1,
    image: walletRight,
    symbol: 'Moves tightly together',
    change: 1.06,
    price: 87.0,
    name: 'Bitcoin',
    currentCardId: 0,
    portfolio: false,
    date: { date: 21, month: 'Feb' },
    chipLabel: 'Purchased'
};
export const WalletTransactionsStory: Story = {
    args: {
        transactions: Array(10).fill(transaction)
    }
};
