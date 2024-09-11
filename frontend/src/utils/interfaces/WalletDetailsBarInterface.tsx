import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

export interface WalletDetailsBarProps {
    sx?: SxProps<Theme>;
    className?: string;
    walletBalance: number;
}
