import { Meta, StoryObj } from '@storybook/react';
import { Signin } from '.';
const meta: Meta<typeof Signin> = {
    title: 'organisms/Signin',
    component: Signin,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Signin>;

export const signin: Story = {};
