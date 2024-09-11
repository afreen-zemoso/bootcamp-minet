import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypeText {
        lowEmphasis: string;
        mediumEmphasis: string;
        highEmphasis: string;
    }
    interface Palette {
        dropShadow: React.CSSProperties;
        gray: Palette['primary'];
    }

    interface PaletteOptions {
        dropShadow: React.CSSProperties;
        gray: PaletteOptions['primary'];
    }

    interface PaletteColor {
        900: string;
        700: string;
        500: string;
        300: string;
        100: string;
        50: string;
        chipBorder: string;
    }

    interface SimplePaletteColorOptions {
        900?: string;
        700?: string;
        500?: string;
        300?: string;
        100?: string;
        50?: string;
        chipBorder: string;
    }

    interface TypographyVariants {
        button: React.CSSProperties;
        caption1: React.CSSProperties;
        caption2: React.CSSProperties;
        overline: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        button: React.CSSProperties;
        caption1: React.CSSProperties;
        caption2: React.CSSProperties;
        overline: React.CSSProperties;
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        button?: true;
        caption1?: true;
        caption2?: true;
        overline?: true;
    }
}

const MinetTheme = createTheme({
    palette: {
        primary: {
            '100': '#FAFCFF',
            '300': '#CCE3FF',
            '500': '#0052FF',
            '700': '#002EB7',
            '900': '#00177A'
        },
        text: {
            highEmphasis: '#343446',
            mediumEmphasis: '#7D7D89',
            lowEmphasis: '#B2B2B9'
        },
        warning: {
            main: '#ff9800',
            '100': '#FFF6ED',
            '300': '#FFA74F',
            chipBorder: '#F7931A'
        },
        success: {
            '100': '#E9F7EC',
            '500': '#20B03F'
        },
        error: {
            '100': '#F3E6EB',
            '500': '#B71A33'
        },
        grey: {
            '50': '#F2F2F7',
            '100': '#E8E8F7',
            '300': '#B4B4CF',
            '500': '#4B4B60',
            '700': '#252545',
            '900': '#0E0E2E'
        },
        gray: {
            main: '#fff',
            '300': '#D0D5DD',
            '500': '#667085',
            '700': '#344054'
        },
        background: {
            paper: '#FFFFFF'
        },
        dropShadow: {
            background: '#C4C4C4',
            boxShadow: '0px 1px 10px rgba(44, 44, 44, 0.08)'
        }
    },
    typography: {
        fontFamily: 'Graphik',
        h4: {
            fontFamily: 'GraphikMedium',
            fontStyle: 'normal',
            fontSize: '40px',
            fontWeight: 500,
            lineHeight: '54px',
            letterSpacing: '-0.01em'
        },
        h6: {
            fontFamily: 'Graphik',
            fontStyle: 'normal',
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '34px'
        },

        subtitle1: {
            fontFamily: 'GraphikMedium',
            fontStyle: 'normal',
            fontSize: '20px',
            fontWeight: '500',
            lineHeight: '28px',
            letterSpacing: '0.005em'
        },
        subtitle2: {
            fontFamily: 'Graphik',
            fontStyle: 'normal',
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '28px',
            letterSpacing: '0.005em'
        },
        body1: {
            fontFamily: 'GraphikMedium',
            fontStyle: 'normal',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '22px',
            letterSpacing: '0.01em'
        },
        body2: {
            fontFamily: 'Graphik',
            fontStyle: 'normal',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '22px',
            letterSpacing: '0.01em'
        },
        button: {
            fontFamily: 'GraphikMedium',
            fontStyle: 'normal',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '42px',
            letterSpacing: '0.01em',
            textTransform: 'none'
        },
        caption1: {
            fontFamily: 'GraphikMedium',
            fontStyle: 'normal',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '16px',
            letterSpacing: '0.01em'
        },
        caption2: {
            fontFamily: 'Graphik',
            fontStyle: 'normal',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '16px',
            letterSpacing: '0.01em'
        },
        overline: {
            fontFamily: 'Graphik',
            fontStyle: 'normal',
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '14px',
            letterSpacing: '0.005em',
            textTransform: 'none'
        }
    },
    spacing: 4
});

export default MinetTheme;
