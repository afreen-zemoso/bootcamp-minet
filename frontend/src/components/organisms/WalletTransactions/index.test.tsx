import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import WalletTransactions from '.';
import walletRight from '../../../../public/assets/images/walletRight.svg';
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
const transaction = {
    id: 1,
    image: walletRight,
    symbol: 'Moves tightly together',
    change: 1.06,
    price: 87.0,
    name: 'Bitcoin',
    currentCardId: '',
    portfolio: false,
    date: '20 03 2023',
    chipLabel: 'Purchased'
};

test('Should render the Wallet Transactions', () => {
    const { container } = renderWithRouter(
        <WalletTransactions transactions={Array(10).fill(transaction)} />
    );
    expect(container).toBeInTheDocument();
});
