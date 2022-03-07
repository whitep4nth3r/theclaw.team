import { useSession, getSession } from "next-auth/client";
import { NextSeo } from "next-seo";
import ContentfulData from "@utils/ContentfulData";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import PleaseSignIn from "@components/PleaseSignIn";
import RichText from "@components/RichText";
import { IMG_WIDTH, IMG_HEIGHT, generateImageUrlForPage } from "@utils/OpenGraph";

export default function Onboarding({ page }) {
  const [session, loading] = useSession();

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
          url: "https://theclaw.team/onboarding,",
          site_name: "The Claw Stream Team — Onboarding",
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
        <PageTitle title={page.title} />
        {session && <RichText content={page.content} />}
        {!session && <PleaseSignIn />}
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const page = await ContentfulData.getPageContent("onboarding");

  return {
    props: {
      session: await getSession(context),
      page,
    },
  };
}
