import { Meta, StoryObj } from '@storybook/react';
import Portfolio from '.';

const meta: Meta<typeof Portfolio> = {
    title: 'organisms/Portfolio',
    component: Portfolio
};

export default meta;

type Story = StoryObj<typeof Portfolio>;

export const PortfolioStory: Story = {
    name: 'Portfolio',
    args: {
        totalInvestment: {
            name: 'Total Investment',
            value: 11900204,
            percentage: -1.2,
            data: [19, 30, 27, 35, 34, 38],
            color: '#0052FF'
        },
        coin: {
            name: 'Bitcoin',
            value: 12400,
            percentage: 8.2,
            data: [20, 38, 35, 52, 42, 47],
            color: '#FFA74F'
        },
        displayGraph: true
    }
};
