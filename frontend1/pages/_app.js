import Head from "next/head";

import Layout from "../components/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Note list" />
        <meta
          name="description"
          content="Here you can create notes, edit and delete them"
        />
        <meta
          name="keywords"
          content="notes, react, next, django, ssr, restapi"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
