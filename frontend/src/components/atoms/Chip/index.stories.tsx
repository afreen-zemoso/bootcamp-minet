import { Meta, StoryFn } from '@storybook/react';
import {Chip} from '.';

export default {
    title: 'atoms/Chip',
    component: Chip
} as Meta<typeof Chip>;

const Template: StoryFn = (args: any) => <Chip {...args} />;

export const lightChip = Template.bind({});
export const darkChip = Template.bind({});

lightChip.args = {
    label: '24 h',
    chipVariant: 'light'
};

darkChip.args = {
    label: 'Purchased',
    chipVariant: 'dark'
};