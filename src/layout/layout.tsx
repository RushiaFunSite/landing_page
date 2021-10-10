import Head from 'next/head';
import React, { VFC } from 'react';
import Footer from '../components/organisms/footer/Footer';

type Props = {
  children: React.ReactNode;
};

const Layout: VFC<Props> = (props) => {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Head>
        <title>潤羽るしあファンサイト</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col flex-1 justify-center items-center w-full">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
