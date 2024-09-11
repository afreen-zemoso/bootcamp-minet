import { Box, styled } from '@mui/material';
import Image from '../../atoms/Image';
import TypographyComponent from '../../atoms/Typography';
import { TypographyProps } from '@mui/material/Typography';
import theme from '../../../../src/theme';
export interface ImageWithTextProps extends TypographyProps {
    image: string;
    imageHeight?: string;
    imageWidth?: string;
    text: string;
    textVariant: 'caption2';
    textColor: string | undefined;
    textHeight?: string;
    textWidth?: string;
    margin?: string;
    imageandtextgap?: string;
}

const FlexRowBox = styled(Box)((props: { imageandtextgap?: string }) => ({
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    gap: props.imageandtextgap ? props.imageandtextgap : theme.spacing(2.5),
    padding: theme.spacing(6),
    flexDirection: 'column'
}));

const FlexColumnBox = styled(Box)({
    textAlign: 'center',
    maxWidth: theme.spacing(75)
});

const ImageWithText = (props: ImageWithTextProps) => {
    const { image, text, textVariant, textColor, imageandtextgap } = props;
    return (
        <>
            <FlexRowBox
                data-testid="ImageWithText"
                imageandtextgap={imageandtextgap}
            >
                <Image src={image} alt={'image'} />
                <FlexColumnBox>
                    <TypographyComponent
                        variant={textVariant}
                        color={textColor}
                    >
                        {text}
                    </TypographyComponent>
                </FlexColumnBox>
            </FlexRowBox>
        </>
    );
};

export default ImageWithText;
