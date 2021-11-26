import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Ribeye&family=Work+Sans:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <meta name="monetization" content="$ilp.uphold.com/J7y7wkRezRYL" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
