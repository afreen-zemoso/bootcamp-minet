import theme from '../../../theme';
import { TimePeriodTabProps } from '../../../utils/interfaces/TimePeriodTabInterface';
import TypographyComponent from '../../atoms/Typography';
import { Card, Grid, styled } from '@mui/material';
const StyledCard = styled(Card)({
    borderRadius: '4px',
    border: ` 1px solid ${theme.palette.grey[100]}`,
    boxShadow: 'none',
    padding: `${theme.spacing(2.5)} ${theme.spacing(4)}`,
    maxWidth: theme.spacing(77),
    '& .tab': {
        width: theme.spacing(8),
        height: theme.spacing(8),
        textAlign: 'center',
        color: theme.palette.text.mediumEmphasis,
        '&.addBorder': {
            borderBottom: `2px solid ${theme.palette.primary[500]}`,
            color: theme.palette.primary[500]
        },
        '&.addBackground': {
            background: theme.palette.primary[100],
            boxShadow: `0px 1px 10px 0px rgba(44, 44, 44, 0.08)`,
            color: theme.palette.primary[900],
            borderRadius: '50%'
        }
    }
});
const TimePeriodTab: React.FC<TimePeriodTabProps> = ({ variant }) => {
    const tabs = ['1H', '24H', '1W', '1M', '1Y', 'ALL'];
    const isSecondary = variant === 'secondary';
    const currentTab = '1M';
    return (
        <StyledCard data-testid="TimePeriodTab">
            <Grid container columnGap={4} alignItems="center">
                {tabs.map((tab) => {
                    const check = tab === currentTab;
                    const className = isSecondary
                        ? 'addBackground'
                        : 'addBorder';
                    const variant =
                        check && !isSecondary ? 'caption1' : 'caption2';
                    return (
                        <Grid
                            item
                            key={tab}
                            className={`tab ${check ? className : ''}`}
                        >
                            <TypographyComponent variant={variant}>
                                {tab}
                            </TypographyComponent>
                        </Grid>
                    );
                })}
            </Grid>
        </StyledCard>
    );
};

export default TimePeriodTab;
