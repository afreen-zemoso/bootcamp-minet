import { Meta, StoryObj } from '@storybook/react';
import { BitCoinSlider } from '.';

const meta: Meta<typeof BitCoinSlider> = {
    title: 'molecules/bitCoinSlider',
    component: BitCoinSlider
};

export default meta;
type Story = StoryObj<typeof BitCoinSlider>;

export const slider: Story = {
    args: {
        currentId: 1
    }
};
