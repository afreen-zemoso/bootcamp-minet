import { Grid, Stack, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import theme from '../../../theme';
import { searchPlaceholder, menuList } from '../../../utils/constants';
import DropDownComponent from '../../molecules/Dropdown';
import SearchField from '../../molecules/SearchField';
import WalletTransactions from '../WalletTransactions';
import { WalletTransactionInterface } from '../../../utils/interfaces/WalletTransactionInterface';

interface TransactionListProps {
    transactions: WalletTransactionInterface[];
    onSearchChange: (value: string) => void;
    onTimePeriodChange: (value: string) => void;
    walletBalance?: string;
}

const StyledStack = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
    gap: theme.spacing(2.5),
    width: '100%',
    height: theme.spacing(15),
    backgroundColor: theme.palette.grey[50],
    borderRadius: theme.spacing(1)
}));

const TransactionsList = (props: TransactionListProps) => {
    const { transactions, onSearchChange, onTimePeriodChange, walletBalance } =
        props;
    const [searchValue, onSearchValue] = useState<string>('');
    return (
        <div
            data-testid="transactions-list"
            style={{ marginBottom: theme.spacing(15) }}
        >
            {walletBalance && (
                <StyledStack>
                    <Typography variant="subtitle1">{walletBalance}</Typography>
                </StyledStack>
            )}
            <Grid
                container
                sx={{
                    margin: `${theme.spacing(3)} 0px`,
                    maxHeight: theme.spacing(10)
                }}
            >
                <Grid item sx={{ flexGrow: 1 }} />
                <Grid item sx={{ paddingRight: theme.spacing(3) }}>
                    <SearchField
                        placeholder={searchPlaceholder}
                        filter={true}
                        handleChange={(value: string) => {
                            onSearchChange(value);
                            onSearchValue(value);
                        }}
                        value={searchValue}
                        handleClick={() => {
                            onSearchChange('');
                            onSearchValue('');
                        }}
                    />
                </Grid>
                <Grid item>
                    <DropDownComponent
                        onChange={(duration) => {
                            onTimePeriodChange(duration as string);
                        }}
                        menuList={menuList}
                        backgroundColor="white"
                    />
                </Grid>
            </Grid>
            <WalletTransactions transactions={transactions} />
        </div>
    );
};

export default TransactionsList;
