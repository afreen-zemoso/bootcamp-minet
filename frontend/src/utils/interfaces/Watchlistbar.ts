import { SxProps, Theme } from "@mui/material";
import { CryptoCoinProps } from "./CryptoCoinType";

export interface WatchListBarProps {
    sx?: SxProps<Theme>;
    className?: string;
    cryptoCoin: CryptoCoinProps;
    checked: boolean;
    getState: (checkedButton: boolean) => void;
}