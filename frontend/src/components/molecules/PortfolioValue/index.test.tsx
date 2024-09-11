import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import ProfitIcon from '../../../../public/assets/images/profit.svg';
import LossIcon from '../../../../public/assets/images/loss.svg';
import PortfolioValue from '.';

const testId = 'PortfolioValue';

test('Should render', () => {
    render(
        <PortfolioValue
            label="Total Investment"
            currentValue={33243}
            profitOrLossPercentage={-1.0}
        />
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
});

describe('profit or loss value checks', () => {
    test('profit checks', () => {
        render(
            <PortfolioValue
                label="Total Investment"
                currentValue={33243}
                profitOrLossPercentage={1.0}
            />
        );
        const component = screen.getByTestId(testId);
        expect(
            component.querySelector(`img[src='${ProfitIcon}']`)
        ).toBeInTheDocument();
    });

    test('loss checks', () => {
        render(
            <PortfolioValue
                label="Total Investment"
                currentValue={33243}
                profitOrLossPercentage={-1.0}
            />
        );
        const component = screen.getByTestId(testId);
        expect(
            component.querySelector(`img[src='${LossIcon}']`)
        ).toBeInTheDocument();
    });

});

test('Should render profit icon with arrow down', () => {
    render(
        <PortfolioValue
            label="Total Investment"
            currentValue={33243}
            profitOrLossPercentage={1.0}
            portfolioArrowDown={true}
        />
    );
    const component = screen.getByTestId(testId);
    expect(
        component.querySelector(`img[src='${ProfitIcon}']`)
    ).toBeInTheDocument();
    expect(component.querySelector('.percentage')).toBeInTheDocument();
    expect(component.querySelector('.profitorloss')).toBeInTheDocument();
});

test('Should render loss icon with arrow down', () => {
    render(
        <PortfolioValue
            label="Total Investment"
            currentValue={33243}
            profitOrLossPercentage={-1.0}
            portfolioArrowDown={true}
        />
    );
    const component = screen.getByTestId(testId);
    expect(
        component.querySelector(`img[src='${LossIcon}']`)
    ).toBeInTheDocument();
    expect(component.querySelector('.percentage')).toBeInTheDocument();
    expect(component.querySelector('.profitorloss')).toBeInTheDocument();
});

test('Should render profit icon without arrow down', () => {
    render(
        <PortfolioValue
            label="Total Investment"
            currentValue={33243}
            profitOrLossPercentage={1.0}
            portfolioArrowDown={false}
        />
    );
    const component = screen.getByTestId(testId);
    expect(
        component.querySelector(`img[src='${ProfitIcon}']`)
    ).toBeInTheDocument();
    expect(component.querySelector('.percentage')).toBeInTheDocument();
    expect(component.querySelector('.profitorloss')).toBeInTheDocument();
});
test('Should render loss icon without arrow down', () => {
    render(
        <PortfolioValue
            label="Total Investment"
            currentValue={33243}
            profitOrLossPercentage={-1.0}
            portfolioArrowDown={false}
        />
    );
    const component = screen.getByTestId(testId);
    expect(
        component.querySelector(`img[src='${LossIcon}']`)
    ).toBeInTheDocument();
    expect(component.querySelector('.percentage')).toBeInTheDocument();
    expect(component.querySelector('.profitorloss')).toBeInTheDocument();
});

test('Should render with positive profitOrLossPercentage and portfolioArrowDown', () => {
    render(
        <PortfolioValue
            label="Total Investment"
            currentValue={33243}
            profitOrLossPercentage={0.5}
            portfolioArrowDown={true}
        />
    );
    const component = screen.getByTestId(testId);
    expect(component).toBeInTheDocument();
    expect(
        component.querySelector(`img[src='${ProfitIcon}']`)
    ).toBeInTheDocument();
    expect(component.querySelector('.percentage')).toBeInTheDocument();
    expect(component.querySelector('.profitorloss')).toBeInTheDocument();
});

test('Should render with negative profitOrLossPercentage and portfolioArrowDown', () => {
    render(
        <PortfolioValue
            label="Total Investment"
            currentValue={33243}
            profitOrLossPercentage={-0.5}
            portfolioArrowDown={true}
        />
    );
    const component = screen.getByTestId(testId);
    expect(component).toBeInTheDocument();
    expect(
        component.querySelector(`img[src='${LossIcon}']`)
    ).toBeInTheDocument();
    expect(component.querySelector('.percentage')).toBeInTheDocument();
    expect(component.querySelector('.profitorloss')).toBeInTheDocument();
});

test('Should render with positive profitOrLossPercentage without portfolioArrowDown', () => {
    render(
        <PortfolioValue
            label="Total Investment"
            currentValue={33243}
            profitOrLossPercentage={0.5}
            portfolioArrowDown={false}
        />
    );
    const component = screen.getByTestId(testId);
    expect(component).toBeInTheDocument();
    expect(
        component.querySelector(`img[src='${ProfitIcon}']`)
    ).toBeInTheDocument();
    expect(component.querySelector('.percentage')).toBeInTheDocument();
    expect(component.querySelector('.profitorloss')).toBeInTheDocument();
});

test('Should render with negative profitOrLossPercentage without portfolioArrowDown', () => {
    render(
        <PortfolioValue
            label="Total Investment"
            currentValue={33243}
            profitOrLossPercentage={-0.5}
            portfolioArrowDown={false}
        />
    );
    const component = screen.getByTestId(testId);
    expect(component).toBeInTheDocument();
    expect(
        component.querySelector(`img[src='${LossIcon}']`)
    ).toBeInTheDocument();
    expect(component.querySelector('.percentage')).toBeInTheDocument();
    expect(component.querySelector('.profitorloss')).toBeInTheDocument();
});
