import { BaseDependencies } from '../BaseRobot';
import { RobotEyes, RobotHands } from './basic.cy';
import constants from '../../fixtures/example.json';

const dependencies = new BaseDependencies();
export class WalletEyes extends RobotEyes {
    checkBody() {
        this.checkDom('data-testid', 'transactions-list');
    }
}
export class WalletHands extends RobotHands {
    visitPage() {
        const url = constants.APP_URL;
        dependencies.accessUrl(`${url}cash-wallet`);
    }
    clickOnLogOut() {
        this.clickOnButton('aria-label', 'logout');
    }
}
