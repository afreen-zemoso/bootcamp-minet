import { render, screen } from '@testing-library/react';
import MainTemplate from '.';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from '../../../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
}));
const renderWithRouter = (ui: any) => {
    return {
        ...render(ui, { wrapper: BrowserRouter })
    };
};
const MainTemplateTest = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <MainTemplate
                    headerText={'Dashboard'}
                    body={<div>Dashboard</div>}
                    activeDashboard={true}
                    navHeight={50}
                />
            </PersistGate>
        </Provider>
    );
};
describe('Main template Component', () => {
    test('template', () => {
        renderWithRouter(<MainTemplateTest />);
        expect(screen.getByTestId('mainTemplate')).toBeInTheDocument;
    });
});
