import { Box, SxProps, Theme, styled } from '@mui/material';

interface ImageProps {
    sx?: SxProps<Theme>;
    className?: string;
    alt: string;
    src: string;
}

const StyledBox = styled(Box)(() => ({
    display: 'inline-block',
    height: 'fit-content',
    width: 'fit-content',
    '& img': {
        display: 'block',
        height: 'auto'
    }
}));

const Image: React.FC<ImageProps> = ({ className, sx, ...rest }) => {
    return (
        <StyledBox data-testid="Image" sx={sx} className={className}>
            <img {...rest} />
        </StyledBox>
    );
};

export default Image;
