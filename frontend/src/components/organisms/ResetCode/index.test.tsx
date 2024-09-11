import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextFieldComponent from '../../atoms/Textfield';
import ResetCode from '.';
import { resetCodeValue, resetPassword } from '../../../utils/constants';
import { BrowserRouter } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
}));
const renderWithRouter = (ui: any) => {
    return {
        ...render(ui, { wrapper: BrowserRouter })
    };
};
describe('ResetCode component', () => {
    it('should enable reset button if reset code is same', () => {
        renderWithRouter(<ResetCode />);
        const ResetCodeInput = document.getElementById(
            'code'
        ) as HTMLInputElement;
        const button = screen.getByText('Reset Password');
        expect(button).toBeDisabled();
        fireEvent.change(ResetCodeInput, {
            target: { value: resetCodeValue }
        });
        expect(ResetCodeInput.value).toBe(resetCodeValue);
        fireEvent.click(screen.getByText(resetPassword));
    });
});

describe('TextFieldComponent', () => {
    it('toggles show password on button click', () => {
        render(
            <TextFieldComponent
                id="password"
                label="Password"
                type="password"
                value="password"
            />
        );

        const showPasswordButton = screen.getByRole('button');

        const passwordInput = screen.getByLabelText('Password');
        expect(passwordInput).toHaveAttribute('type', 'password');

        fireEvent.click(showPasswordButton);

        expect(passwordInput).toHaveAttribute('type', 'text');

        fireEvent.click(showPasswordButton);

        expect(passwordInput).toHaveAttribute('type', 'password');
    });
});
