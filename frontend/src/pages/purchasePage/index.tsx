import React, { useEffect, useState } from 'react';
import TradeTemplate from '../../components/templates/tradeTemplate';
import BuyCryptoCard from '../../components/organisms/BuyCryptoCard';
import { Card, styled } from '@mui/material';
import theme from '../../theme';
import AmountDetails from '../../components/organisms/AmountDetails';
import DeliveryTimeCard from '../../components/molecules/DeliveryTimeCad';
import PaymentCard from '../../components/organisms/SummaryPaymentCard';
import MainTemplate from '../../components/templates/MainTemplate';
import { MinetService } from '../../utils/MinetService';
import { DepositCard } from '../../components/molecules/depositCard';
import { CryptoCoinProps } from '../../utils/interfaces/CryptoCoinType';
import { UserType } from '../../utils/interfaces/UserType';
import { CryptoTransactionType } from '../../utils/interfaces/CryptoTransactionType';
import { WalltetType } from '../../utils/interfaces/WalletType';
import { useNavigate, useParams } from 'react-router-dom';
import { UserId } from '../../utils/interfaces/UserIdInterface';
export const StyledCard = styled(Card)({
    borderRadius: '4px',
    border: `1px solid ${theme.palette.grey[100]}`,
    background: 'white',
    boxShadow: 'none',
    padding: theme.spacing(6),
    '&.styleInCard': {
        padding: theme.spacing(4)
    },
    '& .styleSlider': {
        marginLeft: theme.spacing(9),
        maxHeight: theme.spacing(23.75)
    }
});
export const PurchasePage = (props: UserId) => {
    const [cryptoCoins, setcryptoCoins] = useState<CryptoCoinProps[]>([]);
    const navigate = useNavigate();
    const { id } = useParams();
    const selectedCryptoId = id as string;
    const initalCryptoCoin: CryptoCoinProps = {
        id: '',
        name: '',
        symbol: '',
        icon: '',
        price: 1,
        change: 0,
        marketCap: 0,
        volume: 0,
        circulatingSupply: 0
    };
    const initialUser: UserType = {
        id: 0,
        fullName: '',
        email: '',
        balance: 0
    };
    const [user, setUser] = useState<UserType>(initialUser);
    const [selectedCrypto, setSelectedCrypto] =
        useState<CryptoCoinProps>(initalCryptoCoin);

    const user_id = props.user_id;
    useEffect(() => {
        MinetService.getCryptoCoins().then((res) => {
            const cryptos = res.data as CryptoCoinProps[];
            setcryptoCoins(res.data);
            const crypto = {
                ...cryptos.filter((coin) => coin.id === selectedCryptoId)[0]
            };
            setSelectedCrypto(crypto);
        });
        MinetService.getUserById(user_id).then((res) => {
            setUser(res.data as UserType);
        });
    }, []);
    const handleSelectCrypto = (index: number) => {
        const selectedCrypto = cryptoCoins[index];
        setSelectedCrypto(selectedCrypto);
    };
    const selectedCryptoPrice = selectedCrypto.price;
    const userBalance = user.balance;
    const userHalfBalance = userBalance / 2;
    const maxBuyCrypto = userBalance / selectedCryptoPrice;
    const [sliderValue, setSliderValue] = useState<number>(0);
    useEffect(() => {
        const halfCryptoBalance = userHalfBalance / selectedCryptoPrice;
        setSliderValue(halfCryptoBalance);
    }, [selectedCryptoPrice, userHalfBalance]);
    const handleSliderValue = (event: Event, value: number | number[]) => {
        setSliderValue(value as number);
    };
    const onClickMax = () => {
        setSliderValue(maxBuyCrypto);
    };
    const onSubmit = async () => {
        const wallet = {
            cryptoId: selectedCrypto.id,
            totalBalance: sliderValue
        };
        const cryptoAmount = user.balance - userAmount - deliveryFee;
        const cryptoTransaction: CryptoTransactionType = {
            date: new Date(),
            status: 'SUCCESS',
            type: 'BUY',
            price: userAmount,
            quantity: sliderValue,
            description: `From ${user.fullName}`,
            cryptoId: selectedCrypto.id
        };
        await MinetService.addTransaction(cryptoTransaction);
        await MinetService.updateUserBalance({
            id: user.id,
            balance: cryptoAmount
        });
        await MinetService.getUserWallet(selectedCrypto.id)
            .then(async (res) => {
                const userWallet = res.data as WalltetType;
                const totalBalance = sliderValue + userWallet.totalBalance;
                await MinetService.updateUserWallet(userWallet.id, {
                    totalBalance: totalBalance
                });
            })
            .catch(async () => await MinetService.addCryptoToUser(wallet));
        const coinValue = `${sliderValue.toFixed(5)}${selectedCrypto.symbol}`;
        setTimeout(() => {
            navigate(`/buy-success/${coinValue}`);
        }, 1000);
    };
    let userAmount = sliderValue * selectedCryptoPrice;
    const deliveryFee = userAmount * 0.001;
    if (userAmount >= user.balance) {
        userAmount -= deliveryFee;
    }
    return (
        <MainTemplate
            headerText={'Checkout'}
            body={
                <div data-testid="purchase-body">
                    <TradeTemplate
                        cryptoText={'Buy Crypto'}
                        cryptoBody={
                            <BuyCryptoCard
                                transactionType={'buy'}
                                cryptoCoins={cryptoCoins}
                                selectedValue={selectedCrypto.id}
                                onCryptoCoinSelected={handleSelectCrypto}
                            />
                        }
                        totalBalanceBody={
                            <DepositCard
                                totalBalance={user.balance}
                                type={'buy'}
                            />
                        }
                        amountDetailsBody={
                            <AmountDetails
                                userAmount={userAmount}
                                cryptoBalance={maxBuyCrypto}
                                cryptocode={selectedCrypto.symbol}
                                cryptoPrice={selectedCryptoPrice}
                                buy={true}
                                sliderValue={sliderValue}
                                onChange={handleSliderValue}
                                onClick={onClickMax}
                            />
                        }
                        feesBody={
                            <DeliveryTimeCard
                                time={'2-5'}
                                code={selectedCrypto.symbol}
                            />
                        }
                        paymentCardBody={
                            <PaymentCard
                                coin={selectedCrypto}
                                amount={userAmount}
                                deliveryFee={0.001}
                                totalCoins={sliderValue}
                                type={'buy'}
                                paymentMethod={'Visa credit ...8845'}
                                transactionFee={deliveryFee}
                                onSubmit={onSubmit}
                            />
                        }
                    />
                </div>
            }
            activeDashboard={false}
            navHeight={50.5}
        />
    );
};
