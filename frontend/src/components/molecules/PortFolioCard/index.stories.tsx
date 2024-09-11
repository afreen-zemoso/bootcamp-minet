import { Meta, StoryFn } from '@storybook/react';
import PortFolioCard from '.';
import BitCoin from '../../../../public/assets/images/coin.svg';

export default {
    title: 'molecules/PortFolioCard',
    component: PortFolioCard
} as Meta<typeof PortFolioCard>;

const Template: StoryFn = (args: any) => <PortFolioCard {...args} />;

export const PositiveChangePortfolio = Template.bind({});
export const NegativeChangePortfolio = Template.bind({});
export const PriceCorrelationCard = Template.bind({});
export const WalletTransactionCard = Template.bind({});

PositiveChangePortfolio.args = {
    id: 'bitcoin',
    image: BitCoin,
    symbol: 'BTC',
    change: 1.06,
    price: 34500,
    name: 'Bitcoin',
    currentCardId: 'bitcoin',
    portfolio: true,
    width: '370px'
};

NegativeChangePortfolio.args = {
    id: 'bitcoin',
    image: BitCoin,
    symbol: 'BTC',
    change: -0.06,
    price: 34500,
    name: 'Bitcoin',
    currentCardId: 'bitcoin',
    portfolio: true,
    width: '370px'
};

PriceCorrelationCard.args = {
    id: 'bitcoin',
    image: BitCoin,
    symbol: 'Moves tightly together',
    change: 1.06,
    price: 87.0,
    name: 'Bitcoin',
    currentCardId: 'bitcoin',
    portfolio: false,
    width: '370px'
};

WalletTransactionCard.args = {
    id: 'bitcoin',
    image: BitCoin,
    symbol: 'Moves tightly together',
    change: 1.06,
    price: 87.0,
    name: 'Bitcoin',
    currentCardId: 'bitcoin',
    coinCode: 'BTC',
    portfolio: false,
    date: { date: 21, month: 'Feb' },
    chipLabel: 'Purchased'
};
