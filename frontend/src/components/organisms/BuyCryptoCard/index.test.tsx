import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import BuyCryptoCard from '.';
import { cryptoCoins } from '../../../mocks/constants';

const testId = 'cryptoCards';

describe('BuyCryptoCard tests', () => {
    test('Should render the component', () => {
        render(
            <BuyCryptoCard
                transactionType={'buy'}
                cryptoCoins={cryptoCoins}
                selectedValue={'bitcoin'}
            />
        );

        expect(screen.getByTestId(testId)).toBeInTheDocument();
        expect(screen.getByText(/Buy Crypto/i)).toBeInTheDocument();
    });

    test('Should call onCryptoCoinSelected when a crypto coin is selected', () => {
        render(
            <BuyCryptoCard
                transactionType={'sell'}
                cryptoCoins={cryptoCoins}
                selectedValue={'bitcoin'}
            />
        );
        expect(screen.getByTestId(testId)).toBeInTheDocument();
        expect(screen.getByText(/Sell Crypto/i)).toBeInTheDocument();
    });
    test('clicking on the crypto card and passing the function', () => {
        const fn = jest.fn();
        render(
            <BuyCryptoCard
                transactionType="buy"
                cryptoCoins={cryptoCoins}
                selectedValue={'tether'}
                onCryptoCoinSelected={fn}
            />
        );
        fireEvent.click(screen.getAllByTestId('cryptoCard')[0]);
        expect(fn).toBeCalled();
    });
    test('clicking on the crypto card and without passing the function', () => {
        const fn = jest.fn();
        render(
            <BuyCryptoCard
                transactionType="buy"
                cryptoCoins={cryptoCoins}
                selectedValue={'xrp'}
            />
        );
        fireEvent.click(screen.getAllByTestId('cryptoCard')[0]);
        expect(fn).not.toBeCalled();
    });
});
