import { RobotEyes, RobotHands } from './basic.cy';
export class AuthEyes extends RobotEyes {
    seesButtonDisabled() {
        this.checkButtonDisabled('signin-button');
    }
    seesButtonNotDisabled() {
        this.checkButtonEnabled('signin-button');
    }
}
export class AuthHands extends RobotHands {
    typeTextOnEmail(text: string) {
        this.typeTextonId('email', text);
    }
    typeTextOnPassword(text: string) {
        this.typeTextonId('password', text);
    }
    clickOnSignInButton() {
        this.clickOnButton('data-testid', 'signin-button');
    }
    clickOnLogOut() {
        this.clickOnButton('aria-label', 'logout');
    }
}
