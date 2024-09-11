import { Grid, styled } from '@mui/material';
import React from 'react';
import TextFieldComponent from '../../atoms/Textfield';
import theme from '../../../theme';
import TypographyComponent from '../../atoms/Typography';
interface LabelTextFieldProps {
    label: string;
    id: string;
    type: 'text' | 'email' | 'password';
    value: string;
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    helperText: string;
    error: boolean;
}
const StyledTextField = styled(TextFieldComponent)({
    color: theme.palette.text.lowEmphasis,
    maxWidth: theme.spacing(128),
    '& .MuiInputBase-input': {
        padding: `${theme.spacing(3)} ${theme.spacing(4)}`
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${theme.palette.grey[300]}`
    },
    '& .MuiOutlinedInput-root': {
        padding: 0,
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: theme.spacing(4),
        lineHeight: theme.spacing(6),
        borderRadius: theme.spacing(2),
        '& .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${theme.palette.gray[300]}`,
            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
        }
    }
});
export const LabelTestField = ({ label, ...props }: LabelTextFieldProps) => {
    return (
        <div data-testid="label-input">
            <Grid container direction="column" rowGap={1.5}>
                <Grid item>
                    <TypographyComponent
                        variant="caption1"
                        sx={{
                            color: theme.palette.gray[700]
                        }}
                    >
                        {label}
                    </TypographyComponent>
                </Grid>
                <Grid item>
                    <StyledTextField {...props} fullWidth />
                </Grid>
            </Grid>
        </div>
    );
};
