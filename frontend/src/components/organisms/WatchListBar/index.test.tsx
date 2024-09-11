import '@testing-library/jest-dom';
import { screen, render, act, fireEvent } from '@testing-library/react';
import WatchListBar from '.';
import ProfitIcon from '../../../../public/assets/images/profit.svg';
import LossIcon from '../../../../public/assets/images/loss.svg';
import BitCoinIcon from '../../../../public/assets/images/bitcoin-32x32.svg';

const testId = 'WatchListBar';
const Fn = jest.fn();
describe('WatchListBar tests', () => {
    const profitCryptoCoin = {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        icon: BitCoinIcon,
        price: 0,
        change: 32,
        marketCap: 232000000000000,
        volume: 29000000,
        circulatingSupply: 892
    };

    const lossCryptoCoin = {
        id: 'etherium',
        name: 'Ethereum',
        symbol: 'ETH',
        icon: BitCoinIcon,
        price: 0,
        change: -15,
        marketCap: 14000000,
        volume: 1.5,
        circulatingSupply: 4560000000
    };

    test('Should render profit coin', () => {
        render(
            <WatchListBar
                cryptoCoin={profitCryptoCoin}
                checked={false}
                getState={Fn}
            />
        );
        const component = screen.getByTestId(testId);
        expect(component).toBeInTheDocument();
        expect(screen.getByText('Bitcoin')).toBeInTheDocument();
        expect(screen.getByText('$232T')).toBeInTheDocument();
        expect(screen.getByText('$29T')).toBeInTheDocument();
        expect(screen.getByText('0.892M BTC')).toBeInTheDocument();

        expect(
            component.querySelector(`img[src='${ProfitIcon}']`)
        ).toBeInTheDocument();
    });

    test('Should render loss coin', () => {
        render(
            <WatchListBar
                cryptoCoin={lossCryptoCoin}
                checked={false}
                getState={Fn}
            />
        );
        const component = screen.getByTestId(testId);
        expect(component).toBeInTheDocument();
        expect(screen.getByText('Ethereum')).toBeInTheDocument();
        expect(screen.getByText('$14T')).toBeInTheDocument();
        expect(screen.getByText('$0.002T')).toBeInTheDocument();
        expect(screen.getByText('4.56M ETH')).toBeInTheDocument();

        expect(
            component.querySelector(`img[src='${LossIcon}']`)
        ).toBeInTheDocument();
    });

    test('Should add/remove from watchlist', () => {
        render(
            <WatchListBar
                cryptoCoin={profitCryptoCoin}
                checked={false}
                getState={Fn}
            />
        );
        const component = screen.getByTestId(testId);
        expect(component).toBeInTheDocument();
        expect(
            component.querySelector(`img[src='${ProfitIcon}']`)
        ).toBeInTheDocument();
        const addButton = screen.getByRole('button');
        expect(addButton).toBeInTheDocument();
        act(() => {
            fireEvent.click(addButton);
        });
    });
});
