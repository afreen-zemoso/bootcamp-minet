import { Meta, StoryObj } from '@storybook/react';
import BuyCryptoCard from '.';
import { cryptoCoins } from '../../../mocks/constants';

const meta: Meta<typeof BuyCryptoCard> = {
    title: 'organisms/BuyCryptoCard',
    component: BuyCryptoCard,
    argTypes: {
        transactionType: {
            control: { type: 'radio' },
            options: ['sell', 'buy']
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BuyCryptoCardProps: Story = {
    name: 'BuyCryptoCard',
    args: {
        transactionType: 'buy',
        cryptoCoins: cryptoCoins,
        selectedValue: 'bitcoin'
    }
};
