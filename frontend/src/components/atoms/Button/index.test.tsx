import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import AddIcon from '../../../../public/assets/images/add.svg';
import { ReactSVG } from 'react-svg';
import Button, { ButtonProps } from '.';
import { ThemeProvider } from '@mui/material';
import MinetTheme from '../../../theme';

const onClickMock = jest.fn();
const testId = 'Button';
const Test: React.FC<ButtonProps> = (props) => {
    return (
        <ThemeProvider theme={MinetTheme}>
            <Button {...props} />
        </ThemeProvider>
    );
};

test('Button should render into the document', () => {
    render(<Test>Button</Test>);
    const buttonComponent = screen.getByTestId(testId);
    expect(buttonComponent).toBeInTheDocument();
});

test('Button should render into the start/End Icon', () => {
    render(
        <Test
            startIcon={<ReactSVG src={AddIcon} />}
            endIcon={<ReactSVG src={AddIcon} />}
        >
            Button
        </Test>
    );

    const buttonComponent = screen.getByTestId(testId);
    const startIcon = buttonComponent.querySelector('.MuiButton-startIcon');
    expect(startIcon).toBeInTheDocument();
    const endIcon = buttonComponent.querySelector('.MuiButton-endIcon');
    expect(endIcon).toBeInTheDocument();
});

test('Button should listen to OnClick Events', () => {
    render(<Test onClick={onClickMock}>Button</Test>);

    const buttonComponent = screen.getByTestId(testId);
    expect(buttonComponent).toBeInTheDocument();
    fireEvent.click(buttonComponent);
    expect(onClickMock).toBeCalledTimes(1);
});

describe('Button rendering variants', () => {
    test('Primary', () => {
        render(<Test variant="primary">Primary</Test>);
        expect(screen.getByTestId(testId)).toHaveClass('MuiButton-contained');
    });

    test('Secondary', () => {
        render(<Test variant="secondary">Secondary</Test>);
        expect(screen.getByTestId(testId)).toHaveClass('MuiButton-outlined');
    });

    test('Tertiary', () => {
        render(<Test variant="icon-only" />);
        expect(screen.getByTestId(testId)).toHaveClass('MuiButton-outlined');
    });
});

test('checking disablility', () => {
    render(<Test disabled>Disabled</Test>);

    const buttonComponent = screen.getByRole('button');
    expect(buttonComponent).toBeInTheDocument();
    expect(buttonComponent).toBeDisabled();
});
