import { Meta, StoryObj } from '@storybook/react';
import PaymentCard from '.';

const meta: Meta<typeof PaymentCard> = {
    title: 'molecules/PaymentCard',
    component: PaymentCard,
    argTypes: {
        cryptoCoinCode: {
            control: { type: 'select' },
            options: ['BTC', 'ETH', 'BIN', 'CRD', 'DGC', 'PKD', 'TTR', 'XRP']
        },
        balance: {
            control: { type: 'number', min: 0 }
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PaymentCardStory: Story = {
    name: 'Payment Card',
    args: {
        cryptoCoinCode: 'BTC',
        balance: 93485
    }
};
