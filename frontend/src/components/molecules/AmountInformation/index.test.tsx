import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AmountInformation from '.';

const testId = 'AmountInformation';

test('Should render', () => {
    render(
        <AmountInformation
            transactionType="sell"
            numOfCryptoCoinsInvolved={0}
            cryptoCoinCode="BTC"
            valuePerOneCryptoCoin={0}
        />
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
});

describe('Checking cryptoCoinCode, transactionType, valuePerOneCryptoCoin, numOfCryptoCoinsInvolved', () => {
    test('Etheruem', () => {
        render(
            <AmountInformation
                transactionType="sell"
                numOfCryptoCoinsInvolved={0}
                cryptoCoinCode="ETH"
                valuePerOneCryptoCoin={0}
            />
        );
        expect(screen.getByText(/You are selling/i)).toBeInTheDocument();
        expect(screen.getByText(/0 ETH/)).toBeInTheDocument();
        expect(screen.getByText(/1ETH = \$0/)).toBeInTheDocument();
    });
    test('BitCoin', () => {
        render(
            <AmountInformation
                transactionType="buy"
                numOfCryptoCoinsInvolved={0}
                cryptoCoinCode="BTC"
                valuePerOneCryptoCoin={0}
            />
        );
        expect(screen.getByText(/You are buying/i)).toBeInTheDocument();
        expect(screen.getByText(/0 BTC/)).toBeInTheDocument();
        expect(screen.getByText(/1BTC = \$0/)).toBeInTheDocument();
    });
});
