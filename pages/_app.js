import "../src/assets/css/custom.css";
import "../src/assets/css/globals.css";
import Head from "next/head";
import Header from '../src/components/Header';

function MyApp({ Component, pageProps }) {
  const title = 'Abdul Kader | Welcome To My Universe';

  return (
    <div id="page-container" className="pt-[83px]">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
