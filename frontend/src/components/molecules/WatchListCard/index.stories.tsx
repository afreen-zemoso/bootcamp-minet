import { Meta, StoryObj } from '@storybook/react';
import WatchListCard from '.';

const meta: Meta<typeof WatchListCard> = {
    title: 'molecules/WatchListCard',
    component: WatchListCard,
    argTypes: {
        profitOrLossPercentage: {
            control: { type: 'number', min: -99, max: 99 }
        },
        cryptoCoinCode: {
            control: { type: 'select' },
            options: ['BTC', 'ETH', 'BIN', 'TTR', 'CRD', 'XRP', 'DGC', 'PKD']
        },
        valuePerOneCoin: {
            control: { type: 'number', min: 0 }
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WatchListCardStroy: Story = {
    name: 'WatchListCard',
    args: {
        cryptoCoinCode: 'BTC',
        profitOrLossPercentage: 1.4,
        valuePerOneCoin: 32443.89,
        GraphProps: {
            id: 'Bitcoin',
            opacity: 0.1,
            series: [
                {
                    data: [20, 38, 35, 52, 42, 47]
                }
            ]
        },
        icon: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        name: 'Bitcoin'
    }
};
