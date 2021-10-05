import Head from 'next/head';
import React, { VFC } from 'react';
import Footer from '../components/organisms/footer/Footer';

type Props = {
  children: React.ReactNode;
};

const Layout: VFC<Props> = (props) => {
  return (
    <div className="font-comfortaa flex flex-col justify-center min-h-screen">
      <Head>
        <title>潤羽るしあファンサイト</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
