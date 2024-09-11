import { Stack, SxProps, Theme, styled } from '@mui/material';
import Typography from '../../atoms/Typography';
import ProfitIcon from '../../../../public/assets/images/profit.svg';
import LossIcon from '../../../../public/assets/images/loss.svg';
import Image from '../../atoms/Image';

interface PortfolioValueProps {
    sx?: SxProps<Theme>;
    className?: string;
    label: string;
    currentValue: number;
    profitOrLossPercentage: number;
    portfolioArrowDown?: boolean;
}

const PortfolioValue: React.FC<PortfolioValueProps> = ({
    sx,
    label,
    className,
    currentValue,
    profitOrLossPercentage,
    portfolioArrowDown
}) => {
    const isProfit = profitOrLossPercentage >= 0;

    const profitOrLossIcon = isProfit ? ProfitIcon : LossIcon;

    const profitOrLossPercentageLabelColor = isProfit
        ? 'success.500'
        : 'error.500';

    const getProfitOrLossSign = () => (isProfit ? '+' : '');

    let profitOrLossPercentageLabel = '';
    const profitOrLossSign = getProfitOrLossSign();
    if (
        profitOrLossSign !== undefined &&
        profitOrLossPercentage !== undefined
    ) {
        profitOrLossPercentageLabel = `${profitOrLossSign}${profitOrLossPercentage.toLocaleString(
            'en-US'
        )}%`;
    }

    const StyledStack = styled(Stack)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
        gap: theme.spacing(2),
        minWidth: theme.spacing(44.75),
        height: theme.spacing(16.5),
        flex: 'none',
        order: 0,
        flexGrow: 0,
        '& .percentage': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 0,
            gap: theme.spacing(2),
            minWidth: theme.spacing(44.75),
            height: theme.spacing(6),
            flex: 'none',
            order: 0,
            flexGrow: 0
        },
        '& .profitorloss': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            paddingRight: theme.spacing(2),
            minWidth: theme.spacing(15.25),
            height: theme.spacing(6),
            borderRadius: theme.spacing(1),
            flex: 'none',
            order: 1,
            flexGrow: 0
        }
    }));

    return (
        <StyledStack data-testid="PortfolioValue" sx={sx} className={className}>
            {portfolioArrowDown ? (
                <>
                    {' '}
                    <Stack className="percentage">
                        <Typography
                            variant="caption1"
                            color="text.mediumEmphasis"
                        >
                            {label}
                        </Typography>
                    </Stack>
                    <Typography
                        component="span"
                        variant="h6"
                        color="text.highEmphasis"
                    >
                        {`$ ${currentValue.toLocaleString('en-US')}`}
                    </Typography>
                    <Stack className="profitorloss">
                        <Image src={profitOrLossIcon} alt="profitOrLossIcon" />
                        <Typography
                            variant="overline"
                            color={profitOrLossPercentageLabelColor}
                        >
                            {profitOrLossPercentageLabel}
                        </Typography>
                    </Stack>
                </>
            ) : (
                <>
                    {' '}
                    <Stack className="percentage">
                        <Typography
                            variant="caption1"
                            color="text.mediumEmphasis"
                        >
                            {label}
                        </Typography>
                        <Stack className="profitorloss">
                            <Image
                                src={profitOrLossIcon}
                                alt="profitOrLossIcon"
                            />
                            <Typography
                                variant="overline"
                                color={profitOrLossPercentageLabelColor}
                            >
                                {profitOrLossPercentageLabel}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Typography
                        component="span"
                        variant="h6"
                        color="text.highEmphasis"
                    >
                        {`$ ${currentValue.toLocaleString('en-US')}`}
                    </Typography>
                </>
            )}
        </StyledStack>
    );
};

export default PortfolioValue;
