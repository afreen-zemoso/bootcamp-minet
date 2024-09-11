import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResetPassword from '.';
import {
    emptyField,
    mismatchPasswordsMsg,
    passwordLengthText,
    passwordWarningText
} from '../../../utils/constants';
import { BrowserRouter } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
    useParams: jest.fn().mockReturnValue({
        email: 'john@gmail.com'
    })
}));
const renderWithRouter = (ui: any) => {
    return {
        ...render(ui, { wrapper: BrowserRouter })
    };
};
describe('Reset Password Component', () => {
    it('rendering correctly', () => {
        renderWithRouter(<ResetPassword />);
        expect(screen.getByTestId('reset password')).toBeInTheDocument;
    });

    it('Verifying password warning helpertexts for Password field', () => {
        renderWithRouter(<ResetPassword />);
        const passwordField = screen.getAllByRole('textbox')[0];
        fireEvent.change(passwordField, {
            target: { value: 'Password123' }
        });
        expect(screen.getByText(passwordWarningText)).toBeInTheDocument();
        fireEvent.change(passwordField, {
            target: { value: 'pass' }
        });
        expect(screen.getByText(passwordLengthText)).toBeInTheDocument();

        const reEnteredPasswordField = screen.getAllByRole('textbox')[1];
        fireEvent.change(reEnteredPasswordField, {
            target: { value: 'Password123' }
        });
        expect(screen.getByText(passwordWarningText)).toBeInTheDocument();
        fireEvent.change(reEnteredPasswordField, {
            target: { value: 'pass' }
        });
        expect(screen.getAllByText(passwordLengthText).length).toBe(2);
    });

    it('Verifying emptyfield helpertext for Password field', () => {
        renderWithRouter(<ResetPassword />);

        const reEnteredPasswordField = screen.getAllByRole('textbox')[1];
        fireEvent.change(reEnteredPasswordField, {
            target: { value: 'Password123' }
        });
        expect(screen.getByText(emptyField)).toBeInTheDocument();

        const buttonElement = screen.getByRole('button', {
            name: /Reset Password/i
        });
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toBeDisabled();
    });

    it('changing the visibility of the passwords', () => {
        renderWithRouter(<ResetPassword />);
        const button1 = screen.getAllByTestId('passwordIcon')[0];
        const input1 = document.getElementById('password');
        expect(input1).toHaveAttribute('type', 'password');
        fireEvent.click(button1);
        expect(input1).toHaveAttribute('type', 'text');
    });

    it('Reset password click should verify for the correctness of the passwords', () => {
        renderWithRouter(<ResetPassword />);
        const buttonElement = screen.getByRole('button', {
            name: /Reset Password/i
        });
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toBeDisabled();

        const passwordField = screen.getAllByRole('textbox')[0];
        fireEvent.change(passwordField, {
            target: { value: 'Password@123' }
        });
        expect(passwordField).toHaveValue('Password@123');
        const reEnteredPasswordField = screen.getAllByRole('textbox')[1];
        fireEvent.change(reEnteredPasswordField, {
            target: { value: 'Password!123' }
        });
        expect(reEnteredPasswordField).toHaveValue('Password!123');
        expect(buttonElement).toBeEnabled();
        fireEvent.click(buttonElement);
        expect(screen.getByText(mismatchPasswordsMsg)).toBeInTheDocument();
    });

    it('on button click should get the correct user data from axios', async () => {
        renderWithRouter(<ResetPassword />);
        const buttonElement = screen.getByRole('button', {
            name: /Reset Password/i
        });
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toBeDisabled();
        const passwordField = screen.getAllByRole('textbox')[0];
        fireEvent.change(passwordField, {
            target: { value: 'Password@123' }
        });
        const reEnteredPasswordField = screen.getAllByRole('textbox')[1];
        fireEvent.change(reEnteredPasswordField, {
            target: { value: 'Password@123' }
        });
        fireEvent.click(buttonElement);
    });
});
