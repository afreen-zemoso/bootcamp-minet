import { fireEvent, render, screen } from '@testing-library/react';
import ResetSuccess from '.';
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
describe('Reset Success Component', () => {
    it('should render ResetSuccess', () => {
        renderWithRouter(<ResetSuccess />);
        expect(screen.getByTestId('ResetSuccess')).toBeInTheDocument;
        expect(screen.getByText('Login')).toBeInTheDocument;
        fireEvent.click(screen.getByText('Login'));
    });
});
