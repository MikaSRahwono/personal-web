import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="One‑page portfolio with experience, projects, blogs, and social links." />
        <link rel="icon" href="/favicon.ico" />
        <title>Mika — Personal Site</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
