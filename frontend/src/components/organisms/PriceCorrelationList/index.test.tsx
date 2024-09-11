import { render, screen } from '@testing-library/react';
import { portfolioCards } from '../../../utils/constants';
import { PriceCorrelationList } from '.';
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
describe('PriceCorrelationList Component', () => {
    test('should render the Price Correlation List', () => {
        renderWithRouter(
            <PriceCorrelationList cardId={'bitcoin'} cards={portfolioCards} />
        );
        expect(screen.getByTestId('price correlation cards')).toBeInTheDocument;
    });
});
