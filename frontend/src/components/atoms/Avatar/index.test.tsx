import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import AvatarLogo from '../../../../public/assets/images/avatar.svg';
import Avatar from '.';

const logoName = 'Avatar Logo';

test('Should render the Avatar Logo', () => {
    render(<Avatar src={AvatarLogo} alt={logoName} width={'32px'} height={'32px'} />);
    expect(screen.getByTestId(logoName)).toBeInTheDocument();
});
