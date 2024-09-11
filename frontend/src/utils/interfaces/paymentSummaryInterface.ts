import { TransactionType } from '../types';

export interface PaymentSummaryProps {
    coinBTC: string;
    amount: number;
    transactionFees: number;
    onSubmit?: () => void;
    screen: TransactionType;
}
