import type { Meta, StoryObj } from '@storybook/react';
import TextFieldComponent, { Props } from '.';

const meta: Meta<typeof TextFieldComponent> = {
    title: 'Atoms/Textfield',
    component: TextFieldComponent,
    argTypes: {
        id: { control: 'text' },
        label: { control: 'text' },
        type: { control: 'radio', options: ['password', 'email'] },
        value: { control: 'text' },
        onChange: { action: 'onChange' },
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' },
        error: { control: 'boolean' },
        helperText: { control: 'text' },
        fullWidth: { control: 'boolean' },
        required: { control: 'boolean' }
    }
};
export default meta;

export const DefaultIcon: StoryObj<Props> = (args: Props) => {
    const { type, ...rest } = args;
    return (
        <TextFieldComponent
            {...rest}
            type={type === 'password' ? 'password' : 'email'}
        />
    );
};
DefaultIcon.args = {
    id: 'default',
    label: 'Default',
    type: 'email',
    value: '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: () => {},
    placeholder: 'Enter your email or password'
};
