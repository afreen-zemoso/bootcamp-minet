import { render, screen } from '@testing-library/react';
import ResetCodePage from '.';
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
describe('Reset code page Component', () => {
    test('Reset code page', () => {
        renderWithRouter(<ResetCodePage />);
        expect(screen.getByTestId('authenticationTemplate')).toBeInTheDocument;
        expect(screen.getByTestId('reset code')).toBeInTheDocument;
    });
});
