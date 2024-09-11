import React from 'react';
import {
    render,
    fireEvent,
    screen,
    waitFor,
    act
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ForgotPassword from '.';
import TextFieldComponent from '../../atoms/Textfield';
import Button from '../../atoms/Button';
import axios from 'axios';
import { invalidUserText } from '../../../utils/constants';
import { BrowserRouter } from 'react-router-dom';
import { user } from '../../../mocks/constants';
jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

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
describe('ForgotPassword component', () => {
    it('updates email on change', () => {
        renderWithRouter(<ForgotPassword />);
        const emailInput = screen.getByPlaceholderText(
            `you@company.com`
        ) as HTMLInputElement;

        fireEvent.change(emailInput, { target: { value: `you@company.com` } });

        expect(emailInput.value).toBe(`you@company.com`);
    });

    test('renders the component correctly', () => {
        renderWithRouter(<ForgotPassword />);
    });

    test('should get error text if the entered user is not a valid user', async () => {
        act(() => {
            mockedAxios.get.mockRejectedValue({
                data: {}
            });
            renderWithRouter(<ForgotPassword />);
        });
        const emailInput = document.getElementById('email') as HTMLInputElement;

        fireEvent.change(emailInput, { target: { value: `you@company.com` } });
        const resetButton = screen.getByText('Send Reset Link');
        expect(resetButton).toBeEnabled();
        act(() => {
            fireEvent.click(resetButton);
        });
        await waitFor(() => screen.getByText(invalidUserText));
    });

    test('should navigate to reset code on valid user', async () => {
        act(() => {
            mockedAxios.get.mockResolvedValue({
                data: user
            });
            renderWithRouter(<ForgotPassword />);
        });
        const emailInput = document.getElementById('email') as HTMLInputElement;

        fireEvent.change(emailInput, { target: { value: `you@company.com` } });
        const resetButton = screen.getByText('Send Reset Link');
        expect(resetButton).toBeEnabled();
        act(() => {
            fireEvent.click(resetButton);
        });
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

    it('does not render show password button for non-password fields', () => {
        render(
            <TextFieldComponent
                id="email"
                label="Email"
                type="email"
                value="test@example.com"
            />
        );

        const showPasswordButton = screen.queryByRole('button');

        expect(showPasswordButton).toBeNull();
    });
});

describe('Button component', () => {
    it('renders children correctly', () => {
        render(<Button>Click me</Button>);

        const button = screen.getByTestId('Button');
        expect(button).toHaveTextContent('Click me');
    });

    it('calls onClick handler when clicked', () => {
        const onClickMock = jest.fn();
        render(<Button onClick={onClickMock}>Click me</Button>);

        const button = screen.getByTestId('Button');
        fireEvent.click(button);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('applies primary variant styles correctly', () => {
        render(<Button variant="primary">Primary Button</Button>);

        const button = screen.getByTestId('Button');
        expect(button).toHaveClass('MuiButton-contained');
        expect(button).not.toHaveClass('MuiButton-outlined');
    });

    it('applies secondary variant styles correctly', () => {
        render(<Button variant="secondary">Secondary Button</Button>);

        const button = screen.getByTestId('Button');
        expect(button).toHaveClass('MuiButton-outlined');
        expect(button).not.toHaveClass('MuiButton-contained');
    });

    it('disables the button when disabled prop is true', () => {
        render(<Button disabled>Disabled Button</Button>);

        const button = screen.getByTestId('Button');
        expect(button).toBeDisabled();
    });

    it('applies fullWidth style correctly', () => {
        render(<Button fullWidth>Full Width Button</Button>);

        const button = screen.getByTestId('Button');
        expect(button).toHaveStyle('width: 100%');
    });
});
