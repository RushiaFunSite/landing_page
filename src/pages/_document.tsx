// FIXME: eslint-config-nextのご感知で
// no-document-import-in-pageが発生する
// windowsで開発する際に再現されるらしく
// 11.1.3-canary.7にバージョンに上げることで解消されるようだが
// メジャーバージョンではないためdisableにすることで解決
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja" dir="ltr">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="font-comfortaa">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
  const initialProps = await Document.getInitialProps(ctx);
  return initialProps;
};
