import { StoryObj, Meta } from '@storybook/react';
import WatchListBar from './index';
import BitCoinIcon from '../../../../public/assets/images/bitcoin-32x32.svg';

const meta: Meta<typeof WatchListBar> = {
    title: 'Organisms/WatchListBar',
    component: WatchListBar
};
export default meta;
type Story = StoryObj<typeof WatchListBar>;

export const watchlistBar: Story = {
    args: {
        getState: () => {},
        cryptoCoin: {
            id: 'bitcoin',
            name: 'Bitcoin',
            symbol: 'BTC',
            icon: BitCoinIcon,
            price: 0,
            change: 32,
            marketCap: 232,
            volume: 2.9,
            circulatingSupply: 892
        }
    }
};
