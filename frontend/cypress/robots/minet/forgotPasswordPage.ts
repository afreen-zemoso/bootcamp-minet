import { RobotEyes, RobotHands } from './basic.cy';
export class ForgotEyes extends RobotEyes {
    seesResendLinkButtonDisabled() {
        this.seesDomDisabled('[data-testid="password-toggle-button"]');
    }
    isResendLinkButtonNotDisabled() {
        this.seesDomEnabled('[data-testid="password-toggle-button"]');
    }
    isResendPasswordButtonDisabled() {
        this.seesDomDisabled('[data-testid="resetpassword-button"]');
    }
    seesResendPasswordButtonNotDisabled() {
        this.seesDomEnabled('[data-testid="resetpassword-button"]');
    }
}
export class ForgotHands extends RobotHands {
    clickOnForgotPassword() {
        this.clickOnDomElement('[href="/forgot-password"]');
    }
    clearInput() {
        cy.get('#email').clear();
    }
    clickOnResetButton() {
        this.clickOnDomElement('[data-testid="password-toggle-button"]');
    }
    clickOnResetPasswordButton() {
        this.clickOnDomElement('[data-testid="resetpassword-button"]');
    }
    typeCode(code: string) {
        this.typeTextonId('code', code);
    }
    typeFirstPasswordField(text: string) {
        cy.get('.MuiInputBase-input').first().type(text);
    }
    typeLastPasswordField(text: string) {
        cy.get('.MuiInputBase-input').last().type(text);
    }
    typeTextOnEmail(text: string) {
        this.typeTextonId('email', text);
    }
}
