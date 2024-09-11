import { Meta, StoryObj } from '@storybook/react';
import Header from '.';

const meta: Meta<typeof Header> = {
    title: 'molecules/Header',
    component: Header
};

export default meta;

type Story = StoryObj<typeof Header>;

export const HeaderStory: Story = {
    name: 'Header',
    args: {
        text: 'DashBoard',
        type: 'dashboard'
    }
};
