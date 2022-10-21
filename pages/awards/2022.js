import { NextSeo } from "next-seo";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import Awards from "@components/Awards";

import { data } from "@data/awards/2022.js";

import { IMG_WIDTH, IMG_HEIGHT, generateImageUrlForPage } from "@utils/OpenGraph";

export default function Awards2021() {
  const page = {
    title: "The Claw Community Awards 2022",
    description:
      "Nominated and voted for by the community — your favourite streamers and community members have been recognised for 2022!",
  };

  const imageUrl = generateImageUrlForPage({
    pageTitle: page.title,
  });

  return (
    <>
      <NextSeo
        title={page.title}
        description={page.description}
        openGraph={{
          title: page.title,
          description: page.description,
          url: "https://theclaw.team/awards/2022",
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
        <PageTitle title="The Claw Community Awards 2022" />
        <Awards awardsData={data} />
      </Layout>
    </>
  );
}
