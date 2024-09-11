export interface AmountDetailsProps {
    userAmount: number;
    cryptoBalance: number;
    onClick?: () => void;
    onChange?: (event: Event, value: number | number[]) => void;
    cryptocode: string;
    cryptoPrice: number;
    buy: boolean;
    sliderValue: number;
}
