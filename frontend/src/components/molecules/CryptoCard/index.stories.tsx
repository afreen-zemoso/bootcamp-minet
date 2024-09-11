import { Meta, StoryFn } from '@storybook/react';
import CryptoCard from '.';
import BitCoin from '../../../../public/assets/images/coin.svg'

export default{
    title: 'molecules/CryptoCard',
    component: CryptoCard
} as Meta<typeof CryptoCard>;

const Template: StoryFn = (args: any) => (
    <CryptoCard {...args} />
    );

export const Bitcoin = Template.bind({})
  
Bitcoin.args = {
    src: BitCoin,
    name: 'Bitcoin',
    value: 3406069.54,
    selected: true,
    width: '159px',
    height:'156px'
}
  