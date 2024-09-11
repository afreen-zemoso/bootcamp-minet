import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import SearchField from '.';

const testId = 'searchField';

it('Should render the Search Field', () => {
    const onChangeSpy = jest.fn();
    render(
        <SearchField
            placeholder={'Search all assets'}
            filter={false}
            handleChange={onChangeSpy}
        />
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(
        screen.getByPlaceholderText('Search all assets')
    ).toBeInTheDocument();
});

it('Should render the Search and Filter Icons if the filter is true', () => {
    const onChangeSpy = jest.fn();
    const { container } = render(
        <SearchField
            placeholder={'Search all assets'}
            filter={true}
            handleChange={onChangeSpy}
        />
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(
        screen.getByPlaceholderText('Search all assets')
    ).toBeInTheDocument();
    expect(
        container.getElementsByClassName('MuiButton-startIcon')[0]
    ).toBeInTheDocument();
    expect(screen.getByAltText('Search')).toBeInTheDocument();
    expect(screen.getByAltText('Filter')).toBeInTheDocument();
});

it('Should call the onchange method with the changing value of the search field', () => {
    const onChangeSpy = jest.fn();
    render(
        <SearchField
            placeholder={'Search all assets'}
            filter={false}
            handleChange={onChangeSpy}
        />
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'react' }
    });
    expect(onChangeSpy).toHaveBeenCalledWith('react');
});

it('Should have the wrong icon displayed if the value is not empty', () => {
    const onChangeSpy = jest.fn();
    render(
        <SearchField
            placeholder={'Search all assets'}
            filter={false}
            handleChange={onChangeSpy}
            value={'cardiano'}
        />
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByAltText('Wrong')).toBeInTheDocument();
});
