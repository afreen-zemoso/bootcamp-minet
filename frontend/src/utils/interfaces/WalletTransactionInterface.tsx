export interface WalletTransactionInterface {
    id: number;
    image: string;
    symbol: string;
    change: number;
    price: number;
    name: string;
    date: string;
    chipLabel: string;
    coinCode: string;
}

export interface Transaction {
    id: number;
    date: string;
    status: string;
    type: string;
    price: number;
    quantity: number;
    description: string;
    user_id: number;
    cryptoId: string;
}
