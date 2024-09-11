import { Meta, StoryObj } from '@storybook/react';
import PortfolioValue from '.';

const meta: Meta<typeof PortfolioValue> = {
    title: 'molecules/PortfolioValue',
    component: PortfolioValue,
    argTypes: {
        label: {
            control: { type: 'text', max: 50 }
        },
        currentValue: {
            control: { type: 'number', min: 0 }
        },
        profitOrLossPercentage: {
            control: { type: 'number', min: -99, max: 99 }
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PortfolioValueStory: Story = {
    name: 'PortfolioValue',
    args: {
        label: 'Total Investment',
        currentValue: 10100,
        profitOrLossPercentage: 9.0
    }
};
