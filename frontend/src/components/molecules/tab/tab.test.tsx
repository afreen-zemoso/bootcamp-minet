import { Typography } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { TabsComponent } from '.';
const tabs = [
    {
        index: 0,
        children: <Typography variant="body1">All Assets</Typography>,
        label: 'All Assets'
    },
    {
        index: 1,
        children: <Typography variant="body1">Watchlist</Typography>,
        label: 'Watchlist'
    }
];
describe('Tab swiching', () => {
    test('testing tab', () => {
        render(<TabsComponent tabs={tabs} value={0} />);
        expect(screen.getByTestId('tabs')).toBeInTheDocument;
    });
});
