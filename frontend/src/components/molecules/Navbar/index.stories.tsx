import Navbar from './index';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: 'molecules/SideNav',
    component: Navbar
} as Meta;

const Template: StoryFn = () => <Navbar active={false} />;

export const SideNavigation = Template.bind({});

SideNavigation.args = {};
