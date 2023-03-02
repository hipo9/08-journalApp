import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { purpleTheme } from './';

export const AppTheme = ({ children }) => {
    return (
		/* El theme={purpleTheme} es el que viene de la carpeta theme y el archivo purpleTheme.js en donde configuramos los colores  */
		<ThemeProvider theme={purpleTheme}>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
