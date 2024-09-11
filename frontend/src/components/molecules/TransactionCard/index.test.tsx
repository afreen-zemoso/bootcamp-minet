import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest';
import '@testing-library/jest-dom';
import TransactionCard from './index';

it('should render Transaction Card', () => {
    render(
        <TransactionCard
            index={'1'}
            date={'June 23'}
            id={'BitCoin BTC'}
            status={'SUCCESS'}
            type={'buy'}
            quantity={'-0.0324BTC'}
            price={'+$34,000.00'}
        />
    );
    expect(screen.getByText('June 23')).toBeInTheDocument();
    expect(screen.getByText('BitCoin BTC')).toBeInTheDocument();
    expect(screen.getByText('-0.0324BTC')).toBeInTheDocument();
    expect(screen.getByText('+$34,000.00')).toBeInTheDocument();
});

it('should render Success Avatar if the type is success', () => {
    render(
        <TransactionCard
            index={'1'}
            date={'June 23'}
            id={'BitCoin BTC'}
            status={'success'}
            type={'buy'}
            quantity={'-0.0324BTC'}
            price={'+$34,000.00'}
        />
    );
    expect(screen.getByTestId('success')).toBeInTheDocument();
});

it('should render Failed Avatar if the type is failed', () => {
    render(
        <TransactionCard
            index={'1'}
            date={'June 23'}
            id={'BitCoin BTC'}
            status={'failed'}
            type={'buy'}
            quantity={'-0.0324BTC'}
            price={'+$34,000.00'}
        />
    );
    expect(screen.getByTestId('failed')).toBeInTheDocument();
});

it('should render the purchased chip if the transaction type is to buy', () => {
    render(
        <TransactionCard
            index={'1'}
            date={'June 23'}
            id={'BitCoin BTC'}
            status={'success'}
            type={'buy'}
            quantity={'-0.0324BTC'}
            price={'+$34,000.00'}
        />
    );
    expect(screen.getByTestId('chip')).toBeInTheDocument();
    expect(screen.getByText('Purchased')).toBeInTheDocument();
});

it('should render the sold chip if the transaction type is sell', () => {
    render(
        <TransactionCard
            index={'1'}
            date={'June 23'}
            id={'BitCoin BTC'}
            status={'success'}
            type={'sell'}
            quantity={'-0.0324BTC'}
            price={'+$34,000.00'}
        />
    );
    expect(screen.getByTestId('chip')).toBeInTheDocument();
    expect(screen.getByText('sold')).toBeInTheDocument();
});
