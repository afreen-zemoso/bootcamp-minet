import { Grid } from '@mui/material';
import React from 'react';
import chevronLeft from '../../../../public/assets/images/chevron-left.svg';
import chevronRight from '../../../../public/assets/images/chevron-right.svg';
import { CoinChip } from '../../atoms/coinChip';
import { currencies } from '../../../utils/constants';
interface BitCoinSliderProp {
    currentId: number;
    onClick?: (id: number) => void;
}
export const BitCoinSlider = ({ currentId, onClick }: BitCoinSliderProp) => {
    return (
        <Grid
            container
            direction="row"
            columnGap={4}
            alignItems="center"
            data-testid={`sliderCurrentId-${currentId}`}
        >
            <Grid item>
                <img src={chevronLeft} alt="chevron left icon" />
            </Grid>
            {currencies.map((currency, index) => (
                <Grid item key={currency.id} flex={1}>
                    <CoinChip
                        background={currency.background}
                        displayBorder={currency.id === currentId}
                        label={currency.label}
                        onClick={() => onClick?.(index)}
                    />
                </Grid>
            ))}
            <Grid item>
                <img src={chevronRight} alt="chevron right" />
            </Grid>
        </Grid>
    );
};
