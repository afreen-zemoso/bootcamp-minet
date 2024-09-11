import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropDownComponent from '.';

it('should renders drop down component', async () => {
    const menuList = ['Option 1', 'Option 2', 'Option 3'];
    const fn = jest.fn();
    render(
        <DropDownComponent onChange={fn} menuList={menuList} width="77px" />
    );
    const dropDown = screen.getByTestId('dropDown');
    expect(dropDown).toBeInTheDocument();
    if (dropDown.firstChild) {
        fireEvent.keyDown(dropDown.firstChild, { key: 'ArrowDown' });
        await screen.findByText('Option 3');
        const ele = screen.getByText('Option 3');
        fireEvent.click(ele);
        expect(fn).toHaveBeenCalledTimes(1);
        expect(fn).toHaveBeenCalledWith('Option 3');
    }
});
