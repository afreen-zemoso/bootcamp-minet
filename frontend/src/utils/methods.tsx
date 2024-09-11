import { months, totalbalanceLabel } from './constants';
import successTransaction from '../../public/assets/images/walletRight.svg';
import pending from '../../public/assets/images/pending.svg';
import failed from '../../public/assets/images/failed.svg';
import {
    Transaction,
    WalletTransactionInterface
} from './interfaces/WalletTransactionInterface';

const getMonthValue = (monthName: string): number => {
    const monthIndex = months.findIndex((month) => month === monthName);
    return monthIndex + 1;
};

const getTransactionTypeImage = (status: string) => {
    if (status === 'SUCCESS') return successTransaction;
    else if (status === 'PENDING') return pending;
    else return failed;
};

const getChipLabel = (type: string): string => {
    if (type === 'BUY') return 'purchased';
    else return 'sold';
};

const getTransactionDate = (transactionDate: string) => {
    const date = new Date(transactionDate);
    const formattedDate = date.toLocaleString('default', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    return formattedDate;
};

export const getDateSplit = (date: string) => {
    const [stringday, month, stringyear] = date.split(' ');
    const day = parseInt(stringday);
    const year = parseInt(stringyear);
    return { day: day, month: month, year: year };
};

const date = new Date();

const currentDate = getDateSplit(
    date.toLocaleString('default', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    })
);

export const getFilteredTransactionCondition = (
    transaction: WalletTransactionInterface,
    timePeriod: string
) => {
    const date = getDateSplit(transaction.date);

    if (timePeriod === '1W')
        return (
            date.year === currentDate.year &&
            date.month === currentDate.month &&
            date.day >= currentDate.day - 7
        );
    else if (timePeriod === '1M')
        return (
            date.year === currentDate.year &&
            getMonthValue(date.month) === getMonthValue(currentDate.month) - 1
        );
    else if (timePeriod === '1Y') return date.year === currentDate.year - 1;
    else if (timePeriod === '24h')
        return (
            (date.year === currentDate.year &&
                date.month === currentDate.month &&
                date.day === currentDate.day - 1) ||
            date.day === currentDate.day
        );
};

export const getTransactionObject = (
    transaction: Transaction,
    response: any
) => {
    return {
        id: transaction.id,
        image: getTransactionTypeImage(transaction.status),
        symbol: transaction.description,
        change: transaction.price,
        price: transaction.quantity,
        coinCode: response.symbol,
        name: response.name,
        date: getTransactionDate(transaction.date),
        chipLabel: getChipLabel(transaction.type)
    };
};

export const getTotalBalance = (
    value: number,
    coincode: string,
    price: number
) => {
    return `${totalbalanceLabel} ${value} ${coincode} ($${price.toLocaleString(
        'en-US'
    )})`;
};

export const getCalculatedValue = (value: number) => {
    if (value / 1e12 >= 1) {
        return value / 1e12;
    } else if (value / 1e9 >= 1) {
        return value / 1e9;
    } else if (value / 1e6 >= 1) {
        return value / 1e6;
    }
    return value / 1000;
};
