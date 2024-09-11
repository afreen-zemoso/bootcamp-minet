import { Meta, StoryObj } from '@storybook/react';
import WalletDetailsBar from '.';

const meta: Meta<typeof WalletDetailsBar> = {
    title: 'molecules/WalletDetailsBar',
    component: WalletDetailsBar
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WalletDetailsBarStory: Story = {
    name: 'WalletDetailsBar',
    args: {
        walletBalance: 34000
    }
};
