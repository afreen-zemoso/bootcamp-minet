import { Meta, StoryObj } from '@storybook/react';
import WalletCard from '.';

const meta: Meta<typeof WalletCard> = {
    title: 'molecules/WalletCard',
    component: WalletCard,
    argTypes: {
        balance: {
            control: { type: 'number', min: 0 }
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WalletCardStory: Story = {
    name: 'WalletCard',
    args: {
        balance: 24327.38
    }
};
