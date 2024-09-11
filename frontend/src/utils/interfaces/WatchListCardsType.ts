import { CryptoCoinProps } from './CryptoCoinType';
export interface WatchListProp {
    cryptoCoin: CryptoCoinProps;
    GraphProps: {
        opacity: number;
        series: {
            data: number[];
        }[];
    };
}
export interface WatchListCardsProps {
    cards: WatchListProp[];
}
