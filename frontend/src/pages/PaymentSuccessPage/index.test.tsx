import { render, screen } from '@testing-library/react';
import PaymentSuccessPage from '.';
import { purchaseMessage, sellMessage } from '../../utils/constants';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from '../../redux/store';
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn().mockReturnValue({
        value: '0.2345'
    })
}));
const renderWithRouter = (ui: any) => {
    return {
        ...render(ui, { wrapper: BrowserRouter })
    };
};
const PaymentSuccessTest = (props: { sell: boolean }) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <PaymentSuccessPage sell={props.sell} />
            </PersistGate>
        </Provider>
    );
};
describe('Payment Success Page Component', () => {
    test('render the PaymentSuccess Page for buy type', () => {
        renderWithRouter(<PaymentSuccessTest sell={false} />);
        expect(screen.getByTestId('mainTemplate')).toBeInTheDocument;
        expect(screen.getByText('Checkout')).toBeInTheDocument;
        expect(screen.getByTestId('purchase details')).toBeInTheDocument;
        expect(screen.getByText(purchaseMessage)).toBeInTheDocument;
    });
    test('render the PaymentSuccess Page for sell type', () => {
        renderWithRouter(<PaymentSuccessTest sell={true} />);
        expect(screen.getByText(sellMessage)).toBeInTheDocument;
    });
});
