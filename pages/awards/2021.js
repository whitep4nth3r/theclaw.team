import { NextSeo } from "next-seo";
import ContentfulData from "@utils/ContentfulData";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import Awards from "@components/Awards";

export default function Awards2021({ awardsData }) {
  return (
    <>
      <NextSeo
        title="The Claw Community Awards 2021"
        description="Nominated and voted for by the community — your favourite streamers and community members have been recognised for 2021!"
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
