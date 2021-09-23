import Head from 'next/head';
import React, { VFC } from 'react';
// TODO: Header, Footerを実装する
// import Footer from '@/components/organisms/footer/Footer';
// import Header from '@/components/organisms/header/Header';

type Props = {
  children: React.ReactNode;
};

const Layout: VFC<Props> = (props) => {
  return (
    <body>
      <div className="font-comfortaa flex flex-col justify-center min-h-screen">
        <Head>
          <title>潤羽るしあファンサイト</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Header /> */}
        <main className="flex flex-col items-center justify-center w-full flex-1">
          {props.children}
        </main>
        {/* <Footer /> */}
      </div>
    </body>
  );
};

export default Layout;
