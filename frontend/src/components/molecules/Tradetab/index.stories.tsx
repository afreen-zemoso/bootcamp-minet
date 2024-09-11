import { Meta, StoryObj } from '@storybook/react';
import { TradeTab } from '.';
import BitCoin from '../../../../public/assets/images/coin.svg';
const meta: Meta<typeof TradeTab> = {
    title: 'Molecules/TradeTab',
    component: TradeTab,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof TradeTab>;

export const tab: Story = {
    args: {
        id: 'bitcoin',
        icon: BitCoin,
        name: 'Bitcoin',
        symbol: 'BTC',
        price: 3285553.73,
        change: 1.06,
        marketCap: 60.1,
        checked: true,
        onChecked: (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event.target.name);
        }
    }
};
