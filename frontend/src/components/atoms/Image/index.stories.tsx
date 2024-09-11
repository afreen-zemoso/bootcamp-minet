import { Meta, StoryObj } from '@storybook/react';
import Image from '.';
import MinetLogo from '../../../../public/favicon.svg';

const meta: Meta<typeof Image> = {
    title: 'atoms/Image',
    component: Image,
    argTypes: {
        src: {
            control: { type: 'file', accept: 'svg' }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Image>;

export const ImageStory: Story = {
    name: 'Image',
    args: {
        src: MinetLogo
    }
};
