import { Meta, StoryObj } from '@storybook/react';
import { PaymentSummary } from '.';

const meta: Meta<typeof PaymentSummary> = {
    title: 'molecules/PaymentSummary',
    component: PaymentSummary,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof PaymentSummary>;

export const bitcoin: Story = {
    args: {
        amount: 34000.0,
        transactionFees: 1000,
        coinBTC: '0.0234510 BTC'
    }
};
export const Ethereum: Story = {
    args: {
        amount: 648.54,
        coinBTC: '0.0234510 ETH',
        transactionFees: 30,
        screen: 'buy'
    }
};
