import Head from "next/head";
import ContentfulData from "@utils/ContentfulData";
import TeamData from "@utils/TeamData";
import Footer from "@components/Footer";
import Layout from "@components/Layout";
import Streamers from "@components/Streamers";
import RichText from "@components/RichText";
import PageTitle from "@components/PageTitle";

import Config from "@utils/Config";

export default function Home({ streamers, page }) {
  return (
    <>
      <Head>
        <title>
          {page.title}
          {Config.pageTitleSuffix}
        </title>
        <meta name="description" content={page.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
