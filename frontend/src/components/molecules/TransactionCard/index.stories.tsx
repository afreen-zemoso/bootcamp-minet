import { Meta, StoryObj } from '@storybook/react';
import TransactionCard from '.';

const meta: Meta<typeof TransactionCard> = {
    title: 'molecules/TransactionCard',
    component: TransactionCard
};

export default meta;

type Story = StoryObj<typeof TransactionCard>;

export const TransactionCardStory: Story = {
    name: 'TransactionCard',
    args: {
        index: '1',
        id: 'Bitcoin BTC',
        date: 'June 23',
        type: 'buy',
        status: 'success',
        quantity: '-0.0234510 BTC',
        price: '+$34500.00'
    }
};
