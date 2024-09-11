export interface TradeTabProp {
    id: string;
    icon: string;
    name: string;
    symbol: string;
    change: number;
    price: number;
    marketCap: number;
    checked?: boolean;
    onChecked?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checkboxName?: string;
}
