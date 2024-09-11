import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TradeTab } from './index';
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
describe('TradeList component', () => {
    const defaultProps = {
        id: 'bitcoin',
        icon: 'path/to/icon.png',
        name: 'Bitcoin',
        symbol: 'BTC',
        change: 0.05,
        price: 50000,
        marketCap: 1000,
        checked: false,
        onChecked: jest.fn()
    };
    const defaultProps2 = {
        id: 'bitcoin',
        icon: 'path/to/icon.png',
        name: 'Bitcoin',
        symbol: 'BTC',
        change: 1,
        price: 50000.5,
        marketCap: 1000.67,
        checked: true,
        onChecked: jest.fn()
    };
    const defaultProps3 = {
        id: 'bitcoin',
        icon: 'path/to/icon.png',
        name: 'Bitcoin',
        symbol: 'BTC',
        change: -1,
        price: 50000.5,
        marketCap: 1000.67,
        checked: true,
        onChecked: jest.fn()
    };

    it('should render component with initial props', () => {
        const { getByTestId } = renderWithRouter(
            <TradeTab {...defaultProps} />
        );
        expect(getByTestId('currencyname').textContent).toBe('Bitcoin');
        expect(getByTestId('currencynameshortcut').textContent).toBe('BTC');
        expect(getByTestId('currencyvalue').textContent).toBe('$50,000.00');
        expect(getByTestId('change').textContent).toBe('+0.05.00%');
        expect(getByTestId('marketcap').textContent).toBe('$1000.00T');
    });

    it('should render component with passing decimal props', () => {
        const { getByTestId } = renderWithRouter(
            <TradeTab {...defaultProps2} />
        );
        expect(getByTestId('currencyname').textContent).toBe('Bitcoin');
        expect(getByTestId('currencynameshortcut').textContent).toBe('BTC');
        expect(getByTestId('currencyvalue').textContent).toBe('$50,000.5');
        expect(getByTestId('change').textContent).toBe('+1%');
        expect(getByTestId('marketcap').textContent).toBe('$1000.67T');
    });
    it('should render component with passing negative props', () => {
        const { getByTestId } = renderWithRouter(
            <TradeTab {...defaultProps3} />
        );
        expect(getByTestId('currencyname').textContent).toBe('Bitcoin');
        expect(getByTestId('currencynameshortcut').textContent).toBe('BTC');
        expect(getByTestId('currencyvalue').textContent).toBe('$50,000.5');
        expect(getByTestId('change').textContent).toBe('-1%');
        expect(getByTestId('marketcap').textContent).toBe('$1000.67T');
        fireEvent.click(screen.getByText('Bitcoin'));
    });
});
