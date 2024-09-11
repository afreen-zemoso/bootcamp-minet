import { Meta, StoryObj } from '@storybook/react';
import { BitCoinOverview } from '.';
import { aboutBitcoin, resources } from '../../../utils/constants';
const meta: Meta<typeof BitCoinOverview> = {
    title: 'molecules/BitCoinOverview',
    component: BitCoinOverview,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof BitCoinOverview>;

export const overview: Story = {
    args: {
        about: aboutBitcoin,
        resources: resources,
        name: 'Bitcoin'
    }
};
