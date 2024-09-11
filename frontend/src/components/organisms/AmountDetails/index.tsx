import React from 'react';
import { Grid } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import Button from '../../atoms/Button';
import theme from '../../../theme/index';
import { SliderComponent } from '../../atoms/scrollbar';
import { StyledCard } from '../../../pages/purchasePage';
import { numberFormat } from '../portfolioDetailList';
import { AmountDetailsProps } from '../../../utils/interfaces/AmountdetailsInterface';

const AmountDetails = ({ ...props }: AmountDetailsProps) => {
    const headerText = 'Amount details';
    const buttonBuy = 'Buy Max';
    const buttonSell = 'Sell Max';
    const usdText = 'USD Coin(cash)';
    return (
        <StyledCard data-testid="amount-details">
            <Grid direction="column" container rowGap={3}>
                <Grid item>
                    <TypographyComponent variant="body1">
                        {headerText}
                    </TypographyComponent>
                </Grid>
                <Grid item>
                    <div>
                        <StyledCard className="styleInCard">
                            <Grid container alignItems="center">
                                <Grid item flexGrow={1}>
                                    <TypographyComponent
                                        variant="subtitle1"
                                        data-testid="slider-value"
                                    >
                                        {props.buy
                                            ? `$${numberFormat(
                                                  props.userAmount
                                              )}`
                                            : props.sliderValue}
                                    </TypographyComponent>
                                </Grid>
                                <Grid item>
                                    <Button
                                        onClick={props.onClick}
                                        data-testid="max-button"
                                    >
                                        {!props.buy ? buttonSell : buttonBuy}
                                    </Button>
                                </Grid>
                            </Grid>
                        </StyledCard>

                        <div className="styleSlider">
                            <SliderComponent
                                value={props.sliderValue}
                                min={0.00000001}
                                max={props.cryptoBalance}
                                onChange={props.onChange}
                                currencyrate={props.cryptoPrice}
                                currencyname={props.cryptocode}
                                data-testid="slider"
                            />
                        </div>

                        <StyledCard className="styleInCard">
                            <Grid container alignItems="center">
                                <Grid item flexGrow={1}>
                                    <TypographyComponent
                                        variant="subtitle1"
                                        data-testid="converted-value"
                                    >
                                        {props.buy
                                            ? props.sliderValue
                                            : numberFormat(props.userAmount)}
                                    </TypographyComponent>
                                </Grid>
                                <Grid item>
                                    <TypographyComponent
                                        variant={
                                            props.buy ? 'body1' : 'subtitle1'
                                        }
                                        color={
                                            theme.palette.text.mediumEmphasis
                                        }
                                    >
                                        {props.buy ? props.cryptocode : usdText}
                                    </TypographyComponent>
                                </Grid>
                            </Grid>
                        </StyledCard>
                    </div>
                </Grid>
            </Grid>
        </StyledCard>
    );
};

export default AmountDetails;
