import { render, screen } from '@testing-library/react';
import { Icon } from '.';
describe('WatchList star Component', () => {
    test('selected star', () => {
        render(<Icon checked={true} />);
        expect(screen.getAllByAltText('selected star')).toBeInTheDocument;
    });
    test('unselected star', () => {
        render(<Icon checked={false} />);
        expect(screen.getByAltText('unSelected star')).toBeInTheDocument;
    });
});
