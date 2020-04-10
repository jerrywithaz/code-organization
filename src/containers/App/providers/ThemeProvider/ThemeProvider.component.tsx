import React, { FunctionComponent } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

const theme = {};

const ThemeProvider: FunctionComponent = ({
    children
}) => {

    return (
        <StyledComponentsThemeProvider theme={theme}>
            {children}
        </StyledComponentsThemeProvider>
    );

};

export default ThemeProvider;