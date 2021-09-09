import Head from "next/head";
import ContentfulData from "@utils/ContentfulData";
import TeamData from "@utils/TeamData";
import Footer from "@components/Footer";
import Layout from "@components/Layout";
import Streamers from "@components/Streamers";
import RichText from "@components/RichText";
import PageTitle from "@components/PageTitle";

export default function Home({ streamers, page }) {
  return (
    <>
      <Head>
        <title>The Claw Stream Team | Build stuff, learn things, love what you do</title>
        <meta
          name="description"
          content="Build stuff, learn things, love what you do. The Claw is science and technology — for everyone."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>
          <PageTitle title={page.title} />
          <RichText content={page.content.json} />
          <Streamers streamers={streamers} />
        </main>
        <Footer />
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
