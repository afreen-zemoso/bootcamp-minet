import React, { useEffect, useState } from 'react';
import MainTemplate from '../../components/templates/MainTemplate';
import CurrencyWalletTemplate from '../../components/templates/CurrencyWalletTemplate';
import WalletDetailsBar from '../../components/molecules/WalletDetailsBar';
import { MinetService } from '../../utils/MinetService';
import {
    Transaction,
    WalletTransactionInterface
} from '../../utils/interfaces/WalletTransactionInterface';
import {
    getFilteredTransactionCondition,
    getTransactionObject
} from '../../utils/methods';
import TransactionsList from '../../components/organisms/TransactionsList';
import { UserId } from '../../utils/interfaces/UserIdInterface';

const CashWalletBody = (props: UserId) => {
    const [totalBalance, setTotalBalance] = useState<number>(0);
    const [searchAsset, setSearchAsset] = useState<string>('');
    const [timePeriod, setTimePeriod] = useState<string>('');
    const [transactionList, setTransactionList] = useState<
        WalletTransactionInterface[]
    >([]);
    const [tempTransactionList, setTempTransactionList] = useState<
        WalletTransactionInterface[]
    >([]);

    const user_id = props.user_id;

    useEffect(() => {
        MinetService.getUserById(user_id).then((response) => {
            setTotalBalance(response.data.balance);
        });

        MinetService.getUserTransactions().then((response) => {
            const transactions = response.data;
            const transactionsPromises = transactions.map(
                async (transaction: Transaction) => {
                    const response = await MinetService.getCryptoCoin(
                        transaction.cryptoId
                    );
                    return getTransactionObject(transaction, response.data);
                }
            );

            Promise.all(transactionsPromises).then((resolvedTransactions) => {
                setTransactionList(resolvedTransactions);
                setTempTransactionList(resolvedTransactions);
            });
        });
    }, []);

    useEffect(() => {
        const timedTransactions = tempTransactionList.filter((transaction) =>
            getFilteredTransactionCondition(transaction, timePeriod)
        );
        if (timePeriod !== 'ALL') setTransactionList(timedTransactions);
        else setTransactionList(tempTransactionList);
    }, [timePeriod]);

    useEffect(() => {
        if (searchAsset.length === 0) setTransactionList(tempTransactionList);
        else {
            const searchedTransactions = tempTransactionList.filter(
                (transaction) =>
                    transaction.name.toLowerCase().includes(searchAsset)
            );
            setTransactionList(searchedTransactions);
        }
    }, [searchAsset]);

    return (
        <CurrencyWalletTemplate
            watchlistBar={<WalletDetailsBar walletBalance={totalBalance} />}
            body={
                <TransactionsList
                    transactions={transactionList}
                    onSearchChange={(value) => setSearchAsset(value)}
                    onTimePeriodChange={(value) => setTimePeriod(value)}
                />
            }
        />
    );
};
const CashWalletPage = (props: UserId) => {
    return (
        <MainTemplate
            headerText={'Trade'}
            body={<CashWalletBody user_id={props.user_id} />}
            activeDashboard={false}
            navHeight={49}
        />
    );
};

export default CashWalletPage;
