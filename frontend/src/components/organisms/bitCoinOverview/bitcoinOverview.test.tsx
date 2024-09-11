import { render, screen } from '@testing-library/react';
import { BitCoinOverview } from '.';
import { aboutBitcoin, resources } from '../../../utils/constants';
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
describe('BitCoin overview Component', () => {
    test('bitcoin overview', () => {
        renderWithRouter(
            <BitCoinOverview
                about={aboutBitcoin}
                resources={resources}
                name={'Bitcoin'}
            />
        );
        expect(screen.getByTestId('bitcoin-overview')).toBeInTheDocument;
    });
});
