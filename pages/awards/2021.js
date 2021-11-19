import { NextSeo } from "next-seo";
import ContentfulData from "@utils/ContentfulData";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import Awards from "@components/Awards";
import { IMG_WIDTH, IMG_HEIGHT, generateImageUrlForPage } from "@utils/OpenGraph";

export default function Awards2021({ awardsData }) {
  const page = {
    title: "The Claw Community Awards 2021",
    description:
      "Nominated and voted for by the community — your favourite streamers and community members have been recognised for 2021!",
  };

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
          url: "https://theclaw.team/awards/2021",
          site_name: "The Claw Stream Team",
          type: "website",
          locale: "en_US",
          images: [
            {
              url: imageUrl,
              width: IMG_WIDTH,
              height: IMG_HEIGHT,
              alt: `Open Graph Image for the ${page.title} on theclaw.team`,
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
        <PageTitle title="The Claw Community Awards 2021" />
        <Awards awardsData={awardsData} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const awardsData = await ContentfulData.getAwardNominationsByYear("2021");

  return {
    props: {
      awardsData,
    },
  };
}
