import React from "react";
import { ThemeProvider } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import theme from './theme.provider';

type ThemeProp = {
    children: JSX.Element
}

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}