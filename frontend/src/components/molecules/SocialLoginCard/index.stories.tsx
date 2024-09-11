import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import SocialLogin from '.';
import FacebookLogo from '../../../../public/assets/images/facebook.svg';
import GoogleLogo from '../../../../public/assets/images/google.svg';
import MicrosoftLogo from '../../../../public/assets/images/microsoft.svg';

export default {
    title: 'molecules/SocialLogin',
    component: SocialLogin
} as Meta;

const Template: StoryFn<typeof SocialLogin> = (args) => (
    <SocialLogin {...args} />
);

export const GoogleLogin = Template.bind({});
GoogleLogin.args = {
    text: 'Google',
    src: GoogleLogo
};

export const FacebookLogin = Template.bind({});
FacebookLogin.args = {
    text: 'Facebook',
    src: FacebookLogo
};

export const MicrosoftLogin = Template.bind({});
MicrosoftLogin.args = {
    text: 'Microsoft',
    src: MicrosoftLogo
};
