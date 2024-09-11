import { StoryFn, Meta } from '@storybook/react';
import ImageWithText, { ImageWithTextProps } from './index';
import theme from '../../../theme';
import PlainCard from '../../../../public/assets/images/plaincard.svg';

export default {
    title: 'molecules/ImageWithText',
    component: ImageWithText
} as Meta;

const Template: StoryFn<ImageWithTextProps> = (args) => (
    <ImageWithText {...args} />
);

export const NoCrypto = Template.bind({});
NoCrypto.args = {
    image: PlainCard,
    text: 'You dont own any crypto, Send yourself some crypto to get started.',
    textColor: theme.palette.text.mediumEmphasis,
    textHeight: '32px',
    textWidth: '350px'
};
