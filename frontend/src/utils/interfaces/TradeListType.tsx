import { TradeTabProp } from './TradeTab';

export interface TradeListProp {
    trades: TradeTabProp[];
    onCheckedCrypto?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
