import Typography from '../../atoms/Typography';
import { Stack, styled } from '@mui/material';
import Image from '../../atoms/Image';
import RupeeIcon52 from '../../../../public/assets/images/rupee-52x52.svg';
import Button from '../../atoms/Button';
import { WalletDetailsBarProps } from '../../../utils/interfaces/WalletDetailsBarInterface';
import { totalbalanceLabel } from '../../../utils/constants';

const WalletDetailsBar: React.FC<WalletDetailsBarProps> = ({
    sx,
    className,
    walletBalance
}) => {
    const balanceLabel = `$ ${walletBalance.toLocaleString('en-US')}`;

    const StyledStack = styled(Stack)(({ theme }) => ({
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'flex-start',
        gap: 3,
        color: theme.palette.text.highEmphasis,
        '& .usd': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: theme.spacing(6),
            gap: theme.spacing(3),
            marginBottom: theme.spacing(3),
            height: theme.spacing(26),
            backgroundColor: theme.palette.background.paper,
            border: `${theme.spacing(0.25)} solid ${theme.palette.grey[100]}`,
            borderRadius: theme.spacing(1),
            flex: 'none',
            order: 0,
            flexGrow: 0,
            '& .usd-coin': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: 0,
                marginRight: 'auto'
            }
        },
        '& .wallet': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
            gap: theme.spacing(2.5),
            width: '100%',
            height: theme.spacing(15),
            backgroundColor: theme.palette.grey[50],
            borderRadius: theme.spacing(1),
            flex: 'none',
            order: 1,
            flexGrow: 0
        }
    }));

    const cashDepositBtnLabel = 'CASH DEPOSIT';
    const withdrawalBtnLabel = 'WITHDRAWAL';
    const rupeeIconAlt = 'Rupee Icon';
    return (
        <StyledStack
            data-testid="WalletDetailsBar"
            sx={sx}
            className={className}
        >
            <Stack className="usd">
                <Image alt={rupeeIconAlt} src={RupeeIcon52} />
                <Stack className="usd-coin">
                    <Typography variant="h6" color="text.mediumEmphasis">
                        USD Coin
                    </Typography>
                    <Typography variant="body1" color="text.mediumEmphasis">
                        Cash
                    </Typography>
                </Stack>
                <Button variant="secondary">
                    <Typography variant="button">
                        {cashDepositBtnLabel}
                    </Typography>
                </Button>
                <Button variant="secondary">
                    <Typography variant="button">
                        {withdrawalBtnLabel}
                    </Typography>
                </Button>
            </Stack>
            <Typography variant="subtitle2" color="grey.500">
                Wallet
            </Typography>
            <Stack className="wallet">
                <Typography variant="subtitle1">{totalbalanceLabel}</Typography>
                <Typography variant="subtitle1">{balanceLabel}</Typography>
            </Stack>
        </StyledStack>
    );
};

export default WalletDetailsBar;
