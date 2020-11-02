import NextNprogress from 'nextjs-progressbar';
import Head from 'next/head';
import "../styles/index.scss";

export default function App({ Component, pageProps }: any) {
    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <NextNprogress color="#1cfcdb" height={3} />
        <Component {...pageProps} />
    </>
}