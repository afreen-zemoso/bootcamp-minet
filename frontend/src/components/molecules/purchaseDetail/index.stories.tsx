import { Meta, StoryObj } from '@storybook/react';
import { PurchaseDetail } from '.';
import { purchaseMessage } from '../../../utils/constants';
const meta: Meta<typeof PurchaseDetail> = {
    title: 'molecules/PurchaseDetail',
    component: PurchaseDetail,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof PurchaseDetail>;

export const purchase: Story = {
    args: {
        paymentMessage: purchaseMessage,
        sell: false,
        currency: '0.0234510 BTC'
    }
};
