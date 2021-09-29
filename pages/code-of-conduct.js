import Head from "next/head";
import Footer from "@components/Footer";
import Layout from "@components/Layout";
import ContentfulData from "@utils/ContentfulData";
import RichText from "@components/RichText";
import PageTitle from "@components/PageTitle";
import Config from "@utils/Config";

export default function CodeOfConduct({ page }) {
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
