import { Button as MuiButton, SxProps, Theme, useTheme } from '@mui/material';

export interface ButtonProps {
    sx?: SxProps<Theme>;
    className?: string;
    children?: React.ReactNode;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'icon-only';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant, sx, ...props }) => {
    const muiBtnVariant = variant === 'primary' ? 'contained' : 'outlined';

    const isIconOnlyVariant = variant === 'icon-only';
    if (isIconOnlyVariant) props.children = '';
    const theme = useTheme();

    const customSx: SxProps<Theme> = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: theme.spacing(8),
        padding: 0,
        paddingX: !isIconOnlyVariant ? 4 : 0,
        height: theme.spacing(!isIconOnlyVariant ? 10.5 : 8),
        gap: 2.5,
        borderRadius: theme.spacing(1),
        color: 'background.paper',
        '& .MuiButton-startIcon, & .MuiButton-endIcon': {
            margin: 0
        },
        '&.MuiButton-contained': {
            '&:hover': {
                backgroundColor: 'primary.700'
            },
            '&.Mui-disabled': {
                backgroundColor: 'primary.300',
                color: 'white'
            }
        },
        '&.MuiButton-outlined': {
            color: 'primary.500',
            backgroundColor: 'background.paper',
            border: `${theme.spacing(0.25)} solid ${
                theme.palette.primary[500]
            }`,
            '&:hover': {
                color: 'primary.700',
                '& path': {
                    fill: `${theme.palette.primary[700]} !important`
                }
            },
            '&.Mui-disabled': {
                color: 'grey.300',
                '& path': {
                    fill: `${theme.palette.grey[300]} !important`
                }
            }
        },
        ...sx
    };

    return (
        <MuiButton
            sx={customSx}
            data-testid="Button"
            variant={muiBtnVariant}
            {...props}
        />
    );
};

export default Button;
