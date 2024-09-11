import { RobotEyes, RobotHands } from './basic.cy';
export class TradeEyes extends RobotEyes {
    checkWatchlistCheckedLength(length: number) {
        cy.get('[alt="selected star"]').should('have.length', length);
    }
    checkWatchlistLength(length: number) {
        cy.get('[data-testid="trade-tab"]').should('have.length', length);
    }
    checkWatchlistUncheckedLength(length: number) {
        cy.get('[alt="unselected star"]').should('have.length', length);
    }
    seesTranasactionListVisible() {
        this.checkDom('data-testid', 'transactions-list');
    }
}
export class TradeHands extends RobotHands {
    clickOnWatchlistCheckBox(index: number) {
        this.ClickOnTextWithClassAndIndex('PrivateSwitchBase-input', index);
    }
    typeOnSearchField(text: string) {
        this.typeTextonDom('placeholder', 'Search all assets', text);
    }
    clickOnWrongButton() {
        this.clickOnDomElement('[data-testid="wrong-button"]');
    }
    clickOnTab(index: number) {
        this.ClickOnTextWithClassAndIndex('MuiTab-root', index);
    }
    navigateToCurrencyDetailsPage() {
        cy.get('[data-testid="currencyname"]').first().click();
    }
    clickOnText(text: string) {
        cy.contains(text).click({ force: true });
    }
}
