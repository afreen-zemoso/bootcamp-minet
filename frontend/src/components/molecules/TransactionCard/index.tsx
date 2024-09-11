import React from 'react';
import Typography from '../../atoms/Typography';
import { Grid } from '@mui/material';
import Avatar from '../../atoms/Avatar';
import Success from '../../../../public/assets/images/success.svg';
import Failed from '../../../../public/assets/images/failed.svg';
import theme from '../../../theme';
import { Chip } from '../../atoms/Chip';
import { TransactionProps } from '../../../utils/interfaces/TransactionCardInterface';
const TransactionCard = (props: TransactionProps) => {
    const variant = 'dark';
    return (
        <Grid
            container
            direction="column"
            rowGap={1}
            padding={`0 ${theme.spacing(6)} ${theme.spacing(6)}`}
        >
            <Grid item>
                <Typography
                    variant="caption2"
                    color={theme.palette.text.highEmphasis}
                >
                    {props.date}
                </Typography>
            </Grid>
            <Grid item container columnSpacing={3}>
                <Grid item>
                    <Avatar
                        src={props.status === 'SUCCESS' ? Success : Failed}
                        alt={props.status}
                        width={theme.spacing(11)}
                        height={theme.spacing(11)}
                    />
                </Grid>
                <Grid item sx={{ flexGrow: 1 }}>
                    <Typography
                        variant="body1"
                        color={theme.palette.text.highEmphasis}
                    >
                        {props.id}
                    </Typography>
                    <Chip
                        label={props.type === 'buy' ? 'Purchased' : 'sold'}
                        chipVariant={variant}
                    />
                </Grid>
                <Grid item textAlign="end">
                    <Typography
                        variant="body1"
                        color={theme.palette.text.highEmphasis}
                    >
                        {props.quantity}
                    </Typography>
                    <Typography
                        variant="caption2"
                        color={theme.palette.text.mediumEmphasis}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            paddingTop: theme.spacing(1.5)
                        }}
                    >
                        {props.price}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TransactionCard;
