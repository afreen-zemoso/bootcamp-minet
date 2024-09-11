import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import SignInPanelImage from '../../../public/assets/images/loginImage.png';
import SignInPage from '.';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from '../../redux/store';
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
const SignInTest = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <SignInPage />
            </PersistGate>
        </Provider>
    );
};
test('Should render', () => {
    renderWithRouter(<SignInTest />);
    const component = screen.getByTestId('sign in');
    expect(component).toBeInTheDocument();
    expect(
        component.querySelector(`img[src='${SignInPanelImage}'`)
    ).toBeInTheDocument();
});
