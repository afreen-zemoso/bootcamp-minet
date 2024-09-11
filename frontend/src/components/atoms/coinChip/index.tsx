import { Chip, Typography, styled } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
interface CoinChipProp {
    background: string;
    label: string;
    displayBorder: boolean;
    onClick?: () => void;
}
export const CoinChip = ({ ...props }: CoinChipProp) => {
    const StyledChip = styled(Chip)({
        width: '100%',
        padding: `${theme.spacing(4)} ${theme.spacing(4)}`,
        borderRadius: theme.spacing(1),
        background: props.background,
        '& .MuiChip-label': {
            padding: 0
        },
        border: props.displayBorder
            ? `${theme.spacing(0.5)} solid ${theme.palette.warning.chipBorder}`
            : 'none'
    });
    return (
        <StyledChip
            id="coin-chip"
            data-testid="coin-chip"
            variant="filled"
            label={<Typography variant="body2">{props.label}</Typography>}
            onClick={props.onClick}
        />
    );
};
