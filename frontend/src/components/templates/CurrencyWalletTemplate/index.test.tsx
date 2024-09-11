import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CurrencyWalletTemplate from '.';

describe('CurrencyWalletTemplate', () => {
    test('Should render the wallet Template', () => {
        render(
            <CurrencyWalletTemplate watchlistBar={undefined} body={undefined} />
        );
        expect(screen.getByTestId('wallet template')).toBeInTheDocument();
    });
});
