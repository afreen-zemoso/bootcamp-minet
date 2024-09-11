import { Stack, styled } from '@mui/material';
import { Balance } from '../../../utils/constants';
import Typography from '../../atoms/Typography';
import { PaymentCardProps } from '../../../utils/interfaces/PaymentCardInterface';
import theme from '../../../theme';
import Avatar from '../../atoms/Avatar';

const StyledStack = styled(Stack)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: theme.spacing(6),
    background: 'white',
    border: `${theme.spacing(0.25)} solid ${theme.palette.grey[100]}`,
    borderRadius: theme.spacing(1),
    color: 'text.highEmphasis',
    '& .body': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(4),
        flexGrow: 1,
        width: '100%',
        background: 'background.paper',
        border: `${theme.spacing(0.25)} solid ${theme.palette.grey[100]}`,
        borderRadius: theme.spacing(1)
    },
    '& .PaymentCard-coin-icon': {
        paddingRight: theme.spacing(3)
    },
    '& .cryptocoin': {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        gap: theme.spacing(3),
        '& .coin-icon img': {
            width: theme.spacing(8)
        }
    }
});
const PaymentCard: React.FC<PaymentCardProps> = ({
    className,
    cryptoCoinCode,
    balance,
    icon,
    name
}) => {
    const balanceLabel = `${balance.toFixed(7)} ${cryptoCoinCode} `;

    return (
        <StyledStack data-testid="PaymentCard" className={className} rowGap={3}>
            <Typography variant="body1" color={theme.palette.text.highEmphasis}>
                {Balance}
            </Typography>
            <Stack className="body">
                <Stack className="cryptocoin" columnGap={3}>
                    <Avatar
                        src={icon}
                        alt={icon + ' icon'}
                        width={theme.spacing(8)}
                        height={theme.spacing(8)}
                    />
                    <Typography variant="caption1">{name}</Typography>
                </Stack>
                <Typography variant="subtitle1">{balanceLabel}</Typography>
            </Stack>
        </StyledStack>
    );
};

export default PaymentCard;
