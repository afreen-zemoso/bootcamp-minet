import { ThemeProvider } from '@mui/material';
import './App.css';
import MinetTheme from './theme';
import { Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import {
    CASH_WALLET_PATH,
    CURRENCY_DETAILS_PATH,
    DASHBOARD_PATH,
    FORGOT_PATH,
    LOGOUT_PATH,
    PAYMENT_SUCCESS_BUY_PATH,
    PAYMENT_SUCCESS_SELL_PATH,
    PURCHASE_PATH,
    RESET_CODE_PATH,
    RESET_PASSWORD_PATH,
    RESET_SUCCESS_PATH,
    SELL_PATH,
    SIGNIN_PATH,
    SIGNUP_PATH,
    TRADE_PATH,
    WATCHLIST_PATH
} from './utils/routes';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetCodePage from './pages/ResetCodePage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ResetPasswordSuccessPage from './pages/resetPasswordSuccessPage';
import DashboardPage from './pages/DashboardPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import { PurchasePage } from './pages/purchasePage';
import { TradePage } from './pages/tradePage';
import Currency from './pages/CurrencyDetails';
import CashWalletPage from './pages/cashWalletPage';
import SellScreen from './pages/SellScreenPage';
import { RequireAuth } from './redux/authentication/requireAuth';
import { useSelector } from 'react-redux';
import { MinetService } from './utils/MinetService';

const App: React.FC = () => {
    const currentUser = useSelector((state: any) => {
        return state.user.user;
    });
    let userId = 1;
    if (currentUser !== null) {
        userId = currentUser.id;
        MinetService.setToken(currentUser.token);
    }
    return (
        <ThemeProvider theme={MinetTheme}>
            <Routes>
                <Route path={SIGNIN_PATH} element={<SignInPage />} />
                <Route path={SIGNUP_PATH} element={<SignupPage />} />
                <Route path={FORGOT_PATH} element={<ForgotPasswordPage />} />
                <Route path={RESET_CODE_PATH} element={<ResetCodePage />} />
                <Route
                    path={RESET_PASSWORD_PATH}
                    element={<ResetPasswordPage />}
                />
                <Route
                    path={RESET_SUCCESS_PATH}
                    element={<ResetPasswordSuccessPage />}
                />
                <Route
                    path={DASHBOARD_PATH}
                    element={
                        <RequireAuth>
                            <DashboardPage user_id={userId} />
                        </RequireAuth>
                    }
                />
                <Route
                    path={PAYMENT_SUCCESS_BUY_PATH}
                    element={
                        <RequireAuth>
                            <PaymentSuccessPage sell={false} />
                        </RequireAuth>
                    }
                />
                <Route
                    path={PAYMENT_SUCCESS_SELL_PATH}
                    element={
                        <RequireAuth>
                            <PaymentSuccessPage sell={true} />
                        </RequireAuth>
                    }
                />
                <Route
                    path={PURCHASE_PATH}
                    element={
                        <RequireAuth>
                            <PurchasePage user_id={userId} />
                        </RequireAuth>
                    }
                />
                <Route
                    path={SELL_PATH}
                    element={
                        <RequireAuth>
                            <SellScreen user_id={userId} />
                        </RequireAuth>
                    }
                />
                <Route
                    path={TRADE_PATH}
                    element={
                        <RequireAuth>
                            <TradePage tabValue={1} />
                        </RequireAuth>
                    }
                />
                <Route
                    path={WATCHLIST_PATH}
                    element={
                        <RequireAuth>
                            <TradePage tabValue={2} />
                        </RequireAuth>
                    }
                />
                <Route
                    path={CURRENCY_DETAILS_PATH}
                    element={
                        <RequireAuth>
                            <Currency />
                        </RequireAuth>
                    }
                />
                <Route
                    path={CASH_WALLET_PATH}
                    element={
                        <RequireAuth>
                            <CashWalletPage user_id={userId} />
                        </RequireAuth>
                    }
                />
                <Route path={LOGOUT_PATH} element={<SignInPage />} />
            </Routes>
        </ThemeProvider>
    );
};

export default App;
