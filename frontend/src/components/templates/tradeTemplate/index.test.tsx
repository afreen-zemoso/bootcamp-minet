import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TradeTemplate from '.';

test('Should render the Trade Template', () => {
    render(
        <TradeTemplate
            cryptoText={'Buy Crypto'}
            cryptoBody={undefined}
            totalBalanceBody={undefined}
            amountDetailsBody={undefined}
            feesBody={undefined}
            paymentCardBody={undefined}
        />
    );
    expect(screen.getByTestId('trade template')).toBeInTheDocument();
});
