import { Meta, StoryObj } from '@storybook/react';
import { Icon } from '.';

const meta: Meta<typeof Icon> = {
    title: 'atoms/Icon',
    component: Icon
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const star: Story = {
    args: {
        checked: false
    }
};
