import { render, screen } from '@testing-library/react';
import ResetPasswordSuccessPage from '.';
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
describe('Reset Password Success Page Component', () => {
    test('Reset password page', () => {
        renderWithRouter(<ResetPasswordSuccessPage />);
        expect(screen.getByTestId('authenticationTemplate')).toBeInTheDocument;
        expect(screen.getByTestId('ResetSuccess')).toBeInTheDocument;
    });
});
