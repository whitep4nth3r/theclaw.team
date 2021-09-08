import Head from "next/head";
import ContentfulData from "@utils/ContentfulData";
import TeamData from "@utils/TeamData";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Streamers from "@components/Streamers";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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

      <Header />

      <main>
        <h1>{page.title}</h1>
        {documentToReactComponents(page.content.json)}
        <Streamers streamers={streamers} />
      </main>

      <Footer />
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
