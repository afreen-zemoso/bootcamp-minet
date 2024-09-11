import { render, screen } from '@testing-library/react';
import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import Header from './index';

it('should render Header', () => {
    render(<Header text={'DashBoard'} />);
    expect(screen.getByText('DashBoard')).toBeInTheDocument();
    expect(screen.getByText('SELL')).toBeInTheDocument();
    expect(screen.getByText('BUY')).toBeInTheDocument();
});
