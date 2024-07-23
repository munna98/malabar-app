// pages/_app.js
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme';
import '../styles/globals.css'
import { UserProvider } from '../src/context/UserContext';
import Head from 'next/head';


export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <UserProvider>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}
