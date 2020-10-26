import NextNprogress from 'nextjs-progressbar';
import "../styles/index.scss";

export default function App({ Component, pageProps }: any) {
    return <>
        <NextNprogress color="#1cfcdb" height={3} />
        <Component {...pageProps} />
    </>
}