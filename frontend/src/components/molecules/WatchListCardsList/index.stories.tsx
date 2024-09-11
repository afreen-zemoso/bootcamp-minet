import { Meta, StoryFn } from '@storybook/react';
import { watchListCards } from '../../../utils/constants';
import WatchListCardsList from '.';

export default {
    title: 'molecules/WatchListCardsList',
    component: WatchListCardsList
} as Meta<typeof WatchListCardsList>;

const Template: StoryFn = (args: any) => <WatchListCardsList {...args} />;

export const WatchListCardsListStory = Template.bind({});

WatchListCardsListStory.args = {
    cards: watchListCards
};
