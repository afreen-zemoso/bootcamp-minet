import { render, screen } from '@testing-library/react';
import { DepositCard } from '.';
describe('Deposit Card', () => {
    test('buy Card renders correctly', () => {
        render(<DepositCard totalBalance={30000} type={'buy'} />);
        expect(screen.getByTestId('buyDepositCard')).toBeInTheDocument;
    });
    test('sell card renders correctly', () => {
        render(<DepositCard totalBalance={3000} type="sell" />);
        expect(screen.getByTestId('sellDepositCard')).toBeInTheDocument;
    });
});
