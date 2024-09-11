import { StoryFn, Meta } from '@storybook/react';
import AmountDetails from '.';
import { AmountDetailsProps } from '../../../utils/interfaces/AmountdetailsInterface';

export default {
    title: 'Organisms/AmountDetails',
    component: AmountDetails
} as Meta;

const Template: StoryFn<AmountDetailsProps> = (args) => (
    <AmountDetails {...args} />
);

export const Buy = Template.bind({});
Buy.args = {
    userAmount: 30000,
    cryptoBalance: 0.4145,
    cryptocode: 'ETH',
    cryptoPrice: 2453455.54,
    buy: true,
    sliderValue: 0.2342
};
export const Sell = Template.bind({});
Sell.args = {
    userAmount: 30000,
    cryptoBalance: 0.4145,
    cryptocode: 'ETH',
    cryptoPrice: 2453455.54,
    buy: false,
    sliderValue: 0.2342
};
