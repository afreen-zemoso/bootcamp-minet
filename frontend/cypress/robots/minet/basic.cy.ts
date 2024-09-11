import { BaseDependencies, BaseEyes, BaseHands } from '../BaseRobot';
import constants from '../../fixtures/example.json';

export class RobotDependencies extends BaseDependencies {}
export class RobotEyes extends BaseEyes {
    assertIncludeUrl(url: string) {
        cy.url().should('include', `${constants.APP_URL}${url}`);
    }
    checkDom(label: string, value: string) {
        this.seesDomVisible(`[${label}="${value}"]`);
    }
    checkButtonDisabled(value: string) {
        this.seesDomDisabled(`[data-testid="${value}"]`);
    }
    checkButtonEnabled(value: string) {
        this.seesDomEnabled(`[data-testid="${value}"]`);
    }
    assertHelperText(text: string) {
        this.seesDomContainText('p', text);
    }
    checkCryptoCardBorder() {
        cy.get('[data-testid="card"]')
            .eq(1)
            .should('have.css', 'border', '2px solid rgb(0, 82, 255)');
    }
}
export class RobotHands extends BaseHands {
    clickOnButton(label: string, value: string) {
        this.clickOnDomElement(`[${label}="${value}"]`);
    }
}
