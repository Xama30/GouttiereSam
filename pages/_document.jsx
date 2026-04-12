import Document, { Html, Head, Main, NextScript } from "next/document";

function resolveHtmlLang(nextData) {
  const locale = String(nextData?.props?.pageProps?.locale || "").toLowerCase();
  if (locale === "en" || locale.startsWith("en-")) {
    return "en-CA";
  }

  const pagePath = String(nextData?.page || "");
  if (pagePath === "/en" || pagePath.startsWith("/en/")) {
    return "en-CA";
  }

  return "fr-CA";
}

export default class MyDocument extends Document {
  render() {
    const htmlLang = resolveHtmlLang(this.props.__NEXT_DATA__);

    return (
      <Html lang={htmlLang}>
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
}
