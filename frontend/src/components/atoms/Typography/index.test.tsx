import { render, screen } from '@testing-library/react';
import React from 'react';
import TypographyComponent from '.';
import 'jest';
import '@testing-library/jest-dom';

it('should render Typography', () => {
    render(<TypographyComponent variant={'h4'}>Hello</TypographyComponent>);
    const typo = screen.getByText('Hello');
    expect(typo).toBeInTheDocument();
});
