import React, { useEffect, useState } from 'react';
import MainTemplate from '../../components/templates/MainTemplate';
import TradeTemplate from '../../components/templates/tradeTemplate';
import BuyCryptoCard from '../../components/organisms/BuyCryptoCard';
import PaymentCard from '../../components/molecules/PaymentCard';
import AmountDetails from '../../components/organisms/AmountDetails';
import { CryptoCoinProps } from '../../utils/interfaces/CryptoCoinType';
import { UserType } from '../../utils/interfaces/UserType';
import { MinetService } from '../../utils/MinetService';
import { CryptoTransactionType } from '../../utils/interfaces/CryptoTransactionType';
import { WalltetType } from '../../utils/interfaces/WalletType';
import SummaryPaymentCard from '../../components/organisms/SummaryPaymentCard';
import { firstCryptoCoins, firstCryptoUser } from '../../utils/constants';
import { DepositCard } from '../../components/molecules/depositCard';
import { useNavigate, useParams } from 'react-router-dom';
import { UserId } from '../../utils/interfaces/UserIdInterface';

const SellScreen = (props: UserId) => {
    const [currencyCryptoCoins, setcurrencyCryptoCoins] = useState<
        CryptoCoinProps[]
    >([]);
    const { id } = useParams();
    const activeCryptoId = id as string;
    const user_id = props.user_id;
    const navigate = useNavigate();
    const firstCryptoCoin: CryptoCoinProps = firstCryptoCoins;

    const firstUser: UserType = firstCryptoUser;
    const [cryptoUser, setCryptoUser] = useState<UserType>(firstUser);
    const [selectedCurrencyCrypto, setSelectedCurrencyCrypto] =
        useState<CryptoCoinProps>(firstCryptoCoin);
    const [userCryptoCoins, setUserCryptoCoins] = useState<CryptoCoinProps[]>(
        []
    );
    const [userWallet, setUserWallet] = useState<WalltetType[]>([]);
    const [sliderValue, setSliderValue] = useState<number>(0);
    const [coinBalance, setCoinBalance] = useState<number>(0);
    useEffect(() => {
        MinetService.getCryptoCoins().then((res) => {
            setcurrencyCryptoCoins(res.data);
        });
        MinetService.getUserById(user_id).then((res) => {
            setCryptoUser(res.data as UserType);
        });
        MinetService.getUserWalletCoins().then((res) => {
            setUserWallet(res.data);
        });
    }, []);
    useEffect(() => {
        if (currencyCryptoCoins.length > 0) {
            const userCoins: CryptoCoinProps[] = [];
            userWallet.forEach((wallet) => {
                const cryptos = currencyCryptoCoins;
                const crypto: CryptoCoinProps = {
                    ...cryptos.filter((coin) => coin.id === wallet.cryptoId)[0]
                };
                userCoins.push(crypto);
                if (activeCryptoId === crypto.id) {
                    setSelectedCurrencyCrypto(crypto);
                    setCoinBalance(wallet.totalBalance);
                }
            });
            setUserCryptoCoins(userCoins);
        }
    }, [userWallet, currencyCryptoCoins]);
    const handleCryptoCoinSelected = (index: number) => {
        const selectedCurrencyCrypto = userCryptoCoins[index];
        setSelectedCurrencyCrypto(selectedCurrencyCrypto);
        setCoinBalance(userWallet[index].totalBalance);
    };
    const selectedCurrencyCryptoPrice = selectedCurrencyCrypto.price;
    const cryptoUserBalance = coinBalance * selectedCurrencyCryptoPrice;
    const cryptouserHalfBalance = cryptoUserBalance / 2;
    const maxBuyCrypto = coinBalance;
    useEffect(() => {
        const halfCryptoBalance =
            cryptouserHalfBalance / selectedCurrencyCryptoPrice;
        setSliderValue(halfCryptoBalance);
    }, [selectedCurrencyCryptoPrice, cryptouserHalfBalance]);
    const handleSliderValue = (event: Event, value: number | number[]) => {
        setSliderValue(value as number);
    };
    const onClickMax = () => {
        setSliderValue(maxBuyCrypto);
    };
    const onSubmit = async () => {
        const wallet = userWallet.filter(
            (wallet) => wallet.cryptoId === selectedCurrencyCrypto.id
        )[0];
        const cryptoAmount = cryptoUser.balance + userAmount - deliveryFee;
        const cryptoBalance = wallet.totalBalance - sliderValue;
        const cryptoTransaction: CryptoTransactionType = {
            date: new Date(),
            status: 'SUCCESS',
            type: 'SELL',
            price: userAmount,
            quantity: sliderValue,
            description: `From ${cryptoUser.fullName}`,
            cryptoId: selectedCurrencyCrypto.id
        };
        await MinetService.addTransaction(cryptoTransaction);
        await MinetService.updateUserBalance({
            id: cryptoUser.id,
            balance: cryptoAmount
        });
        if (cryptoBalance > 0) {
            await MinetService.updateUserWallet(wallet.id, {
                totalBalance: cryptoBalance
            });
        } else {
            await MinetService.deleteUserWallet(wallet.id);
        }
        const coinValue = `${sliderValue.toFixed(5)}${
            selectedCurrencyCrypto.symbol
        }`;
        setTimeout(() => {
            navigate(`/sell-success/${coinValue}`);
        }, 1000);
    };
    let userAmount = sliderValue * selectedCurrencyCryptoPrice;
    const deliveryFee = userAmount * 0.001;
    if (userAmount >= cryptoUser.balance) {
        userAmount -= deliveryFee;
    }

    return (
        <>
            <MainTemplate
                headerText={'Checkout'}
                activeDashboard={false}
                navHeight={50.5}
                body={
                    <div>
                        <TradeTemplate
                            cryptoBody={
                                <BuyCryptoCard
                                    transactionType={'sell'}
                                    cryptoCoins={userCryptoCoins}
                                    selectedValue={selectedCurrencyCrypto.id}
                                    onCryptoCoinSelected={
                                        handleCryptoCoinSelected
                                    }
                                />
                            }
                            totalBalanceBody={
                                <PaymentCard
                                    cryptoCoinCode={
                                        selectedCurrencyCrypto.symbol
                                    }
                                    balance={coinBalance}
                                    icon={selectedCurrencyCrypto.icon}
                                    name={selectedCurrencyCrypto.name}
                                />
                            }
                            amountDetailsBody={
                                <AmountDetails
                                    userAmount={userAmount}
                                    cryptoBalance={maxBuyCrypto}
                                    cryptocode={selectedCurrencyCrypto.symbol}
                                    cryptoPrice={selectedCurrencyCryptoPrice}
                                    buy={false}
                                    sliderValue={sliderValue}
                                    onChange={handleSliderValue}
                                    onClick={onClickMax}
                                />
                            }
                            feesBody={
                                <DepositCard totalBalance={0} type={'sell'} />
                            }
                            paymentCardBody={
                                <SummaryPaymentCard
                                    coin={selectedCurrencyCrypto}
                                    amount={userAmount}
                                    deliveryFee={0.001}
                                    totalCoins={sliderValue}
                                    type={'sell'}
                                    paymentMethod={'Visa credit ...8845'}
                                    transactionFee={deliveryFee}
                                    onSubmit={onSubmit}
                                />
                            }
                            cryptoText={''}
                        />
                    </div>
                }
            />
        </>
    );
};

export default SellScreen;
