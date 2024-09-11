import { RobotEyes, RobotHands } from './basic.cy';
export class DashboardEyes extends RobotEyes {
    checkWatchlistCards(minimumLength: number) {
        this.seesMinimumNumberOfElementsInDom(
            '[data-testid="WatchListCardsList"]',
            'MuiGrid-item ',
            minimumLength
        );
    }
    assertTitle(text: string) {
        this.seesDomContainText('h6', text);
    }
    seesReportImage() {
        this.checkDom('alt', 'Report');
    }
    seesTransactionImage() {
        this.checkDom('data-testid', 'ImageWithText');
    }
}
export class DashboardHands extends RobotHands {
    clickOnWatchlistAssetsLink() {
        this.clickOnDomElement('[href="/trade"]');
    }
}
