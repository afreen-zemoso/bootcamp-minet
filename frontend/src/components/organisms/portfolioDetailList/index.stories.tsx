import { Meta, StoryObj } from '@storybook/react';
import { PortfolioDetailList } from '.';
import { portfolioCards, recentTransactions } from '../../../utils/constants';
const meta: Meta<typeof PortfolioDetailList> = {
    title: 'organisms/PortfolioDetailList',
    component: PortfolioDetailList,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof PortfolioDetailList>;

export const details: Story = {
    args: {
        balance: 14027.2,
        dollerCurrency: 34000,
        portfolioCards: {
            cardId: 'bitcoin',
            cards: portfolioCards
        },
        recentTransactions: recentTransactions,
        width: '398px'
    }
};
