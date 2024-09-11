import { render, screen } from '@testing-library/react';
import { CoinChip } from '.';

describe('Coin chip Component', () => {
    test('coin chip not selected', () => {
        render(
            <CoinChip background="red" displayBorder={false} label="Bitcoin" />
        );
        expect(screen.getByTestId('coin-chip')).toBeInTheDocument;
    });
    test('coin chip selected', () => {
        render(
            <CoinChip background="red" displayBorder={true} label="Bitcoin" />
        );
        expect(screen.getByTestId('coin-chip')).toBeInTheDocument;
    });
});
