import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import SignUp from './index';
import ForgotPassword from './index';

export default {
    title: 'organisms/ForgotPassword',
    component: ForgotPassword
} as Meta;

const Template: StoryFn = (args) => <SignUp {...args} />;

export const Default = Template.bind({});
Default.args = {};
