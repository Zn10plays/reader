import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {useMemo} from "react";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Box from "@mui/material/Box";

export default function App({ Component, pageProps }: AppProps) {

  const darkTheme = useMemo(() => createTheme({
    palette: {
      mode: 'dark'
    }
  }), [])

  return <ThemeProvider theme={darkTheme}>
    <Box sx={{height: '100vh', bgcolor: 'background.default'}}>
      <Component {...pageProps} />
    </Box>
  </ThemeProvider>
}
