import React from 'react';
import Typography from '../../atoms/Typography';
import { Grid, styled } from '@mui/material';
import Avatar from '../../atoms/Avatar';
import theme from '../../../theme';
import { Chip } from '../../atoms/Chip';
import { useNavigate } from 'react-router-dom';
interface PortFolioProps {
    id: string;
    name: string;
    image: string;
    symbol: string;
    change: number;
    price: number;
    currentCardId: string;
    portfolio: boolean;
    date?: { day: number; month: string; year?: number };
    chipLabel?: string;
    coinCode?: string;
}

const PortFolioCard = (props: PortFolioProps) => {
    const StyledGrid = styled(Grid)({
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(3),
        borderBottom: `${theme.spacing(0.25)} solid ${theme.palette.grey[100]}`,
        boxShadow:
            props.currentCardId === props.id
                ? theme.palette.dropShadow.boxShadow
                : 'none',
        '&.wallet': {
            paddingBottom: theme.spacing(4),
            paddingTop: theme.spacing(3),
            paddingLeft: theme.spacing(3),
            paddingRight: 0
        }
    });
    const isWalletCard = props.date !== undefined;
    const isPurchased = props.chipLabel !== undefined;
    const finalDate = props.date as { day: number; month: string };
    const navigate = useNavigate();

    const getPriceChange = () => {
        if (props.portfolio && props.change >= 0) return `+${props.change}%`;
        else if (isWalletCard) return `${getSign()}$${props.change}`;
        else return `${props.change}%`;
    };
    const getSign = () => {
        if (isPurchased && props.chipLabel === 'purchased') return '-';
        else if (isPurchased && props.chipLabel === 'sold') return '+';
    };
    const getPriceColor = () => {
        if (props.portfolio) {
            if (props.change >= 0) return theme.palette.success[500];
            else return theme.palette.error[500];
        }
        return theme.palette.text.mediumEmphasis;
    };
    return (
        <StyledGrid
            data-testid="card"
            container
            onClick={() => navigate(`/currency/${props.id}`)}
            className={isWalletCard ? 'wallet' : ''}
        >
            <Grid item container columnSpacing={3} alignItems="center">
                {isWalletCard && (
                    <Grid item>
                        <div>
                            <Grid container direction="column">
                                <Grid item>
                                    <Typography
                                        variant={'caption2'}
                                        color={
                                            theme.palette.text.mediumEmphasis
                                        }
                                    >
                                        {finalDate.month}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant={'subtitle2'}
                                        color={theme.palette.text.highEmphasis}
                                    >
                                        {finalDate.day}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                )}
                <Grid item>
                    <Avatar
                        src={props.image}
                        alt={'portfolio image'}
                        width={theme.spacing(10.5)}
                        height={theme.spacing(10.5)}
                    />
                </Grid>
                <Grid item sx={{ flexGrow: 1 }}>
                    <Typography
                        variant="body1"
                        color={theme.palette.text.highEmphasis}
                    >
                        {isWalletCard ? 'Recieved ' + props.name : props.name}
                    </Typography>
                    <Typography
                        variant="caption2"
                        color={theme.palette.text.mediumEmphasis}
                        sx={{ paddingRight: theme.spacing(2) }}
                    >
                        {props.symbol}
                    </Typography>
                    {isWalletCard && (
                        <Chip
                            label={props.chipLabel as string}
                            chipVariant={'dark'}
                        />
                    )}
                </Grid>
                <Grid item textAlign="end">
                    <Typography
                        variant="body1"
                        color={theme.palette.text.highEmphasis}
                    >
                        {isWalletCard ? getSign() : '$'}
                        {props.price.toLocaleString('en-US')}
                        {props.price - Math.floor(props.price) !== 0
                            ? ''
                            : '.00 '}
                        {isWalletCard && ' ' + props.coinCode}
                    </Typography>
                    <Typography variant="caption2" color={getPriceColor()}>
                        {getPriceChange()}
                    </Typography>
                </Grid>
            </Grid>
        </StyledGrid>
    );
};

export default PortFolioCard;
