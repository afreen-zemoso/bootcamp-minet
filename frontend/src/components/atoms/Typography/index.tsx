import { Typography } from '@mui/material';
import React from 'react';

interface TypographyComponentPros {
    variant:
        | 'h4'
        | 'h6'
        | 'body1'
        | 'body2'
        | 'subtitle1'
        | 'subtitle2'
        | 'button'
        | 'caption1'
        | 'caption2'
        | 'overline';
    children?: React.ReactNode;
    sx?: React.CSSProperties;
    color?: string;
    component?: string;
    className?: string;
}

const TypographyComponent = ({
    children,
    ...props
}: TypographyComponentPros) => {
    return (
        <Typography data-testid="Hello" {...props}>
            {children}
        </Typography>
    );
};

export default TypographyComponent;
