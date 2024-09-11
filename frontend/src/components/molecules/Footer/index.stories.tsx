import type { Meta, StoryObj } from '@storybook/react';
import Footer from './index';

const meta: Meta<typeof Footer> = {
    title: 'Molecules/Footer',
    component: Footer
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FooterStory: Story = {
    name: 'SimpleFooter',
    args: {
        menuItems: [
            { text: 'Dashboard' },
            { text: 'Careers' },
            { text: 'Legal & Privacy' },
            { text: '© 2021 Minet', isBlack: true }
        ]
    }
};
