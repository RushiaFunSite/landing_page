import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '@/styles/globals.scss';
import GoogleAnalytics from '@/components/wrapperComponent/GoogleAnalytics';
import usePageView from '@/hooks/usePageView';
import SEO from '@/components/wrapperComponent/SEO';

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  return (
    <>
      <Head>
        <meta name="theme-color" content="#77d2b8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/favicon192x192.png" />
      </Head>
      <SEO />
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
