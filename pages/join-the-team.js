import { NextSeo } from "next-seo";
import Layout from "@components/Layout";
import ContentfulData from "@utils/ContentfulData";
import RichText from "@components/RichText";
import PageTitle from "@components/PageTitle";
import { IMG_WIDTH, IMG_HEIGHT, generateImageUrlForPage } from "@utils/OpenGraph";

export default function JoinTheTeam({ page }) {
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
          url: "https://theclaw.team/join-the-team",
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
      </Layout>
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
