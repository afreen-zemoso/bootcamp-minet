import { Box, Grid, Link, styled } from '@mui/material';
import MainTemplate from '../../components/templates/MainTemplate';
import {
    DASHBOARD_PAGE_HEADER_TITLE,
    altChartIcon,
    altChevronLeft,
    altEditIcon,
    altGraphIcon,
    altGridIcon,
    altInfoIcon,
    altlistIcon,
    assetsLinkText,
    currencies,
    portfolioLabel,
    sliderClickText,
    sliderText,
    watchListLabel,
    watchlistLinkText
} from '../../utils/constants';
import {
    PortfolioDetailList,
    numberFormat
} from '../../components/organisms/portfolioDetailList';
import TypographyComponent from '../../components/atoms/Typography';
import WatchListCardsList from '../../components/molecules/WatchListCardsList';
import Image from '../../components/atoms/Image';
import Portfolio from '../../components/organisms/Portfolio';
import theme from '../../theme';
import chevronLeft from '../../../public/assets/images/assetChevrom.svg';
import edit from '../../../public/assets/images/edit.svg';
import gridIcon from '../../../public/assets/images/grid.svg';
import listIcon from '../../../public/assets/images/listIcon.svg';
import chart from '../../../public/assets/images/chart.svg';
import graph from '../../../public/assets/images/graph.svg';
import { useEffect, useState } from 'react';
import { CryptoCoinProps } from '../../utils/interfaces/CryptoCoinType';
import { MinetService } from '../../utils/MinetService';
import { WatchlistType } from '../../utils/interfaces/TradePageType';
import { WatchListProp } from '../../utils/interfaces/WatchListCardsType';
import { WalltetType } from '../../utils/interfaces/WalletType';
import { UserType } from '../../utils/interfaces/UserType';
import { CryptoTransactionType } from '../../utils/interfaces/CryptoTransactionType';
import info from '../../../public/assets/images/info.svg';
import { BitCoinSlider } from '../../components/molecules/bitCoinSlider';
import { TransactionProps } from '../../utils/interfaces/TransactionCardInterface';
import { UserId } from '../../utils/interfaces/UserIdInterface';
const StyleBody = styled(Box)({
    padding: theme.spacing(6),
    paddingBottom: theme.spacing(9.5),
    '& .styleHr': {
        borderLeft: `1px solid ${theme.palette.grey[100]}`,
        height: '28px'
    }
});
const MyPortfolio = ({ displayGraph }: { displayGraph: boolean }) => {
    const [currentCoin, setCurrentCoin] = useState(currencies[0]);

    const handleClick = (index: number) => {
        setCurrentCoin(currencies[index]);
    };
    const initialTotalInvestment = {
        name: 'Total Investment',
        value: 0,
        percentage: 0,
        data: [],
        color: '#0052FF'
    };
    const totalInvestment = {
        name: 'Total Investment',
        value: 11900204,
        percentage: -1.2,
        data: [19, 30, 27, 35, 34, 38],
        color: '#0052FF'
    };
    const coin = {
        name: currentCoin.label,
        value: 12400,
        percentage: 8.2,
        data: [20, 38, 35, 52, 42, 47],
        color: currentCoin.color
    };
    return (
        <>
            <Grid container direction="column" rowGap={3}>
                <Grid item>
                    <Portfolio
                        totalInvestment={
                            displayGraph
                                ? totalInvestment
                                : initialTotalInvestment
                        }
                        coin={coin}
                        displayGraph={displayGraph}
                    />
                </Grid>
                {displayGraph && (
                    <Grid item>
                        <>
                            <Grid container direction="column" rowGap={5.5}>
                                <Grid item container>
                                    <Grid item flexGrow={1}>
                                        <TypographyComponent variant="body1">
                                            {sliderText}
                                        </TypographyComponent>
                                    </Grid>
                                    <Grid item>
                                        <>
                                            <Grid container alignItems="center">
                                                <Image
                                                    src={info}
                                                    alt={altInfoIcon}
                                                />
                                                <TypographyComponent variant="caption2">
                                                    {sliderClickText}
                                                </TypographyComponent>
                                            </Grid>
                                        </>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <BitCoinSlider
                                        currentId={currentCoin.id}
                                        onClick={handleClick}
                                    />
                                </Grid>
                            </Grid>
                        </>
                    </Grid>
                )}
            </Grid>
        </>
    );
};
const BodyHeader = () => {
    return (
        <Grid container columnGap={3} alignItems="center">
            <Grid item>
                <TypographyComponent variant="subtitle1">
                    {watchListLabel}
                </TypographyComponent>
            </Grid>
            <Grid item>
                <hr className="styleHr" />
            </Grid>
            <Grid item flexGrow={1}>
                <Link underline="none" href="/trade">
                    <Grid container alignItems="center">
                        <TypographyComponent variant="caption1">
                            {assetsLinkText}
                        </TypographyComponent>
                        <img src={chevronLeft} alt={altChevronLeft} />
                    </Grid>
                </Link>
            </Grid>
            <Grid item>
                <Link underline="none" href="/watchlist">
                    <Grid container alignItems="center">
                        <TypographyComponent variant="caption1">
                            {watchlistLinkText}
                        </TypographyComponent>
                        <img src={edit} alt={altEditIcon} />
                    </Grid>
                </Link>
            </Grid>
            <Grid item>
                <hr className="styleHr" />
            </Grid>
            <Grid item>
                <Image src={gridIcon} alt={altGridIcon} />
                <Image src={listIcon} alt={altlistIcon} />
            </Grid>
        </Grid>
    );
};
const DashboardPage: React.FC<UserId> = (props: UserId) => {
    const [cryptoCoins, setCryptoCoins] = useState<CryptoCoinProps[]>([]);
    const [userWatchlist, setUserWatchlist] = useState<WatchlistType[]>([]);
    const [walletList, setWalletList] = useState<WalltetType[]>([]);
    const [user, setUser] = useState<UserType>(Object);
    const [transactions, setTransactions] = useState<CryptoTransactionType[]>(
        []
    );
    const [recentTransactions, setRecentTransactions] = useState<
        TransactionProps[]
    >([]);
    const user_id = props.user_id;
    const fetchData = async () => {
        await MinetService.getCryptoCoins().then((res) => {
            setCryptoCoins(res.data);
        });

        await MinetService.getWatchList().then((res) => {
            setUserWatchlist(res.data);
        });

        await MinetService.getUserById(user_id).then((res) => {
            setUser(res.data);
        });

        await MinetService.getUserTransactions().then((res) => {
            setTransactions(res.data);
        });

        await MinetService.getUserWalletCoins().then((res) => {
            setWalletList(res.data);
        });
    };
    useEffect(() => {
        fetchData();
    }, []);
    const cards = [] as WatchListProp[];
    const getCryptoCoin = (cryptoId: string) => {
        const crypto = cryptoCoins.filter(
            (cryptoCoin) => cryptoCoin.id === cryptoId
        )[0];
        return crypto;
    };
    const getCrypto = (cryptoId: string) => {
        const crypto = getCryptoCoin(cryptoId);
        const graph = {
            opacity: 0.05,
            series: [{ data: [20, 38, 35, 52, 42, 47] }]
        };
        return { cryptoCoin: crypto, GraphProps: graph };
    };
    const [userWallet, setUserWallet] = useState<CryptoCoinProps[]>([]);
    useEffect(() => {
        const userWalletList = [] as CryptoCoinProps[];
        if (cryptoCoins.length > 0) {
            walletList.forEach((wallet) => {
                const tempCrypto = getCryptoCoin(wallet.cryptoId);
                const price = tempCrypto.price * wallet.totalBalance;
                const intrest = price * (tempCrypto.change / 100);
                const crypto = {
                    ...tempCrypto,
                    price: price + intrest
                };
                userWalletList.push(crypto);
            });
            setUserWallet(userWalletList);
        }
    }, [walletList, cryptoCoins]);
    useEffect(() => {
        const tempTransactions = [] as TransactionProps[];
        if (cryptoCoins.length > 0) {
            transactions.forEach((transaction) => {
                const date = new Date(transaction.date);
                const formattedDate = date.toLocaleString('default', {
                    day: 'numeric',
                    month: 'short'
                });
                const crypto = getCryptoCoin(transaction.cryptoId);
                const type = transaction.type;
                const quantity = `${
                    type === 'BUY' ? '-' : '+'
                } ${transaction.quantity.toString()} ${crypto.symbol}`;
                const price = `${type === 'BUY' ? '-' : '+'} ${numberFormat(
                    transaction.price
                )}`;
                const id = crypto.name + ' ' + crypto.symbol;
                const tempTransaction: TransactionProps = {
                    date: formattedDate,
                    id: id,
                    status: transaction.status,
                    type: type,
                    quantity: quantity,
                    price: price
                };
                tempTransactions.push(tempTransaction);
            });
            setRecentTransactions(tempTransactions);
        }
    }, [transactions, cryptoCoins]);
    const totalBalance = userWallet.reduce(
        (prev, next) => prev + next.price,
        0
    );
    if (cryptoCoins.length > 0) {
        userWatchlist.forEach((crypto) => {
            cards.push(getCrypto(crypto.cryptoId));
        });
    }

    const Body = (
        <Grid container wrap="nowrap" data-testid="dashboardPage">
            <Grid item flex={1}>
                <StyleBody>
                    <Grid container direction="column" rowGap={6}>
                        <Grid item container direction="column" rowGap={3}>
                            <Grid item>
                                <>
                                    <BodyHeader />
                                </>
                            </Grid>
                            <Grid item>
                                <WatchListCardsList cards={cards} />
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" rowGap={3}>
                            <Grid
                                item
                                container
                                alignItems="center"
                                columnGap={1}
                            >
                                <Grid item flexGrow={1}>
                                    <TypographyComponent variant="subtitle1">
                                        {portfolioLabel}
                                    </TypographyComponent>
                                </Grid>
                                <Grid item>
                                    <Image src={chart} alt={altChartIcon} />
                                </Grid>
                                <Grid item>
                                    <Image src={graph} alt={altGraphIcon} />
                                </Grid>
                            </Grid>
                            <Grid item>
                                <MyPortfolio
                                    displayGraph={recentTransactions.length > 0}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </StyleBody>
            </Grid>
            <Grid item flex={0.4}>
                <PortfolioDetailList
                    portfolioCards={{
                        cardId: 'bitcoin',
                        cards: userWallet
                    }}
                    balance={totalBalance}
                    dollerCurrency={user.balance || 0}
                    recentTransactions={recentTransactions.slice(0, 5)}
                />
            </Grid>
        </Grid>
    );
    return (
        <MainTemplate
            headerText={DASHBOARD_PAGE_HEADER_TITLE}
            body={Body}
            activeDashboard={true}
            navHeight={60}
        />
    );
};

export default DashboardPage;
