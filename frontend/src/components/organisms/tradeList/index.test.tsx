import { render, screen } from '@testing-library/react';
import { TradeList } from '.';
import { trades } from '../../../utils/constants';
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
describe('TradeList Component', () => {
    test('Trade list', () => {
        renderWithRouter(<TradeList trades={trades} />);
        expect(screen.getByTestId('trade-list')).toBeInTheDocument;
    });
});
