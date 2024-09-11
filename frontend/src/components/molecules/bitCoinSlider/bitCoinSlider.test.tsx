import { fireEvent, render, screen } from '@testing-library/react';
import { BitCoinSlider } from '.';
describe('BitCoin Slider Component', () => {
    test('slider component', () => {
        render(<BitCoinSlider currentId={1} />);
        expect(screen.getByTestId('sliderCurrentId-1')).toBeInTheDocument;
        fireEvent.click(screen.getAllByTestId('coin-chip')[0]);
    });
    test('clicking bit coin chip', () => {
        const onClick = jest.fn();
        render(<BitCoinSlider currentId={1} onClick={onClick} />);
        fireEvent.click(screen.getAllByTestId('coin-chip')[0]);
        expect(onClick).toBeCalled;
    });
});
