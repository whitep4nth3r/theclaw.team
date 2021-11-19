import { NextSeo } from "next-seo";
import ContentfulData from "@utils/ContentfulData";
import TeamData from "@utils/TeamData";
import Layout from "@components/Layout";
import Streamers from "@components/Streamers";
import RichText from "@components/RichText";
import PageTitle from "@components/PageTitle";
import { IMG_WIDTH, IMG_HEIGHT, generateImageUrlForPage } from "@utils/OpenGraph";

export default function Home({ streamers, page }) {
  const imageUrl = generateImageUrlForPage({
    pageTitle: page.title,
  });

  return (
    <>
      <NextSeo
        title={page.title}
        description={page.metaDescription}
        openGraph={{
          title: page.title,
          description: page.metaDescription,
          url: "https://theclaw.team/",
          site_name: "The Claw Stream Team",
          type: "website",
          locale: "en_US",
          images: [
            {
              url: imageUrl,
              width: IMG_WIDTH,
              height: IMG_HEIGHT,
              alt: `Open Graph Image for ${page.title} on theclaw.team`,
            },
          ],
        }}
        twitter={{
          handle: "@whitep4nth3r",
          site: "https://whitep4nth3r.com",
          cardType: "summary_large_image",
        }}
      />

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
