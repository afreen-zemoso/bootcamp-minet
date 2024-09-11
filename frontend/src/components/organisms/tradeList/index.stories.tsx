import { Meta, StoryObj } from '@storybook/react';
import { TradeList } from '.';
import { trades } from '../../../utils/constants';
const meta: Meta<typeof TradeList> = {
    title: 'organisms/TradeList',
    component: TradeList,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof TradeList>;

export const purchase: Story = {
    args: {
        trades: trades
    }
};
