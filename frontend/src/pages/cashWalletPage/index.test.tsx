import {
    act,
    fireEvent,
    render,
    screen,
    waitFor
} from '@testing-library/react';
import CashWalletPage from '.';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from '../../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const CashwalletPageTest = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <CashWalletPage user_id={1} />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    );
};
describe('CashWallet Page', () => {
    test('should render the Cash Wallet Page', async () => {
        await act(async () => {
            render(<CashwalletPageTest />);
        });
        expect(screen.getByTestId('transactions-list')).toBeInTheDocument;
    });

    test('should click the date and time filter dropdown', async () => {
        await act(async () => {
            render(<CashwalletPageTest />);
        });
        const dropDown = screen.getByTestId('dropDown');
        expect(dropDown).toBeInTheDocument();
        if (dropDown.firstChild) {
            fireEvent.keyDown(dropDown.firstChild, { key: 'ArrowDown' });
            await screen.findByText('1Y');
            const year = screen.getByText('1Y');
            fireEvent.click(year);

            fireEvent.keyDown(dropDown.firstChild, { key: 'ArrowDown' });
            await screen.findByText('1M');
            const month = screen.getByText('1M');
            fireEvent.click(month);

            fireEvent.keyDown(dropDown.firstChild, { key: 'ArrowDown' });
            await screen.findByText('24h');
            const hour = screen.getByText('24h');
            fireEvent.click(hour);

            fireEvent.keyDown(dropDown.firstChild, { key: 'ArrowDown' });
            await screen.findByText('1W');
            const week = screen.getByText('1W');
            fireEvent.click(week);

            fireEvent.keyDown(dropDown.firstChild, { key: 'ArrowDown' });
            await screen.findByText('ALL');
            const all = screen.getByText('ALL');
            fireEvent.click(all);
        }
    });
    test('should be able to search by coin name', async () => {
        render(<CashwalletPageTest />);
        expect(screen.getByTestId('transactions-list')).toBeInTheDocument;
        await waitFor(() => {
            expect(screen.getAllByTestId('card').length).toBe(4);
            const searchField = screen.getByRole('textbox');
            expect(searchField).toBeInTheDocument;
            fireEvent.change(searchField, {
                target: { value: 'Bit' }
            });
            fireEvent.click(screen.getByTestId('wrong-button'));
        });
    });
});
