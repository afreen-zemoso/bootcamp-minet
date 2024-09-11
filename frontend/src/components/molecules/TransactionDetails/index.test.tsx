import { render } from '@testing-library/react';
import TransactionDetails from './index';
import Payment from '../../../../public/assets/images/payment.svg';
import Delivery from '../../../../public/assets/images/circledelivery.svg';
import Wallet from '../../../../public/assets/images/wallet.svg';

describe('TransactionDetails', () => {
    it('should render TransactionDetails component with valid props', () => {
        const props = {
            paymentSrc: Payment,
            paymentCaptiontext: 'Payment',
            paymentBodytext: 'Payment details',
            deliverySrc: Delivery,
            deliveryCaptiontext: 'Delivery',
            deliveryBodytext: 'Delivery details',
            walletSrc: Wallet,
            walletCaptiontext: 'Wallet',
            walletBodytext: 'Wallet details'
        };

        render(<TransactionDetails {...props} />);
    });
});
