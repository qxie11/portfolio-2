import NextNprogress from 'nextjs-progressbar';
import "../styles/index.scss";

export default function App({ Component, pageProps }: any) {
    return <>
        <NextNprogress color="#000" height={2} />
        <Component {...pageProps} />
    </>
}