import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import DeliveryTimeCard from '.';
import { Deliveries } from '../../../utils/constants';
const testId = 'DeliveryCard';

it('Should render the Delivery Time Card', () => {
    render(<DeliveryTimeCard time={'2-5'} code={'BTC'} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByText('Instant : 2-5 min')).toBeInTheDocument();
    expect(
        screen.getByText('Transaction fees : 0.001 BTC')
    ).toBeInTheDocument();

    Deliveries.forEach((Delivery) => {
        expect(screen.getByText(Delivery.type)).toBeInTheDocument();
        Delivery.id !== 4 &&
            expect(screen.getByText(Delivery.time)).toBeInTheDocument();
        Delivery.id !== 4 &&
            expect(
                screen.getByText(`Delivery fees : ${Delivery.fees} BTC`)
            ).toBeInTheDocument();
    });
});
