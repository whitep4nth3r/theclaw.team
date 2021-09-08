import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ContentfulData from "@utils/ContentfulData";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function JoinTheTeam({ page }) {
  return (
    <>
      <Head>
        <title>TITLE TODO</title>
        <meta name="description" content="The Code of Conduct for The Claw Stream Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>{page.title}</h1>
        {documentToReactComponents(page.content.json)}
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const page = await ContentfulData.getPageContent("join-the-team");

  return {
    props: {
      page,
    },
    revalidate: 1,
  };
}
