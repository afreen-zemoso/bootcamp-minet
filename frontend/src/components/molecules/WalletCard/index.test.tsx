import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import WalletCard from '.';
import { numberFormat } from '../../organisms/portfolioDetailList';

const testId = 'WalletCard';

describe('WalletCard', () => {
    it('renders wallet balance correctly', () => {
        const balance = 1000;
        const { getByText } = render(<WalletCard balance={balance} />);

        expect(screen.getByTestId(testId)).toBeInTheDocument();

        const balanceLabel = getByText(`$ ${numberFormat(balance)}`);
        expect(balanceLabel).toBeInTheDocument();
    });
});
