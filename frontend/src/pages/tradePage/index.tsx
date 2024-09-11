import { Box, Grid, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchField from '../../components/molecules/SearchField';
import DropDownComponent from '../../components/molecules/Dropdown';
import { TradeList } from '../../components/organisms/tradeList';
import { MinetService } from '../../utils/MinetService';
import MainTemplate from '../../components/templates/MainTemplate';
import theme from '../../theme';
import { TabPanelProps } from '../../utils/interfaces/TabType';
import { TradeTabProp } from '../../utils/interfaces/TradeTab';
import { TabsComponent } from '../../components/molecules/tab';
import {
    TradePageProp,
    WatchlistType
} from '../../utils/interfaces/TradePageType';
import { dropDownMenuList } from '../../utils/constants';
const StyledBody = styled(Box)({
    padding: theme.spacing(6)
});
const TabPanel = (props: TabPanelProps) => {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    );
};
const TradeBody = ({ tabValue }: TradePageProp) => {
    const [tabIndex, setTabIndex] = useState<number>(tabValue);
    const [searchValue, setSearchValue] = useState<string>('');
    const [tradeList, setTradeList] = useState<TradeTabProp[]>([]);
    const [tempTradeList, setTempTradeList] = useState<TradeTabProp[]>([]);

    useEffect(() => {
        MinetService.getCryptoCoins().then((res) => {
            const crytpoCoins = res.data as TradeTabProp[];
            MinetService.getWatchList().then((res) => {
                const watchList = res.data as WatchlistType[];
                const cryptoCoinList = [] as TradeTabProp[];
                crytpoCoins.forEach((coin) => {
                    const checkCoin = watchList.filter(
                        (watchListCoin) => watchListCoin.cryptoId === coin.id
                    );
                    const cryptoCoin = {
                        ...coin,
                        checked: checkCoin.length > 0
                    };
                    cryptoCoinList.push(cryptoCoin);
                });
                setTradeList(cryptoCoinList);
                setTempTradeList(cryptoCoinList);
            });
        });
    }, []);
    useEffect(() => {
        if (searchValue.length === 0) {
            setTradeList(tempTradeList);
        } else {
            const filteredTrades = tempTradeList.filter((trade) =>
                trade.name
                    .toLocaleLowerCase()
                    .includes(searchValue.toLocaleLowerCase())
            );
            setTradeList([...filteredTrades]);
        }
    }, [searchValue, tempTradeList]);
    const tabs = [
        {
            index: 1,
            label: 'All Assets',
            value: 1
        },
        {
            index: 2,
            label: 'Watchlist',
            value: 2
        }
    ];
    const searchPlaceholder = 'Search all assets';
    const onCheckedCrypto = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cryptoId = e.target.name;
        const watchListCoin = {
            cryptoId: cryptoId
        };
        const updatedTempTradeList = tempTradeList.map((trade) => {
            if (trade.id !== cryptoId) {
                return trade;
            }
            if (trade.id === cryptoId && trade.checked === false) {
                MinetService.addCoinToWatchList(watchListCoin);
            } else {
                MinetService.getCryptoFromWatchList(cryptoId).then((res) => {
                    MinetService.deleteCryptoFromWatchList(res.data.id);
                });
            }
            return { ...trade, checked: !trade.checked };
        });
        setTempTradeList([...updatedTempTradeList]);
    };
    const watchListCoins = tradeList.filter((trade) => trade.checked);
    const allAssets = ['All assets', 'Option 1', 'Option 2'];
    return (
        <StyledBody data-testid="trade-page">
            <Grid container columnSpacing={3} alignItems="end">
                <Grid item flexGrow={1}>
                    <TabsComponent
                        value={tabIndex}
                        tabs={tabs}
                        handleChange={(
                            event: React.SyntheticEvent,
                            newValue: number
                        ) => {
                            setTabIndex(newValue);
                            setSearchValue('');
                        }}
                    />
                </Grid>
                <Grid item>
                    <SearchField
                        placeholder={searchPlaceholder}
                        filter={false}
                        handleChange={(value: string) => setSearchValue(value)}
                        value={searchValue}
                        handleClick={() => setSearchValue('')}
                    />
                </Grid>
                <Grid item>
                    <DropDownComponent
                        menuList={dropDownMenuList}
                        onChange={() => {}}
                        backgroundColor="white"
                    />
                </Grid>
                <Grid item>
                    <DropDownComponent
                        menuList={allAssets}
                        onChange={() => {}}
                        backgroundColor="white"
                    />
                </Grid>
            </Grid>
            <TabPanel index={1} value={tabIndex}>
                <TradeList
                    trades={tradeList}
                    onCheckedCrypto={onCheckedCrypto}
                />
            </TabPanel>
            <TabPanel index={2} value={tabIndex}>
                <div data-testid="watchlist">
                    <TradeList
                        trades={watchListCoins}
                        onCheckedCrypto={onCheckedCrypto}
                    />
                </div>
            </TabPanel>
        </StyledBody>
    );
};
export const TradePage = ({ tabValue }: TradePageProp) => {
    return (
        <MainTemplate
            headerText={'Trade'}
            body={<TradeBody tabValue={tabValue} />}
            activeDashboard={false}
            navHeight={70}
        />
    );
};
