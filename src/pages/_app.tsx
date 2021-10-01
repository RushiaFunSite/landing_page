import type { AppProps } from 'next/app';
import React from 'react';
import '@/styles/globals.scss';
import GoogleAnalytics from '@/components/wrapperComponent/GoogleAnalytics';
import usePageView from '@/hooks/usePageView';

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
