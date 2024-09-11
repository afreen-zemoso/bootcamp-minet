import { render, screen } from '@testing-library/react';
import { watchListCards } from '../../../utils/constants';
import WatchListCardsList from '.';
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
jest.mock('react-apexcharts', () => ({
    __esModule: true,
    default: () => <div />
}));

describe('WatchListCardsList Component', () => {
    test('should render the WatchList Cards List', () => {
        renderWithRouter(<WatchListCardsList cards={watchListCards} />);
        expect(screen.getByTestId('WatchListCardsList')).toBeInTheDocument;
    });
});
