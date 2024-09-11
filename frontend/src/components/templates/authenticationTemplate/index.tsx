import React from 'react';
import { Box, styled } from '@mui/material';
import { AuthenticationTemplateProps } from '../../../utils/interfaces/AuthenticationTemplateInterface';

const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    '& .image': {
        width: '50%',
        maxHeight: '100%'
    }
});

export const AuthenticationTemplate = ({
    body,
    image
}: AuthenticationTemplateProps) => {
    return (
        <StyledBox data-testid="authenticationTemplate">
            <img src={image} alt="image" className="image" />
            <Box
                flexGrow={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                {body}
            </Box>
        </StyledBox>
    );
};
