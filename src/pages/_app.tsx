import React from 'react';
import {AppProps} from 'next/app';
import Router from 'next/router';
import '../../styles/globals.css';
import '../../styles/nprogress.css';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import DefaultLayout from '../components/layouts/DefaultLayout';
import NProgress from 'nprogress';
import {AuthProvider} from '../contexts/auth';
import Error from './_error';

Router.events.on('routeChangeStart', (url) => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({Component, pageProps}: AppProps) => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />
        <DefaultLayout>
          {pageProps.error ? (
            <Error error={pageProps.error} />
          ) : (
            <Component {...pageProps} />
          )}
        </DefaultLayout>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
