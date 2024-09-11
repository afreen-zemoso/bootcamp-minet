import { render, screen } from '@testing-library/react';
import { PaymentSummary } from '.';
describe('Payment and Selling Summary Component', () => {
    test('buying summary', () => {
        render(
            <PaymentSummary
                amount={34000}
                coinBTC="0.0234510 BTC"
                transactionFees={1000}
                screen={'buy'}
            />
        );
        expect(screen.getByTestId('paymentSummary')).toBeInTheDocument;
    });
    test('selling summary', () => {
        render(
            <PaymentSummary
                amount={648.54}
                coinBTC="0.0234510 ETH"
                screen="sell"
                transactionFees={30.55}
            />
        );
        expect(screen.getByTestId('paymentSummary')).toBeInTheDocument;
    });
});
