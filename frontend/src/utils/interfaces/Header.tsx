export interface HeaderProps {
    text: string;
    purchase?: boolean;
    onClickBuy?: () => void;
    onClickSell?: () => void;
}
