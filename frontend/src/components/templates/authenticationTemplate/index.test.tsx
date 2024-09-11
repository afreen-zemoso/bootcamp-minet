import { render, screen } from '@testing-library/react';
import { AuthenticationTemplate } from '.';
import loginImage from '../../../../public/assets/images/loginImage.png';
describe('Authentication template Component', () => {
    test('template', () => {
        render(<AuthenticationTemplate body={<div />} image={loginImage} />);
        expect(screen.getByTestId('authenticationTemplate')).toBeInTheDocument;
    });
});
