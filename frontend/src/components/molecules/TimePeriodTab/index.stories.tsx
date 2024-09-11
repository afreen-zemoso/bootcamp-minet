import { Meta, StoryObj } from '@storybook/react';
import TimePeriodTab from '.';

const meta: Meta<typeof TimePeriodTab> = {
    title: 'molecules/TimePeriodTab',
    component: TimePeriodTab,
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' }
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TimePeriodTabStory: Story = {
    name: 'TimePeriodTab',
    args: { variant: 'primary' }
};
