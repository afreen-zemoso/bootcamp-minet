import { Slider, styled } from '@mui/material';
import MinetTheme from '../../../theme';
import { SliderProp } from '../../../utils/interfaces/ScrollbarInterface';

const StyledSlider = styled(Slider)({
    color: MinetTheme.palette.text.lowEmphasis,
    height: MinetTheme.spacing(24),
    '& .MuiSlider-thumb': {
        height: MinetTheme.spacing(3),
        width: MinetTheme.spacing(3),
        marginBottom: MinetTheme.spacing(1.25),
        marginTop: MinetTheme.spacing(1.25),
        backgroundColor: MinetTheme.palette.text.lowEmphasis,
        border: `1px solid ${MinetTheme.palette.text.lowEmphasis}`,
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit'
        },
        '&:before': {
            display: 'none'
        },
        '& .MuiSlider-valueLabel': {
            fontFamily: 'Graphik',
            fontSize: MinetTheme.spacing(3.5),
            fontWeight: '500',
            lineHeight: MinetTheme.spacing(4),
            letterSpacing: '0.01em',
            left: 20,
            backgroundColor: 'white',
            color: MinetTheme.palette.text.mediumEmphasis,
            right: 0,
            maxWidth: MinetTheme.spacing(50),
            width: MinetTheme.spacing(37.5),
            justifyContent: 'flex-start',
            padding: 0
        }
    },
    '& .MuiSlider-track': {
        opacity: '0.38',
        backgroundColor: 'none'
    }
});
export const SliderComponent = ({
    value,
    max = 100,
    min = 0,
    currencyrate,
    currencyname,
    onChange
}: SliderProp) => {
    return (
        <StyledSlider
            id="slider"
            step={0.00000001}
            min={min}
            max={max}
            data-testid="slider"
            value={value}
            onChange={onChange}
            orientation="vertical"
            defaultValue={50}
            size="small"
            valueLabelDisplay="on"
            valueLabelFormat={
                `1${currencyname} = $` + currencyrate.toLocaleString('en-US')
            }
        />
    );
};
