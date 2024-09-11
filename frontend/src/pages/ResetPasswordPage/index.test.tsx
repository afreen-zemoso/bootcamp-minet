import { render, screen } from '@testing-library/react';
import ResetPasswordPage from '.';
import { BrowserRouter } from 'react-router-dom';
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
    useParams: jest.fn().mockReturnValue({
        email: 'john@gmail.com'
    })
}));
const renderWithRouter = (ui: any) => {
    return {
        ...render(ui, { wrapper: BrowserRouter })
    };
};
describe('Reset password page Component', () => {
    test('Reset password page', () => {
        renderWithRouter(<ResetPasswordPage />);
        expect(screen.getByTestId('authenticationTemplate')).toBeInTheDocument;
        expect(screen.getByTestId('reset password')).toBeInTheDocument;
    });
});
