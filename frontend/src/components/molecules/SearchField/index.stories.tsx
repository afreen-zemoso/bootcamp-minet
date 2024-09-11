import { Meta, StoryFn } from '@storybook/react';
import SearchField from '.';

export default {
    title: 'molecules/SearchField',
    component: SearchField
} as Meta<typeof SearchField>;

const Template: StoryFn = (args: any) => <SearchField {...args} />;

export const SearchFieldStory = Template.bind({});

SearchFieldStory.args = {
    placeholder: 'Search all assets',
    filter: false
};
