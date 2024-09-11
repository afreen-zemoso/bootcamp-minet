import { Meta, StoryObj } from '@storybook/react';
import { LabelTestField } from '.';
import { emailPlaceholder, emailWarningText } from '../../../utils/constants';
const meta: Meta<typeof LabelTestField> = {
    title: 'molecules/LabelTestField',
    component: LabelTestField,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof LabelTestField>;
export const textfield: Story = {
    args: {
        id: 'email',
        type: 'text',
        value: '',
        placeholder: emailPlaceholder,
        helperText: emailWarningText,
        error: false,
        label: 'Email'
    }
};
