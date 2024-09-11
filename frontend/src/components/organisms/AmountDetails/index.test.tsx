import { render, screen } from '@testing-library/react';
import AmountDetails from '.';
import '@testing-library/jest-dom';

describe('AmountDetails component', () => {
    test('renders the AmountDetails component with initial values', () => {
        render(
            <AmountDetails
                userAmount={25000}
                cryptoBalance={0.015218134935203145}
                cryptocode={'BTC'}
                cryptoPrice={3285553.73}
                buy={true}
                sliderValue={0.007609067467601573}
            />
        );
        screen.getByTestId('amount-details');
    });
    test('Selling amount details', () => {
        render(
            <AmountDetails
                userAmount={25000}
                cryptoBalance={0.015218134935203145}
                cryptocode={'BTC'}
                cryptoPrice={3285553.73}
                buy={false}
                sliderValue={0.007609067467601573}
            />
        );
        screen.getByTestId('amount-details');
    });
});
