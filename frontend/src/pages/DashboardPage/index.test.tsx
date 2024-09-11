import { act, fireEvent, render, screen } from '@testing-library/react';
import DashboardPage from '.';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from '../../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
jest.mock('react-apexcharts', () => ({
    __esModule: true,
    default: () => <div />
}));
const DashboardTest = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <DashboardPage user_id={1} />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    );
};
describe('Dashboard page', () => {
    test('page renders correctly', async () => {
        await act(async () => {
            render(<DashboardTest />);
        });
        expect(screen.getByTestId('dashboardPage')).toBeInTheDocument;
        const chips = screen.getAllByTestId('coin-chip');
        fireEvent.click(chips[1]);
        expect(screen.getByTestId('sliderCurrentId-2')).toBeInTheDocument;
    }, 100000);
});
