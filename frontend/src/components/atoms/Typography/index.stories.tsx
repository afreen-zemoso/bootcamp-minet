import TypographyComponent from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TypographyComponent> = {
    title: 'Atoms/Typography',
    component: TypographyComponent
};
export default meta;

type Story = StoryObj<typeof TypographyComponent>;
export const TypographyStory: Story = {
    name: 'Typography',
    args: {
        variant: 'h4',
        children: 'h4 Text'
    }
};
