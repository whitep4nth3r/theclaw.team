import Head from "next/head";
import Footer from "@components/Footer";
import Layout from "@components/Layout";
import ContentfulData from "@utils/ContentfulData";
import RichText from "@components/RichText";
import PageTitle from "@components/PageTitle";

export default function CodeOfConduct({ page }) {
  return (
    <>
      <Head>
        <title>TITLE TODO</title>
        <meta name="description" content="The Code of Conduct for The Claw Stream Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>
          <PageTitle title={page.title} />
          <RichText content={page.content.json} />
        </main>
        <Footer />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const page = await ContentfulData.getPageContent("code-of-conduct");

  return {
    props: {
      page,
    },
    revalidate: 1,
  };
}
