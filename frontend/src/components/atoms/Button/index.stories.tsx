import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import AddIcon from '../../../../public/assets/images/add.svg';
import { ReactSVG } from 'react-svg';

const meta: Meta<typeof Button> = {
    title: 'atoms/Button',
    component: Button
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
    name: 'Button',
    args: {
        variant: 'primary',
        children: 'Button'
    }
};

export const IconOnlyButtonVariant: Story = {
    name: 'Icon-Only Button Variant',
    args: {
        variant: 'icon-only',
        startIcon: <ReactSVG src={AddIcon} />
    }
};
