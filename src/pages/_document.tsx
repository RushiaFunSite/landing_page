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
        <Head />
        <body>
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
