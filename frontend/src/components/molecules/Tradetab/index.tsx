import { Card, Checkbox, Grid, styled } from '@mui/material';
import React from 'react';
import Avatar from '../../atoms/Avatar';
import TypographyComponent from '../../atoms/Typography';
import { Icon } from '../../atoms/icon';
import theme from '../../../theme';
import { TradeTabProp } from '../../../utils/interfaces/TradeTab';
import { useNavigate } from 'react-router-dom';
const StyledCard = styled(Card)({
    border: `1px solid ${theme.palette.grey[100]}`,
    padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
    borderRadius: theme.spacing(1),
    boxShadow: 'none'
});
export const TradeTab = ({ ...props }: TradeTabProp) => {
    const checkNumber = (amount: number) => {
        return amount - Math.floor(amount) !== 0;
    };
    const navigate = useNavigate();
    return (
        <>
            <StyledCard data-testid="trade-tab">
                <Grid container alignItems="center">
                    <Grid item flex={1.7}>
                        <div onClick={() => navigate(`/currency/${props.id}`)}>
                            <Grid container alignItems="center" columnGap={2.5}>
                                <Grid item>
                                    <Avatar
                                        src={props.icon}
                                        alt={`${props.icon} icon`}
                                        width={theme.spacing(10.5)}
                                        height={theme.spacing(10.5)}
                                    />
                                </Grid>
                                <Grid item>
                                    <TypographyComponent
                                        variant="body1"
                                        data-testid="currencyname"
                                    >
                                        {props.name}
                                    </TypographyComponent>
                                    <TypographyComponent
                                        variant="overline"
                                        data-testid="currencynameshortcut"
                                        color={
                                            theme.palette.text.mediumEmphasis
                                        }
                                    >
                                        {props.symbol}
                                    </TypographyComponent>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item flex={1.8}>
                        <TypographyComponent
                            variant="body2"
                            data-testid="currencyvalue"
                        >
                            ${props.price.toLocaleString('en-US')}
                            {checkNumber(props.price) ? '' : '.00'}
                        </TypographyComponent>
                    </Grid>
                    <Grid item flex={1.3}>
                        <TypographyComponent
                            variant="body2"
                            data-testid="change"
                            color={
                                props.change > 0
                                    ? theme.palette.success[500]
                                    : theme.palette.error[500]
                            }
                        >
                            {props.change > 0 ? '+' : ''}
                            {props.change}
                            {checkNumber(props.price) ? '' : '.00'}%
                        </TypographyComponent>
                    </Grid>
                    <Grid item flex={1.2}>
                        <TypographyComponent
                            variant="body2"
                            data-testid="marketcap"
                        >
                            ${props.marketCap}
                            {checkNumber(props.marketCap) ? '' : '.00'}T
                        </TypographyComponent>
                    </Grid>
                    <Grid item flex={0.2} sx={{ textAlign: 'center' }}>
                        <Checkbox
                            data-testid="checked"
                            checked={props.checked}
                            onChange={props.onChecked}
                            icon={<Icon checked={false} />}
                            checkedIcon={<Icon checked={true} />}
                            name={props.checkboxName}
                            disableRipple
                        />
                    </Grid>
                </Grid>
            </StyledCard>
        </>
    );
};
