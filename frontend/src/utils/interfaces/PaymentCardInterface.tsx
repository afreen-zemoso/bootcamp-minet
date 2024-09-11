import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

export interface PaymentCardProps {
    sx?: SxProps<Theme>;
    className?: string;
    cryptoCoinCode: string;
    balance: number;
    icon: string;
    name: string;
}
