import { render, screen } from '@testing-library/react';
import ImageWithText from './index';
import '@testing-library/jest-dom';
import theme from '../../../theme';
import PlainCard from '../../../../public/assets/images/plaincard.svg';

it('should renders Image With Text having text only', async () => {
    render(
        <ImageWithText
            image={PlainCard}
            imageHeight="42px"
            imageWidth="42px"
            text="You dont own any crypto, Send yourself some crypto to get started."
            textVariant="caption2"
            textColor={theme.palette.text.mediumEmphasis}
            imageandtextgap="20px"
        />
    );
    const wrapper = screen.getByTestId('ImageWithText');
    expect(wrapper).toBeInTheDocument();
});

it('should render Image With Text when imageandtextgap is not passed', async () => {
    render(
        <ImageWithText
            image={PlainCard}
            imageHeight="42px"
            imageWidth="42px"
            text="You dont own any crypto, Send yourself some crypto to get started."
            textVariant="caption2"
            textColor={theme.palette.text.mediumEmphasis}
        />
    );
    const wrapper = screen.getByTestId('ImageWithText');
    expect(wrapper).toHaveStyle('gap:10px');
    expect(wrapper).toBeInTheDocument();
});
