import { render, screen } from '@testing-library/react';
import { PortfolioCardList } from '.';
import { portfolioCards } from '../../../utils/constants';
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
describe('portfolio card list Component', () => {
    test('portfolio cards star', () => {
        renderWithRouter(
            <PortfolioCardList cardId={'bitcoin'} cards={portfolioCards} />
        );
        expect(screen.getByTestId('portfolio cards')).toBeInTheDocument;
    });
});
