import NextNprogress from 'nextjs-progressbar';
import "../styles/index.scss";

export default function App({ Component, pageProps }: any) {
    return <>
        <NextNprogress color="blue" height={3} />
        <Component {...pageProps} />
    </>
}