import { Meta, StoryObj } from '@storybook/react';
import { TabsComponent } from '.';
import { Typography } from '@mui/material';

const meta: Meta<typeof TabsComponent> = {
    title: 'molecules/Tabs',
    component: TabsComponent
};

export default meta;
type Story = StoryObj<typeof TabsComponent>;

export const Tab: Story = {
    args: {
        value: 1,
        tabs: [
            {
                index: 0,
                children: <Typography variant="body1">All Assets</Typography>,
                label: 'All Assets'
            },
            {
                index: 1,
                children: <Typography variant="body1">Watchlist</Typography>,
                label: 'Watchlist'
            }
        ]
    }
};
