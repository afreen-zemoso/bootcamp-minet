import { Stack, SxProps, Theme, useTheme } from '@mui/material';
import Typography from '../../atoms/Typography';
import { AmountInformationProps } from '../../../utils/interfaces/AmountInformationType';
const AmountInformation: React.FC<AmountInformationProps> = ({
    transactionType,
    numOfCryptoCoinsInvolved,
    cryptoCoinCode,
    valuePerOneCryptoCoin
}) => {
    const transactionLabel = `You are ${transactionType}ing`;
    const numOfCoinsLabel = `${numOfCryptoCoinsInvolved} ${cryptoCoinCode}`;
    const coinInfoLabel = `1${cryptoCoinCode} = $${valuePerOneCryptoCoin.toLocaleString(
        'en-US'
    )}`;
    const theme = useTheme();

    const customSx: SxProps<Theme> = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(6),
        paddingBottom: theme.spacing(8),
        backgroundColor: 'backaground.paper',
        gap: 3,
        borderRadius: theme.spacing(0),
        borderTopLeftRadius: theme.spacing(2),
        borderTopRightRadius: theme.spacing(2),
        flex: 'none',
        order: 0,
        flexGrow: 0
    };

    return (
        <Stack data-testid="AmountInformation" sx={customSx}>
            <Typography variant="caption1" color="text.mediumEmphasis">
                {transactionLabel}
            </Typography>
            <Typography variant="h6" color="text.highEmphasis">
                {numOfCoinsLabel}
            </Typography>
            <Typography variant="caption1" color="text.mediumEmphasis">
                {coinInfoLabel}
            </Typography>
        </Stack>
    );
};

export default AmountInformation;
