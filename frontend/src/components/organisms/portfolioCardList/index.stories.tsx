import { Meta, StoryObj } from '@storybook/react';
import { PortfolioCardList } from '.';
import { portfolioCards } from '../../../utils/constants';
const meta: Meta<typeof PortfolioCardList> = {
    title: 'molecules/PortfolioCardList',
    component: PortfolioCardList,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof PortfolioCardList>;

export const purchase: Story = {
    args: {
        cardId: 1,
        cards: portfolioCards,
        width: '398px'
    }
};
