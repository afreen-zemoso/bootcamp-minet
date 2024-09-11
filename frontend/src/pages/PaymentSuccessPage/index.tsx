import React from 'react';
import MainTemplate from '../../components/templates/MainTemplate';
import { PurchaseDetail } from '../../components/molecules/purchaseDetail';
import { purchaseMessage, sellMessage } from '../../utils/constants';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import MinetTheme from '../../theme';
import { PaymentSuccessPageProps } from '../../utils/interfaces/PaymentSuccessInterface';
import { useParams } from 'react-router-dom';

const PaymentSuccessPage = (props: PaymentSuccessPageProps) => {
    const { sell } = props;
    const { value } = useParams();
    const StyledBox = styled(Box)({
        padding: MinetTheme.spacing(38),
        minHeight: MinetTheme.spacing(182),
        borderTop: `1px solid ${MinetTheme.palette.grey[100]}`,
        borderLeft: `1px solid ${MinetTheme.palette.grey[100]}`
    });
    return (
        <MainTemplate
            headerText={'Checkout'}
            body={
                <StyledBox>
                    <PurchaseDetail
                        paymentMessage={sell ? sellMessage : purchaseMessage}
                        sell={sell}
                        currency={value as string}
                    />
                </StyledBox>
            }
            activeDashboard={false}
            navHeight={90}
        />
    );
};

export default PaymentSuccessPage;
