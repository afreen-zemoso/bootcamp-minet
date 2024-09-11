import { Meta, StoryObj } from '@storybook/react';
import Avatar from '.';
import AvatarLogo from '../../../../public/assets/images/avatar.svg';

const meta: Meta<typeof Avatar> = {
    title: 'atoms/Avatar',
    component: Avatar,
    argTypes: {
        src: {
            control: { type: 'file', accept: 'svg' }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const AvatarStory: Story = {
    name: 'Avatar',
    args: {
        src: AvatarLogo,
        alt: 'Avatar Logo',
        width: '62px',
        height: '62px'
    }
};
