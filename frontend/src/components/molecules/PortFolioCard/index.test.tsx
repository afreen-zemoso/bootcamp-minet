import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import BitCoin from '../../../../public/assets/images/coin.svg';
import PortFolioCard from '.';
import { BrowserRouter } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate
}));
const renderWithRouter = (ui: any) => {
    return {
        ...render(ui, { wrapper: BrowserRouter })
    };
};
it('Should render the PortFolioCard', () => {
    renderWithRouter(
        <PortFolioCard
            image={BitCoin}
            id={'bitcoin'}
            name="BitCoin"
            symbol={'BTC'}
            change={1.06}
            price={34500.3}
            currentCardId={'bitcoin'}
            portfolio={true}
        />
    );
    expect(screen.getByText('BitCoin')).toBeInTheDocument();
    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText('+1.06%')).toBeInTheDocument();
    expect(screen.getByText('$34,500.3')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('card'));
});

it('Should render negative change value if change is less than zero', () => {
    renderWithRouter(
        <PortFolioCard
            image={BitCoin}
            id={'bitcoin'}
            symbol={'BTC'}
            change={-0.06}
            price={34500}
            name={'BitCoin'}
            currentCardId={'bitcoin'}
            portfolio={true}
            date={undefined}
        />
    );
    expect(screen.getByText('BitCoin')).toBeInTheDocument();
    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText('-0.06%')).toBeInTheDocument();
    expect(screen.getByText('$34,500.00')).toBeInTheDocument();
});

it('Should render date and chip if the props are passed', () => {
    renderWithRouter(
        <PortFolioCard
            image={BitCoin}
            id={'bitcoin'}
            symbol={'BTC'}
            change={-0.06}
            price={34500}
            name={'BitCoin'}
            currentCardId={'bitcoin'}
            portfolio={false}
            date={{ day: 21, month: 'Feb' }}
            chipLabel={'purchased'}
        />
    );
    expect(screen.getByText('21')).toBeInTheDocument();
    expect(screen.getByText('Feb')).toBeInTheDocument();
    expect(screen.getByText('purchased')).toBeInTheDocument();
});

it('Should render negative change value for sold chip', () => {
    renderWithRouter(
        <PortFolioCard
            image={BitCoin}
            id={'bitcoin'}
            symbol={'BTC'}
            change={-0.06}
            price={34500}
            name={'BitCoin'}
            currentCardId={'bitcoin'}
            portfolio={false}
            date={{ day: 21, month: 'Feb' }}
            chipLabel={'sold'}
        />
    );
    expect(screen.getByText('21')).toBeInTheDocument();
    expect(screen.getByText('Feb')).toBeInTheDocument();
    expect(screen.getByText('sold')).toBeInTheDocument();
});
