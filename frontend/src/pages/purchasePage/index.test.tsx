import {
    act,
    cleanup,
    fireEvent,
    render,
    screen,
    waitFor
} from '@testing-library/react';
import { PurchasePage } from '.';
import axios from 'axios';
import 'jest';
import '@testing-library/jest-dom';
import { User, cryptoCoins, userWallet } from '../../mocks/constants';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from '../../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
    useParams: jest.fn().mockReturnValue({
        id: 'bitcoin'
    })
}));
const renderWithRouter = (ui: any) => {
    return {
        ...render(ui, { wrapper: BrowserRouter })
    };
};
const PurchasePageTest = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <PurchasePage user_id={2} />
            </PersistGate>
        </Provider>
    );
};
describe('Purchase Page', () => {
    afterEach(cleanup);
    beforeEach(async () => {
        const reloadMock = jest.fn();
        Object.defineProperty(window, 'location', {
            value: { reload: reloadMock },
            writable: true
        });
        jest.useFakeTimers();
        await act(async () => {
            mockedAxios.get
                .mockResolvedValueOnce({ data: cryptoCoins })
                .mockResolvedValueOnce({ data: User });
            renderWithRouter(<PurchasePageTest />);
        });
    });
    test('page renders correctly and selecting crypto and click on buy button', async () => {
        const cryptoCards = screen.getAllByTestId('cryptoCard');
        await waitFor(() => expect(cryptoCards).toBeInTheDocument);
        expect(screen.getByTestId('purchase-body')).toBeInTheDocument;
        fireEvent.click(cryptoCards[1]);
        expect(screen.getByText('Ethereum wallet')).toBeInTheDocument;
        fireEvent.click(cryptoCards[0]);
        fireEvent.click(screen.getByTestId('max-button'));

        act(() => {
            mockedAxios.get.mockRejectedValue({ data: {} });
            mockedAxios.patch.mockResolvedValue({ data: {} });
            mockedAxios.post
                .mockResolvedValueOnce({ data: {} })
                .mockResolvedValueOnce({ data: {} });
            fireEvent.click(screen.getByText(/BUY NOW/i));
            jest.advanceTimersByTime(1000);
        });
        jest.useRealTimers();
    });
    test('add crypto to user by click on buy button', async () => {
        const cryptoCards = screen.getAllByTestId('cryptoCard');
        await waitFor(() => expect(cryptoCards).toBeInTheDocument);
        act(() => {
            mockedAxios.get.mockResolvedValue({ data: userWallet });
            mockedAxios.patch
                .mockResolvedValueOnce({ data: {} })
                .mockResolvedValueOnce({ data: {} });
            mockedAxios.post.mockResolvedValue({ data: {} });
            fireEvent.click(screen.getByText(/BUY NOW/i));
            jest.advanceTimersByTime(1000);
        });
        jest.useRealTimers();
    });
    test('testing the sliding the value', async () => {
        const cryptoCards = screen.getAllByTestId('cryptoCard');
        await waitFor(() => expect(cryptoCards).toBeInTheDocument);
        const sliderValueElement = screen.getByTestId('slider-value');
        expect(sliderValueElement.textContent).toBe('$25,000.00');
    });
    test('sliding the slider for changing the value of slider', () => {
        const getSliderBoundingClientRect = () =>
            ({
                bottom: 286.22918701171875,
                height: 28,
                left: 19.572917938232422,
                right: 583.0937919616699,
                top: 258.22918701171875,
                width: 563.5208740234375,
                x: 19.572917938232422,
                y: 258.22918701171875
            } as DOMRect);
        const sliderElement = screen.getByTestId('slider');
        const sliderInput = screen.getByTestId('slider');

        sliderInput.getBoundingClientRect = jest.fn(
            getSliderBoundingClientRect
        );

        expect(sliderInput).toBeInTheDocument();

        fireEvent.mouseDown(sliderInput, { clientX: 162, clientY: 302 });

        act(() => {
            fireEvent.click(sliderElement, { clientX: 100, clientY: 0 });
        });
        expect(screen.getByText('1e-8')).toBeInTheDocument;
    });
});
