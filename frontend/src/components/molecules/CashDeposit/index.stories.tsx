import type { Meta, StoryObj } from '@storybook/react';
import CashDeposit from '.';

const meta: Meta<typeof CashDeposit> = {
    title: 'molecules/ToDeposit',
    component: CashDeposit
};
export default meta;
type Story = StoryObj<typeof CashDeposit>;
export const ToDeposit: Story = {
    args: {}
};
