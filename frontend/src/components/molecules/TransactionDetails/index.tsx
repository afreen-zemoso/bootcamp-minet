import { Stack, Divider, Grid } from '@mui/material';
import Image from '../../atoms/Image';
import TypographyComponent from '../../atoms/Typography';
import theme from '../../../../src/theme';

export interface DetailsProps {
    paymentSrc: string;
    paymentCaptiontext: string;
    paymentBodytext: string;
    deliverySrc: string;
    deliveryCaptiontext: string;
    deliveryBodytext: string;
    walletSrc: string;
    walletCaptiontext: string;
    walletBodytext: string;
}

const TransactionDetails = ({
    paymentSrc,
    paymentCaptiontext,
    paymentBodytext,
    deliverySrc,
    deliveryCaptiontext,
    deliveryBodytext,
    walletSrc,
    walletCaptiontext,
    walletBodytext
}: DetailsProps) => {
    return (
        <Grid container direction={'column'} alignItems={'flex-start'}>
            <Grid item>
                <Grid container spacing={2}>
                    <Grid item>
                        <Image alt="image" src={paymentSrc} />
                    </Grid>
                    <Grid item>
                        <Stack spacing={1}>
                            <TypographyComponent
                                variant="caption2"
                                color={theme.palette.text.mediumEmphasis}
                            >
                                {paymentCaptiontext}
                            </TypographyComponent>
                            <TypographyComponent
                                variant="body1"
                                color={theme.palette.text.highEmphasis}
                            >
                                {paymentBodytext}
                            </TypographyComponent>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item marginLeft={theme.spacing(5)}>
                <Divider
                    orientation="vertical"
                    sx={{ borderStyle: 'dashed', height: theme.spacing(8) }}
                />
            </Grid>
            <Grid item>
                <Grid container spacing={2}>
                    <Grid item>
                        <Image alt="image" src={deliverySrc} />
                    </Grid>
                    <Grid item>
                        <Stack spacing={1}>
                            <TypographyComponent
                                variant="caption2"
                                color={theme.palette.text.mediumEmphasis}
                            >
                                {deliveryCaptiontext}
                            </TypographyComponent>
                            <TypographyComponent
                                variant="body1"
                                color={theme.palette.text.highEmphasis}
                            >
                                {deliveryBodytext}
                            </TypographyComponent>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item marginLeft={theme.spacing(5)}>
                <Divider
                    orientation="vertical"
                    sx={{ borderStyle: 'dashed', height: theme.spacing(8) }}
                />
            </Grid>
            <Grid item>
                <Grid container spacing={2}>
                    <Grid item>
                        <Image alt="image" src={walletSrc} />
                    </Grid>
                    <Grid item>
                        <Stack spacing={1}>
                            <TypographyComponent
                                variant="caption2"
                                color={theme.palette.text.mediumEmphasis}
                            >
                                {walletCaptiontext}
                            </TypographyComponent>
                            <TypographyComponent
                                variant="body1"
                                color={theme.palette.text.highEmphasis}
                            >
                                {walletBodytext}
                            </TypographyComponent>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TransactionDetails;
