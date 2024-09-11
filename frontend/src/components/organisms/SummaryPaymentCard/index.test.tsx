import { render, screen } from '@testing-library/react';
import 'jest';
import '@testing-library/jest-dom';
import SummaryPaymentCard from './index';
import { TransactionType } from '../../../utils/types';

const coin = { name: 'Bitcoin', price: 3406089, symbol: 'BTC' };
describe('Payment Card', () => {
    it('should render Payment Card component to buy', () => {
        render(
            <SummaryPaymentCard
                coin={coin}
                amount={34000}
                deliveryFee={0.001}
                totalCoins={0.02345}
                type={'buy' as TransactionType}
                paymentMethod={'Visa credit ...8845'}
                transactionFee={1000}
            />
        );
        expect(screen.getByText('You are buying')).toBeInTheDocument();
        expect(screen.getByText('Payment method')).toBeInTheDocument();
        expect(screen.getByText('Visa credit ...8845')).toBeInTheDocument();
        expect(screen.getByText('1BTC = $3,406,089')).toBeInTheDocument();
    });
    it('should render Payment Card component to sell', () => {
        render(
            <SummaryPaymentCard
                coin={{
                    name: 'Bitcoin',
                    price: 3406089,
                    symbol: 'BTC'
                }}
                amount={34000}
                deliveryFee={0.001}
                totalCoins={0.02345}
                type={'sell' as TransactionType}
                paymentMethod={'Rupay coin'}
                transactionFee={1000}
            />
        );
        expect(screen.getByText('You are selling')).toBeInTheDocument();
        expect(screen.getByText('Paying through')).toBeInTheDocument();
        expect(screen.getByText('Rupay coin')).toBeInTheDocument();
        expect(screen.getByText('1BTC = $3,406,089')).toBeInTheDocument();
    });
});
