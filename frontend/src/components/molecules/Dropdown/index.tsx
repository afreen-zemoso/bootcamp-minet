import { MenuItem, Select } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import theme from '../../../theme';
import TypographyComponent from '../../atoms/Typography';
import chevrondown from '../../../../public/assets/icons/Vector.svg';
import { DropDownComponentProps } from '../../../utils/interfaces/DropDownInterface';

const StyledDropDown = styled(Select)(() => ({
    background: 'white',
    '& .MuiSelect-select': {
        height: theme.spacing(5.5),
        padding: `${theme.spacing(2.25)} 0 ${theme.spacing(2)} ${theme.spacing(
            1
        )} !important`
    },
    '& .MuiTypography-root': {
        paddingLeft: `${theme.spacing(2)} !important`
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${theme.palette.grey[100]} !important`,
        padding: 0
    },
    input: {
        '&::placeholder': {
            padding: `${theme.spacing(0)} !important`,
            color: 'textColor.main',
            fontFace: 'body2'
        }
    }
}));

const StyledBox = styled('div')(() => ({
    minWidth: `${theme.spacing(8)}!important`,
    height: theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(0.75),
    marginLeft: 0
}));

const StyledIcon = styled('img')({
    width: theme.spacing(3.25),
    height: theme.spacing(3.25)
});

const DropDownComponent = (props: DropDownComponentProps) => {
    const { menuList } = props;
    return (
        <StyledDropDown
            data-testid="dropDown"
            defaultValue={menuList[0]}
            onChange={(e) => props.onChange(e.target.value)}
            IconComponent={React.memo(DropDownIcon)}
            MenuProps={{
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left'
                },
                transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left'
                }
            }}
        >
            {menuList.map((menuItem) => (
                <MenuItem key={menuItem} value={menuItem}>
                    <TypographyComponent variant="body1">
                        {menuItem}
                    </TypographyComponent>
                </MenuItem>
            ))}
        </StyledDropDown>
    );
};

const DropDownIcon = () => (
    <StyledBox>
        <StyledIcon alt={'chevrondown'} src={chevrondown} />
    </StyledBox>
);

export default DropDownComponent;
