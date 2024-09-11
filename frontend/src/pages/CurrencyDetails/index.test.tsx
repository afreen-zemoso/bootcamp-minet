import {
    act,
    fireEvent,
    render,
    screen,
    waitFor
} from '@testing-library/react';
import CurrencyPage from '.';
import axios from 'axios';
import {
    cryptoCoins,
    transactions,
    userWallet,
    watchList
} from '../../mocks/constants';
import { PersistGate } from 'redux-persist/integration/react';
jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('react-apexcharts', () => ({
    __esModule: true,
    default: () => <div />
}));

jest.useRealTimers();
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from '../../redux/store';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
    useParams: jest.fn().mockReturnValue({
        id: 1
    })
}));
const renderWithRouter = (ui: any) => {
    return {
        ...render(ui, { wrapper: BrowserRouter })
    };
};

const CurrencyDetailsTest = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <CurrencyPage />
            </PersistGate>
        </Provider>
    );
};
describe('Currency Page Component', () => {
    test('handling get and post for currency details', async () => {
        await act(async () => {
            mockedAxios.get
                .mockResolvedValueOnce({ data: cryptoCoins[0] })
                .mockRejectedValueOnce({ data: [] })
                .mockRejectedValueOnce({ data: [] });
            mockedAxios.post.mockResolvedValue({ data: {} });
            renderWithRouter(<CurrencyDetailsTest />);
        });
        await waitFor(
            () => expect(screen.getByText(/60.2/i)).toBeInTheDocument
        );
        fireEvent.click(screen.getByTestId('watchListButton'));
        expect(screen.getByAltText(/selected star/i)).toBeInTheDocument;
        fireEvent.click(screen.getByText('SELL'));
        fireEvent.click(screen.getByText('BUY'));
    });
    test('remove crypto from watchlist', async () => {
        await act(async () => {
            mockedAxios.get
                .mockResolvedValueOnce({ data: cryptoCoins[0] })
                .mockResolvedValueOnce({ data: watchList[0] })
                .mockResolvedValueOnce({ data: watchList[0] })
                .mockResolvedValueOnce({ data: userWallet });
            mockedAxios.delete.mockResolvedValue({ data: {} });
            renderWithRouter(<CurrencyDetailsTest />);
        });
        await waitFor(
            () => expect(screen.getByText(/60.2/i)).toBeInTheDocument
        );
        fireEvent.click(screen.getByTestId('watchListButton'));
        expect(screen.getByAltText(/unSelected star/i)).toBeInTheDocument;
        fireEvent.click(screen.getByText('SELL'));
    });
    test('Currency  page', async () => {
        act(() => {
            mockedAxios.get
                .mockResolvedValueOnce({ data: cryptoCoins[0] })
                .mockResolvedValue({ data: transactions });
            renderWithRouter(<CurrencyDetailsTest />);
        });
        const tab = screen.getAllByRole('tab')[1];
        fireEvent.click(tab);
        expect(screen.getByTestId('transactions-list')).toBeInTheDocument;
    });

    test('should click the date and time filter dropdown', async () => {
        act(() => {
            mockedAxios.get
                .mockResolvedValueOnce({ data: cryptoCoins[0] })
                .mockResolvedValue({ data: transactions });
            renderWithRouter(<CurrencyDetailsTest />);
        });
        const tab = screen.getAllByRole('tab')[1];
        fireEvent.click(tab);
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
    }, 1000000);

    test('should be able to search by coin name', async () => {
        act(() => {
            mockedAxios.get
                .mockResolvedValueOnce({ data: cryptoCoins[0] })
                .mockResolvedValueOnce({ data: watchList[0] })
                .mockResolvedValueOnce({ data: transactions });
            renderWithRouter(<CurrencyDetailsTest />);
        });
        const tab = screen.getAllByRole('tab')[1];
        fireEvent.click(tab);
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
