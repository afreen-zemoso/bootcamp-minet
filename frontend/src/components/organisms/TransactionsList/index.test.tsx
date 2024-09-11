import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import TransactionsList from '.';

describe('Transactions List', () => {
    test('Should render the Transactions List', () => {
        render(
            <TransactionsList
                transactions={[]}
                onSearchChange={jest.fn()}
                onTimePeriodChange={jest.fn()}
            />
        );
        expect(screen.getByTestId('transactions-list')).toBeInTheDocument();
    });

    test('To test the searchfield and dropdown', async () => {
        const searchFn = jest.fn();
        const dropFn = jest.fn();
        render(
            <TransactionsList
                transactions={[]}
                onSearchChange={searchFn}
                onTimePeriodChange={dropFn}
                walletBalance="1234"
            />
        );
        expect(screen.getByTestId('transactions-list')).toBeInTheDocument;

        const searchField = screen.getByRole('textbox');
        expect(searchField).toBeInTheDocument;
        fireEvent.change(searchField, {
            target: { value: 'Bit' }
        });
        expect(searchFn).toBeCalled();
        fireEvent.click(screen.getByTestId('wrong-button'));

        const dropDown = screen.getByTestId('dropDown');
        expect(dropDown).toBeInTheDocument();
        if (dropDown.firstChild) {
            fireEvent.keyDown(dropDown.firstChild, { key: 'ArrowDown' });
            await screen.findByText('1Y');
            const year = screen.getByText('1Y');
            fireEvent.click(year);
            expect(dropFn).toBeCalled();
        }
    });
});
