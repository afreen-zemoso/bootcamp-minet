import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SocialLogin from './index';
import GoogleLogo from '../../../../public/assets/images/google.svg';
import '@testing-library/jest-dom';

describe('SocialLogin', () => {
    it('renders the social login component with text and icon', () => {
        const text = 'Facebook';
        const src = GoogleLogo;

        render(<SocialLogin text={text} src={src} />);

        const textElement = screen.getByText(text);
        expect(textElement).toBeInTheDocument();

        const iconElement = screen.getByTestId('socialIconComponent');
        expect(iconElement).toBeInTheDocument();
    });

    it('should be able to click the card', () => {
        const text = 'Facebook';
        const src = GoogleLogo;
        const onClickSpy = jest.fn();

        render(<SocialLogin text={text} src={src} onClick={onClickSpy()} />);

        const textElement = screen.getByText(text);
        fireEvent.click(textElement);
        expect(onClickSpy).toBeCalled();
    });
});
