import { Divider, Grid, styled } from '@mui/material';
import React from 'react';
import TypographyComponent from '../../atoms/Typography';
import Button from '../../atoms/Button';
import Avatar from '../../atoms/Avatar';
import AvatarLogo from '../../../../public/assets/images/avatar.svg';
import downChevron from '../../../../public/assets/images/Vector.svg';
import Image from '../../atoms/Image';
import theme from '../../../theme';
import { HeaderProps } from '../../../utils/interfaces/Header';
const StyledGrid = styled(Grid)({
    maxHeight: theme.spacing(22.5),
    padding: `${theme.spacing(5)} ${theme.spacing(6)}`,
    background: 'white',
    '& .styledButton': {
        height: theme.spacing(10.5),
        width: theme.spacing(30),
        boxShadow: 'none',
        '&.styledWarning': {
            backgroundColor: theme.palette.warning[300]
        }
    },
    '& .divider': {
        height: theme.spacing(7.5)
    }
});
const Header = (props: HeaderProps) => {
    const buy = 'BUY';
    const sell = 'SELL';
    const avatarAlt = 'avatar profile';
    const downChevronAlt = 'downChevron';
    return (
        <StyledGrid
            container
            direction="row"
            alignItems="center"
            columnGap={5.25}
        >
            <Grid item sx={{ flexGrow: 1 }}>
                <TypographyComponent variant="h6">
                    {props.text}
                </TypographyComponent>
            </Grid>
            {!props.purchase && (
                <Grid item>
                    <>
                        <Grid container columnSpacing={3}>
                            <Grid item>
                                <Button
                                    variant="primary"
                                    className="styledButton styledWarning"
                                    onClick={props.onClickSell}
                                >
                                    <TypographyComponent variant="button">
                                        {sell}
                                    </TypographyComponent>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="primary"
                                    className="styledButton"
                                    onClick={props.onClickBuy}
                                >
                                    <TypographyComponent variant="button">
                                        {buy}
                                    </TypographyComponent>
                                </Button>
                            </Grid>
                        </Grid>
                    </>
                </Grid>
            )}
            <Grid item>
                <Divider orientation="vertical" className="divider" />
            </Grid>

            <Grid item>
                <div>
                    <Grid container columnGap={3} alignItems={'center'}>
                        <Grid item>
                            <Avatar
                                src={AvatarLogo}
                                alt={avatarAlt}
                                width={theme.spacing(8)}
                                height={theme.spacing(8)}
                            />
                        </Grid>
                        <Grid item>
                            <Image src={downChevron} alt={downChevronAlt} />
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </StyledGrid>
    );
};

export default Header;
