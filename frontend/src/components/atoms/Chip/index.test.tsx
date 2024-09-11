import { render, screen } from '@testing-library/react';
import { Chip } from '.';

describe('Chip Component', () => {
    
    test('should render light chip', () => {
        render(
            <Chip label="24 h" chipVariant={'light'} />
        );
        expect(screen.getByTestId('chip')).toBeInTheDocument;
        expect(screen.getByText("24 h")).toBeInTheDocument;
    });

    test('should render dark chip', () => {
    render(<Chip label="Purchased" chipVariant={'dark'} />);
    expect(screen.getByTestId('chip')).toBeInTheDocument;
    expect(screen.getByText('Purchased')).toBeInTheDocument;

});

});
