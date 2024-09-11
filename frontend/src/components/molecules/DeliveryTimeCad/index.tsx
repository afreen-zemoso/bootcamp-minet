import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    styled
} from '@mui/material';
import theme from '../../../theme';
import Image from '../../atoms/Image/index';
import delivery from '../../../../public/assets/images/delivery.svg';
import Typography from '../../atoms/Typography';
import downChevron from '../../../../public/assets/images/Vector.svg';
import { Deliveries } from '../../../utils/constants';
import { DeliveryProps } from '../../../utils/interfaces/deliveryTimeCardInterface';
const DeliveryTimeCard = (props: DeliveryProps) => {
    const StyledGrid = styled(Grid)({
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3),
        padding: theme.spacing(6),
        height: theme.spacing(39),
        border: `${theme.spacing(0.25)} solid ${theme.palette.grey[100]}`,
        borderRadius: theme.spacing(1),
        background: 'white',
        '& .styleDelivery': {
            height: theme.spacing(13.5),
            padding: `${theme.spacing(4)} ${theme.spacing(6)} ${theme.spacing(
                4
            )} ${theme.spacing(15)}`,
            border: `${theme.spacing(0.25)} solid ${theme.palette.grey[100]}`,
            backgroundColor: theme.palette.background.paper,
            '&.addBackground': {
                backgroundColor: theme.palette.grey[50]
            }
        },
        '& .removePadding': {
            padding: 0
        }
    });

    const StyledAccordion = styled(Accordion)({
        border: `${theme.spacing(0.25)} solid ${theme.palette.grey[100]}`,
        boxShadow: 'none',
        '& .MuiAccordionSummary-root': {
            padding: theme.spacing(4),
            paddingRight: theme.spacing(6),
            '& .MuiAccordionSummary-content': {
                margin: 0
            }
        }
    });
    const deliveryFees = 0.001;
    const accordionTest = 'Select speed delivery';
    const instantTime = `Instant : ${props.time} min`;
    const transactionFees = `Transaction fees : ${deliveryFees} ${props.code}`;
    const altDownIcon = 'down Chevron';
    const altDelivery = 'delivery icon';
    return (
        <StyledGrid data-testid="DeliveryCard">
            <Grid item>
                <Typography
                    variant="body1"
                    color={theme.palette.text.highEmphasis}
                >
                    {accordionTest}
                </Typography>
            </Grid>
            <Grid item>
                <StyledAccordion>
                    <AccordionSummary
                        expandIcon={
                            <Image src={downChevron} alt={altDownIcon} />
                        }
                    >
                        <Grid
                            item
                            container
                            columnSpacing={4}
                            alignItems="center"
                        >
                            <Grid item>
                                <Image alt={altDelivery} src={delivery} />
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="body1"
                                    color={theme.palette.text.highEmphasis}
                                >
                                    {instantTime}
                                </Typography>
                                <Typography
                                    variant="caption1"
                                    color={theme.palette.text.mediumEmphasis}
                                >
                                    {transactionFees}
                                </Typography>
                            </Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: '0px' }}>
                        {Deliveries.map((Delivery) => (
                            <Grid
                                item
                                key={Delivery.id}
                                container
                                className={`styleDelivery ${
                                    Delivery.id === 1 ? 'addBackground' : ''
                                }`}
                                flexGrow={1}
                            >
                                <Grid item flexGrow={1}>
                                    <Typography
                                        variant="body2"
                                        color={theme.palette.text.highEmphasis}
                                    >
                                        {Delivery.type} <b>{Delivery.time}</b>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    {Delivery.type !== 'None' && (
                                        <Typography
                                            variant="caption2"
                                            color={
                                                theme.palette.text
                                                    .mediumEmphasis
                                            }
                                        >
                                            Delivery fees : {Delivery.fees}{' '}
                                            {props.code}
                                        </Typography>
                                    )}
                                </Grid>
                            </Grid>
                        ))}
                    </AccordionDetails>
                </StyledAccordion>
            </Grid>
        </StyledGrid>
    );
};

export default DeliveryTimeCard;
