import { render, screen } from '@testing-library/react';
import CashDeposit from './index';
import Dollar from '../../../../public/assets/images/dollar.svg';

describe('CashDeposit Component', () => {
    test('renders CashDeposit component without errors', () => {
        render(<CashDeposit />);
        // No assertion needed, the test will fail if there are any rendering errors.
    });

    test('has correct data-testid attribute on Box component', () => {
        render(<CashDeposit />);
        const boxElement = screen.getByTestId('cashDeposit');
        expect(boxElement).toBeInTheDocument();
    });

    test('renders "Deposit to" text', () => {
        render(<CashDeposit />);
        const depositToText = screen.getByText('Deposit to');
        expect(depositToText).toBeInTheDocument();
    });

    test('renders Image component with correct attributes', () => {
        render(<CashDeposit />);
        const imageElement = screen.getByAltText('dollar_image');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', Dollar);
    });

    test('renders "USD Coin (Cash)" text', () => {
        render(<CashDeposit />);
        const usdCoinText = screen.getByText('USD Coin (Cash)');
        expect(usdCoinText).toBeInTheDocument();
    });

    test('renders "Default" text', () => {
        render(<CashDeposit />);
        const defaultText = screen.getByText('Default');
        expect(defaultText).toBeInTheDocument();
    });
});
