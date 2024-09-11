import { Meta, StoryObj } from '@storybook/react';
import { DepositCard } from '.';

const meta: Meta<typeof DepositCard> = {
    title: 'molecules/DepositCard',
    component: DepositCard
};
export default meta;

type Story = StoryObj<typeof DepositCard>;
export const BuyCard: Story = {
    args: {
        totalBalance: 30000,
        type: 'buy'
    }
};
export const SellCard: Story = {
    args: {
        totalBalance: 0.02145,
        type: 'sell'
    }
};
