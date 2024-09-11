import { Meta, StoryObj } from '@storybook/react';
import { CoinChip } from '.';

const meta: Meta<typeof CoinChip> = {
    title: 'atoms/CoinChip',
    component: CoinChip
};

export default meta;
type Story = StoryObj<typeof CoinChip>;

export const chip: Story = {
    args: {
        label: 'Bitcoin',
        displayBorder: false,
        background: 'rgba(247, 147, 26, 0.2)'
    }
};
