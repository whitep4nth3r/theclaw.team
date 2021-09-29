import { NextSeo } from "next-seo";
import ContentfulData from "@utils/ContentfulData";
import TeamData from "@utils/TeamData";
import Layout from "@components/Layout";
import Streamers from "@components/Streamers";
import RichText from "@components/RichText";
import PageTitle from "@components/PageTitle";

export default function Home({ streamers, page }) {
  return (
    <>
      <NextSeo title={page.title} description={page.metaDescription} />

      <Layout>
        <PageTitle title={page.title} />
        <RichText content={page.content} />
        <Streamers streamers={streamers} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const streamers = await TeamData.getStreamers();
  const page = await ContentfulData.getPageContent("home");

  return {
    props: {
      streamers,
      page,
    },
    revalidate: 1,
  };
}
