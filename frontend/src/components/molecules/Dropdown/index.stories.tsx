import type { Meta, StoryObj } from '@storybook/react';
import DropDownComponent from '.';

const meta: Meta<typeof DropDownComponent> = {
    title: 'Molecules/DropDown',
    component: DropDownComponent
};
export default meta;

type Story = StoryObj<typeof meta>;
export const DropDownStory: Story = {
    name: 'Dropdown',
    args: {
        menuList: ['24h', 'Option 1', 'Option 2'],
        width: '200px'
    }
};
