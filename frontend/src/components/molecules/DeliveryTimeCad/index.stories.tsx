import { Meta, StoryFn } from '@storybook/react';
import DeliveryTimeCard from '.';

export default {
    title: 'molecules/DeliveryTimeCard',
    component: DeliveryTimeCard
} as Meta<typeof DeliveryTimeCard>;

const Template: StoryFn = (args: any) => <DeliveryTimeCard {...args} />;

export const deliveryCard = Template.bind({});

deliveryCard.args = {
    time: '2-5',
    code: 'BTC'
};
