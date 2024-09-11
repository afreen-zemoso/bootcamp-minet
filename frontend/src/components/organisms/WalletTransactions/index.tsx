import { Card, styled } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import PortFolioCard from '../../molecules/PortFolioCard';
import { WalletTransactionInterface } from '../../../utils/interfaces/WalletTransactionInterface';
import { getDateSplit } from '../../../utils/methods';
interface WalletTransactionsProps {
    transactions: WalletTransactionInterface[];
}
const WalletTransactions = (props: WalletTransactionsProps) => {
    const { transactions } = props;
    const StyledCard = styled(Card)({
        maxHeight: theme.spacing(150),
        overflowY: 'visible',
        boxShadow: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: '14px'
    });
    return (
        <Card
            sx={{
                padding: theme.spacing(6)
            }}
        >
            <StyledCard>
                {transactions.map((transaction) => (
                    <PortFolioCard
                        key={transaction.id}
                        id={transaction.id.toString()}
                        change={transaction.change}
                        name={transaction.name}
                        image={transaction.image}
                        price={transaction.price}
                        symbol={transaction.symbol}
                        date={getDateSplit(transaction.date)}
                        coinCode={transaction.coinCode}
                        chipLabel={transaction.chipLabel}
                        currentCardId={''}
                        portfolio={false}
                    />
                ))}
            </StyledCard>
        </Card>
    );
};

export default WalletTransactions;
