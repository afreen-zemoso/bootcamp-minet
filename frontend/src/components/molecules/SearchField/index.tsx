import React from 'react';
import { Divider, Stack, TextField, styled } from '@mui/material';
import Image from '../../atoms/Image/index';
import Search from '../../../../public/assets/images/search.svg';
import Filter from '../../../../public/assets/images/filter.svg';
import Wrong from '../../../../public/assets/images/wrong.svg';
import theme from '../../../theme';
import Button from '../../atoms/Button/index';
interface SearchFieldProps {
    placeholder: string;
    filter: boolean;
    handleChange: (value: string) => void;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
    value?: string;
}
const StyledSearchField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        height: '40px',
        borderRadius: '4px',
        paddingRight: '11px',
        backgroundColor: 'white',
        ...theme.typography.body2,
        '&:hover fieldset': {
            border: `1px solid ${theme.palette.grey[100]}`
        }
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${theme.palette.grey[100]} !important`,
        padding: '0px'
    }
});
const SearchField = (props: SearchFieldProps) => {
    const renderSearch = (
        handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined
    ) => {
        return (
            <Button
                startIcon={
                    props.value ? (
                        <Image src={Wrong} alt={'Wrong'} />
                    ) : (
                        <Image src={Search} alt={'Search'} />
                    )
                }
                sx={{
                    '&.MuiButton-outlined': {
                        border: 'none',
                        '&:hover': {
                            background: 'none'
                        }
                    }
                }}
                onClick={handleClick}
                variant="icon-only"
                data-testid="wrong-button"
            />
        );
    };

    const renderFilter = () => {
        return (
            <Image
                alt={'Filter'}
                src={Filter}
                sx={{ paddingTop: theme.spacing(2.5) }}
            />
        );
    };

    const renderSearchFilter = (
        handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined
    ) => {
        return (
            <Stack
                direction="row"
                divider={
                    <Divider orientation="vertical" sx={{ height: '28px' }} />
                }
                spacing={3}
                sx={{ paddingTop: '2px' }}
            >
                {renderSearch(handleClick)}
                {renderFilter()}
            </Stack>
        );
    };

    return (
        <StyledSearchField
            data-testid="searchField"
            placeholder={props.placeholder}
            onChange={(event) => props.handleChange(event.target.value)}
            value={props.value}
            InputProps={{
                endAdornment: props.filter
                    ? renderSearchFilter(props.handleClick)
                    : renderSearch(props.handleClick)
            }}
        />
    );
};

export default SearchField;
