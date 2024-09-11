import React from 'react';
import styled from '@emotion/styled';
import { Card, Grid, Typography } from '@mui/material';
import theme from '../../../theme';
import tick from '../../../../public/assets/images/right.svg';
import Avatar from '../../atoms/Avatar';
import Image from '../../atoms/Image';
import { CryptoCardProps } from '../../../utils/interfaces/CryptoCardType';

const CryptoCard = (props: CryptoCardProps) => {
    const StyledCard = styled(Card)({
        boxShadow: 'none',
        maxWidth: props.width,
        border: `2px solid ${
            props.selected ? theme.palette.primary[500] : 'white'
        }`,
        '& .styleCrypto': {
            padding: theme.spacing(6),
            paddingTop: props.selected ? 0 : '38px',
            textAlign: 'center'
        }
    });
    const altTick = 'tick icon';
    return (
        <StyledCard data-testid="card">
            <Grid container direction="column">
                <Grid item>
                    <div>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                {props.selected && (
                                    <Image src={tick} alt={altTick} />
                                )}
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        rowGap={3}
                        className="styleCrypto"
                        alignItems="center"
                    >
                        <Grid item>
                            <Avatar
                                src={props.src}
                                alt={'Crypto Coin'}
                                width={theme.spacing(14)}
                                height={theme.spacing(14)}
                            />
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body1"
                                color={theme.palette.grey[500]}
                            >
                                {props.name}
                            </Typography>
                            <Typography
                                variant="caption1"
                                color={theme.palette.text.mediumEmphasis}
                            >
                                ${props.value.toLocaleString('en-US')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </StyledCard>
    );
};

export default CryptoCard;
