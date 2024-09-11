import { render, screen } from '@testing-library/react';
import { PortfolioDetailList } from '.';
import { portfolioCards, recentTransactions } from '../../../utils/constants';
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
describe('Portfolio detail list Component', () => {
    test('rendering correctly', () => {
        renderWithRouter(
            <PortfolioDetailList
                balance={1400}
                dollerCurrency={3000}
                portfolioCards={{ cardId: 'tether', cards: portfolioCards }}
                recentTransactions={recentTransactions}
            />
        );
        expect(screen.getByTestId('portfolio-detail-list')).toBeInTheDocument;
    });
    test('passing empty recent transactions', () => {
        renderWithRouter(
            <PortfolioDetailList
                balance={1400.23}
                dollerCurrency={3000.345}
                portfolioCards={{ cardId: 'tether', cards: portfolioCards }}
                recentTransactions={[]}
            />
        );
        expect(screen.getByTestId('portfolio-detail-list')).toBeInTheDocument;
        expect(screen.getByTestId('ImageWithText')).toBeInTheDocument;
    });
});
