import React from 'react';
import styled from '@emotion/styled';
import { Chip as MuiChip, Typography } from '@mui/material';
import theme from '../../../theme';

interface ChipProps {
    label: string;
    chipVariant: 'light' | 'dark';
}

export const Chip = ({ ...props }: ChipProps) => {
    const StyledChip = styled(MuiChip)({
    textTransform: 'none',
    height: props.chipVariant === 'light' ? theme.spacing(4.5) : theme.spacing(5),
    borderRadius: theme.spacing(25),
    padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
    gap: theme.spacing(2.5),
    backgroundColor:
        props.chipVariant === 'light'
            ? theme.palette.grey[50]
            : theme.palette.grey[100],

    '&:hover': {
        backgroundColor: ''
    },
    '& .MuiChip-label': { 
        padding: 0,
        color: props.chipVariant === 'light'
            ? theme.palette.text.mediumEmphasis :theme.palette.grey[500]
    }
});

    return (
        <StyledChip
            variant="filled"
            label={<Typography variant={props.chipVariant === 'light' ? 'overline' : 'caption2'}>{props.label}</Typography>}
            data-testid="chip"/>)
};
