export interface PortfolioProps {
    totalInvestment: {
        name: string;
        value: number;
        percentage: number;
        data: number[];
        color: string;
    };
    coin: {
        name: string;
        value: number;
        percentage: number;
        data: number[];
        color: string;
    };
    displayGraph?: boolean;
}
