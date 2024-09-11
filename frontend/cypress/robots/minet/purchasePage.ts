import { RobotEyes, RobotHands } from './basic.cy';
export class PurchaseEyes extends RobotEyes {
    checkPage() {
        this.checkDom('data-testid', 'purchase-body');
    }
    checkSliderValue(value: string) {
        cy.get('[data-testid="slider-value"]').should('have.value', value);
    }
}
export class PurchaseHands extends RobotHands {
    clickOnCryptoCard(index: number) {
        this.ClickOnTextWithClassAndIndex('styleCrypto', index);
    }
    clickOnBuyMaxButton() {
        this.clickOnButton('data-testid', 'max-button');
    }
}
