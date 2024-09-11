import { render, screen } from '@testing-library/react';
import SignupPage from '.';
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
describe('Sign up page', () => {
    test('should render sign up page', () => {
        renderWithRouter(<SignupPage />);
        expect(screen.getByTestId('authenticationTemplate')).toBeInTheDocument;
        expect(screen.getByTestId('sign up')).toBeInTheDocument;
    });
});
