import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PaymentCard from '.';
const testId = 'PaymentCard';

describe('PaymentCard tests', () => {
    test('Should render', () => {
        render(
            <PaymentCard
                cryptoCoinCode={'BTC'}
                balance={0.01}
                icon={
                    'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
                }
                name={'Bitcoin'}
            />
        );
        const component = screen.getByTestId(testId);
        expect(component).toBeInTheDocument();

        expect(screen.getByText(/Bitcoin/)).toBeInTheDocument();
        expect(screen.getByText(/0.0100000 BTC/)).toBeInTheDocument();
    });
});
