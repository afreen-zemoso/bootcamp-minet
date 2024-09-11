import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import WalletDetailsBar from '.';

const testId = 'WalletDetailsBar';

describe('WalletDetailsBars tests', () => {
    test('Should render wallet balance correctly', () => {
        const walletBalance = 1000;
        const { getByText } = render(
            <WalletDetailsBar walletBalance={walletBalance} />
        );
        expect(screen.getByTestId(testId)).toBeInTheDocument();
        const balanceLabel = getByText(
            `$ ${walletBalance.toLocaleString('en-US')}`
        );
        expect(balanceLabel).toBeInTheDocument();
    });
});
