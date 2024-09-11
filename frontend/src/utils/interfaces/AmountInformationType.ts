import { TransactionType } from '../types';

export interface AmountInformationProps {
    transactionType: TransactionType;
    numOfCryptoCoinsInvolved: number;
    cryptoCoinCode: string;
    valuePerOneCryptoCoin: number;
}
