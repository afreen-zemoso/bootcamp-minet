import { CryptoCoinProps } from './CryptoCoinType';
export interface BuyCryptoCardProps {
    transactionType: 'sell' | 'buy';
    onCryptoCoinSelected?: (index: number) => void;
    cryptoCoins: CryptoCoinProps[];
    selectedValue: string;
}
