import { TransactionProps } from '../../components/molecules/TransactionCard';
import { PortfolioCardListProp } from './PortfolioCardListInterface';

export interface PortfolioDetailListProp {
    portfolioCards: PortfolioCardListProp;
    balance: number;
    dollerCurrency: number;
    recentTransactions: TransactionProps[];
    width?: string;
}
