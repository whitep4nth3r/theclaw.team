import { NextSeo } from "next-seo";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";

export default function Home() {
  return (
    <>
      <NextSeo title="Unauthorized" description="Unauthorized" />
      <Layout>
        <PageTitle title="Unauthorized" />
      </Layout>
    </>
  );
}
