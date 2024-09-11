import { Box, Grid } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import { WalletProps } from '../../../utils/interfaces/CurrencywalletInterface';

const CurrencyWalletTemplate: React.FC<WalletProps> = ({
    watchlistBar,
    body
}) => {
    return (
        <>
            <Grid
                container
                data-testid="wallet template"
                padding={theme.spacing(6)}
                flexDirection={'column'}
                rowGap={6}
            >
                <Grid item>
                    <Box>{watchlistBar}</Box>
                </Grid>
                <Grid item>{body}</Grid>
            </Grid>
        </>
    );
};

export default CurrencyWalletTemplate;
