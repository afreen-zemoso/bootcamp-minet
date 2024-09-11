import { Meta, StoryObj } from '@storybook/react';
import AmountInformation from '.';

const meta: Meta<typeof AmountInformation> = {
    title: 'molecules/AmountInformation',
    component: AmountInformation,
    argTypes: {
        numOfCryptoCoinsInvolved: {
            control: { type: 'number', min: 0 }
        },
        valuePerOneCryptoCoin: {
            control: { type: 'number', min: 0 }
        },
        cryptoCoinCode: {
            control: {
                type: 'radio'
            },
            options: ['BTC', 'ETH', 'BIN', 'TTR', 'CDN', 'XRP', 'DGC', 'PKD']
        },
        transactionType: {
            control: {
                type: 'radio'
            },
            options: ['sell', 'buy']
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AmountInformationStory: Story = {
    name: 'AmountInformation',
    args: {
        numOfCryptoCoinsInvolved: 0.98474,
        valuePerOneCryptoCoin: 1000,
        cryptoCoinCode: 'BTC',
        transactionType: 'sell'
    }
};
