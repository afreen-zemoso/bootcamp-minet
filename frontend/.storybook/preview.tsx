import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/App.css';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import MinetTheme from '../src/theme';

export const withMuiTheme = (Story) => (
    <ThemeProvider theme={MinetTheme}>
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    </ThemeProvider>
);
export const decorators = [withMuiTheme];

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^(on|handle)[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
};

export default preview;
