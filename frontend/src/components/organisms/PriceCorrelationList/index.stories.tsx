import { Meta, StoryFn } from '@storybook/react';
import { priceCorrelationCards } from '../../../utils/constants';
import { PriceCorrelationList } from '.';

export default {
    title: 'molecules/PriceCorrelationList',
    component: PriceCorrelationList
} as Meta<typeof PriceCorrelationList>;

const Template: StoryFn = (args: any) => <PriceCorrelationList {...args} />;

export const PriceCorrelationListStory = Template.bind({});

PriceCorrelationListStory.args = {
    cardId: 'bitcoin',
    cards: priceCorrelationCards
};
