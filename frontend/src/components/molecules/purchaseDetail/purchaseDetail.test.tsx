import { fireEvent, render, screen } from '@testing-library/react';
import { PurchaseDetail } from '.';
import { purchaseMessage } from '../../../utils/constants';
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
describe('Purchase Detail Component', () => {
    test('purchasing', () => {
        renderWithRouter(
            <PurchaseDetail
                paymentMessage={purchaseMessage}
                currency="0.0234510 BTC"
                sell={false}
            />
        );
        expect(screen.getByTestId('purchase details')).toBeInTheDocument;
    });
    test('selling', () => {
        renderWithRouter(
            <PurchaseDetail
                paymentMessage={purchaseMessage}
                currency="0.0234510 BTC"
                sell={true}
            />
        );
        expect(screen.getByTestId('purchase details')).toBeInTheDocument;
        fireEvent.click(screen.getByText('GO TO USD COIN'));
    });
});
