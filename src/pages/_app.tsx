import React, {useEffect} from 'react';
import {AppProps} from 'next/app';
import Router, {useRouter} from 'next/router';
import '../../styles/globals.css';
import '../../styles/nprogress.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import NProgress from 'nprogress';
import {AuthProvider} from '../contexts/auth';
import Error from './_error';
import * as gtag from '../utils/gtag';

Router.events.on('routeChangeStart', (url) => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({Component, pageProps}: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />
        {pageProps.error ? (
          <Error error={pageProps.error} />
        ) : (
          <Component {...pageProps} />
        )}
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
