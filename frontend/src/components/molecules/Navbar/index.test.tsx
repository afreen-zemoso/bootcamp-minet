import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar, { iconsList } from './index';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from '../../../redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
const NavbarTest = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Navbar active={false} />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    );
};
describe('SideNavComponentLocation', () => {
    test('handles click event on Dashboard icon', () => {
        render(<NavbarTest />);

        const dashboardIcon = screen.getByAltText('Dashboard');
        expect(dashboardIcon).toBeInTheDocument;
        fireEvent.click(screen.getByAltText('Log Out'));
    });

    test('renders all icons', () => {
        render(<NavbarTest />);

        iconsList.forEach((icon) => {
            const imageElement = screen.getByAltText(icon.alt);
            expect(imageElement).toBeInTheDocument();
        });
    });
});
