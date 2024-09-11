export interface MainTemplateProps {
    headerText: string;
    purchase?: boolean;
    onClickBuy?: () => void;
    onClickSell?: () => void;
    body: React.ReactNode;
    activeDashboard: boolean;
    navHeight: number;
}
