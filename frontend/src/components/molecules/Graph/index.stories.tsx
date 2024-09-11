import { StoryObj, Meta } from '@storybook/react';
import { Graph } from '.';

const meta: Meta<typeof Graph> = {
    title: 'Molecules/Graph',
    component: Graph
};
export default meta;

type Story = StoryObj<typeof Graph>;

export const Chart: Story = {
    args: {
        id: 'Bitcoin',
        colors: ['#FFA74F', '#0052FF'],
        opacity: 0.1,
        series: [
            {
                name: 'Bitcoin',
                data: [20, 38, 35, 52, 42, 47]
            },
            {
                name: 'Total Investment',
                data: [19, 30, 27, 35, 34, 38]
            }
        ],
        width: '780.5px',
        height: '246px',
        labelVisible: true,
        gridVisible: true
    }
};

export const Plot: Story = {
    args: {
        id: 'Success',
        colors: ['#20B03F'],
        opacity: 0.1,
        series: [
            {
                data: [70, 65, 35, 60, 22, 71]
            }
        ],

        width: '188.5px',
        height: '58.35px'
    }
};
