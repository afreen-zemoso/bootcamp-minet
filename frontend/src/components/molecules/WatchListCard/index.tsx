import { Box, Stack, styled, useTheme } from '@mui/material';
import ProfitIcon from '../../../../public/assets/images/profit.svg';
import LossIcon from '../../../../public/assets/images/loss.svg';
import Typography from '../../atoms/Typography';
import Image from '../../atoms/Image';
import { Chip } from '../../atoms/Chip';
import { Graph } from '../Graph';
import { WatchListCardProps } from '../../../utils/interfaces/WatchListCardInterface';
import { useNavigate } from 'react-router-dom';

const StyledStack = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing(6),
    gap: theme.spacing(2.5),
    width: '100%',
    height: theme.spacing(32.5),
    background: 'white',
    border: `${theme.spacing(0.25)} solid ${theme.palette.grey[100]}`,
    borderRadius: theme.spacing(1),
    '& .WatchListCard-coin-icon': {
        alignSelf: 'flex-start',
        '& img': {
            width: theme.spacing(10.5)
        }
    },
    '& .coin-graph': {
        position: 'relative',
        padding: 0,
        '& .percentage': {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 0,
            top: theme.spacing(1),
            right: theme.spacing(1),
            width: theme.spacing(13.75),
            height: theme.spacing(6)
        }
    }
}));

const WatchListCard: React.FC<WatchListCardProps> = ({ ...props }) => {
    const isProfit = props.profitOrLossPercentage >= 0;
    const cryptoId = props.id;
    const navigate = useNavigate();
    const profitOrLossIcon = isProfit ? ProfitIcon : LossIcon;

    const valueLabel = `$${props.valuePerOneCoin.toLocaleString('en-US')}`;

    const theme = useTheme();
    const graphWidth = '100%';

    const profitOrLossPercentageLabelColor = isProfit
        ? theme.palette.success[500]
        : theme.palette.error[500];

    const profitOrLossPercentageLabel = `${
        isProfit ? ' +' : ' '
    }${props.profitOrLossPercentage.toFixed(1)}%`;

    return (
        <StyledStack
            data-testid="WatchListCard"
            onClick={() => navigate(`/currency/${cryptoId}`)}
            sx={props.sx}
            className={props.className}
        >
            <Image
                className="WatchListCard-coin-icon"
                src={props.icon}
                alt={props.cryptoCoinCode + 'Icon'}
            />
            <Stack>
                <Typography variant="body1">{props.name}</Typography>
                <Typography variant="body1">{valueLabel}</Typography>
                <Box marginTop={5}>
                    <Chip label="24h" chipVariant="light" />
                </Box>
            </Stack>
            <Box className="coin-graph" width="100%">
                <Stack className="percentage">
                    <Image src={profitOrLossIcon} alt="profitOrLossIcon" />
                    <Typography
                        variant="overline"
                        color={profitOrLossPercentageLabelColor}
                    >
                        {profitOrLossPercentageLabel}
                    </Typography>
                </Stack>
                <Graph
                    labelVisible={false}
                    gridVisible={false}
                    colors={[profitOrLossPercentageLabelColor]}
                    width={graphWidth}
                    height={theme.spacing(28)}
                    {...props.GraphProps}
                />
            </Box>
        </StyledStack>
    );
};

export default WatchListCard;
