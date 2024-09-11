import { BaseDependencies } from '../robots/BaseRobot';
import { AuthEyes, AuthHands } from '../robots/minet/auth';
import constants from '../fixtures/example.json';
import { DashboardEyes, DashboardHands } from '../robots/minet/dashboard';
import { TradeEyes, TradeHands } from '../robots/minet/tradePage';
import { PurchaseEyes, PurchaseHands } from '../robots/minet/purchasePage';
import { WalletEyes, WalletHands } from '../robots/minet/walletPage';
import { ForgotEyes, ForgotHands } from '../robots/minet/forgotPasswordPage';
const authEyes = new AuthEyes();
const authHands = new AuthHands();
const dependencies = new BaseDependencies();
const dashboardEyes = new DashboardEyes();
const dashboardHands = new DashboardHands();
const tradeEyes = new TradeEyes();
const tradeHands = new TradeHands();
const purchaseEyes = new PurchaseEyes();
const purchaseHands = new PurchaseHands();
const walletEyes = new WalletEyes();
const walletHands = new WalletHands();
const forgotEyes = new ForgotEyes();
const forgotHands = new ForgotHands();
describe(
    'Minet Application for buying and selling the cryptocoins',
    { testIsolation: false },
    () => {
        before(() => {
            dependencies.login();
        });
        it('verify the dashboard page', () => {
            dashboardEyes.seesReportImage();
            dashboardEyes.seesTransactionImage();
            dashboardEyes.checkWatchlistCards(0);
            dashboardEyes.assertTitle('Dashboard');
        });
        it('navigate to trade page and verify adding,deleting cryptocurrencies in watchlist', () => {
            dashboardHands.clickOnWatchlistAssetsLink();
            tradeEyes.checkWatchlistCheckedLength(5);
            tradeHands.clickOnWatchlistCheckBox(0);
            tradeEyes.checkWatchlistCheckedLength(4);
            tradeHands.clickOnWatchlistCheckBox(0);
        });
        it('search the bitcoin in watchlist and click on wrong button in search field', () => {
            dashboardHands.clickOnWatchlistAssetsLink();
            dashboardEyes.assertIncludeUrl('/trade');
            tradeHands.typeOnSearchField('bitcoin');
            tradeEyes.checkWatchlistLength(1);
            tradeHands.clickOnWrongButton();
            tradeEyes.checkWatchlistLength(9);
        });
        it('click on watchlist tab and check the length of cypto currencies is not in the watchlist', () => {
            dashboardHands.clickOnWatchlistAssetsLink();
            tradeHands.clickOnTab(1);
            tradeEyes.checkWatchlistUncheckedLength(0);
        });
        it('verify the currency details page', () => {
            dependencies.accessUrl(`${constants.APP_URL}currency/binance-usd`);
            tradeEyes.assertIncludeUrl('currency/binance-usd');
            tradeHands.wait(2000);
            tradeHands.clickOnTab(1);
            tradeEyes.seesTranasactionListVisible();
        });
        it('verify the purchase page contents and click on buy-max button', () => {
            dependencies.accessUrl(`${constants.APP_URL}purchase/binance-usd`);
            purchaseEyes.checkPage();
            purchaseHands.clickOnCryptoCard(1);
            purchaseEyes.checkCryptoCardBorder();
            purchaseHands.clickOnBuyMaxButton();
            purchaseEyes.checkSliderValue('$15,746.23');
        });
        it('verify the sell page contents and click on buy-max button', () => {
            dependencies.accessUrl(`${constants.APP_URL}sell/cardano`);
            purchaseHands.wait(4000);
            purchaseHands.clickOnCryptoCard(1);
            purchaseEyes.checkCryptoCardBorder();
            purchaseHands.clickOnBuyMaxButton();
            purchaseEyes.checkSliderValue('0.27344507000000023');
        });
        it('verify the wallet page content', () => {
            walletHands.visitPage();
            walletEyes.checkBody();
            walletHands.clickOnLogOut();
            walletEyes.assertIncludeUrl('');
        });
    }
);
describe('provide invalid credentials for sign in and forgot password pages', () => {
    it('sign in for invalid credentials', () => {
        dependencies.accessUrl(constants.APP_URL);
        authEyes.seesButtonDisabled();
        authHands.typeTextOnEmail('@gmail.com');
        authEyes.assertHelperText('Email must follow the validations');
        authHands.typeTextOnPassword('123fjg');
        authEyes.assertHelperText(
            'Password should contain atleast 8 characters'
        );
        authEyes.seesButtonDisabled();
    });
    it('sign in for provide credentials but not in database', () => {
        dependencies.accessUrl(constants.APP_URL);
        authHands.typeTextOnEmail(constants.FAILEMAIL);
        authHands.typeTextOnPassword(constants.FAILPASSWORD);
        authEyes.seesButtonNotDisabled();
        authHands.clickOnSignInButton();
        authEyes.assertHelperText('Wrong credentials');
    });
    it('verify forgot password page and passing invalid email', () => {
        dependencies.accessUrl(constants.APP_URL);
        forgotEyes.assertIncludeUrl('');
        forgotHands.clickOnForgotPassword();
        forgotEyes.seesResendLinkButtonDisabled();
        forgotHands.typeTextOnEmail(constants.FAILEMAIL);
        forgotEyes.isResendLinkButtonNotDisabled();
        forgotHands.clickOnResetButton();
        forgotEyes.assertHelperText('User with this email does not exist');
        forgotHands.clearInput();
    });
    it('passing invalid code in reset code page and check the reset button is disabled', () => {
        dependencies.accessUrl(`${constants.APP_URL}reset-code/will@gmail.com`);
        forgotEyes.seesResendLinkButtonDisabled();
        forgotHands.typeCode(constants.FAILCODE);
        forgotEyes.seesResendLinkButtonDisabled();
    });
    it('should render password do not match on different passwords', () => {
        dependencies.accessUrl(
            `${constants.APP_URL}reset-password/will@gmail.com`
        );
        forgotHands.typeFirstPasswordField(constants.FAILPASSWORD);
        forgotHands.typeLastPasswordField(constants.VALIPASSWORD);
        forgotEyes.seesResendPasswordButtonNotDisabled();
        forgotHands.clickOnResetPasswordButton();
        forgotEyes.assertHelperText('Passwords do not match!');
    });
});
describe('provide valid credentials for sign in and forgot password pages', () => {
    it('sign in for provide valid credentials', () => {
        dependencies.accessUrl(constants.APP_URL);
        authHands.typeTextOnEmail(constants.VALIDEMAIL);
        authHands.typeTextOnPassword(constants.VALIPASSWORD);
        authHands.clickOnSignInButton();
        authHands.wait(2000);
        authEyes.seesPathNameInUrl('/dashboard');
    });
    it('passing valid email in forgot page and navigate to reset code page', () => {
        dependencies.accessUrl(constants.APP_URL);
        forgotHands.clickOnForgotPassword();
        forgotHands.typeTextOnEmail(constants.VALIDEMAIL);
        forgotHands.clickOnResetButton();
    });
    it('passing valid code and navigate to reset password page', () => {
        dependencies.accessUrl(`${constants.APP_URL}reset-code/will@gmail.com`);
        forgotHands.typeCode(constants.CODE);
        forgotEyes.isResendLinkButtonNotDisabled();
        forgotHands.clickOnResetButton();
    });
    it('should render password page and provide same password navigate to sign in page', () => {
        dependencies.accessUrl(
            `${constants.APP_URL}reset-password/will@gmail.com`
        );
        forgotHands.typeFirstPasswordField(constants.VALIPASSWORD);
        forgotHands.typeLastPasswordField(constants.VALIPASSWORD);
        forgotEyes.seesResendPasswordButtonNotDisabled();
        forgotHands.clickOnResetPasswordButton();
        forgotEyes.assertIncludeUrl('');
    });
});
