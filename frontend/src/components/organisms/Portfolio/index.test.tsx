import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Portfolio from '.';

jest.mock('react-apexcharts', () => ({
    __esModule: true,
    default: () => <div />
}));
const total_investment = {
    name: 'Total Investment',
    value: 11900204,
    percentage: -1.2,
    data: [19, 30, 27, 35, 34, 38],
    color: '#0052FF'
};
const coin = {
    name: 'Bitcoin',
    value: 12400,
    percentage: 8.2,
    data: [20, 38, 35, 52, 42, 47],
    color: '#FFA74F'
};
test('renders the Portflio component', () => {
    const { container } = render(
        <Portfolio
            totalInvestment={total_investment}
            coin={coin}
            displayGraph={true}
        />
    );
    expect(container).toBeInTheDocument();
});
test('render the portfolio without graph', () => {
    const { container } = render(
        <Portfolio
            totalInvestment={total_investment}
            coin={coin}
            displayGraph={false}
        />
    );
    expect(container).toBeInTheDocument();
});
