import { TransactionType } from '../types';

export interface PaymentCardProps {
    coin: {
        name: string;
        price: number;
        symbol: string;
    };
    amount: number;
    deliveryFee: number;
    totalCoins: number;
    type: TransactionType;
    paymentMethod: string;
    transactionFee: number;
    onSubmit?: () => void;
    width?: string;
}
