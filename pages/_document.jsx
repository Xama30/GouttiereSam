import { Html, Head, Main, NextScript } from "next/document";

function resolveDocumentLang(nextData) {
  const locale = String(nextData?.props?.pageProps?.locale || "").toLowerCase();
  const page = String(nextData?.page || "");
  const isEnglishLocale = locale.startsWith("en");
  const isEnglishPage = page === "/en" || page.startsWith("/en/");

  return isEnglishLocale || isEnglishPage ? "en-CA" : "fr-CA";
}

export default function Document(props) {
  const lang = resolveDocumentLang(props?.__NEXT_DATA__);

  return (
    <Html lang={lang}>
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
