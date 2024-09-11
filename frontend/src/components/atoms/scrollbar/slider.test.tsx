import { render, screen } from '@testing-library/react';
import { SliderComponent } from '.';
describe('Slider Component', () => {
    test('slider renders correctly', () => {
        render(
            <SliderComponent
                value={50}
                currencyrate={12000}
                currencyname={'BTC'}
            />
        );
        expect(screen.getByTestId('slider')).toBeInTheDocument;
    });
});
