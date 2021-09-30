import { NextSeo } from "next-seo";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import typography from "@styles/Typography.module.css";

export default function Home() {
  return (
    <>
      <NextSeo title="Unauthorized" description="Unauthorized" />
      <Layout>
        <PageTitle title="403: Access denied" />
        <p className={typography.typography__body}>
          Sorry about that! Log in via Twitch is only available to The Claw Stream Team members.
        </p>
      </Layout>
    </>
  );
}
