import { NextSeo } from "next-seo";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import styles from "@styles/Typography.module.css";

export default function Backstage() {
  return (
    <>
      <NextSeo
        title={`Backstage${Config.pageTitleSuffix}`}
        description="Backstage area coming soon for team members"
      />

      <Layout>
        <PageTitle title="Backstage" />
        <h2 className={styles.typography__h3}>Coming soon for team members 👀</h2>
      </Layout>
    </>
  );
}
