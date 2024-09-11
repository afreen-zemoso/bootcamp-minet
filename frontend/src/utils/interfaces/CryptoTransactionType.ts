export interface CryptoTransactionType {
    id?: number;
    date: Date;
    status: 'SUCCESS' | 'FAILURE';
    type: 'SELL' | 'BUY';
    price: number;
    quantity: number;
    description: string;
    cryptoId: string;
}
