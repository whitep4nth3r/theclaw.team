import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config.js";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps}>
      <DefaultSeo />
    </Component>
  );
}

export default MyApp;
