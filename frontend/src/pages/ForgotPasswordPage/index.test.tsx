import { render, screen } from '@testing-library/react';
import ForgotPasswordPage from '.';
import { BrowserRouter } from 'react-router-dom';

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
describe('Forgot password page Component', () => {
    test('Forgot password page', () => {
        renderWithRouter(<ForgotPasswordPage />);
        expect(screen.getByTestId('authenticationTemplate')).toBeInTheDocument;
        expect(screen.getByTestId('forgot password')).toBeInTheDocument;
    });
});
