import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr-CA">
      <Head>
        <meta charSet="utf-8" key="charset" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          key="preconnect-gfonts"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
          key="preconnect-gstatic"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
