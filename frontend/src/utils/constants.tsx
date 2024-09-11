// CryotoCoins Images
import BitCoinIcon from '../../public/assets/images/bitcoin-32x32.svg';
import EthereumCoinIcon from '../../public/assets/images/ethereum-32x32.svg';
import BinanceCoinIcon from '../../public/assets/images/binance-32x32.svg';
import CardanoCoinIcon from '../../public/assets/images/cardano-32x32.svg';
import DogeCoinIcon from '../../public/assets/images/dogecoin-32x32.svg';
import PolkadotCoinIcon from '../../public/assets/images/polkadot-32x32.svg';
import TetherCoinIcon from '../../public/assets/images/tether-32x32.svg';
import XRPCoinIcon from '../../public/assets/images/XRP-32x32.svg';
import etherium from '../../public/assets/images/etherium.svg';
import tether from '../../public/assets/images/tether.svg';
import BitCoin from '../../public/assets/images/coin.svg';
import xrp from '../../public/assets/images/xrp.svg';
import website from '../../public/assets/images/website.svg';
import paper from '../../public/assets/images/paper.svg';
import Google from '../../public/assets/images/google.svg';
import Facebook from '../../public/assets/images/facebook.svg';
import Microsoft from '../../public/assets/images/microsoft.svg';

export const SocialLoginOptions = [
    { src: Google, text: 'Google' },
    { src: Facebook, text: 'Facebook' },
    { src: Microsoft, text: 'Microsoft' }
];

export const Deposit = 'Deposit to';
export const Coin = 'USD Coin (Cash)';
export const defaultText = 'Default';
export const Balance = ' Total Balance';
export const GraphData = {
    series: [
        {
            name: 'Bitcoin',
            data: [18, 36, 33, 50, 40, 45]
        },
        {
            name: 'Total Investment',
            data: [18, 30, 27, 35, 34, 36]
        }
    ]
};
export const categories = ['JUN8', 'JUN15', 'JUN22', 'JUN29', 'JUL6', 'JUL13'];

export const forgotPassword = `Forgot Password`;
export const sendResetLink = `Send Reset Link`;
export const backTo = `Back to `;
export const signupHeading = `Signup with Minet`;
export const fullName = `Full Name`;
export const namePlaceholder = `Eg: John Doe`;
export const emailText = `Email`;
export const emailTextPlaceholder = `you@company.com`;
export const passwordTextPlaceholder = `Create Password`;
export const passwordText = `Password`;
export const signupText = `Sign up`;
export const orText = `Or`;
export const alreadyHaveAccount = `Already have an account?`;
export const loginText = `Login`;

export interface Data {
    id: number;
    name: string;
    symbol: string;
    price: number;
    image: string;
    change: string;
    market_capital: string;
    total_investment: string;
    series: {
        name: string;
        data: number[];
    }[];
    circulatingSupply: string;
    volume_24: string;
    total_percentage: string;
    coin_percentage: string;
    colors: string[];
    backgroundColor: string;
    transactions: {
        month: string;
        date: string;
        image: string;
        tag: string;
        value: string;
        val: string;
        status: string;
        bgColor: string;
    }[];
}

export interface Max {
    max: number;
}

export interface Transaction {
    fee: number;
}
export interface Remaining {
    remaining: number;
}

export const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export const options = [
    {
        title: '',
        testid: 'Minnet',
        src: 'assets/minnet.svg',
        alt: 'Minnet'
    }
];

export const initialstate = [
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        price: 2015273.74,
        image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        change: '+6.45%',
        market_capital: '47.19T',
        total_investment: '$637,283,258.87',
        series: [
            { name: 'Bitcoin', data: [26, 64, 11, 78, 53, 54] },
            { name: 'Total investment', data: [5, 2, 12, 34, 90, 83] }
        ],
        circulatingSupply: '1.9M BTC',
        volume_24: '4.12T',
        total_percentage: '-5.8%',
        coin_percentage: '+7.40%',
        colors: ['#FFA74F', '#0052FF'],
        backgroundColor: 'rgba(247, 147, 26, 0.2)'
    }
];

import { TradeTabProp } from './interfaces/TradeTab';
import { CryptoCoinProps } from './interfaces/CryptoCoinType';
import theme from '../theme';
import { WatchListProp } from './interfaces/WatchListCardsType';
export const currencies = [
    {
        id: 1,
        label: 'Bitcoin',
        background: 'rgba(247, 147, 26, 0.2)',
        color: theme.palette.warning[300]
    },
    {
        id: 2,
        label: 'XRP',
        background: 'rgba(34, 34, 34, 0.2)',
        color: theme.palette.grey[300]
    },
    {
        id: 3,
        label: 'Polkadot',
        background: 'rgba(98, 126, 234, 0.2)',
        color: theme.palette.warning[100]
    },
    {
        id: 4,
        label: 'Ethereum',
        background: 'rgba(98, 126, 234, 0.2)',
        color: theme.palette.primary[300]
    },
    {
        id: 5,
        label: 'Tether',
        background: 'rgba(38, 161, 123, 0.2)',
        color: theme.palette.success[100]
    },
    {
        id: 6,
        label: 'Ethereum2',
        background: 'rgba(25, 25, 113, 0.2)',
        color: theme.palette.text.lowEmphasis
    },
    {
        id: 7,
        label: 'Dodge Coin',
        background: 'rgba(219, 201, 132, 0.2)',
        color: theme.palette.grey[100]
    }
];
export const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

export const regPassword = /^(.{0,7}|\D*|[^a-z]*|[a-zA-Z0-9]*)$/;
export const regEmail =
    /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const regCode = /^\d*$/;

export const emailWarningText = `Email must follow the validations`;
export const emptyField = `This field cannot be empty`;
export const passwordWarningText = `Password must contain atleast one Lowercase,Digit,Special Character`;
export const emailPlaceholder = `you@company.com`;
export const passwordPlaceholder = `Enter Password`;
export const passwordLengthText = `Password should contain atleast 8 characters`;
export const resetPassword = `Reset Password`;
export const mismatchPasswordsMsg = `'Passwords do not match!'`;
export const passwordValidationMsg = `A min of 8 charaters with atleast 1 special character and number included`;
export const passwordResetSuccess = `Password reset successful`;
export const loginProceedText = `Click on buttons below to proceed to login`;
export const login = `Login`;
export const resetCodeText = `8 digits code`;
export const resetCode = `Reset Code`;
export const resetCodeValue = `12345678`;
export const invalidUserText = `User with this email does not exist`;
export const wrongCredentialsText = `Wrong credentials`;
export const wrongPasswordText = `Invalid Email/Password!`;

export const portfolioCards: CryptoCoinProps[] = [
    {
        id: 'bitcoin',
        icon: BitCoin,
        name: 'Bitcoin',
        symbol: 'BTC',
        price: 34000,
        change: 1.06,
        marketCap: 60.1,
        volume: 2.9,
        circulatingSupply: 18.8
    },
    {
        id: 'ethereum',
        icon: etherium,
        name: 'Ethereum',
        symbol: 'ETH',
        price: 1297.85,
        change: 6.85,
        marketCap: 60.1,
        volume: 2.9,
        circulatingSupply: 18.8
    },
    {
        id: 'tether',
        icon: tether,
        name: 'Tether',
        symbol: 'USDT',
        price: 74.28,
        change: -0.0,
        marketCap: 60.1,
        volume: 2.9,
        circulatingSupply: 18.8
    },
    {
        id: 'xrp',
        icon: xrp,
        name: 'XRP',
        symbol: 'XRP',
        price: 24.28,
        change: 0,
        marketCap: 60.1,
        volume: 2.9,
        circulatingSupply: 18.8
    }
];

export const DASHBOARD_PAGE_HEADER_TITLE = 'Dashboard';

export const Deliveries = [
    { id: 1, type: 'Instant :', time: '2-5 minutes', fees: '0.001' },
    { id: 2, type: 'Faster :', time: '4 hours', fees: '0.0001' },
    { id: 3, type: 'Fast :', time: '120 hours', fees: '0.00001' },
    { id: 4, type: 'None', time: '' }
];

export const priceCorrelationCards: CryptoCoinProps[] = [
    {
        id: 'bitcoin',
        icon: BitCoin,
        name: 'Bitcoin',
        symbol: 'Moves tightly together',
        price: 3285553.73,
        change: 100,
        circulatingSupply: 0,
        marketCap: 0,
        volume: 0
    },
    {
        id: 'etherium',
        icon: etherium,
        name: 'Ethereum',
        symbol: 'Moves tightly together',
        price: 230966.85,
        change: 86,
        circulatingSupply: 0,
        marketCap: 0,
        volume: 0
    },
    {
        id: 'xrp',
        icon: xrp,
        name: 'PRX',
        symbol: 'Moves tightly together',
        price: 54.28,
        change: 43,
        circulatingSupply: 0,
        marketCap: 0,
        volume: 0
    },
    {
        id: 'tether',
        icon: tether,
        name: 'Tether',
        symbol: 'Moves tightly together',
        price: 60.2,
        change: 10,
        circulatingSupply: 0,
        marketCap: 0,
        volume: 0
    },
    {
        id: 'xrp',
        icon: xrp,
        name: 'XRP',
        symbol: 'Moves tightly together',
        price: 74.28,
        change: 2,
        circulatingSupply: 0,
        marketCap: 0,
        volume: 0
    }
];

export const firstCryptoCoins = {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    icon: 'icon',
    price: 5,
    change: 50,
    marketCap: 200,
    volume: 3.4,
    circulatingSupply: 600
};
export const firstCryptoUser = {
    id: 1,
    fullName: 'John',
    email: 'John@company.com',
    balance: 200
};
export const CryptoCoins = {
    BTC: {
        name: 'Bitcoin',
        code: 'BTC',
        value: 3243.345,
        image: BitCoinIcon
    },
    ETH: {
        name: 'Ethereum',
        code: 'ETH',
        value: 3243.345,
        image: EthereumCoinIcon
    },
    BIN: {
        name: 'Binance',
        code: 'BIN',
        value: 3243.345,
        image: BinanceCoinIcon
    },
    CRD: {
        name: 'Cordano',
        code: 'CRD',
        value: 3243.345,
        image: CardanoCoinIcon
    },
    DGC: {
        name: 'Dogecoin',
        code: 'DGC',
        value: 3243.345,
        image: DogeCoinIcon
    },
    PKD: {
        name: 'Polkadot',
        code: 'PKD',
        value: 3243.345,
        image: PolkadotCoinIcon
    },
    TTR: {
        name: 'Tether',
        code: 'TTR',
        value: 3243.345,
        image: TetherCoinIcon
    },
    XRP: {
        name: 'XRP',
        code: 'XRP',
        value: 3243.345,
        image: XRPCoinIcon
    }
};

export const watchListCards: WatchListProp[] = [
    {
        cryptoCoin: {
            name: 'Bitcoin',
            symbol: 'BTC',
            price: 32443.89,
            icon: BitCoinIcon,
            id: 'bitcoin',
            change: 1.4,
            marketCap: 0,
            volume: 0,
            circulatingSupply: 0
        },
        GraphProps: {
            opacity: 0.1,
            series: [
                {
                    data: [25, 38, 35, 52, 42, 47]
                }
            ]
        }
    },
    {
        cryptoCoin: {
            name: 'Etherium',
            symbol: 'ETH',
            price: 76443.89,
            icon: EthereumCoinIcon,
            id: 'etherium',
            change: 0.9,
            marketCap: 0,
            volume: 0,
            circulatingSupply: 0
        },
        GraphProps: {
            opacity: 0.1,
            series: [
                {
                    data: [25, 38, 35, 52, 42, 47]
                }
            ]
        }
    },
    {
        cryptoCoin: {
            name: 'XRP',
            symbol: 'XRP',
            price: 98765.89,
            icon: XRPCoinIcon,
            id: 'xrp',
            change: 0,
            marketCap: 0,
            volume: 0,
            circulatingSupply: 0
        },
        GraphProps: {
            opacity: 0.1,
            series: [
                {
                    data: [25, 38, 35, 52, 42, 47]
                }
            ]
        }
    }
];

export const menuItems = [
    { text: 'Dashboard' },
    { text: 'Careers' },
    { text: 'Legal & Privacy' },
    { text: '© 2021 Minet', isBlack: true }
];
export const buttonLabel = 'NEED HELP';
export const aboutBitcoin = `The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis each satoshi is worth 0.00000001 bitcoin.`;
export const resources = [
    {
        src: website,
        name: 'Official Website'
    },
    {
        src: paper,
        name: 'White Paper'
    }
];

export const recentTransactions = [
    {
        index: '1',
        id: 'Bitcoin BTC',
        date: 'June 23',
        type: 'buy',
        status: 'SUCCESS',
        quantity: '-0.0234510 BTC',
        price: '+$34500.00'
    },
    {
        index: '2',
        id: 'Bitcoin BTC',
        date: 'June 23',
        type: 'sell',
        status: 'SUCCESS',
        quantity: '+0.0010 BTC',
        price: '-$34500.00'
    }
];

export const trades: TradeTabProp[] = [
    {
        id: 'bitcoin',
        icon: BitCoin,
        name: 'Bitcoin',
        symbol: 'BTC',
        price: 3285553.73,
        change: 1.06,
        marketCap: 60.1,
        checked: true
    },
    {
        id: 'etherium',
        icon: BitCoin,
        name: 'Ethereum',
        symbol: 'ETH',
        price: 216678.1,
        change: -5.49,
        marketCap: 25.4,
        checked: false
    },
    {
        id: 'ethereum',
        icon: BitCoin,
        name: 'Ethereum 2',
        symbol: 'ETH 2',
        price: 216678.1,
        change: -5.49,
        marketCap: 25.4,
        checked: true
    },
    {
        id: 'tether',
        icon: BitCoin,
        name: 'Tether',
        symbol: 'USDT',
        price: 74.31,
        change: 0.11,
        marketCap: 4.6,
        checked: false
    }
];
export const imageText = `You don’t own any crypto. Send yourself some crypto to get started.`;
export const purchaseMessage = `Purchase is completed, please check your balance in your crypto wallet`;
export const sellMessage = `Sell is completed, please check your balance in your Rupee coin`;
export const footerItems = [
    { text: 'Dashboard' },
    { text: 'Careers' },
    { text: 'Legal & Privacy' },
    { text: '© 2021 Minet', isBlack: true }
];
export const dropDownMenuList = ['24h', '1H', '1W', '1Y', 'ALL'];
export const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

export const menuList = ['ALL', '1W', '1Y', '24h', '1M'];

export const searchPlaceholder = `Search all assets`;

export const totalbalanceLabel = 'Total balance';
export const altEditIcon = 'editIcon';
export const altGridIcon = 'grid-icon';
export const altlistIcon = 'list-icon';
export const altChevronLeft = 'chevronLeft';
export const portfolioLabel = 'My portfolio value';
export const sliderText = '10 coins (3 active)';
export const sliderClickText =
    'Click on currency name below to display it on the graph';
export const assetsLinkText = 'Discover assets';
export const watchlistLinkText = 'View Watchlist';
export const watchListLabel = 'WatchList';
export const altChartIcon = 'chart-icon';
export const altGraphIcon = 'graph-icon';
export const altInfoIcon = 'info-icon';
