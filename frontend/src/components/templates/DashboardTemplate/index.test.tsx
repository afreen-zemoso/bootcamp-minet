import { render, screen } from '@testing-library/react';
import DashboardTemplate from './index';

describe('Main template Component', () => {
    test('template', () => {
        render(
            <DashboardTemplate
                watchlistText={undefined}
                assetsText={undefined}
                view={undefined}
                window={undefined}
                watchlistCard={undefined}
                portfoliovalue={undefined}
                chart={undefined}
                graph={undefined}
                portfolio={undefined}
                coinText={undefined}
                info={undefined}
                infoText={undefined}
                bitcoinSlider={undefined}
                portfolioCardList={undefined}
                walletCard={undefined}
                transactions={undefined}
            />
        );
        expect(screen.getByTestId('DashboardTemplate')).toBeInTheDocument;
    });
});
