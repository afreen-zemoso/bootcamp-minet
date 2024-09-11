import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import MinetLogo from '../../../../public/favicon.svg';
import Image from '.';

const testId = 'Image';

test('Should render', () => {
    render(<Image src={MinetLogo} alt="Minet Logo" />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
});

test('Should have class that is passed', () => {
    render(<Image src={MinetLogo} className="classname" alt="Minet Logo" />);
    const ImageWrapper = screen.getByTestId(testId);
    expect(ImageWrapper).toHaveClass('classname');
});
