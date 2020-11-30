import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Портфолио Пономарёв Евгений" />
          <meta name="keywords" content="Пономарев Евгений, портфолио, js" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument