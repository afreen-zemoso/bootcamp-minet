import { Card, Grid, Link, styled } from '@mui/material';
import React from 'react';
import MinetTheme from '../../../theme';
import { PortfolioCardList } from '../portfolioCardList';
import { imageText } from '../../../utils/constants';
import TypographyComponent from '../../atoms/Typography';
import WalletCard from '../../molecules/WalletCard';
import ImageWithText from '../../molecules/ImagewithText';
import PlainCard from '../../../../public/assets/images/plaincard.svg';
import { PortfolioDetailListProp } from '../../../utils/interfaces/PortfolioDetailListInterface';
import TransactionCard from '../../molecules/TransactionCard';

export const numberFormat = (price: number) => {
    const num = price | 0;
    const decimals = price.toFixed(2).slice(-2);
    const resultedFormat = `${num.toLocaleString('en-US')}.${decimals}`;
    return resultedFormat;
};
const StyledCard = styled(Card)((props: { width?: string }) => ({
    maxWidth: props.width,
    paddingBottom: '5px',
    boxShadow: 'none',
    border: `1px solid ${MinetTheme.palette.grey[100]}`,
    height: '100%',
    '& .styleTop': {
        paddingTop: MinetTheme.spacing(6),
        background: MinetTheme.palette.primary[100]
    },
    '& .styleHr': {
        border: `1px solid ${MinetTheme.palette.grey[100]}`,
        '&.addSpacing': {
            marginTop: MinetTheme.spacing(3)
        }
    },
    '& .mediumColor': {
        color: MinetTheme.palette.text.mediumEmphasis
    },
    '& .addPaddingBottom': {
        paddingBottom: MinetTheme.spacing(3)
    }
}));
export const PortfolioDetailList = ({ ...props }: PortfolioDetailListProp) => {
    const balance = numberFormat(props.balance);
    const checkLength = props.recentTransactions.length > 0;
    return (
        <StyledCard data-testid="portfolio-detail-list" width={props.width}>
            <div className="styleTop" />
            <PortfolioCardList {...props.portfolioCards} />
            <div style={{ padding: `0 ${MinetTheme.spacing(6)}` }}>
                <Grid container direction="column" rowGap={6}>
                    <Grid item>
                        <hr className="styleHr addSpacing" />
                    </Grid>
                    <Grid item container>
                        <Grid item flexGrow={1} flexShrink={1}>
                            <TypographyComponent
                                variant="body1"
                                className="mediumColor"
                            >
                                Total Balance
                            </TypographyComponent>
                        </Grid>
                        <Grid item>
                            <TypographyComponent variant="body1">
                                ${' ' + balance}
                            </TypographyComponent>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <hr className="styleHr" />
                    </Grid>
                    <Grid item>
                        <WalletCard balance={props.dollerCurrency} />
                    </Grid>
                    <Grid item container>
                        <Grid item flexGrow={1}>
                            <TypographyComponent
                                variant={checkLength ? 'body1' : 'subtitle1'}
                                className="addPaddingBottom"
                            >
                                Recent transactions
                            </TypographyComponent>
                        </Grid>
                        <Grid item>
                            <Link href="/" underline="none">
                                <TypographyComponent variant="caption2">
                                    View All
                                </TypographyComponent>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            {checkLength ? (
                <Grid container direction="column">
                    {props.recentTransactions.map((transaction) => (
                        <TransactionCard
                            {...transaction}
                            key={`${transaction.id}${transaction.date}`}
                        />
                    ))}
                </Grid>
            ) : (
                <ImageWithText
                    image={PlainCard}
                    text={imageText}
                    textColor={MinetTheme.palette.text.mediumEmphasis}
                    textVariant="caption2"
                />
            )}
        </StyledCard>
    );
};
