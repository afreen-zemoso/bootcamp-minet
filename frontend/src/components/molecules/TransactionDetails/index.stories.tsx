import { StoryFn, Meta } from '@storybook/react';
import TransactionDetails, { DetailsProps } from './index';
import Payment from '../../../../public/assets/images/payment.svg';
import Delivery from '../../../../public/assets/images/circledelivery.svg';
import Wallet from '../../../../public/assets/images/wallet.svg';

export default {
    title: 'Molecules/TransactionDetails',
    component: TransactionDetails
} as Meta;

const Template: StoryFn<DetailsProps> = (args) => (
    <TransactionDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
    paymentSrc: Payment,
    paymentCaptiontext: 'Payment method',
    paymentBodytext: 'Visa credit...8845',
    deliverySrc: Delivery,
    deliveryCaptiontext: 'Delivery fees',
    deliveryBodytext: '0.005ETH',
    walletSrc: Wallet,
    walletCaptiontext: 'Deposit to',
    walletBodytext: 'Etherium wallet'
};
