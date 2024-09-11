import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import TimePeriodTab from '.';

const testId = 'TimePeriodTab';

describe('TimePeriodTab', () => {
    it('renders the component with the correct props for variant "primary"', () => {
        const { getByText } = render(<TimePeriodTab variant="primary" />);

        expect(screen.getByTestId(testId)).toBeInTheDocument();
        expect(getByText('1H')).toBeInTheDocument();
        expect(getByText('24H')).toBeInTheDocument();
        expect(getByText('1W')).toBeInTheDocument();
        expect(getByText('1M')).toBeInTheDocument();
        expect(getByText('1Y')).toBeInTheDocument();
        expect(getByText('ALL')).toBeInTheDocument();
    });

    it('renders the component with the correct props for variant "secondary"', () => {
        const { getByText } = render(<TimePeriodTab variant="secondary" />);

        expect(screen.getByTestId(testId)).toBeInTheDocument();
        expect(getByText('1H')).toBeInTheDocument();
        expect(getByText('24H')).toBeInTheDocument();
        expect(getByText('1W')).toBeInTheDocument();
        expect(getByText('1M')).toBeInTheDocument();
        expect(getByText('1Y')).toBeInTheDocument();
        expect(getByText('ALL')).toBeInTheDocument();

        const secondaryTab = getByText('1M');
        expect(secondaryTab).toHaveStyle('backgroundColor: primary.900');
    });
});
