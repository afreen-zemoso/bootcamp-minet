import { act, fireEvent, render, screen } from '@testing-library/react';
import { Signin } from '.';
import '@testing-library/jest-dom';
import axios from 'axios';
import { user, token } from '../../../mocks/constants';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from '../../../redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { MinetService } from '../../../utils/MinetService';
jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

const SigninTest = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Signin />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    );
};
describe('Sign in Component', () => {
    test('rendering correctly', () => {
        render(<SigninTest />);
        expect(screen.getByTestId('sign in')).toBeInTheDocument;
    });
    test('Verify the change event of textfields', () => {
        render(<SigninTest />);
        const buttonElement = screen.getByRole('button', { name: /Sign in/i });
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toBeDisabled();

        const emailField = document.getElementById('email') as HTMLInputElement;
        fireEvent.change(emailField, { target: { value: 'pavan@gmail.com' } });
        expect(emailField).toHaveValue('pavan@gmail.com');
        const passwordField = document.getElementById(
            'password'
        ) as HTMLInputElement;
        fireEvent.change(passwordField, { target: { value: 'Pavan@123' } });
        expect(passwordField).toHaveValue('Pavan@123');
    });
    test('Verifying helpertext for email field', () => {
        render(<SigninTest />);
        const passwordField = document.getElementById(
            'password'
        ) as HTMLInputElement;
        fireEvent.change(passwordField, { target: { value: 'Pavan@123' } });
        expect(passwordField).toHaveValue('');

        const emailField = document.getElementById('email') as HTMLInputElement;
        fireEvent.change(emailField, { target: { value: 'email' } });
        expect(emailField).toHaveValue('email');

        fireEvent.change(passwordField, { target: { value: 'password' } });
        expect(passwordField).toHaveValue('password');

        fireEvent.change(passwordField, { target: { value: 'pavan' } });
        expect(passwordField).toHaveValue('pavan');
    });

    test('changing the visibility of the passwords', () => {
        render(<SigninTest />);
        const buttonElements = screen.getByTestId('passwordIcon');
        fireEvent.click(buttonElements);
        const input = document.getElementById('password');
        expect(input).toHaveAttribute('type', 'text');
    });

    test('To check for valid signin', async () => {
        await act(async () => {
            mockedAxios.post.mockResolvedValue({ data: token });
            mockedAxios.get.mockResolvedValue({ data: user });
            render(<SigninTest />);
        });
        const emailField = document.getElementById('email') as HTMLInputElement;
        fireEvent.change(emailField, { target: { value: 'test@gmail.com' } });
        expect(emailField).toHaveValue('test@gmail.com');
        const passwordField = document.getElementById(
            'password'
        ) as HTMLInputElement;
        fireEvent.change(passwordField, { target: { value: 'Test@123' } });
        expect(passwordField).toHaveValue('Test@123');
        const buttonElements = screen.getByText('Sign In');
        await act(async () => {
            fireEvent.click(buttonElements);
        });
        MinetService.setToken(token.token);
    });

    test('To check for invalid signin', async () => {
        await act(async () => {
            mockedAxios.post.mockRejectedValue({ data: {} });
            render(<SigninTest />);
        });
        const emaillField = document.getElementById(
            'email'
        ) as HTMLInputElement;
        fireEvent.change(emaillField, { target: { value: 'john@gmail.com' } });
        const passworddField = document.getElementById(
            'password'
        ) as HTMLInputElement;
        fireEvent.change(passworddField, { target: { value: 'Test@123' } });
        const button = screen.getByText('Sign In');
        await act(async () => {
            fireEvent.click(button);
        });
    });
});
