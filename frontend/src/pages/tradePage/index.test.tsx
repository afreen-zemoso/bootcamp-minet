import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { TradePage } from '.';
import { Provider } from 'react-redux';
import { store, persistor } from '../../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
const TradePageTest = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <TradePage tabValue={1} />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    );
};
describe('Trade page', () => {
    test('trade page render correctly and testing search value and watchlist star', async () => {
        render(<TradePageTest />);
        await waitFor(() => screen.getAllByTestId('trade-tab'));
        expect(screen.getByTestId('trade-page')).toBeInTheDocument;
        const searchField = screen.getByRole('textbox');
        expect(searchField).toBeInTheDocument;
        fireEvent.change(searchField, {
            target: { value: 'Bit' }
        });
        fireEvent.click(screen.getByTestId('wrong-button'));
        const checkbox = screen.getAllByRole('checkbox')[0];
        fireEvent.click(checkbox);
        expect(checkbox).not.toBeChecked;
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked;
    });
    test('checking for switching the tab in the trade page', async () => {
        render(<TradePageTest />);
        await waitFor(() => screen.getAllByTestId('trade-tab'));
        const tab = screen.getAllByRole('tab')[1];
        fireEvent.click(tab);
        expect(screen.getByTestId('watchlist')).toBeInTheDocument;
    });
});
