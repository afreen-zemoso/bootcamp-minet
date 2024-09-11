import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignUp from './index';
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
describe('SignUp component', () => {
    it('updates full name on change', () => {
        renderWithRouter(<SignUp />);
        const fullNameInput = screen.getByPlaceholderText(
            `Eg: John Doe`
        ) as HTMLInputElement;

        fireEvent.change(fullNameInput, { target: { value: '' } });

        expect(fullNameInput.value).toBe('');
    });

    it('updates email on change', () => {
        renderWithRouter(<SignUp />);
        const emailInput = screen.getByPlaceholderText(
            `you@company.com`
        ) as HTMLInputElement;

        fireEvent.change(emailInput, { target: { value: `you@company.com` } });

        expect(emailInput.value).toBe(`you@company.com`);
    });

    it('updates full name on change', () => {
        renderWithRouter(<SignUp />);
        const fullNameInput = screen.getByPlaceholderText(
            `Eg: John Doe`
        ) as HTMLInputElement;
        fireEvent.change(fullNameInput, { target: { value: `Eg: John Doe` } });
    });

    it('toggles password visibility', () => {
        renderWithRouter(<SignUp />);
        const passwordInput = screen.getByPlaceholderText(`Create Password`);
        expect(passwordInput.getAttribute('type')).toBe(`password`);
    });

    test('renders the component correctly', () => {
        renderWithRouter(<SignUp />);
    });

    test('should update the password state', () => {
        renderWithRouter(<SignUp />);
        const passwordInput = screen.getByPlaceholderText(
            `Create Password`
        ) as HTMLInputElement;

        fireEvent.change(passwordInput, {
            target: { value: `Create Password` }
        });

        expect(passwordInput.value).toBe(`Create Password`);
    });

    test('should toggle password visibility', () => {
        renderWithRouter(<SignUp />);
        const toggleButton = screen.getByTestId('password-toggle-button');
        const passwordInput = screen.getByPlaceholderText(
            `Create Password`
        ) as HTMLInputElement;

        fireEvent.click(toggleButton);
        expect(passwordInput.type).toBe(`password`);
    });

    test('enables sign-up when valid data is entered', () => {
        renderWithRouter(<SignUp />);
        const fullNameInput = screen.getByPlaceholderText(
            'Eg: John Doe'
        ) as HTMLInputElement;
        const emailInput = screen.getByPlaceholderText(
            'you@company.com'
        ) as HTMLInputElement;
        const passwordInput = screen.getByPlaceholderText(
            'Create Password'
        ) as HTMLInputElement;
        const signUpButton = screen.getByText(`Sign up`) as HTMLButtonElement;

        expect(signUpButton.disabled).toBe(true);

        fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
        expect(fullNameInput.value).toBe('John Doe');
        expect(signUpButton.disabled).toBe(true);

        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        expect(emailInput.value).toBe('john@example.com');
        expect(signUpButton.disabled).toBe(true);

        fireEvent.change(passwordInput, { target: { value: 'Password123!' } });
        expect(passwordInput.value).toBe('Password123!');
        expect(signUpButton.disabled).toBe(false);
    });

    test('disables sign-up when invalid data is entered', () => {
        renderWithRouter(<SignUp />);
        const signUpButton = screen.getByText(`Sign up`) as HTMLButtonElement;

        expect(signUpButton.disabled).toBe(true);
    });

    test('should post the signup data on clicking signup button', () => {
        renderWithRouter(<SignUp />);
        const signUpButton = screen.getByText(`Sign up`);

        const fullNameInput = screen.getByPlaceholderText(`Eg: John Doe`);

        fireEvent.change(fullNameInput as HTMLInputElement, {
            target: { value: 'Fullname' }
        });

        const emailInput = screen.getByPlaceholderText(`you@company.com`);

        fireEvent.change(emailInput as HTMLInputElement, {
            target: { value: `you@company.com` }
        });

        const passwordInput = screen.getByPlaceholderText(`Create Password`);

        fireEvent.change(passwordInput as HTMLInputElement, {
            target: { value: `Password@123` }
        });
        expect(signUpButton).toBeEnabled();
        fireEvent.click(signUpButton);
    });
});
