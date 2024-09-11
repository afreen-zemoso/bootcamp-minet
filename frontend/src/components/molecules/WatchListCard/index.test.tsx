import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import ProfitIcon from '../../../../public/assets/images/profit.svg';
import LossIcon from '../../../../public/assets/images/loss.svg';
import WatchListCard from '.';
import { WatchListCardProps } from '../../../utils/interfaces/WatchListCardInterface';
import { BrowserRouter } from 'react-router-dom';
const testId = 'WatchListCard';

jest.mock('react-apexcharts', () => ({
    __esModule: true,
    default: () => <div />
}));

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
describe('WatchListCard', () => {
    const props: WatchListCardProps = {
        profitOrLossPercentage: 10,
        id: 'bitcoin',
        cryptoCoinCode: 'BTC',
        valuePerOneCoin: 50000,
        GraphProps: {
            id: 'Bitcoin',
            opacity: 0.1,
            series: [
                {
                    data: [20, 38, 35, 52, 42, 47]
                }
            ]
        },
        icon: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        name: 'Bitcoin'
    };

    it('renders the component with correct data', () => {
        renderWithRouter(<WatchListCard {...props} />);
        const component = screen.getByTestId(testId);
        expect(component).toBeInTheDocument();
        // Check if the component renders the crypto coin name
        const bitcoinLabel = 'Bitcoin';
        expect(screen.getByText(bitcoinLabel)).toBeInTheDocument();

        // Check if the component renders the value per one coin
        expect(screen.getByText('$50,000')).toBeInTheDocument();

        // Check if the component renders the 24h chip
        const timeGap = '24h';
        expect(screen.getByText(timeGap)).toBeInTheDocument();

        // Check if the component renders the profit or loss percentage label
        const percentageLabel = '+10.0%';
        expect(screen.getByText(percentageLabel)).toBeInTheDocument();

        // Check if the component renders the profit icon
        expect(
            component.querySelector(`img[src='${ProfitIcon}']`)
        ).toBeInTheDocument();
    });
    it('renders the component with correct data', () => {
        renderWithRouter(
            <WatchListCard {...props} profitOrLossPercentage={-2} />
        );
        const component = screen.getByTestId(testId);
        // Check if the component renders the profit or loss percentage label
        const percentageLabel = '-2.0%';
        expect(screen.getByText(percentageLabel)).toBeInTheDocument();
        // Check if the component renders the loss icon
        expect(
            component.querySelector(`img[src='${LossIcon}']`)
        ).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('WatchListCard'));
    });
});
