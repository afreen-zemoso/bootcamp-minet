import { Meta, StoryObj } from '@storybook/react';
import CurrencyPortfolio from '.';

const meta: Meta<typeof CurrencyPortfolio> = {
    title: 'organisms/CurrencyPortfolio',
    component: CurrencyPortfolio
};

export default meta;

type Story = StoryObj<typeof CurrencyPortfolio>;

export const PortfolioStory: Story = {
    name: 'PortfolioCurrency',
    args: {
        coin: {
            name: 'Bitcoin',
            value: 12400,
            percentage: 8.2,
            data: [20, 38, 35, 52, 42, 47],
            color: '#FFA74F'
        }
    }
};
