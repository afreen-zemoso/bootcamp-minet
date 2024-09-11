import React, { useState } from 'react';
import MuiTextfield, { TextFieldProps } from '@mui/material/TextField';
import { Button } from '@mui/material';
import eye from '../../../../public/assets/images/eye.svg';
import Image from '../Image';
export interface Props extends Omit<TextFieldProps, 'variant'> {
    id: string;
    label?: string;
    type: 'text' | 'password' | 'email';
}

const TextFieldComponent: React.FC<Props> = ({ id, label, type, ...rest }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const toggleShowPassword = (): void => {
        setShowPassword(!showPassword);
    };

    const handleInputType = (): 'text' | 'password' => {
        if (type === 'password') {
            return showPassword ? 'text' : 'password';
        }
        return 'text';
    };

    return (
        <MuiTextfield
            id={id}
            label={label}
            type={handleInputType()}
            InputProps={{
                endAdornment:
                    type === 'password' ? (
                        <Button
                            variant="text"
                            startIcon={<Image src={eye} alt="eye icon" />}
                            disableRipple
                            sx={{
                                padding: 0,
                                minWidth: 0,
                                paddingRight: '8px',
                                '&:hover': {
                                    background: 'none'
                                }
                            }}
                            data-testid="passwordIcon"
                            onClick={toggleShowPassword}
                        />
                    ) : null
            }}
            {...rest}
        />
    );
};

export default TextFieldComponent;
