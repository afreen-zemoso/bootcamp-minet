import React, { useEffect, useState } from 'react';
import MainTemplate from '../../components/templates/MainTemplate';
import CurrencyWalletTemplate from '../../components/templates/CurrencyWalletTemplate';
import WatchListBar from '../../components/organisms/WatchListBar';
import { Card, Grid } from '@mui/material';
import { TabsComponent } from '../../components/molecules/tab';
import Typography from '../../components/atoms/Typography';
import CurrencyPortfolio from '../../components/organisms/CurrencyPortfolio';
import { BitCoinOverview } from '../../components/organisms/bitCoinOverview';
import { aboutBitcoin, resources } from '../../utils/constants';
import { MinetService } from '../../utils/MinetService';
import { CryptoCoinProps } from '../../utils/interfaces/CryptoCoinType';
import BitCoinIcon from '../../../public/assets/images/bitcoin-32x32.svg';
import TransactionsList from '../../components/organisms/TransactionsList';
import {
    getFilteredTransactionCondition,
    getTotalBalance,
    getTransactionObject
} from '../../utils/methods';
import {
    Transaction,
    WalletTransactionInterface
} from '../../utils/interfaces/WalletTransactionInterface';
import { CurrencyDetailsProps } from '../../utils/interfaces/CurrencyDetailsProps';
import { useNavigate, useParams } from 'react-router-dom';

const CurrencyDetailsBody = (props: CurrencyDetailsProps) => {
    const { cryptoCoin } = props;
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [transactionList, setTransactionList] = useState<
        WalletTransactionInterface[]
    >([]);
    const [tempTransactionList, setTempTransactionList] = useState<
        WalletTransactionInterface[]
    >([]);
    const [searchAsset, setSearchAsset] = useState<string>('');
    const [timePeriod, setTimePeriod] = useState<string>('');
    const [totalBalance, setTotalBalance] = useState<number>(0);

    useEffect(() => {
        if (tabIndex === 1) {
            MinetService.getCryptoBasedTransactions(cryptoCoin.id).then(
                (response) => {
                    const finalTransactions: WalletTransactionInterface[] = [];
                    const transactions = response.data;
                    let balance = 0;
                    transactions.map((transaction: Transaction) => {
                        balance += transaction.quantity;
                        finalTransactions.push(
                            getTransactionObject(transaction, cryptoCoin)
                        );
                    });
                    setTransactionList(finalTransactions);
                    setTempTransactionList(finalTransactions);
                    setTotalBalance(parseFloat(balance.toFixed(5)));
                }
            );
        }
    }, [tabIndex]);

    useEffect(() => {
        const timedTransactions = tempTransactionList.filter((transaction) =>
            getFilteredTransactionCondition(transaction, timePeriod)
        );
        let balance = 0;
        if (timePeriod !== 'ALL') {
            timedTransactions.forEach(
                (transaction) => (balance += transaction.price)
            );
            setTotalBalance(balance);
            setTransactionList(timedTransactions);
        } else {
            tempTransactionList.forEach(
                (transaction) => (balance += transaction.price)
            );
            setTotalBalance(balance);
            setTransactionList(tempTransactionList);
        }
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
        <Grid container flexDirection={'column'} rowGap={6}>
            <Grid item>
                <TabsComponent
                    value={tabIndex}
                    handleChange={(
                        event: React.SyntheticEvent,
                        newValue: number
                    ) => {
                        setTabIndex(newValue);
                    }}
                    tabs={[
                        {
                            index: 0,
                            children: (
                                <Typography variant="subtitle2">
                                    Overview
                                </Typography>
                            ),
                            label: 'Overview'
                        },
                        {
                            index: 1,
                            children: (
                                <Typography variant="subtitle2">
                                    Wallet
                                </Typography>
                            ),
                            label: 'Wallet'
                        }
                    ]}
                />
            </Grid>
            {tabIndex === 0 ? (
                <OverviewDetailsBody cryptoCoin={cryptoCoin} />
            ) : (
                <TransactionsList
                    transactions={transactionList}
                    onSearchChange={(value) => setSearchAsset(value)}
                    onTimePeriodChange={(value) => setTimePeriod(value)}
                    walletBalance={getTotalBalance(
                        totalBalance,
                        cryptoCoin.symbol,
                        cryptoCoin.price * totalBalance
                    )}
                />
            )}
        </Grid>
    );
};

const OverviewDetailsBody = (props: CurrencyDetailsProps) => {
    const { cryptoCoin } = props;
    return (
        <>
            <Grid item>
                <Card sx={{ padding: '24px' }}>
                    <CurrencyPortfolio
                        coin={{
                            name: 'Current Value',
                            value: cryptoCoin.price,
                            percentage: cryptoCoin.change,
                            data: [20, 38, 35, 52, 42, 47],
                            color: '#FFA74F'
                        }}
                    />
                </Card>
            </Grid>
            <Grid item>
                <BitCoinOverview
                    about={aboutBitcoin}
                    resources={resources}
                    name={cryptoCoin.name}
                />
            </Grid>
        </>
    );
};

const Currency = () => {
    const initialCrypto: CryptoCoinProps = {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        icon: BitCoinIcon,
        price: 0,
        change: 32,
        marketCap: 232,
        volume: 2.9,
        circulatingSupply: 890
    };
    const [cryptoCoin, setCryptoCoin] =
        useState<CryptoCoinProps>(initialCrypto);

    const { id } = useParams();
    const cryptoId = id as string;
    const navigate = useNavigate();
    const [iconChecked, setIconChecked] = useState<boolean>(false);

    const handleState = (checked: boolean) => {
        setIconChecked(checked);
        if (checked === true) {
            MinetService.addCoinToWatchList({ cryptoId });
        } else {
            MinetService.getCryptoFromWatchList(cryptoId).then((res) => {
                MinetService.deleteCryptoFromWatchList(res.data.id);
            });
        }
    };

    const handleClickSell = () => {
        MinetService.getUserWallet(cryptoId)
            .then(() => {
                navigate(`/sell/${cryptoCoin.id}`);
            })
            .catch(() => console.log('cannot sell coin'));
    };

    useEffect(() => {
        MinetService.getCryptoCoin(cryptoId).then((res) => {
            setCryptoCoin(res.data as CryptoCoinProps);
        });
        MinetService.getCryptoFromWatchList(cryptoId)
            .then(() => {
                setIconChecked(true);
            })
            .catch(() => {
                setIconChecked(false);
            });
    }, []);
    return (
        <>
            <div>
                <MainTemplate
                    headerText={'Trade'}
                    body={
                        <CurrencyWalletTemplate
                            watchlistBar={
                                <WatchListBar
                                    cryptoCoin={cryptoCoin}
                                    checked={iconChecked}
                                    getState={handleState}
                                />
                            }
                            body={
                                <CurrencyDetailsBody cryptoCoin={cryptoCoin} />
                            }
                        />
                    }
                    onClickBuy={() => navigate(`/purchase/${cryptoCoin.id}`)}
                    onClickSell={handleClickSell}
                    activeDashboard={false}
                    navHeight={50.5}
                />
            </div>
        </>
    );
};

export default Currency;
