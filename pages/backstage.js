import Head from "next/head";
import Footer from "@components/Footer";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import styles from "@styles/Typography.module.css";
import Config from "@utils/Config";

export default function Backstage() {
  return (
    <>
      <Head>
        <title>
          Backstage
          {Config.pageTitleSuffix}
        </title>
        <meta name="description" content="Backstage area coming soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <PageTitle title="Backstage" />
        <h2 className={styles.typography__h3}>Coming soon for team members 👀</h2>
      </Layout>
    </>
  );
}
