import { Meta, StoryObj } from '@storybook/react';
import { SliderComponent } from '.';

const meta: Meta<typeof SliderComponent> = {
    title: 'atoms/SliderComponent',
    component: SliderComponent
};

export default meta;
type Story = StoryObj<typeof SliderComponent>;

export const slider: Story = {
    args: {
        value: 50,
        currencyname: 'BTC',
        currencyrate: 360000
    }
};
