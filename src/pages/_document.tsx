import { Html, Head, Main, NextScript } from "next/document";

const isProduction = true;

const getRobotsMeta = () => {
  return isProduction ? "index, follow" : "noindex, nofollow";
};

export default function Document() {
  return (
    <Html lang="no">
      <Head>
        <meta name="robots" content={getRobotsMeta()} />
        <meta charSet="utf-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
