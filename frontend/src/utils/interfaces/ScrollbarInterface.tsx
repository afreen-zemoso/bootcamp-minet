export interface SliderProp {
    value: number;
    max?: number;
    min?: number;
    currencyrate: number;
    currencyname: string;
    onChange?: (event: Event, value: number | number[]) => void;
}
