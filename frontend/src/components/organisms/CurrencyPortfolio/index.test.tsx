import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CurrencyPortfolio from './index';

jest.mock('react-apexcharts', () => ({
    __esModule: true,
    default: () => <div />
}));

test('renders the CurrencyPortfolio component', () => {
    const { container } = render(
        <CurrencyPortfolio
            coin={{
                name: 'Bitcoin',
                value: 12400,
                percentage: 8.2,
                data: [20, 38, 35, 52, 42, 47],
                color: '#FFA74F'
            }}
        />
    );

    expect(container).toBeInTheDocument();

    const coinName = screen.getByText('Bitcoin');

    expect(coinName).toBeInTheDocument();

    const coinValue = screen.getByText('$ 12,400');
    expect(coinValue).toBeInTheDocument();
    const coinPercentage = screen.getByText('+8.2%');
    expect(coinPercentage).toBeInTheDocument();
});
