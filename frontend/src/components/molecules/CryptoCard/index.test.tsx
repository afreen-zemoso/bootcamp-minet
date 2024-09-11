import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import CryptoCard from '.';
import BitCoin from "../../../../public/assets/images/coin.svg"

const testId = 'card';
const width = '159px';
const cryptoCoinName = 'Bitcoin';
const cryptoCoinValue = 3406069.54;

it('Should render the Crypto Card', () => {
    render(
        <CryptoCard
            src={BitCoin}
            width={width}
            height={width}
            name={cryptoCoinName}
            value={cryptoCoinValue}
            selected={false}
        />
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByText(cryptoCoinName)).toBeInTheDocument();
    const valueFormat = '$3,406,069.54';
    expect(screen.getByText(valueFormat)).toBeInTheDocument();
});

it('Should render the tick mark image when selected is true', () => {
    render(
        <CryptoCard
            src={BitCoin}
            width={width}
            height={width}
            name={cryptoCoinName}
            value={cryptoCoinValue}
            selected={true}
        />
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByRole('presentation')).toBeInTheDocument();
});
