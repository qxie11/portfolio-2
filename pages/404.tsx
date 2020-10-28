import Link from 'next/link';
import Head from 'next/head';

const Page404 = () => (<>
  <Head>
    <title>404</title>
  </Head>
  <h1>This is 404 page</h1>
  <Link href="/">Back to main page</Link>
</>)


export default Page404;