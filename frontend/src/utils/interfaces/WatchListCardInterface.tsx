import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import { Props } from '../../components/molecules/Graph';

export interface WatchListCardProps {
    sx?: SxProps<Theme>;
    id: string;
    className?: string;
    profitOrLossPercentage: number;
    cryptoCoinCode: string;
    valuePerOneCoin: number;
    GraphProps: Props;
    icon: string;
    name: string;
}
